import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import '@/definitions';
import firebase from 'firebase';

Vue.use(Vuex);


type dict = {[key: string]: TransactionEntry};

const a: dict = {
  "aaa": {
    id: "ddd",
    createdAt: new Date(),
    updatedAt: new Date(),
    category: "jkdlajfkla",
    amount: 12,
    name: "dfa"
  }
}

export default new Vuex.Store<AppData>({
  state: {
    categories: [],
    boxes: [],
    account: undefined,
  },
  mutations: {
  },
  actions: {
    loadBoxes: (context: ActionContext<AppData, AppData>, payload: { uid: string }) => {
      const db = firebase.firestore();
      const boxesRef = db.collection("users").doc(payload.uid).collection("boxes");
    
      context.state.boxes = [{
        id: "all",
        name: "すべて",
        balance: 0,
        entries: [],
      }];

      boxesRef.get().then(result => {
        result.forEach(box => {
          const data = box.data();
          context.state.boxes.push({
            id: box.id,
            name: data.name,
            balance: data.balance,
            entries: [],
          });
        });
      });
    },

    loadCategories: (context: ActionContext<AppData, AppData>, payload: { uid: string }) => {
      const db = firebase.firestore();
      const categoriesRef = db.collection("users").doc(payload.uid).collection("categories");
    
      context.state.categories = [];

      categoriesRef.get().then(result => {
        result.forEach(category => {
          const data = category.data();
          context.state.categories.push({
            id: category.id,
            name: data.name,
          });
        });
      });
    },

    loadTransactions: async (context: ActionContext<AppData, AppData>, payload: { uid: string; boxId: string }) => {
      const db = firebase.firestore();
      const transactionsRef = db.collection("users").doc(payload.uid).collection("transactions");
      
      const entries: TransactionEntry[] = [];
      const f = (e: firebase.firestore.DocumentData) => {
        const data = e.data();
        entries.push({
          id: e.id,
          createdAt: new Date(),
          updatedAt: new Date(),
          category: data.category,
          amount: data.amount,
          name: data.name,
        });
      };

      if (payload.boxId === "all")
      {
        const list = await transactionsRef.get()
        list.forEach(f);
      } else {
        const list1 = await transactionsRef.where("from", "==", payload.boxId).get();
        const list2 = await transactionsRef.where("to", "==", payload.boxId).get();
        list1.forEach(f);
        list2.forEach(f);
        entries.sort((a, b) => a.id > b.id ? 1 : -1);
      }

      const index = context.state.boxes.findIndex(box => box.id === payload.boxId);
      context.state.boxes[index].entries = entries;

      console.log(`Box ${payload.boxId} (index ${index}) is loaded`)
    },
  },
  modules: {
  },
});
