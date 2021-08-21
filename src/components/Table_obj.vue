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
            </td>
            <td class="project_name">
              <h3 class="title">
                {{ item.title }}
              </h3>
            </td>
            <td class="project_descript">
              <h3>專案說明：</h3>
              <p>{{ item.descript }}</p>
              <ul class="link_list">
                <li v-for="link_item in item.link" :key="link_item.id">
                  <a :href="link_item.url" target="_blank"
                    >{{ link_item.title }} <span class="gg-log-in"></span
                  ></a>
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

<style lang="scss" scoped>
@import '../scss/common';
@import '../scss/icon';
@import '../scss/table';
</style>
