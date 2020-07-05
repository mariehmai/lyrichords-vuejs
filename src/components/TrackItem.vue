<template>
  <v-list-item class="track-card"
               hover
               @click="click"
  >
    <v-list-item-content>
      <v-list-item-title class="text-overline">
        {{ title }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ artist }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-avatar>
      <v-img :src="randomBackground()" />
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
const unknown = require('@/assets/unknown.svg');
const bg1 = require('@/assets/track-bg1.png');
const bg2 = require('@/assets/track-bg2.png');
const bg3 = require('@/assets/track-bg3.png');
const bg4 = require('@/assets/track-bg4.png');
const bg5 = require('@/assets/track-bg5.png');
const backgrounds = [bg1, bg2, bg3, bg4, bg5];

export default {
  props: {
    click: { type: Function, default: () => {} },
    artist: { type: String, required: true, default: 'Unknown' },
    title: { type: String, required: true, default: 'Unknown' },
    genre: { type: String, required: true, default: 'Unknown' },
    cover: { type: String, default: unknown }
  },
  methods: {
    randomBackground() {
      return backgrounds[Math.floor(Math.random() * backgrounds.length)];
    }
  }
};
</script>
