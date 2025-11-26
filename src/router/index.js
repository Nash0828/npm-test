import { createRouter, createWebHistory } from 'vue-router'

import ThreeScenePage from '../pages/ThreeScenePage.vue'
import MicroservicePlanePage from '../pages/MicroservicePlanePage.vue'
import ForceTopologyPage from '../pages/ForceTopologyPage.vue'
import FlowNetworkPage from '../pages/FlowNetworkPage.vue'
import FlyLineTrailPage from '../pages/FlyLineTrailPage.vue'

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
    path: '/flow-network',
    name: 'flow-network',
    component: FlowNetworkPage,
    meta: {
      title: '流动光束',
    },
  },
  {
    path: '/fly-trail',
    name: 'fly-trail',
    component: FlyLineTrailPage,
    meta: {
      title: '飞线拖尾',
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
  {
    path: '/topology',
    name: 'topology',
    component: ForceTopologyPage,
    meta: {
      title: '二维拓扑',
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
