<template>
  <div>
    <h3>
      <!-- mes actual con botones -->
      <button @click="get_prev_month()" class="btnNoBorder">
        <i class="fas fa-caret-left"></i>
      </button>
      {{ nameMonth }}
      <button @click="get_next_month()" class="btnNoBorder">
        <i class="fas fa-caret-right"></i>
      </button>
    </h3>
  </div>
</template>

<script>
export default {
  name: "btnMonth",
  data() {
    return {
      month: "",
    }
  },
  computed: {
    nameMonth: function() {
      const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ]
      return monthNames[this.month]
    },
  },
  mounted() {
    this.get_month()
  },
  methods: {
    get_month: function() {
      let actual_month = new Date()
      this.month = actual_month.getMonth()
    },
    get_next_month: function() {
      if (this.month < 11) {
        this.month++
      } else {
        this.month = 0
      }
    },
    get_prev_month: function() {
      if (this.month > 1) {
        this.month--
      } else {
        this.month = 11
      }
    },
  },
}
</script>

<style>
.btnNoBorder {
  border: none !important;
  background-color: transparent;
}
</style>
