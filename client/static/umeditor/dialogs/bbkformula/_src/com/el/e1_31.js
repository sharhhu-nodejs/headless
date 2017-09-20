com.wiris.e1_31 = v91["com.wiris.e1_31"] = function(editorModel, resourceLoader) {
	var self = this;
	this.browser = new com.wiris.e1_z();
	this.vn3 = null;
	this.vRV = null;
	this.vSV = null;
	this.vTV = null;
	this.element = null;
	this.vUV = false;
	this.vVV = false;
	this.vqS = null;
	this.vWV = false;
	this.vXV = null;
	this.resourceLoader = resourceLoader;
	this.vYV = false;
	this.vZV = new Array();
	this.vaV = new Array();
	this.checkSyntax = false;
	this.vbV = null;
	this.backgroundColor = 16777215;
	this.vcV = false;
	this.vdV = false;
	this.veV = 0;
	this.vfV = null;
	this.rtl = false;
	this.vgV = null;
	this.vhV = true;
	this.editorModel = editorModel;
	this.editorModel.addEditorListener(this);
	this.editorModel.setBlink = function() {
		this.vSV = new haxe.Timer(500);
		this.vSV.run = vNU(this, this.vqV);
	};
	this.editorModel.clearBlink = function() {
		this.vSV && this.vSV.stop();
	}
};
com.wiris.e1_31.__name__ = ["com", "wiris", "e1_31"];
com.wiris.e1_31.__interfaces__ = [com.wiris.editor.EditorListener];
com.wiris.e1_31.prototype = {
	vyU: function(enabled) {
		this.vhV = enabled;
		if (this.element != null && !(this.browser.isIE() && Std.parseInt(this.browser.getVersion()) <= 8)) {
			if (enabled) this.element.style.overflow = null;
			else this.element.style.overflow = "hidden";
		}
	},
	viV: function(c) {
		return c - 5;
	},
	vjV: function(c) {
		return c - 5;
	},
	v8V: function(value) {
		if (value == "transparent") value = "#ffffff";
		this.backgroundColor = com.wiris.util.css.CSSUtils.vs2(value);
		if (this.element != null) this.element.style.backgroundColor = com.wiris.e1_01.vBT(this.backgroundColor);
	},
	v7V: function(enabled) {
		this.checkSyntax = enabled;
		this.vkV();
		if (enabled) this.editorModel.getTransformation();
	},
	vlV: function() {
		if (this.vmV == null) {
			this.vmV = new IntHash();
			this.vmV.set(190, 46);
			this.vmV.set(46, 127);
			this.vmV.set(13, 10);
		};
		return this.vmV;
	},
	vnV: function(k) {
		var voV = this.vlV();
		return voV.exists(k) ? voV.get(k) : k;
	},
	styleChanged: function(vc3) {},
	vpV: function() {
		if (this.vSV != null) this.vSV.stop();
		// return false;
		this.vSV = new haxe.Timer(500);
		this.vSV.run = vNU(this, this.vqV);
	},
	vkV: function() {
		var i = HxOverrides.iter(this.vaV);
		while (i.hasNext()) {
			var vrV = i.next();
			if (vrV.parentNode != null) vrV.parentNode.removeChild(vrV);
		};
		this.vaV = new Array();
	},
	vsV: function() {
		var i = HxOverrides.iter(this.vZV);
		while (i.hasNext()) {
			var vtV = i.next();
			if (vtV.parentNode != null) vtV.parentNode.removeChild(vtV);
		};
		this.vZV = new Array();
	},
	vuV: function() {
		this.vWV = false;
		if (this.element != null || this.editorModel.pureRender) {
			this.vkV();
			this.vsV();
			this.vn3 = null;
			this.vRV = null;
			if (!this.editorModel.pureRender) {
				var scrollLeft = this.element.scrollLeft;
				var scrollTop = this.element.scrollTop;
				this.vPN.className = "wrs_container";
			}

			// if(!this.vSV){
			// 	return;
			// }
			var vY4 = new com.wiris.e1_01(this.vPN, this.resourceLoader);
			vY4.vdT(this.vqS);
			this.editorModel.recalcClient(vY4);
			this.vqS = vY4.v3U();
			var vvV = this.editorModel.getFormulaHeight();
			var vwV = this.editorModel.getFormulaBaseline();
			this.vPN.style.width = com.wiris.js.JsDOMUtils.v6U(this.editorModel.getFormulaWidth()) + "px";
			this.vPN.style.height = com.wiris.js.JsDOMUtils.v6U(vvV) + "px";
			this.vPN.style.verticalAlign = 1 - vvV + vwV + "px";
			if (!this.editorModel.pureRender) {
				var self = this;
				//setTimeout(function() {}, 1000);
				if (this.checkSyntax) this.vxV();
				this.vyV();
			}
			this.editorModel.paintClient(vY4);
			if (!this.editorModel.pureRender) {
				if (vY4.rtl) {
					this.rtl = true;
					this.element && com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_formulaRTL");
				} else {
					this.rtl = false;
					this.element && com.wiris.js.JsDOMUtils.vJU(this.element, "wrs_formulaRTL");
				};
				this.vRV = js.Lib.document.createElement("div");
				com.wiris.js.JsDOMUtils.vvT(this.vRV, "wrs_inverseCaret");
				if (this.browser.vhS()) {
					this.vzV();
					this.vPN.appendChild(this.vRV);
				} else {
					this.vn3 = js.Lib.document.createElement("div");
					com.wiris.js.JsDOMUtils.vvT(this.vn3, "wrs_caret");
					this.vzV();
					this.vPN.appendChild(this.vRV);
					this.vPN.appendChild(this.vn3);
				};
				// this.vpV();
			}
			if (vY4.veT()) {
				this.editorModel.clearMetricsCache();
				if (this.vXV == null) {
					this.vXV = new haxe.Timer(100);
					this.vXV.run = vNU(this, this.vuV);
				}
			} else {
				this.vWV = true;
				if (this.vXV != null) {
					this.vXV.stop();
					this.vXV = null;
				}
			};
			if (!this.editorModel.pureRender) {
				if (!this.vVV) {
					//暂时没发现此处有什么用，注释此处可使渲染速度提高3倍左右
					//vY4.vgT(); 
					this.vVV = true;
				}
			}
		} else if (this.vXV == null) {
			this.vXV = new haxe.Timer(100);
			this.vXV.run = vNU(this, this.vuV);
		}
	},
	recalc: function() {
		if ((this.element != null || this.editorModel.pureRender) && this.editorModel.isRecalcNeeded()) {
			if (!this.editorModel.pureRender) this.vPN.className = "wrs_container";
			var vY4 = new com.wiris.e1_01(this.vPN, this.resourceLoader, false);
			vY4.vdT(this.vqS);
			this.editorModel.recalcClient(vY4);
		}
	},
	v0W: function(e) {
		if (this.vgV != null) clearTimeout(this.vgV);
		this.vgV = null;
	},
	v1W: function(e) {
		var v2W = com.wiris.js.JsDOMUtils.vrU(this.element, e, this.v3W(), 1);
		if (this.rtl) v2W[0] = this.v4W(v2W[0]);
		this.v5W(v2W[0], v2W[1]);
		if (this.vgV != null) clearTimeout(this.vgV);
		var self = this;
		this.vgV = setTimeout(function() {
			self.editorModel.setCaret(0, self.editorModel.getFormulaLength() - 1);
		}, 800);
	},
	v6W: function(v7W) {
		return v7W - this.vPN.offsetWidth + this.element.clientWidth;
	},
	v4W: function(position) {
		return position + this.vPN.offsetWidth - this.element.clientWidth;
	},
	v8W: function(e) {
		this.v9W();
		var button = e.which == null ? e.button : e.which;
		if (button == 1) {
			var vAW = com.wiris.js.JsDOMUtils.voU(this.element, e, this.v3W(), 1);
			var vnU = this.v3W();
			if (vAW[0] - vnU[0] < this.element.clientWidth && vAW[1] - vnU[1] < this.element.clientHeight) {
				this.focus();
				if (this.rtl) vAW[0] = this.v4W(vAW[0]);
				this.v5W(vAW[0], vAW[1]);
				this.vYV = true;
				com.wiris.js.JsDOMUtils.vTU(e);
			}
		}
	},
	vBW: function(e) {
		this.recalc();
		var vAW = com.wiris.js.JsDOMUtils.voU(this.element, e, this.v3W(), 1);
		var vX4 = this.editorModel.getPositionFromPoint(this.vjV(vAW[0]) | 0, this.viV(vAW[1]) | 0);
		this.editorModel.selectWord(vX4);
	},
	vCW: function(e) {
		this.focus();
	},
	vDW: function(text) {
		return false;
	},
	isIME: false,
	vEW: function(keyCode, shiftKey, ctrlKey, altKey, metaKey) {
		this.vcV = false;
		if (this.vBV.value.substring(0, "select: ".length) == "select: ") this.vBV.value = "";
		if (keyCode == 88 && shiftKey && ctrlKey) {
			if (this.vTV != null && !this.vTV.closed) this.vTV.close();
			this.vTV = js.Lib.window.open("about:blank", "wrs_code", "width=500, height=300, resizable=1");
			this.vTV.onload = vNU(this, this.vFW);
			this.vFW(null);
		};
		if ((ctrlKey || this.browser.vmS() == "Mac" && metaKey) && !altKey) {
			this.vGW();
			if (keyCode == 67 || keyCode == 86 || keyCode == 88) return false;
		};
		if (this.editorModel.handleKeyEvent(this.vnV(keyCode), shiftKey, ctrlKey, altKey)) {
			this.v9W();
			return true;
		};
		return false;
	},
	vHW: function(e, text) {
		this.vBV.value = "";
		var keyCode = e.keyCode;
		if (e.charCode != null) keyCode = e.charCode;
		if (!this.editorModel.keyEventIsHandled(this.vnV(keyCode), e.shiftKey, e.ctrlKey, e.altKey) && (keyCode >= 32 || keyCode == 0 && text.length > 0)) this.insertText(text);
	},
	vIW: function(e) {
		if (this.isIME && this.vBV.value.length > 0) {
			this.vHW(e, this.vBV.value);
		} else if (e.keyCode == 13 && this.vBV.value.length > 0) {
			e.keyCode = 0;
			this.vHW(e, this.vBV.value);
		}

	},
	vJW: function(e) {
		var keyCode = e.keyCode;
		if (e.charCode != null) keyCode = e.charCode;
		var text = keyCode >= 32 ? String.fromCharCode(keyCode) : "";
		this.vHW(e, text);
		com.wiris.js.JsDOMUtils.vTU(e);
	},

	preValue: '',
	vKW: function(e) {
		if (this.vcV) {
			if (this.vBV.value == "select: ") {
				this.editorModel.deleteSelection();
				this.vuV();
			} else if (this.vBV.value == "undo") this.editorModel.action("undo");
			this.vcV = false;
		} else {
			if (this.vfV != null) clearTimeout(this.vfV);
			var self = this;
			this.vfV = setTimeout(function() {
				self.vfV = null;

				if (self.isIME && !/[\u4e00-\u9fa5]/g.test(self.vBV.value) && self.preValue !== self.vBV.value) {
					self.preValue = self.vBV.value;
					return false;
				}

				self.preValue = self.vBV.value;

				if (self.vBV.value.length > 0) {
					if (self.vdV) {
						var i = 0;
						while (i < self.veV) {
							self.editorModel.handleKeyEvent(8, false, false, false);
							++i;
						}
					};
					self.insertText(self.vBV.value);
					if (self.vBV.value.charCodeAt(self.vBV.value.length - 1) == 32) {
						self.vdV = true;
						self.veV = self.vBV.value.length;
					} else self.v9W();
				}
			}, 1);
		}
	},
	insertText: function(text) {
		this.editorModel.insertText(text);
	},
	vLW: function(e) {
		if (e.keyCode === 229) {
			this.isIME = true;
		} else {
			this.isIME = false;
		}

		if (this.vEW(e.keyCode, e.shiftKey, e.ctrlKey, e.altKey, e.metaKey)) {
			com.wiris.js.JsDOMUtils.vTU(e);
			return;
		}
	},
	vMW: function(e) {
		var self = this;
		var propertyName = e.propertyName;
		setTimeout(function() {
			if (propertyName == "value" && self.vcV && self.vBV.value == "select: ") {
				self.editorModel.deleteSelection();
				self.vuV();
				self.vcV = false;
			}
		}, 1);
	},
	vNW: function(e) {
		if (this.vcV) {
			var vOW = com.wiris.js.JsDOMUtils.vjU(this.vBV);
			if (vOW != null && vOW[1] - vOW[0] == this.vBV.value.length) {
				this.editorModel.setCaret(0, this.editorModel.getFormulaLength() - 1);
				this.vcV = false;
			}
		}
	},
	vGW: function() {
		this.vcV = true;
		this.vBV.value = "undo";
		var vPW = this.editorModel.getSelectionMathML();
		if (vPW == null) vPW = "";
		this.vBV.value = "select: " + vPW;
		com.wiris.js.JsDOMUtils.vhU(this.vBV, "select: ".length, this.vBV.value.length);
	},
	vQW: function(e) {
		this.vGW();
	},
	vRW: function(e) {
		var self = this;
		setTimeout(function() {
			var vi3 = self.vBV.value.substring("select: ".length, self.vBV.value.length);
			try {
				self.editorModel.pasteMathML(vi3, 0);
			} catch (vSW) {
				self.editorModel.insertText(vi3);
			}
		}, 1);
	},
	vTW: function(e) {
		this.vUV = true;
		com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_focused");
		this.editorModel.trigger('focus');
		if (this.vn3 != null) com.wiris.js.JsDOMUtils.vJU(this.vn3, "wrs_blink");
		if (this.vRV != null) com.wiris.js.JsDOMUtils.vJU(this.vRV, "wrs_blink");
		this.vpV();
		this.editorModel.isEditing = true;
	},
	vUW: function(e) {
		this.vUV = false;
		this.v9W();
		com.wiris.js.JsDOMUtils.vJU(this.element, "wrs_focused");
		this.editorModel.trigger('blur');
		this.vpV();
		this.editorModel.isEditing = false;
	},
	v9W: function() {
		this.vdV = false;
		this.vcV = false;
		this.vBV.value = "";
	},
	vVW: function(e) {
		this.vYV = false;
	},
	vWW: function(e) {
		if (this.vYV) {
			this.recalc();
			var vAW = com.wiris.js.JsDOMUtils.voU(this.element, e, this.v3W(), 1);
			if (this.rtl) vAW[0] = this.v4W(vAW[0]);
			var selectionEnd = this.editorModel.getPositionFromPoint(this.vjV(vAW[0]) | 0, this.viV(vAW[1]) | 0);
			this.editorModel.setCaret(selectionEnd, this.vXW - selectionEnd);
		}
	},
	vYW: function(vc3) {},
	isReady: function() {
		return this.vWV;
	},
	v5W: function(x, vQ1) {
		this.recalc();
		this.vXW = this.editorModel.getPositionFromPoint(this.vjV(x) | 0, this.viV(vQ1) | 0);
		this.editorModel.setCaret(this.vXW, 0);
	},
	v3W: function() {
		var result = new Array();
		result[0] = this.element.scrollLeft;
		result[1] = this.element.scrollTop;
		if (this.rtl) {
			if (this.browser.vkS() || this.browser.vjS() || this.browser.vhS() || this.browser.vgS() || this.browser.isIE() && Std.parseInt(this.browser.getVersion()) == 7) result[0] = result[0] - this.element.scrollWidth + this.element.clientWidth;
			else if (this.browser.isIE() && Std.parseInt(this.browser.getVersion()) >= 8) result[0] = -result[0];
			result[0] += 10;
		};
		return result;
	},
	vZW: function(left, top) {
		if (this.rtl) {
			left -= 10;
			if (this.browser.vkS() || this.browser.vjS() || this.browser.vhS() || this.browser.vgS() || this.browser.isIE() && Std.parseInt(this.browser.getVersion()) == 7) left = left + this.element.scrollWidth - this.element.clientWidth;
			else if (this.browser.isIE() && Std.parseInt(this.browser.getVersion()) >= 8) left = -left;
		};
		this.element.scrollLeft = left | 0;
		this.element.scrollTop = top | 0;
	},
	getElement: function() {
		if (this.element != null) return this.element;
		this.element = js.Lib.document.createElement("div");
		com.wiris.js.JsDOMUtils.vvT(this.element, "wrs_formulaDisplay");
		if (this.browser.vhS()) {
			com.wiris.js.JsDOMUtils.addEventListener(this.element, "touchstart", vNU(this, this.v1W));
			com.wiris.js.JsDOMUtils.addEventListener(this.element, "touchend", vNU(this, this.v0W));
			com.wiris.js.JsDOMUtils.addEventListener(this.element, "click", vNU(this, this.vCW));
		} else {
			com.wiris.js.JsDOMUtils.addEventListener(this.element, "mousedown", vNU(this, this.v8W));
			com.wiris.js.JsDOMUtils.addEventListener(this.element, "click", vNU(this, this.vCW));
			com.wiris.js.JsDOMUtils.addEventListener(this.element, "dblclick", vNU(this, this.vBW));
			com.wiris.js.JsDOMUtils.addEventListener(js.Lib.document, "mousemove", vNU(this, this.vWW));
			com.wiris.js.JsDOMUtils.addEventListener(js.Lib.document, "mouseup", vNU(this, this.vVW));
			if (!this.browser.vgS()) {
				var self = this;
				var vaW = null;
				var vbW = Math.NaN;
				var vcW = Math.NaN;

				this.editorModel.setCaretInterval = function() {
					self.editorModel.caretIntervalId = setInterval(function() {
						var vnU = self.v3W();
						if (vaW == null || vaW[0] != vnU[0] || vaW[1] != vnU[1] || vbW != self.element.clientWidth || vcW != self.element.clientHeight) {
							vaW = vnU;
							vbW = self.element.clientWidth;
							vcW = self.element.clientHeight;
							self.vBV.parentNode.style.width = "1px";
							self.vBV.parentNode.style.height = "1px";
							self.vBV.parentNode.style.left = 5 + (self.rtl ? vnU[0] - 10 : vnU[0]) + "px";
							self.vBV.parentNode.style.top = vnU[1] + "px";
							self.vBV.parentNode.style.width = Math.max(0, self.element.clientWidth - 10) + "px";
							self.vBV.parentNode.style.height = self.element.clientHeight + "px";
							self.vBV.style.width = Math.max(0, self.element.clientWidth - 10) + "px";
							if (self.browser.isIE() && Std.parseFloat(self.browser.getVersion()) >= 9) self.vBV.style.height = self.element.clientHeight * 3 - 10 + "px";
							else self.vBV.style.height = self.element.clientHeight + 30 + "px";
						}
					}, 100);
				}

				this.editorModel.clearCaretInterval = function() {
					clearInterval(self.editorModel.caretIntervalId);
				}
			}
		};
		this.vPN = js.Lib.document.createElement("span");
		this.vPN.className = "wrs_container";
		this.element.appendChild(this.vPN);
		this.vBV = js.Lib.document.createElement("input");
		// this.vBV.setAttribute("autocapitalize", "off");
		this.vBV.setAttribute("autocomplete", "off");
		// this.vBV.setAttribute("autocorrect", "off");
		// this.vBV.setAttribute("spellcheck", "false");
		if (this.browser.vgS()) this.vBV.setAttribute("type", "email");
		else this.vBV.setAttribute("type", "text");
		com.wiris.js.JsDOMUtils.vvT(this.vBV, "wrs_focusElement");
		if (this.browser.vhS()) com.wiris.js.JsDOMUtils.vvT(this.vBV, "wrs_forIOS");
		else if (this.browser.vgS()) com.wiris.js.JsDOMUtils.vvT(this.vBV, "wrs_forAndroid");
		com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "focus", vNU(this, this.vTW));
		com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "blur", vNU(this, this.vUW));
		com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "keydown", vNU(this, this.vLW));
		com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "paste", vNU(this, this.vRW));
		com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "contextmenu", vNU(this, this.vQW));
		com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "select", vNU(this, this.vNW));
		if (this.browser.isIE()) {
			com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "propertychange", vNU(this, this.vMW));
			this.vBV.style.fontSize = "0";
		};
		if (this.browser.isIE() && Std.parseFloat(this.browser.getVersion()) < 9) {
			com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "keypress", vNU(this, this.vJW));
			com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "keyup", vNU(this, this.vIW));
		} else {
			com.wiris.js.JsDOMUtils.addEventListener(this.vBV, "input", vNU(this, this.vKW));
		}
		var vdW = js.Lib.document.createElement("div");
		vdW.className = "wrs_focusElementContainer";
		vdW.appendChild(this.vBV);
		this.element.appendChild(vdW);
		// this.element.style.backgroundColor = com.wiris.e1_01.vBT(this.backgroundColor);
		this.vuV();
		this.vyU(this.vhV);
		return this.element;
	},
	focus: function() {
		try {
			this.vBV.focus();
		} catch(e) {}
	},
	vFW: function(e) {
		var textarea = this.vTV.document.createElement("textarea");
		textarea.value = this.editorModel.getMathML();
		var veW = this.vTV.document.createElement("input");
		veW.setAttribute("type", "submit");
		var self = this;
		veW.onclick = function(vSW) {
			self.editorModel.setMathML(textarea.value);
			self.vTV.close();
		};
		this.vTV.document.body.appendChild(textarea);
		this.vTV.document.body.appendChild(veW);
		this.vTV.document.body.parentNode.style.height = "100%";
		this.vTV.document.body.style.margin = "5px";
		this.vTV.document.body.style.height = "100%";
		textarea.style.display = "block";
		textarea.style.width = "100%";
		var vfW = function(vSW) {
			textarea.style.height = self.vTV.document.body.offsetHeight - veW.offsetHeight - 10 + "px";
		};
		this.vTV.document.body.onresize = vfW;
		this.vTV.onresize = vfW;
		vfW(null);
	},
	transformationReceived: function(vc3, vj3) {
		this.vkV();
		this.vxV();
	},
	contentChanged: function(vc3) {
		if (this.checkSyntax) {
			if (this.vbV != null) clearTimeout(this.vbV);
			var self = this;
			this.vbV = setTimeout(function() {
				self.editorModel.getTransformation();
				self.vbV = null;
			}, com.wiris.e1_31.vgW);
		};
		this.vuV();
	},
	vxV: function() {
		if (this.vPN != null) {
			this.recalc();
			var vhW = this.editorModel.getErrorRectangles();
			if (vhW != null) {
				var i = HxOverrides.iter(vhW);
				while (i.hasNext()) {
					var vrV = js.Lib.document.createElement("div");
					com.wiris.js.JsDOMUtils.vvT(vrV, "wrs_error");
					var viW = i.next();
					vrV.style.left = viW.x + "px";
					vrV.style.top = viW.vQ1 + "px";
					vrV.style.width = com.wiris.js.JsDOMUtils.v6U(viW.width) + "px";
					vrV.style.height = com.wiris.js.JsDOMUtils.v6U(viW.height) + "px";
					this.vPN.insertBefore(vrV, this.vPN.firstChild);
					this.vaV.push(vrV);
				}
			}
		}
	},
	vyV: function() {
		this.recalc();
		var vjW = this.editorModel.getSelectionRectangles();
		if (vjW != null) {
			var i = HxOverrides.iter(vjW);
			while (i.hasNext()) {
				var vtV = js.Lib.document.createElement("div");
				com.wiris.js.JsDOMUtils.vvT(vtV, "wrs_selection");
				var vkW = i.next();
				vtV.style.left = vkW.x + "px";
				vtV.style.top = vkW.vQ1 + "px";
				vtV.style.width = com.wiris.js.JsDOMUtils.v6U(vkW.width) + "px";
				vtV.style.height = com.wiris.js.JsDOMUtils.v6U(vkW.height) + "px";
				if (this.vlW(this.backgroundColor)) com.wiris.js.JsDOMUtils.vvT(vtV, "wrs_dark");
				else com.wiris.js.JsDOMUtils.vvT(vtV, "wrs_light");
				this.vPN.insertBefore(vtV, this.vPN.firstChild);
				this.vZV.push(vtV);
			}
		}
	},
	vlW: function(color) {
		var vCT = color >> 16 & 255;
		var vDT = color >> 8 & 255;
		var vET = color & 255;
		return (vCT * 299 + vDT * 587 + vET * 114) / 1000 < 128;
	},
	vzV: function() {
		if (this.element != null) {
			this.recalc();
			var vmW = this.editorModel.getCaretRectangle();
			if (vmW != null) {
				if (this.browser.vhS()) {
					this.vBV.style.fontSize = vmW.height - 2 + "px";
					this.vBV.style.height = this.vBV.style.fontSize;
					if (this.rtl) this.vBV.parentNode.style.left = vmW.x - this.vPN.offsetWidth + this.element.clientWidth - 3 + "px";
					else this.vBV.parentNode.style.left = vmW.x + 4 + "px";
					this.vBV.parentNode.style.top = vmW.vQ1 + 5 + 2 + "px";
					this.vBV.parentNode.style.height = this.vBV.style.fontSize;
				} else if (this.vn3 != null) {
					this.vn3.style.left = vmW.x + "px";
					this.vn3.style.top = vmW.vQ1 + "px";
					this.vn3.style.width = com.wiris.js.JsDOMUtils.v6U(vmW.width) + "px";
					this.vn3.style.height = com.wiris.js.JsDOMUtils.v6U(vmW.height) + "px";
					if (this.vlW(this.backgroundColor)) com.wiris.js.JsDOMUtils.vvT(this.vn3, "wrs_light");
					else com.wiris.js.JsDOMUtils.vvT(this.vn3, "wrs_dark");
				}
			} else if (this.vn3 != null) {
				this.vn3.style.left = "-1000px";
				this.vn3.style.top = "-1000px";
				this.vn3.style.width = "0";
				this.vn3.style.height = "0";
			};
			if (this.vRV != null) {
				var vnW = this.editorModel.getInverseCaretRectangle();
				if (vnW != null && !(vmW.x == vnW.x && vmW.vQ1 == vnW.vQ1)) {
					this.vRV.style.left = vnW.x + "px";
					this.vRV.style.top = vnW.vQ1 + "px";
					this.vRV.style.width = com.wiris.js.JsDOMUtils.v6U(vnW.width) + "px";
					this.vRV.style.height = com.wiris.js.JsDOMUtils.v6U(vnW.height) + "px";
					if (this.vlW(this.backgroundColor)) com.wiris.js.JsDOMUtils.vvT(this.vRV, "wrs_light");
					else com.wiris.js.JsDOMUtils.vvT(this.vRV, "wrs_dark");
				} else {
					this.vRV.style.left = "-1000px";
					this.vRV.style.top = "-1000px";
					this.vRV.style.width = "0";
					this.vRV.style.height = "0";
				}
			};
			if (this.vhV) {
				var vnU = this.v3W();
				var x = this.rtl ? this.v4W(vnU[0]) : vnU[0];
				var vm3 = this.editorModel.updateBounds(x | 0, this.element.scrollTop, this.element.clientWidth, this.element.clientHeight, 5, !this.vYV);
				this.vZW(this.rtl ? this.v6W(vm3[0]) : vm3[0], vm3[1]);
			}
		}
	},
	voW: function() {
		return;
		this.vBV.value = "";
		this.vBV.setAttribute("value", "a");
		this.vBV.value = "a";
	},
	clipboardChanged: function(vc3) {},
	caretPositionChanged: function(vc3) {
		this.recalc();
		this.vzV();
		this.vsV();
		this.vyV();
		if (!this.editorModel.pureRender && this.editorModel.isEditing) {
			if (this.vn3 != null) com.wiris.js.JsDOMUtils.vJU(this.vn3, "wrs_blink");
			if (this.vRV != null) com.wiris.js.JsDOMUtils.vJU(this.vRV, "wrs_blink");
			this.vpV();
		}
	},
	blur: function() {
		this.vBV.blur();
	},
	vqV: function() {
		if (this.vn3 != null) {
			if (com.wiris.js.JsDOMUtils.v2U(this.vn3, "wrs_blink")) com.wiris.js.JsDOMUtils.vJU(this.vn3, "wrs_blink");
			else com.wiris.js.JsDOMUtils.vvT(this.vn3, "wrs_blink");
		};
		if (this.vRV != null) {
			if (com.wiris.js.JsDOMUtils.v2U(this.vRV, "wrs_blink")) com.wiris.js.JsDOMUtils.vJU(this.vRV, "wrs_blink");
			else com.wiris.js.JsDOMUtils.vvT(this.vRV, "wrs_blink");
		}
	},
	vhV: null,
	vgV: null,
	rtl: null,
	vfV: null,
	veV: null,
	vdV: null,
	vcV: null,
	backgroundColor: null,
	vbV: null,
	checkSyntax: null,
	vmV: null,
	vaV: null,
	vZV: null,
	vXW: null,
	vYV: null,
	resourceLoader: null,
	vXV: null,
	vWV: null,
	vqS: null,
	vVV: null,
	vBV: null,
	vUV: null,
	element: null,
	editorModel: null,
	vPN: null,
	vTV: null,
	vSV: null,
	vRV: null,
	vn3: null,
	browser: null,
	__class__: com.wiris.e1_31
};