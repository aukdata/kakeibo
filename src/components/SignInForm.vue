<template>
  <v-card>
    <v-card-title>
      Welcome
    </v-card-title>
    <v-card-text>
      kakeibo を使うためにはサインインしてください
    </v-card-text>
    <v-card-actions>
      <v-btn primary @click="signIn()">
        サインイン
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import firebase from 'firebase';

@Component
export default class SignInForm extends Vue {
  signIn() {
    const privider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(privider).catch(console.error);
  }
}
</script>
