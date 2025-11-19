<template>
  <div class="topology-page">
    <section class="stage-panel">
      <ForceTopology :link-width="linkWidth" />

      <aside class="control-hud">
        <p class="hud-title">二维拓扑力导向</p>
        <p class="hud-sub">自研力导向实时演算，可滑动调整连线粗细</p>
        <label class="slider-label">
          线宽
          <span>{{ linkWidth.toFixed(1) }}</span>
        </label>
        <input
          v-model.number="linkWidth"
          type="range"
          min="0.4"
          max="1.8"
          step="0.1"
        />
      </aside>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ForceTopology from '../components/ForceTopology.vue'

const linkWidth = ref(0.9)
</script>

<style scoped>
.topology-page {
  min-height: calc(100vh - 120px);
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, rgba(18, 59, 112, 0.35), #030711);
}

.stage-panel {
  position: relative;
  width: min(1200px, 100%);
  height: min(780px, calc(100vh - 180px));
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: radial-gradient(circle at 20% 20%, rgba(20, 62, 120, 0.4), rgba(4, 8, 18, 0.95));
  box-shadow: 0 40px 90px rgba(2, 10, 30, 0.65), inset 0 0 60px rgba(23, 72, 134, 0.25);
  overflow: hidden;
}

.stage-panel :deep(.topology-surface) {
  width: 100%;
  height: 100%;
}

.control-hud {
  position: absolute;
  top: 24px;
  left: 24px;
  padding: 18px 22px;
  width: min(260px, 80vw);
  border-radius: 18px;
  background: rgba(3, 10, 24, 0.8);
  box-shadow: 0 14px 32px rgba(2, 10, 30, 0.55);
  border: 1px solid rgba(148, 214, 255, 0.2);
  backdrop-filter: blur(10px);
  pointer-events: auto;
}

.hud-title {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.hud-sub {
  margin: 0 0 14px;
  font-size: 13px;
  color: #9ad8ff;
}

.slider-label {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 6px;
  color: #cbe9ff;
}

.slider-label span {
  color: #66d9ff;
  font-variant-numeric: tabular-nums;
}

input[type='range'] {
  width: 100%;
  accent-color: #1e84ff;
}

@media (max-width: 768px) {
  .topology-page {
    padding: 16px;
  }

  .stage-panel {
    height: calc(100vh - 160px);
  }

  .control-hud {
    width: calc(100% - 40px);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
