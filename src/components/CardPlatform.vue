<template>
  <div id="cardplatform" class="mt-5 p-0">
    <v-container>
      <v-img
        class="mx-auto my-4"
        width="450"
        height="120"
        :src="
          `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png`
        "
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
                <td>8.00 €</td>
                <td>12.00 €</td>
                <td>16.00 €</td>
              </tr>
              <tr>
                <td>Resolución</td>
                <td>SD</td>
                <td>HD</td>
                <td>HD/UHD 4K</td>
              </tr>
              <tr>
                <td>Dispositivos simultáneos</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Perfiles de usuario</td>
                <td v-for="n in 3" :key="n">
                  Hasta 5
                </td>
              </tr>
              <tr>
                <td>Control parental</td>
                <td v-for="n in 3" :key="n">
                  <span>Si</span>
                </td>
              </tr>
              <tr>
                <td>Modo sin conexión</td>
                <td v-for="n in 3" :key="n">
                  <span>Si</span>
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
  mounted() {
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
