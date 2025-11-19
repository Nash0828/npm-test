<template>
  <div class="topology-surface">
    <canvas ref="canvasRef" class="topology-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const props = defineProps({
  linkWidth: {
    type: Number,
    default: 0.35,
  },
})

const canvasRef = ref(null)

let renderer
let scene
let camera
let animationId
let resizeObserver
let controls

const nodeStates = []
const linkStates = []
const nodeMap = new Map()
const disposableTextures = []

const PLANE_Y = 0
const NODE_BASE_SCALE = 2.8
const ZOOM = {
  min: 0.65,
  max: 2.1,
  wheelSpeed: 0.0015,
  lerp: 0.12,
}

const random = createDeterministicRandom('force-topology-plane')

const tempForce = new THREE.Vector3()
const tempDir = new THREE.Vector3()

const SIMULATION = {
  repulsion: 32,
  spring: 0.08,
  damping: 0.86,
  centering: 0.015,
  timeStep: 0.6,
  linkDistance: 5.5,
  maxSpeed: 2.2,
}

const NODES = [
  { id: 'gateway', label: '入口网关', color: '#5ecbff', radius: 0.65, mass: 1.1 },
  { id: 'auth', label: '认证中心', color: '#89f4ff', radius: 0.58, mass: 1 },
  { id: 'order', label: '订单服务', color: '#63f2c8', radius: 0.6, mass: 1.1 },
  { id: 'payment', label: '支付服务', color: '#ffbd6b', radius: 0.55, mass: 0.95 },
  { id: 'inventory', label: '库存服务', color: '#ff7aa1', radius: 0.53, mass: 0.95 },
  { id: 'shipping', label: '物流调度', color: '#a882ff', radius: 0.52, mass: 0.9 },
  { id: 'user', label: '用户画像', color: '#9cfab6', radius: 0.5, mass: 0.9 },
  { id: 'recommend', label: '推荐引擎', color: '#f7f48b', radius: 0.5, mass: 0.9 },
  { id: 'monitor', label: '监控告警', color: '#7dd6ff', radius: 0.48, mass: 0.85 },
]

const LINKS = [
  { source: 'gateway', target: 'auth' },
  { source: 'gateway', target: 'order' },
  { source: 'auth', target: 'order' },
  { source: 'order', target: 'payment' },
  { source: 'order', target: 'inventory' },
  { source: 'order', target: 'shipping' },
  { source: 'payment', target: 'monitor' },
  { source: 'payment', target: 'recommend' },
  { source: 'inventory', target: 'monitor' },
  { source: 'inventory', target: 'recommend' },
  { source: 'user', target: 'order' },
  { source: 'user', target: 'recommend' },
  { source: 'shipping', target: 'monitor' },
]

let currentLinkWidth = props.linkWidth
let targetZoom = 1
let currentZoom = 1

onMounted(() => {
  initScene()
})

onBeforeUnmount(() => {
  cleanup()
})

watch(
  () => props.linkWidth,
  (value) => {
    currentLinkWidth = value
    refreshLinkThickness()
  }
)

function initScene() {
  const canvas = canvasRef.value
  if (!canvas) return

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setClearColor(0x000000, 0)

  scene = new THREE.Scene()

  createCamera(canvas)
  createLights()
  createBackdrop()
  createNodes()
  createLinks()
  createControls()

  resizeObserver = new ResizeObserver(() => resizeRenderer())
  resizeObserver.observe(canvas)
  resizeRenderer()
  canvas.addEventListener('wheel', handleWheel, { passive: false })

  animate()
}

function createCamera(canvas) {
  const aspect = (canvas.clientWidth || 1) / (canvas.clientHeight || 1)
  camera = new THREE.PerspectiveCamera(46, aspect, 0.1, 200)
  camera.position.set(0, 14, 28)
  camera.up.set(0, 1, 0)
  camera.lookAt(0, 0, 0)
}

function createControls() {
  if (!camera || !renderer) return
  controls?.dispose()
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.enablePan = false
  controls.enableZoom = false
  controls.rotateSpeed = 0.55
  controls.minPolarAngle = Math.PI / 4
  controls.maxPolarAngle = Math.PI / 1.85
  controls.target.set(0, 0, 0)
  controls.update()
}

function createLights() {
  const hemiLight = new THREE.HemisphereLight(0xb7e3ff, 0x040814, 0.92)
  scene.add(hemiLight)

  const directional = new THREE.DirectionalLight(0xffffff, 0.65)
  directional.position.set(14, 24, 10)
  scene.add(directional)
}

