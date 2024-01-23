import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: () => import('../views/AboutUsView.vue'),
        },
        {
          path: '/street',
          name: 'street',
          component: () => import('../views/StreetView.vue'),
      },
      {
        path: '/releases',
        name: 'releases',
        component: () => import('../views/ReleasesView.vue'),
    },
    {
        path: '/releases/:id',
        name: 'releases-pod',
        props: true,
        component: () => import('../views/ReleasesPodView.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/BlogView.vue'),
    },
    {
        path: '/fits',
        name: 'fits',
        component: () => import('../views/FitsView.vue'),
    },
  
    ],
});

export default router;
