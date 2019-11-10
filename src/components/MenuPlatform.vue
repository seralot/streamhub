<template>
  <div class="mt-3 mb-5">
    <p>Mostrando el contenido de:</p>
    <div class="d-flex justify-content-center mt-3 margin">
      <img
        @click="changeActive()"
        src="@/assets/icons_streaming/netflix.svg"
        class="logos-streaming"
        v-bind:class="{ 'activate-streaming': isActive }"
        alt="Netflix"
      />
      <img
        @click="changeActiveHBO()"
        src="@/assets/icons_streaming/hbo.svg"
        class="logos-streaming2"
        v-bind:class="{ 'activate-streaming': isActiveHBO }"
        alt="HBO"
      />
      <img
        @click="changeActiveVideo()"
        src="@/assets/icons_streaming/amazon.svg"
        class="logos-streaming"
        v-bind:class="{ 'activate-streaming': isActiveVideo }"
        alt="Prime Video"
      />
      <img
        @click="changeActiveDisney()"
        src="@/assets/icons_streaming/disney.svg"
        class="logos-streaming"
        v-bind:class="{ 'activate-streaming': isActiveDisney }"
        alt="Disney +"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "menuPlatform",
  data() {
    return {
      isActive: true,
      isActiveHBO: false,
      isActiveVideo: false,
      isActiveDisney: false,
    }
  },
  methods: {
    changeActive: function() {
      this.isActive = true
      this.isActiveHBO = false
      this.isActiveVideo = false
      this.isActiveDisney = false
    },
    changeActiveHBO: function() {
      this.isActive = false
      this.isActiveHBO = true
      this.isActiveVideo = false
      this.isActiveDisney = false
    },
    changeActiveVideo: function() {
      this.isActive = false
      this.isActiveHBO = false
      this.isActiveVideo = true
      this.isActiveDisney = false
    },
    changeActiveDisney: function() {
      this.isActive = false
      this.isActiveHBO = false
      this.isActiveVideo = false
      this.isActiveDisney = true
    },
  },
}
</script>

<style>
.activate-streaming {
  opacity: 1 !important;
}

.logos-streaming {
  width: 5em;
  opacity: 0.3;
}

.logos-streaming2 {
  width: 3.5em;
  opacity: 0.3;
}

.logos-streaming:hover,
.logos-streaming2:hover {
  opacity: 1;
}
</style>
