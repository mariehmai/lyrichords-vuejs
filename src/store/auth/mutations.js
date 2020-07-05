import { Mutation } from './types';

export default {
  async [Mutation.SET_ME](state, payload) {
    state.user = payload;
  }
};
