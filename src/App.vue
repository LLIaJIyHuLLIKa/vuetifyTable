<template>
  <v-app id="app">
    <main-page></main-page>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import MainPage from "./pages/MainPage.vue";

export default Vue.extend({
  name: 'App',
  components: {
    MainPage
  }
});
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
