<template>
  <v-main>
    <page-header></page-header>
    <search-form v-if="peopleList.length > 0"></search-form>
    <data-selection v-if="peopleList.length === 0"></data-selection>
    <people-table
      v-else
      :peopleList="peopleList"
      :selectedHuman="selectedHuman"
      :searchQuery="searchQuery"
      :sortingFields="sortingFields"
    ></people-table>
    <progress-check v-if="loading === true"></progress-check>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import PageHeader from "../components/PageHeader.vue";
import SearchForm from "../components/SearchForm.vue";
import DataSelection from "../components/DataSelection.vue";
import PeopleTable from "../components/PeopleTable.vue";
import ProgressCheck from "../components/ProgressCheck.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "main-page",
  components: {
    PageHeader,
    DataSelection,
    SearchForm,
    PeopleTable,
    ProgressCheck
  },
  computed: {
    ...mapGetters(["peopleList", "selectedHuman", "searchQuery", "sortingFields", "loading"]),
  },
});
</script>
