<template>
  <v-form @submit.prevent="createTrack">
    <v-container>
      <v-text-field
        v-model="title"
        label="Song title"
        placeholder="Colchique dans les prés"
      />
      <v-text-field
        v-model="artist"
        label="Artist"
        placeholder="Casandra Lee"
      />
      <v-textarea
        v-model="lyrics"
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
import { Action } from '@/store/track.store';

export default {
  data() {
    return {
      artist: '',
      genre: 'Unknown',
      lyrics: '' ,
      title: ''
    };
  },
  methods: {
    createTrack() {
      this.$store.dispatch(Action.CREATE_TRACK, {
        artist: this.artist,
        genre: this.genre,
        lyrics: this.lyrics,
        title: this.title
      });
    }
  }
};
</script>