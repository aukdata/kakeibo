<template>
  <v-app>
    <v-system-bar
      app
      color="primary"
    >
    </v-system-bar>

    <v-navigation-drawer
      app
    >
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/transactions">
              収入・支出
            </router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/settings">
              設定
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-tabs
        v-model="tabs"
      >
        <v-tab
          v-for="box in $store.state.boxes"
          :key="box.id"
          :href="box.id"
        >
          {{ box.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items
        v-model="tabs"
      >
        <v-tab-item
          v-for="box in $store.state.boxes"
          :key="box.id"
          :value="box.id"
        >
          <v-container
            class="py-8 px-6"
            fluid
          >
            <v-row>
              <v-col
                v-for="card in cards"
                :key="card"
                cols="12"
              >
                <v-card>
                  <v-subheader>{{ card }}</v-subheader>

                  <v-list two-line>
                    <template v-for="n in 6">
                      <v-list-item
                        :key="n"
                      >
                        <v-list-item-avatar color="grey darken-1">
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>Message {{ n }}</v-list-item-title>

                          <v-list-item-subtitle>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
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
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store from '@/store';
import 'firebase/firestore';

import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  cards = [
    "aaa", "bbb", "ccc"
  ];
  tabs = null;
}

</script>
