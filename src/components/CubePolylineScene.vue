<template>
  <div class="scene-wrapper">
    <canvas ref="canvasRef" class="scene-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'

const canvasRef = ref(null)

const CUBE_SIZE = 2.4
const NODE_HEIGHT = CUBE_SIZE * 0.5
const LINK_HEIGHT = NODE_HEIGHT
const CLEARANCE = CUBE_SIZE * 0.65
const LINE_WIDTH = 0.01
const OFFSET_STEPS = [4, -4, 7, -7, 11, -11]

const nodeConfigs = [
  { id: 'alpha', label: 'Alpha', position: new THREE.Vector3(-16, NODE_HEIGHT, -12), color: 0x3dd4ff },
  { id: 'beta', label: 'Beta', position: new THREE.Vector3(-6, NODE_HEIGHT, -9), color: 0x4fc3ff },
  { id: 'gamma', label: 'Gamma', position: new THREE.Vector3(6, NODE_HEIGHT, -10), color: 0x5da8ff },
  { id: 'delta', label: 'Delta', position: new THREE.Vector3(-14, NODE_HEIGHT, 3), color: 0x3bd3b4 },
  { id: 'epsilon', label: 'Epsilon', position: new THREE.Vector3(0, NODE_HEIGHT, 0), color: 0x2fd6c4 },
  { id: 'zeta', label: 'Zeta', position: new THREE.Vector3(14, NODE_HEIGHT, 4), color: 0x39e0a4 },
  { id: 'eta', label: 'Eta', position: new THREE.Vector3(-4, NODE_HEIGHT, 11), color: 0x5cd7ff },
  { id: 'theta', label: 'Theta', position: new THREE.Vector3(12, NODE_HEIGHT, 12), color: 0x7be4ff }
]

const connections = [
  ['alpha', 'beta'],
  ['beta', 'epsilon'],
  ['epsilon', 'zeta'],
  ['gamma', 'epsilon'],
  ['delta', 'alpha'],
  ['delta', 'eta'],
  ['eta', 'epsilon'],
  ['eta', 'theta'],
  ['gamma', 'theta']
]

let renderer
let scene
let camera
let controls
let animationId
let resizeHandler

const nodes = new Map()
const nodeBounds = []
const polylines = []
const lineMaterials = []

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

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x02050b)
  scene.fog = new THREE.Fog(0x02050b, 40, 150)

  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200)
  camera.position.set(30, 28, 30)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.maxPolarAngle = Math.PI * 0.49
  controls.minDistance = 12
  controls.maxDistance = 90

  createEnvironment()
  createNodes()
  createPolylines()

  resizeHandler = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    updateLineMaterialResolution(width, height)
  }
  window.addEventListener('resize', resizeHandler)

  animate()
}

function createEnvironment() {
  const hemi = new THREE.HemisphereLight(0x60a6ff, 0x03060d, 0.8)
  scene.add(hemi)

  const dir = new THREE.DirectionalLight(0xffffff, 0.95)
  dir.position.set(20, 35, 18)
  dir.castShadow = true
  dir.shadow.mapSize.set(1024, 1024)
  scene.add(dir)

  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 160),
    new THREE.MeshStandardMaterial({
      color: 0x040b16,
      metalness: 0.15,
      roughness: 0.85
    })
  )
  plane.rotation.x = -Math.PI / 2
  plane.position.y = 0
  plane.receiveShadow = true
  scene.add(plane)

  const grid = new THREE.GridHelper(160, 40, 0x0f2b42, 0x0b1a2b)
  grid.material.opacity = 0.35
  grid.material.transparent = true
  grid.position.y = 0.01
  scene.add(grid)
}

function createNodes() {
  const geometry = new THREE.BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE)

  nodeConfigs.forEach((config) => {
    const material = new THREE.MeshStandardMaterial({
      color: config.color,
      emissive: new THREE.Color(config.color).multiplyScalar(0.35),
      metalness: 0.4,
      roughness: 0.35
    })

    const cube = new THREE.Mesh(geometry, material)
    cube.position.copy(config.position)
    cube.castShadow = true
    cube.receiveShadow = true

    scene.add(cube)
    nodes.set(config.id, { ...config, mesh: cube })
    nodeBounds.push({
      id: config.id,
      minX: config.position.x - CUBE_SIZE / 2 - CLEARANCE,
      maxX: config.position.x + CUBE_SIZE / 2 + CLEARANCE,
      minZ: config.position.z - CUBE_SIZE / 2 - CLEARANCE,
      maxZ: config.position.z + CUBE_SIZE / 2 + CLEARANCE
    })
  })
}

function createPolylines() {
  connections.forEach(([startId, endId]) => {
    const startNode = nodes.get(startId)
    const endNode = nodes.get(endId)
    if (!startNode || !endNode) return

    const points = buildOrthogonalPath(startNode.position, endNode.position, startId, endId)
    const positions = []
    points.forEach((point) => {
      positions.push(point.x, point.y, point.z)
    })

    const geometry = new LineGeometry()
    geometry.setPositions(positions)

    const material = new LineMaterial({
      color: 0x2ce0ff,
      linewidth: LINE_WIDTH,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      dashed: false,
      blending: THREE.AdditiveBlending
    })
    material.toneMapped = false
    lineMaterials.push(material)

    const polyLine = new Line2(geometry, material)
    polyLine.frustumCulled = false
    polyLine.computeLineDistances()
    scene.add(polyLine)
    polylines.push(polyLine)
  })

  updateLineMaterialResolution(window.innerWidth, window.innerHeight)
}

