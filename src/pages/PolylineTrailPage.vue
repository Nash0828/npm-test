<template>
  <div class="polyline-page">
    <div ref="canvasHolder" class="scene-layer"></div>

    <section class="hud panel">
      <p class="title">折线拖尾实验</p>
      <p>使用四个固定坐标顺序连成折线：[0,2,0] → [0,1,0] → [1,1,0] → [1,0,0]。</p>
      <p>自定义着色器让亮点沿折线路径循环飞行，并留下平滑的高光拖尾。</p>
      <p>拖拽旋转，滚轮缩放，感受拖尾节奏。</p>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const canvasHolder = ref(null)

let scene
let camera
let renderer
let controls
let animationId
let clock

const uniforms = {
  uTime: { value: 0 },
  uTrailLength: { value: 0.35 },
}

const basePoints = [
  new THREE.Vector3(0, 2, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(1, 1, 0),
  new THREE.Vector3(1, 0, 0),
]

const vertexShader = /* glsl */ `
  attribute float aProgress;
  varying float vProgress;

  void main() {
    vProgress = aProgress;
    vec4 modelPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelPosition;
  }
`

const fragmentShader = /* glsl */ `
  varying float vProgress;
  uniform float uTime;
  uniform float uTrailLength;

  void main() {
    float head = fract(uTime);
    float diff = head - vProgress;
    // 将折线各节点转换成沿路径的距离，diff < 0 时说明节点在头部前方，需要加 1 形成循环
    if (diff < 0.0) {
      diff += 1.0;
    }

    float tail = max(1.0 - diff / uTrailLength, 0.0);
    float glow = pow(tail, 1.4);
    vec3 baseColor = mix(vec3(0.08, 0.32, 0.85), vec3(0.46, 0.96, 1.0), tail);
    vec3 color = baseColor * (0.3 + glow * 0.9);
    float alpha = glow;

    if (alpha < 0.01) discard;

    gl_FragColor = vec4(color, alpha);
  }
`

const initScene = () => {
  if (!canvasHolder.value) return

  const { clientWidth, clientHeight } = canvasHolder.value

  scene = new THREE.Scene()
  scene.background = new THREE.Color('#01030a')
  scene.fog = new THREE.Fog(0x01030a, 6, 22)

  camera = new THREE.PerspectiveCamera(50, clientWidth / clientHeight, 0.1, 100)
  camera.position.set(3, 2.5, 4)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(clientWidth, clientHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  canvasHolder.value.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.target.set(0.5, 1, 0)

  addLights()
  addPolyline()
  addHelpers()

  clock = new THREE.Clock()
  onResize()
  window.addEventListener('resize', onResize)

  animate()
}

// 添加柔和灯光增强立体感
const addLights = () => {
  const ambient = new THREE.AmbientLight(0x335a8a, 0.6)
  const directional = new THREE.DirectionalLight(0x6ad5ff, 0.8)
  directional.position.set(3, 5, 4)

  scene.add(ambient, directional)
}

// 构建折线几何并挂载自定义材质
const addPolyline = () => {
  const positions = new Float32Array(basePoints.length * 3)
  const progress = new Float32Array(basePoints.length)

  basePoints.forEach((point, index) => {
    positions[index * 3] = point.x
    positions[index * 3 + 1] = point.y
    positions[index * 3 + 2] = point.z
    progress[index] = index / (basePoints.length - 1)
  })

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('aProgress', new THREE.BufferAttribute(progress, 1))
  geometry.computeBoundingSphere()

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const trailLine = new THREE.Line(geometry, shaderMaterial)
  scene.add(trailLine)

  // 额外绘制微弱底线方便观察路径
  const baseMaterial = new THREE.LineDashedMaterial({
    color: 0x1b5eff,
    dashSize: 0.18,
    gapSize: 0.1,
    linewidth: 1,
    transparent: true,
    opacity: 0.35,
  })
  const baseLine = new THREE.Line(geometry.clone(), baseMaterial)
  baseLine.computeLineDistances()
  scene.add(baseLine)

  // 用微光球体提示折线顶点位置
  const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16)
  const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x8bd1ff })

  basePoints.forEach((point) => {
    const dot = new THREE.Mesh(nodeGeometry, nodeMaterial)
    dot.position.copy(point)
    scene.add(dot)
  })
}

// 添加地面和坐标辅助线
const addHelpers = () => {
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 12, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 0x041024,
      transparent: true,
      opacity: 0.3,
    })
  )
  plane.rotation.x = -Math.PI / 2
  plane.position.y = -0.01
  scene.add(plane)

  const grid = new THREE.GridHelper(10, 20, 0x123c78, 0x082033)
  grid.position.y = -0.005
  scene.add(grid)
}

const animate = () => {
  const renderLoop = () => {
    const elapsed = clock?.getElapsedTime?.() ?? 0
    uniforms.uTime.value = elapsed * 0.18 // 控制沿折线前进的速度

    controls?.update()
    renderer?.render(scene, camera)

    animationId = requestAnimationFrame(renderLoop)
  }

  animationId = requestAnimationFrame(renderLoop)
}

const onResize = () => {
  if (!canvasHolder.value || !renderer || !camera) return

  const { clientWidth, clientHeight } = canvasHolder.value
  camera.aspect = clientWidth / clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(clientWidth, clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

onMounted(() => {
  initScene()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  if (animationId) cancelAnimationFrame(animationId)

  controls?.dispose()
  renderer?.dispose()

  if (renderer?.domElement && canvasHolder.value?.contains(renderer.domElement)) {
    canvasHolder.value.removeChild(renderer.domElement)
  }
})
</script>

<style scoped>
.polyline-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top, #06234c, #030711 60%);
  overflow: hidden;
}

.scene-layer {
  width: 100%;
  height: 100vh;
}

.hud {
  position: fixed;
  left: 24px;
  bottom: 24px;
  padding: 18px 22px;
  max-width: 360px;
  border-radius: 16px;
  background: rgba(3, 8, 20, 0.75);
  color: #e0f6ff;
  font-size: 14px;
  line-height: 1.6;
  pointer-events: none;
  z-index: 10;
  box-shadow: 0 18px 40px rgba(2, 8, 20, 0.55);
}

.title {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
</style>
