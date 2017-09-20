com.wiris.js.JsEditor = v91["com.wiris.js.JsEditor"] = function(basePath, params) {
	if (js.Lib.window.location.href.indexOf("file") == 0) {
		js.Lib.window.alert("'WIRIS editor' only works from http(s):// and not from '" + js.Lib.window.location.href + "'");
		return;
	};
	this.browser = new com.wiris.e1_z();
	this.element = null;
	this.resourceLoader = com.wiris.system.ResourceLoader.newInstance(basePath);
	this.rightToLeft = false;
	this.autosize = false;
	var vtU = null;
	if (params != null) {
		if (!params.pureRender) {
			vtU = new HaxeHash();
			var i = HxOverrides.iter(Reflect.fields(params));
			while (i.hasNext()) {
				var vJ1 = i.next();
				if (vJ1 != "toolbar") {
					var value = Reflect.field(params, vJ1);
					if (vJ1 == "styles" && !js.Boot.__instanceof(value, String)) value = haxe.Json.vuU(value);
					else if (vJ1 == "eInstructionStyles" && !js.Boot.__instanceof(value, String)) value = haxe.Json.vuU(value);
					else if (js.Boot.__instanceof(value, Bool)) {
						if (js.Boot.vX3(value, Bool)) value = "true";
						else value = "false";
					};
					vtU.set(vJ1, value);
				}
			};
		}
		else {
			vtU = new HaxeHash();
			params.color && vtU.set('color', params.color);
			params.fontstyle && vtU.set('fontstyle', params.fontstyle);
			params.fontweight && vtU.set('fontweight', params.fontweight);
			params.fontfamily && vtU.set('fontfamily', params.fontfamily);
			if(!vtU.get('color') && !vtU.get('fontstyle') && !vtU.get('fontweight')){
				vtU = null;
			}
		}

		this.editorModel = js.Boot.vX3(com.wiris.editor.EditorModel.getNewInstanceWithParams(vtU), com.wiris.editor.EditorModelPrivateInterface);
	} else this.editorModel = js.Boot.vX3(com.wiris.editor.EditorModel.getNewInstance(), com.wiris.editor.EditorModelPrivateInterface);

	this.formulaDisplay = new com.wiris.e1_31(this.editorModel, this.resourceLoader);
	if (params.pureRender) {
        this.editorModel.pureRender = true;
        this.editorModel.formulaModel.pureRender = true;
    }
	if (!params.pureRender) {
		this.toolbar = new com.wiris.e1_41(this.editorModel, this.resourceLoader, vtU);
		this.toolbar.editor = this;
		this.toolbarElement = null;
		this.editorModel.getToolbarModel().vJ3(this);
		if (vtU != null) {
			if (params.toolbar != null) {
				var vvU = new HaxeHash();
				vvU.set("toolbar", params.toolbar);
				this.editorModel.setParams(vvU);
				vtU.set("toolbar", params.toolbar);
			};
			var i = vtU.keys();
			while (i.hasNext()) {
				var vJ1 = i.next();
				this.setParam(vJ1, vtU.get(vJ1));
			}
		}
	}
};
com.wiris.js.JsEditor.__name__ = ["com", "wiris", "js", "JsEditor"];
com.wiris.js.JsEditor.__interfaces__ = [com.wiris.e1_4, com.wiris.e1_5, com.wiris.e1_3];
com.wiris.js.JsEditor.instances = null;
com.wiris.js.JsEditor.newInstance = function(params) {
	if (com.wiris.js.defaultBasePath != null && StringTools.startsWith(com.wiris.js.defaultBasePath, "http://") && js.Lib.window.location.protocol == "https:") com.wiris.js.defaultBasePath = "https://" + com.wiris.js.defaultBasePath.substr("http://".length);
	var basePath = com.wiris.js.defaultBasePath;
	if (params != null && params.basePath != null) basePath = params.basePath;
	return new com.wiris.js.JsEditor(basePath, params);
};
com.wiris.js.JsEditor.setInstance = function(parent, vwU) {
	if (com.wiris.js.JsEditor.instances == null) com.wiris.js.JsEditor.instances = new Array();
	var vxU = new Array();
	vxU[0] = parent;
	vxU[1] = vwU;
	com.wiris.js.JsEditor.instances.push(vxU);
};
com.wiris.js.JsEditor.removeInstance = function(parent) {
	var i = 0;
	var we;
	while (i < com.wiris.js.JsEditor.instances.length)
		if (com.wiris.js.JsEditor.instances[i][0] == parent) {
			com.wiris.js.JsEditor.instances.splice(i, 1);
			return;
		}
};
com.wiris.js.JsEditor.getInstance = function(parent) {
	var i = HxOverrides.iter(com.wiris.js.JsEditor.instances);
	while (i.hasNext()) {
		var vxU = i.next();
		if (vxU[0] == parent) return vxU[1];
	};
	return null;
};
com.wiris.js.JsEditor.prototype = {
	close: function() {
		if (this.element != null && this.element.parentNode != null) {
			com.wiris.js.JsEditor.removeInstance(this.element.parentNode);
			this.element.parentNode.removeChild(this.element);
		}
	},
	setAutosize: function(enabled) {
		this.autosize = enabled;
		this.formulaDisplay.vyU(!enabled);
		if (this.element != null) {
			if (enabled) this.element.style.minHeight = "0";
			else this.element.style.minHeight = null;
		}
	},
	getPreferredHeight: function() {
		var vzU = 0;
		var v0V = 2;
		var v1V = 10;
		var v2V = vzU + v0V + v1V;
		if (!this.toolbar.hidden) {
			var v3V = 2;
			v2V += this.toolbar.getElement().offsetHeight + v3V;
		};
		if (this.tickContainer != null) {
			var v4V = 2;
			var v5V = 2;
			v2V += this.tickContainer.offsetHeight + v4V + v5V;
		};
		return this.editorModel.getFormulaHeight() + v2V;
	},
	getPreferredWidth: function() {
		var vzU = 0;
		var v0V = 2;
		var v1V = 10;
		var v2V = vzU + v0V + v1V;
		return this.editorModel.getFormulaWidth() + v2V;
	},
	banWords: function(vfC) {
		var v = new com.wiris.editor.WordValidator();
		var i = 0;
		while (i < vfC.length) {
			v.banWord(vfC[i]);
			++i;
		};
		this.editorModel.addValidator(v);
	},
	urlAnswerReceived: function(url, parameters, vt3) {},
	serviceAnswerReceived: function(serviceName, parameters, vt3) {
		if (vt3 != "") {
			this.tickContainer = js.Lib.document.createElement("div");
			this.tickContainer.className = "wrs_tickContainer";
			this.tickContainer.innerHTML = vt3;
			this.element.appendChild(this.tickContainer);
		}
	},
	sectionUpdated: function(vc3, tabIndex, vd3) {},
	toolbarReseted: function(vc3) {},
	tabUpdated: function(vc3, index) {},
	tabRemoved: function(vc3, index) {},
	tabChanged: function(vc3, from, to) {},
	setToolbarHidden: function(hidden) {
		this.toolbar.v6V(hidden);
	},
	setMathMLWithCallback: function(vi3, vGU) {
		var listener = new com.wiris.e1_21(vGU);
		this.editorModel.addEditorListener(listener);
		this.setMathML(vi3);
	},
	setMathML: function(vi3, callback) {
		callback = callback || function() {};

		vi3 = vi3.replace(/&lt;|&#60;/gim, '<')
				.replace(/&gt;|&#62;/gim, '>')
				.replace(/&quot;|&#34;/gim, '"')
				.replace(/&amp;|&#38;/gim, '&')
				.replace(/&#160;/gim, '&nbsp;')
				.replace(/<([^>]*?)</gim, function(reg,s1){
                    return '&lt;'+s1+'<';
                }).replace(/<([^>]*?)</gim, function(reg,s1){
                    return '&lt;'+s1+'<';
                }).replace(/<([^>]*?)</gim, function(reg,s1){
                    return '&lt;'+s1+'<';
                })
                .replace(/<(.*?)>/gim, function(reg, s1){
                    var s2 = s1.split('');
                    // if()
                    if(!/[a-zA-Z\/]/.test(s2[0])){
                        return '&lt;'+s2.join('')+'>'; 
                    }

                    return reg;
                })
		//创建一个div，用以保证类似<span><><><></span>这样的能正常转换
		var div = document.createElement('div');
		div.innerHTML = vi3;
		vi3 = div.innerHTML;
		//输出为<span>&lt;&gt;&lt;&gt;&lt;&gt;</span>。不仅如此。还会将标签补全，如<p>asdad<p>输出将为<p>asdad</p><p></p>

        //但是如果原始的数据是&lt;span&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;span&gt;
        //那么输出将保持为&lt;span&gt;&lt;&gt;&lt;&gt;&lt;&gt;&lt;span&gt;

        vi3 = this.fixMathData(vi3);

		try {
			Xml.parse(vi3);
			this.editorModel.setMathML(vi3);
			callback();
		} catch (e) {
			if (window.console) {
				window.console.warn(e);
				window.console.warn(vi3);
				window.console.error(e.stack);
				callback(e);
			}
			console.error(e + '公式编辑器无法完成此公式的渲染。');
		}
	},
	setParam: function(vJ1, value) {
		if (js.Boot.__instanceof(value, Bool)) {
			if (js.Boot.vX3(value, Bool)) value = "true";
			else value = "false";
		};
		if (vJ1 == "checkSyntax") this.formulaDisplay.v7V(value == "true");
		else if (vJ1 == "grammarURL") this.formulaDisplay.v7V(this.formulaDisplay.checkSyntax);
		else if (vJ1 == "toolbarHidden") this.setToolbarHidden(value == "true");
		else if (vJ1 == "backgroundColor") this.formulaDisplay.v8V(value);
	},
	setParams: function(params) {
		var vtU = new HaxeHash();
		var i = HxOverrides.iter(Reflect.fields(params));
		while (i.hasNext()) {
			var vJ1 = i.next();
			var value = Reflect.field(params, vJ1);
			if (vJ1 == "styles" && !js.Boot.__instanceof(value, String)) value = haxe.Json.vuU(value);
			else if (vJ1 == "eInstructionStyles" && !js.Boot.__instanceof(value, String)) value = haxe.Json.vuU(value);
			else if (js.Boot.__instanceof(value, Bool)) {
				if (js.Boot.vX3(value, Bool)) value = "true";
				else value = "false";
			};
			vtU.set(vJ1, value);
		};
		this.editorModel.setParams(vtU);
		i = vtU.keys();
		while (i.hasNext()) {
			var vJ1 = i.next();
			this.setParam(vJ1, vtU.get(vJ1));
		}
	},
	updateGUI: function() {
		if (this.isReady()) {
			if (!this.autosize) {
				var vzU = 0;
				var v0V = 2;
				var v2V = vzU + v0V;
				if (!this.toolbar.hidden) {
					var v3V = 2;
					v2V += this.toolbar.getElement().offsetHeight + v3V;
				};
				if (this.tickContainer != null) {
					var v4V = 2;
					var v5V = 2;
					v2V += this.tickContainer.offsetHeight + v4V + v5V;
				};
				this.formulaDisplay.getElement().style.height = com.wiris.js.JsDOMUtils.v6U(this.element.offsetHeight - v2V) + "px";
			} else if (this.element.parentNode != null) {
				this.element.parentNode.style.height = this.getPreferredHeight() + "px";
				this.element.parentNode.style.width = this.getPreferredWidth() + "px";
			};
			if (com.wiris.js.JsDOMUtils.v1U(this.element, "direction") == "rtl") {
				if (!this.rightToLeft) {
					this.rightToLeft = true;
					com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_rtl");
				}
			} else if (this.rightToLeft) {
				this.rightToLeft = false;
				com.wiris.js.JsDOMUtils.vJU(this.element, "wrs_rtl");
			}
		}
	},
	onIsReady: function(vGU) {
		var v9V = new haxe.Timer(100);
		var self = this;
		v9V.run = function() {
			if (self.isReady()) {
				v9V.stop();
				vGU();
			}
		};
	},
	isReady: function() {
		return this.editorModel.isReady() && this.formulaDisplay.isReady();
	},
	isFormulaEmpty: function() {
		return this.editorModel.isFormulaEmpty();
	},
	on: function(type, cb) {
		return this.editorModel.on(type, cb);
	},
	insertInto: function(parent) {
		com.wiris.js.JsDOMUtils.vxS(parent);
		parent.appendChild(this.getElement());
		com.wiris.js.JsEditor.setInstance(parent, this);
	},
	insertCSS: function() {
		var link = js.Lib.document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", this.resourceLoader.getPath("template.css"));
		js.Lib.document.getElementsByTagName("head")[0].appendChild(link);
	},
    insertMathML: function(mml) {
        this.editorModel.insertMathML(this.fixMathData(mml));
    },
	getMathML: function() {
		return this.editorModel.getMathML();
	},

	renderMathHtml: function(el, div) {
    	var _this = this;
    	var mathml = el.outerHTML;
        // 去除换行和标签间多余的空格
        // mathml = this.fixMathData(mathml);
        //校验mathml
        mathml = this.mathCorrect(mathml);
        //修复
        mathml = this.fixMathData2(mathml);
            
        var formulaContainer = document.createElement('span');
        el.parentNode.insertBefore(formulaContainer, el);
        formulaContainer.setAttribute('editor-math-model', 'bbk');
        formulaContainer.setAttribute('contenteditable', 'false');
        //这里添加标示来表示来自初始化不能编辑的数据
        formulaContainer.setAttribute('bbk-init', 'bbk');
        formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');
        formulaContainer.setAttribute('data-math', escape(mathml));
    	this.formulaDisplay.vPN = div ? div : formulaContainer;
    	// if(/largeop="true"/gi.test(mathml)){
     //    	formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');
     //    }else{
     //    	formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;line-height:0.9;');
     //    }
    	//将特殊转义字符正常化，需要在公式渲染前转换
    	this.setMathML(mathml, function(e) {

    		if(div){
    			formulaContainer.innerHTML = div.innerHTML;
    			formulaContainer.style.width = (div.clientWidth + 4) + 'px';
    			formulaContainer.style.height = div.style.height;
    			formulaContainer.style.verticalAlign = div.style.verticalAlign;
    			$(div).empty();
    		}else{
    			formulaContainer.style.width = (formulaContainer.clientWidth + 4) + 'px';
    			// formulaContainer.style.height = (formulaContainer.clientHeight + 4) + 'px';
    		}
    		if (e) {
    			// var errorNode = document.createElement('span');
    			formulaContainer.setAttribute('render-error', true);
    			formulaContainer.style.width = '';
    			formulaContainer.style.height = '';
    			formulaContainer.style.verticalAlign = '';
    			formulaContainer.innerHTML = '<span style="color: red;">[math render error]</span>';
    			// formulaContainer.style.display = 'none';
    			// el.parentNode.insertBefore(errorNode, el);
    			el.parentNode.removeChild(el);
    		} else {
	    		el.parentNode.removeChild(el);
	    		return formulaContainer;
    		}
    	});
    	setTimeout(function() {
	    	var node = formulaContainer.getElementsByClassName('formulaTemp1')[0];
	    	node && node.parentNode.removeChild(node);
    	}, 500);
    },

    //自定义模板
    renderMathHtml5: function(el, div) {
    	var _this = this;
    	var mathml = el.outerHTML;
        // 去除换行和标签间多余的空格
        // mathml = this.fixMathData(mathml);
        mathml = this.fixMathData2(mathml);
            
        var formulaContainer = document.createElement('span');
        el.parentNode.insertBefore(formulaContainer, el);
        formulaContainer.setAttribute('contenteditable', 'false');
        formulaContainer.setAttribute('data-math', mathml);
        formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');
        // if(/largeop="true"/gi.test(mathml)){
        // 	formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');
        // }else{
        // 	formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;line-height:0.9;');
        // }
    	this.formulaDisplay.vPN = div ? div : formulaContainer;
    	//将特殊转义字符正常化，需要在公式渲染前转换
    	this.setMathML(mathml, function(e) {
    		if(div){
    			formulaContainer.innerHTML = div.innerHTML;
    			formulaContainer.style.width = (div.clientWidth + 4) + 'px';
    			formulaContainer.style.height = div.style.height;
    			formulaContainer.style.verticalAlign = div.style.verticalAlign;
    			// formulaContainer.style.lineHeight = div.style.lineHeight;
    			$(div).empty();
    		}else{
    			formulaContainer.style.width = (formulaContainer.clientWidth + 4) + 'px';
    			// formulaContainer.style.height = (formulaContainer.clientHeight + 4) + 'px';
    		}
    		if (e) {
    			// var errorNode = document.createElement('span');
    			formulaContainer.setAttribute('render-error', true);
    			formulaContainer.style.width = '';
    			formulaContainer.style.height = '';
    			formulaContainer.style.verticalAlign = '';
    			formulaContainer.innerHTML = '<span style="color: red;">[math render error]</span>';

    			el.parentNode.removeChild(el);
    		} else {
	    		el.parentNode.removeChild(el);
	    		return formulaContainer;
    		}
    	});
    	setTimeout(function() {
	    	var node = formulaContainer.getElementsByClassName('formulaTemp1')[0];
	    	node && node.parentNode.removeChild(node);
    	}, 500);
    },

    renderMathHtml4: function(el, div) {
    	var _this = this;
    	var mathml = el.outerHTML;
        // 去除换行和标签间多余的空格
        mathml = this.fixMathData2(mathml);
        var formulaContainer = document.createElement('span');
        var formulaTemp = document.createElement('script');
        formulaTemp.type = 'type/bbkformula';
        formulaTemp.innerHTML = mathml;

        el.parentNode.insertBefore(formulaContainer, el);
        el.parentNode.insertBefore(formulaTemp, el);
        formulaContainer.setAttribute('math-model', 'bbk');
        formulaContainer.setAttribute('contenteditable', 'false');
        formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');

    	this.formulaDisplay.vPN = div ? div : formulaContainer;
    	this.setMathML(mathml, function(e) {

    		if(div){
    			formulaContainer.innerHTML = div.innerHTML;
    			formulaContainer.style.width = (div.clientWidth + 4) + 'px';
    			formulaContainer.style.height = (div.clientHeight + 4) + 'px';
    			formulaContainer.style.verticalAlign = div.style.verticalAlign;
    			$(div).empty();
    		}else{
    			formulaContainer.style.width = (formulaContainer.clientWidth + 4) + 'px';
    			formulaContainer.style.height = (formulaContainer.clientHeight + 4) + 'px';
    		}
    		// el.parentNode.insertBefore(formulaContainer, el);
    		if (e) {
    			//对于第一次渲染失败的公式，尝试修复数据后进行第二次渲染。
    			// this.setMathML(this.fixMathData(mathml), function(e) {
    				// if (err) {
		    			formulaContainer.style.width = '';
		    			formulaContainer.style.height = '';
		    			formulaContainer.style.verticalAlign = '';
		    			formulaContainer.innerHTML = '<span style="color: red;">[math render error]</span>';
		    			// formulaContainer.style.display = 'none';
		    			// el.parentNode.insertBefore(errorNode, el);
	    			// }

	    			el.parentNode.removeChild(el);
    			// });
    		} else {
	    		el.parentNode.removeChild(el);
	    		return formulaContainer;
    		}
    	});
    	setTimeout(function() {
	    	var node = formulaContainer.getElementsByClassName('formulaTemp1')[0];
	    	node && node.parentNode.removeChild(node);
    	}, 500);
    },


    renderMathHtml2: function(mathml, parentNode, div) {
    	var _this = this;

        // 去除换行和标签间多余的空格
        mathml = this.fixMathData2(mathml);

        var formulaContainer = div ? div : parentNode;
        formulaContainer.setAttribute('math-model', 'bbk');
        formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');

    	this.formulaDisplay.vPN = formulaContainer;
    	this.setMathML(mathml, function(e) {
    		if(div){
    			parentNode.innerHTML = formulaContainer.innerHTML;
    			$(div).empty();
    		}

    		if (e) {
		    	parentNode.innerHTML = '<span style="color: red;">[math render error]</span>';
    		}
    	});

    	setTimeout(function() {
	    	var node = formulaContainer.getElementsByClassName('formulaTemp1')[0];
	    	node && node.parentNode.removeChild(node);
    	}, 500);
    },

    renderMathHtml3: function(el, id, mml, url, div) {
    	var _this = this;
    	var mathml = el.outerHTML;
        // 去除换行和标签间多余的空格
        // mathml = this.fixMathData(mathml);
        mathml = this.fixMathData2(mathml);
            
        var formulaContainer = document.createElement('span');
        var textNode = document.createElement('span');
        var textNode1 = document.createElement('span');
        var formulaTemp = document.createElement('script');
        textNode1.setAttribute('editor-math-mark','bbk');
        textNode.setAttribute('editor-math-mark','bbk');
        formulaTemp.type = 'type/bbkformula';
        formulaTemp.innerHTML = mathml;
        textNode.innerHTML = textNode1.innerHTML = '\u200D'
        el.parentNode.insertBefore(textNode1, el);
        el.parentNode.insertBefore(formulaContainer, el);
        el.parentNode.insertBefore(formulaTemp, el);
        el.parentNode.insertBefore(textNode, el);
        formulaContainer.setAttribute('editor-math-model', 'bbk');
        formulaContainer.setAttribute('data-math', mathml);
        formulaContainer.setAttribute('id', id);
        formulaTemp.setAttribute('id', id);
        formulaTemp.setAttribute('math-model-origin', true);
        formulaContainer.setAttribute('contenteditable', 'false');
        formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');
        // if(/largeop="true"/gi.test(mathml)){
        // }else{
        // 	formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;line-height:0.9;');
        // }
        
        (function(mathml, iframeUrl, formulaTemp){
	        formulaContainer.ondblclick=function(e){
	        	var that = this;
	            var _iframe = document.createElement('iframe');
	            _iframe.src = iframeUrl+'?'+mathml;
	            _iframe.setAttribute('data-mathml', mathml);
	            _iframe.setAttribute('class', 'edui-math-editor');
	            _iframe.setAttribute('style', 'width: 0px; height: 0px; overflow: hidden;');
	            _iframe.setAttribute('frameborder', '0');
	            _iframe.setAttribute('id', this.id.replace(/math_span_/gi, 'math_iframe_'));
	            this.parentNode.insertBefore(_iframe, this);
	            _iframe.onload=function(){
	                setTimeout(function(){
	                	if(that.nextSibling && that.nextSibling.id == that.id && /script/gi.test(that.nextSibling.tagName)){
	                		that.parentNode.removeChild(that.nextSibling);
	                	}
	                	that.parentNode.removeChild(that);
	                }, 20);
	            }
	        }
        })(mathml, url, formulaTemp)
        
        var renderTime = new Date(); 

    	this.formulaDisplay.vPN = div ? div : formulaContainer;
    	//将特殊转义字符正常化，需要在公式渲染前转换
    	this.setMathML(mathml, function(e) {
    		var comRender = new Date() - renderTime;

    		if(!window.initFormula){
    			window.initFormula = comRender;
    		}else{
    			window.initFormula += comRender;
    		}

    		if(div){
    			formulaContainer.innerHTML = div.innerHTML;
    			formulaContainer.style.width = (div.clientWidth + 4) + 'px';
    			formulaContainer.style.height = div.style.height;
    			formulaContainer.style.verticalAlign = div.style.verticalAlign;
    			// formulaContainer.style.lineHeight = div.style.lineHeight;
    			
    			$(div).empty();
    		}else{
    			formulaContainer.style.width = (formulaContainer.clientWidth + 4) + 'px';
    			// formulaContainer.style.height = (formulaContainer.clientHeight + 4) + 'px';
    		}
    		if (e) {
    			// var errorNode = document.createElement('span');
    			formulaContainer.setAttribute('render-error', true);
    			formulaContainer.style.width = '';
    			formulaContainer.style.height = '';
    			formulaContainer.style.verticalAlign = '';
    			formulaContainer.innerHTML = '<span style="color: red;">[math render error]</span>';
    			// formulaContainer.style.display = 'none';
    			// el.parentNode.insertBefore(errorNode, el);
    			el.parentNode.removeChild(el);
    		} else {
	    		el.parentNode.removeChild(el);
	    		return formulaContainer;
    		}
    	});
    	setTimeout(function() {
	    	var node = formulaContainer.getElementsByClassName('formulaTemp1')[0];
	    	node && node.parentNode.removeChild(node);
    	}, 500);
    },

    renderMathHtml3Bar: function(el, id, mml, url, div) {
    	var _this = this;
    	var mathml = el.outerHTML;
        // 去除换行和标签间多余的空格
        // mathml = this.fixMathData(mathml);
        mathml = this.fixMathData2(mathml);
            
        var formulaContainer = document.createElement('span');
        var textNode = document.createElement('span');
        var textNode1 = document.createElement('span');
        
        textNode1.setAttribute('editor-math-mark','bbk');
        textNode.setAttribute('editor-math-mark','bbk');
        textNode.innerHTML = textNode1.innerHTML = '\u200D'
        el.parentNode.insertBefore(textNode1, el);
        el.parentNode.insertBefore(formulaContainer, el);
        el.parentNode.insertBefore(textNode, el);
        formulaContainer.setAttribute('editor-math-model', 'bbk');
        formulaContainer.setAttribute('data-math', escape(mathml));
        formulaContainer.setAttribute('id', id);
        formulaContainer.setAttribute('contenteditable', 'false');
        formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;');
        // if(/largeop="true"/gi.test(mathml)){
        // }else{
        // 	formulaContainer.setAttribute('style', 'position: relative; display: inline-block; zoom: 1; *display: inline;line-height:0.9;');
        // }
        
        (function(mathml, iframeUrl){
	        formulaContainer.ondblclick=function(e){
	        	var that = this;
	            var _iframe = document.createElement('iframe');
	            _iframe.src = iframeUrl;
	            _iframe.setAttribute('data-mathml', escape(mathml));
	            _iframe.setAttribute('class', 'edui-math-editor');
	            _iframe.setAttribute('style', 'width: 0px; height: 0px; overflow: hidden;');
	            _iframe.setAttribute('frameborder', '0');
	            _iframe.setAttribute('id', this.id.replace(/math_span_/gi, 'math_iframe_'));
	            this.parentNode.insertBefore(_iframe, this);
	            _iframe.onload=function(){
	                setTimeout(function(){
	                	that && that.parentNode.removeChild(that);
	                }, 20);
	            }
	        }
        })(mathml, url)
        
        var renderTime = new Date(); 

    	this.formulaDisplay.vPN = div ? div : formulaContainer;
    	//将特殊转义字符正常化，需要在公式渲染前转换
    	this.setMathML(mathml, function(e) {
    		var comRender = new Date() - renderTime;

    		if(!window.initFormula){
    			window.initFormula = comRender;
    		}else{
    			window.initFormula += comRender;
    		}

    		if(div){
    			formulaContainer.innerHTML = div.innerHTML;
    			formulaContainer.style.width = (div.clientWidth + 4) + 'px';
    			formulaContainer.style.height = div.style.height;
    			formulaContainer.style.verticalAlign = div.style.verticalAlign;
    			// formulaContainer.style.lineHeight = div.style.lineHeight;
    			
    			$(div).empty();
    		}else{
    			formulaContainer.style.width = (formulaContainer.clientWidth + 4) + 'px';
    			// formulaContainer.style.height = (formulaContainer.clientHeight + 4) + 'px';
    		}
    		if (e) {
    			// var errorNode = document.createElement('span');
    			formulaContainer.setAttribute('render-error', true);
    			formulaContainer.style.width = '';
    			formulaContainer.style.height = '';
    			formulaContainer.style.verticalAlign = '';
    			formulaContainer.innerHTML = '<span style="color: red;">[math render error]</span>';
    			// formulaContainer.style.display = 'none';
    			// el.parentNode.insertBefore(errorNode, el);
    			el.parentNode.removeChild(el);
    		} else {
	    		el.parentNode.removeChild(el);
	    		return formulaContainer;
    		}
    	});
    	setTimeout(function() {
	    	var node = formulaContainer.getElementsByClassName('formulaTemp1')[0];
	    	node && node.parentNode.removeChild(node);
    	}, 500);
    },

    fixMathData2: function(mml) {
    	var _this = this;
    	//10进制转16进制
        var demecialToHex = function(num){
            num = Number(num);
            if(isNaN(num)){
                console.log('错误的数字格式');
                return 'FFFD'
            }
            
            var array = [];
            do{
            	var _hex = num%16;
            	if(_hex >= 10){
            		switch(_hex){
            			case 10:
            				_hex = 'A';
            				break;
            			case 11:
            				_hex = 'B';
            				break;
            			case 12:
            				_hex = 'C';
            				break;
            			case 13:
            				_hex = 'D';
            				break;
            			case 14:
            				_hex = 'E';
            				break;
            			case 15:
            				_hex = 'F';
            				break;
            		}
            	}
                array.unshift(_hex);
                num = Math.floor(num / 16);
            }while(num);
            return array.join('');

        }
    	mml = mml
    			.replace(/&lt;&lt; mo=&quot;&quot;&gt;/gim, '&lt;</mo>')
    			.replace(/<\!--<--><\/mo>/gim, '')
    			.replace(/\n/gi, '')
		        .replace(/>(.*?)</gi, function(s, s1) {
		                s1 = s1.replace(/\s*/gi, '');
		                return '>' + s1 + '<';
		        })
		        .replace(/&amp;#x([A-Za-z0-9]{1,4});/gi, function(str, s1){
					var n = parseInt(s1,16);
					var _str = String.fromCharCode(n);
					if(_str === '>'){
						_str = '&gt;'
					}else if(_str === '<'){
						_str = '&lt;'
					}else if(_str === '&'){
						_str = '&amp;'
					}
					return _str;
				})//将特殊转义字符正常化
				.replace(/<([a-z]+)(\s*[^>]*)><\/\1>/gi, function(reg, s1, s2){
					//空的mtd会导致空白的框出现
		            if(s1 === 'mtext'){
		                return '<mi>&nbsp;</mi>';
		            }else if(s1 === 'mtr'){
		            	return '<mtr><mtd><mo>&nbsp;</mo></mtd></mtr>';
		            }else if(s1 === 'mtable'){
		            	return '<mtable'+(s2?' '+s2:'')+'><mtr><mtd><mo>&nbsp;</mo></mtd></mtr></mtable>';
		            }else if(s1 === 'mi'){
		            	return '<mi>&nbsp;</mi>';
		            }else if(s1 === 'mo'){
		            	return '<mo>&nbsp;</mo>';
		            }else if(s1 === 'mn'){
		            	return '<mo>&nbsp;</mo>';
		            }else if(s1 === 'mspace'){
		            	return reg;
		            }

		            return '<'+s1+(s2 ? ' '+s2:'')+'><mo>&nbsp;</mo></'+s1+'>';
		        })
		        .replace(/(\u00A2)([\u00D9-\u00E2])/gim, function(reg, s1, s2){
		        	var numObj = {
		        		'\u00D9': '①',
		        		'\u00DA': '②',
		        		'\u00DB': '③',
		        		'\u00DC': '④',
		        		'\u00DD': '⑤',
		        		'\u00DE': '⑥',
		        		'\u00DF': '⑦',
		        		'\u00E0': '⑧',
		        		'\u00E1': '⑨',
		        		'\u00E2': '⑩'
		        		// '\u00E3': '⑪',
		        		// '\u00E4': '⑫',
		        		// '\u00E5': '⑬',
		        		// '\u00E6': '⑭',
		        		// '\u00E7': '⑮',
		        		// '\u00E8': '⑯',
		        		// '\u00E9': '⑰',
		        		// '\u00EA': '⑱',
		        		// '\u00EB': '⑲',
		        		// '\u00EC': '⑳'
		        	}
		        	
		        	return numObj[s2];
		        })
		        // .replace(/<\/mtd>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mi><mo>&nbsp;<\/mo><\/mi>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mo><mo>&nbsp;<\/mo><\/mo>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mo><mi>&nbsp;<\/mi><\/mo>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mo><mn>&nbsp;<\/mn><\/mo>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mi><mi>&nbsp;<\/mi><\/mi>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mi><mn>&nbsp;<\/mn><\/mi>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mn><mi>&nbsp;<\/mi><\/mn>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mn><mo>&nbsp;<\/mo><\/mn>/gi, '<mo>&nbsp;</mo>')
		        .replace(/<mn><mn>&nbsp;<\/mn><\/mn>/gi, '<mo>&nbsp;</mo>')
		        // .replace(/<mtext>/gi, '<mi>').replace(/<\/mtext>/gi, '</mi>')
		        .replace(/(<mtd>)+/gim, function(reg, s1){
		        	//<mtd><mtd><mtd><mtd> -> ['<mtd','<mtd','<mtd','<mtd','']
		        	var a = reg.split('>');
		        	var len = a.length - 1;
		        	var mtd = '';
		        	for (var i = 0; i < len -1; i++) {
		        		mtd +='<mtd><mo>&nbsp;</mo></mtd>';
		        	};
		        	mtd += '<mtd>';
		        	return mtd;
		        })
		        .replace(/(<\/mtd>)+/gim, '</mtd>')
		        .replace(/(<mtr>)+/gim, function(reg, s1){
		        	//<mtd><mtd><mtd><mtd> -> ['<mtd','<mtd','<mtd','<mtd','']
		        	var a = reg.split('>');
		        	var len = a.length - 1;
		        	var mtr = '';
		        	for (var i = 0; i < len -1; i++) {
		        		mtr +='<mtr><mtd><mo>&nbsp;</mo></mtd></mtr>';
		        	};
		        	mtr += '<mtr>';
		        	return mtr;
		        })
		        .replace(/(<\/mtr>)+/gim, '</mtr>')

		        // .replace(/<mo>(.*?)<\/mo>/gi, function(reg, s1){
		        // 	if(/<([a-z]+)\s+[^>]*>.*?<\/\1>/.test(s1)){
		        // 		return _this.fixBase(reg, 'mo');
		        // 	}else{
		        // 		s1 = s1.replace(/</gim, '&lt;').replace(/>/gim, '&gt;');
		        // 		return '<mo>'+s1+'</mo>';
		        // 	}
		        // })

		        // .replace(/<mn>(.*?)<\/mn>/gi, function(reg, s1){
		        // 	if(/<([a-z]+)\s+[^>]*>.*?<\/\1>/.test(s1)){
		        // 		return _this.fixBase(reg, 'mn');
		        // 	}else{
		        // 		s1 = s1.replace(/</gim, '&lt;').replace(/>/gim, '&gt;');
		        // 		return '<mn>'+s1+'</mn>';
		        // 	}
		        // })

		        // .replace(/<mi>(.*?)<\/mi>/gi, function(reg, s1){
		        // 	if(/<([a-z]+)\s+[^>]*>.*?<\/\1>/.test(s1)){
		        // 		return _this.fixBase(reg, 'mi');
		        // 	}else{
		        // 		s1 = s1.replace(/</gim, '&lt;').replace(/>/gim, '&gt;');
		        // 		return '<mi>'+s1+'</mi>';
		        // 	}
		        // })

		        // .replace(/<mtext>(.*?)<\/mtext>/gi, function(reg, s1){
		        // 	if(/<([a-z]+)\s+[^>]*>.*?<\/\1>/.test(s1)){
		        // 		return _this.fixBase(reg, 'mtext');
		        // 	}else{
		        // 		s1 = s1.replace(/</gim, '&lt;').replace(/>/gim, '&gt;');
		        // 		return '<mtext>'+s1+'</mtext>';
		        // 	}
		        // })
		        .replace(/<([a-z]+)(\s*[^>]*)><mi>&nbsp;<\/mi><\/\1>/gi, function(reg, s1, s2){
					//空的mtd会导致空白的框出现
		            if(s1 === 'mtr'){
		            	return '<mtr'+(s2 ? ' '+s2: '')+'><mtd><mo>&nbsp;</mo></mtd></mtr>'
		            }
		            return reg;
		        })


		        mml.replace(/<mn>(.*?)<\/mn>/, function(reg, s1){
	            	if(/<[a-z]+[^>]*?>/.test(s1)){
	            		mml = _this.fixBase(mml, 'mn');
	            	}
	            })
	            mml.replace(/<mo>(.*?)<\/mo>/, function(reg, s1){
	            	if(/<[a-z]+[^>]*?>/.test(s1)){
	            		mml = _this.fixBase(mml, 'mo');
	            	}
	            })
	            mml.replace(/<mi>(.*?)<\/mi>/, function(reg, s1){
	            	if(/<[a-z]+[^>]*?>/.test(s1)){
	            		mml = _this.fixBase(mml, 'mi');
	            	}
	            })
	            mml.replace(/<mtext>(.*?)<\/mtext>/, function(reg, s1){
	            	if(/<[a-z]+[^>]*?>/.test(s1)){
	            		mml = _this.fixBase(mml, 'mtext');
	            	}
	            })
		return mml;
    },

    fixBase: function (str, type) {
        console.log('fixBase', type);
        try {
            var mathDoc = UM.htmlparser(str);
            var mns = mathDoc.getNodesByTagName(type);
            console.log('fixBase len', mns.length)
            for(var i = 0, len = mns.length; i < len; i++) {
                var mn = mns[i];
                var htmlstr = mn.toHtml().replace('<'+type+'>', '');
                if(/<[a-z]+[^>]*>/gim.test(htmlstr))
	                if(mn.children.length > 0){
	                    var childs = mn.children;
	                    var mnArr = [];
	                    for(var j = 0, len1 = childs.length; j < len1; j++){
	                        var item = childs[j];
	                        if(item.type === 'text'){
	                            var _mn = UM.uNode.createElement(type);
	                            _mn.appendChild($.extend({},item));
	                            mnArr.push(_mn);
	                        }else if(item.type === 'element'){
	                            mnArr.push($.extend({},item));
	                        }
	                    }

	                    if(mnArr.length){
	                        var mrow = UM.uNode.createElement('mrow');
	                        for(var l = 0, len3 = mnArr.length; l < len3; l++){
	                            mrow.appendChild(mnArr[l]);
	                        }
	                        mn.parentNode.replaceChild(mrow,mn);
	                    }

	                }
            }

            return mathDoc.toHtml();
        } catch(e) {
            console.log('fixBase error', e);
            return str;
        }

    },

    mathCorrect: function(mathml){
    	var root = UM.htmlparser(mathml);
    	// //下面的math标签都是需要，且只能有2个子元素
        var mfracs = root.getNodesByTagName('mfrac');
        var mroots = root.getNodesByTagName('mroot');
        var munders = root.getNodesByTagName('munder');
        var msups = root.getNodesByTagName('msup');
        var msubs = root.getNodesByTagName('msub');
        var movers = root.getNodesByTagName('mover');
        var msubsups = root.getNodesByTagName('msubsup');
        var munderovers = root.getNodesByTagName('munderover');
        this.doCheck2(mfracs, UM.uNode);
        this.doCheck2(mroots, UM.uNode);
        this.doCheck2(munders, UM.uNode);
        this.doCheck2(msups, UM.uNode);
        this.doCheck2(msubs, UM.uNode);
        this.doCheck2(movers, UM.uNode);
        this.doCheck3(msubsups, UM.uNode);
        this.doCheck3(munderovers, UM.uNode);

        return root.toHtml();
    },

    doCheck2: function(arr, doc){
        for (var i = 0; i < arr.length; i++) {
            var child = arr[i];

            if(child.children && child.children.length < 2){
                if(child.children.length < 1){//0个，不存在子元素
                    for (var i = 0; i < 2; i++) {
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                    };
                }else if(child.children.length == 1){//只有一个节点时
                    var first = child.children[0];
                    if(first.type !== 'element'){//不是元素节点
                        var text = ' ';
                        if(first.type === 'text'){//是文本节点
                            text = first.data;
                        }

                        child.removeChild(first);
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(text);
                        var mo1 = doc.createElement('mo');
                        var text1 = doc.createTextNode(' ');
                        mo.appendChild(text);
                        mo1.appendChild(text1);
                        child.appendChild(mo);
                        child.appendChild(mo1);
                    }else{
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                    }

                }
            }else if(child.children && child.children.length === 2){//正好2个，需要判断是否为文本节点
                var first = child.children[0];
                var second = child.children[1];
                if(first.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(first.type == 'text'){
                        var text = doc.createTextNode(first.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, first);
                }
                if(second.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(second.type == 'text'){
                        var text = doc.createTextNode(second.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, second);
                }
            }else if(child.children && child.children.length > 2){//多于2个
                var first = child.children[child.children.length - 1];
                if(first.type !== 'element'){
                    var text = ' ';
                    if(first.type === 'text'){
                        text = first.data;
                    }

                    var mo = doc.createElement('mo');
                    var textNode = doc.createTextNode(text);
                    mo.appendChild(textNode);
                    child.replaceChild(mo, first);
                    first = child.children[child.children.length - 1];
                }
                var mrow = doc.createElement('mrow');
                for (var i = 0; i < child.children.length - 1;) {
                    var item = child.children[i];
                    if(item.type !== 'element'){
                        var txt = ' ';
                        if(item.type === 'text'){
                            txt = item.data;
                        }
                        var mo = doc.createElement('mo');
                        var textNode = doc.createTextNode(txt);
                        mo.appendChild(textNode);
                        child.replaceChild(mo, child.children[i]);
                    }
                    mrow.appendChild(child.children[i]);
                };
                child.insertBefore(mrow, first);
            }
        };
    },

    doCheck3: function(arr, doc){
        for (var i = 0; i < arr.length; i++) {
            var child = arr[i];
            if(child.children && child.children.length < 3){
                if(child.children.length < 1){//0个，不存在子元素
                    for (var i = 0; i < 3; i++) {
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                    };
                }else if(child.children.length == 1){//只有一个节点时
                    var first = child.children[0];
                    if(first.type !== 'element'){//不是元素节点
                        var text = ' ';
                        if(first.type === 'text'){//是文本节点
                            text = first.data;
                        }

                        child.removeChild(first);
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(text);
                        var mo1 = doc.createElement('mo');
                        var text1 = doc.createTextNode(' ');
                        var mo2 = doc.createElement('mo');
                        var text2 = doc.createTextNode(' ');
                        mo.appendChild(text);
                        mo1.appendChild(text1);
                        mo2.appendChild(text2);
                        child.appendChild(mo);
                        child.appendChild(mo1);
                        child.appendChild(mo2);
                    }else{
                        var mo = doc.createElement('mo');
                        var text = doc.createTextNode(' ');
                        var mo2 = doc.createElement('mo');
                        var text2 = doc.createTextNode(' ');
                        mo.appendChild(text);
                        child.appendChild(mo);
                        mo2.appendChild(text2);
                        child.appendChild(mo2);
                    }

                }else if(child.children.length == 2){
                    var first = child.children[0];
                    var second = child.children[1];
                    if(first.type !== 'element'){
                        var mo = doc.createElement('mo');
                        if(first.type == 'text'){
                            var text = doc.createTextNode(first.data);
                            mo.appendChild(text);
                            
                        }else{
                            var text = doc.createTextNode(' ');
                            mo.appendChild(text);
                        }
                        child.replaceChild(mo, first);
                    }
                    if(second.type !== 'element'){
                        var mo = doc.createElement('mo');
                        if(second.type == 'text'){
                            var text = doc.createTextNode(second.data);
                            mo.appendChild(text);
                            
                        }else{
                            var text = doc.createTextNode(' ');
                            mo.appendChild(text);
                        }
                        child.replaceChild(mo, second);
                    }

                    var mo = doc.createElement('mo');
                    var text = doc.createTextNode(' ');
                    mo.appendChild(text);
                    child.appendChild(mo);
                }
            }else if(child.children && child.children.length === 3){//正好2个，需要判断是否为文本节点
                var first = child.children[0];
                var second = child.children[1];
                var third = child.children[2];
                if(first.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(first.type == 'text'){
                        var text = doc.createTextNode(first.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, first);
                }
                if(second.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(second.type == 'text'){
                        var text = doc.createTextNode(second.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, second);
                }

                if(third.type !== 'element'){
                    var mo = doc.createElement('mo');
                    if(third.type == 'text'){
                        var text = doc.createTextNode(third.data);
                        mo.appendChild(text);
                        
                    }else{
                        var text = doc.createTextNode(' ');
                        mo.appendChild(text);
                    }
                    child.replaceChild(mo, third);
                }

            }else if(child.children && child.children.length > 3){//多于2个
                var first = child.children[0];
                var second = child.children[1];
                if(first.type !== 'element'){
                    var text = ' ';
                    if(first.type == 'text'){
                        text = first.data;
                    }

                    var mo = doc.createElement('mo');
                    var textNode = doc.createTextNode(text);
                    mo.appendChild(textNode);
                    child.replaceChild(mo, first);
                }
                if(second.type !== 'element'){
                    var text = ' ';
                    if(second.type === 'text'){
                        text = second.data;
                    }

                    var mo = doc.createElement('mo');
                    var textNode = doc.createTextNode(text);
                    mo.appendChild(textNode);
                    child.replaceChild(mo, second);
                }
                var mrow = doc.createElement('mrow');
                for (var i = 2; i < child.children.length;i++) {
                    var item = child.children[i];
                    if(item.type !== 'element'){
                        var txt = ' ';
                        if(item.type === 'text'){
                            txt = item.data;
                        }
                        var mo = doc.createElement('mo');
                        var textNode = doc.createTextNode(txt);
                        mo.appendChild(textNode);
                        child.replaceChild(mo, item);
                    }
                    mrow.appendChild($.extend({}, item));
                };
                child.children.splice(2);
                child.appendChild(mrow);
            }
        };
    },

   	fixMathData: function(mml) {


   		var that = this;

   		var result = mml
   			.replace(/<math (.*) xmlns=/i, function(str, name) {
		        return str.replace(name, '');
		    })

		    .replace(/<(\S*?) [^>]*>.*?<\/\1>|<.*? \/>|<.*?>/gi, function(str, name) {
                return str.replace(/(>[^<]*)([\'])([^>]*<)/gi, function(str, s1, s2, s3) {
                    return s1 + '&#39;' + s3;
                });
            })

            .replace(/<ANNOTATION[^>]*>([^>]*)<\/ANNOTATION>/gi, '')

            .replace(/<\/?[^>]*>/gi, function(str) {
                return str.toLowerCase();
            })

            .replace(/<mtable frame="solid"><mrow><\/mrow><\/mtable>/gi, '<mo>□</mo>')

            .replace(/<mtable frame=\"solid\">(.*?)<\/mtable>/gi, function(str, content) {
                if (content.indexOf('<mtr>') == -1 && content.indexOf('<mtd>') == -1) {
                    return '<mtable frame="solid"><mtr><mtd>' + content + '</mtd></mtr></mtable>';
                } else {
                    return str;
                }
            })

            // .replace(/<mfenced>.*?<\/mfenced>/gi, function(str) {
            //     var _str = str;
            //     var text;

            //     text = _str.replace(/<\/?[^>]*>/gi, '');

            //     if (text.trim()) return str;
            //     return '<mfenced><mrow><mo> </mo><mo> </mo><mo> </mo><mo> </mo><mo> </mo></mrow></mfenced>';
            // })

            .replace(/(mathsize="[^"]*")/gi, '')

            .replace(/<mo> <\/mo>/gi, " ")
            .replace(/<mo><\/mo>/gi, "<mi></mi>")

            .replace(/<msup>(.*?)<\/msup>/gi, function(str, content) {
                var twoMore = false;
                var count = 0;

                // 如果有嵌套
                if (content.indexOf('<msup') > -1) {
                    return str;
                }

                var moMatch = content.match(/<mo/gi);
                var miMatch = content.match(/<mi/gi);
                var mnMatch = content.match(/<mn/gi);
                var mrowMatch = content.match(/<mrow/gi);
                var mtextMath = content.match(/<mtext/gi);

                if (moMatch) count += moMatch.length;
                if (miMatch) count += miMatch.length;
                if (mnMatch) count += mnMatch.length;
                if (mtextMath) count += mtextMath.length;

                if (mrowMatch || count > 1) {
                    return str;
                } else {
                    return str.replace('<msup>', '').replace('</msup>', '');
                }
            })

            .replace(/<msub>(.*?)<\/msub>/gi, function(str, content) {
                var twoMore = false;
                var count = 0;

                // 如果有嵌套
                if (content.indexOf('<msub') > -1) {
                    return str;
                }

                var moMatch = content.match(/<mo/gi);
                var miMatch = content.match(/<mi/gi);
                var mnMatch = content.match(/<mn/gi);
                var mrowMatch = content.match(/<mrow/gi);
                var mtextMath = content.match(/<mtext/gi);

                if (moMatch) count += moMatch.length;
                if (miMatch) count += miMatch.length;
                if (mnMatch) count += mnMatch.length;
                if (mtextMath) count += mtextMath.length;

                if (mrowMatch || count > 1) {
                    return str;
                } else {
                    return str.replace('<msub>', '').replace('</msub>', '');
                }
            })

            .replace(/<mtext>([^>]*)<\/mtext>/gi, function(str, name) {
                if (!name) return str;

                var list = name.match(/&#x([a-zA-Z0-9]+);/gi);
                var gbkCodes = [];
                var bufferCodes;

                var result = '';

                if (!list || !list.length) {
                    return str;
                }

                if (list.length === 1 && (list[0].substr(3, 2) < "A1" || list[0].substr(3, 2) > "FE")) {
                    return str;
                }

                // 如果是空格的话。
                var isWhitespace = list.every(function(element, index, array) {
                    return element === "&#x00A0;";
                });

                if (isWhitespace) {
                    return str;
                }

                list.forEach(function(item, index) {
                    var byte1 = item.substr(3, 2);
                    var byte2 = item.substr(5, 2);
                    gbkCodes.push(byte1);
                    gbkCodes.push(byte2)
                });

                var getBufferCodes = function() {
                    var byte1 = gbkCodes.splice(0, 1)[0];
                    var byte2;

                    if (byte1 === '00') {
                        byte1 = gbkCodes.splice(0, 1)[0];
                        gbkCodes.splice(0, 1);
                        byte2 = gbkCodes.splice(0, 1)[0];
                    } else {
                        byte2 = gbkCodes.splice(0, 1)[0];
                    }

                    return ['0x' + byte1, '0x' + byte2];
                };

                var decodeCodes = function() {
                    var codes = getBufferCodes();
                    var _str = iconv.decode(new Buffer(codes), 'GBK');
                    result += _str;

                    if (gbkCodes.length) decodeCodes();
                };

                decodeCodes();

                return str.replace(name, result);
            })

            .replace(/<mstyle mathsize="normal" mathvariant="bold">(.*?)<\/mstyle>/gi, function(match, s1) {
                 return s1;
            })
            result.replace(/<mn>(.*?)<\/mn>/, function(reg, s1){
            	if(/<[a-z]+[^>]*?>/.test(s1)){
            		result = that.fixBase(result, 'mn');
            	}
            })
            result.replace(/<mo>(.*?)<\/mo>/, function(reg, s1){
            	if(/<[a-z]+[^>]*?>/.test(s1)){
            		result = that.fixBase(result, 'mo');
            	}
            })
            result.replace(/<mi>(.*?)<\/mi>/, function(reg, s1){
            	if(/<[a-z]+[^>]*?>/.test(s1)){
            		result = that.fixBase(result, 'mi');
            	}
            })
            result.replace(/<mtext>(.*?)<\/mtext>/, function(reg, s1){
            	if(/<[a-z]+[^>]*?>/.test(s1)){
            		result = that.fixBase(result, 'mtext');
            	}
            })
            // if(/<mn>(.*?)<\/mn>/gim.test(result))
		return result;
   	},
	getChildIndex: function(parent, vTB) {
		var v9B = parent.firstChild;
		var i = 0;
		while (v9B != null) {
			if (v9B == vTB) return i;
			v9B = v9B.nextSibling;
			++i;
		};
		return -1;
	},
	isToolbarComponent: function(element) {
		element = element.parentNode;
		while (element != null) {
			if (com.wiris.js.JsDOMUtils.v2U(element, "wrs_panelContainer")) return true;
			element = element.parentNode;
		};
		return false;
	},
	focusComponent: function(vl4) {
		if (vl4.nodeName.toLowerCase() == "button") vl4.focus();
		else if (vl4.firstChild != null && vl4.firstChild.nodeName.toLowerCase() == "select") {
			vl4.focus();
			setTimeout(function() {
				vl4.firstChild.focus();
			}, 1);
		}
	},
	getActualComponent: function(element) {
		if (element.nodeName.toLowerCase() == "select") return element.parentNode;
		return element;
	},
	onKeyDown: function(e) {
		var target = com.wiris.js.JsDOMUtils.vQU(e);
		// alert(e.keyCode);
		if (e.keyCode == 9) {
			if (e.shiftKey) {
				if (target == this.formulaDisplay.vBV) {
					com.wiris.js.JsDOMUtils.vTU(e);
					var vl4 = this.toolbar.body.childNodes[this.toolbar.vLS].firstChild.firstChild.firstChild.firstChild.firstChild;
					this.focusComponent(vl4);
				} else if (com.wiris.js.JsDOMUtils.vFU(this.toolbar.vCV, target)) {
					this.toolbar.vCV.firstChild.focus();
					var tabIndex = this.getChildIndex(this.toolbar.vCV, target);
					this.editorModel.getToolbarModel().vd6(tabIndex);
				} else if (this.isToolbarComponent(target)) {
					if (!com.wiris.js.JsDOMUtils.vFU(this.toolbar.body, target)) this.toolbar.vDV.vIU();
					if (this.toolbar.vKS.length > 1) {
						com.wiris.js.JsDOMUtils.vTU(e);
						this.toolbar.vCV.childNodes[this.toolbar.vLS].focus();
					}
				}
			} else if (com.wiris.js.JsDOMUtils.vFU(this.toolbar.vCV, target)) {
				com.wiris.js.JsDOMUtils.vTU(e);
				var vl4 = this.toolbar.body.childNodes[this.toolbar.vLS].firstChild.firstChild.firstChild.firstChild.firstChild;
				this.focusComponent(vl4);
			} else if (this.isToolbarComponent(target)) {
				com.wiris.js.JsDOMUtils.vTU(e);
				if (!com.wiris.js.JsDOMUtils.vFU(this.toolbar.body, target)) this.toolbar.vDV.vIU();
				this.formulaDisplay.vBV.focus();
			}
		} else if (!this.rightToLeft && e.keyCode == 37 || this.rightToLeft && e.keyCode == 39) {
			var vEV = this.getChildIndex(this.toolbar.vCV, target);
			if (vEV != -1) {
				com.wiris.js.JsDOMUtils.vTU(e);
				var vFV = this.toolbar.vCV.childNodes[vEV].previousSibling;
				while (vFV != null && vFV.nodeName.toLowerCase() != "button") vFV = vFV.previousSibling;
				if (vFV != null) vFV.focus();
			} else if (this.isToolbarComponent(target)) {
				com.wiris.js.JsDOMUtils.vTU(e);
				if (target.nodeName.toLowerCase() == "button" && target.parentNode.nodeName.toLowerCase() != "td") this.focusComponent(target.previousSibling.firstChild.firstChild.lastChild.firstChild);
				else {
					var vl4 = this.getActualComponent(target);
					if (vl4.parentNode.previousSibling != null) this.focusComponent(vl4.parentNode.previousSibling.firstChild);
					else {
						var vGV = vl4.parentNode.parentNode.parentNode.parentNode.previousSibling;
						if (vGV != null) {
							if (vGV.previousSibling.nodeName.toLowerCase() == "button") vGV.previousSibling.focus();
							else {
								var vHV = this.getChildIndex(vl4.parentNode.parentNode.parentNode, vl4.parentNode.parentNode);
								var vIV = vGV.previousSibling.firstChild;
								if (vIV.childNodes.length <= vHV) vHV = vIV.childNodes.length - 1;
								this.focusComponent(vIV.childNodes[vHV].lastChild.firstChild);
							}
						}
					}
				}
			}
		} else if (e.keyCode == 38) {
			if (com.wiris.js.JsDOMUtils.vFU(this.toolbar.vCV, target)) com.wiris.js.JsDOMUtils.vTU(e);
			else if (this.isToolbarComponent(target)) {
				if (!(target.nodeName.toLowerCase() == "button" && target.parentNode.nodeName.toLowerCase() != "td")) {
					if (target.nodeName.toLowerCase() != "select") {
						com.wiris.js.JsDOMUtils.vTU(e);
						var vl4 = this.getActualComponent(target);
						var vJV = this.getChildIndex(vl4.parentNode.parentNode.parentNode, vl4.parentNode.parentNode);
						if (vJV > 0) {
							var vKV = this.getChildIndex(vl4.parentNode.parentNode, vl4.parentNode);
							this.focusComponent(vl4.parentNode.parentNode.parentNode.childNodes[vJV - 1].childNodes[vKV].firstChild);
						}
					}
				}
			}
		} else if (!this.rightToLeft && e.keyCode == 39 || this.rightToLeft && e.keyCode == 37) {
			var vEV = this.getChildIndex(this.toolbar.vCV, target);
			if (vEV != -1) {
				com.wiris.js.JsDOMUtils.vTU(e);
				var vLV = this.toolbar.vCV.childNodes[vEV].nextSibling;
				while (vLV != null && vLV.nodeName.toLowerCase() != "button") vLV = vLV.nextSibling;
				if (vLV != null) vLV.focus();
			} else if (this.isToolbarComponent(target)) {
				com.wiris.js.JsDOMUtils.vTU(e);
				if (target.nodeName.toLowerCase() == "button" && target.parentNode.nodeName.toLowerCase() != "td") this.focusComponent(target.nextSibling.nextSibling.firstChild.firstChild.firstChild.firstChild);
				else {
					var vl4 = this.getActualComponent(target);
					if (vl4.parentNode.nextSibling != null) this.focusComponent(vl4.parentNode.nextSibling.firstChild);
					else {
						var vMV = vl4.parentNode.parentNode.parentNode.parentNode.nextSibling;
						if (vMV != null) {
							if (vMV.nodeName.toLowerCase() == "span") {
								var vHV = this.getChildIndex(vl4.parentNode.parentNode.parentNode, vl4.parentNode.parentNode);
								var vNV = vMV.nextSibling.firstChild;
								if (vNV.childNodes.length <= vHV) vHV = vNV.childNodes.length - 1;
								this.focusComponent(vNV.childNodes[vHV].firstChild.firstChild);
							} else if (vMV.nodeName.toLowerCase() == "button") vMV.focus();
						}
					}
				}
			}
		} else if (e.keyCode == 40) {
			if (com.wiris.js.JsDOMUtils.vFU(this.toolbar.vCV, target)) com.wiris.js.JsDOMUtils.vTU(e);
			else if (this.isToolbarComponent(target)) {
				if (target.nodeName.toLowerCase() == "button" && target.parentNode.nodeName.toLowerCase() != "td") {
					com.wiris.js.JsDOMUtils.vTU(e);
					target.click();
					target.vOV();
				} else if (target.nodeName.toLowerCase() != "select") {
					com.wiris.js.JsDOMUtils.vTU(e);
					var vl4 = this.getActualComponent(target);
					var vJV = this.getChildIndex(vl4.parentNode.parentNode.parentNode, vl4.parentNode.parentNode);
					if (vJV < vl4.parentNode.parentNode.parentNode.childNodes.length - 1) {
						var vKV = this.getChildIndex(vl4.parentNode.parentNode, vl4.parentNode);
						var vPV = vl4.parentNode.parentNode.parentNode.childNodes[vJV + 1].childNodes[vKV];
						if (vPV.firstChild != null) this.focusComponent(vPV.firstChild);
					}
				}
			}
		} else {
			var keyCode = e.keyCode;
			if (e.charCode != null) keyCode = e.charCode;
			var isMatch = this.toolbar.handleKeyEvent(e.keyCode, e.shiftKey, e.ctrlKey, e.altKey, e);

			isMatch && com.wiris.js.JsDOMUtils.vTU(e);
		}
	},
	getElement: function() {
		if (this.element != null) return this.element;
		this.element = js.Lib.document.createElement("div");
		com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_editor");
		this.toolbarElement = this.toolbar.getElement();
		this.toolbarElement.style.display = "none";
		this.element.appendChild(this.toolbarElement);
		this.element.appendChild(this.formulaDisplay.getElement());
		// 解决C001的输入是公式消失的问题。
		// var v9V = new haxe.Timer(100);
		// v9V.run = vNU(this, this.updateGUI);
		this.toolbar.vDV = new com.wiris.e1_11(this.element);
		var self = this;
		// this.onIsReady(function() {
		// 	self.toolbarElement.style.display = "block";
		// });
		com.wiris.js.JsDOMUtils.addEventListener(this.element, "keydown", vNU(this, this.onKeyDown));
		this.element.setAttribute("role", "application");
		this.tickContainer = null;
		this.element.vQV = this;
		this.setAutosize(this.autosize);
		return this.element;
	},

	getHtml: function() {
        this.editorModel.clean();

        var node = this.formulaDisplay.vPN;
        var width = node.style.width;
        var height = node.style.height;
        var verticalAlign = node.style.verticalAlign;

        this._fixNode(node);

        var header = '<span math-model="bbk" style="position:relative; display: inline-block; zoom: 1; *display: inline;' + ' width:' + width + '; height:' + height + '; vertical-align:' + verticalAlign + ';">',
            footer = '</span>';

        var content = node.innerHTML;

        return header + content + footer;
    },

    _fixNode: function(node) {
        var fixMath = '⎛';
        var fixMath2 = '';
        var fixMath3 = '⎪';
        var fixMath4 = '⎨';
        var fixMath5 = '⎧';
        var fixMath6 = '⎩';

        var nodeList = Array.prototype.slice.call(node.childNodes);
        nodeList.forEach(function(span, index) {
            var html = span.innerHTML;
            if (html === fixMath) {
                var addContent = ' <span style="visibility: hidden;">' + fixMath + '</span>';
                span.innerHTML = fixMath + addContent;
            } else if (html === fixMath2 || html === fixMath3 || html === fixMath4 || html === fixMath5 || html === fixMath6) {
                span.style.fontSize = parseInt(span.style.fontSize, 10) + 1 + 'px';
            }
        });

    },
	getEditorModel: function() {
		return this.editorModel;
	},
	focus: function() {
		this.formulaDisplay.focus();
	},
	contextTabAdded: function(vc3, tab) {},
	componentUpdated: function(vc3, vl4) {},
	componentFired: function(vc3, vl4) {
		if (vl4.vbR() == null) {
			if (this.browser.vhS()) this.formulaDisplay.focus();
			else {
				var self = this;
				setTimeout(function() {
					self.formulaDisplay.focus();
				}, 1);
			}
		}
	},
	blur: function() {
		this.formulaDisplay.blur();
	},
	actionWithParam: function(action, vo4) {
		this.editorModel.actionWithParam(action, vo4);
	},
	action: function(action) {
		this.editorModel.action(action);
	},
	autosize: null,
	rightToLeft: null,
	tickContainer: null,
	toolbarElement: null,
	toolbar: null,
	resourceLoader: null,
	formulaDisplay: null,
	element: null,
	editorModel: null,
	browser: null,
	__class__: com.wiris.js.JsEditor
};
