import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//nueva vista personas
import PersonasView from '../views/PersonasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/personas',
      name: 'personas',
      component: PersonasView, // nueva ruta para la vista personas
    },
  ],
})

export default router
