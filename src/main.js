import Vue from "vue";
import App from "./App.vue";
import router from "router/index";
import store from "store/index";

// 公共样式
import "assets/reset.scss";

// NutUI
import NutUI from "@nutui/nutui";
NutUI.install(Vue);

// lodash
import lodash from "utils/lodash.js";
Vue.use(lodash);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
