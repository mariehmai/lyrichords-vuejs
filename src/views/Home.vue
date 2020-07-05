<template>
  <div id="home">
    <div>
      <CreateTrackForm />
      <div class="track-card-container">
        <TrackCard
          v-for="t in tracks"
          :key="t.id"
          class="track-card"
          :click="() => updateSelectedTrack(t.id)"
          :artist="t.artist"
          :title="t.title"
          :cover="t.cover"
          :genre="t.genre"
        />
      </div>
    </div>
    <div class="track-container">
      <CardViewer class="card-viewer" type="track" :children="track" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { Action } from '@/store/track.store';

import CreateTrackForm from '@/components/CreateTrackForm';
import CardViewer from '@/components/CardViewer';
import TrackCard from '@/components/TrackCard';

export default {
  components: {
    CardViewer,
    TrackCard,
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

.track-card-container {
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: flex-start;
  padding: 2vh 0.5vh;
  max-height: 400px;
  overflow: scroll;
}

@media screen and (max-width: 500px) {
  .track-card-container {
    max-height: 250px;
    flex-wrap: wrap;
  }
}

.track-card {
  margin: 0.5vh 1vh;
}

.track-container {
  min-width: 500px;
  flex: 3;
  padding: 1.5vh;
}

.card-viewer {
  margin: 1vh 0.5vh;
}

@media screen and (max-width: 550px) {
  #home {
    flex-direction: column;
  }
}
</style>