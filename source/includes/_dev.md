# 开发策略


> gulp task template模板

```javascript

gulp.task('tpl2mod',function(){
  gulp.src(path.join(__dirname, './entries/**/*.html'))
      .pipe(tpl({
        prefix: 'module.exports=',
        suffix:";"
      }))
      .pipe(gulp.dest("./entries"));
});

```

基础样式UI库已经完稿，后续会继续跟UED同学完成更新。文档传送门`http://mo-doc.f2e.dp/mbase-css/index.html`;

引入了公共打点组件`util-h5-cat`,文档地址`http://mo-doc.f2e.dp/#/detail/huatuo`;

`h5`静态页面开发类似于单页应用了，这里采用 M/V 的模式进行开发，便于公共部分的提取以及便于项目维护。

暂且使用数据管理组件`model-data`来控制`model`数据，提供了数据缓存以及数据的生命周期功能（文件地址：`http://mo-doc.f2e.dp/#/detail/model-data`）

使用`react`或`riot`(被无情的修改过，可能api有点不一样)来控制单项`view`。

主推荐使用`react`,之后会联合基础样式库一起打造常用公用的`componment`，打造成一个成熟的生态圈。

对于个别简单项目，可使用`riot`来控制`view`:`api`较少，上手容易；兼容性强，最重要是riot非常小，min下才6kb。经过升级，目前已兼容ie7及以上

<img src="/images/4-1.png"/>

项目结构如下。

- **component**：业务模块，可提取成一个公用模块
- **model**：数据层
- **index.js**：门户js



<aside class="notice">
  注：`template.html.js`文件通过`gulp`自动生成。
</aside>

