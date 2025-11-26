<template>
  <div ref="containerRef" class="trail-wrapper"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const containerRef = ref(null)

let renderer
let scene
let camera
let controls
let resizeHandler
let animationId

const clock = new THREE.Clock()
const flyLines = []

onMounted(() => {
  initScene()
})

onBeforeUnmount(() => {
  cleanup()
})

function initScene() {
  const container = containerRef.value
  if (!container) return

  const width = container.clientWidth || window.innerWidth
  const height = container.clientHeight || window.innerHeight

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(width, height)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.setClearColor(0x01030a, 1)
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x01030a)
  scene.fog = new THREE.Fog(0x01030a, 30, 140)

  camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 400)
  camera.position.set(0, 8, 18)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.45
  controls.maxPolarAngle = Math.PI * 0.48
  controls.minDistance = 6
  controls.maxDistance = 36

  createEnvironment()
  createFlyLines()

  resizeHandler = () => {
    if (!container || !renderer) return
    const newWidth = container.clientWidth || window.innerWidth
    const newHeight = container.clientHeight || window.innerHeight
    camera.aspect = newWidth / newHeight
    camera.updateProjectionMatrix()
    renderer.setSize(newWidth, newHeight)
  }
  window.addEventListener('resize', resizeHandler)

  animate()
}

function createEnvironment() {
  const hemi = new THREE.HemisphereLight(0x3580ff, 0x020409, 0.9)
  scene.add(hemi)

  const dir = new THREE.DirectionalLight(0x4cd8ff, 1.2)
  dir.position.set(6, 18, 10)
  scene.add(dir)

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(1.2, 32, 16),
    new THREE.MeshBasicMaterial({ color: 0x4fe6ff, transparent: true, opacity: 0.2 })
  )
  glow.scale.set(3.6, 0.4, 3.6)
  glow.position.set(0, -2.4, 0)
  scene.add(glow)

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 120, 40, 40),
    new THREE.MeshBasicMaterial({
      color: 0x082042,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    })
  )
  floor.rotation.x = -Math.PI / 2
  floor.position.y = -6
  scene.add(floor)

  scene.add(buildStarField())
}

function buildStarField() {
  const starCount = 800
  const positions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 240
    positions[i * 3 + 1] = Math.random() * 160
    positions[i * 3 + 2] = (Math.random() - 0.5) * 240
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const material = new THREE.PointsMaterial({
    size: 0.04,
    color: 0x7ac6ff,
    transparent: true,
    opacity: 0.8,
    depthWrite: false
  })
  return new THREE.Points(geometry, material)
}

function createFlyLines() {
  const configs = [
    { head: '#9ffbff', tail: '#1b45ff', speed: 0.32, radius: 5.2, twist: 0.6 },
    { head: '#ffc0ff', tail: '#5515ff', speed: 0.24, radius: 4.2, twist: 0.45 },
    { head: '#a9ff78', tail: '#0b6dff', speed: 0.29, radius: 6.0, twist: 0.55 },
    { head: '#ffdf9d', tail: '#ff3b6e', speed: 0.36, radius: 3.8, twist: 0.5 }
  ]

  configs.forEach((config, index) => {
    const line = createFlyLineMesh({
      radius: config.radius,
      twist: config.twist,
      headColor: config.head,
      tailColor: config.tail,
      speed: config.speed,
      timeOffset: Math.random(),
      rotationSpeed: 0.04 + index * 0.015
    })
    flyLines.push(line)
    scene.add(line.mesh)
  })
}

function createFlyLineMesh({ radius, twist, headColor, tailColor, speed, timeOffset, rotationSpeed }) {
  const curve = buildSpiralCurve(radius, twist)
  const geometry = new THREE.TubeGeometry(curve, 420, 0.12, 28, true)

  const uv = geometry.attributes.uv
  const progressArray = new Float32Array(uv.count)
  for (let i = 0; i < uv.count; i += 1) {
    progressArray[i] = uv.array[i * 2 + 1]
  }
  geometry.setAttribute('progress', new THREE.BufferAttribute(progressArray, 1))

  const uniforms = {
    u_time: { value: 0 },
    u_speed: { value: speed },
    u_trail: { value: 0.24 },
    u_headColor: { value: new THREE.Color(headColor) },
    u_tailColor: { value: new THREE.Color(tailColor) },
    u_timeOffset: { value: timeOffset }
  }

  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader,
    fragmentShader,
    side: THREE.DoubleSide
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.frustumCulled = false
  mesh.rotation.y = Math.random() * Math.PI * 2

  return {
    mesh,
    uniforms,
    rotationSpeed,
    baseRotation: mesh.rotation.y
  }
}

const vertexShader = /* glsl */ `
  attribute float progress;
  varying float vProgress;

  void main() {
    vProgress = progress;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float u_time;
  uniform float u_speed;
  uniform float u_trail;
  uniform float u_timeOffset;
  uniform vec3 u_headColor;
  uniform vec3 u_tailColor;
  varying float vProgress;

  float wrapDelta(float head, float progress) {
    float delta = head - progress;
    if (delta < 0.0) {
      delta += 1.0;
    }
    return delta;
  }

  void main() {
    float head = fract((u_time + u_timeOffset) * u_speed);
    float delta = wrapDelta(head, vProgress);

    float trailLength = max(u_trail, 0.02);
    float complementary = clamp(1.0 - (delta / trailLength), 0.0, 1.0);
    float trailMask = smoothstep(0.0, trailLength, trailLength - delta);
    float alpha = pow(trailMask, 1.4);

    vec3 color = mix(u_tailColor, u_headColor, pow(complementary, 0.8));

    if (alpha <= 0.01) discard;
    gl_FragColor = vec4(color, alpha);
  }
`

function buildSpiralCurve(radius = 5, twist = 0.5) {
  const points = []
  const layers = 12
  for (let i = 0; i <= layers; i += 1) {
    const t = i / layers
    const angle = t * Math.PI * 2 * (1.0 + twist)
    const wobble = Math.sin(angle * 0.5) * 0.6
    const currentRadius = radius + wobble
    const x = Math.cos(angle) * currentRadius + (Math.random() - 0.5) * 0.4
    const y = -3 + t * 8 + Math.sin(angle * 0.25) * 0.8
    const z = Math.sin(angle) * currentRadius + (Math.random() - 0.5) * 0.4
    points.push(new THREE.Vector3(x, y, z))
  }
  return new THREE.CatmullRomCurve3(points, true, 'catmullrom', 0.6)
}

function animate() {
  animationId = requestAnimationFrame(animate)
  const elapsed = clock.getElapsedTime()

  flyLines.forEach((line) => {
    line.uniforms.u_time.value = elapsed
    line.mesh.rotation.y = line.baseRotation + elapsed * line.rotationSpeed
  })

  controls?.update()
  renderer?.render(scene, camera)
}

function cleanup() {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeHandler)
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

  flyLines.length = 0
}
</script>

<style scoped>
.trail-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

:deep(canvas) {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
</style>
