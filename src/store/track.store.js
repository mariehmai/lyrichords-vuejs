import * as firebase from '@/plugins/firebase';

export const toTitleCase = str => str
  .toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

export const Action = {
  CREATE_TRACK: 'CREATE_TRACK',
  FETCH_TRACKS: 'FETCH_TRACKS'
};

export const Mutation = {
  SET_SELECTED_TRACK: 'SET_SELECTED_TRACK',
  SET_TRACKS: 'SET_TRACKS',
  UPDATE_SEARCH: 'UPDATE_SEARCH'
};

export default {
  state: {
    search: '',
    tracks: [],
    selectedTrack: {}
  },
  mutations: {
    async [Mutation.SET_SELECTED_TRACK](state, payload) {
      state.selectedTrack = payload;
    },
    async [Mutation.SET_TRACKS](state, payload) {
      state.tracks = payload;
    },
    async [Mutation.UPDATE_SEARCH](state, payload) {
      state.search = payload;
    }
  },
  actions: {
    async [Action.CREATE_TRACK]({ dispatch }, track) {
      await firebase.tracksCollection.add({
        userId: firebase.auth.currentUser.uid,
        title: toTitleCase(track.title),
        artist: track.artist,
        genre: track.genre,
        lyrics: encodeURI(track.lyrics),
        createdAt: new Date()
      });
  
      dispatch(Action.FETCH_TRACKS);
    },
    async [Action.FETCH_TRACKS]({ commit }) {
      const trackDocs = await firebase.tracksCollection
        .orderBy('title', 'asc')
        .get();
      
      const tracks = trackDocs.docs.map(track => ({
        ...track.data(),
        id: track.id
      }));
      
      commit(Mutation.SET_TRACKS, tracks);
    }
  }
};