<template>
  <v-col md="4" offset-md="8">
    <v-card :elevation="4">
      <v-card-text>
        <Song
          v-if="type === 'song'"
          :title="children.title"
          :author="children.author"
          :lyrics="children.lyrics"
        />
      </v-card-text>
    </v-card>
  </v-col>
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

<style scoped>
.song {
  padding: 4vh 3vh;
}
</style>