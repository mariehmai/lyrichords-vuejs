<template>
  <v-card :elevation="2">
    <v-card-text class="zoom">
      <v-slider v-model="zoom"
                min="12"
                max="20"
      >
        <template v-slot:prepend>
          <v-btn icon @click="decrement">
            <font-awesome-icon :icon="['fa', 'search-minus']" />
          </v-btn>
        </template>
        <template v-slot:append>
          <v-btn icon @click="increment">
            <font-awesome-icon :icon="['fa', 'search-plus']" />
          </v-btn>
        </template>
      </v-slider>
    </v-card-text>

    <Track
      v-if="type === 'track'"
      :title="children.title"
      :artist="children.artist"
      :genre="children.genre"
      :cover="children.cover"
      :lyrics="children.lyrics"
      :custom-style="{ fontSize: zoom + 'px', paddingBottom: paddingText + 'vh' }"
    />
  </v-card>
</template>

<script>
import Track from '@/components/Track';

export default {
  components: {
    Track
  },
  props: {
    type: { type: String, default: '' },
    children: { type: Object, required: true }
  },
  data() {
    return {
      zoom: 16,
      paddingText: 0
    };
  },
  methods: {
    decrement() {
      this.zoom--;
      if (this.marginText > 0) this.marginText -= 0.4;
    },
    increment() {
      this.zoom++;
      if (this.zoom < 20) this.marginText += 0.4;
    }
  }
};
</script>

<style scoped>
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