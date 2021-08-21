<template>
  <div class="home" v-if="isloadend">
    <TextList></TextList>
  </div>
</template>

<script>
import TextList from '@/components/Text_list.vue'

export default {
  name: 'More',
  components: { TextList },
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
