<template>
  <div class="vue_pic">
    <TableArr :pdate="get_data"></TableArr>
  </div>
</template>

<script>
import TableArr from '@/components/Table_arr.vue'

export default {
  name: 'Vue_work',
  components: { TableArr },
  data () {
    return {
      isloadend: false
    }
  },
  computed: {
    get_data () {
      return this.$store.state.vue.work
    }
  },
  mounted () {
    if (this.$store.state) {
      this.isloadend = true
    }
  }
}
</script>
