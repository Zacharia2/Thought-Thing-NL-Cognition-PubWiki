# Thought-Thing-NL-Cognition-PubWiki

- 效果预览链接：https://Zacharia2.github.io/Thought-Thing-NL-Cognition-PubWiki/
- 可离线版本链接：https://Zacharia2.github.io/Thought-Thing-NL-Cognition-PubWiki/offline.html 


## 协议

不可商用，不可用于以盈利为目的的所有活动，不可私自发表公开性文章或期刊。


## 介绍配置文件

| 配置文件                                 | 描述                                   |
| ---------------------------------------- | -------------------------------------- |
| package.json                             | 项目或模块描述文件                     |
| tiddlywiki.info                          | TiddlyWiki 的配置文件                  |
| .github\workflows\deploy.yaml            | Github-Action配置文件                  |
| .gitignore                               | Git指定忽略项的配置文件                |
| public\service-worker.js                 | 缓存策略配置文件                       |
| tiddlers\$__GitHub_Repo.tid              | Github仓库资源与图像的仓库路径配置文件 |
| scripts\html-minifier-terser.config.json | HTML 缩小器配置文件                    |
| scripts\build.js                         | js                                     |
| scripts\build-wiki.mjs                   | zx                                     |


## 维护说明与记录
> 可修改的配置文件：build-wiki.mjs、build.js、package.json、deploy.yaml、tiddlywiki.info、.gitignore、service-worker.js  
> 其它：`https://raw.githubusercontent.com/用户名/仓库/分支/路径/文件名.后缀`

两种构建方式：
1. js：scripts\build.js（默认构建方式）
2. zx：scripts\build-wiki.mjs

> （已关闭此功能）仅当添加修改条目、插件以及package.json文件时触发actions更新GitHub Pages。
> 
> （已启用此功能）缓存策略 public\service-worker.js 配置中 index.html 的 NetworkFirst（网络优先）策略。

