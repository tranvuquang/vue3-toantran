import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import AboutId from "./pages/AboutId.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/about/:id", component: AboutId },
  { path: "/ab", redirect: "/about" },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
