import Vue from "vue";
import Router from "vue-router";

// 页面
const Index = () => import(/* webpackChunkName: "index" */ "views/home/index");

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
      path: "*",
      name: "notFound",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
