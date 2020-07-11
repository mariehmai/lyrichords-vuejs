<template>
  <div id="home">
    <div>
      <TrackList />
    </div>
    <div class="track-viewer-container">
      <TrackViewer class="track-viewer" type="track" />
    </div>
  </div>
</template>

<script>
import TrackList from '@/components/TrackList';
import TrackViewer from '@/components/TrackViewer';

export default {
  components: {
    TrackList,
    TrackViewer
  }
};
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media screen and (max-width: 550px) {
  #home {
    flex-direction: column;
  }
}

.track-viewer-container {
  flex: 3;
  padding: 1.5vh;
}

.track-viewer {
  margin: 1vh 0.5vh;
}
</style>