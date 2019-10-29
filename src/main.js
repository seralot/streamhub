import Vue from 'vue';
import App from '@/App.vue';
import router from "@/router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from '@/components/Header.vue';
import CardMovie from '@/components/CardMovie.vue';
import MenuPlatform from '@/components/MenuPlatform.vue';

Vue.component('mainHeader', Header);
Vue.component('card-movie', CardMovie);
Vue.component('menu-platform', MenuPlatform);

Vue.use(BootstrapVue);
Vue.config.app = process.env;
Vue.config.productionTip = false

new Vue({
  router,
  Header,
  CardMovie,
  MenuPlatform,
  render: h => h(App)
}).$mount('#app')
