import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: '',
			component(resolve, reject) {//异步加载组件
				require.ensure([], () => resolve(require('../App')), 'app')
			},
			redirect: '/index',
			//在这里配置其他路径
			children: [{
				name: '首页',
				path: 'index',
				component(resolve, reject) {//异步加载组件
					require.ensure([], () => resolve(require('../components/pages/index/index.vue')), 'index')
				},
			}, {
				name: '详情',
				path: 'detail/:name?',
				component(resolve, reject) {//异步加载组件
					require.ensure([], () => resolve(require('../components/pages/index/detail.vue')), 'detail')
				},
			},{
				name: '详情',
				path: 'about',
				component(resolve, reject) {//异步加载组件
					require.ensure([], () => resolve(require('../components/pages/index/about.vue')), 'about')
				},
			}, {
				name: '配置',
				path: 'config',
				component(resolve, reject) {//异步加载组件
					require.ensure([], () => resolve(require('../components/pages/config/config.vue')), 'config')
				},
			}, {//404页面自动跳转到index页
				path: '*',
				name: '404',
				component: () => import('../components/pages/common/404.vue')
			}]
		}, 
		{//404页面自动跳转到index页
			path: '*',
			name: '404',
			redirect: '/404'
		}
	]
});
