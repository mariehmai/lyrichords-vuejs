<template>
  <div class="track-container">
    <div class="metadata">
      <v-avatar v-if="!!track.cover" class="ma-3"
                size="100"
                tile
      >
        <v-img :src="track.cover" />
      </v-avatar>
      <div>
        <v-card-title>
          {{ track.artist }} - {{ track.title }}
          <v-tooltip v-if="!editing" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon fab
                     v-bind="attrs"
                     v-on="on"
                     @click="toggleEdit"
              >
                <font-awesome-icon :icon="['fas', 'pencil-alt']" />
              </v-btn>
            </template>
            <span>Edit song</span>
          </v-tooltip>
          <div v-else>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon fab
                       v-bind="attrs"
                       color="primary"
                       :loading="loading"
                       v-on="on"
                       @click="save"
                >
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </v-btn>
              </template>
              <span>Save song</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs"
                       text
                       small
                       v-on="on"
                       @click="toggleEdit"
                >
                  Cancel
                </v-btn>
              </template>
              <span>Cancel changes</span>
            </v-tooltip>
          </div>
        </v-card-title>
        <v-card-text v-if="!!track.genre">
          {{ $t('genre') }}: {{ track.genre }}
        </v-card-text>
      </div>
    </div>
    <v-divider />
    <v-card-text>
      <v-textarea v-if="editing"
                  v-model="lyrics"
                  outlined
                  rows="15"
                  :disabled="loading"
                  @input="editLyrics"
      />
      <pre v-else class="content" :style="customStyle">
      {{ track.lyrics }}
      </pre>
    </v-card-text>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { Action, Mutation } from '@/store/track.store';

export default {
  props: {
    customStyle: { type: Object, default: () => ({ fontSize: '20px' }) }
  },
  data() {
    return {
      loading: false,
      lyrics: '',
      track: {}
    };
  },
  computed: {
     ...mapState({
      editing: state => state.Track.editing,
      selectedTrack: state => state.Track.selectedTrack
    })
  },
  updated() {
    if (this.track !== this.selectedTrack) {
      this.track = this.selectedTrack;
    }
  },
  methods: {
    toggleEdit() {
      this.$store.commit(Mutation.SET_EDITING, !this.editing);

      this.lyrics = this.track.lyrics;
    },
    async save() {
      this.loading = true;
  
      this.$store.dispatch(Action.UPDATE_TRACK, {
          ...this.track,
        genre: this.track.genre || 'Unknown',
        lyrics: this.lyrics
      });
      this.toggleEdit();

      this.loading = false;
    },
     editLyrics(updatedLyrics) {
      this.lyrics = updatedLyrics;
    }
  }
};
</script>

<style scoped>
.metadata {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 550px) {
  .metadata {
    flex-direction: column;
  }
}

.content {
  overflow: scroll;
}
</style>