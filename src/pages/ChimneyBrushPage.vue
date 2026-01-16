<template>
  <div class="chimney-page">
    <ChimneyBrushScene class="chimney-layer" />

    <section class="hud info-panel">
      <p class="title">烟囱笔锋</p>
      <p>烟囱壁：CatmullRomCurve3 管壁 + 开口环线</p>
      <p>两侧笔锋：自定义带状几何 + 渐变透明</p>
      <p>操作：拖动旋转，滚轮缩放</p>
    </section>
  </div>
</template>

<script setup>
import ChimneyBrushScene from '../components/ChimneyBrushScene.vue'
</script>

<style scoped>
.chimney-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #030711;
  overflow: hidden;
}

.chimney-layer {
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
</style>
