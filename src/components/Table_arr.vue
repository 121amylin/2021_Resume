<template>
  <div class="table_box">
    <div class="gg-arrow-align-h rwd_table_icon"></div>
    <div class="rwd_table">
      <table class="table">
        <thead>
          <tr>
            <th>項次</th>
            <th>圖案圖例</th>
            <th>專案名稱</th>
            <th>專案說明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in pdate" :key="item.id">
            <th class="num">{{ index + 1 }}</th>
            <td class="pic">
              <img :src="require(`../assets${item.pic}`)" alt="" />
              <!-- {{require(`../assets${item.pic}`)}} -->
              <!-- <img :src="item.pic" alt="" /> -->
            </td>
            <td class="project_name">
              <h4 >
                <a :href="item.link" target="_blank"
                  >{{ item.title }}<span><i class="gg-log-in"></i></span>
                </a>
              </h4>
            </td>
            <td class="project_descript">
              <h4>專案說明：</h4>
              <p>{{ item.descript }}</p>
              <ul class="link_list">
                <li v-for="(n, index) in item.list" :key="index">
                  <p>{{ n }}</p>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Picture_list',
  props: ['pdate']
}
</script>

<style lang="scss">
@import '../scss/common';
@import '../scss/icon';
@import '../scss/table';
</style>
