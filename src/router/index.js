import Vue from "vue";
import Router from "vue-router";

import middlewarePipeline from "./middlewarePipeline";

Vue.use(Router);
const router = new Router({
  mode: "hash",
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
