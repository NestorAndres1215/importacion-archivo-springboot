import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import List from '../views/List.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/upload', name: 'Upload', component: Upload },
  { path: '/list', name: 'List', component: List }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router