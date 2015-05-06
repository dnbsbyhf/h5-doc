# 部署、打包、上线

> static-site.json文件

```javascript
{
  "ftpkey": "cortex-ci.static-site-ftp.newwallet",
  "html_dir": "html"
}
```

  `html`文件由模板文件生成，通过构造工具配置。已配好，了解下就好。

> gulpfile.js文件部分代码(解析html代码)

```javascript
gulp.task('html', function() {;
  gulp.src([ template_dir + "/**/*.html"])
    .pipe(compiler({
      cwd: __dirname
    }).compile())
    .on('error', console.error)
    .pipe(gulp.dest(html_dir));
});
```
> 依赖模块`gulp-tpl2mod`，需自行添加



  项目打包依然基于`cortex`，构建工具选择时选择`cortex-ci`。

  跟传统的`cortex-ci`区别：部署时候会根据根目录下`static-site.json`文件，去读取相应的`lion`配置的h5静态服务器地址，将`html`文件上传h5静态服务器



