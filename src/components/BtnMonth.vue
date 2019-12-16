<template>
  <div>
    <h5>
      <!-- mes actual con botones -->
      <v-icon @click="get_prev_month()" large>mdi-menu-left</v-icon>
      {{ nameMonth }}
      <v-icon @click="get_next_month()" large>mdi-menu-right</v-icon>
    </h5>
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
      this.$emit("update:btnMonth", this.month + 1)
    },
    get_next_month: function() {
      if (this.month < 11) {
        this.month++
      } else {
        this.month = 0
      }
      this.$emit("update:btnMonth", this.month + 1)
    },
    get_prev_month: function() {
      if (this.month > 1) {
        this.month--
      } else {
        this.month = 11
      }
      this.$emit("update:btnMonth", this.month + 1)
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
