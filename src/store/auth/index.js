import mutations from './mutations';
import actions from './actions';

export default {
    state: {
      user: {}
    },
    getters: {
      loggedIn: state => !!state.user
    },
    mutations,
    actions
};