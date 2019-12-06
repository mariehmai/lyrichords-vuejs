<template>
  <v-card :elevation="4">
    <Slider
      class="zoom"
      :model="zoom"
      :min="12"
      :max="20"
      icon-left="mdi-magnify-minus-outline"
      icon-right="mdi-magnify-plus-outline"
      :click-left="decrement"
      :click-right="increment"
    />
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
import Slider from '@/components/Slider';

export default {
  components: {
    Track,
    Slider
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