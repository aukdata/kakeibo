import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


type BoxId = string;

type Box = {
  id: BoxId;
  name: string;
  amount: number;
};


type TransactionCategoryId = string;

type TransactionCategory = {
  id: TransactionCategoryId;
  name: string;
};


type TransactionEntry = {
  createdAt: Date;
  updatedAt: Date;
  amount: number;
  category: TransactionCategoryId;
  from?: BoxId;
  to?: BoxId;
};


type AppData = {
  entries: TransactionEntry[];
  categories: TransactionCategory[];
  boxes: Box[];
};


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
