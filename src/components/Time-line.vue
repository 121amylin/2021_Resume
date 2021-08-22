<template>
  <div class="time_line main_color_20_bg clear">
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
@import '../scss/common';

.time_line {
  position: relative;
  padding: 40px 0;
  @include rwd(1280px) {
    padding: 30px 0;
  }
  @include rwd(768px) {
    padding: 20px 0;
  }

  .container {
    width: 84%;
    margin: 40px auto;
    @include rwd(1280px) {
      width: 100%;
    }
    @include rwd(768px) {
      margin: 20px auto;
    }
  }
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    height: calc(100% - 80px);
    background-color: #999;
    left: 50%;
    @include rwd(768px) {
      left: 56px;
    }
    @include rwd(480px) {
      display: none;
    }
  }
  .item {
    width: 50%;
    float: right;
    margin-bottom: 20px;
    position: relative;
    @include rwd(768px) {
      float: none;
      width: calc(100% - 70px);
      margin-left: 70px;
    }
    @include rwd(480px) {
      width: 100%;
      margin-left: 0;
    }

    dt {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      text-align: center;
      line-height: 60px;
      background-color: #999;
      color: #fff;
      left: -30px;
      z-index: 2;
      @include rwd(768px) {
        width: 46px;
        height: 46px;
        line-height: 46px;
        left: -70px;
      }
      @include rwd(480px) {
        position: relative;
        margin: 0 auto 10px auto;
        left: 0;
      }
    }
    dd {
      position: relative;
      width: 90%;
      float: right;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.6);
      padding: 12px 22px 16px 22px;
      border-radius: 20px;
      @include rwd(991px) {
        width: 88%;
      }
      @include rwd(768px) {
        width: 100%;
        float: none;
        padding: 8px 15px 14px 15px;
      }

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
        @include rwd(768px) {
          left: -60px;
          top: 23px;
        }
        @include rwd(480px) {
          display: none;
        }
      }
    }
    .tit {
      padding-left: 4px;
      font-weight: 700;
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
      @include rwd(768px) {
        float: none;
        margin-top: unset;
      }

      dt {
        left: unset;
        right: -30px;
        @include rwd(768px) {
          left: -70px;
          right: unset;
        }
        @include rwd(480px) {
          position: relative;
          margin: 0 auto 10px auto;
          left: 0;
        }
      }
      dd {
        float: left;
        @include rwd(768px) {
          float: none;
        }

        &:before {
          right: -60px;
          left: unset;
          @include rwd(768px) {
            left: -60px;
          }
          @include rwd(480px) {
            display: none;
          }
        }
      }
      ul {
        padding-left: 0;
      }
    }
    &:nth-child(4) {
      margin-top: 22px;
      margin-bottom: 230px;
      @include rwd(768px) {
        margin-top: unset;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
