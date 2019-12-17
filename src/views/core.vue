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
          <div class="row">
            <card-movie
              :platform="platform"
              :type="type"
              month_filter
              :month="month"
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
      platform: null,
      type: "Serie",
      month: null,
    }
  },
  methods: {
    changeType: function(newType) {
      this.type = newType
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
