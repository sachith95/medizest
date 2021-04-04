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
    this. search(); 
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
        .post(
          `https://ussouthcentral.services.azureml.net/workspaces/503bbc5966a5497cb2738a6976ff128b/services/b6bf4e3f7e664dc88f28efb9fc2234e6/execute?api-version=2.0&details=true`,
          {
            Inputs: {
              input1: {
                ColumnNames: [
                  "age",
                  "fnlwgt",
                  "education",
                  "occupation",
                  "race",
                  "gender",
                  "native-country",
                ],
                Values: [
                  ["0", "0", "value", "value", "value", "value", "value"],
                  ["12", "0", "value", "value", "value", "value", "value"],
                ],
              },
            },
            GlobalParameters: {},
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " +
                "mfh98WE0V8FsJhDPDSh6bfu6mouijpSOYXCeASXDA7t+eRHNTxthHzu6pVJsnwqK78/3iIXXpz7pGDkZTxRPOA==",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    },
    search() {
      let req = require("request");

      const uri =
        "https://ussouthcentral.services.azureml.net/workspaces/503bbc5966a5497cb2738a6976ff128b/services/b6bf4e3f7e664dc88f28efb9fc2234e6/execute?api-version=2.0&details=true";
      const apiKey =
        "mfh98WE0V8FsJhDPDSh6bfu6mouijpSOYXCeASXDA7t+eRHNTxthHzu6pVJsnwqK78/3iIXXpz7pGDkZTxRPOA==";

      let data = {
        Inputs: {
          input1: {
            ColumnNames: [
              "age",
              "fnlwgt",
              "education",
              "occupation",
              "race",
              "gender",
              "native-country",
            ],
            Values: [
              ["0", "0", "value", "value", "value", "value", "value"],
              ["12", "0", "value", "value", "value", "value", "value"],
            ],
          },
        },
        GlobalParameters: {},
      };

      const options = {
        uri: uri,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
        body: JSON.stringify(data),
      };

      req(options, (err, res, body) => {
        if (!err && res.statusCode == 200) {
          console.log(body);
        } else {
          console.log("The request failed with status code: " + res.statusCode);
        }
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
