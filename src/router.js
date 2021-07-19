import { createRouter, createWebHistory } from 'vue-router';
import TheIndex from '/src/pages/TheIndex.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component:  TheIndex }
  ],
  scrollBehavior: (_to, _from, savedPosition) => {
    return savedPosition? savedPosition : { top: 0, left: 0 };
  },
});