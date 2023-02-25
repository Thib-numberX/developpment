import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PlantView from '../views/PlantView.vue';
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name : 'about',
      component : AboutView
    },
    {
      path: '/plant/:plantId(\\d+)', // on ne match que des chiffres
      name: 'currentPlant',
      // route level code-splitting
      // this generates a separate chunk (plant.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/PlantView.vue')
      component: PlantView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
