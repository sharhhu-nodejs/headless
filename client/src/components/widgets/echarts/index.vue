<!-- 

option：必备参数，指定图标的参数，外层引用可传空，组件自动校验。
具体option的参数请参考echarts官方网站：http://echarts.baidu.com/option.html


默认提供的参数为toolbox，值为下面所示：
toolbox: {
	show: true,//显示工具栏
	feature: { 
		//数据特性，查看源数据
        dataView: {
        	readOnly: true
        },
        //切换类型，将支持的类型进行切换
        magicType: {
        	type: ['line', 'bar', 'stack', 'tiled']
        },
        //保存图片
        saveAsImage: {}
	},
	right: '5%'
}


引用组件方式：
<echart
	:option="myOption"
></echart>

当myOption更新时，组件会自动更新图表，外层引用组件只需修改属性option即可。

同时提供了以下函数供外层调用：

//返回echarts实例
getInstance(){} 

//设置参数。不建议采用这种方式，如果提供的属性option变化，组件会自动更新
setOption(option){} 

//主动调用更新。默认组件会自动更新。
update(){}

-->
<template>
	<div class="echart-wrapper" v-show="hasData">
		<div ref="echart" class="mechart"></div>
	</div>
</template>
<script>

	const echarts = require('echarts');
	export default {
		name: 'echart',
		data(){
			return {
				options: null,
				hasData: false,
				rendered: false,
				toolbox: {
					toolbox: {
						show: true,
						feature: {
				            dataView: {
				            	readOnly: true
				            },
				            magicType: {
				            	type: ['line', 'bar', 'stack', 'tiled']
				            },
				            saveAsImage: {}
						},
						right: '5%'
					}
				}
			}
		},
		mounted(){
			this.options = Object.assign({}, this.toolbox, this.option);
			this.echart = echarts.init(this.$refs.echart);
			console.log(this.options)
			if(this.options && this.options.series){
				this.echart.setOption(this.options);
			}
			this.rendered = true;
		},
		methods: {
			getInstance(){
				return this.echart;
			},
			setOption(option){
				this.options = option;
				this.update();
			},
			update(){
				if(this.echart && this.rendered){
					this.$nextTick(()=>{
						this.echart.clear();
						if(this.options && this.options.series){
							this.echart.setOption(this.options);
						}
						this.echart.resize();
						this.echart.hideLoading();
					})
				}
			}
		},
		updated(){
			this.update();
		},
		watch: {
			option(newVal, oldVal){
				this.echart.showLoading();
				this.options = Object.assign({}, this.toolbox, newVal);
			},
			options(newVal, oldVal){
				this.hasData = newVal && newVal.series;
				this.update();
			}
		},
		props: {
			option: {
				type: Object,
				required: true
			}
		}
	}
</script>
<style scoped lang="less">
.echart-wrapper{
	width: 100%;
	height: 400px;
	transion: all 1s linear;
	position: relative;
	.mechart{
		width: 100%;
		height: 100%;
		position: relative;
	}
}
</style>