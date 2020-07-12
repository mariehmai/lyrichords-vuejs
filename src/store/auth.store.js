import * as firebase from '@/plugins/firebase';
import router from '@/router';

export const Action = {
  FETCH_ME: 'FETCH_ME',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REGISTER: 'REGISTER'
};

export const Mutation = {
  SET_ME: 'SET_ME'
};

export default {
  state: {
    user: {}
  },
  getters: {
    loggedIn: state => !!state.user.email
  },
  mutations: {
    async [Mutation.SET_ME](state, payload) {
      state.user = payload;
    }
  },
  actions: {
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

      if (router.currentRoute.path !== '/login') {
        router.push('/login');
      }
    },
    async [Action.REGISTER]({ dispatch }, { email, password, name }) {
      const { user } = await firebase.auth.createUserWithEmailAndPassword(email, password);
    
      await firebase.usersCollection.doc(user.uid).set({
        name,
        email
      });
    
      dispatch(Action.FETCH_ME, user);
    }
  }
};