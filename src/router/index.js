import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowById from "../views/ShowById.vue";
import UpdateView from "../views/UpdateView.vue";
import DeleteView from "../views/DeleteView.vue";
import DashboardView from "../views/DashboardView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/userbyid",
    name: "userbyid",
    component: ShowById,
  },
  {
    path: "/Update",
    name: "Update",
    component: UpdateView,
  },
  {
    path: "/Delete",
    name: "Delete",
    component: DeleteView,
  },
  {
    path: "/DashboardView",
    name: "DashboardView",
    component: DashboardView,
  },
  {
    path: "/ShowUsers",
    name: "ShowUsers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
