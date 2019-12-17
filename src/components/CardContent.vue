<template>
  <div id="cardcontent" class="mt-5 d-flex p-0">
    <v-container class="margin-l d-md-flex shadow-lg p-3 mb-5 bg-white rounded">
      <v-img
        width="30em"
        height="46em"
        src="https://m.media-amazon.com/images/M/MV5BY2JiYzNhZWMtZmE4My00NzhmLWEzZjAtMDIwODkzOWY3NWQ5XkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_SY1000_CR0,0,642,1000_AL_.jpg"
      ></v-img>
      <div class="flex flex-column ml-5">
        <div class="row justify-content-between mx-3">
          <h3>V-Wars</h3>
          <span>
            <b>Año:</b>
            2019
          </span>
        </div>
        <v-row class="justify-content-around">
          <span>
            <b>IMDb:</b>
            5,0/10
          </span>
          <span>
            <b>FilmAffinity:</b>
            6,2/10
          </span>
          <span>
            <b>RottentTomatoes:</b>
            88%
          </span>
        </v-row>
        <div class="mt-5">
          <h5>Información</h5>
          <v-row class="ml-3">
            <p class="ml-2 text-center border rounded p-1">16+</p>
            <span class="mt-2 ml-5">Animación, Comedia</span>
            <v-icon x-large class="mb-3 mr-3 ml-5" @click.stop="dialog = true">
              mdi-youtube
            </v-icon>
            <v-row class="mt-2 mx-5 justify-content-around">
              <span>
                <b>Temporadas:</b>
                1
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
            Una enfermedad que se propaga rápidamente y convierte a las víctimas en
            vampiros chupasangres enfrenta a dos buenos amigos en una lucha por el
            futuro de la humanidad.
          </p>
        </div>
        <div class="mt-5">
          <h5>Plataformas</h5>
          <v-row class="justify-content-around">
            <p>
              <v-icon>mdi-netflix</v-icon>
              Temporadas: 1
              <v-icon>mdi-video-4k-box</v-icon>
            </p>
          </v-row>
        </div>
      </div>
    </v-container>
    <v-dialog v-model="dialog" max-width="660">
      <v-card>
        <v-card-title class="headline">Trailer V-Wars</v-card-title>

        <iframe
          class="ml-5"
          width="620"
          height="415"
          src="https://www.youtube.com/embed/M1kuAdVKvuE"
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

<style>
.margin-l {
  margin-left: 5rem;
}
</style>
