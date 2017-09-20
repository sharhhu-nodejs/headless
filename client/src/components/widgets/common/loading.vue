<!-- 
loading显示与否
默认slot添加效果
-->
<template>
	<Spin v-show="loading" fix class="spin-loading">
        <Icon type="load-c" size=40 class="rotate"></Icon>
        <slot>
        	<div>加载中...</div>
        </slot>
    </Spin>
</template>
<script>
	export default {
		name: 'loading',
		props: {
			loading: {
				type: Boolean,
				required: true,
				default: false
			}
		}
	}
</script>
<style lang="less" scoped>
@keyframes rotate{
	0%{
		transform: rotate(0);
	}
	100%{
		transform: rotate(360deg);
	}
}
.rotate{
	animation-name: rotate;
	animation-duration: 800ms;
	animation-fill-mode: both;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}
.spin-loading{
	display: block;
    background-color: rgba(70, 76, 91, 0.8);
	font-size: 16px;
}
</style>