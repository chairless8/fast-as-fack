// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ListaAlimentos from './components/ElementList.vue';
import RefrigeradorVirtual from './components/RefrigeradorVirtual.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: RefrigeradorVirtual },
  { path: '/lista', component: ListaAlimentos },
  { path: '/cuadricula', component: ListaAlimentos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
