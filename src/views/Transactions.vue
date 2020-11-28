<template>
  <div>
    <v-tabs
      v-model="boxIndex"
    >
      <v-tab
        v-for="box in $store.state.boxes"
        :key="box.id"
        :to="box.id"
        @change="onTabChange(box.id)"
      >
        {{ box.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="boxIndex">
      <v-tab-item
        v-for="box in $store.state.boxes"
        :key="box.id"
        :value="box.id"
      >
        <v-container class="py-8 px-6" fluid>
          <v-row>
            <v-col v-for="entry in $store.state.boxes[getTabIndex(box.id)].entries" :key="entry.id" cols="12">
                <v-list two-line>
                  <v-list-item :key="entry.id">
                    <v-list-item-content>
                      <v-list-item-title>{{ entry.name }}</v-list-item-title>

                      <v-list-item-subtitle>
                        {{ `¥${entry.amount}` }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import '@/definitions';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
import firebase from 'firebase';
import { ulid } from 'ulid';

@Component
export default class Transactions extends Vue {
  boxId = this.$route.params.boxId;
  boxIndex = this.getTabIndex(this.boxId);

  onTabChange(boxId: string) {
    this.boxId = boxId;
    this.boxIndex = this.getTabIndex(this.boxId);

    this.$store.dispatch("loadTransactions", { uid: this.$store.state.account.uid, boxId: boxId })
  }

  getTabIndex(boxId?: BoxId) {
    if (!boxId) return 0;
    return this.$store.state.boxes.findIndex((box: Box) => box.id === boxId);
  }

  test() {
    console.log(this.boxId);
    this.$store.dispatch("loadTransactions", { uid: this.$store.state.account.uid, boxId: this.boxId })
  }

  addDummyData() {
    const v = Math.random();
    if (v < 0.8) this.addDummyPurchase();
    else if (v < 0.9) this.addDummyIncome();
    else this.addDummyTransafar();
  }

  addDummyTransafar() {    
    const db = firebase.firestore();
    const transactionRef = db.collection("users")
      .doc(this.$store.state.account.uid)
      .collection("transactions");
    
    const boxIds = [
      "01ER17T9CXBH9QE3RPR83K09RZ",
      "01ER17VKXGTEBQEV1YY84CYT36",
      "01ER5011VN0KMBX6Y1DDH4EG68",
    ];
    for (const n in Array(10).keys()) {
      const a = Math.floor(Math.random() * boxIds.length);
      const b = Math.floor(Math.random() * boxIds.length);
      boxIds[a] = boxIds[b];
    }

    const id = ulid();
    transactionRef.doc(id).set({
      amount: Math.floor(Math.random() * 100) * 100,
      category: "01ER182C7MJVJ82TSMZT2DZYC5",
      from: boxIds[0],
      to: boxIds[1],
      name: "移送",
    });
  }

  addDummyPurchase() {    
    const db = firebase.firestore();
    const transactionRef = db.collection("users")
      .doc(this.$store.state.account.uid)
      .collection("transactions");
    
    const boxIds = [
      "01ER17T9CXBH9QE3RPR83K09RZ",
      "01ER17VKXGTEBQEV1YY84CYT36",
      "01ER5011VN0KMBX6Y1DDH4EG68",
    ];
    const a = Math.floor(Math.random() * boxIds.length);

    const names = [
      "高級ファミチキ",
      "や～いお茶",
      "スーパーUNUMAランド入場料",
      "東京 - 札幌 運賃",
      "オオサンショウウオのマーチ",
      "ぐるぐるぐるぐ",
      "ロッキー",
      "岐阜県",
      "西葛西",
    ];

    const id = ulid();
    transactionRef.doc(id).set({
      amount: Math.floor(Math.random() * 100) * 100,
      category: "01ER182C7MJVJ82TSMZT2DZYC5",
      from: boxIds[a],
      name: names[Math.floor(Math.random() * names.length)],
    });
  }

  addDummyIncome() {    
    const db = firebase.firestore();
    const transactionRef = db.collection("users")
      .doc(this.$store.state.account.uid)
      .collection("transactions");
    
    const boxIds = [
      "01ER17T9CXBH9QE3RPR83K09RZ",
      "01ER17VKXGTEBQEV1YY84CYT36",
      "01ER5011VN0KMBX6Y1DDH4EG68",
    ];
    const a = Math.floor(Math.random() * boxIds.length);

    const id = ulid();
    transactionRef.doc(id).set({
      amount: Math.floor(Math.random() * 100) * 100,
      category: "01ER182C7MJVJ82TSMZT2DZYC5",
      to:  boxIds[a],
      name: "給料",
    });
  }
}
</script>
