<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>MediZest</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-img
        :src="require(`./assets/logo.png`)"
        height="100px"
        width="100px"
        contain
      ></v-img>
    </v-app-bar>

    <v-main>
      <div class="ma-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="age" label="Age"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="race"
              label="Race/Ethnicities"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="zip"
              label="Zip code"
              append-outer-icon="mdi-account-search"
              @click:append-outer="search"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <CustomGauge :val="20" chart="Economy" />
          </v-col>
          <v-col cols="12" md="4">
            <CustomGauge :val="20" chart="Education" />
          </v-col>
          <v-col cols="12" md="4">
            <CustomGauge :val="20" chart="Housing" />
          </v-col>
        </v-row>
      </div>
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
  data: () => {
    return {
      age: 10,
      race: "",
      zip: "",
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=d0ea899d8966e5c7e37ebd335ef931c1`
        )
        .then((response) => {
          console.log(response.data);
        });
    },
    search() {
      ///
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
/* .back {
  background-image:  url('./assets/remote-work-man.svg');
} */
</style>
