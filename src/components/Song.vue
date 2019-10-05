<template>
  <div id="song-container">
    <h2>{{ author }} - {{ title }}</h2>
    <span v-for="(next, i) in lyrics" :key="i">
      {{ next.sentence }}
      <br>
      <br v-if="next.isEndVerse">
    </span>
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

<style scoped>
h2 {
  padding-bottom: 2vh;
}
</style>