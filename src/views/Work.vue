<template>
  <div class="home">
    <div v-if="isloadend" class="section container">
      <div class="downmenu" :class="{ active: isShow_menu }">
        <div @click="togglemenuHandle">
          <h4 class="choose_box">請選擇作品類型</h4>

          <ul>
            <li
              v-for="(item, index) in get_data"
              :key="index"
              @click="changeClassHandle(item)"
              v-show="item.type != ''"
            >
              <p>{{ item.class }}</p>
            </li>
          </ul>
        </div>
      </div>
      <compoment v-if="type" :is="type" :pdate="show_data"> </compoment>
      <compoment v-else :is="get_init.type" :pdate="get_init.work"> </compoment>
    </div>
  </div>
</template>

<script>
import PictureList from '@/components/Picture_list.vue'
import TableArr from '@/components/Table_arr.vue'
import TableObj from '@/components/Table_obj.vue'
import Lightbox from '@/components/Lightbox.vue'

export default {
  name: 'Work',
  components: { PictureList, TableArr, TableObj, Lightbox },
  data () {
    return {
      isloadend: false,
      isShow_menu: false,
      type: '',
      show_data: []
    }
  },
  computed: {
    get_data () {
      return this.$store.state.work
    },
    get_init () {
      return this.$store.state.init_work
    }
  },
  methods: {
    changeClassHandle (item) {
      this.type = item.type
      this.show_data = item.work
    },
    togglemenuHandle () {
      this.isShow_menu = !this.isShow_menu
    }
  },
  mounted () {
    if (this.$store.state) {
      this.isloadend = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/common';
.choose_box {
  padding: 14px 24px 14px 16px;
  border: 1px solid $light_gray_color;
  border-radius: 4px;
  position: relative;
  font-size: 1.7rem;
  font-weight: 500;
  color: $gray_color;
  cursor: pointer;
  @include rwd(480px) {
    padding: 12px 24px 12px 16px;
    font-size: 1.5rem;
  }
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: $gray_color transparent transparent transparent;
    right: 10px;
    transform: translateY(-50%);
    top: 50%;
  }
}
.downmenu {
  position: relative;
  margin-bottom: 30px;
  @include rwd(480px) {
    margin-bottom: 15px;
  }
  p {
    padding: 10px;
  }
  ul {
    display: none;
    width: 100%;
    position: absolute;
    padding-left: 0;
    background-color: #fff;
    margin: 4px 0 0 0;
    list-style: none;
    min-width: 200px;
    z-index: 1;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    li {
      display: block;
      cursor: pointer;
      padding: 0 16px;
      &:hover p {
        color: $main_color;
      }
      p {
        border-top: 1px dashed $light_gray_color;
        transform: color 0.3s;
      }
      &:first-child {
        p {
          border-top: none;
        }
      }
    }
  }
  &.active {
    ul {
      display: block;
    }
  }
}

//
</style>
