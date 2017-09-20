<template>
	<div class="layout-content">
        <Row class="full-height">
	        <Col
	        	class="full-height scroll-y scroll-bar left-menu"
	        	>
	        	<slot name="menu">
	        		<custom-menu
	        			:menus="rootData"
	        			:routerPush="true"
	        			:rootId="-2"
	        			:onSelect="onMenuSelect"
	        		/>
	        	</slot>
	        </Col>
	        <Col
	        	class="layout-content-main right-side"
	        	>
	        	<div class="breadcrumb">
		        	<Breadcrumb>
				        <Breadcrumb-item 
				        :href="active === bread.path ? '' : bread.path" 
				        v-for="(bread, index) in breaks"
				        :key="index">{{bread.name}}</Breadcrumb-item>
				    </Breadcrumb>
	        	</div>
	        	<div class="main-content-wrapper">
	        		<div class="inner-content-block">
			        	<div class="content-block">
				        	<slot name="content">
					            <router-view class="full-height"></router-view>
				        	</slot>
			        	</div>
			        	<slot name="footer"></slot>
	        		</div>
	        	</div>
	        </Col>
        </Row>
    </div>
</template>
<script>
	export default{
		name: 'layout-content',
		components: {
			'custom-menu': (resolve, reject)=>{
				require.ensure([], ()=> resolve(require('./layout-menu')), 'layout-menu')
			}
		},
		data(){
			return {
				response: {
					xs:{
						content: 24,
						menu: 24
					},
					sm: {
						content: 24,
						menu: 24
					},
					md:{
						content: 19,
						menu: 4
					},
					lg: {
						content: 28,
						menu: 3
					}
				},
				//demo menu
				rootData: [{
					"id": -1,
			        "pId": -2,
			        "name": "菜单",
			        "tab_url": "",
			        "open": false
				}, {
			        "id": 1,
			        "pId": -1,
			        "name": "测试菜单",
			        "tab_url": "",
			        "open": true
			    }, {
			        "id": 2,
			        "pId": 1,
			        "name": "首页",
			        "tab_url": "/index",
			        "open": true
			    }, {
			        "id": 3,
			        "pId": 1,
			        "name": "配置",
			        "tab_url": "/config",
			        "open": true
			    }, {
			        "id": 4,
			        "pId": 1,
			        "name": "关于",
			        "tab_url": "/about",
			        "open": true
			    }]
			}
		},
		computed: {
			breaks(){
				console.log(this.$store.state.breakcrumbs.matched)
				return this.$store.state.breakcrumbs.matched;
			},
			active(){
				return this.$store.state.breakcrumbs.active;
			}
		},
		mounted(){
			// this.rootData = this.$store.state.user.menu.data;

		},
		methods: {
			onMenuSelect(menuId, menu, menuComponent){
				console.log(menuId);
			}
		}
	}
</script>