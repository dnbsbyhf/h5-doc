# 开发策略


> gulp task 配置

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
> 依赖`gulp-tpl2mod`,自行添加

`h5`静态页面开发类似于单页应用了，这里采用 M/V 的模式进行开发，便于公共部分的提取以及便于项目维护。

暂且使用数据管理组件`util-model-data`来控制`model`数据，提供了数据缓存以及数据的生命周期功能（文件地址：`http://mo-doc.f2e.dp/#/detail/util-model-data`）

使用`riot`来控制单项`view`（文档地址：https://muut.com/riotjs/）。个人推荐使用`riot`来控制`view`:`api`较少，上手容易；兼容性强，可与其他常见库一起使用，`zepto`、`underscore`等；最重要是riot非常小，min下才6kb。经过升级，目前已兼容ie7及以上

<img src="/images/4-1.png"/>

项目结构如下。

- **component**：业务模块，可提取成一个公用模块
- **model**：数据层
- **index.js**：门户js

<aside class="notice">
  注：`template.html.js`文件通过`gulp`自动生成。
</aside>

