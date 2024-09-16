import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import Create from '../views/CreateView.vue'
import Edit from '../views/EditView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: DetailView
    },
    {
      path:'/create',
      name: 'create',
      component: Create
    },
    {
      path:'/:id/edit',
      name: 'edit',
      component: Edit
    }
  ]
})

export default router
