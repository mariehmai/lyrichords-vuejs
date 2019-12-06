<template>
  <v-card-text class="slider">
    <v-slider :model="model" track-color="grey"
              :min="min" :max="max"
    >
      <template v-if="!!iconLeft" v-slot:prepend>
        <v-icon @click="clickLeft">
          {{ iconLeft }}
        </v-icon>
      </template>
      <template v-if="!!iconRight" v-slot:append>
        <v-icon @click="clickRight">
          {{ iconRight }}
        </v-icon>
      </template>
    </v-slider>
  </v-card-text>
</template>

<script>
export default {
  props: {
    model: { type: Number, required: true },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    iconLeft: { type: String, default: '' },
    iconRight: { type: String, default: '' },
    clickLeft: { type: Function, default: () => {} },
    clickRight: { type: Function, default: () => {} }
  }
};
</script>