import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "MainPage"
    },
    component: () => import("@/components/RouterView.vue"),
    children: [
      {
        path: "MainPage",
        name: "MainPage",
        component: () => import("@/views/MainPage.vue")
      },
      {
        path: "SubPage",
        name: "SubPage",
        component: () => import("@/views/SubPage.vue")
      },
      {
        path: "TestPage",
        name: "TestPage",
        component: () => import("@/views/TestPage.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
