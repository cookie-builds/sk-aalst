import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Home from './pages/home.vue'
import Clubs from './pages/clubs.vue'
import Praesidium from './pages/praesidium.vue'
import Contact from './pages/contact.vue'
import Sponsors from './pages/sponsors.vue'


const routes: RouteRecordRaw[] = [
  { 
    name: '',
    path: '/',
    component: Home,
  },
  { 
    name: 'praesidium',
    path: '/praesidium',
    component: Praesidium,
  },
  { 
    name: 'clubs',
    path: '/clubs',
    component: Clubs,
  },
  { 
    name: 'contact',
    path: '/contact',
    component: Contact,
  },
  { 
    name: 'sponsors',
    path: '/sponsors',
    component: Sponsors,
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;