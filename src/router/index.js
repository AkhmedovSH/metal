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
          path: "/design-department",
          name: "designDepartment",
          component: () => import("@/views/designDepartment/Index.vue"),
        },
				{
          path: "/rolled-metal",
          name: "rolledMetal",
          component: () => import("@/views/rolledMetal/Index.vue"),
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
          path: "/unique-building",
          name: "uniqueBuilding",
          component: () => import("@/views/uniqueBuilding/Index.vue"),
        },
				{
          path: "/construction-cranes",
          name: "constructionCranes",
          component: () => import("@/views/constructionCranes/Index.vue"),
        },
				{
          path: "/ganty-crane",
          name: "gantyCrane",
          component: () => import("@/views/gantyCrane/Index.vue"),
        },
				{
          path: "/industrial-building",
          name: "industrialBuilding",
          component: () => import("@/views/industrialBuilding/Index.vue"),
        },
				{
          path: "/marchs",
          name: "marchs",
          component: () => import("@/views/marchs/Index.vue"),
        },
				{
          path: "/partners",
          name: "partners",
          component: () => import("@/views/partners/Index.vue"),
        },
				{
          path: "/projects",
          name: "projects",
          component: () => import("@/views/projects/Index.vue"),
        },
				{
          path: "/news",
          name: "news",
          component: () => import("@/views/news/Index.vue"),
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
