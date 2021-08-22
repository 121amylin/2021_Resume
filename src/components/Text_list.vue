<template>
  <div class="section container">
    <ul class="text_list">
      <li v-for="(item, index) in get_work" :key="item.id">
        <a :href="item.url" target="_blank">
          <span class="num">{{ index + 1 }}</span>
          <span class="content">
            <h3 class="tit">{{ item.title }}</h3>
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

<style lang="scss" scoped>
@import '../scss/common';
@import '../scss/icon';
@import '../scss/text_list';

</style>
