import Vue from "vue"
import Router from "vue-router"

import core from "@/views/core.vue"
import series from "@/views/series.vue"
import peliculas from "@/views/peliculas.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "core",
      component: core,
    },
    {
      path: "/series",
      name: "series",
      component: series,
    },
    {
      path: "/peliculas",
      name: "peliculas",
      component: peliculas,
    },
  ],
})
