import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import vuetify from "./plugins/vuetify"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import CardMovie from "@/components/CardMovie.vue"
import MenuPlatform from "@/components/MenuPlatform.vue"
import BtnMonth from "@/components/BtnMonth.vue"
import FilterContent from "@/components/FilterContent.vue"
import CardContent from "@/components/CardContent.vue"
import CardReviews from "@/components/CardReviews.vue"
import CardCasting from "@/components/CardCasting.vue"
import CardPlatform from "@/components/CardPlatform.vue"

Vue.component("mainHeader", Header)
Vue.component("mainFooter", Footer)
Vue.component("card-movie", CardMovie)
Vue.component("menu-platform", MenuPlatform)
Vue.component("btn-month", BtnMonth)
Vue.component("filter-content", FilterContent)
Vue.component("card-content", CardContent)
Vue.component("card-reviews", CardReviews)
Vue.component("card-casting", CardCasting)
Vue.component("card-platform", CardPlatform)

Vue.use(BootstrapVue)
Vue.config.app = process.env
Vue.config.productionTip = false

const vm = new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount("#app")

export default vm
