<!-- 
使用方式：
<component-header>首页</component-header>
-->
<template>
	<div class="component-header">
        <i class="vertical-line"></i>
        <div class="header-title">
            <slot></slot>
        </div>
        <div class="dividing-line"></div>
    </div>
</template>
<style scoped lang="less">
.component-header{
    padding: 5px 0;
    position: relative;
    
    .header-title{
        font-size: 16px;
        padding: 0 10px;
        border-left: 3px solid #3399ff;
    }
    .dividing-line{
        margin-top: 10px;
        border-bottom: 1px solid rgba(34,36,38,.15);
    }
}

</style>
