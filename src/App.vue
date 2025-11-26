<template>
  <div class="app-shell">
    <header class="app-header">
      <p class="logo">Beam Network</p>
      <nav class="nav">
        <RouterLink
          to="/scene"
          class="nav-link"
          active-class="is-active"
        >
          三维场景
        </RouterLink>
        <RouterLink
          to="/flow-network"
          class="nav-link"
          active-class="is-active"
        >
          流动光束
        </RouterLink>
        <RouterLink
          to="/microservice-plane"
          class="nav-link"
          active-class="is-active"
        >
          服务编排平面
        </RouterLink>
        <RouterLink
          to="/topology"
          class="nav-link"
          active-class="is-active"
        >
          二维拓扑
        </RouterLink>
        <RouterLink
          to="/fly-trail"
          class="nav-link"
          active-class="is-active"
        >
          飞线拖尾
        </RouterLink>
      </nav>
    </header>

    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: #030711;
  color: #e5f4ff;
}

.app-header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: rgba(3, 7, 17, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 6px 20px rgba(2, 8, 20, 0.45);
  z-index: 20;
}

.logo {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.nav {
  display: flex;
  gap: 12px;
}

.nav-link {
  text-decoration: none;
  color: #9ad8ff;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #e5f4ff;
  border-color: rgba(154, 216, 255, 0.4);
}

.nav-link.is-active {
  background: linear-gradient(120deg, #1e84ff, #00c2ff);
  color: #030711;
  border-color: transparent;
  box-shadow: 0 8px 18px rgba(0, 150, 255, 0.35);
}

.app-content {
  flex: 1;
}
</style>
