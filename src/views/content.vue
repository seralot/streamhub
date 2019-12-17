<template>
  <div id="v-content" class="mt-5">
    <v-app-bar absolute dark color="transparent" collapse flat>
      <v-btn icon>
        <v-icon class="text-secondary" x-large>mdi-arrow-left-bold-box</v-icon>
      </v-btn>
    </v-app-bar>
    <v-row>
      <v-col cols="8">
        <card-content></card-content>
      </v-col>
      <v-col cols="3">
        <card-reviews></card-reviews>
      </v-col>
    </v-row>
    <card-casting></card-casting>
  </div>
</template>

<script>
export default {
  name: "v-content",
}
</script>

<style></style>
