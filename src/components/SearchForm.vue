<template>
  <v-container fluid>
    <v-row class="d-flex justify-end">
      <v-col cols="12" md="4" class="mt-7 d-flex align-center">
        <v-text-field
          v-model="searchQuery"
          label="Поиск"
          class="mr-6"
          clearable
        ></v-text-field>
        <v-btn @click="setSearchQuery" color="#fff">Найти</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "search-form",
  data() {
    return {
      searchQuery: "" as string, // поисковый запрос
    };
  },
  methods: {
    setSearchQuery(): void {
      // изменение поискового запроса
      this.$store.dispatch("setSearchQueryAction", this.searchQuery);
    },
  },
});
</script>
