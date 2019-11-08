<template>
  <div id="core">
    <menu-platform></menu-platform>
    <div>
      <div class="w-75 mx-md-5">
        <div
          class="d-flex flex-column flex-md-row justify-content-between text-uppercase"
        >
          <div class="text-center tex-md-center">
            <!-- botones para elegir si mostrar series, peliculas o documentales -->
            <button @click="loadData('serie')" class="btnNoBorder">Series</button>
            |
            <button @click="loadData('movie')" class="btnNoBorder">Peliculas</button>
            |
            <button @click="loadData('movie')" class="btnNoBorder">Documentales</button>
          </div>
          <btn-month></btn-month>
        </div>
        <div class="ml-5">
          <h3 class="text-left">Estrenos</h3>
          <div class="row">
            <card-movie
              v-for="data in moviesFound"
              :key="data.id"
              :valor="data.name"
            ></card-movie>
          </div>
          <h3 class="text-left">Abandonos</h3>
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
