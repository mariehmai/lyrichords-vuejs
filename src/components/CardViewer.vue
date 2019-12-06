<template>
  <v-card :elevation="4">
    <Track
      v-if="type === 'track'"
      :title="children.title"
      :artist="children.artist"
      :lyrics="children.lyrics"
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
  }
};
</script>