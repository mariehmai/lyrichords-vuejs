<template>
  <div id="home">
    <div class="track-card-container">
      <AddSongForm />
      <TrackCard
        v-for="t in tracks"
        :key="t.id"
        class="track-card"
        :click="() => updateTrack(t.id)"
        :artist="t.artist"
        :title="t.title"
        :cover="t.cover"
        :genre="t.genre"
      />
    </div>
    <div class="track-container">
      <CardViewer class="card-viewer" type="track" :children="track" />
    </div>
  </div>
</template>

<script>
import AddSongForm from '@/components/AddSongForm';
import CardViewer from '@/components/CardViewer';
import TrackCard from '@/components/TrackCard';

import mocks from '@/mocks';

export default {
  components: {
    CardViewer,
    TrackCard,
    AddSongForm
  },
  data() {
    return {
      track: mocks.tracks[0],
      tracks: mocks.tracks
    };
  },
  methods: {
    updateTrack(id) {
      const trackLyrics = mocks.tracks.find((track) => track.id === id);

      this.track = trackLyrics;
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
  flex-wrap: wrap;
  flex: 2;
  justify-content: flex-start;
  padding: 2vh 0.5vh;
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