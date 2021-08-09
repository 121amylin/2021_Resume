<template>
  <div class="home" v-if="isloadend">
    <!-- ==============into============== -->
    <div class="into flex section container">
      <div class="text">
        <div class="tit">
          {{ get_into.name }}
          <span>{{ get_into.sec_mane }}</span>
        </div>
        <p>{{ get_into.introduce }}</p>
      </div>
      <div class="pic">
        <img src="../assets/images/me.png" alt="" />
      </div>
    </div>

    <!-- ===============time_line============= -->
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

        <dl
          class="education item"
          v-for="item in get_education"
          :key="item.year"
        >
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

    <!-- ==============featured============== -->
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

    <!-- ==============skill============== -->
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isloadend: false
    }
  },
  computed: {
    get_into () {
      return this.$store.state.into
    },
    get_experience () {
      return this.$store.state.experience
    },
    get_education () {
      return this.$store.state.education
    },
    get_featured () {
      return this.$store.state.featured
    },
    get_skill () {
      return this.$store.state.skill
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
$main_color_10: rgba(0, 124, 237, 0.1);
.main_color_10_bg {
  background-color: $main_color_10;
}
.into {
  align-items: center;
  width: 70%;
  margin: 40px auto;
  .tit {
    padding-bottom: 12px;
    margin-bottom: 8px;
    border-bottom: 1px solid;
    font-size: 2.4rem;
    font-weight: 700;
    span {
      color: #ccc;
    }
  }
  .text {
    width: 64%;
  }
  .pic {
    width: 36%;
    padding-left: 36px;
    padding-right: 4px;
    img {
      width: 100%;
      border: 6px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
    }
  }
}
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
