/*
	依赖highlight.js。 npm install highlight.js --save

	html上使用：
	v-highlight="theme"
	
	支持的主题theme值：
	monokai
	dark
	github
	googlecode
	hybrid
	default
	默认不写是default形式的

	组件需要先引入highlight指令：
	全局引入：
	import highlight from './directives/highlight';
	Vue.directive('highlight', highlight);

	组件内引用：
	import highlight from './directives/highlight';
	{
		directives:{
			highlight
		}
	}
*/
//用于更新和绑定时复用
function highlightBlock(el, binding){
	switch(binding.value){
		case 'monokai':
			require.ensure([], function(require){
				require('highlight.js/styles/monokai.css');
			});
			break;
		case 'dark':
			require.ensure([], function(require){
				require('highlight.js/styles/dark.css');
			});
			break;
		case 'github':
			require.ensure([], function(require){
				require('highlight.js/styles/github.css');
			});
			break;
		case 'googlecode':
			require.ensure([], function(require){
				require('highlight.js/styles/googlecode.css');
			});
			break;
		case 'hybrid':
			require.ensure([], function(require){
				require('highlight.js/styles/hybrid.css');
			});
			break;
		default:
			require.ensure([], function(require){
				require('highlight.js/styles/default.css');
			});
	}
	require.ensure([], (require)=>{
		var highlight = require('highlight.js');
		highlight.highlightBlock(el);
	},(error)=>{
		console.log(error);
	}, 'highlight.js')
}

export default {
	bind (el, binding, vnode) {
		highlightBlock(el, binding);
		// console.log(el, binding, vnode);
	},
	inserted (el, binding, vnode) {
		// console.log(el, binding, vnode);
	},
	update (el, binding, vnode) {
		// console.log(el, binding, vnode);
	},
	unbind (el, binding, vnode) {
		// console.log(el, binding, vnode);
	},
	componentUpdated(el, binding, vnode){
		highlightBlock(el, binding);
	}
}