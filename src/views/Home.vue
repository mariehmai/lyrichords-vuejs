<template>
  <div id="home">
    <div class="track-card-container">
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
import CardViewer from '@/components/CardViewer';
import TrackCard from '@/components/TrackCard';

import mocks from '@/mocks';

export default {
  components: {
    CardViewer,
    TrackCard
  },
  data: function() {
    return { track: mocks.tracks[0], tracks: mocks.tracks };
  },
  methods: {
    updateTrack(id) {
      const trackLyrics = mocks.tracks.find(track => track.id === id);

      this.track = trackLyrics.lyrics ? trackLyrics : mocks.tracks[0];
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
  justify-content: center;
  padding: 2vh 0.5vh;
}

.track-card {
  margin: 0.5vh 1vh;
}

.track-container {
  flex: 3;
  padding: 1.5vh;
}

.card-viewer {
  margin: 1vh 0.5vh;
}
</style>

