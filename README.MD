# 关于

> 说明

本项目是基于`puppeteer`的`headless chrome`自动化测试。

将`puppeteer`的部分[api](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#)封装，基于`koa2`的服务器模式，通过`vue`、`iview`、`webpack`构建的后台系统进行配置，生成web页面自动化。

目前设置对每个操作都进行了截图，对`puppeteer`提供的`page`事件进行记录并打印日志。每次测试都有独立的日志记录。

> 目录结构

1、`server.js`服务器文件，简单的koa服务器

2、`elementAction.js` ElementHandler类动作

3、`pageAction.js` page类动作

4、`utils`目录，动作执行函数存放

5、`records`目录，测试记录

6、`data`目录存放自定义的device

7、`config`配置文件目录

8、`client`目录是前端目录，基于vue2+vue-router+vuex+iview搭建的模板

9、`public`目录是koa服务器的静态文件目录，存放测试的：
    日志`logs`、
    截图`screenshot`、
    测试详细记录文件`test-list`、
    timeline性能`trace`、
    上传的文件`uploads`
  
# 开始

> 安装依赖
```bash
npm i
//or
cnpm i
//or
yarn install 
```

> 启动服务器

```bash
node server.js

```

> 启动客服端
```bash
cd client

npm i
//启动客服端开发模式
npm run dev

```
