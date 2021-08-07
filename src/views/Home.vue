<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
Vue.use(VueAxios, axios)

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    axios.get('./db.json').then(response => {
      console.log(response.data)
    })
  }
}
</script>
