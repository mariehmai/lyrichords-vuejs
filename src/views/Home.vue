<template>
  <div id="home">
    <div>
      <CreateTrackForm />
      <v-list three-line class="track-list">
        <TrackItem
          v-for="t in tracks"
          :key="t.id"
          class="track-item"
          :click="() => updateSelectedTrack(t.id)"
          :artist="t.artist"
          :title="t.title"
          :cover="t.cover"
          :genre="t.genre"
        />
      </v-list>
    </div>
    <div class="track-viewer-container">
      <TrackViewer class="track-viewer" type="track" :children="track" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { Action } from '@/store/track.store';

import CreateTrackForm from '@/components/CreateTrackForm';
import TrackViewer from '@/components/TrackViewer';
import TrackItem from '@/components/TrackItem';

export default {
  components: {
    TrackViewer,
    TrackItem,
    CreateTrackForm
  },
  data() {
    this.$store.dispatch(Action.FETCH_TRACKS);

    return {
      track: {}
    };
  },
  computed: {
    ...mapState({
      tracks: state => state.Track.tracks
    })
  },
  updated() {
    if (this.tracks.length && !this.track.title) {
      this.track = this.tracks[0];
    }
  },
  methods: {
    updateSelectedTrack(id) {
      this.track = this.tracks.find((track) => track.id === id);
    }
  }
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.track-list {
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: flex-start;
  padding: 2vh 0.5vh;
  max-height: 400px;
  overflow: scroll;
}

@media screen and (max-width: 500px) {
  .track-list {
    max-height: 250px;
    flex-wrap: wrap;
  }
}

.track-item {
  margin: 0.5vh 1vh;
}

.track-viewer-container {
  min-width: 500px;
  flex: 3;
  padding: 1.5vh;
}

.track-viewer {
  margin: 1vh 0.5vh;
}

@media screen and (max-width: 550px) {
  #home {
    flex-direction: column;
  }
}
</style>