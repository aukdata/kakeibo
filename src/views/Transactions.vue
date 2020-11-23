<template>
  <div>
    <v-tabs
      v-model="tab"
    >
      <v-tab
        v-for="box in $store.state.boxes"
        :key="box.id"
        :to="box.id"
      >
        {{ box.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="box in $store.state.boxes"
        :key="box.id"
        :value="box.id"
      >
        <v-container class="py-8 px-6" fluid>
          <v-row>
            <v-col v-for="card in cards" :key="card" cols="12">
              <v-card>
                <v-subheader>{{ card }}</v-subheader>

                <v-list two-line>
                  <template v-for="n in 6">
                    <v-list-item :key="n">
                      <v-list-item-avatar color="grey darken-1">
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>Message {{ n }}</v-list-item-title>

                        <v-list-item-subtitle>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nihil repellendus distinctio similique
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider
                      v-if="n !== 6"
                      :key="`divider-${n}`"
                      inset
                    ></v-divider>
                  </template>
                </v-list>
              </v-card>
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
import '../definitions';

@Component
export default class Transactions extends Vue {
  tab = this.getTabIndex(this.$route.params.boxId);
  cards = [
    "aaa", "bbb", "ccc"
  ];

  getTabIndex(boxId?: BoxId) {
    if (!boxId) return 0;
    return this.$store.state.boxes.findIndex((box: Box) => box.id === boxId);
  }
}
</script>
