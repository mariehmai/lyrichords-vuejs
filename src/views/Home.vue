<template>
  <div id="home">
    <div>
      <TrackList />
      <v-expansion-panels v-model="panel" multiple flat>
        <v-expansion-panel>
          <v-expansion-panel-header class="panel-header">
            <h4 class="text">
              Add a song
            </h4>
            <template v-slot:actions>
              <font-awesome-icon :icon="['fa', 'plus']" color="#f7797d" />
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="panel">
            <CreateTrackForm />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="track-viewer-container">
      <TrackViewer class="track-viewer" type="track" />
    </div>
  </div>
</template>

<script>
import CreateTrackForm from '@/components/CreateTrackForm';
import TrackList from '@/components/TrackList';
import TrackViewer from '@/components/TrackViewer';

export default {
  components: {
    CreateTrackForm,
    TrackList,
    TrackViewer
  },
  data() {
    return {
      panel: []
    };
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

.text {
  color: #f7797d;
  text-transform: uppercase;
}


.panel-header:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.panel {
  padding-top: 16px;
}
</style>