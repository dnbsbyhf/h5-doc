# 离线缓存

我们采用`manifest`来实现离线缓存。

`manifest`文件目前和`html`放在一起，通过`ftp`上传到`h5`服务器上。以`app-newwallet-static`项目为例。

跟`html`一样，`appcache`文件由`appcache`模板文件生成。

<img src="/images/3.png"/>

> appcache 示例

```javascript

CACHE MANIFEST
{{{static '../img/luckymoney_background_right.png'}}}
{{{static '../img/luckymoney_background_middle.png'}}}
{{{static '../img/luckymoney_background_right.png'}}}
{{{static '../css/index.css'}}}
{{{static '../img/icon_luckymoney.png'}}}
{{{static '../img/repeat-x-top.png'}}}
{{{static '../img/repeat-x-bottom.png'}}}
{{{static '../img/repeat-y-left.png'}}}
{{{static '../img/repeat-y-right.png'}}}
{{{modfile 'dpapp'}}}
{{{modfile 'zepto'}}}
{{{modfile 'hippo'}}}
{{{modfile 'util-efte-loading'}}}
{{{modfile 'huatuo'}}}
{{{modfile 'model-data'}}}
./index.html
NETWORK:
*

```

> 静态文件使用`{{{static 'path'}}}`标签

> 依赖的`js`使用`{{{modfile 'dpapp'}}}`标签


扩展`gulpfile`,复用处理`html`逻辑。
<img src="/images/3-1.png"/>