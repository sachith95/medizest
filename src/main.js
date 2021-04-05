import Vue from "vue";
import App from "./App.vue";
import "@/plugin/echart";
import vuetify from "@/plugin/vuetify";
import "@/plugin/axios";
import "@/plugin/azureMap";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
