<template>
  <div id="content" class="mt-5">
    <v-app-bar
      absolute
      dark
      scroll-target="#playground-example"
      color="transparent"
      collapse="true"
      flat
    >
      <v-btn icon>
        <v-icon class="text-secondary" x-large>mdi-arrow-left-bold-box</v-icon>
      </v-btn>
    </v-app-bar>
    <card-platform></card-platform>
    <div class="container-fluid mt-5">
      <h1 class="text-center mt-5">Contenido</h1>
      <filter-content typesearch="nombre"></filter-content>
      <div class="row">
        <card-movie
          v-for="data in moviesFound"
          :key="data.id"
          :valor="data.name"
        ></card-movie>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      moviesFound: [],
      años: [2019, 2018, 2017, 2016, 2015],
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

<style></style>
