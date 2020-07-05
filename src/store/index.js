import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './auth.store';
import Track from './track.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Track
  }
});
