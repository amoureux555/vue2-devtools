import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 注册ui组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// 引入阿里字体库
import "../public/font/iconfont.css";
// 引入全局样式
import "@/assets/css/reset.css";
// 适配
import "../postcss.config";
// 背景粒子特效
import VueParticles from "vue-particles";
Vue.use(VueParticles);
// 用于定位
import { VueJsonp } from "vue-jsonp";
Vue.prototype.$jsonp = VueJsonp;
Vue.use(VueJsonp);

// 发送请求
import axios from "axios";
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
