<template>
  <div class="home" v-if="isloadend">
    <Into></Into>
    <canvas id="waveCanvas"></canvas>
    <Timeline></Timeline>
    <canvas id="waveCanvas2"></canvas>
    <Featured></Featured>
    <canvas id="waveCanvas3"></canvas>
    <Skill></Skill>
    <canvas id="waveCanvas4"></canvas>
  </div>
</template>

<script>
import Into from '@/components/Into.vue'
import Timeline from '@/components/Time-line.vue'
import Featured from '@/components/Featured.vue'
import Skill from '@/components/Skill.vue'
// import '@/script/wave_function.js'

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
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '../../script/wave_function.js'
    document.body.appendChild(script)
  }
}
</script>

<style lang="scss" scoped>
// @import '../scss/common';
.bgam {
  overflow: hidden;
}
#waveCanvas,
#waveCanvas3 {
  margin-bottom: 0px;
  vertical-align: middle;
}
#waveCanvas2,
#waveCanvas4 {
  transform: rotate(180deg);
}
</style>
