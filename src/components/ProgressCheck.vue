<template>
  <div class="loading">
    <v-progress-circular :indeterminate="true" :size="60"></v-progress-circular>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "progress-check",
});
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>
