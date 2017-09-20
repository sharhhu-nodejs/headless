/*
	全局引用：
	import Loading from './directive/loading';
	Vue.directive('loading', loading);

	组件内使用
	import Loading from '/directive/loading';
	{
		directives:{
			Loading
		}
	}

	使用方式：
	如：<div v-loading="loading"></div>
	loading: true显示，false隐藏

	注意当前元素没有指定position属性，该指令会为其添加position属性。
	只有元素的position属性为absolute或者relative时，才不会添加。

*/

//获取html
function getLoadingHtml(loading){
	var style = getStyle(loading);
	return `
		<div class="spin-loading" style="${style}"></div>
	`
}

//获取样式
function getStyle(loading){
	var spinSvg = require('../assets/local/animation/tail-spin.svg');
	return `
		display: ${loading ? 'block' : 'none'};
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    position: absolute;
	    z-index: 2;
	    background-image: url(${spinSvg});
	    background-position: center;
	    background-repeat: no-repeat;
	    background-color: rgba(70, 76, 91, 0.33);
	`;
	
}
//初始化函数
function initDirective(el, binding){
	if(el.style.position !== 'absolute' && el.style.position !== 'relative'){
		el.style.position = 'relative';
	}
	var loadingChild = el.querySelector('.spin-loading');
	if(loadingChild){
		loadingChild.style.display = binding.value ? "block" : "none";
	}else{
		el.innerHTML += getLoadingHtml(binding.value);	
	}
}


export default {
	bind(el, binding, vnode){
		console.log(binding.value);
		initDirective(el, binding);
	},
	unbind(el, binding, vnode){
		var loadingChild = el.querySelector('.spin-loading');
		loadingChild && loadingChild.remove();
	},
	componentUpdated(el, binding, vnode) {
		console.log(binding.value);
		initDirective(el, binding);
	}
}