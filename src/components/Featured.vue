<template>
  <div class="featured section">
    <div class="container">
      <ul class="pic_list clear">
        <li class="item" v-for="item in get_featured" :key="item.id">
          <a :href="item.link" target="_blank">
            <h4 class="tit">{{ item.title }}</h4>
            <div class="pic">
              <img :src="require(`../assets${item.pic}`)" alt="" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  computed: {
    get_featured () {
      return this.$store.state.featured
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/common';

.pic_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -15px;

  .item {
    width: 33.3%;
    padding: 15px;
    text-align: center;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.6;
    }

    @include rwd(768px) {
      width: 50%;
    }
    @include rwd(480px) {
      width: 100%;
    }
  }
  .tit {
    margin-bottom: 10px;
  }
  .pic {
    display: flex;
    align-items: flex-end;
  }
}
</style>
