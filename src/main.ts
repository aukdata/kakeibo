import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


const options = {
  apiKey: "AIzaSyDXWKPHPi7lGDvR0VlUvtv9POrAWxpWpU4",
  authDomain: "kakeibo-429a6.firebaseapp.com",
  databaseURL: "https://kakeibo-429a6.firebaseio.com",
  projectId: "kakeibo-429a6",
  storageBucket: "kakeibo-429a6.appspot.com",
  messagingSenderId: "399440532383",
  appId: "1:399440532383:web:84b87208a0d60d3e2063aa",
  measurementId: "G-W7GC2S9PS7"
};

firebase.initializeApp(options);
