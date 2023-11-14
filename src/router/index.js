import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "index",
        name: "index",
        title: "主页",
        alias: "/",
        component: () => import("@/views/index/Index.vue"),
      },
      {
        path: "aline",
        name: "aline",
        title: "一行代码",
        component: () => import("@/views/index/Aline.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
