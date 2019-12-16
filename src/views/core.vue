<template>
  <div id="core">
    <menu-platform :menuPlatform.sync="platform"></menu-platform>
    <div>
      <div class="container-fluid">
        <div
          class="d-flex flex-column flex-md-row justify-content-between text-uppercase mx-5"
        >
          <v-tabs
            background-color="transparent"
            color="black"
            class="col-10 col-md-8 col-xl-9"
          >
            <v-tab @click="changeType('Serie')">Series</v-tab>
            <v-tab @click="changeType('Pelicula')">Peliculas</v-tab>
            <v-tab @click="changeType('Documental')">Documentales</v-tab>
          </v-tabs>
          <btn-month :btnMonth.sync="month" class="mt-5"></btn-month>
        </div>
        <div class="container-fluid mt-5 ml-5">
          <div class="row">
            <h3 class="ml-5">Estrenos</h3>
          </div>
          <p v-if="searching">Buscando...</p>
          <div v-else class="row">
            <card-movie
              v-for="(content, index) in contents"
              :key="index"
              :content="content"
            ></card-movie>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { URL } from "@/services/services"
import axios from "axios"
import _ from "lodash"
export default {
  name: "core",
  data() {
    return {
      contents: {},
      platform: null,
      type: "Serie",
      month: null,
      searching: false,
    }
  },
  mounted() {
    this.load(this.platform, this.type, this.month)
  },
  methods: {
    changeType: function(newType) {
      this.type = newType
    },
    // cargamos los datos de la API
    load: function(platform, type, month) {
      this.contents = {}
      this.searching = true
      axios
        .get(URL + "plataformaContenido/?format=json")
        .then(response => {
          this.contents = _.mapValues(response.data.results, function(item) {
            if (
              item.platform == platform &&
              item.content.typeContent == type &&
              item.content.release.substr(5, 2) == month
            ) {
              return {
                platform: item.platform,
                typeContent: item.content.typeContent,
                title: item.content.title,
                release: item.content.release,
                poster: item.content.poster,
                trailer: item.content.trailer,
              }
            }
          })
        })
        .catch(() => {})
        .finally(() => {
          this.searching = false
        })
    },
  },
  watch: {
    type: function() {
      this.load(this.platform, this.type, this.month)
    },
    platform: function() {
      this.load(this.platform, this.type, this.month)
    },
    month: function() {
      this.load(this.platform, this.type, this.month)
    },
  },
}
</script>

<style>
.margin img {
  margin: 0 1em;
  padding: 0.5em;
}

.btnNoBorder {
  border: none !important;
  background-color: transparent;
}
</style>
