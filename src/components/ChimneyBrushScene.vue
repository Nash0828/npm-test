<template>
  <div class="chimney-wrapper">
    <canvas ref="canvasRef" class="chimney-canvas"></canvas>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvasRef = ref(null)

let renderer
let scene
let camera
let controls
let animationId
let resizeObserver
let clock
let rootGroup

onMounted(() => {
  initScene()
})

onBeforeUnmount(() => {
  cleanup()
})

function initScene() {
  const canvas = canvasRef.value
  if (!canvas) return

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setClearColor(0x030711, 1)
  resizeRendererToDisplaySize(true)

  scene = new THREE.Scene()
  scene.fog = new THREE.Fog(0x030711, 26, 96)

  camera = new THREE.PerspectiveCamera(52, canvas.clientWidth / canvas.clientHeight || 1, 0.1, 200)
  camera.position.set(20, 16, 28)
  camera.lookAt(0, 6, 0)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 12
  controls.maxDistance = 90
  controls.maxPolarAngle = Math.PI * 0.72

  scene.add(new THREE.AmbientLight(0xffffff, 0.5))

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.9)
  keyLight.position.set(18, 26, 8)
  scene.add(keyLight)

  const rimLight = new THREE.PointLight(0x7cc8ff, 0.6, 120)
  rimLight.position.set(-18, 16, -16)
  scene.add(rimLight)

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(48, 80),
    new THREE.MeshStandardMaterial({
      color: 0x040a14,
      roughness: 0.95,
      metalness: 0
    })
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -6
  scene.add(ground)

  const chimneyData = createChimney()
  rootGroup = new THREE.Group()
  rootGroup.add(chimneyData.group)
  rootGroup.add(createBrushStrokes(chimneyData))
  scene.add(rootGroup)

  clock = new THREE.Clock()
  animate()

  resizeObserver = new ResizeObserver(() => resizeRendererToDisplaySize(true))
  resizeObserver.observe(canvas)
}

function createChimney() {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -5.6, 0),
    new THREE.Vector3(-0.6, 1.4, 1.0),
    new THREE.Vector3(0.8, 8.5, -0.7),
    new THREE.Vector3(0.4, 14.8, 0.6)
  ])

  const radius = 3.1
  const tubularSegments = 240
  const radialSegments = 48

  const tubeGeometry = new THREE.TubeGeometry(curve, tubularSegments, radius, radialSegments, false)
  const tubeMaterial = new THREE.MeshStandardMaterial({
    color: 0x617486,
    roughness: 0.72,
    metalness: 0.05,
    side: THREE.DoubleSide
  })
  const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial)

  const glowMaterial = new THREE.MeshStandardMaterial({
    color: 0x8fb6d8,
    roughness: 0.4,
    metalness: 0.25,
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide
  })
  const glowMesh = new THREE.Mesh(
    new THREE.TubeGeometry(curve, tubularSegments, radius * 1.06, radialSegments, false),
    glowMaterial
  )

  const ringMaterial = new THREE.LineBasicMaterial({
    color: 0xa8e1ff,
    transparent: true,
    opacity: 0.65
  })
  const topRing = createEdgeRing(radius * 1.04, curve, 1, ringMaterial)
  const bottomRing = createEdgeRing(radius * 1.06, curve, 0, ringMaterial)

  const group = new THREE.Group()
  group.add(tubeMesh, glowMesh, topRing, bottomRing)

  const frameSegments = tubularSegments
  const frames = curve.computeFrenetFrames(frameSegments, false)

  return {
    group,
    curve,
    frames,
    frameSegments,
    radius
  }
}

function createEdgeRing(radius, curve, t, material) {
  const segments = 96
  const circlePoints = []
  for (let i = 0; i < segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2
    circlePoints.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0))
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(circlePoints)
  const ring = new THREE.LineLoop(geometry, material)

  const point = curve.getPointAt(t)
  const tangent = curve.getTangentAt(t).normalize()
  const baseNormal = new THREE.Vector3(0, 0, 1)
  ring.quaternion.setFromUnitVectors(baseNormal, tangent)
  ring.position.copy(point)

  return ring
}

function createBrushStrokes({ curve, frames, frameSegments, radius }) {
  const group = new THREE.Group()

  const leftStroke = buildStrokeDefinition({
    curve,
    frames,
    frameSegments,
    radius,
    start: 0.1,
    end: 0.88,
    angle: Math.PI * 0.85,
    angleSwing: 0.28,
    radialOffset: 0.16,
    heightOffset: -0.35,
    wobble: 0.18
  })

  const rightStroke = buildStrokeDefinition({
    curve,
    frames,
    frameSegments,
    radius,
    start: 0.18,
    end: 0.94,
    angle: -Math.PI * 0.25,
    angleSwing: -0.34,
    radialOffset: 0.16,
    heightOffset: 0.25,
    wobble: -0.22
  })

  group.add(
    createBrushStrokeMesh({
      ...leftStroke,
      baseWidth: 1.1,
      colorHead: new THREE.Color('#a8f3ff'),
      colorTail: new THREE.Color('#1b6cff'),
      opacity: 0.9
    }),
    createBrushStrokeMesh({
      ...rightStroke,
      baseWidth: 1.0,
      colorHead: new THREE.Color('#ffd7a6'),
      colorTail: new THREE.Color('#ff7b55'),
      opacity: 0.85
    })
  )

  return group
}

