<template>
  <tbody>
    <tr @click="setHuman(human)" v-for="human in paginatedPeopleList" :key="human.email">
      <td class="text-center">
        <span>{{ human.id }}</span>
      </td>
      <td class="text-center">
        <span>{{ human.firstName }}</span>
      </td>
      <td class="text-center">
        <span>{{ human.lastName }}</span>
      </td>
      <td class="text-center">
        <span>{{ human.email }}</span>
      </td>
      <td class="text-center">
        <span>{{ human.phone }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { HumanType, SortingType } from "@/store/types";

export default Vue.extend({
  name: "table-body",
  props: {
    peopleList: Array as PropType<Array<HumanType>>,
    searchQuery: String,
    sortingFields: Object as PropType<SortingType>,
    currentPage: Number,
    perPage: Number
  },
  methods: {
    setHuman(human: HumanType) {
      // установка выбранного человека
      this.$store.dispatch("setSelectedHumanAction", human);
    },
  },
  computed: {
    filteredPeopleList(): Array<HumanType> {
      // отфильтрованные данные о людях
      let filteredDataList: Array<HumanType> = [];

      filteredDataList = this.peopleList.filter((human) => {
        if (this.searchQuery !== "" && this.searchQuery !== null) {
          return (
            human.id.toString().includes(this.searchQuery) ||
            human.firstName
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            human.lastName
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            human.email
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            human.phone.includes(this.searchQuery)
          );
        } else {
          return true;
        }
      });

      // сортировка данных
      if(this.sortingFields.id === "ascending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return a.id < b.id ? 1 : -1;
        })
      } else if(this.sortingFields.id === "descending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return b.id < a.id ? 1 : -1;
        })
      } else if(this.sortingFields.firstName === "ascending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return a.firstName < b.firstName ? 1 : -1;
        })
      } else if(this.sortingFields.firstName === "descending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return b.firstName < a.firstName ? 1 : -1;
        })
      } else if(this.sortingFields.lastName === "ascending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return a.lastName < b.lastName ? 1 : -1;
        })
      } else if(this.sortingFields.lastName === "descending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return b.lastName < a.lastName ? 1 : -1;
        })
      } else if(this.sortingFields.email === "ascending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return a.email < b.email ? 1 : -1;
        })
      } else if(this.sortingFields.email === "descending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return b.email < a.email ? 1 : -1;
        })
      } else if(this.sortingFields.phone === "ascending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return a.phone < b.phone ? 1 : -1;
        })
      } else if(this.sortingFields.phone === "descending") {
        filteredDataList = filteredDataList.sort((a: HumanType, b: HumanType) => {
          return b.phone < a.phone ? 1 : -1;
        })
      }

      this.$emit("pagesCount", Math.ceil(filteredDataList.length / this.perPage));

      return filteredDataList;
    },
    paginatedPeopleList(): Array<HumanType> {
      // данные постранично
      const filteredList: Array<HumanType> = this.filteredPeopleList;
      const from: number = (this.currentPage * this.perPage) - this.perPage;
      const to: number = (this.currentPage * this.perPage);
      const paginatedList: Array<HumanType> = filteredList.slice(from, to);

      return paginatedList;
    }
  }
});
</script>
