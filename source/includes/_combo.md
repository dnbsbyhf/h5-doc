# combo服务
H5支持combo服务，在最小的开发成本上，不动用原来`handlebar`模板，另外在外层再编译一层，使用`ejs`模板。

如需使用`combo`服务同学，在根目录下再新建一个`source`目录，以我的钱包(`app-newwallet-static`)项目为例

<img src="/images/9-4.png"/>	

文件后缀名为`ejs`，最终该`ejs`会被编译到`hanldebar`目录里面，编译成`hanldebar`模板

使用方法如下

<img src="/images/9-5.png"/>	

使用了

 - <%- CSS("mbase-css/dist/mb.css,../css/index.css") %>：合
 并组件依赖css和业务自身css，更多css用逗号隔开
 
 - <%- JS('app-newwallet-static/entries/index') %>：将依赖的`JS`组件进行打包
 
当然，可能有些非常基础的js库需要隔离出来，提高多页面间资源重复利用率，可以在`cortex.json`目录下配置相关不需要打包的`js`库，

<img src="/images/9-6.png"/>	

目前合并服务的脚本代码已更新到了sitey模板中，默认不合并`js`库有`zepto`,`dpapp`,`huatuo`
 
另外如果要使用`combo`服务的同学对于在页面有涉及到`html`模板的，请将业务`html`模板移到`js`目录里面，已防意外（已知underscore跟ejs语法相似），目前已提供了`gulp-tpl2mod`模块来进行编译`html`模板

同目录编译

<img src="/images/9-1.png"/>	

编译前源代码

<img src="/images/9-2.png"/>

编译后代码，`js`中直接引入
	
<img src="/images/9-3.png"/>