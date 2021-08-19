<template>
  <div class="home" v-if="isloadend">
    <PictureList></PictureList>
    <TableArr></TableArr>
    <TableObj></TableObj>
  </div>
</template>

<script>
import PictureList from '@/components/Picture_list.vue'
import TableArr from '@/components/Table_arr.vue'
import TableObj from '@/components/Table_obj.vue'

export default {
  name: 'Work',
  components: { PictureList, TableArr, TableObj },
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

<style lang="scss">
// @import '../scss/common';
//
</style>
