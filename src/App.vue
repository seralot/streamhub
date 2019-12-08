<template>
  <v-app>
    <mainHeader></mainHeader>
    <v-content>
      <router-view />
    </v-content>
    <mainFooter></mainFooter>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
}
</script>
