<template>
  <div class="scene-wrapper">
    <canvas ref="canvasRef" class="scene-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const emit = defineEmits(['hover-change'])

const canvasRef = ref(null)

let renderer
let scene
let camera
let controls
let animationId
let particles
let beamMaterial
let beamMesh
let spotLight
let glowMesh
let glowMaterial
let pointerMoveHandler
let pointerLeaveHandler
let resizeHandler

const nodeLinks = new Map()
const topMeshes = []
const pointer = new THREE.Vector2(10, 10)
const raycaster = new THREE.Raycaster()
const clock = new THREE.Clock()

let activeTop = null
let activeBottom = null

onMounted(() => {
  initScene()
  emit('hover-change', '---')
})

onBeforeUnmount(() => {
  cleanup()
})

function initScene() {
  const canvas = canvasRef.value
  if (!canvas) return

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x030711)
  scene.fog = new THREE.Fog(0x030711, 40, 140)

  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200)
  camera.position.set(18, 16, 26)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.minDistance = 12
  controls.maxDistance = 80
  controls.maxPolarAngle = Math.PI * 0.49

  createEnvironment()
  createNodes()
  createBeams()
  setupInteraction()

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

function createEnvironment() {
  const hemiLight = new THREE.HemisphereLight(0x66a4ff, 0x04060c, 0.6)
  scene.add(hemiLight)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.15)
  dirLight.position.set(15, 25, 10)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.set(2048, 2048)
  dirLight.shadow.camera.near = 0.1
  dirLight.shadow.camera.far = 80
  scene.add(dirLight)

  const floor = new THREE.Mesh(
    new THREE.CylinderGeometry(45, 45, 0.2, 64),
    new THREE.MeshStandardMaterial({
      color: 0x050c17,
      metalness: 0.1,
      roughness: 0.95
    })
  )
  floor.position.y = -0.1
  floor.receiveShadow = true
  scene.add(floor)

  const grid = new THREE.GridHelper(80, 40, 0x103b63, 0x072033)
  grid.material.opacity = 0.35
  grid.material.transparent = true
  grid.position.y = 0
  scene.add(grid)

  const particleCount = 600
  const particlePositions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i += 1) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 160
    particlePositions[i * 3 + 1] = Math.random() * 80 + 10
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 160
  }
  const particleGeometry = new THREE.BufferGeometry()
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
  const particleMaterial = new THREE.PointsMaterial({
    color: 0x2c78b5,
    size: 0.6,
    transparent: true,
    opacity: 0.35,
    depthWrite: false
  })
  particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)
}

function createNodes() {
  const TOP_COLOR = 0x63e0ff
  const BOTTOM_COLOR = 0x236dff
  const TOP_RADIUS = 0.8
  const BOTTOM_RADIUS = 0.65
  const BOTTOM_Y = 0.8

  const topConfigs = [
    { name: 'Alpha', position: new THREE.Vector3(-12, 10, -6) },
    { name: 'Beta', position: new THREE.Vector3(10, 9.5, -4) },
    { name: 'Gamma', position: new THREE.Vector3(-8, 10.5, 6) },
    { name: 'Delta', position: new THREE.Vector3(11, 8.5, 7) },
    { name: 'Sigma', position: new THREE.Vector3(0, 12, 0) }
  ]

  topConfigs.forEach((config) => {
    const bottomPos = new THREE.Vector3(config.position.x, BOTTOM_Y, config.position.z)

    const topNode = createNode(config.position, TOP_COLOR, TOP_RADIUS, true)
    topNode.userData.name = config.name

    const bottomNode = createNode(bottomPos, BOTTOM_COLOR, BOTTOM_RADIUS, false)
    bottomNode.userData.name = `${config.name}-ground`

    nodeLinks.set(topNode.uuid, bottomNode)
    topMeshes.push(topNode)

    const verticalGeometry = new THREE.CylinderGeometry(0.08, 0.08, config.position.y - BOTTOM_Y, 12)
    const verticalMaterial = new THREE.MeshBasicMaterial({
      color: 0x0c2340,
      transparent: true,
      opacity: 0.45
    })
    const connector = new THREE.Mesh(verticalGeometry, verticalMaterial)
    connector.position.set(config.position.x, (config.position.y + BOTTOM_Y) / 2, config.position.z)
    scene.add(connector)
  })
}

function createNode(position, hexColor, radius, elevated) {
  const color = new THREE.Color(hexColor)
  const emissive = color.clone().multiplyScalar(elevated ? 0.35 : 0.2)
  const material = new THREE.MeshStandardMaterial({
    color,
    emissive,
    emissiveIntensity: elevated ? 0.9 : 0.5,
    metalness: elevated ? 0.55 : 0.3,
    roughness: elevated ? 0.35 : 0.6
  })
  const geometry = new THREE.SphereGeometry(radius, 48, 32)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.copy(position)
  mesh.castShadow = elevated
  mesh.receiveShadow = !elevated
  mesh.userData.baseScale = 1
  mesh.userData.defaultEmissiveIntensity = material.emissiveIntensity
  mesh.userData.baseColor = material.color.clone()
  scene.add(mesh)
  return mesh
}

