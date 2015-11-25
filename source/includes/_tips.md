#tips

<aside class="notice">
注：如`beta`上某些组件404，可通过访问
<br/>
`http://beta.static-sync.dp/packagename/packageversion`
<br/>
例：
<br/>
`http://beta.static-sync.dp/sync-service/riot/0.1.2`
<br/>
各种环境`sync`列表
<br/>
alpha: http://alpha.static-sync.dp/sync-service/packagename/packageversion
<br/>
beta: http://beta.static-sync.dp/sync-service/packagename/packageversion
<br/>
ppe: http://ppe.static-sync.dp/sync-service/packagename/packageversion
</aside>

<aside class="notice">
注：线上缓存清理失败后可手动调用
<br/>
`192.168.7.94:9567/?url=h5.dianping.com/tuan/demo/index.html`
<br/>
</aside>

<aside class="notice">
注：如需`ftp`上传非`html`资源，可在当前目录下建立一个`html`目录放置。最后`html`目录资源会和被编译后的`hanldebar`目录资源一起合并上传。
</aside>

<aside class="notice">
注：`npm install`之前 ，请先设置为点评的npm源 `npm config set registry http://r.npmjs.dp `
</aside>