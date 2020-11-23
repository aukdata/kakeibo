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
      { id: "all", name: "すべて", amount: 30000 },
      { id: "saifu", name: "財布", amount: 30000 },
      { id: "yuucho", name: "ゆうちょ口座", amount: 30000 },
      { id: "daikyo", name: "大協口座", amount: 30000 },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
