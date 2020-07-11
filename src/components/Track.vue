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
        <v-card-title class="title">
          <span v-if="!editing">
            {{ track.artist }} - {{ track.title }}
          </span>
          <v-text-field
            v-if="editing"
            v-model="track.artist"
            label="Artist"
          />
          <v-text-field
            v-if="editing"
            v-model="track.title"
            label="Title"
          />
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
        <v-card-text v-if="!editing">
          {{ $t('genre') }}: {{ track.genre }}
        </v-card-text>
        <v-card-text v-if="editing">
          <v-text-field
            v-model="track.genre"
            placeholder="Pop"
            label="Genre"
          />
        </v-card-text>
      </div>
    </div>
    <v-divider />
    <v-card-text>
      <v-textarea v-if="editing"
                  v-model="track.lyrics"
                  outlined
                  rows="15"
                  :disabled="loading"
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
      loading: false
    };
  },
  computed: {
     ...mapState({
      editing: state => state.Track.editing,
      track: state => state.Track.selectedTrack
    })
  },
  methods: {
    toggleEdit() {
      this.$store.commit(Mutation.SET_EDITING, !this.editing);
    },
    async save() {
      this.loading = true;
  
      this.$store.dispatch(Action.UPDATE_TRACK, this.track);
      this.toggleEdit();

      this.loading = false;
    }
  }
};
</script>

<style scoped>
.title {
  padding-top: 0;
}

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