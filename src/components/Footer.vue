<template>
  <div class="container">
    <div class="footer">
      <div id="nav">
        <router-link to="/home">履歷介紹</router-link>
        <!-- <router-link to='/into'>經歷介紹</router-link> -->
        <router-link to="/vue_work">Vue應用</router-link>
        <router-link to="/work">實務作品</router-link>
        <!-- <router-link to='/Ability'>能力自評</router-link> -->
        <router-link to="/more">了解更多</router-link>
      </div>
      <div class="copyright">© {{ getYear }} {{ get_title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getYear () {
      return new Date().getFullYear()
    },
    get_title () {
      return this.$store.state.into.title
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/common';

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-top: 40px;
  border-top: 1px solid #ddd;
  @include rwd(768px) {
    flex-direction: column;
  }
}

#nav {
  padding: 0;
  @include rwd(768px) {
    margin-bottom: 10px;
  }

  a {
    padding: 6px;
    color: $gray_color;
    transition: color 0.3s;
    &:hover {
      color: $main_color;
    }

    &.router-link-active,
    &.router-link-exact-active {
      color: $main_color;
    }
  }
}
</style>
