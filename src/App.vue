<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>MediZest</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-img src="@/assets/remote-work-man.svg"></v-img>
    </v-app-bar>

    <v-main>
      <v-container>
        <CustomGauge />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CustomGauge from "./components/CustomGauge";

export default {
  name: "App",
  components: {
    CustomGauge,
  },
  methods: {
    getEconemyPredictions() {
      Vue.axios.get(api).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
