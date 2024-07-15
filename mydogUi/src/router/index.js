import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/CreateView.vue";
import FindView from "../views/FindView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/create",
      name: "create",
      component: CreateView
    },
    {
      path: "/find",
      name: "find",
      component: FindView
    }
  ]
});

export default router;
