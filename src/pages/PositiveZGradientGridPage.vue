<template>
  <div class="grid-page">
    <PositiveZGradientGridScene class="grid-layer" />

    <section class="hud info-panel">
      <p class="title">正 Z 区域渐变网格（自定义 Shader）</p>
      <p>约束：网格只在 z ≥ 0 的区域显示，z &lt; 0 不显示</p>
      <p>渐变：z 越大越清晰（更锐利更亮），z 越小越模糊（更软更淡）</p>
      <p>操作：拖动旋转，滚轮缩放</p>
    </section>
  </div>
</template>

<script setup>
import PositiveZGradientGridScene from '../components/PositiveZGradientGridScene.vue'
</script>

<style scoped>
.grid-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #030711;
  overflow: hidden;
}

.grid-layer {
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

