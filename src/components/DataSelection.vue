<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="4" class="mt-7 text-center">
        <p>Выберите размер данных</p>
        <div class="mt-7">
          <v-btn @click="setSize('small')" dark color="#b71c1c" class="mr-7">Маленький</v-btn>
          <v-btn @click="setSize('big')" dark color="#6a1b9a">Большой</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "data-selection",
  methods: {
    setSize(size: string): void {
      // установка размера данных
      this.$store.dispatch("setDataSizeAction", size);
      this.$store.dispatch("fetchPeopleAction");
    }
  }
});
</script>
