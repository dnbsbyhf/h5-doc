# 项目创建

- ​使用cortex，需要将version升到6.1.8及以上

- 安装静态站初始化模板 `git clone git@code.dianpingoa.com:f2ei/cortex-site-template.git ~/.cortex/templates/site`

- `cortex init`提示选择模板，或直接`cortex init site` 直接选择静态站模板

- 提示`bizname`选项，填写业务名，对应的`cortex-ci.static-site-ftp.bizname`这样的`lionkey​`，这里我们以`app-newwallet-static`为例，填写为`newwallet`,目录结构如下。

<img src="/images/1.png"/>

部分目录和文件介绍：
 
- `​​entries`:存放js文件

- `img`:存在图片和背景图片

- `less`:编译css，会在根目录下编译生成一个css文件

- `build.sh`:发布脚步，可无视

- `static-site.json`:发布脚本，上传`html`文件

- `handlebar`:`html`模板文件，会在根目录下编译生成最终的`html`文件

<aside class="notice">
填写对应环境配置，即lionkey的值。目前lionkey暂时由专门人来负责配置，用于上传`html`文件到指定服务器上，可找徐嘉轶或者YYY来开通
</aside>