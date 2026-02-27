<template>
  <div class="arrow-page">
    <LineTargetArrowScene class="scene-layer" />

    <section class="hud panel">
      <p class="title">Line2 Target 箭头</p>
      <p>拖拽两个节点，连线与箭头会实时跟随更新。</p>
      <p>箭头使用 ConeGeometry（height=1），中心点距离线末端 0.5，tip 对齐末端。</p>
      <p>鼠标拖拽空白处旋转视角，滚轮缩放。</p>
    </section>
  </div>
</template>

<script setup>
import LineTargetArrowScene from '../components/LineTargetArrowScene.vue'
</script>

<style scoped>
.arrow-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #02060f;
  overflow: hidden;
}

.scene-layer {
  width: 100%;
  height: 100vh;
}

.hud {
  position: fixed;
  z-index: 10;
  pointer-events: none;
}

.panel {
  top: 24px;
  right: 24px;
  padding: 16px 20px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  background: rgba(2, 6, 15, 0.7);
  color: #e3f5ff;
  line-height: 1.55;
  font-size: 14px;
  max-width: 360px;
  box-shadow: 0 18px 45px rgba(2, 8, 20, 0.55);
}

.title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
}
</style>

