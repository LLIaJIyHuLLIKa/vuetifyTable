<template>
  <v-container class="mt-12">
    <v-row class="d-flex justify-end">
      <v-col cols="12" md="6">
        <v-select
          dense
          :items="options"
          v-model="perPage"
          label="Количество записей на странице"
        ></v-select>
      </v-col>
      <v-col cols="12" md="5">
        <v-pagination
          v-model="page"
          :length="pagesCount"
          :total-visible="6"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "pagination-form",
  data() {
    return {
      page: 1 as number, // текущая страница
      options: [15, 30, 50] as Array<number>, // список опций
      perPage: 15 as number, // количество записей на странице
    };
  },
  props: {
    pagesCount: Number,
  },
  watch: {
    page() {
      this.$emit("page", this.page);
    },
    perPage() {
      this.$emit("perPage", this.perPage);
      this.$emit("page", 1);
    },
  },
});
</script>
