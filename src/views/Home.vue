<template>
  <div id="home">
    <div>
      <SearchTrackList />
      <CreateTrackForm />
    </div>
    <div class="track-viewer-container">
      <TrackViewer class="track-viewer" type="track" :children="selectedTrack" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CreateTrackForm from '@/components/CreateTrackForm';
import SearchTrackList from '@/components/SearchTrackList';
import TrackViewer from '@/components/TrackViewer';

export default {
  components: {
    CreateTrackForm,
    SearchTrackList,
    TrackViewer
  },
  computed: {
    ...mapState({
      selectedTrack: state => state.Track.selectedTrack
    })
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