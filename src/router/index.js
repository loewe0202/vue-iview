import Vue from "vue";
import Router from "vue-router";

// 页面
let Index = () => import(/* webpackChunkName: "index" */ "views/index");
let Base = () => import(/* webpackChunkName: "base" */ "views/base/base");

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Index
    },
    {
      path: "/base/base",
      name: "base",
      component: Base
    },
    {
      path: "*",
      name: "home",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
