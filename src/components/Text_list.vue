<template>
  <div class="section container">
    <ul class="text_list">
      <li v-for="(item, index) in get_work" :key="item.id">
        <a :href="item.url" target="_blank">
          <span class="num">{{ index + 1 }}</span>
          <span class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.descript }}</p>
          </span>
          <span class="link_icon_box"><i class="link_icon"></i></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Text_list',
  computed: {
    get_work () {
      return this.$store.state.more.work
    }
  }
}
</script>

<style lang="scss">
@import '../scss/common';
@import '../scss/icon';

.text_list {
  li {
    &::before {
      display: none;
    }
    + li {
      border-top: 1px dashed $gray_color;
    }
  }
  a {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 0;
    color: $gray_color;
    &:hover {
      h3 {
        color: $light_main_color;
      }
      .link_icon_box i {
        transform: rotate(360deg);
      }
    }
  }
  span {
    display: inline-block;
    font-size: 0;
  }
  .num {
    width: 60px;
    font-size: 16px;
    text-align: center;
  }
  .content {
    width: calc(100% - 170px);
    h3 {
      font-size: 20px;
      color: $main_color;
      transition: color 0.3s;
    }
    p {
      font-size: 16px;
    }
  }
  .link_icon_box {
    width: 100px;
    position: relative;
    vertical-align: 7px;
    i {
      transition: transform 0.3s;
    }
  }
}
</style>
