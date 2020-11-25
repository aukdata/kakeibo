<template>
  <v-card
    v-if="$store.state.account"
    class="grey lighten-4"
  >
    <v-divider></v-divider>

    <v-card-title>
      <v-avatar class="mt-4 ml-4">
        <img
          v-if="$store.state.account.avatarURL"
          :src="$store.state.account.avatarURL"
          :alt="$store.state.displayName"
        >
      </v-avatar>
      <span class="mt-100 ml-2">
        {{ $store.state.account.displayName }}
      </span>
    </v-card-title>

    <v-card-subtitle class="mt-n2">
      {{ $store.state.account.email }}
    </v-card-subtitle>

    <v-card-actions class="mt-n2">
      <v-spacer></v-spacer>
      <v-btn @click="signOut()">
        サインアウト
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import firebase from 'firebase';

@Component
export default class AccountDisplay extends Vue {
  signOut() {
    firebase.auth().signOut().catch(console.error);
  }
}
</script>
