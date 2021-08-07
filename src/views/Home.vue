<template>
  <div class='home'>
    <button @click="getData">get</button>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  // },
  methods: {
    getData () {
      this.$store.dispatch('GET_DATE')
    }
  }
}
</script>
