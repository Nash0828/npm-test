<template>
  <div class="scene-wrapper">
    <canvas ref="canvasRef" class="scene-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvasRef = ref(null)

let renderer
let scene
let camera
let controls
let animationId
let resizeHandler

const nodeMeshes = []
const beamLinks = []
const clock = new THREE.Clock()
const FORWARD = new THREE.Vector3(0, 1, 0)
const tempQuaternion = new THREE.Quaternion()

onMounted(() => {
  initScene()
})

onBeforeUnmount(() => {
  cleanup()
})

function initScene() {
  const canvas = canvasRef.value
  if (!canvas) return

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x02060f)
  scene.fog = new THREE.Fog(0x02060f, 50, 180)

  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 400)
  camera.position.set(22, 18, 32)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.minDistance = 12
  controls.maxDistance = 120
  controls.maxPolarAngle = Math.PI * 0.48

  createLights()
  createBackdrop()
  createNodes()
  createLinks()

  resizeHandler = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  window.addEventListener('resize', resizeHandler)

  animate()
}

function createLights() {
  const hemi = new THREE.HemisphereLight(0x60a9ff, 0x02060f, 0.7)
  scene.add(hemi)

  const key = new THREE.DirectionalLight(0xffffff, 1.05)
  key.position.set(18, 30, 16)
  key.castShadow = false
  scene.add(key)

  const fill = new THREE.PointLight(0x1fe5ff, 1.4, 120, 2)
  fill.position.set(-20, 5, -10)
  scene.add(fill)
}

function createBackdrop() {
  const grid = new THREE.GridHelper(160, 60, 0x0f4a7c, 0x072033)
  grid.material.opacity = 0.25
  grid.material.transparent = true
  grid.position.y = -6
  scene.add(grid)

  const starGeometry = new THREE.BufferGeometry()
  const starCount = 900
  const positions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 400
    positions[i * 3 + 1] = Math.random() * 200
    positions[i * 3 + 2] = (Math.random() - 0.5) * 400
  }
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const starMaterial = new THREE.PointsMaterial({
    size: 0.8,
    color: 0x1f6fb2,
    transparent: true,
    opacity: 0.5,
    depthWrite: false
  })
  const stars = new THREE.Points(starGeometry, starMaterial)
  scene.add(stars)
}

function createNodes() {
  const count = 32
  const nodeGeometry = new THREE.SphereGeometry(0.55, 32, 20)

  for (let i = 0; i < count; i += 1) {
    const radius = 10 + Math.random() * 16
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    const position = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      -2 + radius * Math.cos(phi) * 0.7,
      radius * Math.sin(phi) * Math.sin(theta)
    )

    const color = new THREE.Color().setHSL(0.55 + Math.random() * 0.1, 0.75, 0.55)
    const material = new THREE.MeshStandardMaterial({
      color,
      emissive: color.clone().multiplyScalar(0.45),
      emissiveIntensity: 1.4,
      metalness: 0.2,
      roughness: 0.3
    })

    const mesh = new THREE.Mesh(nodeGeometry, material)
    mesh.position.copy(position)
    mesh.scale.setScalar(0.8 + Math.random() * 0.5)
    mesh.castShadow = false
    mesh.receiveShadow = false
    nodeMeshes.push(mesh)
    scene.add(mesh)
  }
}

function createLinks() {
  if (nodeMeshes.length === 0) return

  const linkMaterial = new THREE.MeshBasicMaterial({
    color: 0x1b6bff,
    transparent: true,
    opacity: 0.32,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  const headMaterial = new THREE.MeshBasicMaterial({
    color: 0xfff8ce,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  const tailMaterial = new THREE.MeshBasicMaterial({
    color: 0x4dfdff,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })

  const linkPairs = buildLinkPairs()
  linkPairs.forEach(([aIndex, bIndex]) => {
    const start = nodeMeshes[aIndex].position
    const end = nodeMeshes[bIndex].position
    const control = start.clone().add(end).multiplyScalar(0.5)
    control.y += 2 + Math.random() * 5
    const curve = new THREE.QuadraticBezierCurve3(start.clone(), control, end.clone())

    const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.08, 8, false)
    const tube = new THREE.Mesh(tubeGeometry, linkMaterial.clone())
    tube.frustumCulled = false
    scene.add(tube)

    const beamHead = new THREE.Mesh(new THREE.CapsuleGeometry(0.25, 0.5, 8, 16), headMaterial.clone())
    beamHead.frustumCulled = false
    scene.add(beamHead)

    const beamTail = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.24, 1, 16, true), tailMaterial.clone())
    beamTail.frustumCulled = false
    scene.add(beamTail)

    beamLinks.push({
      curve,
      beamHead,
      beamTail,
      speed: 0.05 + Math.random() * 0.07,
      tailSpan: 0.08 + Math.random() * 0.07,
      offset: Math.random()
    })
  })
}

function buildLinkPairs() {
  const pairs = new Set()
  const result = []

  nodeMeshes.forEach((node, index) => {
    const distances = nodeMeshes
      .map((other, otherIndex) => {
        if (otherIndex === index) {
          return { otherIndex, distance: Infinity }
        }
        return {
          otherIndex,
          distance: node.position.distanceToSquared(other.position)
        }
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 4)

    distances.forEach(({ otherIndex }) => {
      const key = index < otherIndex ? `${index}-${otherIndex}` : `${otherIndex}-${index}`
      if (!pairs.has(key)) {
        pairs.add(key)
        result.push([index, otherIndex])
      }
    })
  })

  return result
}

function animate() {
  animationId = requestAnimationFrame(animate)
  const elapsed = clock.getElapsedTime()

  updateBeams(elapsed)
  controls?.update()
  renderer.render(scene, camera)
}

function updateBeams(elapsed) {
  beamLinks.forEach((link) => {
    const { curve, beamHead, beamTail, speed, tailSpan, offset } = link
    const progress = (elapsed * speed + offset) % 1
    const headPoint = curve.getPointAt(progress)
    const previousPoint = curve.getPointAt(Math.max(progress - 0.002, 0))
    const headVector = headPoint.clone().sub(previousPoint)
    const direction = headVector.lengthSq() === 0 ? FORWARD : headVector.normalize()

    beamHead.position.copy(headPoint)
    beamHead.quaternion.setFromUnitVectors(FORWARD, direction)
    const headScale = 1 + Math.sin((elapsed + offset) * 3) * 0.1
    beamHead.scale.set(headScale, headScale, headScale)

    const tailStart = Math.max(progress - tailSpan, 0)
    const tailPoint = curve.getPointAt(tailStart)
    const segment = headPoint.clone().sub(tailPoint)
    const tailLength = Math.max(segment.length(), 0.05)
    const midPoint = headPoint.clone().add(tailPoint).multiplyScalar(0.5)
    const tailDirection = segment.lengthSq() === 0 ? FORWARD : segment.clone().normalize()
    tempQuaternion.setFromUnitVectors(FORWARD, tailDirection)

    beamTail.position.copy(midPoint)
    beamTail.quaternion.copy(tempQuaternion)
    beamTail.scale.set(1, tailLength, 1)
    beamTail.material.opacity = 0.35 + Math.sin((elapsed + offset) * 4) * 0.25
  })
}

function cleanup() {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeHandler)
  controls?.dispose()
  renderer?.dispose()

  if (scene) {
    scene.traverse((child) => {
      if (child.geometry) {
        child.geometry.dispose()
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => material.dispose())
        } else {
          child.material.dispose()
        }
      }
    })
  }
}
</script>

<style scoped>
.scene-wrapper {
  width: 100%;
  height: 100%;
}

.scene-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
