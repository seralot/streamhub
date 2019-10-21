<template>
  <div id="core">
    <div class="mt-3">
        <p>Mostrando el contenido de:</p>
        <div class="d-flex justify-content-center mt-3 margin">
            <p class="bg-secondary font-weight-bold text-white">NETFLIX</p>
            <p>HBO</p>
            <p>PRIME VIDEO</p>
            <p>DISNEY +</p>
            <p>FUBOTV</p>
        </div>
    </div>
    <div class="mx-5">
        <h3 class="text-left">Estrenos</h3>
        <div class="row">
        <card-movie v-for="serie in series" :key="serie" :movie="serie.name"></card-movie>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "core",
    data () {
        return {
        series: [
            {name: 'La casa de papel'},
            {name: 'Elite'},
            {name: 'Sons of Anarchy'},
            {name: 'Black Mirror'},
            {name: 'Gotham'}
        ]
        };
    }
}
</script>

<style>
    .margin p{
        margin: 0 1em;
        padding: 0.5em;
    }
</style>