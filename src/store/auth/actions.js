
import * as firebase from '@/plugins/firebase';
import router from '@/router';

import { Action, Mutation } from './types';

export default {
  async [Action.FETCH_ME]({ commit }, user) {
    const userProfile = await firebase.usersCollection.doc(user.uid).get();

    commit(Mutation.SET_ME, userProfile.data());
    
    if (router.currentRoute.path === '/login') {
      router.push('/');
    }
  },
  async [Action.LOGIN]({ dispatch }, { email, password }) {
    const { user } = await firebase.auth.signInWithEmailAndPassword(email, password);

    dispatch(Action.FETCH_ME, user);
  },
  async [Action.LOGOUT]({ commit }) {
    await firebase.auth.signOut();

    commit(Mutation.SET_ME, {});
    router.push('/login');
  },
  async [Action.REGISTER]({ dispatch }, { email, password, name }) {
    const { user } = await firebase.auth.createUserWithEmailAndPassword(email, password);
  
    await firebase.usersCollection.doc(user.uid).set({
      name
    });
  
    dispatch(Action.FETCH_ME, user);
  }
};
