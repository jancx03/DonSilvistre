import { createRouter, createWebHistory } from 'vue-router';
import TheIndex from '/src/pages/TheIndex.vue';
import TheProduct from '/src/pages/TheProduct.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component:  TheIndex },
    { path: '/products/:id', component: TheProduct, props: true }
  ],
  scrollBehavior: (_to, _from, savedPosition) => {
    return savedPosition? savedPosition : { top: 0, left: 0 };
  },
});