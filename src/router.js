import Vue from "vue"
import Router from "vue-router"

import core from "@/views/core.vue"
import series from "@/views/series.vue"
import movie from "@/views/movie.vue"
import documental from "@/views/documental.vue"
import content from "@/views/content.vue"

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
      component: movie,
    },
    {
      path: "/documentales",
      name: "documentales",
      component: documental,
    },
    {
      path: "/contenido",
      name: "contenido",
      component: content,
    },
  ],
})
