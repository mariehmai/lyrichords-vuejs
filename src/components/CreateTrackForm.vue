<template>
  <v-form ref="form" v-model="valid" @submit.prevent="createTrack">
    <v-container>
      <v-text-field
        v-model="title"
        label="Song title"
        placeholder="Colchique dans les prés"
        :rules="requiredRule"
        required
      />
      <v-text-field
        v-model="artist"
        label="Artist"
        placeholder="Casandra Lee"
        :rules="requiredRule"
        required
      />
      <v-textarea
        v-model="lyrics"
        name="input-7-1"
        label="Lyrics"
        placeholder="🎼Lala la la la lala 🎤"
        :rules="requiredRule"
        required
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
      valid: false,
      artist: '',
      genre: 'Unknown',
      lyrics: '' ,
      title: '',
      requiredRule: [value => !!value || '* required' ]
    };
  },
  methods: {
    createTrack() {
      this.$refs.form.validate();
      
      if (this.valid) {
        this.$store.dispatch(Action.CREATE_TRACK, {
          artist: this.artist,
          genre: this.genre,
          lyrics: this.lyrics,
          title: this.title
        });
      }
    }
  }
};
</script>