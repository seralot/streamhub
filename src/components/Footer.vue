<template>
  <div id="main-footer">
    <v-footer dark padless class="mt-5" color="#343a40">
      <v-col class="text-center" cols="11">
        {{ new Date().getFullYear() }} —
        <strong>Seralot</strong>
      </v-col>
      <v-col class="text-center" cols="1">
        <a
          class="no-underline"
          href="https://github.com/seralot/streamhub"
          target="_blank"
        >
          <v-icon>mdi-github-box</v-icon>
        </a>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "main-footer",
}
</script>

<style>
.mdi-github-box:hover {
  color: grey;
}
</style>
