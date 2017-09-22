# 关于

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
