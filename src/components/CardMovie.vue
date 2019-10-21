<template>
  <div class="row mx-3">
        <b-card
            :sub-title="`${ movie }`"
            img-src="https://picsum.photos/200/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            border-variant="light"
            style="max-width: 15rem;"
            class="border-none">
        </b-card>
    </div>
</template>

<script>
export default {
    name: "cardMovie",
    props: {
        movie: String
    },
}
</script>

<style>

</style>