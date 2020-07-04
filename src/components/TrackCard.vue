<template>
  <v-card class="track-card" dark
          hover
          @click="click"
  >
    <v-img
      class="background"
      :src="randomBackground()"
      aspect-ratio="1"
      gradient="to right, rgba(0,0,0,0.9), rgba(0,0,0,0.1)"
    >
      <div class="d-flex justify-space-between">
        <div>
          <v-card-title class="title text-h6" v-text="title" />
          <v-card-text class="description text-md-overline" v-text="artist" />
        </div>
        <v-avatar class="ma-3 cover" size="60" tile>
          <v-img :src="cover" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" />
        </v-avatar>
      </div>
    </v-img>
  </v-card>
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

<style scoped>
.background {
  height: 85px;
}

.title {
  padding: 5px 16px 10px 16px;
}

.description {
  padding: 5px 16px 10px 16px;
}

@media screen and (max-width: 850px) {
  .cover {
    display: none;
  }
}
</style>>