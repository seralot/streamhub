<template>
  <div id="cardreviews">
    <v-container>
      <div class="flex flex-column ml-5">
        <h3 class="text-center">Criticas</h3>
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(item, i) in 5" :key="i">
              <v-expansion-panel-header>
                Javier Ocaña: Diario El País
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                "Un ‘disney’ de los grandes. (...) lo que más reluce en ella es ese
                aroma de los primeros clásicos. (...) Con estructura y arraigo de
                musical, 'Frozen' mejora incluso a la ya excelente 'Enredados'"
                <v-icon>mdi-open-in-new</v-icon>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "cardreviews",
}
</script>

<style>
.mdi-open-in-new:hover {
  color: blue !important;
}
</style>
