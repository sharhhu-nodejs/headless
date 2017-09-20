//引入babel-polyfill
require("babel-polyfill");
//注册全局jquery，防止第三方插件依赖jquery导致错误。
window.$ = $;
window.jQuery = jQuery;
window.Swiper = Swiper;

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

//引入router入口文件，请参考router目录规范
import router from './router/index';
//引入vuex
import store from './stores/index';
//引入axios库
import axios from 'axios';
//引入ivew库
import iView from 'iview';
//引入iview的样式
require('./theme/custom-theme.less');
require('./theme/index.less');
Vue.use(iView);

Vue.config.productionTip = false;
//全局环境设置
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.get('/test/api')发送的服务器地址为http://www.example.com/test/api
axios.defaults.baseURL = 'http://172.28.10.30:9999';
if(process.env.NODE_ENV === 'development'){
  // axios.defaults.baseURL = 'http://www.example.com';
}else if(process.env.NODE_ENV === 'testing'){

}else if(process.env.NODE_ENV === 'production'){

}
//每个组件都可以使用this.$axios的形式进行访问
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
var myApp = new Vue({
  el: '#app',
  store,
  router,
  template: '<router-view></router-view>',
  mounted(){
    //设置app启动
  }
});


//添加loading效果
router.beforeEach((to, from, next) => {
  myApp.$Loading.start();
  next();
})
router.afterEach(route => {
    myApp.$store.dispatch('updateRouter', route);
    myApp.$Loading.finish();
})

//axios配置

// 请求拦截
axios.interceptors.request.use(function (config) {
  // console.log(config);
    // Do something before request is sent
    return config;
  }, function (error) {
    console.log('error');
    // Do something with request error
    return Promise.reject(error);
  });

// 请求回调拦截
axios.interceptors.response.use(function (res) {
  // 未登陆的情况下跳转到登陆接口
    if(res.request.responseURL.indexOf('http://admin.eebbk.com/webadmin-cas/login') !== -1){
        //应该由业务服务器提供登陆接口，用来登陆统一后台
        location.href = 'http://172.28.10.47/admin/login/login';
        return;
    }
    var data = res.data;
    if(!data ){
      return Promise.reject(new Error('数据错误！'));
    }
    //数据正确
    if(parseInt(data.stateCode) === 0){
        if(typeof data.data === 'string'){
            try{
                data.data = JSON.parse(data.data);
            }catch(e){
                return Promise.reject(new Error('数据错误！'));
            }
        }
        //只要数据
        return data.data;
    }
    //未登录
    if(parseInt(data.stateCode) === -1){
        location.href="http://webadmin.eebbk.com:9999/webadmin-cas/login?service="+encodeURIComponent(location.href);
        return;
    }
    //无权限
    if(parseInt(data.stateCode) === -2){
        myApp.$Modal.confirm({
            title: '提示',
            content: '无权限！',
            scrollable: true
        });
      return;
    }
    myApp.$Modal.confirm({
        title: '提示',
        content: `<p>${data.stateInfo}</p>`
    });
    return Promise.reject(new Error(data.stateInfo));

}, function (error) {
    myApp.$Modal.confirm({
        title: '提示',
        content: `
        服务器错误：
        <p>${error.message}</p>`
    });
    // 错误提示
    return Promise.reject(error);
});