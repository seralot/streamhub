<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'core' }">
        <i class="far fa-play-circle"></i>
        STREAMHUB
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text-uppercase">
          <b-nav-item :to="{ name: 'core' }">Inicio</b-nav-item>
          <b-nav-item :to="{ name: 'series' }">Series</b-nav-item>
          <b-nav-item :to="{ name: 'peliculas' }">Peliculas</b-nav-item>
          <b-nav-item :to="{ name: 'documentales' }">Documentales</b-nav-item>
          <b-nav-item-dropdown class="mr-4">
            <template v-slot:button-content>
              Plataformas
            </template>
            <b-dropdown-item :to="{ name: 'series' }">Netflix</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'peliculas' }">HBO</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'documentales' }">
              Prime Video
            </b-dropdown-item>
            <b-dropdown-item :to="{ name: 'documentales' }">Disney +</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form class="mr-3">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              <i class="fas fa-search"></i>
            </b-button>
          </b-nav-form>
          <b-nav-item-dropdown right class="mr-4">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <i class="fas fa-user"></i>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "main-header",
}
</script>

<style lang="scss"></style>
