import Vue from "vue";
import Vuex from "vuex";
import { HumanType, SortingType } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peopleList: [] as Array<HumanType>, // массив с данными о людях
    loading: false as boolean, // флаг загрузки
    searchQuery: "" as string, // поисковый запрос
    dataSize: "" as string, // размер данных
    selectedHuman: {} as HumanType, // выбранный человек
    sortingFields: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    } as SortingType,
  },
  mutations: {
    setPeopleList(state, peopleList: Array<HumanType>) {
      // изменение массива с данными
      state.peopleList = peopleList;
    },
    setLoading(state, loading: boolean) {
      // изменение флага загрузки
      state.loading = loading;
    },
    setSearchQuery(state, searchQuery: string) {
      // изменение поискового запроса
      state.searchQuery = searchQuery;
    },
    setDataSize(state, dataSize: string) {
      // изменение размера данных
      state.dataSize = dataSize;
    },
    setSelectedHuman(state, selectedHuman: HumanType) {
      // изменение выбранного человека
      state.selectedHuman = selectedHuman;
    },
  },
  actions: {
    fetchPeopleAction({ state, commit }) {
      commit("setLoading", true);

      try {
        let link = "";

        if (state.dataSize === "small") {
          link =
            "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
        } else {
          link =
            "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
        }

        const request = new XMLHttpRequest();

        request.open("GET", link, true);

        request.onreadystatechange = () => {
          if (request.readyState !== 4 || request.status !== 200) return;
          const data = JSON.parse(request.responseText);

          commit("setPeopleList", data);
          commit("setLoading", false);
        }

        request.send();
      } catch (error) {
        console.log(error);
      }
    },
    setDataSizeAction({ commit }, dataSize: string) {
      commit("setDataSize", dataSize);
    },
    setSelectedHumanAction({ commit }, selectedHuman: HumanType) {
      commit("setSelectedHuman", selectedHuman);
    },
    setSearchQueryAction({ commit }, searchQuery: string) {
      commit("setSearchQuery", searchQuery);
    },
  },
  getters: {
    loading: (state) => state.loading,
    peopleList: (state) => state.peopleList,
    searchQuery: (state) => state.searchQuery,
    selectedHuman: (state) => state.selectedHuman,
    sortingFields: (state) => state.sortingFields,
  },
});
