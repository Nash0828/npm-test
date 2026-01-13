<template>
  <div class="grid-wrapper">
    <canvas ref="canvasRef" class="grid-canvas"></canvas>
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
let gridMesh
let axesHelper

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
  resizeRendererToDisplaySize()

  scene = new THREE.Scene()

  // 把相机放在 z 轴负值，朝向 z 正值区域，方便观察“仅 z>=0 的网格”
  camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight || 1, 0.1, 500)
  camera.position.set(0, 22, -26)
  camera.lookAt(0, 0, 50)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 10
  controls.maxDistance = 200
  controls.maxPolarAngle = Math.PI * 0.49
  controls.target.set(0, 0, 60)
  controls.update()

  scene.add(new THREE.AmbientLight(0xffffff, 0.55))
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.85)
  dirLight.position.set(20, 35, -10)
  scene.add(dirLight)

  axesHelper = new THREE.AxesHelper(18)
  axesHelper.position.y = 0.02
  scene.add(axesHelper)

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(220, 96),
    new THREE.MeshStandardMaterial({
      color: 0x050c17,
      metalness: 0.05,
      roughness: 0.95
    })
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.02
  scene.add(ground)

  gridMesh = createPositiveZGradientGrid({
    xSize: 240,
    zSize: 220,
    majorCellSize: 10.0
  })
  scene.add(gridMesh)

  animate()

  resizeObserver = new ResizeObserver(() => resizeRendererToDisplaySize(true))
  resizeObserver.observe(canvas)
}

function createPositiveZGradientGrid({ xSize, zSize, majorCellSize }) {
  // 先做一个 XZ 平面，再把它平移到 z>=0（0..zSize）
  const geometry = new THREE.PlaneGeometry(xSize, zSize, 1, 1)
  geometry.rotateX(-Math.PI / 2)
  geometry.translate(0, 0, zSize / 2)

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
    uniforms: {
      uMajorCellSize: { value: majorCellSize },
      uZStart: { value: 0.0 },
      uZEnd: { value: zSize },
      uMajorColorNear: { value: new THREE.Color('#2a6c9a') },
      uMajorColorFar: { value: new THREE.Color('#b8f4ff') },
      // z 越小越“模糊”（更宽、更软、更透明），z 越大越“清晰”
      uMajorOpacityNear: { value: 0.14 },
      uMajorOpacityFar: { value: 0.68 },
      uMajorWidthNear: { value: 0.22 },
      uMajorWidthFar: { value: 0.05 },
      uSoftnessNear: { value: 7.5 },
      uSoftnessFar: { value: 1.5 },
      // 轻微半径淡出，避免边缘太抢眼
      uFadeStart: { value: 35.0 },
      uFadeEnd: { value: 160.0 }
    },
    vertexShader: `
      varying vec3 vWorldPos;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorldPos = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: `
      precision highp float;

      uniform float uMajorCellSize;
      uniform float uZStart;
      uniform float uZEnd;

      uniform vec3 uMajorColorNear;
      uniform vec3 uMajorColorFar;

      uniform float uMajorOpacityNear;
      uniform float uMajorOpacityFar;

      uniform float uMajorWidthNear;
      uniform float uMajorWidthFar;

      uniform float uSoftnessNear;
      uniform float uSoftnessFar;

      uniform float uFadeStart;
      uniform float uFadeEnd;

      varying vec3 vWorldPos;

      float gridMask(vec2 worldXZ, float cell, float width, float softness) {
        vec2 scaled = worldXZ / cell;
        vec2 g = abs(fract(scaled) - 0.5);
        float dist = min(g.x, g.y);
        float aa = fwidth(dist) * softness;
        return 1.0 - smoothstep(width, width + aa, dist);
      }

      void main() {
        // 仅显示 z 轴正值区域（z<0 完全不显示网格）
        if (vWorldPos.z < 0.0) discard;

        vec2 worldXZ = vWorldPos.xz;

        // clarity: z 越大越清晰（0..1）
        float clarity = smoothstep(uZStart, uZEnd, vWorldPos.z);

        float softness = mix(uSoftnessNear, uSoftnessFar, clarity);
        float majorWidth = mix(uMajorWidthNear, uMajorWidthFar, clarity);

        float major = gridMask(worldXZ, uMajorCellSize, majorWidth, softness);

        vec3 majorColor = mix(uMajorColorNear, uMajorColorFar, clarity);

        float majorOpacity = mix(uMajorOpacityNear, uMajorOpacityFar, clarity);

        float r = length(worldXZ);
        float radialFade = 1.0 - smoothstep(uFadeStart, uFadeEnd, r);

        // z 越小越“糊”：更低对比度；z 越大更“清晰”
        float contrast = mix(0.45, 1.0, clarity);

        vec3 color = majorColor * (major * majorOpacity);
        float alpha = (major * majorOpacity) * radialFade * contrast;

        if (alpha < 0.01) discard;
        gl_FragColor = vec4(color, clamp(alpha, 0.0, 1.0));
      }
    `
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.y = 0.0
  mesh.frustumCulled = false
  return mesh
}

function animate() {
  animationId = requestAnimationFrame(animate)
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
  renderer?.dispose()

  if (scene) {
    scene.traverse((child) => {
      if (child.geometry) child.geometry.dispose()
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose())
        } else {
          child.material.dispose()
        }
      }
    })
  }

  renderer = null
  scene = null
  camera = null
  controls = null
  gridMesh = null
  axesHelper = null
}
</script>

<style scoped>
.grid-wrapper {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top, rgba(24, 62, 105, 0.35), #030711);
}

.grid-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
