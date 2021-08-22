<template>
  <ul class="picture_list">
    <li v-for="item in pdate" :key="item.id">
      <a :href="item.link" target="_blank">
        <div class="pic">
          <img :src="require(`../assets${item.pic}`)" alt="" />
        </div>
        <div class="content">
          <h4 class="tit">{{ item.title }}</h4>
          <p>{{ item.descript }}</p>
        </div>
        <div class="link_icon_box"><i class="link_icon"></i></div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Picture_list',
  props: ['pdate']
}
</script>

<style lang="scss" scoped>
@import '../scss/common';
@import '../scss/icon';

.picture_list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  li {
    width: calc(33.3% - 30px);
    margin: 15px;
    border: 1px solid $light_gray_color;
    transition: opacity 0.3s;
    &:hover{
      opacity: 0.6;
    }
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
    padding: 0 20px;
    color: $gray_color;
    h3 {
      transition: color 0.3s;
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
