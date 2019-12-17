<template>
  <div
    id="name-filter"
    class="d-flex flex-column flex-md-row justify-content-center text-uppercase"
  >
    <v-col cols="3" md="2">
      <v-autocomplete
        clearable
        v-model="contents"
        :items="contentSearch"
        :placeholder="searchName"
        label="Nombre"
      ></v-autocomplete>
    </v-col>
    <v-col cols="2" v-if="typeContent">
      <v-select :items="types" label="Tipo" value="Serie"></v-select>
    </v-col>
    <v-col cols="2">
      <v-autocomplete clearable :items="genre" label="Genero"></v-autocomplete>
    </v-col>
    <v-col cols="2" md="2" xl="2">
      <v-select v-model="selectedAges" :items="ages" label="Años" multiple>
        <template v-slot:selection="{ item, index }">
          <span v-if="index === 0">{{ item }}</span>
          <span v-if="index === 1" class="grey--text caption">
            (+{{ selectedAges.length - 1 }} estados)
          </span>
        </template>
        <template v-slot:append-item>
          <v-divider class="mt-2"></v-divider>
          <v-list-item ripple @click="toggle" :disabled="!someAge">
            <v-list-item-action v-if="someAge">
              <v-icon color="indigo darken-4">
                {{ icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Borrar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-select>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "filter-content",
  props: {
    typesearch: String,
    typeContent: Boolean,
    contents: Object,
  },
  data() {
    return {
      types: ["Serie", "Pelicula", "Documental"],
      contentSearch: [],
      genre: [],
      ages: [2019, 2018, 2017, 2016, 2015],
      selectedAges: [],
    }
  },
  computed: {
    someAge() {
      return this.selectedAges.length > 0
    },
    icon() {
      if (this.someAge) return "mdi-minus-box"
      return "mdi-checkbox-blank-outline"
    },
    searchName() {
      return "Buscar " + this.typesearch
    },
  },
  mounted() {
    this.loadSearchContent()
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.someAge) {
          this.selectedAges = []
        }
      })
    },
    loadSearchContent: function() {
      for (const item in this.contents) {
        this.contentSearch.push(this.contents[item].title)
        this.genre.push(this.contents[item].genre)
      }
    },
  },
}
</script>

<style lang="scss"></style>
