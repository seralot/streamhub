<template>
  <div class="mt-3 mb-5">
        <p>Mostrando el contenido de:</p>
        <div class="d-flex justify-content-center mt-3 margin">
            <img src="@/assets/icons_streaming/netflix.svg" class="logos-streaming activate-streaming" alt="Netflix">
            <img src="@/assets/icons_streaming/hbo.svg" class="logos-streaming2" alt="HBO">
            <img src="@/assets/icons_streaming/amazon.svg" class="logos-streaming" alt="Prime Video">
            <img src="@/assets/icons_streaming/disney.svg" class="logos-streaming" alt="Disney +">
        </div>
    </div>
</template>

<script>
export default {
  name: "menuPlatform",
  data (){

  }
}
</script>

<style>
    .activate-streaming{
        opacity:1 !important;
    }

    .logos-streaming{
        width: 5em; 
        opacity: 0.3;
    }

    .logos-streaming2{
        width: 3.5em;
        opacity: 0.3;
    }

    .logos-streaming:hover,
    .logos-streaming2:hover{
        opacity: 1;
    }
</style>