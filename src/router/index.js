import { createRouter, createWebHistory } from 'vue-router'

import ThreeScenePage from '../pages/ThreeScenePage.vue'
import MicroservicePlanePage from '../pages/MicroservicePlanePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/scene',
  },
  {
    path: '/scene',
    name: 'scene',
    component: ThreeScenePage,
    meta: {
      title: '三维场景',
    },
  },
  {
    path: '/microservice-plane',
    name: 'microservice-plane',
    component: MicroservicePlanePage,
    meta: {
      title: '服务网格',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title} | Beam Network`
  } else {
    document.title = 'Beam Network'
  }
})

export default router
