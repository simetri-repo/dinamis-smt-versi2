import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "simetri.index",
    component: () => import("../views/frontend/Index.vue"),
  },
  {
    path: "/contact",
    name: "simetri.contact",
    component: () => import("../views/frontend/Contact.vue"),
  },
  {
    path: "/ourcompany",
    name: "simetri.ourcompany",
    component: () => import("../views/frontend/OurCompany.vue"),
  },
  {
    path: "/project",
    name: "simetri.project",
    component: () => import("../views/frontend/Project.vue"),
  },
  {
    path: "/partner",
    name: "simetri.partner",
    component: () => import("../views/frontend/Partner.vue"),
  },
  {
    path: "/csr",
    name: "simetri.csr",
    component: () => import("../views/frontend/Csr.vue"),
  },
  {
    path: "/product",
    name: "simetri.product",
    component: () => import("../views/frontend/Product.vue"),
  },
  {
    path: "/news",
    name: "simetri.news",
    component: () => import("../views/frontend/News.vue"),
  },
  {
    path: "/careers",
    name: "simetri.careers",
    component: () => import("../views/frontend/Careers.vue"),
  },
  {
    path: "/certificate",
    name: "simetri.certificate",
    component: () => import("../views/frontend/Certificate.vue"),
  },
  {
    path: "/news/1",
    name: "simetri.news1",
    component: () => import("../views/frontend/News1.vue"),
  },
  {
    path: "/news/2",
    name: "simetri.news2",
    component: () => import("../views/frontend/News2.vue"),
  },
  {
    path: "/news/3",
    name: "simetri.news3",
    component: () => import("../views/frontend/News3.vue"),
  },
  {
    path: "/news/4",
    name: "simetri.news4",
    component: () => import("../views/frontend/News4.vue"),
  },
  {
    path: "/news/5",
    name: "simetri.news5",
    component: () => import("../views/frontend/News5.vue"),
  },
  {
    path: "/news/6",
    name: "simetri.news6",
    component: () => import("../views/frontend/News6.vue"),
  },
  {
    path: "/loader",
    name: "simetri.loader",
    component: () => import("../views/frontend/Loader.vue"),
  },
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/frontend/404.vue"),
  }
];


const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