function createBackdrop() {
  const grid = new THREE.GridHelper(60, 60, 0x1a2f44, 0x0c1626)
  grid.position.y = -0.02
  grid.material.opacity = 0.3
  grid.material.transparent = true
  grid.material.depthWrite = false
  scene.add(grid)

  const glow = new THREE.Mesh(
    new THREE.RingGeometry(4, 18, 128),
    new THREE.MeshBasicMaterial({
      color: 0x0a1c2f,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    })
  )
  glow.rotation.x = -Math.PI / 2
  glow.position.y = -0.03
  scene.add(glow)
}

function createNodes() {
  NODES.forEach((node) => {
    const { sprite: nodeSprite, texture: nodeTexture } = createNodeSprite(node)
    nodeSprite.position.set(0, PLANE_Y + 0.05, 0)
    nodeSprite.renderOrder = 10
    scene.add(nodeSprite)
    disposableTextures.push(nodeTexture)

    const angle = random() * Math.PI * 2
    const radius = 3.5 + random() * 4.5
    const position = new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    const velocity = new THREE.Vector3()
    const force = new THREE.Vector3()

    const state = {
      ...node,
      sprite: nodeSprite,
      position,
      velocity,
      force,
    }

    nodeStates.push(state)
    nodeMap.set(node.id, state)
  })
}

function createLinks() {
  const shaftGeometry = new THREE.CylinderGeometry(0.22, 0.22, 1, 28, 1, true)
  shaftGeometry.rotateZ(Math.PI / 2)
  const shaftMaterial = new THREE.MeshStandardMaterial({
    color: 0x5ed3ff,
    roughness: 0.35,
    metalness: 0.3,
    transparent: true,
    opacity: 0.92,
  })

  const arrowGeometry = new THREE.ConeGeometry(0.4, 1, 32, 1)
  arrowGeometry.rotateZ(-Math.PI / 2)
  const arrowMaterial = new THREE.MeshStandardMaterial({
    color: 0xc2f6ff,
    roughness: 0.25,
    metalness: 0.35,
    transparent: true,
    opacity: 0.98,
  })

  LINKS.forEach((link) => {
    const group = new THREE.Group()
    group.position.y = PLANE_Y + 0.01

    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial.clone())
    shaft.renderOrder = 1

    const arrowHead = new THREE.Mesh(arrowGeometry, arrowMaterial.clone())
    arrowHead.renderOrder = 2

    group.add(shaft)
    group.add(arrowHead)
    scene.add(group)

    linkStates.push({
      ...link,
      group,
      shaft,
      arrow: arrowHead,
      source: nodeMap.get(link.source),
      target: nodeMap.get(link.target),
    })
  })
}

function animate() {
  animationId = requestAnimationFrame(animate)
  stepSimulation()
  updateNodes()
  updateLinks()
  updateCameraZoom()
  controls?.update()
  renderer?.render(scene, camera)
}

function stepSimulation() {
  nodeStates.forEach((node) => {
    node.force.set(0, 0, 0)
  })

  for (let i = 0; i < nodeStates.length; i += 1) {
    for (let j = i + 1; j < nodeStates.length; j += 1) {
      const nodeA = nodeStates[i]
      const nodeB = nodeStates[j]

      tempDir.copy(nodeA.position).sub(nodeB.position)
      const distanceSq = Math.max(tempDir.lengthSq(), 0.04)
      const strength = (SIMULATION.repulsion * (nodeA.mass + nodeB.mass)) / distanceSq
      tempDir.normalize()
      tempForce.copy(tempDir).multiplyScalar(strength)

      nodeA.force.add(tempForce)
      nodeB.force.sub(tempForce)
    }
  }

  linkStates.forEach((link) => {
    const source = link.source
    const target = link.target
    if (!source || !target) return

    tempDir.copy(target.position).sub(source.position)
    const distance = Math.max(tempDir.length(), 0.001)
    const desired = SIMULATION.linkDistance
    const displacement = distance - desired
    const strength = SIMULATION.spring * displacement
    tempDir.normalize()

    tempForce.copy(tempDir).multiplyScalar(strength)
    source.force.add(tempForce)
    target.force.sub(tempForce)
  })

  nodeStates.forEach((node) => {
    tempForce.copy(node.position).multiplyScalar(-SIMULATION.centering)
    node.force.add(tempForce)

    node.velocity.addScaledVector(node.force, SIMULATION.timeStep / (node.mass ?? 1))
    node.velocity.multiplyScalar(SIMULATION.damping)

    if (node.velocity.length() > SIMULATION.maxSpeed) {
      node.velocity.setLength(SIMULATION.maxSpeed)
    }

    node.position.addScaledVector(node.velocity, SIMULATION.timeStep)
    node.position.y = 0

    const boundaryX = 14
    const boundaryZ = 9
    node.position.x = THREE.MathUtils.clamp(node.position.x, -boundaryX, boundaryX)
    node.position.z = THREE.MathUtils.clamp(node.position.z, -boundaryZ, boundaryZ)

    node.velocity.y = 0
  })
}

