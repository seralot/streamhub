<template>
  <div id="series">
    <menu-platform></menu-platform>
    <div>
      <div class="container-fluid">
        <filter-content typesearch="pelicula"></filter-content>
        <div class="container-fluid mt-5 ml-5">
          <div class="row">
            <h3 class="ml-5">Peliculas</h3>
          </div>
          <div class="row">
            <card-movie
              v-for="data in moviesFound"
              :key="data.id"
              :valor="data.name"
              score
            ></card-movie>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "series",
  data() {
    return {
      moviesFound: [],
      años: [2019, 2018, 2017, 2016, 2015],
    }
  },
  mounted() {
    this.loadData("movie")
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
