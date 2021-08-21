<template>
  <div class="featured">
    <div class="container">
      <ul class="pic_list clear">
        <li class="item" v-for="item in get_featured" :key="item.id">
          <a :href="item.link" target="_blank">
            <div class="pic">
              <img :src="require(`../assets${item.pic}`)" alt="" />
            </div>
            <h4 class="tit">{{ item.title }}</h4>
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
.pic_list {
  .tit {
    font-size: 1.6rem;
  }
  .pic {
    display: flex;
    align-items: flex-end;
    height: 160px;
    margin-bottom: 10px;
  }
  li {
    width: 20%;
    float: left;
    padding: 15px;
    text-align: center;
  }
}
</style>
