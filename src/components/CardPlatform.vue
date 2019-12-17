<template>
  <div id="cardplatform" v-if="selectedPlatform[0]" class="mt-5 p-0">
    <v-container>
      <v-img
        class="mx-auto my-4"
        width="450"
        height="120"
        :src="`${selectedPlatform[0].logo}`"
      ></v-img>
    </v-container>
    <v-container class="shadow-lg p-3 mb-5 bg-white rounded">
      <div class="flex flex-column ml-5">
        <v-simple-table height="350px">
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-left">Básico</th>
                <th class="text-left">Estándar</th>
                <th class="text-left">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Precio Mensual</td>
                <td>{{ selectedPlatform[0].priceBasic }} €</td>
                <td>{{ selectedPlatform[0].priceStandard }} €</td>
                <td>{{ selectedPlatform[0].pricePremium }} €</td>
              </tr>
              <tr>
                <td>Resolución</td>
                <td>{{ selectedPlatform[0].resolutionBasic }}</td>
                <td>{{ selectedPlatform[0].resolutionStandard }}</td>
                <td>{{ selectedPlatform[0].resolutionPremium }}</td>
              </tr>
              <tr>
                <td>Dispositivos simultáneos</td>
                <td>{{ selectedPlatform[0].devicesBasic }}</td>
                <td>{{ selectedPlatform[0].devicesStandard }}</td>
                <td>{{ selectedPlatform[0].devicesPremium }}</td>
              </tr>
              <tr>
                <td>Perfiles de usuario</td>
                <td v-for="n in 3" :key="n">
                  Hasta {{ selectedPlatform[0].profiles }}
                </td>
              </tr>
              <tr>
                <td>Control parental</td>
                <td v-for="n in 3" :key="n">
                  <span v-if="selectedPlatform[0].parentalControl">Si</span>
                  <span v-else>No</span>
                </td>
              </tr>
              <tr>
                <td>Modo sin conexión</td>
                <td v-for="n in 3" :key="n">
                  <span v-if="selectedPlatform[0].noConnection">Si</span>
                  <span v-else>No</span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-container>
  </div>
</template>

<script>
import { URL } from "@/services/services"
import axios from "axios"
import _ from "lodash"
export default {
  name: "cardplatform",
  data() {
    return {
      selectedPlatform: {},
      dialog: false,
    }
  },
  beforeMount() {
    this.load("Netflix")
  },
  methods: {
    // cargamos los datos de la API
    load: function(platform) {
      this.selectedPlatform = {}
      this.searching = true
      axios
        .get(URL + "plataformas/?format=json")
        .then(response => {
          this.selectedPlatform = _.mapValues(response.data.results, function(item) {
            if (item.name == platform) {
              return {
                name: item.name,
                logo: item.urlLogo,
                pricePremium: item.pricePremium,
                priceStandard: item.priceStandard,
                priceBasic: item.priceBasic,
                resolutionPremium: item.resolutionPremium,
                resolutionStandard: item.resolutionStandard,
                resolutionBasic: item.resolutionBasic,
                devicesPremium: item.devicesPremium,
                devicesStandard: item.devicesStandard,
                devicesBasic: item.devicesBasic,
                profiles: item.profiles,
                parentalControl: item.parentalControl,
                noConnection: item.noConnection,
              }
            }
          })
        })
        .catch(() => {})
        .finally(() => {
          this.searching = false
        })
    },
  },
}
</script>

<style></style>
