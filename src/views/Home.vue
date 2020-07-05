<template>
  <div id="home">
    <div>
      <v-img gradient="to bottom right, rgb(251,215,124,.2), rgb(251,215,124,1), #f7797d">
        <v-container>
          <v-text-field v-model="search"
                        outlined
                        label="Search 🔎"
                        placeholder="Song title, artist, ..."
          />
          <v-card v-if="filteredTracks.length" three-line class="track-list">
            <TrackItem
              v-for="t in filteredTracks"
              :key="t.id"
              class="track-item"
              :click="() => updateSelectedTrack(t.id)"
              :artist="t.artist"
              :title="t.title"
              :cover="t.cover"
              :genre="t.genre"
            />
          </v-card>
          <v-card v-else class="track-list">
            <v-list-item class="track-item">
              No results
            </v-list-item>
          </v-card>
        </v-container>
      </v-img>
      <CreateTrackForm />
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
      search: '',
      track: {}
    };
  },
  computed: {
    ...mapState({
      tracks: state => state.Track.tracks
    }),
    filteredTracks() {
      return this.tracks.filter(track => 
        track.title.toLowerCase().includes(this.search.toLowerCase()) ||
        track.artist.toLowerCase().includes(this.search.toLowerCase())
      );
    }
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

@media screen and (max-width: 550px) {
  #home {
    flex-direction: column;
  }
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
  min-width: 350px;
}

.track-viewer-container {
  flex: 3;
  padding: 1.5vh;
}

.track-viewer {
  margin: 1vh 0.5vh;
}
</style>