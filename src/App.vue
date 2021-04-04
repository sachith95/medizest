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
            <CustomCard :val="20" img="eco.jpg" />
          </v-col>
          <v-col cols="12" md="4">
            <CustomCard :val="20" img="school.png" />
          </v-col>
          <v-col cols="12" md="4">
            <CustomCard :val="20" img="doc.jpg" />
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
    };
  },
  mounted() {
    //this.getWeather();
    this.getEconmey();
    //this.search();
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
    getEconmey() {
      this.axios
        .post(`https://medizest.azurewebsites.net/api/HttpTrigger1?code=aI3w866dYi/VmFDXMUoYysfL1lfeybwTgAAdHdieRvt4CoGwVL9Nag==`)
        .then((response) => {
          console.log(response.data);
        });
    },
    search() {
      var url =
        "https://ussouthcentral.services.azureml.net/workspaces/503bbc5966a5497cb2738a6976ff128b/services/ddd500ba69b34caf9cb5e1379a35b008/execute?api-version=2.0&details=true";

      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);

      xhr.setRequestHeader(
        "Authorization",
        "Bearer QIkr3+9B1utej0eiyzvPfL3iBvM7iK7pQI0opsSf/0EnpMgrmjpfTfqXqp7H5bzc8C4iEBA31PSNojWMUQulGA=="
      );
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
        }
      };

      var data = `{
  "Inputs": {
    "input1": {
      "ColumnNames": [
        "gender",
        "age",
        "income",
        "race",
        "edu_level"
      ],
      "Values": [
        [
          "value",
          "0",
          "value",
          "value",
          "value"
        ],
        [
          "value",
          "0",
          "value",
          "value",
          "value"
        ]
      ]
    }
  },
  "GlobalParameters": {}
}`;

      xhr.send(data);
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
