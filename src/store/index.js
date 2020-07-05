import Vue from 'vue';
import Vuex from 'vuex';

import authStore from './auth';

Vue.use(Vuex);

export default new Vuex.Store(authStore);
