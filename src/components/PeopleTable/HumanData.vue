<template>
  <div class="mt-12">
    <label for="description">Описание:</label>
    <v-textarea
      id="description"
      readonly
      dense
      no-resize
      :value="selectedHuman.description"
    ></v-textarea>
    <p>Адрес проживания: <b>{{ selectedHuman.address.streetAddress }}</b></p>
    <p>Город: <b>{{ selectedHuman.address.city }}</b></p>
    <p>Провинция/штат: <b>{{ selectedHuman.address.state }}</b></p>
    <p>Индекс: <b>{{ selectedHuman.address.zip }}</b></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "human-data",
  props: {
    selectedHuman: Object,
  },
});
</script>
