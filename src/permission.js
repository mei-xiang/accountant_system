import router from "./router";
import store from "./store";
import asyncRouters from "@/router/asyncRouters.js";

router.beforeEach(async (to, from, next) => {
  console.log('from.path ->',to)
  if (to.path === "/") {
    router.addRoutes(asyncRouters);
    store.commit("permission/PERMISSION_ROUTES", asyncRouters);
  }
  next();
});
