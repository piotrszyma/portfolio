import VueRouter from 'vue-router';
import Home from "@/views/Home.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
