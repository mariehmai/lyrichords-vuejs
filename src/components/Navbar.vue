<template>
  <v-app-bar app>
    <div class="text-uppercase headline logo">
      <v-img class="image" :src="require('@/assets/logo.svg')" />
      <span class="app-name font-weight-light">{{ appName }}</span>
    </div>
    <v-text-field class="search"
                  outlined
                  dense
                  hide-details
                  label="Search 🔎"
                  placeholder="Song title, artist, ..."
                  @input="updateSearch"
    />
    <template v-slot:actions>
      <font-awesome-icon :icon="['fa', 'plus']" color="#f7797d" />
    </template>
    <v-btn icon @click="logout">
      <font-awesome-icon :icon="['fa', 'sign-out-alt']" />
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex';

import { Action } from '@/store/auth.store';
import { Mutation } from '@/store/track.store';

export default {
  data: () => ({
    appName: process.env.VUE_APP_TITLE
  }),
  computed: {
    ...mapState({
      tracks: state => state.Track.tracks
    })
  },
  methods: {
    updateSearch(search) {
      this.$store.commit(Mutation.UPDATE_SEARCH, search);
    },
    logout() {
      this.$store.dispatch(Action.LOGOUT);
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .app-name {
    display: none;
  }
}

.search {
  padding-left: 20px;
  max-width: 400px;
}

.logo {
  display: flex;
  align-items: center;
}

.image {
  width: 44px;
  margin-right: 8px;
}
</style>