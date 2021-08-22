#### 【[json server](https://www.npmjs.com/package/json-server)安裝與設置】

- 安裝 json serve

```javascript
json-server --watch db.json
```

- run json server

```javascript
json-server --watch public/db.json
```

- josn 檔案放置 punlic 資料夾中
  [YDOOK：Vue3.0: vue-cli4.5：訪問本地 json 文件並讀取數據使用 axios](https://blog.csdn.net/weixin_42255190/article/details/113702675)

- 搭配 postman 使用
  [postman 教學](https://www.youtube.com/watch?v=R8GL5y49iJc&t=2510s)

---

#### 【Vuex】

- [Vue 爬坑之路（六）—— 使用 Vuex + axios 發送請求](https://www.cnblogs.com/wisewrong/p/6402183.html)

### 【design】

- [[純 css 動畫] 波浪](https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/%E7%B4%94css%E5%8B%95%E7%95%AB-%E6%B3%A2%E6%B5%AA/)

### 【QA】
- [Vue 中 this.$ref 獲取不到 DOM 對象的問題解決](https://www.jianshu.com/p/b14ea3a92e53)

### 【開發環境】

- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [VSCode Prettier 整合 ESLint 自動排版](https://wcc723.github.io/development/2021/04/11/vscode-eslint-prettier/)
- [關於 vue/cli4.x vue-cli@4.x 版本瀏覽器兼容問題處理，兼容 ie](https://blog.csdn.net/csl125/article/details/110038701)

- [Vue 引入外部 js 文件報 Uncaught SyntaxError: Unexpected token<](https://blog.csdn.net/qq_41241767/article/details/102459159)

### 【模版處理】

[[Webpack][vue.js] 動態編譯 assets 嘗試
](https://yuugou727.github.io/blog/2018/04/09/webpack-vue-dynamic-assets/)

---

### table_obj

- design
- Design_OEM

```javascript
 {
          "id": 0,
          "title": "光陽",
          "link": [
            {
              "id": 0,
              "title": "首頁",
              "url": "http://customer.urb2b.com/~amylin0204/guangyang-ky_dome_20210525/index.html"
            },
            {
              "id": 1,
              "title": " 產品總攬頁",
              "url": "http://customer.urb2b.com/~amylin0204/guangyang-ky_dome_20210525/Alllist.html"
            }
          ],
          "pic": "",
          "descript": ""
        },

```

---

### table_arr

- public_sector
- custom_program

```javascript
{
  "id": 0,
  "link": "https://idbpark.moeaidb.gov.tw/",
  "title": "經濟部能源局工業用地網",
  "pic": "/images/web/pic_09.png",
  "list": [
    "首頁Redesign、RWD",
    "float切版",
    "維持原程式運作邏輯",
    "aos.js應用",
    "owl.carousel.js應用",
    "animate.css應用"
  ],
  "descript": ""
}
```

---

### text_list

- more

```javascript
{
  "id": 0,
  "title": "KM",
  "url": "https://121amylin.github.io/KM/"
},

```

---

### picture_list

- chamge_to_web
- one_page
- template
- unid_design_make

```javascript
{
  "id": 0,
  "link": "http://guangyang-ky.demoicm.urb2b.com",
  "title": "光陽",
  "pic": "",
  "list": [],
  "descript": ""
}

```

---

### lightbox_picture_list

- design_GDN

```javascript
{
  "id": 0,
  "title": "丞威",
  "main_pic":"",
  "pic_list": []
},

```
### 【待處理項目】

- 五種模組切版

  - table_obj ✔
  - table_arr ✔
  - text_list ✔
  - picture_list ✔
  - lightbox_picture_list

- 模版判斷 => 資料傳遞

- dp 處理

  - 類別 type ✔
  - 圖片資料 ✔
  - 接口一致性 ✔
  - public_sector 圖片處理 ✔

- .ico 圖示
- 編排
