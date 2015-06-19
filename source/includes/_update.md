# 更新机制

CDN页面缓存时间为10分钟，每次发布新版时，或通过`static-site.json`文件配置的`clearCDN`绝对路径来清除cdn缓存，可能存在1-3分钟的延迟。目前`clearCDN`配置可自动生成。
