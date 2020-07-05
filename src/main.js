import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';

import { auth } from '@/plugins/firebase';
import i18n from '@/plugins/i18n';
import vuetify from '@/plugins/vuetify';
import { Action } from '@/store/auth.store';

Vue.config.productionTip = false;

let app;

auth.onAuthStateChanged(user => {
  
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      i18n,
      render: (h) => h(App)
    }).$mount('#app');
  }
  
  if (user) {
    store.dispatch(Action.FETCH_ME, user);
  }
});
