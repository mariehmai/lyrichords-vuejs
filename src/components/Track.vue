<template>
  <div class="track-container">
    <div class="metadata">
      <v-avatar v-if="!!cover" class="ma-3"
                size="100"
                tile
      >
        <v-img :src="cover" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" />
      </v-avatar>
      <div>
        <v-card-title>{{ artist }} - {{ title }}</v-card-title>
        <v-card-text v-if="!!genre">
          {{ $t('genre') }}: {{ genre }}
        </v-card-text>
      </div>
    </div>
    <v-divider />
    <v-card-text>
      <pre class="content" :style="customStyle">
      {{ decodeURI(lyrics) }}
      </pre>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: { type: Object, default: () => ({ fontSize: '20px' }) },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, default: '' },
    cover: { type: String, default: '' },
    lyrics: { type: String, required: true }
  }
};
</script>

<style scoped>
.metadata {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 550px) {
  .metadata {
    flex-direction: column;
  }
}

.content {
  overflow: scroll;
}
</style>