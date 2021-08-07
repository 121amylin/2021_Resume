import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    GET_DATE () {
      axios.get('./db.json').then(response => {
        console.log(response.data)
      })
    }
  },
  modules: {}
})
