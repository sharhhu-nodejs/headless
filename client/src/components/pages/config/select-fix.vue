<template>
	<div>
		<select class="selector" :multiple="multiple" :placeholder="placeholder">
			<slot></slot>
		</select>
		<span @click="toggleShow" class="cs-placeholder">{{displayVal()}}</span>
		<div class="cs-options" v-show="show" @click.self="toggleShow">
			<div class="device-wrapper">
				<header class="cs-header" v-show="multiple">
					<span style="margin-right: 5px;">全选：</span>
					<i-switch v-model="allSelected" @on-change="selectAll"></i-switch>
				</header>
				<div class="device-list">
					<ul>
						<li @click="selectItem(item)" :class="{selected: isSelected(item)}" v-for="(item, index) in options" :key="index">
							<h1 :title="item.name + '-宽X高(' + item.viewport.width+'x'+item.viewport.height+')'">{{item.name}}-宽X高({{item.viewport.width+'x'+item.viewport.height}})</h1>
							<div class="marvel-device iphone6plus" :class="{silver: isSelected(item), black: !isSelected(item)}" :style="{
							width: item.viewport.width + 'px',
							height: item.viewport.height + 'px'
							}">
								<div class="top-bar"></div>
								<div class="sleep"></div>
								<div class="camera"></div>
								<div class="sensor"></div>
								<div class="speaker"></div>
								<div class="screen">
									
								</div>
								<div class="home"></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">

require('../../../assets/libs/devices.css/assets/devices.min.css');
export default {
	name: 'select-fix',
	data(){
		return {
			selectedItem: [],
			allSelected: false,
			show: false
		}
	},
	props: {
		placeholder: {
			type: String,
			default: '请选择设备'
		},
		value: [Array],
		multiple: {
			type: Boolean,
			default: false
		},
		options: {
			type: Array,
			required: true
		}
	},
	watch:{
		value(val){
			this.init();
		}
	},
	methods: {
		displayVal(){
			if(!this.selectedItem || !this.selectedItem.length){
				return this.placeholder;
			}
			var arr = [];
			this.selectedItem.forEach(function(item){
				arr.push(item.name);
			});

			return arr.join(',');
		},
		selectAll(all){
			if(all){
				this.selectedItem = Array.from(this.options);
			}else{
				this.selectedItem = [];
			}
			this.$emit('input', Array.from(this.selectedItem));
		},
		init(){
			this.selectedItem = [];
			if(this.value && this.value.length){
				for(let item of this.value){
					if(this.multiple){
						this.selectedItem.push(item);
					}else{
						this.selectedItem = [item];
						break;
					}
				}
			}
		},
		isSelected(item){
			return this.getIndex(item) > -1 ? true : false;
		},
		getIndex(item){
			return this.selectedItem.findIndex((opt)=>{
				return opt.name === item.name;
			})
		},
		selectItem(item){
			var index = this.getIndex(item);
			if(this.multiple){
				index > -1 && this.selectedItem.splice(index, 1);
				index === -1 && this.selectedItem.push(item);
				if(this.selectItem.length !== this.options.length){
					this.allSelected = false;
				}else{
					this.allSelected = true;
				}
			}else{
				this.selectedItem = [item];
			}
			this.$emit('input', Array.from(this.selectedItem));
		},
		toggleShow(){
			this.show = !this.show;
		}
	},
	mounted(){
		console.log('12333');
		this.init();
	}
}

</script>
<style lang="less">
	@font-face {
		font-family: 'icomoon';
		src:url('./fonts/icomoon/icomoon.eot?-rdnm34');
		src:url('./fonts/icomoon/icomoon.eot?#iefix-rdnm34') format('embedded-opentype'),
			url('./fonts/icomoon/icomoon.woff?-rdnm34') format('woff'),
			url('./fonts/icomoon/icomoon.ttf?-rdnm34') format('truetype'),
			url('./fonts/icomoon/icomoon.svg?-rdnm34#icomoon') format('svg');
		font-weight: normal;
		font-style: normal;
	}
	.selector{
		display: none;
	}
	.cs-placeholder{
		cursor: pointer;
		display: block;
		cursor: pointer;
		border: 1px solid #d7dde4;
		padding: 1px 5px;
		border-radius: 5px;
		&:hover{
			border-color: #5cadff;
		}
	}
	.cs-options{
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    overflow: auto;
	    background: rgba(81, 81, 81, 0.78);
	    font-size: 75%;
	    opacity: 1;
	    transition: opacity 0.3s, visibility 0s 0.3s;
	    z-index: 20;
	    .device-wrapper{
	    	width: 100%;
	    	height: 80%;
	    	margin: 5% 0;
	    	overflow-y: hidden;
	    	overflow-x: hidden;
	    	background-color: #fff;
	    	border-radius: 10px;
	    	position: relative;
	    }
	    .cs-header{
	    	position: absolute;
	    	top: 0;
	    	z-index: 9999;
	    	background-color: #fff;
	    	font-size: 2em;
	    	padding: 2em;
	    	height: 100px;
	    	width: 100%;
	    	border-bottom: 1px solid #bfbfc0;
	    }
	    .device-list{
	    	height: 100%;
	    	padding: 100px 10px 10px;
	    	ul{
	    		zoom: 0.3;
	    		overflow-y: scroll;
	    		overflow-x: hidden;
	    		height: 100%;
	    	}
	    }
	    li{
	    	float: left;
		    text-align: center;
			position: relative;
			cursor: pointer;
			border-radius: 16px;
			overflow: hidden;
			border: 10px solid transparent;
			background-clip: padding-box;
			-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
			transition: transform 0.3s, opacity 0.3s;
			&.selected{
				&:after{
					font-family: 'icomoon';
					content: '\E00D';
					z-index: 9999;
					color: #01bf4f;
					position: absolute;
					font-size: 70px;
					top: 70%;
					left: 50%;
					-webkit-transform: translate3d(-50%,-50%,0) translate3d(0,-1em,0);
					transform: translate3d(-50%,-50%,0) translate3d(0,-1em,0);
				}
				h1{
					color: #01bf4f;
				}
				.marvel-device{
					box-shadow: 0 0 40px -7px #01bf4f;
				}
			}
			.marvel-device{
				zoom: .7;
			}

			.iphone6plus.black .screen{
				background: #b3b3b7;
				background: -moz-linear-gradient(top, #b3b3b7 0%, #424044 100%);
				background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #b3b3b7), color-stop(100%, #424044));
				background: -webkit-linear-gradient(top, #b3b3b7 0%, #424044 100%);
				background: -o-linear-gradient(top, #b3b3b7 0%, #424044 100%);
				background: -ms-linear-gradient(top, #b3b3b7 0%, #424044 100%);
				background: linear-gradient(to bottom, #b3b3b7 0%, #424044 100%);
				filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#b3b3b7', endColorstr='#424044',GradientType=0 );
			}
			// .silver {
			// 	.screen{
			// 		-webkit-box-shadow: 0 0 0 3px #f5e3d0;
			// 		box-shadow: 0 0 0 3px #f5e3d0;
			// 	}
			// 	.speaker,
			// 	.sensor,
			// 	.camera{
			// 		background-color: #f5e3d0;
			// 	}
			// }


			h1{
				position: relative;
				cursor: pointer;
				padding: 1em;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin: 20px 10px;
				text-align: center;
			}
	    }
	}
</style>