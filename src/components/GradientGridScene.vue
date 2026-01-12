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

  camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight || 1, 0.1, 400)
  camera.position.set(18, 18, 28)
  camera.lookAt(0, 0, 0)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 10
  controls.maxDistance = 120
  controls.maxPolarAngle = Math.PI * 0.49

  scene.add(new THREE.AmbientLight(0xffffff, 0.55))

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.85)
  dirLight.position.set(20, 35, 10)
  scene.add(dirLight)

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(120, 96),
    new THREE.MeshStandardMaterial({
      color: 0x050c17,
      metalness: 0.05,
      roughness: 0.95
    })
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.02
  scene.add(ground)

  gridMesh = createGradientGrid({
    size: 220,
    majorCellSize: 10.0
  })
  scene.add(gridMesh)

  animate()

  resizeObserver = new ResizeObserver(() => resizeRendererToDisplaySize(true))
  resizeObserver.observe(canvas)
}

function createGradientGrid({ size, majorCellSize }) {
  const geometry = new THREE.PlaneGeometry(size, size, 1, 1)

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
    uniforms: {
      uMajorCellSize: { value: majorCellSize },
      uMajorColorNear: { value: new THREE.Color('#55d3ff') },
      uMajorColorFar: { value: new THREE.Color('#133a55') },
      uMajorOpacity: { value: 0.55 },
      // z 越小（越负），zRef = -z 越大，blur 越强
      uBlurStart: { value: 0.0 },
      uBlurEnd: { value: 90.0 },
      // 线宽是“格子比例”（0~0.5），越远越粗、越软
      uMajorWidthNear: { value: 0.03 },
      uMajorWidthFar: { value: 0.08 },
      uSoftnessNear: { value: 1.2 },
      uSoftnessFar: { value: 4.0 },
      // 额外做一个半径方向淡出，避免无限铺满过抢眼
      uFadeStart: { value: 35.0 },
      uFadeEnd: { value: 110.0 }
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
      uniform vec3 uMajorColorNear;
      uniform vec3 uMajorColorFar;
      uniform float uMajorOpacity;
      uniform float uBlurStart;
      uniform float uBlurEnd;
      uniform float uMajorWidthNear;
      uniform float uMajorWidthFar;
      uniform float uSoftnessNear;
      uniform float uSoftnessFar;
      uniform float uFadeStart;
      uniform float uFadeEnd;

      varying vec3 vWorldPos;

      float gridMask(vec2 worldXZ, float cell, float width, float softness) {
        vec2 scaled = worldXZ / cell;
        vec2 grid = abs(fract(scaled) - 0.5);
        float dist = min(grid.x, grid.y);
        float aa = fwidth(dist) * softness;
        return 1.0 - smoothstep(width, width + aa, dist);
      }

      void main() {
        vec2 worldXZ = vWorldPos.xz;

        // z 越小（越负），blur 越强
        float zRef = -vWorldPos.z;
        float blurT = smoothstep(uBlurStart, uBlurEnd, zRef);

        float softness = mix(uSoftnessNear, uSoftnessFar, blurT);
        float majorWidth = mix(uMajorWidthNear, uMajorWidthFar, blurT);

        float major = gridMask(worldXZ, uMajorCellSize, majorWidth, softness);

        // 颜色也做随 blur 渐变（更像“雾化”）
        vec3 majorColor = mix(uMajorColorNear, uMajorColorFar, blurT);

        float r = length(worldXZ);
        float radialFade = 1.0 - smoothstep(uFadeStart, uFadeEnd, r);

        // 随 blur 额外衰减对比度，让远处更“糊”
        float contrast = mix(1.0, 0.55, blurT);

        vec3 color = majorColor * (major * uMajorOpacity);
        float alpha = clamp((major * uMajorOpacity) * radialFade * contrast, 0.0, 1.0);

        // 太淡就丢弃，减少 overdraw
        if (alpha < 0.01) discard;

        gl_FragColor = vec4(color, alpha);
      }
    `
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.rotation.x = -Math.PI / 2
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
