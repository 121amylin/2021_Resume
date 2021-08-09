<template>
  <div id="app" class="wrwp">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  created () {
    this.$store.dispatch('getdbapi')
  }
}
</script>
<style lang="scss">
$main_color: #007ced;
$gray_color: #666;
$main_color_10: rgba(0, 124, 237, 0.1);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
dt,
th {
  font-size: 1.8rem;
  font-weight: 700;
}
dd,
td,
li a,
p {
  line-height: 1.75;
  font-size: 1.5rem;
}
li {
  list-style: none;
}
img {
  width: 100%;
  vertical-align: middle;
}
a{
  display: inline-block;
  color: #000
}
html,
body {
  min-height: calc(100vh - 80px);
  padding: 20px;
  box-sizing: border-box;
  text-size-adjust: 100%;
  font: 62.5% / 1 微軟正黑體, 'Microsoft JhengHei', Arial, Helvetica, sans-serif;
  background-color: $main_color;
}
.wrwp {
  border-radius: 30px;
  background-color: #fff;
  padding: 10px 0;
}
.container {
  padding: 0 40px;
}
.section {
  margin-top: 40px;
  margin-bottom: 40px;
}
.flex {
  display: flex;
}
.clear {
  &::after {
    content: '';
    display: block;
    clear: both;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
}
</style>
