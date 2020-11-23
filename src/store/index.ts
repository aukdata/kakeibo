import Vue from 'vue';
import Vuex from 'vuex';
import '../definitions';

Vue.use(Vuex);


export default new Vuex.Store<AppData>({
  state: {
    entries: [
      { createdAt: new Date(), updatedAt: new Date(), amount: 1000, category: "c4821", from: "b8748" },
    ],
    categories: [
      { id: "c4821", name: "食費" },
    ],
    boxes: [
      { id: "b8748", name: "財布", amount: 30000 },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
