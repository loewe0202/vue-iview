import Vue from "vue";
import App from "./App.vue";
import router from "router/index";
import store from "store/index";

import "normalize.css"; // 初始化样式
import "assets/style.scss"; // 公共样式

// element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// lodash
import lodash from "utils/lodash.js";
Vue.use(lodash);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
