<template>
  <v-row class="mx-2">
    <div v-for="(content, index) in contents" :key="index">
      <v-card
        class="d-inline-block my-2 mx-auto mx-md-3 no-underline"
        hover
        :to="{ name: 'contenido' }"
        v-if="content"
      >
        <v-container>
          <v-row class="m-0">
            <v-col cols="auto" class="mx-auto mx-md-0">
              <v-img width="15rem" height="23rem" :src="`${content.poster}`"></v-img>
            </v-col>
            <v-col cols="12" md="12" lg="auto" class="text-center pl-0">
              <v-row class="flex flex-lg-column ma-0 fill-height" justify="center">
                <v-col class="px-0">
                  <v-icon>mdi-calendar-check</v-icon>
                  <h5 class="text-center font-weight-bold">
                    {{ content.release | dateFormat(year) }}
                  </h5>
                  <div v-if="score">
                    <v-icon large>mdi-star</v-icon>
                    <h6>{{ content.rating }}</h6>
                  </div>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <a @click.stop :href="content.urlPlatform" target="_blank">
                      <v-icon large>mdi-netflix</v-icon>
                    </a>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon btn @click.stop.prevent="dialog = true">
                    <v-icon large>mdi-youtube</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon large>mdi-information</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-card-subtitle class="p-0 ">
          <h5 class="black--text text-center font-weight-bold">{{ content.title }}</h5>
        </v-card-subtitle>
        <v-dialog v-model="dialog" max-width="660" v-if="content">
          <v-card>
            <v-card-title class="headline">Trailer {{ content.title }}</v-card-title>

            <iframe
              class="ml-5"
              width="620"
              height="415"
              :src="content.trailer"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="darken-1" text @click="dialog = false">
                Cerrar
                <v-icon class="mb-1 ml-1">mdi-exit-to-app</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import { URL } from "@/services/services"
import axios from "axios"
import _ from "lodash"
export default {
  name: "cardMovie",
  props: {
    score: Boolean,
    platform: String,
    type: String,
    month_filter: Boolean,
    month: { Number, default: 0 },
    year: Boolean,
  },
  data() {
    return {
      contents: {},
      dialog: false,
      searching: false,
    }
  },
  filters: {
    dateFormat: function(value, year) {
      if (year) return value.substr(0, 4)
      return value.substr(8, 6)
    },
  },
  mounted() {
    this.load(this.platform, this.type, this.month, this.month_filter)
  },
  methods: {
    // cargamos los datos de la API
    load: function(platform, type, month, filter) {
      this.contents = {}
      this.searching = true
      if (filter) {
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
                  rating: item.imdbRating,
                  trailer: item.content.trailer,
                  urlPlatform: item.url,
                }
              }
            })
          })
          .catch(() => {})
          .finally(() => {
            this.searching = false
          })
      } else {
        axios
          .get(URL + "plataformaContenido/?format=json")
          .then(response => {
            this.contents = _.mapValues(response.data.results, function(item) {
              if (item.platform == platform && item.content.typeContent == type) {
                return {
                  platform: item.platform,
                  typeContent: item.content.typeContent,
                  title: item.content.title,
                  release: item.content.release,
                  poster: item.content.poster,
                  trailer: item.content.trailer,
                  urlPlatform: item.url,
                }
              }
            })
          })
          .catch(() => {})
          .finally(() => {
            this.searching = false
          })
      }
    },
  },
  watch: {
    type: function() {
      this.load(this.platform, this.type, this.month, this.month_filter)
    },
    platform: function() {
      this.load(this.platform, this.type, this.month, this.month_filter)
    },
    month: function() {
      this.load(this.platform, this.type, this.month, this.month_filter)
    },
  },
}
</script>

<style>
.mdi-youtube:hover {
  color: #ff0000 !important;
}
.mdi-netflix {
  color: #777777 !important;
}
.mdi-netflix:hover {
  color: #e50914 !important;
}
.mdi-information:hover {
  color: darkblue !important;
}
.mdi-amazon:hover {
  color: #ff9900 !important;
}
.no-underline:hover {
  text-decoration: none;
}

.marginCard {
  margin-right: 2em;
  margin-left: 2em;
}
</style>
