<template>
  <div class="flow-page">
    <FlowNetworkScene class="scene-layer" />

    <section class="hud headline">
      <p class="title">流动光束网络</p>
      <p>节点在空间中交织，连线上的光束持续脉冲，头部更亮更大。</p>
      <p>鼠标拖拽可旋转，滚轮缩放视角。</p>
    </section>
  </div>
</template>

<script setup>
import FlowNetworkScene from '../components/FlowNetworkScene.vue'
</script>

<style scoped>
.flow-page {
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
