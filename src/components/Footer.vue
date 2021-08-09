<template>
  <div class="container">
    <div class="footer">
      <div id="nav">
        <router-link to="/">履歷介紹</router-link>
        <!-- <router-link to='/into'>經歷介紹</router-link> -->
        <router-link to="/work">作品展示</router-link>
        <!-- <router-link to='/Ability'>能力自評</router-link> -->
        <router-link to="/more">了解更多</router-link>
      </div>
      <div class="copyright" v-if="isloadend">
        © {{ getYear }} {{ get_title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      isloadend: false
    }
  },
  computed: {
    getYear () {
      return new Date().getFullYear()
    },
    get_title () {
      return this.$store.state.into.title
    }
  },
  mounted () {
    if (this.$store.state) {
      this.isload = true
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid #ddd;
}

#nav {
  padding: 0;
  a {
    font-size: 1.4rem;
    padding: 6px;
  }
}
</style>
