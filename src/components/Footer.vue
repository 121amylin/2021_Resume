<template>
  <div class="footer">
    <div id="nav">
      {{ db.into }}
      <router-link to="/">履歷介紹</router-link>
      <!-- <router-link to='/into'>經歷介紹</router-link> -->
      <router-link to="/work">作品展示</router-link>
      <!-- <router-link to='/Ability'>能力自評</router-link> -->
      <router-link to="/more">了解更多</router-link>
    </div>
    <div class="copyright">© {{ getYear }} 林欣美作品集網站</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      db: ''
    }
  },
  computed: {
    getYear () {
      return new Date().getFullYear()
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
