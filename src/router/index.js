import Vue from "vue";
import Router from "vue-router";

import middlewarePipeline from "./middlewarePipeline";

Vue.use(Router);
const router = new Router({
  mode: "hash",
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("@/views/Main.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Home.vue"),
        },
				{
          path: "/hangars",
          name: "hangars",
          component: () => import("@/views/hangars/Hangars.vue"),
        },
				{
          path: "/arched-hangars",
          name: "archedHangars",
          component: () => import("@/views/hangars/ArchedHangars.vue"),
        },
				{
          path: "/about",
          name: "about",
          component: () => import("@/views/about/About.vue"),
        },
				{
          path: "/contact",
          name: "contact",
          component: () => import("@/views/contact/Index.vue"),
        },
				{
          path: "/production-complex",
          name: "productionComplex",
          component: () => import("@/views/productionComplex/Index.vue"),
        },
      ]
    }
    // Redirect to 404 page, if no match found
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
	}

  const middleware = to.meta.middleware;

  const context = {to, from, next};

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;
