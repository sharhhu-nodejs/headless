com.wiris.editor.EditorModel = v91["com.wiris.editor.EditorModel"] = function(vF3, actions, vG3, parameters) {
	this.actions = actions;
	this.eventTransactionSemaphore = 0;
	this.listeners = new Array();
	this.typeListeners = {};
	this.remainingCalls = 0;
	this.toolbar = new com.wiris.e1_w();
	this.registeredToolbars = new HaxeHash();
	this.registeredToolbars.set("general", vF3);
	this.formulaModel = new com.wiris.editor.formula.FormulaModel();
	var vH3 = true;
	this.setDefaultStyles(this.getDesiredDefaultStyles());
	this.transformationGrammarURL = null;
	this.transformationGrammarResource = null;
	this.temporalMathML = null;
	this.validators = null;
	this.rtlLanguages = com.wiris.editor.EditorModel.RTL_LANGUAGES;
	this.ltrLanguages = com.wiris.editor.EditorModel.LTR_LANGUAGES;
	this.arabicIndicLanguages = com.wiris.editor.EditorModel.ARABIC_INDIC_LANGUAGES;
	this.easternArabicIndicLanguages = com.wiris.editor.EditorModel.EASTERN_ARABIC_INDIC_LANGUAGES;
	this.europeanLanguages = com.wiris.editor.EditorModel.EUROPEAN_LANGUAGES;
	this.initParameters = new HaxeHash();
	if (parameters != null) {
		if (parameters.get("toolbar") != null) vH3 = false;
		this.setParams(parameters);
	};
	if (vH3) this.toolbar.vI3(vF3);
	this.toolbar.vJ3(this);
	var vK3 = new com.wiris.e1_8(this, vG3);
	this.addEditorListener(vK3);
	this.toolbar.vJ3(vK3);
	this.transformationReceived = null;
	this.transformer = new com.wiris.e1_F(this, this.formulaModel);
};
com.wiris.editor.EditorModel.__name__ = ["com", "wiris", "editor", "EditorModel"];
com.wiris.editor.EditorModel.__interfaces__ = [com.wiris.e1_4, com.wiris.e1_5, com.wiris.editor.EditorModelPrivateInterface];
com.wiris.editor.EditorModel.getNewInstance = function() {
	var vL3 = com.wiris.editor.EditorModel.getNewInstanceWithParams(null);
	// com.wiris.system.ServiceProvider.addObject(vL3);
	return vL3;
};
com.wiris.editor.EditorModel.getNewInstanceWithParams = function(parameters) {
	var vM3 = null;
	if (parameters == null || !("false" == parameters.get("loadEditorDefinition"))) {
		var resourceLoader = new com.wiris.system.ResourceLoader();
		vM3 = resourceLoader.loadResource("editor_definition.xml");
	};
	if (vM3 == null) return new com.wiris.editor.EditorModel(new com.wiris.e1_w(), new HaxeHash(), null, parameters);
	return com.wiris.editor.EditorModel.getNewInstanceFromJSON(vM3, parameters);
	// var editorDefinition = com.wiris.util.xml.WXmlUtils.vN3(vM3);
	// return com.wiris.editor.EditorModel.getNewInstanceFromXML(editorDefinition, parameters);
};
com.wiris.editor.EditorModel.getNewInstanceFromXML = function(editorDefinition, parameters) {
	if (editorDefinition == null) return new com.wiris.editor.EditorModel(new com.wiris.e1_w(), new HaxeHash(), null, parameters);
	editorDefinition = editorDefinition.firstChild();
	var vO3 = com.wiris.util.xml.WXmlUtils.getElementsByTagName(editorDefinition.iterator(), "toolbar");
	if (vO3.length == 0) throw "There is not a \"toolbar\" node in the editor definition.";
	var vP3 = com.wiris.util.xml.WXmlUtils.getElementsByTagName(editorDefinition.iterator(), "images");
	if (vP3.length == 0) throw "There is not an \"images\" node in the editor definition.";
	var vG3 = com.wiris.e1_p.getNewInstanceFromXML(vP3[0]);
	var vQ3 = com.wiris.util.xml.WXmlUtils.getElementsByTagName(editorDefinition.iterator(), "actions");
	if (vQ3.length == 0) throw "There is not a \"actions\" node in the editor definition.";
	var vR3 = vQ3[0];
	var actions = com.wiris.editor.ModelFactory.vS3(vR3, vG3);
	var toolbar = com.wiris.editor.ModelFactory.vT3(vO3[0], actions, vG3, parameters);
	return new com.wiris.editor.EditorModel(toolbar, actions, vG3, parameters);
};
com.wiris.editor.EditorModel.getNewInstanceFromJSON = function(vM3, parameters) {
	// var vU3 = com.wiris.system.JSONUtils.vV3(vM3);
	var vW3 = js.Boot.vX3(com.wiris.system.JSONUtils.serialize(vM3), HaxeHash);
	var i = HxOverrides.iter(js.Boot.vX3(vW3.get("childs"), Array));
	var vG3 = null;
	var vY3 = null;
	var vZ3 = null;
	while (i.hasNext()) {
		var node = js.Boot.vX3(i.next(), HaxeHash);
		var nodeName = js.Boot.vX3(node.get("name"), String);
		if (nodeName == "images") vG3 = new com.wiris.e1_p(node);
		else if (nodeName == "actions") vY3 = node;
		else if (nodeName == "toolbar") vZ3 = node;
	};
	var actions = com.wiris.editor.ModelFactory.va3(vY3, vG3);
	var toolbar = com.wiris.editor.ModelFactory.vb3(vZ3, actions, vG3, parameters);
	return new com.wiris.editor.EditorModel(toolbar, actions, vG3, parameters);
};
com.wiris.editor.EditorModel.prototype = {
	sectionUpdated: function(vc3, tabIndex, vd3) {},
	setAttributes: function(box, ve3) {
		this.formulaModel.setAttributes(box.vf3(), ve3);
		this.dispatchEvents();
	},
	getFormulaModel: function() {
		return this.formulaModel;
	},
	getTopEditorBox: function() {
		return new com.wiris.e1_D(this, this.formulaModel.vf3());
	},
	getCurrentEditorBox: function() {
		var box = this.formulaModel.vg3().vf3();
		return new com.wiris.e1_D(this, box);
	},
	addValidator: function(vh3) {
		if (this.validators == null) this.validators = new Array();
		this.validators.push(vh3);
	},
	pasteMathML: function(vi3) {
		this.formulaModel.pasteMathML(vi3);
		this.dispatchEvents();
	},
	getSelectionMathML: function() {
		return this.formulaModel.getSelectionMathML();
	},
	deleteSelection: function() {
		this.formulaModel.deleteSelection();
		this.dispatchEvents();
	},
	getFormulaLength: function() {
		return this.formulaModel.getLength();
	},
	notifyTransformation: function(vj3) {
		this.transformationReceived = vj3;
		this.dispatchEvents();
	},
	getErrorRectangles: function() {
		return this.formulaModel.getErrorRectangles();
	},
	setTransformationGrammarResource: function(vk3) {
		this.transformationGrammarResource = vk3;
	},
	setTransformationGrammarURL: function(url) {
		this.transformationGrammarURL = url;
	},
	getTransformation: function() {
		this.transformer.getTransformation(this.transformationGrammarURL, this.transformationGrammarResource);
	},
	setEmptyScriptBoxColor: function(c) {
		this.formulaModel.setEmptyScriptBoxColor(c);
	},
	getEmptyScriptBoxColor: function() {
		return this.formulaModel.getEmptyScriptBoxColor();
	},
	setEmptyBoxColor: function(c) {
		this.formulaModel.setEmptyBoxColor(c);
	},
	getEmptyBoxColor: function() {
		return this.formulaModel.getEmptyBoxColor();
	},
	updateBounds: function(x, vQ1, width, height, margin, vl3) {
		x -= margin;
		vQ1 -= margin;
		var vm3 = new Array();
		vm3[0] = x;
		vm3[1] = vQ1;
		var vn3 = this.getCaretRectangle();
		if (vn3 == null) return vm3;
		if (vn3.x < x + margin) {
			vm3[0] = vn3.x - margin;
			if (vl3) vm3[0] -= Math.floor(width / 4);
		} else if (vn3.x + vn3.width > x + width - margin) {
			vm3[0] = vn3.x + vn3.width - width + margin;
			if (vl3) vm3[0] += Math.floor(width / 4);
		};
		if (vn3.vQ1 < vQ1 + margin) vm3[1] = vn3.vQ1 - margin;
		else if (vn3.vQ1 + vn3.height > vQ1 + height - margin) vm3[1] = vn3.vQ1 + vn3.height - height + margin;
		vm3[0] += margin;
		vm3[1] += margin;
		return vm3;
	},
	toolbarReseted: function(vc3) {},
	isReady: function() {
		return this.remainingCalls == 0;
	},
	setToolbar: function(vo3) {
		if (vo3 == false) return; //
		if (vo3 == null) throw "Toolbar modification XML is empty.";
		var vp3 = HxOverrides.substr(vo3, 0, 1);
		if ("<" == vp3) com.wiris.editor.ModelFactory.vq3(this, this.toolbar, vo3);
		else if (this.toolbarExists(vo3)) {
			this.toolbar.vr3 = false;
			this.toolbar.empty();
			this.toolbar.vI3(this.registeredToolbars.get(vo3));
			this.toolbar.vr3 = true;
			this.toolbar.vs3();
		} else throw "Toolbar \"" + vo3 + "\" does not exist.";
	},
	urlAnswerReceived: function(url, parameters, vt3) {},
	serviceAnswerReceived: function(serviceName, parameters, vt3) {
		this.formulaModel.vu3(false);
		this.formulaModel.vv3(com.wiris.util.xml.WXmlUtils.vN3(vt3));
		--this.remainingCalls;
		this.dispatchEvents();
	},
	registerToolbar: function(name, xml) {
		var toolbar = new com.wiris.e1_w();
		com.wiris.editor.ModelFactory.vq3(this, toolbar, xml);
		this.registeredToolbars.set(name, toolbar);
	},
	toolbarExists: function(name) {
		if (this.registeredToolbars.exists(name)) return true;
		var resourceLoader = new com.wiris.system.ResourceLoader();
		var xml = resourceLoader.loadResource("toolbar_" + name);
		if (xml == null) return false;
		this.registerToolbar(name, xml);
		return true;
	},
	setMode: function(mode) {
		if ("visualization" == mode) this.formulaModel.setMode(com.wiris.editor.formula.FormulaModel.vw3);
		else if ("icons" == mode) this.formulaModel.setMode(com.wiris.editor.formula.FormulaModel.vx3);
		else this.formulaModel.setMode(com.wiris.editor.formula.FormulaModel.vy3);
		this.dispatchEvents();
	},
	setDisplay: function(display) {
		if ("inline" == display) this.formulaModel.setDisplay(com.wiris.editor.formula.FormulaModel.vz3);
		else this.formulaModel.setDisplay(com.wiris.editor.formula.FormulaModel.v04);
		this.dispatchEvents();
	},
	normalizeLanguage: function(language) {
		if (language == null) return "en";
		language = language.toLowerCase();
		language = StringTools.replace(language, "-", "_");
		if (language.length > 2 && language.length != 5) language = HxOverrides.substr(language, 0, 2);
		return language;
	},
	commaSeparatedValuesToArrobaSeparatedValues: function(v14, v24) {
		var i = HxOverrides.iter(v14.split(","));
		var v34 = "@";
		while (i.hasNext()) {
			var value = StringTools.trim(i.next());
			if (v24) value = this.normalizeLanguage(value);
			v34 += value + "@";
		};
		return v34;
	},
	listContainsLanguage: function(list, language, v44) {
		if (v44.indexOf("@" + language + "@") >= 0) return false;
		if (list.indexOf("@" + language + "@") >= 0) return true;
		if (language.length > 2 && list.indexOf("@" + HxOverrides.substr(language, 0, 2) + "@") >= 0) return true;
		return false;
	},
	setParam: function(vJ1, value) {
		this.initParameters.set(vJ1, value);
		if ("mml" == vJ1) this.setMathML(value);
		else if ("toolbar" == vJ1) this.setToolbar(value);
		else if ("mode" == vJ1) this.setMode(value);
		else if ("display" == vJ1) this.setDisplay(value);
		else if ("grammarURL" == vJ1) this.setTransformationGrammarURL(value);
		else if ("grammarResource" == vJ1) this.setTransformationGrammarResource(value);
		else if ("reservedWords" == vJ1) this.formulaModel.v54(value);
		else if ("forceReservedWords" == vJ1) this.formulaModel.v64("true" == value);
		else if ("reservedWordsColor" == vJ1) this.formulaModel.v74(value);
		else if ("language" == vJ1) {
			value = this.normalizeLanguage(value);
			if (this.formulaModel.isEmpty()) {
				if (this.listContainsLanguage(this.rtlLanguages, value, this.ltrLanguages)) this.formulaModel.v84(true);
				else this.formulaModel.v84(false);
			};
			if (this.listContainsLanguage(this.arabicIndicLanguages, value, this.europeanLanguages)) this.formulaModel.v94(com.wiris.editor.formula.FormulaModel.vA4, true);
			else if (this.listContainsLanguage(this.easternArabicIndicLanguages, value, this.europeanLanguages)) this.formulaModel.v94(com.wiris.editor.formula.FormulaModel.vB4, true);
			else this.formulaModel.v94(com.wiris.editor.formula.FormulaModel.vC4, true);
		} else if ("rtlLanguages" == vJ1) this.rtlLanguages = this.commaSeparatedValuesToArrobaSeparatedValues(value, true);
		else if ("ltrLanguages" == vJ1) this.ltrLanguages = this.commaSeparatedValuesToArrobaSeparatedValues(value, true);
		else if ("arabicIndicLanguages" == vJ1) this.arabicIndicLanguages = this.commaSeparatedValuesToArrobaSeparatedValues(value, true);
		else if ("easternArabicIndicLanguages" == vJ1) this.easternArabicIndicLanguages = this.commaSeparatedValuesToArrobaSeparatedValues(value, true);
		else if ("europeanLanguages" == vJ1) this.europeanLanguages = this.commaSeparatedValuesToArrobaSeparatedValues(value, true);
		else if ("allowInnerNewLines" == vJ1) this.formulaModel.vD4("true" == value);
		else if ("styles" == vJ1) {
			var vE4 = js.Boot.vX3(com.wiris.e1_81.decode(value), HaxeHash);
			var vF4 = new HaxeHash();
			var i = vE4.keys();
			while (i.hasNext()) {
				var selector = i.next();
				if (selector == "math") {
					var styles = js.Boot.vX3(vE4.get(selector), HaxeHash);
					var vG4 = new HaxeHash();
					var vH4 = styles.keys();
					while (vH4.hasNext()) {
						var vI4 = vH4.next();
						var vJ4 = js.Boot.vX3(styles.get(vI4), String);
						vG4.set(vI4, vJ4);
					};
					this.formulaModel.vK4(vG4);
					this.dispatchEvents();
				} else {
					var styles = js.Boot.vX3(vE4.get(selector), HaxeHash);
					var vL4 = new com.wiris.e1_2();
					var vM4 = new HaxeHash();
					var vH4 = styles.keys();
					while (vH4.hasNext()) {
						var vI4 = vH4.next();
						var vJ4 = js.Boot.vX3(styles.get(vI4), String);
						if (com.wiris.editor.EditorModel.ALLOWED_STYLE_PARAMS.indexOf("@" + vI4 + "@") >= 0) vM4.set(com.wiris.util.css.CSSUtils.vN4(vI4), vJ4);
					};
					vL4.setParams(vM4);
					vF4.set(selector, vL4);
				}
			};
			this.formulaModel.vO4(vF4);
			this.dispatchEvents();
		} else if ("globalStyles" == vJ1) this.formulaModel.vP4("true" == value);
	},
	getParam: function(vJ1) {
		if (this.initParameters.exists(vJ1)) return this.initParameters.get(vJ1);
		return null;
	},
	setParams: function(parameters) {
		com.wiris.e1_9.parse(parameters);
		var style = com.wiris.e1_2.vF2(this.getDefaultStyles());
		style.setParams(parameters);
		this.setDefaultStyles(style);
		if (parameters.exists("language")) {
			if (parameters.exists("rtlLanguages")) this.setParam("rtlLanguages", parameters.get("rtlLanguages"));
			if (parameters.exists("ltrLanguages")) this.setParam("ltrLanguages", parameters.get("ltrLanguages"));
			if (parameters.exists("arabicIndicLanguages")) this.setParam("arabicIndicLanguages", parameters.get("arabicIndicLanguages"));
			if (parameters.exists("easternArabicIndicLanguages")) this.setParam("easternArabicIndicLanguages", parameters.get("easternArabicIndicLanguages"));
			if (parameters.exists("europeanLanguages")) this.setParam("europeanLanguages", parameters.get("europeanLanguages"));
		};
		var i = parameters.keys();
		while (i.hasNext()) {
			var vJ1 = i.next();
			var value = parameters.get(vJ1);
			this.setParam(vJ1, value);
		}
	},
	getCurrentActualStyles: function() {
		return this.formulaModel.getCurrentActualStyles();
	},
	getCurrentStyles: function() {
		return this.formulaModel.getCurrentStyles();
	},
	setSelectionStyles: function(s) {
		var vk2 = com.wiris.e1_2.vF2(s);
		this.formulaModel.vQ4(vk2);
		this.dispatchEvents();
	},
	getDesiredDefaultStyles: function() {
		return this.formulaModel.getDesiredDefaultStyles();
	},
	getDefaultStyles: function() {
		return this.formulaModel.getDefaultStyles();
	},
	setDefaultStyles: function(c) {
		this.formulaModel.setDefaultStyles(c);
		this.dispatchEvents();
	},
	getCaretLength: function() {
		return this.formulaModel.getCaretLength();
	},
	getCaret: function() {
		return this.formulaModel.getCaret();
	},
	tabUpdated: function(vc3, index) {},
	tabRemoved: function(vc3, index) {},
	tabChanged: function(vc3, from, to) {},
	standardToFormula: function(vR4) {
		var vS4 = new com.wiris.e1_J();
		var vT4 = com.wiris.util.xml.WXmlUtils.vN3(vR4);
		return vS4.standardToFormula(vT4).toString();
	},
	setMathML: function(vi3) {
		this.temporalMathML = vi3;
		this.formulaModel.vu3(true);
		++this.remainingCalls;
		var parameters = new HaxeHash();
		parameters.set("mml", vi3);

		// 这个很重要，跳过serviceprovider，直接渲染界面。
		this.serviceAnswerReceived(null, null, vi3);
		// com.wiris.system.ServiceProvider.vU4("mathml2internal", parameters, this);
	},
	clean: function() {
      	var removeNode = function(nodeList, match) {
	        // 缓存节点到一个数组里面，这样在做移除节点操作的时候就比较方便。
	        var temp = Array.prototype.slice.call(nodeList);
	        for (var i = 0, len = temp.length; i < len; i++) {
	          var node = temp[i];
	          var isMatch = true;

	          if (match && Object.prototype.toString.call(match) === '[object Object]') {
	            for (var name in match) {
	              var value = match[name];
	              if (node.style[name] !== value) {
	                isMatch = false;
	              }
	            }
	          }

	          isMatch && node.parentNode.removeChild(node);
	        }
        }

        removeNode(document.getElementsByClassName('formulaTemp1'));

		removeNode(document.getElementsByClassName('bbk_vertical'), {
			background: 'rgb(9, 123, 220)'
		});

		removeNode(document.getElementsByClassName('bbk_horizontal'), {
			background: 'rgb(0, 100, 0)'
		});

		// 解决上下标有蓝色挑挑的问题。
		removeNode(document.getElementsByClassName('bbk_horizontal'), {
			'background-color': 'rgb(106, 164, 106)'
		});

		removeNode(document.getElementsByClassName('bbk_horizontal'), {
			'background-color': 'rgb(0, 162, 232)'
		});
	},
	setCaret: function(vV4, length) {
		this.formulaModel.setCaret(vV4, length);
		this.formulaModel.vW4(false);
		this.dispatchEvents();
	},
	selectWord: function(vX4) {
		this.formulaModel.selectWord(vX4);
		this.dispatchEvents();
	},
	reset: function() {
		this.formulaModel.reset();
		this.dispatchEvents();
	},
	registerAction: function(action) {
		this.actions.set(action.id, action);
	},
	recalcClient: function(vY4) {
		this.formulaModel.recalcClient(vY4);
	},
	recalc: function(vY4) {
		this.formulaModel.recalc(vY4);
	},
	paintClient: function(vY4) {
		this.formulaModel.paintClient(vY4);
		this.dispatchEvents();
	},
	paint: function(vY4) {
		this.formulaModel.paint(vY4);
		this.dispatchEvents();
	},
	isRecalcNeeded: function() {
		return this.formulaModel.isRecalcNeeded();
	},
	isFormulaEmpty: function() {
		return this.formulaModel.isEmpty();
	},
	insertText: function(text) {
		this.formulaModel.insertText(text);
		this.dispatchEvents();
	},
	insertMathML: function(vi3, v42) {
		this.formulaModel.insertMathML(vi3, v42);
		this.dispatchEvents();
	},
	keyEventIsHandled: function(keyCode, shiftKey, ctrlKey, altKey) {
		return ctrlKey && !altKey || shiftKey && keyCode == 32;
	},
	handleKeyEvent: function(keyCode, shiftKey, ctrlKey, altKey) {
		var vZ4 = false;

		if (keyCode == 10 && this.getParam('lineFeed') === 'false') {
			return vZ4;
		}

		if (keyCode == 32 && shiftKey) {
			this.action("thinSpace");
			vZ4 = true;
		} else if (keyCode == 38 && ctrlKey && !altKey) {
			this.action("superscript");
			vZ4 = true;
		} else if (keyCode == 40 && ctrlKey && !altKey) {
			this.action("subscript");
			vZ4 = true;
		} else if ((keyCode == 111 || keyCode == 191) && ctrlKey && !altKey) {
			this.action("fraction");
			vZ4 = true;
		} else if (keyCode == 83 && ctrlKey && !altKey) {
			this.action("squareRoot");
			vZ4 = true;
		} else if (keyCode == 66 && ctrlKey && !altKey) {
			this.action("bold");
			vZ4 = true;
		} else if (keyCode == 73 && ctrlKey && !altKey) {
			this.action("italic");
			vZ4 = true;
		} else vZ4 = this.formulaModel.handleKeyEvent(keyCode, shiftKey, ctrlKey, altKey);
		this.dispatchEvents();
		return vZ4;
	},
	getToolbarModel: function() {
		return this.toolbar;
	},
	getSelectionRectangles: function() {
		var va4 = this.formulaModel.getSelectionRectangles();
		return va4;
	},
	getPositionFromPoint: function(x, vQ1) {
		var position = this.formulaModel.getPositionFromPoint(x, vQ1);
		return position;
	},
	getMathML: function() {
		if (this.temporalMathML != null) return this.temporalMathML;
		var vi3 = com.wiris.util.xml.WXmlUtils.vb4(this.formulaModel.vc4());
		return vi3;
	},
	getFormulaWidth: function() {
		return this.formulaModel.getWidth();
	},
	getFormulaHeight: function() {
		return this.formulaModel.getHeight();
	},
	getFormulaBaseline: function() {
		return this.formulaModel.getBaseline();
	},
	getInverseCaretRectangle: function() {
		var vd4 = this.formulaModel.getInverseCaretRectangle();
		return vd4;
	},
	getCaretRectangle: function() {
		var vd4 = this.formulaModel.getCaretRectangle();
		return vd4;
	},
	formulaToStandard: function(formula) {
		var vS4 = new com.wiris.e1_J();
		var ve4 = com.wiris.util.xml.WXmlUtils.vN3(formula);
		return vS4.formulaToStandard(ve4, true).toString();
	},
	endEventTransaction: function() {
		--this.eventTransactionSemaphore;
		if (this.eventTransactionSemaphore < 0) this.eventTransactionSemaphore = 0;
		this.dispatchEvents();
	},
	dispatchEvents: function() {
		if (this.eventTransactionSemaphore == 0) {
			var vf4 = this.formulaModel.vf4();
			var vg4 = this.formulaModel.vg4();
			var vh4 = this.formulaModel.vh4();
			var vi4 = this.formulaModel.vi4();
			this.formulaModel.vj4();
			if (vf4) {
				var i = HxOverrides.iter(this.listeners);
				while (i.hasNext()) i.next().caretPositionChanged(this);
			};
			if (vg4) {
				var i = HxOverrides.iter(this.listeners);
				while (i.hasNext()) i.next().clipboardChanged(this);
			};
			if (vh4) {
				this.temporalMathML = null;
				var i = HxOverrides.iter(this.listeners);
				while (i.hasNext()) i.next().contentChanged(this);
				if (this.validators != null) {
					var vH4 = HxOverrides.iter(this.validators);
					while (vH4.hasNext())
						if (!vH4.next().validate(this.formulaModel.vf3())) {
							this.formulaModel.undo();
							this.formulaModel.vk4();
							this.dispatchEvents();
							break;
						}
				}
			};
			if (vi4) {
				this.temporalMathML = null;
				var i = HxOverrides.iter(this.listeners);
				while (i.hasNext()) i.next().styleChanged(this);
			};
			if (this.transformationReceived != null) {
				var vj3 = this.transformationReceived;
				this.transformationReceived = null;
				var i = HxOverrides.iter(this.listeners);
				while (i.hasNext()) {
					var listener = i.next();
					listener.transformationReceived(this, vj3);
				}
			}
		}
	},
	contextTabAdded: function(vc3, tab) {},
	componentUpdated: function(vc3, vl4) {},
	componentFired: function(vc3, vl4) {
		if (js.Boot.__instanceof(vl4, com.wiris.e1_q)) {
			var matrixButton = js.Boot.vX3(vl4, com.wiris.e1_q);
			if (matrixButton.action != null) this.actionWithParam(matrixButton.action.id, matrixButton.value);
		} else if (js.Boot.__instanceof(vl4, com.wiris.e1_l)) {
			var button = js.Boot.vX3(vl4, com.wiris.e1_l);
			if (button.action != null) {
				if (button.action.id == null) {
					if (button.action.v52) this.insertMathML(button.action.content, button.action.v42);
					else this.insertText(button.action.content);
				} else this.action(button.action.id);
			}
		} else if (js.Boot.__instanceof(vl4, com.wiris.e1_t)) {
			var select = js.Boot.vX3(vl4, com.wiris.e1_t);
			if (select.action != null) this.actionWithParam(select.action.id, select.value);
		} else if (js.Boot.__instanceof(vl4, com.wiris.e1_m)) {
			var colorChooser = js.Boot.vX3(vl4, com.wiris.e1_m);
			if (colorChooser.action != null) this.actionWithParam(colorChooser.action.id, colorChooser.value);
		}
	},
	clearMetricsCache: function() {
		this.formulaModel.vm4();
	},
	beginEventTransaction: function() {
		++this.eventTransactionSemaphore;
	},
	removeEditorListener: function(listener) {
		HxOverrides.remove(this.listeners, listener);
	},
	addEditorListener: function(listener) {
		this.listeners.push(listener);
	},
	on: function(type, listener) {
		var list = this.typeListeners[type] || [];
			list.push(listener);

		this.typeListeners[type] = list;
	},
	trigger: function(type) {
		var fnList = this.typeListeners[type];

		if (!fnList || !fnList.length) return;

		for (var i = 0, len = fnList.length; i < len; i++) {
			var fn = fnList[i];
			if (typeof fn === 'function') fn();
		}
	},
	actionWithParam: function(vn4, vo4) {
		if (vn4 == "setFontFamily") {
			this.formulaModel.setFontFamily(vo4);
			this.dispatchEvents();
		} else if (vn4 == "setFontSize") {
			var vp4 = vo4 == "inherit" ? -1 : com.wiris.util.css.CSSUtils.vv2(vo4);
			this.formulaModel.setFontSize(vp4);
			this.dispatchEvents();
		} else if (vn4 == "setColor") {
			this.formulaModel.setColor(vo4);
			this.dispatchEvents();
		} else if (vn4 == "setMaxWidth") {
			this.formulaModel.setMaxWidth(vo4);
			this.dispatchEvents();
		} else if (vn4 == "setClassType") {
			this.formulaModel.setClassType(vo4);
			this.dispatchEvents();
		} else if (vn4 == "setMatrixLineColor") {
			this.formulaModel.setMatrixLineColor(vo4);
			this.dispatchEvents();
		} else if (vn4 == "setColumnSpacing") {
			this.formulaModel.vq4(true, vo4);
			this.dispatchEvents();
		} else if (vn4 == "setRowSpacing") {
			this.formulaModel.vq4(false, vo4);
			this.dispatchEvents();
		} else {
			var action = this.actions.get(vn4);
			if (action != null && action.v62) {
				this.formulaModel.vr4();
				try {
					this.action(vn4);
					var vs4 = vo4.split(":");
					var rows = Std.parseInt(vs4[0]);
					var vt4 = Std.parseInt(vs4[1]);
					while (rows > 1) {
						this.formulaModel.prependRow();
						--rows;
					};
					while (vt4 > 1) {
						this.formulaModel.prependColumn();
						--vt4;
					};
					this.dispatchEvents();
				} catch (e) {};
				this.formulaModel.vu4();
			}
		}
	},
	action: function(vn4) {
		if (vn4 == "undo") this.formulaModel.undo();
		else if (vn4 == "redo") this.formulaModel.redo();
		else if (vn4 == "bold") this.formulaModel.vv4();
		else if (vn4 == "italic") this.formulaModel.vw4();
		else if (vn4 == "autoItalic") this.formulaModel.vx4();
		else if (vn4 == "forceLigature") this.formulaModel.vy4();
		else if (vn4 == "mtext") this.formulaModel.vz4();
		else if (vn4 == "rtl") this.formulaModel.v84(!this.formulaModel.vf3().styles.isFlag(com.wiris.e1_2.vc2));
		else if (vn4 == "copy") this.formulaModel.copy();
		else if (vn4 == "paste") this.formulaModel.paste();
		else if (vn4 == "cut") this.formulaModel.cut();
		else if (vn4 == "appendRow") this.formulaModel.appendRow();
		else if (vn4 == "prependRow") this.formulaModel.prependRow();
		else if (vn4 == "removeRow") this.formulaModel.removeRow();
		else if (vn4 == "appendColumn") this.formulaModel.appendColumn();
		else if (vn4 == "prependColumn") this.formulaModel.prependColumn();
		else if (vn4 == "removeColumn") this.formulaModel.removeColumn();
		else if (vn4 == "addFrame") this.formulaModel.addFrame(-1);
		else if (vn4 == "removeFrame") this.formulaModel.removeFrame();
		else if (vn4 == "addFrameTop") this.formulaModel.addFrame(0);
		else if (vn4 == "addFrameBottom") this.formulaModel.addFrame(2);
		else if (vn4 == "addFrameLeft") this.formulaModel.addFrame(3);
		else if (vn4 == "addFrameRight") this.formulaModel.addFrame(1);
		else if (vn4 == "addLineBelow") this.formulaModel.addLineBelow();
		else if (vn4 == "removeLineBelow") this.formulaModel.removeLineBelow();
		else if (vn4 == "addLineRight") this.formulaModel.addLineRight();
		else if (vn4 == "removeLineRight") this.formulaModel.removeLineRight();
		else if (vn4 == "arabicIndicNumbers") this.formulaModel.v94(com.wiris.editor.formula.FormulaModel.vA4, false);
		else if (vn4 == "easternArabicIndicNumbers") this.formulaModel.v94(com.wiris.editor.formula.FormulaModel.vB4, false);
		else if (vn4 == "alignLeft") this.formulaModel.v05(com.wiris.e1_2.vn2);
		else if (vn4 == "alignRight") this.formulaModel.v05(com.wiris.e1_2.vm2);
		else if (vn4 == "alignCenter") this.formulaModel.v05(com.wiris.e1_2.vo2);
		else if (vn4 == "alignDecimal") this.formulaModel.v05(com.wiris.e1_2.vp2);
		else if (vn4 == "alignRelation") this.formulaModel.v05(com.wiris.e1_2.vq2);
		else if (vn4 == "alignAuto") this.formulaModel.v05(com.wiris.e1_2.vB2);
		else if (vn4 == "equalRowHeight") this.formulaModel.equalRowHeight();
		else if (vn4 == "equalColWidth") this.formulaModel.equalColWidth();
		else if (vn4 == "alignRowsTop") this.formulaModel.v15(com.wiris.editor.formula.Styles.v25);
		else if (vn4 == "alignRowsBottom") this.formulaModel.v15(com.wiris.editor.formula.Styles.v35);
		else if (vn4 == "alignRowsCenter") this.formulaModel.v15(com.wiris.editor.formula.Styles.v45);
		else if (vn4 == "alignRowsAxis") this.formulaModel.v15(com.wiris.editor.formula.Styles.v55);
		else if (vn4 == "alignRowsBaseline") this.formulaModel.v15(com.wiris.editor.formula.Styles.v65);
		else if (vn4 == "matrixSolidLine") this.formulaModel.matrixSolidLine();
		else if (vn4 == "matrixThickLine") this.formulaModel.matrixThickLine();
		else if (vn4 == "matrixDashLine") this.formulaModel.matrixDashLine();
		else if (vn4 == "matrixDotLine") this.formulaModel.matrixDotLine();
		else if (vn4 == "turnToLatin") {
			this.formulaModel.turnToLatin();
			this.formulaModel.vW4(false);
		} else if (vn4 == "turnToGreek") this.formulaModel.turnToGreek();
		else if (vn4 == "typeInGreek") this.formulaModel.vW4(true);
		else if (vn4 == "clearStyles") this.formulaModel.clearStyles();
		else if (vn4 == "removeAccents") this.formulaModel.removeAccents();
		else if (vn4 == "backspace") this.formulaModel["delete"](-1);
		else {
			var action = this.actions.get(vn4);
			if (action != null) {
				if (action.command == "insertion") {
					if (action.v52) {
						if (action.contentRTL != null && this.formulaModel.vf3().styles.isFlag(com.wiris.e1_2.vc2)) this.insertMathML(action.contentRTL, action.v42);
						else this.insertMathML(action.content, action.v42);
					} else this.insertText(action.content);
				} else this.action(action.command);
			}
		};
		this.dispatchEvents();
	},
	initParameters: null,
	europeanLanguages: null,
	easternArabicIndicLanguages: null,
	arabicIndicLanguages: null,
	ltrLanguages: null,
	rtlLanguages: null,
	validators: null,
	temporalMathML: null,
	transformationReceived: null,
	transformer: null,
	transformationGrammarResource: null,
	transformationGrammarURL: null,
	registeredToolbars: null,
	toolbar: null,
	remainingCalls: null,
	listeners: null,
	formulaModel: null,
	eventTransactionSemaphore: null,
	actions: null,
	__class__: com.wiris.editor.EditorModel
};