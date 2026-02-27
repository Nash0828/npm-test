<template>
  <div class="scene-wrapper">
    <canvas ref="canvasRef" class="scene-canvas"></canvas>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'

const canvasRef = ref(null)

let renderer
let scene
let camera
let orbitControls
let dragControls
let animationId
let resizeHandler

let sourceNode
let targetNode
let line
let lineGeometry
let lineMaterial
let arrowMesh

const UP = new THREE.Vector3(0, 1, 0)
const tmpDir = new THREE.Vector3()
const tmpQuat = new THREE.Quaternion()

const LINE_WIDTH = 0.012
const ARROW_HEIGHT = 1 // 箭头中心点距离 tip 为 0.5，tip 正好落在连线末端
const ARROW_RADIUS = 0.28

const linePositions = new Float32Array(6)

onMounted(() => {
  initScene()
})

onBeforeUnmount(() => {
  cleanup()
})

function initScene() {
  const canvas = canvasRef.value
  if (!canvas) return

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x02060f)
  scene.fog = new THREE.Fog(0x02060f, 35, 160)

  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.set(10, 8, 14)

  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.enableDamping = true
  orbitControls.dampingFactor = 0.08
  orbitControls.minDistance = 6
  orbitControls.maxDistance = 60
  orbitControls.maxPolarAngle = Math.PI * 0.49

  createEnvironment()
  createNodes()
  createLink()
  setupDragging()

  resizeHandler = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    updateLineMaterialResolution(width, height)
  }
  window.addEventListener('resize', resizeHandler)

  updateLink()
  animate()
}

function createEnvironment() {
  const hemi = new THREE.HemisphereLight(0x66a4ff, 0x02060f, 0.75)
  scene.add(hemi)

  const key = new THREE.DirectionalLight(0xffffff, 1.05)
  key.position.set(18, 30, 12)
  scene.add(key)

  const grid = new THREE.GridHelper(80, 40, 0x0f4a7c, 0x072033)
  grid.material.opacity = 0.28
  grid.material.transparent = true
  grid.position.y = -1.2
  scene.add(grid)
}

function createNodes() {
  const nodeGeometry = new THREE.SphereGeometry(0.55, 48, 32)

  const sourceMat = new THREE.MeshStandardMaterial({
    color: 0x63e0ff,
    emissive: 0x1a5b8f,
    emissiveIntensity: 1.2,
    metalness: 0.25,
    roughness: 0.35
  })
  sourceNode = new THREE.Mesh(nodeGeometry, sourceMat)
  sourceNode.position.set(-4, 1.2, 0)
  sourceNode.castShadow = false
  scene.add(sourceNode)

  const targetMat = new THREE.MeshStandardMaterial({
    color: 0x2ce0ff,
    emissive: 0x0f3d7a,
    emissiveIntensity: 1.15,
    metalness: 0.25,
    roughness: 0.35
  })
  targetNode = new THREE.Mesh(nodeGeometry, targetMat)
  targetNode.position.set(4, 1.2, 0)
  targetNode.castShadow = false
  scene.add(targetNode)
}

function createLink() {
  lineGeometry = new LineGeometry()
  lineMaterial = new LineMaterial({
    color: 0x1b6bff,
    linewidth: LINE_WIDTH,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })
  lineMaterial.toneMapped = false
  updateLineMaterialResolution(window.innerWidth, window.innerHeight)

  line = new Line2(lineGeometry, lineMaterial)
  line.frustumCulled = false
  scene.add(line)

  const arrowGeometry = new THREE.ConeGeometry(ARROW_RADIUS, ARROW_HEIGHT, 28, 1)
  const arrowMaterial = new THREE.MeshStandardMaterial({
    color: 0x62f6ff,
    emissive: 0x1f9dff,
    emissiveIntensity: 1.3,
    metalness: 0.1,
    roughness: 0.25
  })
  arrowMesh = new THREE.Mesh(arrowGeometry, arrowMaterial)
  arrowMesh.frustumCulled = false
  scene.add(arrowMesh)
}

function setupDragging() {
  const draggable = [sourceNode, targetNode]
  dragControls = new DragControls(draggable, camera, renderer.domElement)

  dragControls.addEventListener('dragstart', () => {
    if (orbitControls) orbitControls.enabled = false
  })

  dragControls.addEventListener('drag', () => {
    updateLink()
  })

  dragControls.addEventListener('dragend', () => {
    if (orbitControls) orbitControls.enabled = true
    updateLink()
  })
}

function updateLink() {
  if (!sourceNode || !targetNode || !lineGeometry || !arrowMesh) return

  const start = sourceNode.position
  const end = targetNode.position

  linePositions[0] = start.x
  linePositions[1] = start.y
  linePositions[2] = start.z
  linePositions[3] = end.x
  linePositions[4] = end.y
  linePositions[5] = end.z
  lineGeometry.setPositions(linePositions)
  line?.computeLineDistances?.()

  tmpDir.subVectors(end, start)
  const len = tmpDir.length()
  if (len < 1e-6) {
    arrowMesh.visible = false
    return
  }
  arrowMesh.visible = true

  tmpDir.divideScalar(len)
  // ConeGeometry 默认沿 +Y，tip 在 +Y 方向。令 tip 对齐末端，中心点回退 0.5
  arrowMesh.position.copy(end).addScaledVector(tmpDir, -(ARROW_HEIGHT / 2))
  tmpQuat.setFromUnitVectors(UP, tmpDir)
  arrowMesh.quaternion.copy(tmpQuat)
}

function updateLineMaterialResolution(width, height) {
  if (!lineMaterial) return
  const ratio = window.devicePixelRatio || 1
  lineMaterial.resolution.set(width * ratio, height * ratio)
}

function animate() {
  animationId = requestAnimationFrame(animate)
  orbitControls?.update()
  renderer?.render(scene, camera)
}

function cleanup() {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeHandler)

  orbitControls?.dispose?.()
  dragControls?.dispose?.()
  renderer?.dispose?.()

  if (scene) {
    scene.traverse((child) => {
      if (child.geometry) child.geometry.dispose()
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((material) => material.dispose?.())
        } else {
          child.material.dispose?.()
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

