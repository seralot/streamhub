<template>
  <div id="cardreviews">
    <div class="flex flex-column">
      <h3 class="text-center">Criticas</h3>
      <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>
              Joel Keller: Decider
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              "No es terrible, sobre todo en comparación con otras infames series de
              terror y ciencia ficción que hemos visto en Netflix (...) El hecho de que
              sea mediocre es casi un logro en sí mismo."
              <a
                href="https://decider.com/2019/12/05/v-wars-netflix-stream-it-or-skip-it/"
                target="_blank"
              >
                <v-icon>mdi-open-in-new</v-icon>
              </a>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
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
