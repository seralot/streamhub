import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import Header from "@/components/Header.vue"
import CardMovie from "@/components/CardMovie.vue"
import MenuPlatform from "@/components/MenuPlatform.vue"
import BtnMonth from "@/components/BtnMonth.vue"

Vue.component("mainHeader", Header)
Vue.component("card-movie", CardMovie)
Vue.component("menu-platform", MenuPlatform)
Vue.component("btn-month", BtnMonth)

Vue.use(BootstrapVue)
Vue.config.app = process.env
Vue.config.productionTip = false

new Vue({
  router,
  Header,
  CardMovie,
  MenuPlatform,
  BtnMonth,
  render: h => h(App),
}).$mount("#app")
