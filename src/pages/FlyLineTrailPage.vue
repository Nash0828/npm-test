<template>
  <div class="flyline-page">
    <FlyLineTrail class="scene-layer" />

    <section class="hud panel">
      <p class="title">着色器飞线拖尾</p>
      <p>
        通过自定义着色器让飞线主体只保留头部亮度，后段随时间衰减，带出丝滑拖尾。
      </p>
      <p>拖动改变视角，滚轮缩放，观察多条路径的节奏差异。</p>
    </section>
  </div>
</template>

<script setup>
import FlyLineTrail from '../components/FlyLineTrail.vue'
</script>

<style scoped>
.flyline-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #01030a;
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
  background: rgba(1, 3, 10, 0.7);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 40px rgba(2, 8, 20, 0.55);
  color: #e7f6ff;
  font-size: 14px;
  line-height: 1.5;
  pointer-events: none;
  z-index: 12;
}

.title {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
</style>
