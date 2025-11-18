<template>
  <div class="plane-wrapper">
    <canvas ref="canvasRef" class="plane-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const canvasRef = ref(null)

const DIMENSIONS = {
  width: 20,
  thickness: 0.05,
  depth: 10
}

let renderer
let scene
let camera
let animationId
let resizeObserver
let planeGroup
let labelTexture

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

  camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight || 1, 0.1, 100)
  camera.position.set(14, 9, 12)
  camera.lookAt(0, 0, 0)

  const ambient = new THREE.AmbientLight(0xffffff, 0.55)
  scene.add(ambient)

  const keyLight = new THREE.DirectionalLight(0xffffff, 0.85)
  keyLight.position.set(9, 15, 10)
  scene.add(keyLight)

  const fillLight = new THREE.DirectionalLight(0x7bd2ff, 0.4)
  fillLight.position.set(-8, 6, -8)
  scene.add(fillLight)

  planeGroup = new THREE.Group()
  planeGroup.add(createPlaneMesh())
  planeGroup.add(...createEdgeLines())
  planeGroup.add(createLabelMesh())
  scene.add(planeGroup)

  animate()

  resizeObserver = new ResizeObserver(() => resizeRendererToDisplaySize(true))
  resizeObserver.observe(canvas)
}

function createPlaneMesh() {
  const geometry = new THREE.BoxGeometry(DIMENSIONS.width, DIMENSIONS.thickness, DIMENSIONS.depth, 1, 1, 1)

  const colorStart = new THREE.Color('#2f343a')
  const colorEnd = new THREE.Color('#536271')
  const colorAttr = new Float32Array(geometry.attributes.position.count * 3)

  for (let i = 0; i < geometry.attributes.position.count; i += 1) {
    const x = geometry.attributes.position.getX(i)
    const t = (x + DIMENSIONS.width / 2) / DIMENSIONS.width
    const vertexColor = colorStart.clone().lerp(colorEnd, THREE.MathUtils.clamp(t, 0, 1))
    colorAttr[i * 3] = vertexColor.r
    colorAttr[i * 3 + 1] = vertexColor.g
    colorAttr[i * 3 + 2] = vertexColor.b
  }

  geometry.setAttribute('color', new THREE.BufferAttribute(colorAttr, 3))

  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    metalness: 0.35,
    roughness: 0.4
  })

  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = false
  mesh.receiveShadow = false
  mesh.position.y = 0
  return mesh
}

function createEdgeLines() {
  const halfWidth = DIMENSIONS.width / 2
  const halfDepth = DIMENSIONS.depth / 2
  const topY = DIMENSIONS.thickness / 2 + 0.001

  const points = [
    [-halfWidth, topY, -halfDepth, -halfWidth, topY, halfDepth], // left
    [-halfWidth, topY, -halfDepth, halfWidth, topY, -halfDepth], // front
    [halfWidth, topY, -halfDepth, halfWidth, topY, halfDepth] // right
  ]

  return points.map(([x1, y1, z1, x2, y2, z2]) => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x1, y1, z1),
      new THREE.Vector3(x2, y2, z2)
    ])
    const material = new THREE.LineBasicMaterial({ color: 0xffffff })
    return new THREE.Line(geometry, material)
  })
}

function createLabelMesh() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 170px "Noto Sans SC", "Microsoft YaHei", sans-serif'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'left'
    ctx.fillText('微服务', 30, canvas.height / 2 + 8)
  }

  labelTexture = new THREE.CanvasTexture(canvas)
  labelTexture.anisotropy = renderer.capabilities.getMaxAnisotropy()
  labelTexture.needsUpdate = true

  const material = new THREE.MeshBasicMaterial({
    map: labelTexture,
    transparent: true
  })

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 1.6), material)
  mesh.rotation.x = -Math.PI / 2
  mesh.position.set(-DIMENSIONS.width / 2 + 2.8, DIMENSIONS.thickness / 2 + 0.002, -DIMENSIONS.depth / 2 + 1.6)
  return mesh
}

function animate() {
  animationId = requestAnimationFrame(animate)

  if (planeGroup) {
    planeGroup.rotation.y = Math.sin(Date.now() * 0.0002) * 0.15
  }

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

  labelTexture?.dispose()
  renderer = null
  scene = null
  camera = null
  planeGroup = null
}
</script>

<style scoped>
.plane-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: radial-gradient(circle at top, rgba(19, 33, 53, 0.85), rgba(5, 8, 14, 0.95));
  box-shadow: 0 18px 45px rgba(3, 10, 20, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.plane-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
