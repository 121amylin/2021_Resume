<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <button @click="getData">get</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    getData () {
      this.$store.dispatch('GET_DATE')
    }
  }
}
</script>
