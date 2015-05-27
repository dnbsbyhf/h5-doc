# 部署、打包、上线

> static-site.json文件

```javascript
{
  "ftpkey": "cortex-ci.static-site-ftp.newwallet",
  "html_dir": "html",
  "clearCDN":["h5.dianping.com/tuan/demo/index.html"]
}
```

> gulpfile.js文件部分代码(解析html和manifest代码)

```javascript
gulp.task('html', function(cb) {
  gulp.src([ template_dir + "/**/*.appcache"])
    .pipe(compiler({
      cwd: __dirname
    }).compile())
    .on('error', console.error)
    .pipe(gulp.dest(html_dir));

  gulp.src([ template_dir + "/**/*.html"])
    .pipe(compiler({
      cwd: __dirname
    }).compile())
    .on('error', console.error)
    .pipe(gulp.dest(html_dir));
});

```

  项目打包依然基于`cortex`，构建工具选择时选择`cortex-ci`。

  跟传统的`cortex-ci`区别：部署时候会根据根目录下`static-site.json`文件，去读取相应的`lion`配置的h5静态服务器地址，将`html`目录文件上传`h5`静态服务器，并且清除线上CDN缓存(线上发布有效)



