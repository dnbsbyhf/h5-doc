# 项目创建

- ​使用cortex，需要将version升到6.1.8及以上

- 安装静态站初始化模板 `git clone git@code.dianpingoa.com:app-static/cortex-sitey-template.git ~/.cortex/templates/sitey`

- `cortex init`提示选择模板，或`cortex init sitey` 直接选择静态站模板

- 提示`bizname`选项，填写业务名，对应的`cortex-ci.static-site-ftp.bizname`这样的`lionkey​`，这里我们以`app-demo-static`为例，填写为`demo`（项目初始化后自动生成）,目录结构如下。

<img src="/images/1.png"/>

部分目录和文件介绍：
 
- `​​entries`:存放js文件

- `img`:存在图片和背景图片

- `less`:编译css，会在根目录下编译生成一个css文件

- `build.sh`:无视

- `static-site.json`:发布脚本，上传`html`文件和清理线上`cdn`缓存

- `handlebar`:`html`和`manifest`模板文件，会在根目录下编译生成最终`html`目录文件

<aside class="notice">
填写对应环境配置，即lionkey的值。用于上传`html`文件到指定服务器上，新项目可找徐嘉轶开通业务渠道。已配好项目业务渠道的同学，在<a href="http://ci.f2e.dp/">http://ci.f2e.dp/</a>下配置自己的业务。
</aside>