function createBeams() {
  const beamGroup = new THREE.Group()
  scene.add(beamGroup)

    beamMaterial = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTopColor: { value: new THREE.Color(0x6de8ff) },
      uBottomColor: { value: new THREE.Color(0x0f2a6d) },
      uHeight: { value: 1 }
    },
    vertexShader: `
      varying float vY;
      void main() {
        vY = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform float uHeight;
        varying float vY;

        void main() {
          float halfHeight = uHeight * 0.5;
          float t = clamp((vY + halfHeight) / uHeight, 0.0, 1.0);
          vec3 color = mix(uTopColor, uBottomColor, t);
          float intensity = mix(1.2, 0.15, t);
          float alpha = smoothstep(0.0, 0.7, 1.0 - t);
          gl_FragColor = vec4(color * intensity, alpha);
          if (gl_FragColor.a < 0.05) discard;
        }
    `
  })

  beamMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 1, 1, 64, 1, true), beamMaterial)
  beamMesh.visible = false
  beamMesh.frustumCulled = false
  beamGroup.add(beamMesh)

  spotLight = new THREE.SpotLight(0x73f4ff, 0, 50, Math.PI / 8, 0.5, 2)
  spotLight.castShadow = false
  spotLight.visible = false
  const spotTarget = new THREE.Object3D()
  scene.add(spotTarget)
  spotLight.target = spotTarget
  beamGroup.add(spotLight)

  glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x4dc8ff,
    transparent: true,
    opacity: 0.45,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  glowMesh = new THREE.Mesh(new THREE.CircleGeometry(2.2, 64), glowMaterial)
  glowMesh.rotation.x = -Math.PI / 2
  glowMesh.visible = false
  beamGroup.add(glowMesh)
}

function setupInteraction() {
  const domElement = renderer.domElement

  pointerMoveHandler = (event) => {
    const bounds = domElement.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    pointer.x = x * 2 - 1
    pointer.y = -(y * 2 - 1)
  }

  pointerLeaveHandler = () => {
    pointer.set(10, 10)
    setActiveNode(null)
  }

  domElement.addEventListener('pointermove', pointerMoveHandler)
  domElement.addEventListener('pointerleave', pointerLeaveHandler)
}

function setActiveNode(nextNode) {
  if (nextNode === activeTop) return

  if (activeTop) {
    highlightNode(activeTop, false)
  }
  if (activeBottom) {
    highlightNode(activeBottom, false)
  }

  activeTop = nextNode
  activeBottom = nextNode ? nodeLinks.get(nextNode.uuid) : null

  if (!nextNode || !activeBottom) {
    hideBeam()
    emit('hover-change', '---')
    return
  }

  highlightNode(nextNode, true)
  highlightNode(activeBottom, true)
  updateBeam(nextNode, activeBottom)
  emit('hover-change', nextNode.userData.name ?? '---')
}

function highlightNode(node, isActive) {
  if (!node) return
  const targetScale = isActive ? 1.25 : node.userData.baseScale
  node.scale.set(targetScale, targetScale, targetScale)
  node.material.emissiveIntensity = isActive
    ? node.userData.defaultEmissiveIntensity * 2
    : node.userData.defaultEmissiveIntensity
}

function updateBeam(topNode, bottomNode) {
  const direction = new THREE.Vector3().subVectors(topNode.position, bottomNode.position)
  const height = direction.length()

  if (beamMesh.geometry) {
    beamMesh.geometry.dispose()
  }
  beamMesh.geometry = new THREE.CylinderGeometry(0.35, 1.35, height, 64, 1, true)
  beamMesh.position.copy(topNode.position).add(bottomNode.position).multiplyScalar(0.5)
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize())
  beamMesh.setRotationFromQuaternion(quaternion)
  beamMesh.visible = true
  beamMaterial.uniforms.uHeight.value = height

  spotLight.visible = true
  spotLight.intensity = 3.2
  spotLight.position.copy(topNode.position)
  spotLight.target.position.copy(bottomNode.position)

  glowMesh.visible = true
  glowMesh.position.copy(bottomNode.position)
  const glowScale = Math.max(2, height * 0.2)
  glowMesh.scale.set(glowScale, glowScale, glowScale)
}

function hideBeam() {
  if (beamMesh) beamMesh.visible = false
  if (spotLight) spotLight.visible = false
  if (glowMesh) glowMesh.visible = false
}

function animate() {
  animationId = requestAnimationFrame(animate)

  const elapsed = clock.getElapsedTime()
  if (glowMesh?.visible && glowMaterial) {
    glowMaterial.opacity = 0.35 + Math.sin(elapsed * 3) * 0.15
  }
  if (particles) {
    particles.rotation.y += 0.0005
  }

  controls?.update()

  raycaster.setFromCamera(pointer, camera)
  const intersects = raycaster.intersectObjects(topMeshes, false)
  if (intersects.length > 0) {
    setActiveNode(intersects[0].object)
  } else {
    setActiveNode(null)
  }

  renderer.render(scene, camera)
}

function cleanup() {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resizeHandler)
  renderer?.domElement?.removeEventListener('pointermove', pointerMoveHandler)
  renderer?.domElement?.removeEventListener('pointerleave', pointerLeaveHandler)

  controls?.dispose()
  renderer?.dispose()

  if (scene) {
    scene.traverse((child) => {
      if (child.geometry) {
        child.geometry.dispose()
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(disposeMaterial)
        } else {
          disposeMaterial(child.material)
        }
      }
    })
  }
}

function disposeMaterial(material) {
  if (material.map) material.map.dispose()
  material.dispose()
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
