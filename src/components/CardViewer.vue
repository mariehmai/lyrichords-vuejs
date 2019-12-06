<template>
  <v-card :elevation="4">
    <Song
      v-if="type === 'song'"
      :title="children.title"
      :artist="children.artist"
      :lyrics="children.lyrics"
    />
  </v-card>
</template>

<script>
import Song from '@/components/Song';

export default {
  components: {
    Song
  },
  props: {
    type: { type: String, default: '' },
    children: { type: Object, required: true }
  }
};
</script>