# 离线缓存


> gulpfile.js文件部分代码(manifest代码)

```javascript
gulp.task('mainfest', function(cb) {
     glob("./ejs/**/*.ejs",function(err,file){
        var item;
        var length =  file.length;
        var index=1;
        while(item = file.shift()){
            (function(item){fs.readFile(item,"utf-8",function(err,cont){
                manifest(cont,item,function(){
                   (--length == 0) && cb();
                })
            })})(item)
        }
    });
});
```

我们采用`manifest`来实现离线缓存。

`mainfest`文件将由`gulp`自动生成，调用者手动选择是否引用

额外生成文件
<img src="/images/1-6.png"/>

引用示例：
<img src="/images/1-5.png"/>


