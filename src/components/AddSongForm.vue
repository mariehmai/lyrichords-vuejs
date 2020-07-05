<template>
  <v-form @submit.prevent="addSong">
    <v-container>
      <v-text-field
        v-model="song.title"
        label="Song title"
        placeholder="Colchique dans les prés"
      />
      <v-text-field
        v-model="song.artist"
        label="Artist"
        placeholder="Casandra Lee"
      />
      <v-textarea
        v-model="song.lyrics"
        name="input-7-1"
        label="Lyrics"
        placeholder="🎼Lala la la la lala 🎤"
      />
      <v-btn rounded small
             color="primary"
             type="submit"
      >
        Add song
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import mocks from '@/mocks';

export default {
  props: {
    click: { type: Function, default: () => {} }
  },
  data() {
    return {
      song: {
        type: Object,
        default: {
          title: { type: String, default: '' },
          artist: { type: String, default: '' },
          lyrics: { type: String, default: '' }
        }
      }
    };
  },
  methods: {
    addSong() {
      mocks.tracks.push(this.song);
    }
  }
};
</script>