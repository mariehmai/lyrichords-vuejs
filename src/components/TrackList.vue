<template>
  <v-img gradient="to bottom right, rgb(251,215,124,.2), rgb(251,215,124,1), #f7797d">
    <v-container>
      <v-card v-if="filteredTracks.length"
              class="track-list"
              three-line
              :disabled="editing"
      >
        <div v-for="t in filteredTracks" :key="t.id">
          <TrackItem
            class="track-item"
            :click="() => updateSelectedTrack(t.id)"
            :artist="t.artist"
            :title="t.title"
            :cover="t.cover"
            :genre="t.genre"
          />
          <v-divider />
        </div>
      </v-card>
      <v-card v-else class="track-list" loading>
        <v-list-item class="track-item">
          No results
        </v-list-item>
      </v-card>
    </v-container>
  </v-img>
</template>

<script>
import { mapState } from 'vuex';

import { Action, Mutation } from '@/store/track.store';

import TrackItem from '@/components/TrackItem';

export default {
  components: {
    TrackItem
  },
  computed: {
    ...mapState({
      editing: state => state.Track.editing,
      search: state => state.Track.search,
      selectedTrack: state => state.Track.selectedTrack,
      tracks: state => state.Track.tracks
    }),
    filteredTracks() {
      return this.tracks.filter(track =>
        track.title.toLowerCase().includes(this.search.toLowerCase()) ||
        track.artist.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  beforeMount() {
    this.$store.dispatch(Action.FETCH_TRACKS);
  },
  updated() {
    if (this.tracks.length && !this.selectedTrack.title) {
      this.$store.commit(Mutation.SET_SELECTED_TRACK, this.tracks[0]);
    }
  },
  methods: {
    updateSelectedTrack(id) {
      const selectedTrack = this.tracks.find((track) => track.id === id);
      this.$store.commit(Mutation.SET_SELECTED_TRACK, selectedTrack);
    }
  }
};
</script>

<style scoped>
.track-list {
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: flex-start;
  padding: 1vh;
  max-height: 190px;
  overflow: scroll;
}

@media screen and (min-width: 500px) {
  .track-list {
    max-height: 400px;
  }
  
  .track-item {
    min-width: 350px;
  }
}
</style>