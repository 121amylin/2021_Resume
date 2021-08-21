<template>
  <div class="lightbox_page">
    <div class="section container">
      <ul class="link_list">
        <li
          v-for="item in get_work"
          @click="openLightBoxHandle(item.pic_list)"
          :key="item.id"
        >
          <div class="pic">
            <img :src="require(`../assets${item.main_pic}`)" alt="" />
          </div>
          <div class="text">
            <h3 class="tit">{{ item.title }}</h3>
          </div>
        </li>
      </ul>
    </div>

    <div class="light_box" v-if="isShowLightBox">
      <a href="#" @click="closeLightBox" class="light_box_btn close_btn"
        ><i class="gg-close-o"></i
      ></a>
      <div class="show_picture">
        <img :src="require(`../assets${lightBoxData[showNow]}`)" alt="" />
      </div>
      <div class="thumbnail_box">
        <a
          class="light_box_btn prev_btn"
          href="#"
          @click.prevent="changeShowNow(-1)"
          ><i class="gg-arrow-left-o"></i
        ></a>
        <div class="thumbnail_list_box" ref="thumbnail_list_box">
          <ul class="thumbnail_list">
            <li
              v-for="(n, index) in get_lightBoxData"
              :key="index"
              class="item"
            >
              <img :src="require(`../assets${n}`)" alt="" />
            </li>
          </ul>
        </div>
        <a
          class="light_box_btn next_btn"
          href="#"
          @click.prevent="changeShowNow(1)"
          ><i class="gg-arrow-right-o"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  data () {
    return {
      isShowLightBox: false,
      lightBoxData: [],
      showNow: null,
      thumbnailSize: 10
    }
  },
  computed: {
    get_work () {
      return this.$store.state.work.design_GDN.work
    },
    get_lightBoxData () {
      return this.lightBoxData
    }
  },

  methods: {
    openLightBoxHandle (list) {
      this.lightBoxData = list
      this.showNow = 0
      this.isShowLightBox = true
      this.fixedHandle()
    },
    fixedHandle () {
      document.querySelector('body').classList.toggle('fixed')
    },
    closeLightBox () {
      this.isShowLightBox = false
      this.showNow = null
      this.lightBoxData = []
      this.fixedHandle()
    },
    changeShowNow (num) {
      const max = this.lightBoxData.length
      this.showNow += num
      if (num === -1) {
        const temp = this.get_lightBoxData.splice(max - 1, max)
        this.get_lightBoxData.unshift(temp)
      }
      if (num === 1) {
        const temp = this.get_lightBoxData.splice(0, 1)
        this.get_lightBoxData.push(temp)
      }
      if (this.showNow <= 0) {
        this.showNow = 0
      }
      if (this.showNow >= max) {
        this.showNow = max
      }
    },
    assignHandle (num) {
      this.showNow = num
    }
  }
}
</script>

<style lang="scss">
@import '../scss/common';
@import '../scss/icon';
@import '../scss/lightbox';
</style>
