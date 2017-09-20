com.wiris.e1_41 = v91["com.wiris.e1_41"] = function(editorModel, resourceLoader, params) {
	this.vIS = new Array();
	this.editorModel = editorModel;
	this.element = null;
	this.hidden = false;
	this.links = new Array();
	this.vWV = false;
	this.resourceLoader = resourceLoader;
	this.vKS = new Array();
	this.vpW = 0;
	this.vDV = null;
	this.browser = new com.wiris.e1_z();
	this.editor = null;
	this.editorModel.getToolbarModel().vJ3(this);
	var language = "en";
	if (params != null && params.exists("language")) language = params.get("language");
	this.vH5 = com.wiris.editor.ModelFactory.vp5(language);
	this.vqW = 0;
	this.vrW = 0;
	if (this.browser.viS()) this.vqW = -2;
};
com.wiris.e1_41.__name__ = ["com", "wiris", "e1_41"];
com.wiris.e1_41.__interfaces__ = [com.wiris.e1_5];
com.wiris.e1_41.prototype = {
	sectionUpdated: function(vc3, tabIndex, vd3) {
		if (this.body == null || tabIndex >= this.body.childNodes.length) return;
		var vKS = vc3.vc6();
		var vsW = null;
		var vTB = this.body.childNodes[tabIndex].firstChild;
		var i = 0;
		while (vTB != null && vsW == null) {
			if (vTB.nodeName.toLowerCase() == "table") {
				if (i == vd3) vsW = vTB;
				++i;
			};
			vTB = vTB.nextSibling;
		};
		var vtW = vsW.previousSibling;
		while (vtW != null && !(vtW.nodeName.toLowerCase() == "span" && vtW.previousSibling.style.display != "none")) vtW = vtW.previousSibling;
		var vuW = vsW.nextSibling;
		while (vuW.nodeName.toLowerCase() != "span") vuW = vuW.nextSibling;
		var vvW = vuW.nextSibling;
		while (vvW != null && !(vvW.nodeName.toLowerCase() == "table" && vvW.style.display != "none")) vvW = vvW.nextSibling;
		if (vKS[tabIndex].panel.vu6(vd3).v56) {
			if (vtW != null) vtW.style.display = "";
			vsW.style.display = "";
			vuW.style.display = vvW != null ? "" : "none";
		} else {
			if (vtW != null) vtW.style.display = vvW != null ? "" : "none";
			do {
				vsW.style.display = "none";
				vsW = vsW.nextSibling;
			} while (vsW != null && vsW.nodeName.toLowerCase() != "table");
		}
	},
	toolbarReseted: function(vc3) {
		if (this.element == null) return;
		this.vIS = new Array();
		this.vKS = new Array();
		this.links = new Array();
		com.wiris.js.JsDOMUtils.vJU(this.vwW, "wrs_noTabs");
		com.wiris.js.JsDOMUtils.vxS(this.vwW);
		com.wiris.js.JsDOMUtils.vxS(this.vCV);
		com.wiris.js.JsDOMUtils.vxS(this.body);
		this.vI3();
	},
	tabUpdated: function(vc3, index) {
		if (this.vCV == null || index >= this.vCV.childNodes.length) return;
		var tab = vc3.vc6()[index];
		if (tab.enabled) {
			this.vCV.childNodes[index].disabled = false;
			com.wiris.js.JsDOMUtils.vJU(this.vCV.childNodes[index], "wrs_disabled");
		} else {
			this.vCV.childNodes[index].disabled = true;
			com.wiris.js.JsDOMUtils.vgU(this.vCV.childNodes[index], "wrs_disabled");
		}; if (com.wiris.js.JsDOMUtils.v2U(this.vCV.childNodes[index], "wrs_selected")) {
			if (tab.vD6 != null) this.vxW(this.vCV.childNodes[index].firstChild, tab.vD6, 0, 0, 0);
		} else if (tab.vE6 != null) this.vxW(this.vCV.childNodes[index].firstChild, tab.vE6, 0, 0, 0);
	},
	tabRemoved: function(vc3, index) {
		this.vCV.removeChild(this.vCV.childNodes[index]);
		this.body.removeChild(this.body.childNodes[index]);
		this.vKS.splice(index, 1);
	},
	tabChanged: function(vc3, from, to) {
		this.vLS = to;
		if (this.vKS.length > 0) {
			if (from != -1) {
				if (this.vKS[from].vE6 != null) this.vxW(this.vCV.childNodes[from].firstChild, this.vKS[from].vE6, 0, 0, 0);
				com.wiris.js.JsDOMUtils.vJU(this.vCV.childNodes[from], "wrs_selected");
				com.wiris.js.JsDOMUtils.vJU(this.body.childNodes[from], "wrs_selected");
			};
			if (this.vKS[to].vD6 != null) this.vxW(this.vCV.childNodes[to].firstChild, this.vKS[to].vD6, 0, 0, 0);
			com.wiris.js.JsDOMUtils.vvT(this.vCV.childNodes[to], "wrs_selected");
			com.wiris.js.JsDOMUtils.vvT(this.body.childNodes[to], "wrs_selected");
		}
	},
	v6V: function(hidden) {
		this.hidden = hidden;
		if (this.element != null) {
			if (hidden) com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_hidden");
			else com.wiris.js.JsDOMUtils.vJU(this.element, "wrs_hidden");
		}
	},
	vyW: function(e) {
		var vzW = com.wiris.js.JsDOMUtils.vQU(e);
		while (vzW.nodeName.toLowerCase() != "button" && vzW.nodeName.toLowerCase() != "div") vzW = vzW.parentNode;
		var v0X = 0;
		while (v0X < this.vCV.childNodes.length && this.vCV.childNodes[v0X] != vzW)++v0X;
		if (v0X < this.vCV.childNodes.length) this.editorModel.getToolbarModel().vd6(v0X);
		com.wiris.js.JsDOMUtils.vTU(e);
	},
	v1X: function(e) {
		this.vyW(e);
	},
	isReady: function() {
		return this.vWV;
	},
	v2X: function(section, vHV, v3X, vp7, vSS, extra) {
		var vq7 = js.Lib.document.createElement("tr");
		if (!extra && section.layout == com.wiris.e1_s.v86 || extra && section.extraLayout == com.wiris.e1_s.v86) {
			var v07 = vHV;
			while (v07 < vSS) {
				var vl4 = section.v27(v07, extra);
				if (vl4.v56) {
					var v4X = this.vkD(vl4);
					vq7.appendChild(v4X);
				};
				v07 += v3X;
			};
			var v0P = v3X * vp7;
			while (v07 < v0P) {
				var v4X = this.v5X();
				vq7.appendChild(v4X);
				v07 += v3X;
			}
		} else {
			var v07 = vp7 * vHV;
			var v6X = v07 + vp7;
			var v0P = v6X;
			if (v0P > vSS) v0P = vSS;
			while (v07 < v0P) {
				var vl4 = section.v27(v07, extra);
				if (vl4.v56) {
					var v4X = this.vkD(vl4);
					vq7.appendChild(v4X);
				};
				++v07;
			};
			while (v07 < v6X) {
				var v4X = this.v5X();
				vq7.appendChild(v4X);
				++v07;
			}
		};
		return vq7;
	},
	vu6: function(v7X) {
		var v8X = js.Lib.document.createElement("tbody");
		var vp7 = Math.ceil(v7X.v8S / v7X.rows);
		var v9X = 0;
		var vd1 = 0,
			vc1 = v7X.rows;
		while (vd1 < vc1) {
			var vH4 = vd1++;
			var vAX = this.v2X(v7X, vH4, v7X.rows, vp7, v7X.v17(false), false);
			if (vAX.childNodes.length > 0) v8X.appendChild(vAX);
			else ++v9X;
		};
		while (v9X > 0) {
			var vBX = js.Lib.document.createElement("tr");
			vBX.appendChild(this.v5X());
			v8X.appendChild(vBX);
			--v9X;
		};
		var section = js.Lib.document.createElement("table");
		section.className = "wrs_layoutFor" + v7X.rows + "Rows";
		section.appendChild(v8X);
		return section;
	},
	vCX: function(vDX, vEX) {
		var vd1 = this;
		var panel = js.Lib.document.createElement("div");
		var vTS = vDX.vl6();
		var vFX = true;
		var vc1 = 0;
		while (vc1 < vTS) {
			var vd3 = vc1++;
			var v7X = vDX.vu6(vd3);
			if (!v7X.v56 && !vEX) continue;
			if (v7X.rows > 1) vFX = false;
			var section = this.vu6(v7X);
			if (!v7X.v56) section.style.display = "none";
			panel.appendChild(section);
			if (v7X.v9S > 0) {
				var vGX = [];
				if (this.browser.isIE() && Std.parseFloat(this.browser.getVersion()) <= 7) vGX[0] = js.Lib.document.createElement("div");
				else vGX[0] = js.Lib.document.createElement("button");
				vGX[0].className = "wrs_expandButton wrs_expandButtonFor" + v7X.rows + "RowsLayout";
				var vHX = [js.Lib.document.createElement("tbody")];
				var vIX = Math.ceil(v7X.v9S / v7X.extraRows);
				var v9X = 0;
				var vMF = 0,
					vJX = v7X.extraRows;
				while (vMF < vJX) {
					var vH4 = vMF++;
					var vAX = this.v2X(v7X, vH4, v7X.extraRows, vIX, v7X.v17(true), true);
					if (vAX.childNodes.length > 0) vHX[0].appendChild(vAX);
					else ++v9X;
				};
				while (v9X > 0) {
					var vBX = js.Lib.document.createElement("tr");
					vBX.appendChild(this.v5X());
					vHX[0].appendChild(vBX);
					--v9X;
				};
				var vKX = js.Lib.document.createElement("table");
				vKX.className = "wrs_layoutFor" + v7X.extraRows + "Rows wrs_last";
				vKX.appendChild(vHX[0]);
				var vLX = js.Lib.document.createElement("div");
				vLX.className = "wrs_selected";
				vLX.appendChild(vKX);
				var vMX = [js.Lib.document.createElement("div")];
				vMX[0].className = "wrs_panelContainer";
				vMX[0].appendChild(vLX);
				var vNX = [false];
				com.wiris.js.JsDOMUtils.addEventListener(vGX[0], "mousedown", (function(vNX) {
					return function(e) {
						vNX[0] = false;
					};
				})(vNX));
				com.wiris.js.JsDOMUtils.addEventListener(vGX[0], "keypress", (function(vNX) {
					return function(e) {
						vNX[0] = true;
					};
				})(vNX));
				vGX[0].vOV = (function(vHX) {
					return function() {
						vHX[0].firstChild.firstChild.firstChild.focus();
					};
				})(vHX);
				com.wiris.js.JsDOMUtils.addEventListener(vGX[0], "click", (function(vNX, vMX, vGX) {
					return function(e) {
						com.wiris.js.JsDOMUtils.vvT(vGX[0], "wrs_pressed");
						var x = com.wiris.js.JsDOMUtils.vcU(vGX[0], vd1.vDV.vPN.parentNode);
						var vQ1 = com.wiris.js.JsDOMUtils.vdU(vGX[0], vd1.vDV.vPN.parentNode) + vGX[0].offsetHeight;
						vd1.vDV.vHU(x, vQ1, vMX[0], (function(vGX) {
							return function() {
								com.wiris.js.JsDOMUtils.vJU(vGX[0], "wrs_pressed");
								vGX[0].focus();
							};
						})(vGX));
						if (vNX[0]) vGX[0].vOV();
						com.wiris.js.JsDOMUtils.vTU(e);
					};
				})(vNX, vMX, vGX));
				if (!v7X.v56) vGX[0].style.display = "none";
				panel.appendChild(vGX[0]);
			};
			var line = js.Lib.document.createElement("span");
			com.wiris.js.JsDOMUtils.vvT(line, "wrs_line");
			if (!v7X.v56) line.style.display = "none";
			panel.appendChild(line);
			if (vd3 == vTS - 1) {
				line.style.display = "none";
				com.wiris.js.JsDOMUtils.vvT(section, "wrs_last");
			}
		};
		if (vFX) com.wiris.js.JsDOMUtils.vvT(panel, "wrs_singleRowPanel");
		return panel;
	},
	v5X: function() {
		var empty = js.Lib.document.createElement("div");
		com.wiris.js.JsDOMUtils.vvT(empty, "wrs_empty");
		var v4X = js.Lib.document.createElement("td");
		v4X.appendChild(empty);
		return v4X;
	},
	vI3: function() {
		var vG7 = this.editorModel.getToolbarModel();
		var i = HxOverrides.iter(vG7.vc6());
		var self = this;
		var vOX = this.vpW + 1;
		this.vpW = vOX;
		haxe.Timer.delay(function() {
			self.vPX(i, vOX);
		}, 1);
		var vH4 = HxOverrides.iter(vG7.vGS());
		while (vH4.hasNext()) {
			var link = vH4.next();
			self.vQX(link);
		};
		if (vG7.vFS()) this.vCV.style.display = "block";
		else {
			this.vCV.style.display = "none";
			com.wiris.js.JsDOMUtils.vvT(this.vwW, "wrs_noTabs");
		}
	},

	maxFormulas: 10,
	formulaMap: {},

	setFormulaStorage: function(list, key) {
		if (!key) key = 'quickFormula';
		var storage = com.wiris.util.storage;

		if (storage && list) {
			//只保存最新的10个。
			if (list.length >= this.maxFormulas) list.length = this.maxFormulas;
			storage.set(key, list);
		}
	},

	getFormulaStorage: function(key) {
		if (!key) key = 'quickFormula';
		var storage = com.wiris.util.storage;

		if (storage) {
			var list = storage.get(key);

			if (list) {
				if (list.length >= this.maxFormulas) list.length = this.maxFormulas;
				return list;
			}

			return;
		}
	},

	setRecentTab: function() {
		// com.wiris.util.storage.flush();
		var formulaList = this.getFormulaStorage();
		var fixedList = this.getFormulaStorage('fixedFormula');

		this.recentTabWrap = js.Lib.document.createElement('div');
		this.recentTabWrap.className = "wrs_recentTabWrap";
		this.recentTabTitle = js.Lib.document.createElement('strong');
		this.recentTabTitle.className = 'title';
		this.recentTabTitle.innerHTML = "最近：";
		this.recentTabList = js.Lib.document.createElement('div');
		this.recentTabList.style.display = "inline-block";
		this.recentTabList.className = "formula_recent";
		this.fixedList = js.Lib.document.createElement('div');
		this.fixedList.style.display = "inline-block";
		this.fixedList.className = "formula_fixed";
		this.fixedTips = js.Lib.document.createElement('span');
		this.fixedTips.className = 'tips';
		this.fixedTips.innerHTML = '右键点击固定公式, 再次则取消固定。';
		this.recentTabWrap.appendChild(this.recentTabTitle);
		this.recentTabWrap.appendChild(this.fixedList);
		this.recentTabWrap.appendChild(this.recentTabList);
		this.recentTabWrap.appendChild(this.fixedTips);

		if (fixedList && fixedList.length) {
			for (var i = 0, len = fixedList.length; i < len; i++) {
				var curEl = this.formulaMap[fixedList[i]];
				this.fixedList.appendChild(curEl);
			}
		} else {
			this.fixedList.style.display = "none";
		}

		if (formulaList && formulaList.length) {
			var recentMaxLen = this.maxFormulas - (fixedList ? fixedList.length : 0);
			var len2 = formulaList.length;

			len2 = len2 > recentMaxLen ? recentMaxLen : len2;
			for (var j = 0; j < len2; j++) {
				var curEl = this.formulaMap[formulaList[j]];
				this.recentTabList.appendChild(curEl);
			}
		}

		if (!formulaList && !fixedList) {
			this.recentTabWrap.style.display = "none";
		}

		this.element.appendChild(this.recentTabWrap);
	},

	handleKeyEvent: function() {},

	setOftenTab: function() {
		var _this = this;

		var mathmlList = [{
				"name": "二分之一",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>'
			}, {
				"name": "三分之一",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mn>3</mn></mfrac></math>'
			}, {
				"name": "X分之一",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mi>x</mi></mfrac></math>'
			}, {
				"name": "Y分之一",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mn>1</mn><mi>y</mi></mfrac></math>'
			}, {
				"name": "根号2",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>2</mn></msqrt></math>'
			}, {
				"name": "根号3",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mn>3</mn></msqrt></math>'
			}, {
				"name": "X的平方",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup></math>'
			}, {
				"name": "Y的平方",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>y</mi><mn>2</mn></msup></math>'
			}, {
				"name": "X的立方",
				"mml": '<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>3</mn></msup></math>'
			}];

		this.oftenTabWrap = js.Lib.document.createElement('div');
		this.oftenTabWrap.className = "wrs_oftenTabWrap";
		this.oftenTabTitle = js.Lib.document.createElement('strong');
		this.oftenTabTitle.className = 'title';
		this.oftenTabTitle.innerHTML = "常用：";
		this.oftenTabList = js.Lib.document.createElement('span');
		this.oftenTabTips = js.Lib.document.createElement('span');
		this.oftenTabTips.className = 'tips';
		this.oftenTabTips.innerHTML = 'Ctrl+公式左上角序号，可快速输入。';
		this.oftenTabWrap.appendChild(this.oftenTabTitle);
		this.oftenTabWrap.appendChild(this.oftenTabList);
		this.oftenTabWrap.appendChild(this.oftenTabTips);

		var elementTemp = [];

		for (var i = 0, len = mathmlList.length; i < len; i++) {
			var curObj = mathmlList[i];

			(function (name, mathml, _i) {
				var element = js.Lib.document.createElement("button");
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_button");
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_button_often");
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_button_index_" + _i);

				element.title = name;

				var elementClone = element.cloneNode(true);
				elementClone.style.display = "inline-block";
				_this.formulaMap[name] = elementClone;

				element.innerHTML = '<i>' + (_i + 1) + '</i>'
				_this.oftenTabList.appendChild(element);

				elementTemp.push(element);

				com.wiris.js.JsDOMUtils.addEventListener(elementClone, "click", function(e) {
					com.wiris.js.JsDOMUtils.vTU(e);
					com.wiris.js.JsDOMUtils.vJU(elementClone, 'hover');
					_this.editor.focus();
					_this.editorModel.insertMathML(mathml, -1);
					_this.updateRecentTab({vK5: name});
				});

				com.wiris.js.JsDOMUtils.addEventListener(elementClone, "mouseenter", function(e) {
					com.wiris.js.JsDOMUtils.vvT(elementClone, 'hover');
				});

				com.wiris.js.JsDOMUtils.addEventListener(elementClone, "mouseleave", function(e) {
					com.wiris.js.JsDOMUtils.vJU(elementClone, 'hover');
				});

				com.wiris.js.JsDOMUtils.addEventListener(element, "click", function(e) {
					com.wiris.js.JsDOMUtils.vTU(e);
					_this.editor.focus();
					_this.editorModel.insertMathML(mathml, -1);
					_this.updateRecentTab({vK5: name});
				});

				com.wiris.js.JsDOMUtils.addEventListener(elementClone, "contextmenu", function(e) {
					com.wiris.js.JsDOMUtils.vTU(e);
					alert('常用公式无需固定。');
				});

				com.wiris.js.JsDOMUtils.addEventListener(element, "contextmenu", function(e) {
					com.wiris.js.JsDOMUtils.vTU(e);
					alert('常用公式无需固定。');
				});

			})(curObj.name, curObj.mml, i);
		}

		this.element.appendChild(this.oftenTabWrap);

		this.handleKeyEvent = function(keyCode, shiftKey, ctrlKey, altKey) {
			var vZ4 = true;

			if ((keyCode == 49 || keyCode == 97) && ctrlKey && !altKey) elementTemp[0].click();
			else if ((keyCode == 50 || keyCode == 98) && ctrlKey && !altKey) elementTemp[1].click();
			else if ((keyCode == 51 || keyCode == 99) && ctrlKey && !altKey) elementTemp[2].click();
			else if ((keyCode == 52 || keyCode == 100) && ctrlKey && !altKey) elementTemp[3].click();
			else if ((keyCode == 53 || keyCode == 101) && ctrlKey && !altKey) elementTemp[4].click();
			else if ((keyCode == 54 || keyCode == 102) && ctrlKey && !altKey) elementTemp[5].click();
			else if ((keyCode == 55 || keyCode == 103) && ctrlKey && !altKey) elementTemp[6].click();
			else if ((keyCode == 56 || keyCode == 104) && ctrlKey && !altKey) elementTemp[7].click();
			else if ((keyCode == 57 || keyCode == 105) && ctrlKey && !altKey) elementTemp[8].click();
			else vZ4 = false;

			return vZ4;
		}
	},

	updateRecentTab: function(formula) {
		var name;

		if (typeof formula === 'string') name = formula;
		if (typeof formula === 'object') name = formula.vK5;

		var formulaList = this.getFormulaStorage() || [];
		var fixedList = this.getFormulaStorage('fixedFormula') || [];

		// if (formulaList.length) {
		if (name) {
			for (var k = 0, len = fixedList.length; k < len; k++) {
				if (name === fixedList[k]) return;
			}

			for (var i = 0, len = formulaList.length; i < len; i++) {
				if (name === formulaList[i]) {
					formulaList.splice(i, 1);
					break;
				}
			}

			formulaList.unshift(name);

			this.setFormulaStorage(formulaList);
		}

		if (fixedList.length) {
			this.fixedList.style.display = "inline-block";

			for (var k = 0, len = fixedList.length; k < len; k++) {
				var curEl = this.formulaMap[fixedList[k]];
				this.fixedList.appendChild(curEl);
			}
		} else {
			this.fixedList.style.display = "none";
		}

		var recentMaxLen = this.maxFormulas - fixedList.length;
		var len2 = formulaList.length;

		for (var l = 0, childNodes = this.recentTabList.childNodes, len3 = childNodes.length; l < len3; l++) {
			childNodes[l].style.display = "none";
		}

		len2 = len2 > recentMaxLen ? recentMaxLen : len2;
		for (var j = 0; j < len2; j++) {
			var curEl = this.formulaMap[formulaList[j]];
			curEl.style.display = "inline-block";
			this.recentTabList.appendChild(curEl);
		}



		this.recentTabWrap.style.display = "block";
		// }
	},

	fixedFormula: function(formula, key) {
		if (!key) key = 'fixedFormula';

		var list = this.getFormulaStorage(key) || [];
		var formulaList = this.getFormulaStorage() || [];
		var name = formula.vK5;

		var hasSameFormula = false;

		for (var j = 0, len = formulaList.length; j < len; j++) {
			if (name === formulaList[j]) {
				formulaList.splice(j, 1);
				this.setFormulaStorage(formulaList);
			}
		}

		for (var i = 0, len = list.length; i < len; i++) {
			if (name === list[i]) {
				var formulaName = list.splice(i, 1);

				formulaList.unshift(formulaName[0]);
				this.setFormulaStorage(formulaList);

				hasSameFormula = true;
				break;
			}
		}

		if (!hasSameFormula) list.unshift(name);
		this.setFormulaStorage(list, key);

		this.updateRecentTab();
	},

	getElement: function() {
		if (this.element != null) return this.element;
		this.element = js.Lib.document.createElement("div");
		if (this.hidden) com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_hidden");
		// com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_toolbar");
		this.vwW = js.Lib.document.createElement("div");
		this.vwW.className = "wrs_linksContainer";
		this.vCV = js.Lib.document.createElement("div");
		this.vCV.className = "wrs_header";
		this.body = js.Lib.document.createElement("div");
		this.body.className = "wrs_panelContainer";
		this.element.appendChild(this.vwW);
		this.element.appendChild(this.vCV);
		this.element.appendChild(this.body);
		// this.vI3();
		return this.element;
	},

	vRX: function(vl4) {
		var vc1 = this;
		var element = null;
		if (vl4.veR() != null) {
			var matrixButton = vl4.veR();
			if (this.browser.isIE() && Std.parseFloat(this.browser.getVersion()) <= 7) element = js.Lib.document.createElement("div");
			else element = js.Lib.document.createElement("button"); if (matrixButton.vK5 != null) element.title = matrixButton.vK5;
			if (matrixButton.icon != null) this.vxW(element, matrixButton.icon, 2, this.vqW, this.vrW);
			else if (matrixButton.vK5 != null) element.appendChild(js.Lib.document.createTextNode(matrixButton.vK5));
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_button");
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_matrixButton");
			var vSX = js.Lib.document.createElement("td");
			vSX.appendChild(js.Lib.document.createTextNode(com.wiris.editor.ModelFactory.vL5("Rows", this.vH5) + ": "));
			var vTX = js.Lib.document.createElement("input");
			vTX.setAttribute("type", "number");
			vTX.setAttribute("title", com.wiris.editor.ModelFactory.vL5("Rows", this.vH5));
			var vUX = js.Lib.document.createElement("td");
			vUX.className = "wrs_inputCell";
			vUX.appendChild(vTX);
			var vVX = js.Lib.document.createElement("tr");
			vVX.appendChild(vSX);
			vVX.appendChild(vUX);
			var vWX = js.Lib.document.createElement("td");
			vWX.appendChild(js.Lib.document.createTextNode(com.wiris.editor.ModelFactory.vL5("Columns", this.vH5) + ": "));
			var vXX = js.Lib.document.createElement("input");
			vXX.setAttribute("type", "number");
			vXX.setAttribute("title", com.wiris.editor.ModelFactory.vL5("Columns", this.vH5));
			var vYX = js.Lib.document.createElement("td");
			vYX.className = "wrs_inputCell";
			vYX.appendChild(vXX);
			var vZX = js.Lib.document.createElement("tr");
			vZX.appendChild(vWX);
			vZX.appendChild(vYX);
			var vaX = js.Lib.document.createElement("tbody");
			vaX.appendChild(vVX);
			vaX.appendChild(vZX);
			var vbX = js.Lib.document.createElement("table");
			vbX.appendChild(vaX);
			var v2S = function() {
				matrixButton.v2S(Std.parseInt(vTX.value), Std.parseInt(vXX.value));
				vc1.vDV.vIU();
			};
			com.wiris.js.JsDOMUtils.addEventListener(vTX, "keypress", function(e) {
				if (e.keyCode == 13) {
					v2S();
					com.wiris.js.JsDOMUtils.vTU(e);
				}
			});
			com.wiris.js.JsDOMUtils.addEventListener(vXX, "keypress", function(e) {
				if (e.keyCode == 13) {
					v2S();
					com.wiris.js.JsDOMUtils.vTU(e);
				}
			});
			var vcX = js.Lib.document.createElement("div");
			vcX.className = "wrs_matrixButtonPanel";
			var vdX = js.Lib.document.createElement("tbody");
			var veX = function() {
				var i = 0;
				while (i < vdX.childNodes.length) {
					var vH4 = 0;
					while (vH4 < vdX.childNodes[i].childNodes.length) {
						com.wiris.js.JsDOMUtils.vJU(vdX.childNodes[i].childNodes[vH4].firstChild, "wrs_selected");
						++vH4;
					};
					++i;
				}
			};
			var vfX = js.Lib.document.createElement("tr");
			var vr7 = 0;
			var vq7 = 0;
			while (vq7 < 6) {
				var vgX = 0;
				while (vgX < 6) {
					var vhX = [vq7];
					var viX = [vgX];
					var vjX = js.Lib.document.createElement("div");
					vjX.className = "wrs_matrixButton";
					com.wiris.js.JsDOMUtils.addEventListener(vjX, "mouseover", (function(viX, vhX) {
						return function(e) {
							veX();
							var i = vhX[0];
							while (i >= 0) {
								var vH4 = viX[0];
								while (vH4 >= 0) {
									com.wiris.js.JsDOMUtils.vvT(vdX.childNodes[i].childNodes[vH4].firstChild, "wrs_selected");
									--vH4;
								};
								--i;
							};
							vTX.value = vhX[0] + 1;
							vXX.value = viX[0] + 1;
						};
					})(viX, vhX));
					com.wiris.js.JsDOMUtils.addEventListener(vjX, "mousedown", (function(viX, vhX) {
						return function(e) {
							vTX.value = vhX[0] + 1;
							vXX.value = viX[0] + 1;
							v2S();
						};
					})(viX, vhX));
					var v4X = js.Lib.document.createElement("td");
					v4X.appendChild(vjX);
					vfX.appendChild(v4X);
					++vgX;
				};
				vdX.appendChild(vfX);
				vfX = js.Lib.document.createElement("tr");
				++vq7;
			};
			var vkX = js.Lib.document.createElement("table");
			vkX.appendChild(vdX);
			vcX.appendChild(vkX);
			vcX.appendChild(vbX);
			com.wiris.js.JsDOMUtils.addEventListener(element, "click", function(e) {
				com.wiris.js.JsDOMUtils.vTU(e);
				if (!matrixButton.enabled) return;
				veX();
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_pressed");
				var x = com.wiris.js.JsDOMUtils.vcU(element, vc1.vDV.vPN.parentNode);
				var vQ1 = com.wiris.js.JsDOMUtils.vdU(element, vc1.vDV.vPN.parentNode) + element.offsetHeight - 1;
				vTX.value = "";
				vXX.value = "";
				vc1.vDV.vHU(x, vQ1, vcX, function() {
					com.wiris.js.JsDOMUtils.vJU(element, "wrs_pressed");
					element.focus();
				});
				vTX.focus();
			});
		} else if (vl4.vfR() != null) {
			var button = vl4.vfR();
			if (this.browser.isIE() && Std.parseFloat(this.browser.getVersion()) <= 7) element = js.Lib.document.createElement("div");
			else element = js.Lib.document.createElement("button");
			if (button.vK5 != null) element.title = button.vK5;
			if (button.icon != null) this.vxW(element, button.icon, 2, this.vqW, this.vrW);
			else if (button.vK5 != null) element.appendChild(js.Lib.document.createTextNode(button.vK5));
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_button");
			if (button.vV5 && button.vhR) com.wiris.js.JsDOMUtils.vvT(element, "wrs_toggled");

			var elementClone = element.cloneNode(true);
			elementClone.style.display = "inline-block";
			vc1.formulaMap[vl4.vK5] = elementClone;
			com.wiris.js.JsDOMUtils.vJU(elementClone, 'wrs_imageContainer');

			com.wiris.js.JsDOMUtils.addEventListener(elementClone, "click", function(e) {
				com.wiris.js.JsDOMUtils.vTU(e);
				com.wiris.js.JsDOMUtils.vJU(elementClone, 'hover');
				if (!button.enabled && button.action.command != "paste") return;
				if (button.action.command == "copy" || button.action.command == "cut" || button.action.command == "paste") {
					js.Lib.alert(button.vK5);
					vc1.editor.focus();
				} else {
					button.click();

					if (button.action.command == "redo" || button.action.command == "undo") return;
					vc1.updateRecentTab(vl4);
				}
			});

			com.wiris.js.JsDOMUtils.addEventListener(elementClone, "mouseenter", function(e) {
				com.wiris.js.JsDOMUtils.vvT(elementClone, 'hover');
			});

			com.wiris.js.JsDOMUtils.addEventListener(elementClone, "mouseleave", function(e) {
				com.wiris.js.JsDOMUtils.vJU(elementClone, 'hover');
			});

			com.wiris.js.JsDOMUtils.addEventListener(elementClone, "contextmenu", function(e) {
				com.wiris.js.JsDOMUtils.vTU(e);
				vc1.fixedFormula(vl4, 'fixedFormula');
				com.wiris.js.JsDOMUtils.vJU(elementClone, 'hover');
			});

			com.wiris.js.JsDOMUtils.addEventListener(element, "contextmenu", function(e) {
				com.wiris.js.JsDOMUtils.vTU(e);
				vc1.fixedFormula(vl4, 'fixedFormula');
				com.wiris.js.JsDOMUtils.vJU(elementClone, 'hover');
			});

			com.wiris.js.JsDOMUtils.addEventListener(element, "click", function(e) {
				com.wiris.js.JsDOMUtils.vTU(e);
				if (!button.enabled && button.action.command != "paste") return;
				if (button.action.command == "copy" || button.action.command == "cut" || button.action.command == "paste") {
					js.Lib.alert(button.vK5);
					vc1.editor.focus();
				} else {
					button.click();

					if (button.action.command == "redo" || button.action.command == "undo") return;
					vc1.updateRecentTab(vl4);
				}
			});

		} else if (vl4.vbR() != null) {
			var select = vl4.vbR();
			element = js.Lib.document.createElement("div");
			if (select.vK5 != null) element.title = select.vK5;
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_select");
			var vlX = js.Lib.document.createElement("select");
			var i = select.options.keys();
			var vH4 = 0;
			while (i.hasNext()) {
				var value = i.next();
				var label = select.options.get(value);
				var option = js.Lib.document.createElement("option");
				option.setAttribute("value", value);
				option.appendChild(js.Lib.document.createTextNode(label));
				vlX.appendChild(option);
				if (value == select.value) vlX.selectedIndex = vH4;
				++vH4;
			};
			if (this.browser.viS()) {
				vlX.vUV = false;
				com.wiris.js.JsDOMUtils.addEventListener(vlX, "focus", function(e) {
					vlX.vUV = true;
				});
				com.wiris.js.JsDOMUtils.addEventListener(vlX, "blur", function(e) {
					vlX.vUV = false;
				});
				setInterval(function() {
					if (vlX.vUV) select.select(vlX.value);
				}, 50);
			};
			com.wiris.js.JsDOMUtils.addEventListener(vlX, "change", function(e) {
				select.select(vlX.value);
			});
			element.appendChild(vlX);
			var vmX = js.Lib.document.createElement("div");
			vmX.className = "wrs_label";
			if (select.icon != null) {
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_withIcon");
				var vnX = js.Lib.document.createElement("div");
				this.vxW(vnX, select.icon, 0, 0, 0);
				vmX.appendChild(vnX);
			} else vmX.appendChild(js.Lib.document.createTextNode(select.options.get(select.value)));
			element.appendChild(vmX);
			com.wiris.js.JsDOMUtils.addEventListener(vlX, "focus", function(e) {
				com.wiris.js.JsDOMUtils.vvT(vmX, "wrs_focused");
			});
			com.wiris.js.JsDOMUtils.addEventListener(vlX, "blur", function(e) {
				com.wiris.js.JsDOMUtils.vJU(vmX, "wrs_focused");
			});
			var vW9 = select.options.keys();
			while (vW9.hasNext()) {
				var option = vW9.next();
				var label = select.options.get(option);
				var voX = js.Lib.document.createElement("div");
				voX.appendChild(js.Lib.document.createTextNode(label));
				element.appendChild(voX);
			};
			com.wiris.js.JsDOMUtils.addEventListener(element, "click", function(e) {
				if (!select.enabled) return;
				var vcX = js.Lib.document.createElement("div");
				vcX.className = "wrs_selectPanel";
				var vqO = select.options.keys();
				while (vqO.hasNext()) {
					var option = [vqO.next()];
					var label = select.options.get(option[0]);
					var item = js.Lib.document.createElement("div");
					item.appendChild(js.Lib.document.createTextNode(label));
					vcX.appendChild(item);
					if (option[0] == select.value) item.className = "wrs_selected";
					com.wiris.js.JsDOMUtils.addEventListener(item, "click", (function(option) {
						return function(vSW) {
							select.select(option[0]);
							vc1.vDV.vIU();
						};
					})(option));
					var voX = js.Lib.document.createElement("div");
					voX.appendChild(js.Lib.document.createTextNode(label));
					element.appendChild(voX);
				};
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_pressed");
				var x = com.wiris.js.JsDOMUtils.vcU(element, vc1.vDV.vPN.parentNode);
				var vQ1 = com.wiris.js.JsDOMUtils.vdU(element, vc1.vDV.vPN.parentNode) + element.offsetHeight - 1;
				vcX.style.minWidth = element.offsetWidth - 2 + "px";
				vc1.vDV.vHU(x, vQ1, vcX, function() {
					com.wiris.js.JsDOMUtils.vJU(element, "wrs_pressed");
				});
			});
		} else if (vl4.vdR() != null) {
			var colorChooser = vl4.vdR();
			if (this.browser.isIE() && Std.parseFloat(this.browser.getVersion()) <= 7) element = js.Lib.document.createElement("div");
			else element = js.Lib.document.createElement("button");
			this.vxW(element, new com.wiris.e1_o("icons/font_color.png", 0, 0, 18, 18, null), 2, this.vqW, this.vrW);
			if (colorChooser.vK5 != null) element.title = colorChooser.vK5;
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_button");
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_colorChooser");
			var vpX = js.Lib.document.createElement("div");
			vpX.appendChild(js.Lib.document.createTextNode(com.wiris.editor.ModelFactory.vL5("Color", this.vH5) + ": "));
			var vqX = js.Lib.document.createElement("input");
			vpX.appendChild(vqX);
			vqX.setAttribute("title", com.wiris.editor.ModelFactory.vL5("Color", this.vH5));
			var vrX = function() {
				colorChooser.vnR(vqX.value);
				vc1.vDV.vIU();
			};
			com.wiris.js.JsDOMUtils.addEventListener(vqX, "keypress", function(e) {
				if (e.keyCode == 13) {
					vrX();
					com.wiris.js.JsDOMUtils.vTU(e);
				}
			});
			var vcX = js.Lib.document.createElement("div");
			vcX.className = "wrs_colorChooserPanel";
			var vsX = new Array();
			vsX.push("#ff0000");
			vsX.push("#ff00ff");
			vsX.push("#0000ff");
			vsX.push("#00ffff");
			vsX.push("#00ff00");
			vsX.push("#ffff00");
			vsX.push("#7f0000");
			vsX.push("#e5c304");
			vsX.push("#ae761e");
			vsX.push("#7f007f");
			vsX.push("#00007f");
			vsX.push("#007f7f");
			vsX.push("#007f00");
			vsX.push("#827f00");
			vsX.push("#000000");
			vsX.push("#191919");
			vsX.push("#333333");
			vsX.push("#4c4c4c");
			vsX.push("#666666");
			vsX.push("#7f7f7f");
			vsX.push("#999999");
			vsX.push("#b2b2b2");
			vsX.push("#cccccc");
			vsX.push("#e5e5e5");
			vsX.push("#ffffff");
			var vtX = js.Lib.document.createElement("tbody");
			var vuX = js.Lib.document.createElement("tr");
			var vr7 = 0;
			var i = HxOverrides.iter(vsX);
			while (i.hasNext()) {
				var color = [i.next()];
				var vvX = js.Lib.document.createElement("div");
				vvX.className = "wrs_colorButton";
				vvX.style.background = color[0];
				com.wiris.js.JsDOMUtils.addEventListener(vvX, "mousedown", (function(color) {
					return function(e) {
						vqX.value = color[0];
						vrX();
					};
				})(color));
				var v4X = js.Lib.document.createElement("td");
				v4X.appendChild(vvX);
				vuX.appendChild(v4X);
				++vr7;
				if (vr7 == 5) {
					vtX.appendChild(vuX);
					vuX = js.Lib.document.createElement("tr");
					vr7 = 0;
				}
			};
			if (vr7 != 0) {
				while (vr7 < 5) {
					vuX.appendChild(js.Lib.document.createElement("td"));
					++vr7;
				};
				vtX.appendChild(vuX);
			};
			var vwX = js.Lib.document.createElement("table");
			vwX.appendChild(vtX);
			vcX.appendChild(vwX);
			vcX.appendChild(vpX);
			com.wiris.js.JsDOMUtils.addEventListener(element, "click", function(e) {
				com.wiris.js.JsDOMUtils.vTU(e);
				if (!colorChooser.enabled) return;
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_pressed");
				var x = com.wiris.js.JsDOMUtils.vcU(element, vc1.vDV.vPN.parentNode);
				var vQ1 = com.wiris.js.JsDOMUtils.vdU(element, vc1.vDV.vPN.parentNode) + element.offsetHeight - 1;
				vqX.setAttribute("value", colorChooser.value);
				vqX.value = colorChooser.value;
				vc1.vDV.vHU(x, vQ1, vcX, function() {
					com.wiris.js.JsDOMUtils.vJU(element, "wrs_pressed");
					element.focus();
				});
				vqX.focus();
				vqX.select();
			});
		} else if (vl4.vcR() != null) {
			var vxX = vl4.vcR();
			element = js.Lib.document.createElement("div");
			if (vxX.vK5 != null) element.title = vxX.vK5;
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_comboButton");
			var icon = js.Lib.document.createElement("div");
			this.vxW(icon, vxX.icons[vxX.vD6], 0, 0, 0);
			element.appendChild(icon);
			var vyX = js.Lib.document.createElement("div");
			vyX.className = "wrs_comboButtonPanel";
			var i = HxOverrides.iter(vxX.icons);
			var vH4 = 0;
			while (i.hasNext()) {
				var vzX = js.Lib.document.createElement("div");
				this.vxW(vzX, i.next(), 0, 0, 0);
				com.wiris.js.JsDOMUtils.vvT(vzX, "wrs_comboButtonItem");
				vyX.appendChild(vzX);
				var index = [vH4];
				com.wiris.js.JsDOMUtils.addEventListener(vzX, "click", (function(index) {
					return function(e) {
						vxX.select(index[0]);
						vc1.vDV.vIU();
					};
				})(index));
				++vH4;
			};
			com.wiris.js.JsDOMUtils.addEventListener(element, "click", function(e) {
				com.wiris.js.JsDOMUtils.vTU(e);
				if (!vxX.enabled) return;
				com.wiris.js.JsDOMUtils.vvT(element, "wrs_pressed");
				var x = com.wiris.js.JsDOMUtils.vcU(element, vc1.vDV.vPN.parentNode);
				var vQ1 = com.wiris.js.JsDOMUtils.vdU(element, vc1.vDV.vPN.parentNode) + element.offsetHeight;
				vc1.vDV.vHU(x, vQ1, vyX, function() {
					com.wiris.js.JsDOMUtils.vJU(element, "wrs_pressed");
				});
			});
		};
		if (!vl4.enabled && vl4.action.command != "paste") {
			com.wiris.js.JsDOMUtils.vvT(element, "wrs_disabled");
			element.setAttribute("aria-disabled", "true");
		};
		this.vIS.push(new com.wiris.e1_51(vl4, element));
		this.vIS.push(new com.wiris.e1_51(vl4, elementClone));
		return element;
	},
	vkD: function(vl4) {
		var v4X = js.Lib.document.createElement("td");
		v4X.appendChild(this.vRX(vl4));
		return v4X;
	},
	vPX: function(i, id) {
		if (id != this.vpW) return;
		if (i.hasNext()) {
			this.v0Y(i.next(), false);
			var self = this;
			haxe.Timer.delay(function() {
				self.vPX(i, id);
			}, 1);
		} else {
			if (this.vCV.firstChild != null) {
				if (this.vKS[0].vD6 != null) this.vxW(this.vCV.firstChild.firstChild, this.vKS[0].vD6, 0, 0, 0);
				this.vLS = 0;
				com.wiris.js.JsDOMUtils.vvT(this.vCV.firstChild, "wrs_selected");
				com.wiris.js.JsDOMUtils.vvT(this.body.firstChild, "wrs_selected");
			};
			this.setOftenTab();
			this.setRecentTab();
			this.vWV = true;
		}
	},
	v0Y: function(tab, v1Y) {
		if (tab.v56) {
			var v2Y;
			if (this.browser.isIE() && Std.parseFloat(this.browser.getVersion()) <= 7) v2Y = js.Lib.document.createElement("div");
			else v2Y = js.Lib.document.createElement("button");
			v2Y.setAttribute("role", "tab");
			if (v1Y || tab.id == "contextual") v2Y.className = "wrs_context";
			if (tab.enabled) {
				v2Y.disabled = false;
				com.wiris.js.JsDOMUtils.vJU(v2Y, "wrs_disabled");
			} else {
				v2Y.disabled = true;
				com.wiris.js.JsDOMUtils.vgU(v2Y, "wrs_disabled");
			}; if (tab.vE6 != null) {
				var v3Y = js.Lib.document.createElement("span");
				this.vxW(v3Y, tab.vE6, 0, 0, 0);
				v2Y.appendChild(v3Y);
				v2Y.title = tab.title;
			} else v2Y.appendChild(js.Lib.document.createTextNode(tab.title));
			var panel = this.vCX(tab.panel, tab.id == "contextual");
			com.wiris.js.JsDOMUtils.addEventListener(v2Y, "click", vNU(this, this.vyW));
			com.wiris.js.JsDOMUtils.addEventListener(v2Y, "focus", vNU(this, this.v1X));
			this.vCV.appendChild(v2Y);
			this.body.appendChild(panel);
		} else {
			this.vCV.appendChild(js.Lib.document.createElement("span"));
			this.body.appendChild(js.Lib.document.createElement("span"));
		};
		this.vKS.push(tab);
		if (this.vLS == this.vKS.length - 1) this.tabChanged(null, -1, this.vKS.length - 1);
	},
	contextTabAdded: function(vc3, tab) {
		this.v0Y(tab, true);
	},
	componentUpdated: function(vc3, vl4) {
		var i = HxOverrides.iter(this.vIS);
		while (i.hasNext()) {
			var current = i.next();
			if (current.vl4 == vl4 && current.element) {
				if (vl4.enabled || vl4.action.command == "paste") {
					com.wiris.js.JsDOMUtils.vJU(current.element, "wrs_disabled");
					current.element.setAttribute("aria-disabled", "false");
				} else {
					com.wiris.js.JsDOMUtils.vvT(current.element, "wrs_disabled");
					current.element.setAttribute("aria-disabled", "true");
				};
				if (vl4.vfR() != null) {
					var button = vl4.vfR();
					if (button.vV5 && button.vhR) com.wiris.js.JsDOMUtils.vvT(current.element, "wrs_toggled");
					else com.wiris.js.JsDOMUtils.vJU(current.element, "wrs_toggled"); if (button.icon != null) this.vxW(current.element, button.icon, 2, this.vqW, this.vrW);
				} else if (vl4.vbR() != null) {
					var select = vl4.vbR();
					if (select.icon == null) {
						com.wiris.js.JsDOMUtils.vxS(current.element.firstChild.nextSibling);
						current.element.firstChild.nextSibling.appendChild(js.Lib.document.createTextNode(select.options.get(select.value)));
					};
					this.v4Y(select, current.element.firstChild);
				} else if (vl4.vcR() != null) {
					var vxX = vl4.vcR();
					var icon = current.element.firstChild;
					com.wiris.js.JsDOMUtils.vxS(icon);
					this.vxW(icon, vxX.icons[vxX.vD6], 0, 0, 0);
				}
			}
		}
	},
	v4Y: function(select, vlX) {
		var option = vlX.firstChild;
		var i = 0;
		while (option != null) {
			if (option.getAttribute("value") == select.value) {
				vlX.selectedIndex = i;
				return;
			};
			option = option.nextSibling;
			++i;
		}
	},
	componentFired: function(vc3, vl4) {
		this.vDV.vIU();
		var i = HxOverrides.iter(this.vIS);
		while (i.hasNext()) {
			var current = i.next();
			if (current.vl4 == vl4 && vl4.vbR() != null) {
				var select = vl4.vbR();
				this.v4Y(select, current.element.firstChild);
			}
		}
	},
	vxW: function(element, image, borderWidth, marginLeft, marginTop) {
		var v5Y = js.Lib.document.createElement("img");
		v5Y.setAttribute("src", this.resourceLoader.getPath(image.filePath));
		com.wiris.js.JsDOMUtils.vvT(v5Y, "wrs_image");
		if (element.getAttribute("title") != null) v5Y.setAttribute("title", element.getAttribute("title"));
		if (image.top != -1) {
			v5Y.style.marginLeft = -image.left + marginLeft + "px";
			v5Y.style.marginTop = -image.top + marginTop + "px";
			if (this.browser.isIE() && Std.parseFloat(this.browser.getVersion()) <= 7) {
				element.style.width = image.getWidth() + "px";
				element.style.height = image.getHeight() + "px";
			} else {
				element.style.width = image.getWidth() + borderWidth * 2 + "px";
				element.style.height = image.getHeight() + borderWidth * 2 + "px";
			}
		};
		v5Y.removeAttribute("width");
		v5Y.removeAttribute("height");
		com.wiris.js.JsDOMUtils.vxS(element);
		com.wiris.js.JsDOMUtils.vvT(element, "wrs_imageContainer");
		element.appendChild(v5Y);
	},
	vQX: function(link) {
		var v6Y = js.Lib.document.createElement("a");
		v6Y.setAttribute("href", this.resourceLoader.getPath(link.get("url")));
		v6Y.setAttribute("target", "_blank");
		v6Y.setAttribute("title", link.get("description"));
		v6Y.className = "wrs_linkButton";
		this.vxW(v6Y, link.get("icon"), 0, 0, 0);
		this.links.push(v6Y);
		this.vwW.appendChild(v6Y);
	},
	vrW: null,
	vqW: null,
	editor: null,
	vLS: null,
	browser: null,
	vH5: null,
	vDV: null,
	vpW: null,
	vKS: null,
	resourceLoader: null,
	vWV: null,
	vwW: null,
	links: null,
	hidden: null,
	vCV: null,
	editorModel: null,
	element: null,
	vIS: null,
	body: null,
	__class__: com.wiris.e1_41
};