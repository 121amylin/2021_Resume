<template>
  <div class="home" v-if="isloadend">
    <div class="section container">
      <div class="downmenu" :class="{ active: isShow_menu }">
        <div @click="togglemenuHandle">
          <p>請選擇作品類型</p>
          <ul>
            <li
              v-for="(item, index) in get_data"
              :key="index"
              @click="changeClassHandle(item)"
              v-show="item.type != ''"
            >
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
      <compoment :is="type" :pdate="show_data"> </compoment>
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
      show_data: {}
    }
  },
  computed: {
    get_data () {
      return this.$store.state.work
    }
  },
  methods: {
    changeClassHandle (item) {
      this.type = item.type
      this.show_data = item.class_data
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

<style lang="scss">
@import '../scss/common';
.downmenu {
  position: relative;
  p {
    margin: 0;
  }
  ul {
    display: none;
    position: absolute;
    padding-left: 0;
    background-color: #fff;
    margin: 0;
    list-style: none;
    min-width: 200px;
    li {
      display: block;
      cursor: pointer;
      padding: 10px;
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
