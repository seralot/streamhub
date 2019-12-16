<template>
  <div class="row m-1">
    <div v-if="content.title">
      <v-card
        class="d-inline-block my-1 no-underline"
        hover
        :to="{ name: 'contenido' }"
      >
        <v-container>
          <v-row class="m-0" align="center" justify="center">
            <v-col cols="auto">
              <v-img width="200" :src="`${content.poster}`"></v-img>
            </v-col>
            <v-col cols="12" md="12" lg="auto" class="text-center pl-0">
              <v-row class="flex flex-lg-column ma-0 fill-height" justify="center">
                <v-col class="px-0">
                  <v-icon>mdi-calendar-check</v-icon>
                  <h6 class="text-center">{{ estreno }}</h6>
                  <div v-if="score">
                    <v-icon>mdi-star</v-icon>
                    <h6>9,0</h6>
                  </div>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-netflix</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon btn @click.stop.prevent="dialog = true">
                    <v-icon>mdi-youtube</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-information</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
        <v-card-subtitle class="p-0 ">
          <h5 class="black--text text-center font-weight-bold">{{ content.title }}</h5>
        </v-card-subtitle>
      </v-card>
      <v-dialog v-model="dialog" max-width="660">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "cardMovie",
  props: {
    score: Boolean,
    content: Object,
  },
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    estreno: function() {
      return this.content.release.substr(5, 6)
    },
  },
}
</script>

<style>
.mdi-youtube:hover {
  color: #ff0000 !important;
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
</style>
