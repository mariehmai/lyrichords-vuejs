<template>
  <v-card class="track-card" :color="randomColor()" dark>
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title v-text="title" />
        <v-card-text v-text="artist" />
      </div>
      <v-avatar class="ma-3" size="70" tile>
        <v-img :src="cover" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
const unknown = require('@/assets/unknown.svg');
const colors = [
  'pink darken-2',
  'grey darken-2',
  'green darken-2',
  'yellow darken-2',
  'blue darken-3'
];

export default {
  props: {
    artist: { type: String, required: true, default: 'Unknown' },
    title: { type: String, required: true, default: 'Unknown' },
    genre: { type: String, required: true, default: 'Unknown' },
    cover: { type: String, default: unknown }
  },
  methods: {
    randomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
};
</script>