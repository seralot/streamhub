<template>
  <div class="row mx-3">
    <b-card
      :img-src="`${media.Poster}`"
      img-alt="Image"
      img-top
      tag="article"
      border-variant="light"
      style="max-width: 15rem;"
      class="border-none"
    >
      <b-card-text class="text-center">
        <p class="font-weight-bold">{{ media.Title }}</p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { API_KEY, URL } from "@/services/services"
import axios from "axios"
export default {
  name: "cardMovie",
  data() {
    return {
      media: [],
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    // cargamos los datos de la API
    load: function() {
      axios.get(URL + API_KEY + "&t=" + this.valor).then(response => {
        this.media = response.data
      })
    },
  },
  props: {
    valor: String,
  },
}
</script>

<style></style>
