<template>
	<div>
		<div style="text-align: right;padding: 5px 20px;">
			<Button type="info" icon="document-text" @click="showJsonEditor = true">使用JSON编辑</Button>
		</div>
		<Form label-position="right" ref="formDynamic" :label-width="120">
			<FormItem label="测试名" :rules="{required: true, message: '测试名不能为空', trigger: 'blur'}">
				<Row>
                	<Col span="18">
	            		<Input ref="name" v-model="name" placeholder="输入测试名"></Input>
	            	</Col>
	            </Row>
	        </FormItem>
	        <FormItem label="URL" :rules="{required: true, message: 'URL不能为空', trigger: 'blur'}">
				<Row>
                	<Col span="18">
	            		<Input ref="url" v-model="url" placeholder="输入URL地址"></Input>
	            	</Col>
	            </Row>
	        </FormItem>
	        <FormItem label="请求头" v-for="(header, hIndex) in customHeaders" :key="hIndex">
				<Row>
                	<Col span="8">
	            		<Input v-model="header.name" placeholder="输入请求头key"></Input>
	            	</Col>
	            	<Col span="2">
	            		<div style="text-align: center;">-</div>
	            	</Col>
	            	<Col span="8">
	            		<Input v-model="header.value" placeholder="输入请求头value"></Input>
	            	</Col>
	            	<Col :span="2" offset="1">
	                	<Button type="error" @click="removeHeader(header, hIndex)">删除</Button>
	                </Col>
	            </Row>
	        </FormItem>
	        
	        <FormItem>
	            <Row>
	                <Col span="18">
	                    <Button type="dashed" long @click="addHeader" icon="plus-round">新增请求头(header)</Button>
	                </Col>
	            </Row>
	        </FormItem>
	        <FormItem label="cookie信息" v-for="(cookie, cIndex) in customCookies" :key="cIndex">
				<Row>
                	<Col span="8">
	            		<Input v-model="cookie.name" placeholder="输入cookie名"></Input>
	            	</Col>
	            	<Col span="2">
	            		<div style="text-align: center;">-</div>
	            	</Col>
	            	<Col span="8">
	            		<Input v-model="cookie.value" placeholder="输入cookie值"></Input>
	            	</Col>
	            	<Col :span="2" offset="1">
	                	<Button type="error" @click="removeCookie(cookie, cIndex)">删除</Button>
	                </Col>
	            </Row>
	            <div><Checkbox v-model="cookie.more">显示更多选项</Checkbox></div>
	            <template v-if="cookie.more">
		            <Row style="margin-top: 10px;">
		            	<Col span="6">
		            		<Input v-model="cookie.url" placeholder="输入cookie指定的域名"></Input>
		            	</Col>
		            	<Col span="5" offset="1">
		            		<Input v-model="cookie.domain" placeholder="输入cookie的domain"></Input>
		            	</Col>
		            	<Col span="5" offset="1">
		            		<Input v-model="cookie.path" placeholder="输入cookie的path"></Input>
		            	</Col>
		            	
		            </Row>
		            <Row style="margin-top: 10px;">
		            	<Col span="6">
		            		<Input v-model="cookie.expires" placeholder="输入过期时间，Unix time in seconds."></Input>
		            	</Col>
		            	<Col span="5" offset="1">
		            		<Checkbox v-model="cookie.httpOnly">httpOnly</Checkbox>
		            		<Checkbox v-model="cookie.secure">secure</Checkbox>
						</Col>
		            	<Col span="5" offset="1">
		            		<Select v-model="cookie.sameSite" placeholder="sameSite格式">
		            			<Option value="">选择sameSite格式</Option>
						        <Option value="Strict">Strict</Option>
						        <Option value="Lax">Lax</Option>
						    </Select>
		            	</Col>
		            </Row>
	            </template>
	        </FormItem>
	        
	        <FormItem>
	            <Row>
	                <Col span="18">
	                    <Button type="dashed" long @click="addCookie" icon="plus-round">新增cookie</Button>
	                </Col>
	            </Row>
	        </FormItem>
			<FormItem
				label="选择视图(viewport)"
			>
			<Row>
                <Col span="18">
                    <select-item
						multiple
						placeholder="选择设备大小"
						v-model="selectedDevices"
						:options="devices"
					></select-item>
                </Col>
                <Col span="4" offset="1">
                    <Button type="success" @click="showCustomDevice">自定义</Button>
                </Col>
            </Row>
				
			</FormItem>
			<FormItem
				label="编辑动作(action)"
				v-for="(seAction, seIndex) in selectedActions"
				:key="seIndex"
				v-if="supportActions.length"
			>
				<Row>
	                <Col :span="18">
	                    <Select 
	                    	v-model="seAction.name"
		                    @on-change="changeItem(seAction, 1)" 
		                    placeholder="选择动作类型" 
		                    class="inline">
					        <Option 
					        v-for="(item, index) in supportActions" 
					        :value="item.name" 
					        :key="index">{{ item.name }}</Option>
					    </Select>
					    <template v-if="seAction.name === 'element'">
						    <div class="inline" >
						    	<Input placeholder="css选择器" v-model="seAction.selector"></Input>
						    </div>
					    </template>
					    <Select 
						    @on-change="changeItem(seAction, 2)"
						    v-model="seAction.action"
						    v-if="seAction.types.length"
						    placeholder="选择动作类型" 
						    class="inline">
					        <Option 
					        v-for="(item, index) in seAction.types" 
					        :value="item.name" 
					        :key="index">{{ item.name }}</Option>
					    </Select>
						<!-- 类似键盘事件的一类动作 -->
					    <template v-if="hasLevel2(seAction.action) && seAction.keyboards">
					    	<Select 
							    @on-change="changeItem(seAction, 3)"
							    v-model="seAction.keyEvent"
							    v-if="seAction.types.length"
							    :placeholder="seAction.levelName"
							    class="inline">
						        <Option 
						        v-for="(item, index) in seAction.keyboards" 
						        :value="item.name" 
						        :key="index">{{ item.name }}</Option>
						    </Select>
					    </template>
					    <!-- 必须参数 -->
					    <div class="inline" v-if="seAction.requireds && seAction.requireds.length" v-for="arg in seAction.requireds">
					    	<!-- 文件上传 -->
					    	<template v-if="arg.name === 'filePaths'">
							    <Upload
							        multiple
							        :on-success="uploadFile.bind(seAction, seAction)"
							        type="drag"
							        :action="$axios.defaults.baseURL+ '/uploads'">
							        <div style="padding: 20px 0">
							            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
							            <p>点击或将文件拖拽到这里上传(至少上传一个文件！)</p>
							            <p style="color: red;">选择器必须是[type="file"]类型！</p>
							        </div>
							    </Upload>
					    	</template>
					    	<template v-else>
						    	<Input 
						    	:placeholder="arg.desc + '(必填参数)'" 
						    	v-model="seAction.requiredValue[arg.name]"
						    	></Input>
					    	</template>
					    </div>
					    <!-- 可选参数 -->
					    <template v-if="seAction.optionals && seAction.optionals.length"  v-for="opt in seAction.optionals">
					    	<div class="inline optionals" v-for="arg in opt.keys">
						    	<Input 
						    	:placeholder="arg + '(可选参数)'"  
						    	v-model="seAction.optionalValue[arg]"
						    	></Input>
					    	</div>
					    </template>
	                </Col>
	                <Col :span="4" offset="1">
	                	<Button type="error" @click="removeItem(seAction, seIndex)">删除</Button>
	                </Col>
	            </Row>
				
			</FormItem>
			<FormItem>
	            <Row>
	                <Col span="18">
	                    <Button type="dashed" long @click="addItem" icon="plus-round">新增动作(action)</Button>
	                </Col>
	            </Row>
	        </FormItem>
	        <FormItem label="关闭页面等待">
				<Row>
                	<Col span="18">
	            		<Input v-model="waitForClose" placeholder="等待多长(ms)时间后关闭页面（最后截屏前的等待时间）"></Input>
	            	</Col>
	            </Row>
	        </FormItem>
	        <FormItem>
	            <Button type="primary" @click="handleSubmit()">提交</Button>
	            <Button type="primary" :disabled="!this.editor" @click="handleSubmit('json')">提交JSON编辑</Button>
	            <Button type="ghost" @click="handleReset()" style="margin-left: 8px">重置</Button>
	            <Button type="ghost" :disabled="!this.editor" @click="handleReset('json')" style="margin-left: 8px">重置JSON编辑器</Button>
	        </FormItem>
	    </Form>
	    <Modal 
	    width="65%"
	    :closable="true"
	    :mask-closable="false"
	    title="自定义设备"
	    v-model="showCustom">
	    	<span slot="close" @click.stop.prevent="closeModal">
	    		<Icon type="close-round" slot="close"></Icon>
	    	</span>
	    	<Form label-position="right" ref="customDevice" :label-width="120">
	    		<FormItem label="设备名称">
		            <Input v-model="customDevice.name" placeholder="输入设备名称"></Input>
		        </FormItem>
		        <FormItem label="设备代理名称">
		            <Input v-model="customDevice.userAgent" placeholder="设备代理名称"></Input>
		        </FormItem>
		        <FormItem label="设备宽度">
		            <Input v-model="customDevice.viewport.width" placeholder="设备宽度"></Input>
		        </FormItem>
		        <FormItem label="设备高度">
		            <Input v-model="customDevice.viewport.height" placeholder="设备高度"></Input>
		        </FormItem>
		        <FormItem label="设备密度">
		            <Input v-model="customDevice.viewport.deviceScaleFactor" placeholder="设备密度"></Input>
		        </FormItem>

				<FormItem label="横屏">
		            <i-switch v-model="customDevice.viewport.isLandscape">
						<span slot="open">是</span>
						<span slot="close">否</span>
					</i-switch>
		        </FormItem>
		        <FormItem label="移动设备">
		            <i-switch v-model="customDevice.viewport.isMobile">
						<span slot="open">是</span>
						<span slot="close">否</span>
					</i-switch>
		        </FormItem>
		        <FormItem label="支持touch">
		            <i-switch v-model="customDevice.viewport.hasTouch">
						<span slot="open">是</span>
						<span slot="close">否</span>
					</i-switch>
		        </FormItem>
	    	</Form>
	    	<div slot="footer">
	    		<Button type="primary" @click="addCustomDevice()">提交</Button>
		        <Button type="ghost" @click="resetCustomDevice()" style="margin-left: 8px">重置</Button>
	    	</div>
	    </Modal>
	    <div class="loading" v-if="loading">
	    	<div class="loading-spin"></div>
	    </div>
	    <div class="json-editor" v-show="showJsonEditor">
	    	<div class="json-close" @click="showJsonEditor = false"><Icon type="close-round"></Icon></div>
	    	<div ref="jsonEditor" class="json-editor-container"></div>
	    </div>
	</div>
