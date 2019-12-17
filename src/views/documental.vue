<template>
  <div id="documental">
    <menu-platform :menuPlatform.sync="platform"></menu-platform>
    <div>
      <div class="container-fluid">
        <filter-content typesearch="documental"></filter-content>
        <div class="container-fluid mt-5 ml-5">
          <div class="row">
            <h3 class="ml-5">Documentales</h3>
          </div>
          <div class="row">
            <card-movie :platform="platform" type="Documental" year score></card-movie>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "documental",
  data() {
    return {
      platform: null,
      años: [2019, 2018, 2017, 2016, 2015],
    }
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
