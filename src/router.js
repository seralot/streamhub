import Vue from "vue";
import Router from "vue-router";

import core from "@/views/core.vue";

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "/",
        name: 'core',
        component: core
    }]
});