import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from './pages/home.vue'
import Clubs from './pages/clubs.vue'


const routes: RouteRecordRaw[] = [
  { 
    name: '',
    path: '/',
    component: Home,
  },
  { 
    name: 'praesidium',
    path: '/praesidium',
    component: Home,
  },
  { 
    name: 'clubs',
    path: '/clubs',
    component: Clubs,
  },
  { 
    name: 'contact',
    path: '/contact',
    component: Home,
  },
  { 
    name: 'sponsors',
    path: '/sponsors',
    component: Home,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;