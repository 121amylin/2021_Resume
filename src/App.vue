<template>
  <div id='app' class='wrwp'>
    <Header></Header>
    <Footer></Footer>

    <router-view />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header, Footer

  }
}
</script>
<style lang='scss'>
$main_color: #007ced;
$gray_color: #666;
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
html,
body {
  padding: 20px;
  box-sizing: border-box;
  text-size-adjust: 100%;
  font: 62.5% / 1 微軟正黑體, 'Microsoft JhengHei', Arial, Helvetica, sans-serif;
  background-color: $main_color;
}
.wrwp {
  background-color: #fff;
  border-radius: 30px;
  min-height: calc(100vh - 80px);
  padding: 30px 40px;
}
</style>
