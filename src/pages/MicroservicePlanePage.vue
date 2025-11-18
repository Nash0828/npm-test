<template>
  <div class="plane-page">
    <section class="plane-panel">
      <MicroservicePlane />
    </section>
  </div>
</template>

<script setup>
import MicroservicePlane from '../components/MicroservicePlane.vue'
</script>

<style scoped>
.plane-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(24, 62, 105, 0.4), #030711);
  padding: 24px;
}

.plane-panel {
  width: min(420px, 90vw);
  height: min(320px, 70vh);
  border-radius: 24px;
  background: rgba(3, 7, 17, 0.9);
  box-shadow: 0 30px 60px rgba(2, 8, 20, 0.55);
  overflow: hidden;
  padding: 0;
}

.plane-panel :deep(.plane-wrapper) {
  width: 100%;
  height: 100%;
}
</style>
