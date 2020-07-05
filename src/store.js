import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from '@/plugins/firebase';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, user) {
      state.userProfile = user;
    }
  },
  actions: {
    async signup({ dispatch }, { email, password, name }) {
      const { user } = await firebase.auth.createUserWithEmailAndPassword(email, password);
    
      await firebase.usersCollection.doc(user.uid).set({
        name
      });
    
      dispatch('fetchUserProfile', user);
    },
    async login({ dispatch }, { email, password }) {
      const { user } = await firebase.auth.signInWithEmailAndPassword(email, password);
  
      dispatch('fetchUserProfile', user);
    },
    async logout({ commit }) {
      await firebase.auth.signOut();

      commit('setUserProfile', {});
      router.push('/login');
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await firebase.usersCollection.doc(user.uid).get();
  
      commit('setUserProfile', userProfile.data());
      
      if (router.currentRoute.path === '/login') {
        router.push('/');
      }
    }
  }
});
