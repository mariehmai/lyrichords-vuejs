<template>
  <div id="home">
    <div class="track-container">
      <TrackCard
        v-for="track in tracks"
        :key="track.id"
        class="track-card"
        :artist="track.artist"
        :title="track.title"
        :cover="track.cover"
        :genre="track.genre"
      />
    </div>

    <div class="song-container">
      <CardViewer class="card-viewer" type="song" :children="song" />
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
    return { song: mocks.song, tracks: mocks.tracks };
  }
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.track-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
  padding: 2vh 0.5vh;
}

.track-card {
  margin: 0.5vh 1vh;
}

.song-container {
  flex: 2;
  padding: 1.5vh;
}

.card-viewer {
  margin: 1vh 0.5vh;
}
</style>

