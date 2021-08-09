<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/images/logo.png" alt=""
        /></router-link>
      </div>
      <div id="nav">
        <router-link to="/">履歷介紹</router-link>
        <!-- <router-link to='/into'>經歷介紹</router-link> -->
        <router-link to="/work">作品展示</router-link>
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
<style lang="scss">
$main_color: #007ced;
$gray_color: #666;
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nav {
  padding: 30px;

  a {
    padding: 12px 16px;
    font-weight: bold;
    font-size: 1.6rem;
    color: $gray_color;

    &.router-link-exact-active {
      color: $main_color;
    }
  }
}
</style>
