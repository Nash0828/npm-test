<template>
  <div class="scene-page">
    <ThreeScene class="scene-layer" @hover-change="handleHoverChange" />

    <section class="hud info-panel">
      <p class="title">Beam Network Demo</p>
      <p>悬浮任意上层节点，启动下行光束</p>
      <p>拖动可调整视角</p>
    </section>

    <div class="hud status-panel">
      Hover Node: {{ hoverNode }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ThreeScene from '../components/ThreeScene.vue'

const hoverNode = ref('---')

function handleHoverChange(name) {
  hoverNode.value = name ?? '---'
}
</script>

<style scoped>
.scene-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #030711;
  overflow: hidden;
}

.scene-layer {
  width: 100%;
  height: 100vh;
}

.hud {
  position: fixed;
  color: #e5f4ff;
  font-size: 14px;
  line-height: 1.4;
  pointer-events: none;
  z-index: 10;
}

.info-panel {
  top: 20px;
  left: 20px;
  padding: 12px 18px;
  border-radius: 12px;
  background: rgba(3, 7, 17, 0.65);
  backdrop-filter: blur(6px);
  box-shadow: 0 12px 30px rgba(12, 34, 64, 0.45);
}

.title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.title + p {
  margin-top: 10px;
}

.status-panel {
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background: rgba(6, 17, 34, 0.7);
  border-radius: 999px;
  font-size: 13px;
  color: #9ad8ff;
  letter-spacing: 0.03em;
}
</style>
