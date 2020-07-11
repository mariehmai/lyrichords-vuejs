<template>
  <v-card :loading="isLoading">
    <v-card-text class="zoom">
      <v-slider v-model="zoom"
                min="8"
                max="20"
      >
        <template v-slot:prepend>
          <v-btn icon class="icon" @click="decrement">
            <font-awesome-icon :icon="['fa', 'search-minus']" />
          </v-btn>
        </template>
        <template v-slot:append>
          <v-btn icon class="icon" @click="increment">
            <font-awesome-icon :icon="['fa', 'search-plus']" />
          </v-btn>
        </template>
      </v-slider>
    </v-card-text>

    <Track
      v-if="type === 'track'"
      :custom-style="{ fontSize: zoom + 'px'}"
    />
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

import Track from '@/components/Track';

export default {
  components: {
    Track
  },
  props: {
    type: { type: String, default: '' }
  },
  data() {
    return {
      zoom: 14
    };
  },
  computed: {
    ...mapState({
      selectedTrack: state => state.Track.selectedTrack
    }),
    isLoading() {
      return !this.selectedTrack.title;
    }
  },
  methods: {
    decrement() {
      this.zoom--;
    },
    increment() {
      this.zoom++;
    }
  }
};
</script>

<style scoped>
.icon {
  margin-top: -6px;
}

.zoom {
  width: 50%;
  padding-bottom: 0;
}

@media screen and (max-width: 550px) {
  .zoom {
    width: 100%;
  }
}
</style>