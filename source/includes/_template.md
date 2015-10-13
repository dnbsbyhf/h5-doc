# 模板

该模板编译器是基于`ejs`的。使用时，可以根据`ejs`相关语法在模板页面里面进行一些 复杂页面的编辑。
为了避免跟某些模板编辑器起冲突，设置了`ejs`标签识别为`$`，
例如`<$- xx $>`。
调用方可以使用一些公用的基础`tag`来完成日常开发。

- <%- static(title) %>:返回模块`app-demo-static`里面样式的相关路径，一般用于图片，样式等引入。
	
- <%- combo_css(titles) %>:合并`css`,多个title用`,`隔开,本地开发时会被拆散为单个`css`标签，
 
- <%- framework %> :  返回`js`一些基础库，包括`neuron`和一些`config`

- <%- combo_js_src(title) %> : 合并业务业务依赖的`js`模块，如需加上业务`js`，则`title`设为业务相关`js`即可,不需要合并业务js则为空。

- <%- facade(title) %>:门户`js`调用

- <%- timestr %> : 返回页面发布时间

- <%- env %> : 返回当前页面环境,`dev`,`beta`,`prelease`,`product`

- <%- version %> : 返回版本号

- <%- combo_css_src(titles) %>:只返回合并后的`css`路径

- <%- combo_js_src(titles) %>:只返回合并后的`js`路径

本地模板如下：

<img src="/images/1-2.png"/>

线上编辑后

<img src="/images/1-3.png"/>


不想合并的`js`，可在`cortex.json`文件中配置
<img src="/images/8-6.png"/>

**title说明**

title一般由模块名+具体路径组成。当然也可以不加具体路径，最后会被编辑成模
块主函数js路径。

例如

`app-demo-static/css/style.css`->`app-demo-static/version/css/style.css`

`app-demo-static`->`app-demo-static/version/app-demo-static.js`

**扩展**
当然业务方也可以自己扩展标签，用户页面的拼接，分离出头部或者尾部，多页面共用模块什么的。

<img src="/images/1-4.png"/>

传入对象，用法可参考`ejs`语法。


