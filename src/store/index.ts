import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


type BoxId = string;
type BoxType = "wallet" | "card";

type Box = {
  id: BoxId,
  name: string,
  type: BoxType,
  amount: number,
};


type TransactionCategoryId = string;

type TransactionCategory = {
  id: TransactionCategoryId,
  name: string,
};

type TransactionEntry = {
  createdAt: Date,
  updatedAt: Date,
  amount: number,
  category: TransactionCategoryId,
  from?: BoxId,
  to?: BoxId,
};


type AppData = {
  entries: TransactionEntry[],
}


export default new Vuex.Store<AppData>({
  state: {
    entries: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
