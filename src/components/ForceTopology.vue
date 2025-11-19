<template>
  <div class="topology-surface">
    <canvas ref="canvasRef" class="topology-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  linkWidth: {
    type: Number,
    default: 0.8,
  },
})

const canvasRef = ref(null)

let renderer
let scene
let camera
let animationId
let resizeObserver

const nodeStates = []
const linkStates = []
const nodeMap = new Map()
const disposableTextures = []

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
  { source: 'gateway', target: 'auth', distance: 5.5 },
  { source: 'gateway', target: 'order', distance: 6 },
  { source: 'auth', target: 'order', distance: 4.2 },
  { source: 'order', target: 'payment', distance: 4.6 },
  { source: 'order', target: 'inventory', distance: 4.6 },
  { source: 'order', target: 'shipping', distance: 5 },
  { source: 'payment', target: 'monitor', distance: 4.2 },
  { source: 'payment', target: 'recommend', distance: 5 },
  { source: 'inventory', target: 'monitor', distance: 4.4 },
  { source: 'inventory', target: 'recommend', distance: 4.8 },
  { source: 'user', target: 'order', distance: 4.6 },
  { source: 'user', target: 'recommend', distance: 4.2 },
  { source: 'shipping', target: 'monitor', distance: 4.4 },
]

let currentLinkWidth = props.linkWidth

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
  createBackdrop()
  createNodes()
  createLinks()

  resizeObserver = new ResizeObserver(() => resizeRenderer())
  resizeObserver.observe(canvas)
  resizeRenderer()

  animate()
}

function createCamera(canvas) {
  const aspect = (canvas.clientWidth || 1) / (canvas.clientHeight || 1)
  const viewSize = 14
  const halfHeight = viewSize / 2
  const halfWidth = halfHeight * aspect

  camera = new THREE.OrthographicCamera(-halfWidth, halfWidth, halfHeight, -halfHeight, 0.1, 100)
  camera.position.set(0, 0, 20)
  camera.lookAt(0, 0, 0)
}

function createBackdrop() {
  const grid = new THREE.GridHelper(50, 40, 0x1a2f44, 0x101827)
  grid.rotation.x = Math.PI / 2
  grid.position.z = -0.2
  grid.material.opacity = 0.25
  grid.material.transparent = true
  scene.add(grid)

  const glow = new THREE.Mesh(
    new THREE.RingGeometry(4, 18, 64),
    new THREE.MeshBasicMaterial({
      color: 0x0a1c2f,
      transparent: true,
      opacity: 0.35,
    })
  )
  glow.rotation.x = Math.PI / 2
  glow.position.z = -0.25
  scene.add(glow)
}

function createNodes() {
  const circleGeometry = new THREE.CircleGeometry(0.5, 48)

  NODES.forEach((node) => {
    const material = new THREE.MeshBasicMaterial({
      color: node.color,
      transparent: true,
      opacity: 0.92,
    })

    const mesh = new THREE.Mesh(circleGeometry, material)
    mesh.scale.setScalar(node.radius * 2)
    mesh.position.z = 0.05
    mesh.renderOrder = 10
    scene.add(mesh)

    const { sprite, texture } = createLabelSprite(node.label)
    sprite.position.z = 0.1
    sprite.renderOrder = 11
    scene.add(sprite)
    disposableTextures.push(texture)

    const position = new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, 0)
    const velocity = new THREE.Vector3()
    const force = new THREE.Vector3()

    const state = {
      ...node,
      mesh,
      label: sprite,
      position,
      velocity,
      force,
    }

    nodeStates.push(state)
    nodeMap.set(node.id, state)
  })
}

function createLinks() {
  const shaftGeometry = new THREE.PlaneGeometry(1, 1)
  const shaftMaterial = new THREE.MeshBasicMaterial({
    color: 0x4ba5ff,
    transparent: true,
    opacity: 0.78,
    side: THREE.DoubleSide,
  })

  const arrowGeometry = createArrowHeadGeometry()
  const arrowMaterial = new THREE.MeshBasicMaterial({
    color: 0xb9f6ff,
    transparent: true,
    opacity: 0.95,
    side: THREE.DoubleSide,
  })

  LINKS.forEach((link) => {
    const group = new THREE.Group()
    group.position.z = -0.05

    const shaft = new THREE.Mesh(shaftGeometry, shaftMaterial.clone())
    shaft.position.z = -0.02
    shaft.renderOrder = 1

    const arrowHead = new THREE.Mesh(arrowGeometry, arrowMaterial.clone())
    arrowHead.position.z = -0.01
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

function createArrowHeadGeometry() {
  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(-1, 0.6)
  shape.lineTo(-1, -0.6)
  shape.lineTo(0, 0)

  const geometry = new THREE.ShapeGeometry(shape)
  return geometry
}

function animate() {
  animationId = requestAnimationFrame(animate)
  stepSimulation()
  updateNodes()
  updateLinks()
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
    const desired = link.distance ?? SIMULATION.linkDistance
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
    node.position.z = 0

    const boundary = 14
    node.position.x = THREE.MathUtils.clamp(node.position.x, -boundary, boundary)
    node.position.y = THREE.MathUtils.clamp(node.position.y, -boundary * 0.6, boundary * 0.6)
  })
}

function updateNodes() {
  nodeStates.forEach((node) => {
    node.mesh.position.copy(node.position)

    const labelOffset = node.radius * 1.8 + 0.35
    node.label.position.set(node.position.x, node.position.y + labelOffset, 0.1)
  })
}

function updateLinks() {
  linkStates.forEach((link) => {
    const source = link.source
    const target = link.target
    if (!source || !target) return

    tempDir.copy(target.position).sub(source.position)
    const length = tempDir.length()

    if (length < 0.001) {
      link.group.visible = false
      return
    }

    link.group.visible = true
    const angle = Math.atan2(tempDir.y, tempDir.x)
    link.group.position.set(source.position.x, source.position.y, -0.05)
    link.group.rotation.z = angle

    const headLength = THREE.MathUtils.clamp(length * 0.2, 0.8, 3)
    const shaftLength = Math.max(length - headLength, headLength * 0.6)
    const width = Math.max(currentLinkWidth, 0.2)

    link.shaft.scale.set(shaftLength, width, 1)
    link.shaft.position.set(shaftLength / 2, 0, -0.02)

    const headWidth = width * 1.6
    link.arrow.scale.set(headLength, headWidth, 1)
    link.arrow.position.set(length - headLength * (2 / 3), 0, -0.01)
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
    const aspect = width / height
    const viewSize = 14
    const halfHeight = viewSize / 2
    const halfWidth = halfHeight * aspect
    camera.left = -halfWidth
    camera.right = halfWidth
    camera.top = halfHeight
    camera.bottom = -halfHeight
    camera.updateProjectionMatrix()
  }
}

function cleanup() {
  cancelAnimationFrame(animationId)
  resizeObserver?.disconnect()

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
}

function createLabelSprite(text) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(3, 10, 20, 0.55)'
    ctx.strokeStyle = 'rgba(111, 191, 255, 0.55)'
    ctx.lineWidth = 2
    roundRect(ctx, 20, 36, 216, 56, 18)
    ctx.font = '28px "Inter", "Noto Sans SC", sans-serif'
    ctx.fillStyle = '#e5f4ff'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 4)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
  })

  const sprite = new THREE.Sprite(material)
  sprite.scale.set(3.4, 1.5, 1)

  return { sprite, texture }
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, height / 2, width / 2)
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + width - r, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + r)
  ctx.lineTo(x + width, y + height - r)
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height)
  ctx.lineTo(x + r, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
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
