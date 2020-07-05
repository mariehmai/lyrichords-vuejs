<template>
  <v-form id="login" @submit.prevent="login">
    <v-container>
      <h1 class="title text-h4">
        Log in
      </h1>
      <v-text-field
        v-model="email"
        label="Email"
        placeholder="lyrichords@example.com"
        outlined
      />
      <v-text-field v-model="password" 
                    label="Password"
                    placeholder="＊＊＊＊＊＊＊＊"
                    outlined
      />
      <v-btn color="secondary"
             type="submit"
             block
             rounded
      >
        Log in
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { Action } from '@/store/auth.store';

export default {
  data() {
    return {
      email: 'mai.mariehelene@gmail.com',
      password: 'passpass'
    };
  },
  methods: {
    login() {
      this.$store.dispatch(Action.LOGIN, {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
#login {
  max-width: 440px;
  margin: 0 auto;
}

.title {
  margin: 2rem 0 3rem 0;
}
</style>
