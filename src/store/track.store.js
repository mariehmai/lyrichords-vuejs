import * as firebase from '@/plugins/firebase';

export const Action = {
  CREATE_TRACK: 'CREATE_TRACK',
  FETCH_TRACKS: 'FETCH_TRACKS'
};

export const Mutation = {
  SET_TRACKS: 'SET_TRACKS'
};

export default {
  state: {
    tracks: []
  },
  mutations: {
    async [Mutation.SET_TRACKS](state, payload) {
      state.tracks = payload;
    }
  },
  actions: {
    async [Action.CREATE_TRACK]({ dispatch }, track) {
      await firebase.tracksCollection.add({
        userId: firebase.auth.currentUser.uid,
        title: track.title,
        artist: track.artist,
        genre: track.genre,
        lyrics: encodeURI(track.lyrics),
        createdAt: new Date()
      });
  
      dispatch(Action.FETCH_TRACKS);
    },
    async [Action.FETCH_TRACKS]({ commit }) {
      const tracksDocs = await firebase.tracksCollection
        .orderBy('title', 'asc')
        .get();
      
      const tracks = tracksDocs.docs.map(track => ({
        ...track.data(),
        id: track.id
      }));
      
      commit(Mutation.SET_TRACKS, tracks);
    }
  }
};