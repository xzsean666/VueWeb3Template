import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue"; // 假设你有一个 Home 组件
import AppKit from "./components/AppKit.vue"; // 假设你有一个 About 组件

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/appKit", component: AppKit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export function navigateTo(route: string) {
  router.push(route);
}

export default router;
