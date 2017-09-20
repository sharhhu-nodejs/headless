<template>
	
	<div class="layout-footer" :style="styles">
		<slot></slot>
	    <div class="copy-right">Copyright © {{new Date().getFullYear()}} EEBBK</div>
	</div>
</template>
<script>
	export default{
		name: 'layout-footer',
		props: {
			styles: {
				type: [Object,Array],
				default(){
					return {
						height: '60px'
					}
				}
			}
		}
	}
</script>