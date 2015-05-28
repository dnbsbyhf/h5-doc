# 离线缓存

我们采用`manifest`来实现离线缓存。

`manifest`源文件通过执行`gulp manifest`脚本自动生成。无需人工操作。

> manifest生成脚本 示例

```javascript

gulp.task('manifest', function(cb) {
    glob("./handlebar/**/*.html",function(err,file){
        var item;
        var length =  file.length;
        var index=1;
        while(item = file.shift()){
            gulp.src(item)
                .pipe(manifest())
                .pipe(gulp.dest(item.replace(/([\w-])*.html/,'')))
                .on("end",function(){
                    index == length ? cb() : (index++);
                })
        }
    })
})

```

生成的`manifest`文件目前和`html`文件放在一起，通过`ftp`上传到`h5`服务器上。

跟`html`一样，`appcache`文件由`appcache`模板文件生成。

<img src="/images/3.png"/>

> 自动生成appcache源文件 示例

```javascript

CACHE MANIFEST
{{{static '../css/index.css'}}}
{{{modfile 'dpapp'}}}
{{{modfile 'zepto'}}}
{{{modfile 'riot'}}}
{{{modfile 'hippo'}}}
{{{modfile 'huatuo'}}}
{{{modfile 'model-data'}}}
{{{modfile 'util-m-loading'}}}
./index.html
./index.html?1432725045337
NETWORK:
*

```

> 本项目文件使用`{{{static 'path'}}}`标签

> 依赖项目文件使用`{{{modfile 'path'}}}`标签

> `{{{modfile 'util-m-loading'}}}`解析成主js文件路径

> `{{{modfile 'util-m-loading/css/index.css'}}}`也可以直接写路径


