<template>
  <div class="time_line section main_color_10_bg clear">
    <div class="container">
      <dl
        class="experience item"
        v-for="item in get_experience"
        :key="item.year"
      >
        <dt>{{ item.year }}</dt>
        <dd>
          <div class="tit">{{ item.unit }}，{{ item.title }}</div>
          <ul>
            <li v-for="(item, index) in item.content" :key="index">
              {{ item }}
            </li>
          </ul>
        </dd>
      </dl>

      <dl class="education item" v-for="item in get_education" :key="item.year">
        <dt>{{ item.year }}</dt>
        <dd>
          <div class="tit">{{ item.unit }}，{{ item.school }}</div>
          <ul>
            <li v-for="(item, index) in item.content" :key="index">
              {{ item }}
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  computed: {
    get_experience () {
      return this.$store.state.experience
    },
    get_education () {
      return this.$store.state.education
    }
  }
}
</script>

<style lang="scss" scoped>
.time_line {
  position: relative;
  padding: 40px 0;
  .container {
    width: 84%;
    margin: 40px auto;
  }
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    height: calc(100% - 80px);
    background-color: #999;
    left: calc(50% - 10px);
  }
  .item {
    width: 50%;
    float: right;
    margin-bottom: 20px;
    position: relative;
    dt {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      text-align: center;
      line-height: 60px;
      background-color: #999;
      color: #fff;
      left: -40px;
      font-size: 1.8rem;
      z-index: 2;
    }
    dd {
      margin-left: 36px;
      position: relative;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.6);
      padding: 12px 22px 16px 22px;
      border-radius: 20px;
      &::before {
        content: '';
        position: absolute;
        display: block;
        width: 60px;
        height: 1px;
        background-color: #999;
        left: -60px;
        top: 30px;
        z-index: -1;
      }
    }
    .tit {
      padding-left: 4px;
      font-weight: 700;
      font-size: 2rem;
    }
    ul {
      padding-left: 10px;
      list-style-position: inside;
    }
    li {
      position: relative;
      padding-left: 14px;
      list-style: none;
      &::before {
        position: absolute;
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #ccc;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
      }
    }
    &:nth-child(even) {
      float: left;
      margin-top: 86px;
      dt {
        left: unset;
        right: -20px;
      }
      dd {
        width: 88%;
        margin-left: 0;
        &:before {
          left: unset;
          right: -60px;
        }
      }
      ul {
        padding-left: 0;
      }
    }
    &:nth-child(4) {
      margin-top: 22px;
      margin-bottom: 140px;
    }
  }
}
</style>
