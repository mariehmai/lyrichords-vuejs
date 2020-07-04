<template>
  <v-app>
    <v-app-bar app>
      <div class="text-uppercase headline logo">
        <v-img class="image" :src="require('@/assets/logo.svg')" />
        <span class="font-weight-light">{{ appName }}</span>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import config from '@/config.js';

export default {
  name: 'App',
  data: () => ({
    appName: config.APP_NAME
  })
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