</template>
<script type="text/javascript">
	import selectItem from "./select-fix.vue";
	require('jsoneditor/dist/jsoneditor.css');
	import JSONEditor from 'jsoneditor';
	export default {
		name: 'config',
		components: {
			selectItem
		},
		data(){
			return {
				editor: null,
				demoConfigs: null,
				showJsonEditor: false,
				customHeaders: [],
				customDevice: {
					name: '',
					userAgent: navigator.userAgent,
					viewport: {
						width: window.innerWidth,
						height: window.innerHeight,
						deviceScaleFactor: window.devicePixelRatio,
						isMobile: false,
						hasTouch: true,
						isLandscape: false
					}
				},
				waitForClose: '',
				customCookies: [],
				name: '',
				url: '',
				loading: false,
				showCustom: false,
				selectedDevices: [],
				devices: [],
				selectedActions: [],
				supportActions: []
			}
		},
		watch: {
			showJsonEditor(val){
				if(val){
					this.initJsonEditor();
				}
			}
		},
		beforeDestroyed(){
			this.editor && this.editor.destroy();
		},
		methods: {
			initJsonEditor(){
				if(!this.editor){
					console.log(12323);
					this.editor = new JSONEditor(this.$refs.jsonEditor, {
						mode: 'code',
						modes: ['tree', 'code', 'view', 'form', 'text']
					});
					this.demoConfigs && this.editor.set(this.demoConfigs);
				}
			},
			addCustomDevice(){
				if(!this.customDevice.name){
					return this.noticeError('必须填写名称！');
				}
				if(!this.customDevice.viewport.width){
					return this.noticeError('必须填写宽度！');
				}
				if(!this.customDevice.viewport.height){
					return this.noticeError('必须填写高度！');
				}
				if(this.loading){
					return
				}
				this.loading = true;
				this.$axios.post('/addDevice', {
					device: this.customDevice
				}).then((data)=>{
					this.showCustom = false;
					console.log(data);
					this.devices.push(data);
					this.$Notice.success({
						title: '提示',
						desc: '提交成功！'
					});
					this.loading = false;
				}).catch((e)=>{
					this.loading = false;
					this.noticeError('提交失败！');
				});
				console.log(this.customDevice);
			},
			closeModal(){
				console.log('....')
				if(this.loading){
					return;
				}
				this.showCustom = false;
			},
			noticeError(desc){
				this.$Notice.error({
					title: '错误提示',
					desc: desc
				})
			},
			resetCustomDevice(){
				this.customDevice = {
					name: '',
					userAgent: navigator.userAgent,
					viewport: {
						width: window.innerWidth,
						height: window.innerHeight,
						deviceScaleFactor: window.devicePixelRatio,
						isMobile: false,
						hasTouch: false,
						isLandscape: false
					}
				};
			},
			showCustomDevice(){
				this.showCustom = true;
			},
			uploadFile(item, response, file, fileList){
				var files = [];
				for(let file of fileList){
					var fileRes = file.response;
					if(fileRes && fileRes.data && fileRes.stateCode === 0){
						files.push(...fileRes.data);
					}
				}
				item.requiredValue.filePaths = files;

				console.log(response, file, fileList, item)
			},
			changeItem(item, type){
				console.log(item, type)
				switch(type){
					case 1:
						if(item.name === 'page'){
							item.selector = '';
						}
						item.types = [];
						var type = this.getTypes(item.name);
						if(type){
							item.types = type.types;
						}
						item.requireds = [];
						item.optionals = [];
						break;
					case 2:
						item.requireds = [];
						item.optionals = [];
						console.log(item.action);
						let args = this.getArguments(item, item.action);
						if(args){
							item.levelName = args.desc;
							if(this.hasLevel2(item.action)){
								item.keyboards = args.requireds;
							}else{
								item.requireds = args.requireds; 
								item.optionals = args.optionals; 
							}
						}else{
							item.levelName = '';
						}
						console.log(args);
						break;
					case 3:
						let keys = this.getKeyboard(item, item.keyEvent);
						if(keys){
							item.requireds = keys.requireds; 
							item.optionals = keys.optionals; 
						}
						console.log(keys);
						break;
				}
				this.setValueField(item);
			},
			hasLevel2(action){
				if(action === 'keyboard' || action === 'mouse' || action === 'touchscreen'){
					return true;
				}
				return false;
			},
			setValueField(item){
				item.optionalValue = {};
				item.requiredValue = {};
				item.requireds && item.requireds.map((subItem)=>{
					item.requiredValue[subItem.name] = '';
				});
				item.optionals && item.optionals.map((subItem)=>{
					item.optionalValue[subItem.name] = '';
				});
			},
			removeItem(item, index){
				this.selectedActions.splice(index, 1);
			},
			removeHeader(header, index){
				this.customHeaders.splice(index, 1);
			},
			showNoticeWarn(title, content, callback){
				this.$Modal.confirm({
                    title: title || '提示',
                    content: content,
                    onOk: () => {
                        callback && callback();
                    }
                });
			},
			handleReset(isJson){
				if(isJson){
					if(this.editor && this.demoConfigs){
						this.editor.set(this.demoConfigs);
					}else if(this.editor){
						this.editor.set({});
					}
					return;
				}
				this.selectedActions = [];
				this.name = '';
				this.url = '';
				this.selectedDevices = [];
				this.customHeaders = [];
				this.customCookies = [];
			},
			handleSubmit(isJson){
				if(isJson){
					if(!this.editor){
						this.noticeError('你还没有使用json编辑器编辑！');
						return
					}
					var jsonResult = this.editor.get();
					if(JSON.stringify(this.demoConfigs) === JSON.stringify(jsonResult)){
						this.showNoticeWarn(null, '你确定要使用demo数据测试吗？', ()=>{
							this.submitForm(jsonResult);
						});
					}
					return 
				}
				if(!this.name){
					this.noticeError('测试名不能为空！');
					this.$refs.name.focus();
					return;
				}
				if(!this.url){
					this.noticeError('URL不能为空！');
					this.$refs.url.focus();
					return;
				}
				if(!/^http(s)?\:\/\//.test(this.url)){
					this.noticeError('URL格式不正确！');
					this.$refs.url.focus();
					return;
				}
				var actions = [];
				this.selectedActions.map((item)=>{
					actions.push(this.getTypeByName(item));
				});
				console.log(actions)
				if(!actions.length){
					this.noticeError('请至少调加一个action！');
					return;
				}
				var waitForClose = parseInt(this.waitForClose);
				if(isNaN(waitForClose)){
					waitForClose = 0;
				}
				
				// 默认扩展参数是true，用来记录日志
				var res = {
					"trace": true,
					"console": true,
					"error": true,
					"load": true,
					"pageerror": true,
					"request": true,
					"requestfailed": true,
					"requestfinished": true,
					"response": true,
					"waitForClose": waitForClose,
					"actions": actions,
					"name": this.name,
					"url": this.url,
					"viewports": this.selectedDevices
				}
				var cookies = this.getCookies();
				if(cookies && cookies.length){
					res.cookies = cookies;
				}
				var headers = this.getHeaders();
				if(Object.keys(headers)){
					res.headers = headers;
				}

				this.submitForm(res);
			},

			async submitForm(res){
				if(this.loading){
					return
				}
				this.loading = true;
				try{
					let result = await this.$axios.post('/json', res);
					if(result && result.testName){
						this.$router.push(`/detail/${result.testName}`);
					}
					localStorage.setItem(`test-conf-${this.name}-${Date.now()}`, JSON.stringify(res));
				}catch(e){
					console.log(e);
				}
				this.loading = false;
			},
			// 详细参考demoConfigs的格式
			getTypeByName(item){
				var type = {
					name: item.name
				}
				if(item.name === 'page'){
					var action = {
						name: item.action
					};
					switch(item.action){
						case 'keyboard':
							var requiredValue = Object.values(item.requiredValue);
							if(!requiredValue.length){
								var eStr = `键盘动作：${item.keyEvent}， 必须提供必要参数！`;
								this.noticeError(eStr)
								throw new Error(eStr)
							}
							action.actions = [{
								name: item.keyEvent,
								arguments: requiredValue
							}]
							break;
						case 'type':
							if(!item.requiredValue.text){
								var eStr = `page.type动作， 必须提供必要text参数！`;
								this.noticeError(eStr);
								throw new Error(eStr);
							}
							action.actions = [{
								text: item.requiredValue.text
							}]
							break;
						case 'click':
							if(!item.requiredValue.selector){
								var eStr = `page.click动作， 必须提供必要selector参数！`;
								this.noticeError(eStr);
								throw new Error(eStr);
							}
							action.actions = [{
								selector: item.requiredValue.selector,
								delay: item.optionalValue.delay,
								clickCount: item.optionalValue.clickCount,
								button: item.optionalValue.button
							}]
							break;
						case 'focus':
						case 'hover':
							if(!item.requiredValue.selector){
								var eStr = `page.${item.action}动作， 必须提供必要selector参数！`;
								this.noticeError(eStr);
								throw new Error(eStr);
							}
							action.actions = [{
								selector: item.requiredValue.selector
							}]
							break;
						case 'press':
							if(!item.requiredValue.key){
								var eStr = `page.${item.action}动作， 必须提供必要key参数！`;
								this.noticeError(eStr);
								throw new Error(eStr);
							}
							action.actions = [{
								key: item.requiredValue.key,
								text: item.optionalValue.text,
								delay: item.optionalValue.delay
							}];
							break;
						case 'mouse':
							var requiredValue = Object.values(item.requiredValue);
							if(!requiredValue.length){
								var eStr = `page.${item.action}动作， 必须提供必要参数！`;
								this.noticeError(eStr);
								throw new Error(eStr);
							}
							action.actions = [{
								name: item.keyEvent,
								arguments: [...requiredValue, item.optionalValue]
							}]
							break;
						case 'touchscreen':
							var requiredValue = Object.values(item.requiredValue);
							if(!requiredValue.length){
								var eStr = `page.${item.action}动作， 必须提供必要参数！`;
								this.noticeError(eStr);
								throw new Error(eStr);
							}
							action.actions = [{
								name: item.keyEvent,
								arguments: requiredValue
							}]
							break;
					}
					type.actions = [action];
				}else{
					if(!item.selector){
						var eStr = `element.${item.action}动作， 必须提供必要selector参数！`;
						this.noticeError(eStr);
						throw new Error(eStr);
					}
					var selector = {
						selector: item.selector,
						actions: []
					}

					var action = {
						name: item.action
					}

					if(item.action === 'uploadFile'){
						action.arguments = item.requiredValue.filePaths;
					}else if(item.requiredValue){
						action.arguments = item.requiredValue;
					}else if(item.optionalValue){
						action.arguments = item.optionalValue;
					}
					selector.actions.push(action);
					type.selectors = [selector];
				}

				return type;
			},
			getKeyboard(item, name){
				var index = item.keyboards.findIndex((keyEvent)=>{
					return keyEvent.name === name;
				});
				return item.keyboards[index];
			},
			getArguments(item, name){
				var index = item.types.findIndex((type)=>{
					return type.name === name;
				});

				return item.types[index];
			},
			getHeaders(){
				var headers = {};
				this.customHeaders.map((item)=>{
					if(!item.name || !item.value){
						var str = `不能存在空的键值对！${item.name}:${item.value}`;
						this.noticeError(str);
						throw new Error(str);
					}
					headers[item.name] = item.value;
				});

				return headers;
			},
			getCookies(){
				let cookies = [];

				this.customCookies.map((item)=>{
					if(!item.name || !item.value){
						var str = `cookie的键值对不能为空！${item.name}:${item.value}`;
						this.noticeError(str);
						throw new Error(str);
					}
					var cookie = {
						name: item.name,
						value: item.value
					}
					if(item.more){
						if(item.domain){
							cookie.domain = item.domain;
						}
						if(item.path){
							cookie.path = item.path;
						}
						if(item.expires){
							cookie.expires = item.expires;
						}
						if(item.httpOnly){
							cookie.httpOnly = item.httpOnly;
						}
						if(item.secure){
							cookie.secure = item.secure;
						}
						if(item.sameSite){
							cookie.sameSite = item.sameSite;
						}
					}
				});

				return cookies;
			},
			getTypes(name){
				var index = this.supportActions.findIndex((item)=>{
					return item.name === name;
				});

				return this.supportActions[index];
			},
			addHeader(){
				this.customHeaders.push({
					name: '',
					value: ''
				})
			},
			removeCookie(cookie, index){
				this.customCookies.splice(index, 1);
			},
			addCookie(){
				this.customCookies.push({
					more: false,
					name: '',// <string> required
					value: '',// <string> required
					url: '',// <string>
					domain: '',// <string>
					path: '',// <string>
					expires: '',// <number> Unix time in seconds.
					httpOnly: false,// <boolean>
					secure: false,// <boolean>
					sameSite: ''// <string> "Strict" or "Lax".
				})
			},
			addItem(){
				this.selectedActions.push({
					name: '',//类型：page、element
					selector: '',//选择器，用于选择元素
					action: '',//动作名
					keyEvent: '',//键盘动作
					levelName: '',
					optionalValue: {

					},
					requiredValue: {

					},
					types: [],//
					keyboards: [],
					requireds: [],
					optionals: []
				});
			},
			async getConfig(){
				try{
					
					var data = await this.$axios.get('/getConfig');
					console.log(data);
					this.devices = data.devices;
					this.supportActions = data.actions;
					this.demoConfigs = data.demoConfigs;
				}catch(e){
					this.noticeError('获取配置失败！');
				}
			}
		},
		mounted(){
			this.addItem();
			this.getConfig();
			this.addHeader();
			this.addCookie();
		}
	}
</script>
<style lang="less">
	.inline{
		display: inline-block;
		vertical-align: middle;
		width: 20%;
		margin-right: 5px;
		margin-bottom: 10px;
	}
	.loading{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 333;

	}
	.json-editor{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 332;
		background-color: #fff;
		.json-editor-container{
			width: 100%;
			height: 100%;
		}
		.json-close{
			z-index: 332;
			display: inline-block;
			position: absolute;
			right: 20px;
			top: 20px;
			width: 50px;
			height: 50px;
			background: #3d3d3d;
			border-radius: 50%;
			font-size: 25px;
			text-align: center;
			line-height: 53px;
			color: #fff;
		}
	}
</style>