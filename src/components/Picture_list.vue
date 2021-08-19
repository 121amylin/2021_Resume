<template>
  <div class="section container">
    <ul class="picture_list">
      <li v-for="item in get_work" :key="item.id">
        <a :href="item.link" target="_blank">
          <div class="pic">
            <img :src="require(`../assets${item.pic}`)" alt="" />
          </div>
          <div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.descript }}</p>
          </div>
          <div class="link_icon_box"><i class="link_icon"></i></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Picture_list',
  computed: {
    get_work () {
      return this.$store.state.work.chamge_to_web.work
    }
  }
}
</script>

<style lang="scss">
@import '../scss/common';
@import '../scss/icon';

.picture_list {
  display: flex;
  flex-wrap: wrap;
  li {
    width: calc(33.3% - 30px);
    margin: 15px;
    border: 1px solid $gray_color;
    @include rwd(991px) {
      width: calc(50% - 20px);
      margin: 10px;
    }
    @include rwd(425px) {
      width: 100%;
    }
  }
  a {
    position: relative;
    width: 100%;
    &:hover {
      h3 {
        color: $light_main_color;
      }
      .link_icon_box {
        transform: rotate(360deg);
      }
    }
  }
  .pic {
    margin-bottom: 10px;
  }
  .content {
    margin-bottom: 30px;
    padding:0 20px;
    color: $gray_color;
    h3 {
      font-size: 18px;
      color: $main_color;
      transition: color 0.3s;
    }
    p {
      font-size: 16px;
    }
  }
  .link_icon_box {
    text-align: right;
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: $gray_color;
    transition: transform 0.3s;
  }
}
</style>
