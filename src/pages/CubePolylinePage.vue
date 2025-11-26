<template>
  <div class="cube-page">
    <CubePolylineScene class="scene-layer" />

    <section class="hud">
      <p class="title">正交折线立方网络</p>
      <p>所有节点位于同一水平面，正方体尺寸一致。</p>
      <p>连接线使用 Polyline，严格按照直角路径并绕开其他节点。</p>
      <p>拖拽旋转，滚轮缩放，可观察路径的规避策略。</p>
    </section>
  </div>
</template>

<script setup>
import CubePolylineScene from '../components/CubePolylineScene.vue'
</script>

<style scoped>
.cube-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #02060f;
}

.scene-layer {
  width: 100%;
  height: 100vh;
}

.hud {
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 16px 20px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgba(2, 6, 15, 0.7);
  color: #e3f5ff;
  line-height: 1.5;
  font-size: 14px;
  z-index: 10;
  pointer-events: none;
  max-width: 320px;
  box-shadow: 0 18px 45px rgba(2, 8, 20, 0.55);
}

.title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
</style>
