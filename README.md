# admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#favicon设置及更改
  把favicon放置于主文件夹里的static文件夹内，再在index.html页面引入
  <link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico">
  如果还不显示，再在build/webpack.dev.conf.js中配置
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
    favicon:'../stastic/favicon.ico'
  }),



# Sidebar.vue
模板里index 子导航路径要加 /