function updateNodes() {
  nodeStates.forEach((node) => {
    node.sprite.position.set(node.position.x, PLANE_Y + 0.05, node.position.z)
  })
}

function updateLinks() {
  linkStates.forEach((link) => {
    const source = link.source
    const target = link.target
    if (!source || !target) return

    tempDir.set(target.position.x - source.position.x, 0, target.position.z - source.position.z)
    const length = tempDir.length()

    if (length < 0.001) {
      link.group.visible = false
      return
    }

    link.group.visible = true
    const yaw = Math.atan2(tempDir.z, tempDir.x)
    const dirX = tempDir.x / length
    const dirZ = tempDir.z / length
    const sourceOffset = Math.max(source.sprite.scale.x * 0.35, 0.25)
    const targetOffset = Math.max(target.sprite.scale.x * 0.35, 0.35)
    const adjustedLength = Math.max(length - sourceOffset - targetOffset, 0.2)
    const startX = source.position.x + dirX * sourceOffset
    const startZ = source.position.z + dirZ * sourceOffset

    link.group.position.set(startX, PLANE_Y + 0.01, startZ)
    link.group.rotation.set(0, yaw, 0)

    const headLength = THREE.MathUtils.clamp(adjustedLength * 0.25, 0.55, 2.4)
    const shaftLength = Math.max(adjustedLength - headLength, headLength * 0.4)
    const thickness = Math.max(currentLinkWidth, 0.12)

    link.shaft.scale.set(shaftLength, thickness, thickness)
    link.shaft.position.set(shaftLength / 2, 0, 0)

    const headRadius = Math.max(thickness * 0.9, 0.28)
    link.arrow.scale.set(headLength, headRadius, headRadius)
    link.arrow.position.set(adjustedLength - headLength / 2, 0, 0)
  })
}

function refreshLinkThickness() {
  updateLinks()
}

function resizeRenderer() {
  if (!renderer || !canvasRef.value) return
  const canvas = canvasRef.value
  const width = canvas.clientWidth || 1
  const height = canvas.clientHeight || 1
  renderer.setSize(width, height, false)

  if (camera) {
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
}

function cleanup() {
  cancelAnimationFrame(animationId)
  resizeObserver?.disconnect()
  canvasRef.value?.removeEventListener('wheel', handleWheel)
  controls?.dispose()
  controls = null

  if (scene) {
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose()
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose && m.dispose())
        } else {
          obj.material.dispose?.()
        }
      }
    })
  }

  disposableTextures.forEach((texture) => texture.dispose())
  disposableTextures.length = 0

  renderer?.dispose()
  renderer = null
  scene = null
  camera = null
  animationId = undefined
  nodeStates.length = 0
  linkStates.length = 0
  nodeMap.clear()
  targetZoom = 1
  currentZoom = 1
}

function createNodeSprite(node) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const center = canvas.width / 2
    const radius = center - 18
    const gradient = ctx.createRadialGradient(center - 20, center - 20, radius * 0.3, center, center, radius)
    gradient.addColorStop(0, '#ffffff')
    gradient.addColorStop(1, node.color)
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(center, center, radius, 0, Math.PI * 2)
    ctx.fill()

    ctx.lineWidth = 8
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)'
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  })

  const sprite = new THREE.Sprite(material)
  const scale = NODE_BASE_SCALE * node.radius
  sprite.scale.set(scale, scale, 1)

  return { sprite, texture }
}


function createDeterministicRandom(seed) {
  const seedGen = xmur3(seed)
  const rng = mulberry32(seedGen())
  return () => rng()
}

function xmur3(str) {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i += 1) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}

function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function handleWheel(event) {
  event.preventDefault()
  targetZoom = THREE.MathUtils.clamp(targetZoom - event.deltaY * ZOOM.wheelSpeed, ZOOM.min, ZOOM.max)
}

function updateCameraZoom() {
  if (!camera) return
  const delta = targetZoom - currentZoom
  if (Math.abs(delta) < 0.0001) return
  currentZoom += delta * ZOOM.lerp
  camera.zoom = currentZoom
  camera.updateProjectionMatrix()
}
</script>

<style scoped>
.topology-surface {
  width: 100%;
  height: 100%;
  position: relative;
}

.topology-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
