<template>
  <v-card :elevation="4">
    <v-card-text class="zoom">
      <v-slider v-model="zoom" track-color="grey"
                min="12" max="20"
      >
        <template v-slot:prepend>
          <v-icon @click="decrement">
            mdi-magnify-minus-outline
          </v-icon>
        </template>
        <template v-slot:append>
          <v-icon @click="increment">
            mdi-magnify-plus-outline
          </v-icon>
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
  width: 30%;
}
</style>