function buildOrthogonalPath(start, end, startId, endId) {
  const start2 = new THREE.Vector2(start.x, start.z)
  const end2 = new THREE.Vector2(end.x, end.z)
  const skip = new Set([startId, endId])

  const candidates = generateCandidatePaths(start2, end2)
  for (const candidate of candidates) {
    const cleaned = compressPoints(candidate)
    if (pathIsClear(cleaned, skip)) {
      return cleaned.map((point) => new THREE.Vector3(point.x, LINK_HEIGHT, point.y))
    }
  }

  // Fallback: simple L path (last candidate)
  return [
    new THREE.Vector3(start.x, LINK_HEIGHT, start.z),
    new THREE.Vector3(end.x, LINK_HEIGHT, start.z),
    new THREE.Vector3(end.x, LINK_HEIGHT, end.z)
  ]
}

function generateCandidatePaths(start, end) {
  const candidates = [
    [start.clone(), new THREE.Vector2(end.x, start.y), end.clone()],
    [start.clone(), new THREE.Vector2(start.x, end.y), end.clone()]
  ]

  OFFSET_STEPS.forEach((offset) => {
    candidates.push([
      start.clone(),
      new THREE.Vector2(start.x + offset, start.y),
      new THREE.Vector2(start.x + offset, end.y),
      end.clone()
    ])
    candidates.push([
      start.clone(),
      new THREE.Vector2(start.x, start.y + offset),
      new THREE.Vector2(end.x, start.y + offset),
      end.clone()
    ])
  })

  OFFSET_STEPS.forEach((offsetX) => {
    OFFSET_STEPS.forEach((offsetZ) => {
      candidates.push([
        start.clone(),
        new THREE.Vector2(start.x + offsetX, start.y),
        new THREE.Vector2(start.x + offsetX, end.y + offsetZ),
        new THREE.Vector2(end.x, end.y + offsetZ),
        end.clone()
      ])
    })
  })

  return candidates
}

function compressPoints(points) {
  const result = []
  points.forEach((point) => {
    if (result.length === 0) {
      result.push(point.clone())
      return
    }

    const last = result[result.length - 1]
    if (last.distanceTo(point) < 1e-3) {
      return
    }

    if (result.length >= 2) {
      const prev = result[result.length - 2]
      const sameX =
        Math.abs(prev.x - last.x) < 1e-3 && Math.abs(last.x - point.x) < 1e-3
      const sameY =
        Math.abs(prev.y - last.y) < 1e-3 && Math.abs(last.y - point.y) < 1e-3
      if (sameX || sameY) {
        result[result.length - 1] = point.clone()
        return
      }
    }

    result.push(point.clone())
  })

  return result
}

function pathIsClear(points, skipIds) {
  for (let i = 0; i < points.length - 1; i += 1) {
    const start = points[i]
    const end = points[i + 1]
    if (segmentHitsObstacle(start, end, skipIds)) {
      return false
    }
  }
  return true
}

function segmentHitsObstacle(start, end, skipIds) {
  const isVertical = Math.abs(start.x - end.x) < 1e-4
  const isHorizontal = Math.abs(start.y - end.y) < 1e-4

  if (!isVertical && !isHorizontal) {
    return true
  }

  for (const bounds of nodeBounds) {
    if (skipIds.has(bounds.id)) continue
    if (isVertical) {
      const x = start.x
      if (x < bounds.minX || x > bounds.maxX) continue
      const segMin = Math.min(start.y, end.y)
      const segMax = Math.max(start.y, end.y)
      if (segMax >= bounds.minZ && segMin <= bounds.maxZ) {
        return true
      }
    } else {
      const z = start.y
      if (z < bounds.minZ || z > bounds.maxZ) continue
      const segMin = Math.min(start.x, end.x)
      const segMax = Math.max(start.x, end.x)
      if (segMax >= bounds.minX && segMin <= bounds.maxX) {
        return true
      }
    }
  }

  return false
}

function updateLineMaterialResolution(width, height) {
  const ratio = window.devicePixelRatio || 1
  lineMaterials.forEach((material) => {
    material.resolution.set(width * ratio, height * ratio)
  })
}

function animate() {
  animationId = requestAnimationFrame(animate)
  controls?.update()
  renderer?.render(scene, camera)
}

function cleanup() {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeHandler)
  controls?.dispose()
  renderer?.dispose()

  polylines.forEach((line) => {
    line.geometry?.dispose()
  })
  lineMaterials.forEach((material) => material.dispose())

  if (scene) {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry?.dispose()
        disposeMaterial(child.material)
      }
    })
  }
}

function disposeMaterial(material) {
  if (!material) return
  if (Array.isArray(material)) {
    material.forEach((mat) => disposeMaterial(mat))
    return
  }
  material.dispose?.()
}
</script>

<style scoped>
.scene-wrapper {
  width: 100%;
  height: 100%;
}

.scene-canvas {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>
