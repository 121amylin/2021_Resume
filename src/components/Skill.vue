<template>
  <div class="skill main_color_20_bg">
    <div class="container">
      <div class="row" v-for="content in get_skill" :key="content.id">
        <h3 class="class_tit"><i class="gg-sweden"></i>{{ content.class }}</h3>
        <div class="content_box">
          <ul
            class="item_list"
            v-for="(value, index) in content.item"
            :key="index"
          >
            <li>
              <h4 class="tit">{{ value.class }}</h4>

              <ul class="list">
                <li
                  class="content_text"
                  v-for="(value, index) in value.descript"
                  :key="index"
                >
                  {{ value }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  computed: {
    get_skill () {
      return this.$store.state.skill
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/common';
@import '../scss/icon';

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}
.row {
  width: 50%;
  padding: 0 20px;
  @include rwd(480px) {
    width: 100%;
  }

  &:first-child {
    width: 100%;
    .item_list {
      width: calc(33.3% - 30px);
      @include rwd(768px) {
        width: calc(50% - 30px);
      }
      @include rwd(480px) {
        width: 100%;
      }
    }
  }
}
.class_tit {
  padding-bottom: 10px;
  border-bottom: 2px solid $dark_main_color;
  color: $dark_main_color;
  @include rwd(480px){
    padding-bottom: 8px;
  }
}
.skill {
  padding: 40px 0;
}
.list {
  padding-left: 4px;
}
.content_box {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  .item_list {
    margin: 0 15px 16px 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.content_text {
  position: relative;
  padding-left: 16px;
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: #999;
    transform: translateY(-50%);
    left: 0;
    top: 50%;
  }
}
</style>
