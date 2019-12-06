<template>
  <div class="song-container">
    <v-card-title>{{ author }} - {{ title }}</v-card-title>
    <v-card-text>
      <span v-for="(next, i) in lyrics" :key="i">
        {{ next.sentence }}
        <br>
        <br v-if="next.isEndVerse">
      </span>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    author: { type: String, required: true },
    lyrics: { type: Array, required: true }
  }
};
</script>
