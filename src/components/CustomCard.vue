<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="require(`../assets/${img}`)" height="200px"></v-img>

    <v-card-title>
      {{ val }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    val: [String, Array],
    img: [String],
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>