import Vue from "vue";
import VueRouter from "vue-router";
import Container from "@/components/Container";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "MainPage"
    },
    component: Container,
    children: [
      {
        path: "MainPage",
        name: "MainPage",
        component: () => import("@/views/MainPage.vue")
      },
      {
        path: "EventPage",
        name: "EventPage",
        component: () => import("@/views/EventPage.vue")
      },
      {
        path: "GamePage",
        name: "GamePage",
        component: () => import("@/views/GamePage.vue")
      },
      {
        path: "ShopPage",
        name: "ShopPage",
        component: () => import("@/views/ShopPage.vue")
      },
      {
        path: "BagPage",
        name: "BagPage",
        component: () => import("@/views/BagPage.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
