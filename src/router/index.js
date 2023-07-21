import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../page/TheHome.vue";
import TheSearchIngredient from "../page/TheSearchIngredient.vue";
import TheSearchName from "../page/TheSearchName.vue";
import TheDetails from "../page/TheDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TheHome,
  },
  {
    path: "/ingredient",
    name: "ingredient",
    component: TheSearchIngredient,
  },
  {
    path: "/name",
    name: "name",
    component: TheSearchName,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: TheDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
