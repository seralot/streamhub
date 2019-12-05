<template>
  <div id="cardplatform" class="mt-5 p-0">
    <v-container>
      <v-img
        class="mx-auto my-4"
        width="450"
        height="120"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
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
                <td>7,99 €</td>
                <td>11,99 €</td>
                <td>15,99 €</td>
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
                <td>Hasta 5</td>
                <td>Hasta 5</td>
                <td>Hasta 5</td>
              </tr>
              <tr>
                <td>Control parental</td>
                <td>Si</td>
                <td>Si</td>
                <td>Si</td>
              </tr>
              <tr>
                <td>Modo sin conexión</td>
                <td>Si</td>
                <td>Si</td>
                <td>Si</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "cardplatform",
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style></style>
