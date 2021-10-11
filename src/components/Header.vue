<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/images/logo.png" alt=""
        /></router-link>
      </div>
      <div id="nav">
        <router-link to="/home">履歷介紹</router-link>
        <!-- <router-link to='/into'>經歷介紹</router-link> -->
        <router-link to="/vue_work">Vue應用</router-link>
        <router-link to="/work">實務作品</router-link>
        <!-- <router-link to='/Ability'>能力自評</router-link> -->
        <router-link to="/more">了解更多</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
@import '../scss/common';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include rwd(768px) {
    flex-direction: column;
  }
}
#nav {
  padding: 30px 0;
  @include rwd(768px) {
    width: 100%;
    padding: 0;
    border-top: 1px dashed $light_gray_color;
    text-align: center;
  }

  a {
    padding: 12px 16px;
    font-weight: bold;
    color: $gray_color;
    transition: color 0.3s;
    &:hover{
      color: $main_color;
    }
    @include rwd(400px) {
      padding: 10px 6px;
    }
    &.router-link-exact-active {
      color: $main_color;
    }
  }
}
</style>
