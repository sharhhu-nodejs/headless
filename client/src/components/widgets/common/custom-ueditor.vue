<!-- 

依赖umeditor。请使用模板默认的umeditor库。

默认umeditor库包含以下文件夹及文件，请勿改动：

1、assets/libs/ueditor文件夹及其下面的内容
2、static/ueditor文件夹及其下面的内容
注意：static是基于webpack的配置，请勿更改webpack的静态文件目录配置，否则这里会出问题！！！


可提供的属性：
options，详细见props下面的定义。更多配置请参考：http://fex.baidu.com/ueditor/#start-config
建议配置的选项：
imageUrl：上传图片的地址，如果不需要图片建议将此项设置成空：“''”，并在toolbar中去掉image
imagePath：配合imageUrl一起使用，详细见下面的说明
imageFieldName：配合imageUrl一起使用，详细见下面的说明
toolbar：配置toolbar，可以参考http://fex.baidu.com/ueditor/#start-config，仅对需要用到的进行配置即可。


想要详细的api功能，请调用getInstance对象。会返回umeditor实例对象

请不要配置window.UMEDITOR_CONFIG。这个是全局配置，由于ueditor的插件可能会用到此变量，尽量不要在别的地方更改此变量。

全局使用：
import CustomUeditor from './components/common/custom-ueditor'
Vue.component('custom-ueditor', CustomUeditor);

提供事件：
详细见：registerEvents方法。

-->
<template>
	<div>
		<div ref="umeditor" id="umeditor">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	//引入UM作为全局，因为ueditor默认的使用方式原因
	window.UM = require('../../../assets/libs/umeditor/umeditor').default;
	//引入默认配置。
	import Config from '../../../assets/libs/umeditor/umeditor.config';
	//引入样式
	import '../../../assets/libs/umeditor/themes/default/css/umeditor.css';
	import '../../../assets/libs/umeditor/third-party/jquery.drag';
	export default{
		name: 'custom-ueditor',
		mounted(){
			Object.assign(Config, this.options, {
				UMEDITOR_HOME_URL: 'static/umeditor/'
			})
			this.umeditor = UM.createEditor("umeditor", Config);
			this.registerEvents();
			console.log(this.umeditor);
		},
		unmounted(){
			this.umeditor && this.umeditor.destroy();
		},
		methods: {
			registerEvents(){
				this.umeditor.addListener('ready', (editor )=>{
					this.$emit('ready', editor);
				});
				this.umeditor.addListener('contentChange', (editor )=>{
					this.$emit('contentChange', editor);
				});
				this.umeditor.addListener('selectionchange', (editor )=>{
					this.$emit('selectionchange', editor);
				});
				this.umeditor.addListener('reset', (editor )=>{
					this.$emit('reset');
				});
				this.umeditor.addListener('langReady', (editor )=>{
					this.$emit('langReady');
				});
				this.umeditor.addListener('destroy', ()=>{
					this.$emit('destroy');
				});
			},
			getInstance(){
				return this.umeditor;
			},
			getAllHtml(){
				return this.umeditor && this.umeditor.getAllHtml();
			},
			getContentTxt(){
				return this.umeditor && this.umeditor.getContentTxt();
			},
			setContent(htmlStr, isAppendTo){
				return this.umeditor && this.umeditor.setContent(htmlStr, isAppendTo);
			},
			getPlainTxt(){
				return this.umeditor && this.umeditor.getPlainTxt();
			},
			getContent(fn){
				return this.umeditor && this.umeditor.getContent(fn);
			},
			execCommand(cmdName){
				return this.umeditor && this.umeditor.execCommand(cmdName);
			},
			reset(){
				return this.umeditor && this.umeditor.reset();
			},
			setHide(){
				return this.umeditor && this.umeditor.setHide();
			},
			setShow(){
				return this.umeditor && this.umeditor.setShow();
			},
			hasContent(tags){
				return this.umeditor && this.umeditor.hasContent(tags);
			},
			setEnabled(){
				return this.umeditor && this.umeditor.setEnabled();
			},
			setDisabled(args){
				return this.umeditor && this.umeditor.setDisabled(args);
			}
		},
		props: {
			options: {
				type: Object,
				default(){
					return {
						//提供图片上传地址，请提供以http或https开头的全路径！
						imageUrl: ''
						//提供图片路径，上传完成后的路径。待验证。
						,imagePath: ''
						,fontsize: [10, 11, 12, 14, 16, 18, 20, 24, 36, 40, 50, 100]
						//只保留标签，去除所有属性
						,retainOnlyLabelPasted: true
						//图片上传的文件名字段
						,imageFieldName: 'upfile'
						//更多参考http://fex.baidu.com/ueditor/#start-toolbar
						,toolbar: [
							'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
	        				'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
	            			'| justifyleft justifycenter justifyright justifyjustify |',
	           				'link unlink | emotion image video  | map',
	            			'| horizontal fullscreen', 'drafts', 'bbkformula'
	            		]
	            		,zIndex : 999 
	            		,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]
	            		,autoHeightEnabled:true
	            		,autoFloatEnabled:true
	            		,filterRules: {}
	            		,xssFilterRules: true
					}
				}
			}
		}
	}
</script>