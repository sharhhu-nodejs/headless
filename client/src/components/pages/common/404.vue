<template>
	<div class="error-wrapper" style="height: calc(100vh)">
	    <section class="error-page">
	        <div class="container ">
	            <section class="error-wrapper text-center">
	                <h1><img alt="" src="../../../assets/local/img/404-error.png"></h1>
	                <h2>很抱歉！页面未找到！</h2>
	                <h3>请检查导航地址是否正确！</h3>
	                <a class="back-btn" href="#/index"> 返回首页</a>
	            </section>
	        </div>
	    </section>
	</div>
</template>
<script>
export default {
    name: 'not-found',
    data() {
        return {
            msg: 'not-found'
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.error-wrapper{
	width: 100%;
	height: 100%;
	position: relative;
}
.error-page {
    height: 100%;
    text-align: center;
    padding-top: 250px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ffe;
    img{
    	    background-color: #464c5b;
    }
}
</style>
