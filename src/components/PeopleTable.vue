<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="8">
        <v-simple-table fixed-header>
          <template v-slot:default>
            <table-header :sortingFields="sortingFields"></table-header>
            <table-body
              :peopleList="peopleList"
              :searchQuery="searchQuery"
              :sortingFields="sortingFields"
              :currentPage="currentPage"
              :perPage="perPage"
              v-on:pagesCount="(pagesCount = $event)"
            ></table-body>
          </template>
        </v-simple-table>
        <pagination-form
          :pagesCount="pagesCount"
          v-on:page="(currentPage = $event)"
          v-on:perPage="(perPage = $event)"
        ></pagination-form>
        <human-data
          v-if="Object.keys(selectedHuman).length > 0"
          :selectedHuman="selectedHuman"
        ></human-data>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import TableHeader from "./PeopleTable/TableHeader.vue";
import TableBody from "./PeopleTable/TableBody.vue";
import HumanData from "./PeopleTable/HumanData.vue";
import PaginationForm from "./PeopleTable/PaginationForm.vue";
import { HumanType, SortingType } from "@/store/types";

export default Vue.extend({
  name: "people-table",
  props: {
    peopleList: Array as PropType<Array<HumanType>>,
    selectedHuman: Object as PropType<HumanType>,
    searchQuery: String,
    sortingFields: Object as PropType<SortingType>,
  },
  components: {
    TableHeader,
    TableBody,
    HumanData,
    PaginationForm,
  },
  data() {
    return {
      currentPage: 1 as number, // текущая страница
      perPage: 15 as number, // количество записей на странице
      pagesCount: 0 as number, // количество страниц
    };
  },
});
</script>
