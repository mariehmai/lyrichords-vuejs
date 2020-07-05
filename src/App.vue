<template>
  <v-app>
    <v-app-bar app>
      <div class="text-uppercase headline logo">
        <v-img class="image" :src="require('@/assets/logo.svg')" />
        <span class="font-weight-light">{{ appName }}</span>
      </div>
      <v-btn icon @click="logout">
        <font-awesome-icon :icon="['fa', 'sign-out-alt']" />
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { Action } from '@/store/auth/types';

export default {
  name: 'App',
  data: () => ({
    appName: process.env.VUE_APP_TITLE
  }),
  methods: {
    logout() {
      this.$store.dispatch(Action.LOGOUT);
    }
  }
};
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}

.image {
  width: 44px;
  margin-right: 8px;
}
</style>
