<template>
  <div class="scene-wrapper">
    <canvas ref="canvasRef" class="scene-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'

const canvasRef = ref(null)

let renderer
let scene
let camera
let controls
let animationId
let resizeHandler

const nodeMeshes = []
const beamLinks = []
const lineMaterials = []
const LINE_WIDTH = 0.012 // Base width for flow beams so they stay legible on 4K
const clock = new THREE.Clock()
const FORWARD = new THREE.Vector3(0, 1, 0)
const tempQuaternion = new THREE.Quaternion()
const dropletGeometry = createDropletGeometry()
const dropletBaseMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x62f6ff,
  emissive: 0x1f9dff,
  emissiveIntensity: 1.35,
  roughness: 0.15,
  metalness: 0.0,
  clearcoat: 0.6,
  transmission: 0.65,
  thickness: 1.1,
  transparent: true,
  opacity: 0.85,
  depthWrite: false,
  blending: THREE.AdditiveBlending
})

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
    updateLineMaterialResolution(width, height)
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
  beamLinks.length = 0
  lineMaterials.length = 0

  const linkPairs = buildLinkPairs()
  linkPairs.forEach(([aIndex, bIndex]) => {
    const start = nodeMeshes[aIndex].position.clone()
    const end = nodeMeshes[bIndex].position.clone()
    const points = buildPolylinePoints(start, end)
    // Cache the polyline metadata once so we can reuse it for the droplet motion
    const polylineMeta = buildPolylineMeta(points)
    const positions = []
    points.forEach((point) => {
      positions.push(point.x, point.y, point.z)
    })

    const geometry = new LineGeometry()
    geometry.setPositions(positions)

    const lineMaterial = new LineMaterial({
      color: 0x1b6bff,
      linewidth: LINE_WIDTH,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    lineMaterial.toneMapped = false
    lineMaterials.push(lineMaterial)

    const polyLine = new Line2(geometry, lineMaterial)
    polyLine.frustumCulled = false
    polyLine.computeLineDistances()
    scene.add(polyLine)

    const droplet = createDropletMesh()
    const initialSample = samplePolyline(polylineMeta, 0)
    droplet.position.copy(initialSample.point)
    if (initialSample.segment) {
      tempQuaternion.setFromUnitVectors(FORWARD, initialSample.segment.direction)
      droplet.quaternion.copy(tempQuaternion)
    }
    scene.add(droplet)

    beamLinks.push({
      polyline: polylineMeta,
      droplet,
      speed: 0.06 + Math.random() * 0.05,
      offset: Math.random()
    })
  })

  updateLineMaterialResolution(window.innerWidth, window.innerHeight)
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

function buildPolylinePoints(start, end) {
  const bendOffset = new THREE.Vector3((Math.random() - 0.5) * 6, 3 + Math.random() * 5, (Math.random() - 0.5) * 6)
  const firstBend = start.clone().lerp(end, 0.33).add(bendOffset)
  const secondBend = start.clone().lerp(end, 0.66).add(bendOffset.clone().multiplyScalar(0.6))
  return [start.clone(), firstBend, secondBend, end.clone()]
}

function buildPolylineMeta(points) {
  const clonedPoints = points.map((point) => point.clone())
  const segments = []
  let totalLength = 0

  for (let i = 0; i < clonedPoints.length - 1; i += 1) {
    const startPoint = clonedPoints[i]
    const endPoint = clonedPoints[i + 1]
    const direction = endPoint.clone().sub(startPoint)
    const length = direction.length()
    const normalizedDirection =
      length === 0 ? new THREE.Vector3().copy(FORWARD) : direction.clone().divideScalar(length)
    segments.push({
      start: startPoint,
      end: endPoint,
      length,
      startDistance: totalLength,
      direction: normalizedDirection
    })
    totalLength += length
  }

  return {
    points: clonedPoints,
    segments,
    totalLength
  }
}

function createDropletMesh() {
  const droplet = new THREE.Mesh(dropletGeometry, dropletBaseMaterial.clone())
  droplet.scale.set(0.65, 1.8, 0.65)
  droplet.frustumCulled = false
  return droplet
}

function samplePolyline(polyline, t) {
  // Returns both the point and the owning segment so we can align tangents precisely at bends
  if (!polyline || polyline.points.length === 0) {
    return {
      point: new THREE.Vector3(),
      segment: null,
      segmentT: 0
    }
  }

  if (polyline.totalLength === 0) {
    const fallbackPoint = polyline.points[polyline.points.length - 1]
    return {
      point: fallbackPoint ? fallbackPoint.clone() : new THREE.Vector3(),
      segment: polyline.segments[polyline.segments.length - 1] ?? null,
      segmentT: 0
    }
  }

  const clampedT = THREE.MathUtils.clamp(t, 0, 1)
  const distanceTarget = clampedT * polyline.totalLength

  for (let i = 0; i < polyline.segments.length; i += 1) {
    const segment = polyline.segments[i]
    const segmentEndDistance = segment.startDistance + segment.length
    if (distanceTarget <= segmentEndDistance || i === polyline.segments.length - 1) {
      const localDistance = distanceTarget - segment.startDistance
      const safeLength = segment.length || 1e-6
      const segmentT = segment.length === 0 ? 0 : localDistance / safeLength
      const point = segment.start.clone().lerp(segment.end, THREE.MathUtils.clamp(segmentT, 0, 1))
      return { point, segment, segmentT }
    }
  }

  const lastSegment = polyline.segments[polyline.segments.length - 1]
  return {
    point: lastSegment.end.clone(),
    segment: lastSegment,
    segmentT: 1
  }
}

function createDropletGeometry() {
  // Revolve a slightly asymmetric outline to emulate a teardrop silhouette
  const profilePoints = []
  const totalHeight = 2
  for (let i = 0; i <= 18; i += 1) {
    const progress = i / 18
    const curvedProgress = Math.pow(progress, 0.75)
    const width = THREE.MathUtils.lerp(0.08, 0.58, Math.sin(curvedProgress * Math.PI))
    const height = progress * totalHeight
    profilePoints.push(new THREE.Vector2(width, height))
  }
  // Sharp tip
  profilePoints.push(new THREE.Vector2(0, totalHeight + 0.3))

  const geometry = new THREE.LatheGeometry(profilePoints, 48)
  geometry.translate(0, -(totalHeight / 2), 0)
  geometry.computeVertexNormals()
  return geometry
}

function updateLineMaterialResolution(width, height) {
  const ratio = window.devicePixelRatio || 1
  lineMaterials.forEach((material) => {
    material.resolution.set(width * ratio, height * ratio)
  })
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
    const { polyline, droplet, speed, offset } = link
    const progress = (elapsed * speed + offset) % 1
    // Sample the polyline with tangent data so the droplet hugs every corner
    const sample = samplePolyline(polyline, progress)
    const headPoint = sample.point
    const direction = sample.segment?.direction ?? FORWARD

    droplet.position.copy(headPoint)
    tempQuaternion.setFromUnitVectors(FORWARD, direction)
    // Slerp yields a softer steering curve instead of an instantaneous snap at bends
    droplet.quaternion.slerp(tempQuaternion, 0.45)

    const stretch = 1.3 + Math.sin((elapsed + offset) * 3.8) * 0.2
    const radiusPulse = 0.65 + Math.sin((elapsed + offset) * 2.6) * 0.08
    droplet.scale.set(radiusPulse, stretch, radiusPulse)
    if (droplet.material && 'emissiveIntensity' in droplet.material) {
      droplet.material.emissiveIntensity = 1.2 + Math.sin((elapsed + offset) * 5) * 0.4
    }
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
