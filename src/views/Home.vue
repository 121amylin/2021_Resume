<template>
  <div class="home">
    <button @click="getData">get</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    getData () {
      this.$store.dispatch('GET_DATE')
    }
  }
}

</script>
