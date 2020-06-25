<template>
  <thead>
    <tr>
      <th class="text-center">
        id
        <v-icon
          @click="setSortField('id')"
          v-if="sortingFields.id === '' || sortingFields.id === 'ascending'"
          class="ml-2"
          >mdi-sort-ascending</v-icon
        >
        <v-icon @click="setSortField('id')" v-else class="ml-2"
          >mdi-sort-descending</v-icon
        >
      </th>
      <th class="text-center">
        firstName
        <v-icon
          @click="setSortField('firstName')"
          v-if="
            sortingFields.firstName === '' ||
              sortingFields.firstName === 'ascending'
          "
          class="ml-2"
          >mdi-sort-ascending</v-icon
        >
        <v-icon @click="setSortField('firstName')" v-else class="ml-2"
          >mdi-sort-descending</v-icon
        >
      </th>
      <th class="text-center">
        lastName
        <v-icon
          @click="setSortField('lastName')"
          v-if="
            sortingFields.lastName === '' ||
              sortingFields.lastName === 'ascending'
          "
          class="ml-2"
          >mdi-sort-ascending</v-icon
        >
        <v-icon @click="setSortField('lastName')" v-else class="ml-2"
          >mdi-sort-descending</v-icon
        >
      </th>
      <th class="text-center">
        email
        <v-icon
          @click="setSortField('email')"
          v-if="
            sortingFields.email === '' || sortingFields.email === 'ascending'
          "
          class="ml-2"
          >mdi-sort-ascending</v-icon
        >
        <v-icon @click="setSortField('email')" v-else class="ml-2"
          >mdi-sort-descending</v-icon
        >
      </th>
      <th class="text-center">
        phone
        <v-icon
          @click="setSortField('phone')"
          v-if="
            sortingFields.phone === '' || sortingFields.phone === 'ascending'
          "
          class="ml-2"
          >mdi-sort-ascending</v-icon
        >
        <v-icon @click="setSortField('phone')" v-else class="ml-2"
          >mdi-sort-descending</v-icon
        >
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { SortingType } from "@/store/types";

export default Vue.extend({
  name: "table-header",
  props: {
    sortingFields: Object as PropType<SortingType>,
  },
  methods: {
    setSortField(field: string): void {
      // установка поля сортировки
      switch (field) {
        case "id":
          this.$set(this.sortingFields, "firstName", "");
          this.$set(this.sortingFields, "lastName", "");
          this.$set(this.sortingFields, "email", "");
          this.$set(this.sortingFields, "phone", "");

          if (
            this.sortingFields.id === "" ||
            this.sortingFields.id === "ascending"
          ) {
            this.$set(this.sortingFields, "id", "descending");
            break;
          } else {
            this.$set(this.sortingFields, "id", "ascending");
            break;
          }
        case "firstName":
          this.$set(this.sortingFields, "id", "");
          this.$set(this.sortingFields, "lastName", "");
          this.$set(this.sortingFields, "email", "");
          this.$set(this.sortingFields, "phone", "");

          if (
            this.sortingFields.firstName === "" ||
            this.sortingFields.firstName === "ascending"
          ) {
            this.$set(this.sortingFields, "firstName", "descending");
            break;
          } else {
            this.$set(this.sortingFields, "firstName", "ascending");
            break;
          }
        case "lastName":
          this.$set(this.sortingFields, "firstName", "");
          this.$set(this.sortingFields, "id", "");
          this.$set(this.sortingFields, "email", "");
          this.$set(this.sortingFields, "phone", "");

          if (
            this.sortingFields.lastName === "" ||
            this.sortingFields.lastName === "ascending"
          ) {
            this.$set(this.sortingFields, "lastName", "descending");
            break;
          } else {
            this.$set(this.sortingFields, "lastName", "ascending");
            break;
          }
        case "email":
          this.$set(this.sortingFields, "firstName", "");
          this.$set(this.sortingFields, "lastName", "");
          this.$set(this.sortingFields, "id", "");
          this.$set(this.sortingFields, "phone", "");

          if (
            this.sortingFields.email === "" ||
            this.sortingFields.email === "ascending"
          ) {
            this.$set(this.sortingFields, "email", "descending");
            break;
          } else {
            this.$set(this.sortingFields, "email", "ascending");
            break;
          }
        case "phone":
          this.$set(this.sortingFields, "firstName", "");
          this.$set(this.sortingFields, "lastName", "");
          this.$set(this.sortingFields, "email", "");
          this.$set(this.sortingFields, "id", "");

          if (
            this.sortingFields.phone === "" ||
            this.sortingFields.phone === "ascending"
          ) {
            this.$set(this.sortingFields, "phone", "descending");
            break;
          } else {
            this.$set(this.sortingFields, "phone", "ascending");
            break;
          }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}
</style>
