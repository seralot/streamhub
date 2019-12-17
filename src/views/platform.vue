<template>
  <div id="platform" class="mt-5">
    <v-app-bar absolute dark color="transparent" collapse flat>
      <v-btn icon>
        <v-icon class="text-secondary" x-large>mdi-arrow-left-bold-box</v-icon>
      </v-btn>
    </v-app-bar>
    <card-platform></card-platform>
    <div class="container-fluid mt-5">
      <h1 class="text-center mt-5">Contenido</h1>
      <filter-content typeContent typesearch="nombre"></filter-content>
      <div class="row">
        <card-movie platform="Netflix" type="Serie" year score></card-movie>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "platform",
  data() {
    return {
      años: [2019, 2018, 2017, 2016, 2015],
    }
  },
}
</script>

<style></style>
