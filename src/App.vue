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
            <CustomCard :val="this.economy[1]" img="eco.jpg" />
          </v-col>
          <v-col cols="12" md="4">
            <CustomCard :val="this.education[1]" img="school.png" />
          </v-col>
          <v-col cols="12" md="4">
            <CustomCard :val="this.health" img="doc.jpg" />
          </v-col>
        </v-row>
        <CustomGauge :val="20" img="doctor.svg" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import CustomGauge from "./components/CustomGauge";
import CustomCard from "./components/CustomCard";
export default {
  name: "App",
  components: {
    CustomGauge,
    CustomCard,
  },
  data: () => {
    return {
      age: 10,
      race: "",
      zip: "",
      education: "",
      health: "",
      economy: ""
    };
  },
  beforeMount() {
    this.getEconomy();
    this.getEducation();
    this.getHealth();
  },
  methods: {
    search() {
      //
    },
    getEconomy() {
      this.axios
        .post(
          `https://medizest.azurewebsites.net/api/HttpTrigger1?code=aI3w866dYi/VmFDXMUoYysfL1lfeybwTgAAdHdieRvt4CoGwVL9Nag==`,
          {
            ep: "economey",
            age: "0",
            zipcode: "",
            race: "",
          }
        )
        .then((response) => {
           const val = response.data.Results.output1.value.Values[0]
            .slice(7, response.data.Results.output1.value.Values[0].length - 1)
            .map((i) => Number(i));
          const maxVal = Math.max(...val);
          const index = response.data.Results.output1.value.Values[0].indexOf(maxVal.toString());
          const col =  response.data.Results.output1.value.ColumnNames[index]
          this.economy = col.split('"')
          console.log(this.economy[1]);
        });
    },
    getEducation() {
      this.axios
        .post(
          `https://medizest.azurewebsites.net/api/HttpTrigger1?code=aI3w866dYi/VmFDXMUoYysfL1lfeybwTgAAdHdieRvt4CoGwVL9Nag==`,
          {
            ep: "education",
            age: "0",
            zipcode: "",
            race: "",
          }
        )
        .then((response) => {
          const val = response.data.Results.output1.value.Values[0]
            .slice(7, response.data.Results.output1.value.Values[0].length - 1)
            .map((i) => Number(i));
          const maxVal = Math.max(...val);
          const index = response.data.Results.output1.value.Values[0].indexOf(maxVal.toString());
          const col =  response.data.Results.output1.value.ColumnNames[index]
          this.education = col.split('"')
          console.log(this.education[1]);
        });
    },
    getHealth() {
      this.axios
        .post(
          `https://medizest.azurewebsites.net/api/HttpTrigger1?code=aI3w866dYi/VmFDXMUoYysfL1lfeybwTgAAdHdieRvt4CoGwVL9Nag==`,
          {
            ep: "health",
            age: "0",
            zipcode: "",
            race: "",
          }
        )
        .then((response) => {
          this.health =
            response.data.Results.output1.value.Values[0][response.data.Results.output1.value.Values[0].length - 1];
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
/* .back {
  background-image:  url('./assets/remote-work-man.svg');
} */
</style>