function buildStrokeDefinition({
  curve,
  frames,
  frameSegments,
  radius,
  start,
  end,
  angle,
  angleSwing,
  radialOffset,
  heightOffset,
  wobble
}) {
  const points = []
  const steps = 10

  for (let i = 0; i <= steps; i += 1) {
    const t = start + (end - start) * (i / steps)
    const { normal, binormal } = getFrameAt(frames, frameSegments, t)
    const swing = Math.sin(t * Math.PI * 1.1) * angleSwing
    const radial = new THREE.Vector3()
      .addScaledVector(normal, Math.cos(angle + swing))
      .addScaledVector(binormal, Math.sin(angle + swing))
      .normalize()
    const center = curve.getPointAt(t)
    const offset = radius + radialOffset + Math.sin(t * Math.PI * 1.5) * wobble
    const pos = center.clone().addScaledVector(radial, offset)
    pos.y += Math.sin(t * Math.PI) * heightOffset
    points.push(pos)
  }

  const strokeCurve = new THREE.CatmullRomCurve3(points)

  const radialAt = (u) => {
    const t = start + (end - start) * u
    const { normal, binormal } = getFrameAt(frames, frameSegments, t)
    const swing = Math.sin(t * Math.PI * 1.1) * angleSwing
    return new THREE.Vector3()
      .addScaledVector(normal, Math.cos(angle + swing))
      .addScaledVector(binormal, Math.sin(angle + swing))
      .normalize()
  }

  return { curve: strokeCurve, radialAt }
}

function getFrameAt(frames, frameSegments, t) {
  const scaled = t * frameSegments
  const index = Math.min(Math.max(Math.round(scaled), 0), frameSegments)
  return {
    tangent: frames.tangents[index],
    normal: frames.normals[index],
    binormal: frames.binormals[index]
  }
}

function createBrushStrokeMesh({ curve, radialAt, baseWidth, colorHead, colorTail, opacity }) {
  const segments = 160
  const positions = []
  const uvs = []
  const indices = []

  for (let i = 0; i <= segments; i += 1) {
    const t = i / segments
    const point = curve.getPointAt(t)
    const tangent = curve.getTangentAt(t).normalize()
    const radial = radialAt ? radialAt(t) : new THREE.Vector3(point.x, 0, point.z).normalize()
    const widthDir = new THREE.Vector3().crossVectors(tangent, radial).normalize()

    const widthProfile = Math.pow(Math.sin(Math.PI * t), 0.7)
    const width = baseWidth * (0.1 + 0.9 * widthProfile)
    const left = point.clone().addScaledVector(widthDir, width * 0.5)
    const right = point.clone().addScaledVector(widthDir, -width * 0.5)

    positions.push(left.x, left.y, left.z, right.x, right.y, right.z)
    uvs.push(t, 0, t, 1)
  }

  for (let i = 0; i < segments; i += 1) {
    const a = i * 2
    const b = a + 1
    const c = a + 2
    const d = a + 3
    indices.push(a, b, c, b, d, c)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setIndex(indices)
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geometry.computeVertexNormals()

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uColorHead: { value: colorHead },
      uColorTail: { value: colorTail },
      uOpacity: { value: opacity }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform vec3 uColorHead;
      uniform vec3 uColorTail;
      uniform float uOpacity;
      varying vec2 vUv;
      void main() {
        float edge = smoothstep(0.0, 0.12, vUv.y) * smoothstep(0.0, 0.12, 1.0 - vUv.y);
        float tip = smoothstep(0.0, 0.15, vUv.x) * smoothstep(0.0, 0.18, 1.0 - vUv.x);
        float alpha = edge * tip * uOpacity;
        vec3 color = mix(uColorTail, uColorHead, pow(vUv.x, 0.7));
        if (alpha < 0.02) discard;
        gl_FragColor = vec4(color, alpha);
      }
    `
  })

  return new THREE.Mesh(geometry, material)
}

function animate() {
  animationId = requestAnimationFrame(animate)
  const elapsed = clock ? clock.getElapsedTime() : 0
  if (rootGroup) {
    rootGroup.rotation.y = elapsed * 0.08
  }
  controls?.update()
  renderer?.render(scene, camera)
}

function resizeRendererToDisplaySize(updateCamera = false) {
  if (!renderer || !canvasRef.value) return
  const canvas = canvasRef.value
  const width = canvas.clientWidth || 1
  const height = canvas.clientHeight || 1
  renderer.setSize(width, height, false)
  if (updateCamera && camera) {
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
}

function cleanup() {
  cancelAnimationFrame(animationId)
  resizeObserver?.disconnect()
  controls?.dispose()

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

  renderer?.dispose()
  if (renderer?.domElement && renderer.domElement.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
}
</script>

<style scoped>
.chimney-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.chimney-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
