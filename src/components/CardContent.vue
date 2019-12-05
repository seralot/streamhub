<template>
  <div id="cardcontent" class="mt-5 d-flex p-0">
    <v-container class="d-flex shadow-lg p-3 mb-5 bg-white rounded">
      <v-img
        width="500"
        height="600"
        src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
      ></v-img>
      <div class="flex flex-column ml-5">
        <div class="row justify-content-between mx-3">
          <h3>Frozen</h3>
          <span>
            <b>Año:</b>
            2013
          </span>
        </div>
        <v-row class="justify-content-around">
          <span>
            <b>IMDb:</b>
            4,5/10
          </span>
          <span>
            <b>FilmAffinity:</b>
            4,5/10
          </span>
          <span>
            <b>RottentTomatoes:</b>
            88%
          </span>
        </v-row>
        <div class="mt-5">
          <h5>Información</h5>
          <v-row class="ml-3">
            <v-icon x-large class="mr-3" @click.stop="dialog = true">
              mdi-youtube
            </v-icon>
            <span class="mt-2 ml-5">Animación, Comedia</span>
            <v-row v-if="serie" class="mt-2 mx-5 justify-content-around">
              <span>
                <b>Temporadas:</b>
                2
              </span>
              <span>
                <b>Capitulos:</b>
                10
              </span>
            </v-row>
          </v-row>
        </div>
        <div class="mt-5">
          <h5>Descripción</h5>
          <p class="mt-3">
            Cuando una profecía condena a un reino a vivir un invierno eterno, la joven
            Anna, el temerario montañero Kristoff y el reno Sven emprenden un viaje
            épico en busca de Elsa, hermana de Anna y Reina de las Nieves, para poner
            fin al gélido hechizo. Adaptación libre del cuento "La reina de las nieves".
          </p>
        </div>
        <div class="mt-5">
          <h5>Plataformas</h5>
          <v-row class="justify-content-around">
            <p>
              <v-icon>mdi-netflix</v-icon>
              Temporadas: 1 y 2
              <v-icon>mdi-video-4k-box</v-icon>
            </p>
            <p>
              <v-icon>mdi-amazon</v-icon>
              Temporada: 1
              <v-icon>mdi-video-4k-box</v-icon>
            </p>
          </v-row>
        </div>
        <div class="mt-5">
          <h5>Premios</h5>
          <p>2013: 2 Premios Oscar: Mejor película de animación y mejor canción</p>
          <p>
            2013: Globos de Oro: Mejor película de animación. Nominada a mejor canción
          </p>
        </div>
      </div>
    </v-container>
    <v-dialog v-model="dialog" max-width="660">
      <v-card>
        <v-card-title class="headline">Trailer Frozen</v-card-title>

        <iframe
          class="ml-5"
          width="620"
          height="415"
          src="https://www.youtube.com/embed/Zi4LMpSDccc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" text @click="dialog = false">
            Cerrar
            <v-icon class="mb-1 ml-1">mdi-exit-to-app</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "cardcontent",
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style></style>
