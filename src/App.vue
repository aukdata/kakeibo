<template>
  <v-app>
    <v-dialog
      :value="!$store.state.account"
      persistent
      max-width="400px"
    >
      <SignInForm></SignInForm>
    </v-dialog>

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
            <router-link to="/transactions/all">
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

      <template v-slot:append>
        <AccountDisplay></AccountDisplay>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SignInForm from '@/components/SignInForm.vue'
import AccountDisplay from '@/components/AccountDisplay.vue'

@Component({
  components: {
    SignInForm,
    AccountDisplay,
  }
})
export default class App extends Vue {}

</script>
