import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import VueRouter from "vue-router";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Detail from "./pages/Detail";

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/home", component: Home },
    { path: "/page1", component: Page1 },
    { path: "/person/:id", component: Detail },
    { path: "/", redirect: "/home" }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
