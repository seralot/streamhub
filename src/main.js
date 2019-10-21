import Vue from 'vue';
import App from '@/App.vue';
import router from "@/router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from '@/components/Header.vue';

Vue.component('mainHeader', Header);

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  Header,
  render: h => h(App)
}).$mount('#app')
