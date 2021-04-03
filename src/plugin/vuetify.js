import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: true,
  },
  icons: {
    iconfont: 'mdi',
  },
}

export default new Vuetify(opts)