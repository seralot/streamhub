<template>
  <div id="cardcasting">
    <v-container>
      <h2 class="text-center">Reparto</h2>
      <v-row>
        <div class="mx-5" v-for="(item, i) in 6" :key="i">
          <v-avatar class="profile" color="grey" size="150" tile>
            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
          </v-avatar>
          <h6 class="text-center">Robert Downey Jr.</h6>
          <p class="text-center">Director</p>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "cardcasting",
  data() {
    return {}
  },
}
</script>

<style></style>
