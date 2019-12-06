<template>
  <v-card class="track-card" :elevation="4">
    <v-img class="white--text align-end" width="300px" height="220px" :src="cover">
      <v-card-title>{{title}}</v-card-title>
    </v-img>
    <v-card-text>
      <div>{{ $t('artist') }}: {{artist}}</div>
      <div>{{ $t('genre') }}: {{genre}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
const unknown = require('@/assets/unknown.svg');

export default {
  props: {
    artist: { type: String, required: true, default: 'Unknown' },
    title: { type: String, required: true, default: 'Unknown' },
    genre: { type: String, required: true, default: 'Unknown' },
    cover: { type: String, default: unknown }
  }
};
</script>