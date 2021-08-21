<template>
<div class="bgam">
  <div id="app" class="wrwp">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  created () {
    this.$store.dispatch('getdbapi')
  }
}
</script>
<style lang="scss" scoped>
@import '/scss/common';
@import '/scss/bg_gam';

</style>
