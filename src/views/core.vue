<template>
  <div id="core">
    <menu-platform></menu-platform>
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
            <v-tab @click="loadData('serie')">Series</v-tab>
            <v-tab @click="loadData('movie')">Peliculas</v-tab>
            <v-tab @click="loadData('documental')">Documentales</v-tab>
          </v-tabs>
          <btn-month class="mt-5"></btn-month>
        </div>
        <div class="container-fluid mt-5 ml-5">
          <div class="row">
            <h3 class="ml-5">Estrenos</h3>
          </div>
          <div class="row">
            <card-movie
              v-for="data in moviesFound"
              :key="data.id"
              :valor="data.name"
            ></card-movie>
          </div>
        </div>
      </div>
    </div>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
export default {
  name: "core",
  data() {
    return {
      moviesFound: [],
    }
  },
  mounted() {
    this.loadData("serie")
  },
  methods: {
    loadData: function(typeSearch) {
      this.moviesFound = []

      this.get_contents().forEach(item => {
        if (item.type == typeSearch) {
          this.moviesFound.push(item)
        }
      })
    },
    get_contents: function() {
      let movies = [
        { id: 1, name: "Elite", type: "serie" },
        { id: 2, name: "Sex Education", type: "serie" },
        { id: 3, name: "Stranger Things", type: "serie" },
        { id: 4, name: "Mindhunter", type: "serie" },
        { id: 5, name: "Black Mirror", type: "serie" },
        { id: 6, name: "Bright", type: "movie" },
      ]

      return movies
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
