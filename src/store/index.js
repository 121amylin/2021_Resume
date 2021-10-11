import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    into: '',
    experience: '',
    education: '',
    skill: '',
    featured: '',
    work: '',
    more: '',
    init_work: '',
    vue: ''
  },
  mutations: {
    GET_INTO (state, data) {
      state.into = data
    },
    GET_EXPERIENCE (state, data) {
      state.experience = data
    },
    GET_EDUCATION (state, data) {
      state.education = data
    },
    GET_SKILL (state, data) {
      state.skill = data
    },
    GET_FEATURED (state, data) {
      state.featured = data
    },
    GET_WORK (state, data) {
      state.work = data
    },
    GET_MORE (state, data) {
      state.more = data
    },
    GET_INIT_WORK (state, data) {
      state.init_work = data
    },
    GET_INIT_VUE (state, data) {
      state.vue = data
    }
  },
  actions: {
    getdbapi (store) {
      axios
        .get('https://121amylin.github.io/2021resume/db.json')
        .then((response) => {
          store.commit('GET_INTO', response.data.into.descript)
          store.commit('GET_EXPERIENCE', response.data.experience)
          store.commit('GET_EDUCATION', response.data.education)
          store.commit('GET_SKILL', response.data.skill)
          store.commit('GET_FEATURED', response.data.featured)
          store.commit('GET_WORK', response.data.wrok_group)
          store.commit('GET_MORE', response.data.more)
          store.commit('GET_INIT_WORK', response.data.wrok_group.chamge_to_web)
          store.commit('GET_INIT_VUE', response.data.vue)
        })
    }
  },
  modules: {}
})
