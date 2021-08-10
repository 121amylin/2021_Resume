<template>
  <div class="skill section main_color_10_bg">
    <div class="container">
      <div class="row" v-for="content in get_skill" :key="content.id">
        <h3 class="tit">{{ content.class }}</h3>

        <ul
          class="item_list"
          v-for="(value, index) in content.item"
          :key="index"
        >
          <li>
            <h4 class="sec_tit">{{ value.class }}</h4>

            <ul>
              <li
                class="text_list"
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

<style lang="scss">
.text_list {
  li {
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
}
</style>
