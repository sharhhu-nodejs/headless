<!-- 
使用说明：

参考默认<slot></slot>下的例子构造item

详细参考：http://sachinchoolur.github.io/lightGallery/docs/api.html

依赖：/src/assets/libs/lightgallery

默认gallery会找到指定的selector的属性：

data-src: 点击放大时加载的图片地址
data-sub-html: 图片放大后下面显示的一排文字，可以使用html

注意options中，如果没有指定selector, 初始化会使用第一个元素作为selector，如：

var options = {
	thumbnail:true,
	hash: false
}
<custom-lightgallery
:options="options"
>
	<div></div>
	<div></div>
	<div></div>
</custom-lightgallery>

在上面的示例中，初始化指定的selector就是div，会查找div上的data-src、data-sub-html。


默认提供以下事件监听：
onBeforeOpen.lg
onAfterOpen.lg
onAferAppendSlide.lg
onSlideItemLoad.lg
onBeforeSlide.lg
onSlideItemLoad.lg
onSlideItemLoad.lg

调用函数：
getInstance
slide
goToNextSlide
goToPrevSlide
destroy
-->

<template>
	<div ref="lightgallery">
		<slot>
			<Row>
				<Col :span="8">
				<div 
				class="thumbnail" 
				style="padding: 10px;box-shadow: 1px 1px 13px 0px #464c5b;"
				data-src="/static/logo.svg" 
				data-sub-html="<h4>Leanne Graham</h4><p>Multi-layered client-server neural-net</p>">
					<img 
					src="/static/logo.svg" 
					alt="Bret photo" 
					data-toggle="tooltip" 
					title="点击查看">
					<div>
						<h3>哈哈哈哈</h3>
						<p>写点介绍吧~~~</p>
					</div>
				</div>
				</Col>
			</Row>
		</slot>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'custom-lightgallery',
		mounted(){
			var vm = this;
			require.ensure([
			    "jQuery",
			], (require)=>{
				require("../../../assets/libs/lightgallery/css/lightgallery.css");
				require('../../../assets/libs/lightgallery/js/lightgallery-all.js');
				//干掉hash模式，防止跟vue-router冲突。
				vm.options.hash = false;
				vm.$gallery = $(vm.$refs.lightgallery);
				vm.$gallery.lightGallery(vm.options); 

				vm.initEvent();
			}, 'lightgallery');
		},
		methods: {
			initEvent(){
				const vm = this;
				vm.$gallery.on('onBeforeOpen.lg', (args)=>{
					vm.$emit('onBeforeOpen.lg', ...args, vm.$gallery);
				});
				vm.$gallery.on('onAfterOpen.lg', (args)=>{
					vm.$emit('onAfterOpen.lg', ...args, vm.$gallery);
				});
				vm.$gallery.on('onAferAppendSlide.lg', (args)=>{
					vm.$emit('onAferAppendSlide.lg', ...args, vm.$gallery);
				});
				vm.$gallery.on('onSlideItemLoad.lg', (args)=>{
					vm.$emit('onSlideItemLoad.lg', ...args, vm.$gallery);
				});
				vm.$gallery.on('onBeforeSlide.lg', (args)=>{
					vm.$emit('onBeforeSlide.lg', ...args, vm.$gallery);
				});
				vm.$gallery.on('onSlideItemLoad.lg', (args)=>{
					vm.$emit('onSlideItemLoad.lg', ...args, vm.$gallery);
				});
				vm.$gallery.on('onSlideItemLoad.lg', (args)=>{
					vm.$emit('onSlideItemLoad.lg', ...args, vm.$gallery);
				});
			},
			getInstance(){
				return vm.$gallery.data('lightGallery');
			},
			slide(index){
				vm.$gallery.data('lightGallery').slide(index);
			},
			goToNextSlide(){
				vm.$gallery.data('lightGallery').goToNextSlide();
			},
			goToPrevSlide(){
				vm.$gallery.data('lightGallery').goToPrevSlide();
			},
			destroy(){
				vm.$gallery.data('lightGallery').destroy();
			}
		},
		props: {
			options: {
				type: Object,
				default(){
					return {
						thumbnail:true,
				    	hash: false,
				    	selector: '.thumbnail'
					}
				}
			}
		}
	}
</script>