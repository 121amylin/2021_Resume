<template>
  <div class="home" v-if="isloadend">
    <Into></Into>
    <div id="waveCanvas"></div>
    <Timeline></Timeline>
    <Featured></Featured>
    <Skill></Skill>

  </div>
</template>

<script>
import Into from '@/components/Into.vue'
import Timeline from '@/components/Time-line.vue'
import Featured from '@/components/Featured.vue'
import Skill from '@/components/Skill.vue'
// import '@/assets/script/wave_function.js'

export default {
  name: 'Home',
  components: { Into, Timeline, Featured, Skill },
  data () {
    return {
      isloadend: false
    }
  },

  mounted () {
    if (this.$store.state) {
      this.isloadend = true
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '../scss/common';
//
</style>
