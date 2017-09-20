com.wiris.e1_01 = v91["com.wiris.e1_01"] = function(vPN, resourceLoader, vpS) {
	if (vpS == null) vpS = true;
	com.wiris.e1_01.initialize(resourceLoader);
	this.browser = new com.wiris.e1_z();
	this.support = new com.wiris.support();
	this.vPN = vPN;
	this.vqS = new HaxeHash();
	this.vrS = com.wiris.e1_2.vD2(100);
	this.vsS = false;
	this.resourceLoader = resourceLoader;
	this.vtS = false;
	this.style = this.vrS;
	this.vuS = "";
	this.vvS = "";
	this.x = 0;
	this.vQ1 = 0;
	this.vwS = true;
	if (vpS) com.wiris.js.JsDOMUtils.vxS(this.vPN);
	this.vyS = js.Lib.document.createElement("span");
	this.vyS.className = "formulaTemp1";
	this.vyS.style.position = "absolute";
	this.vyS.style.top = com.wiris.e1_01.vzS;
	this.vyS.style.whiteSpace = "nowrap";
	this.v0T = js.Lib.document.createElement("span");
	this.v0T.style.position = "fixed";
	this.v0T.style.top = com.wiris.e1_01.vzS;
	this.v0T.style.left = "0";
	this.v0T.style.margin = "0";
	this.v0T.style.padding = "0";
	this.v1T = js.Lib.document.createTextNode("x");
	this.v0T.appendChild(this.v1T);
	this.v2T = js.Lib.document.createElement("img");
	// this.v2T.setAttribute("src", this.resourceLoader.getPath("decoration/baseline_mark.png"));
	this.v2T.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAAD0lEQVQIW2P8z8AARIQBAE0FAgBmVTuXAAAAAElFTkSuQmCC");
	this.v2T.style.height = "0";
	this.v2T.style.width = "0";
	this.v2T.id = "baseline_mark";
	this.v0T.appendChild(this.v2T);
	this.vyS.appendChild(this.v0T);
	this.vPN.appendChild(this.vyS);
	this.setColor(com.wiris.e1_01.v3T);
	this.setFontFamily(com.wiris.e1_01.v4T);
	this.setFontSize(com.wiris.e1_01.v5T);
};
com.wiris.e1_01.__name__ = ["com", "wiris", "e1_01"];
com.wiris.e1_01.__interfaces__ = [com.wiris.util.graphics.ClientGraphicsContext];
com.wiris.e1_01.v6T = null;
com.wiris.e1_01.v7T = null;
com.wiris.e1_01.v8T = null;
com.wiris.e1_01.initialize = function(resourceLoader) {
	if (com.wiris.e1_01.v8T == null) {
		com.wiris.e1_01.v8T = new HaxeHash();
		com.wiris.e1_01.v9T(Xml.parse(resourceLoader.loadResource("characters.xml")));
		com.wiris.e1_01.v6T = new Array();
		com.wiris.e1_01.v7T = new HaxeHash();
		com.wiris.e1_01.v6T.push("drawFont");
		com.wiris.e1_01.v6T.push("jsRootFont");
		com.wiris.e1_01.vAT("horizontal", "wrs_horizontalChar");
		com.wiris.e1_01.vAT("brack_sm", "wrs_specialSmallChar");
		com.wiris.e1_01.vAT("brackets", "wrs_specialChar");
		com.wiris.e1_01.vAT("math1_rtl", "wrs_mathRTLChar");
		com.wiris.e1_01.vAT("math1", "wrs_mathChar");
		com.wiris.e1_01.v6T.push("negationFont");
		com.wiris.e1_01.v6T.push("Arial");
	}
};
com.wiris.e1_01.vAT = function(name, className) {
	com.wiris.e1_01.v6T.push(name);
	com.wiris.e1_01.v7T.set(name, className);
};
com.wiris.e1_01.vBT = function(color) {
	var vCT = color >> 16 & 255;
	var vDT = color >> 8 & 255;
	var vET = color & 255;
	return "rgb(" + vCT + "," + vDT + "," + vET + ")";
};
com.wiris.e1_01.v9T = function(node) {
	if ("" + Std.string(node.nodeType) == "element" && node.getNodeName() == "char") {
		var charCode = Std.parseInt(node.get("c"));
		var type = node.get("t");
		var vJ1 = String.fromCharCode(charCode);
		if (type != null && type.length > 0) vJ1 += ":" + type;
		com.wiris.e1_01.v8T.set(vJ1, true);
	};
	if ("" + Std.string(node.nodeType) == "element" || "" + Std.string(node.nodeType) == "document") {
		var i = node.iterator();
		while (i.hasNext()) com.wiris.e1_01.v9T(i.next());
	}
};
com.wiris.e1_01.compare = function(s, min) {
	if (s.length == 0) return 0;
	var i = HxOverrides.iter(s);
	var x = i.next();
	while (i.hasNext()) {
		var v9B = i.next();
		if (min) {
			if (v9B < x) x = v9B;
		} else if (v9B > x) x = v9B;
	};
	return x;
};
com.wiris.e1_01.prototype = {
	selects: function(selector) {
		if (selector.length == 0) return true;
		var vs4 = selector.split("@");
		if (vs4.length == 0) return true;
		if (vs4[0] != "js") return false;
		if (vs4.length > 1) {
			if ("@windows@osx@ios@android@linux@*@".indexOf("@" + vs4[1] + "@") < 0) return false;
			if (vs4[1] == "windows" && this.browser.vmS() != "Windows") return false;
			if (vs4[1] == "osx" && this.browser.vmS() != "Mac") return false;
			if (vs4[1] == "ios" && this.browser.vmS() != "iOS") return false;
			if (vs4[1] == "android" && this.browser.vmS() != "Android") return false;
			if (vs4[1] == "linux" && this.browser.vmS() != "Linux") return false;
			if (vs4.length > 2) {
				if (this.browser.isIE()) {
					if ("@ie@ie7@ie8@ie9@ie10@".indexOf("@" + vs4[2] + "@") < 0) return false;
					if (vs4[2] == "ie7" && Std.parseInt(this.browser.getVersion()) != 7) return false;
					if (vs4[2] == "ie8" && Std.parseInt(this.browser.getVersion()) != 8) return false;
					if (vs4[2] == "ie9" && Std.parseInt(this.browser.getVersion()) != 9) return false;
					if (vs4[2] == "ie10" && Std.parseInt(this.browser.getVersion()) != 10) return false;
				};
				if (this.browser.vkS() && vs4[2] != "chrome") return false;
				if (this.browser.viS() && vs4[2] != "firefox") return false;
			}
		};
		return true;
	},
	fontExists: function(fontFamily) {
		return "@Arial@Times New Roman@Courier New@Tahoma@Verdana@".indexOf("@" + fontFamily + "@") >= 0;
	},
	fillRect: function(x, vQ1, width, height) {
		x += this.x;
		vQ1 += this.vQ1;
		var div = js.Lib.document.createElement("span");
		div.style.top = vQ1 + "px";
		div.style.left = x + "px";
		div.style.width = width + "px";
		div.style.height = height + "px";
		div.style.background = this.vFT;
		div.style.position = "absolute";
		div.style.zIndex = 0;
		this.vPN.appendChild(div);
	},
	vGT: function(vKA) {
		if (!com.wiris.e1_01.v7T.exists(vKA)) return null;
		return com.wiris.e1_01.v7T.get(vKA);
	},
	drawPolyline: function(vEA, vFA, px, vV9, length) {},
	getFonts: function() {
		return com.wiris.e1_01.v6T;
	},
	canDisplay: function(vKA, character) {
		var text = String.fromCharCode(character);
		if (vKA == "jsRootFont") return character >= com.wiris.editor.formula.WCharacter.vc9 && character <= com.wiris.editor.formula.WCharacter.vh9;
		if (vKA == "a") return com.wiris.e1_01.v8T.get(text + ":a") != null;
		if (vKA == "math1") return com.wiris.e1_01.v8T.get(text + ":m") != null;
		if (vKA == "math1_rtl") return com.wiris.e1_01.v8T.get(text + ":r") != null;
		if (vKA == "horizontal") return com.wiris.e1_01.v8T.get(text + ":h") != null;
		if (vKA == "brackets") return com.wiris.e1_01.v8T.get(text + ":b") != null;
		if (vKA == "brack_sm") return com.wiris.e1_01.v8T.get(text + ":s") != null;
		return this.fontFamily.toLowerCase() == vKA.toLowerCase();
	},
	getMetrics: function(vKA, text) {
		return this.vHT(vKA, text, false);
	},
	vIT: function(x, vQ1, width, height, code) {
		if (this.rtl && Std.parseInt(this.browser.getVersion()) == 7) x -= width;
		var div = js.Lib.document.createElement("span");
		div.style.left = x - 1 + "px";
		div.style.top = vQ1 - 1 + "px";
		div.style.width = width + "px";
		div.style.height = height + "px";
		div.style.position = "absolute";
		div.style.zIndex = 2;
		this.vPN.appendChild(div);
		div.innerHTML = code;
	},
	vJT: function(x, vQ1, width, height, code) {
		if (this.rtl && !this.browser.isIE()) x -= width;
		var div = js.Lib.document.createElement("span");
		div.style.left = x + "px";
		div.style.top = vQ1 + "px";
		div.style.width = width + "px";
		div.style.height = height + "px";
		div.style.position = "absolute";
		div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" style=\"position:absolute;z-index:2;width: 100%;\">" + code + "</svg>";
		this.vPN.appendChild(div);
	},
	getLineWidth: function() {
		return Math.max(this.style.getLineWidth() * this.style.getZoom() * this.style.getP() / 100, 1) | 0;
	},
	vKT: function(x, vQ1, width, height, vOA, vPA) {
		var code;
		if (vPA == 360) {
			var vA2 = this.getLineWidth();
			width -= vA2;
			height -= vA2;
			code = "<v:oval xmlns=\"urn:schemas-microsoft-com:vml\" style=\"behavior: url(#default#VML);margin:0;padding:0;display:inline-block;z-index:2;";
			code += "width: " + width + ";";
			code += "height: " + height + ";\" ";
			code += "filled=\"false\" stroke=\"true\" strokecolor=\"" + this.vFT + "\" strokeweight=\"" + vA2 + "px\" />";
		} else {
			var vA2 = this.getLineWidth();
			var vwL = Math.ceil(vA2 / 2) | 0;
			if (this.rtl) x -= width - vwL;
			width -= vA2;
			height -= vA2;
			x += vwL;
			vQ1 += vwL;
			vOA = 90 - (360 + vOA) % 360;
			var vLT = vOA - vPA;
			code = "<v:arc xmlns=\"urn:schemas-microsoft-com:vml\" style=\"behavior: url(#default#VML);margin:0;padding:0;display:inline-block;z-index:2;position:absolute;";
			code += "width:" + width + "px;";
			code += "height:" + height + "px;\" ";
			code += "startangle=\"" + vOA + "\" endangle=\"" + vLT + "\" filled=\"false\" stroke=\"true\" strokecolor=\"" + this.vFT + "\" strokeweight=\"" + vA2 + "px\" />";
		};
		this.vIT(this.x + x, this.vQ1 + vQ1, width, height, code);
	},
	vMT: function(x, vQ1, width, height, vOA, vPA) {
		var code;
		if (vPA == 360) {
			// var vNT = width / 2;
			// var vOT = height / 2;
			// var vPT = width - this.getLineWidth();
			// var vQT = height - this.getLineWidth();
			// var vRT = vPT / 2;
			// var vST = vQT / 2;
			// code = "<ellipse cx=\"" + vNT + "\" cy=\"" + vOT + "\" rx=\"" + vRT + "\" ry=\"" + vST + "\" style=\"fill:none;stroke:" + this.vFT + ";stroke-width:" + this.getLineWidth() + "\" />";
			if (this.rtl && !this.browser.isIE()) x -= width;

			var div = js.Lib.document.createElement("span");
			div.style.left = x + "px";
			div.style.top = vQ1 + "px";
			div.style.width = width + "px";
			div.style.height = height + "px";
			div.style.position = "absolute";
			div.style.border = "1px solid #000000";
			div.style.borderColor = this.vFT || '#000000';
			div.style.borderRadius = "50%";
			div.style.marginLeft = "-1px";
			div.style.marginTop = "-1px";
			// div.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" style=\"position:absolute;z-index:2;width: 100%;\">" + code + "</svg>";
			this.vPN.appendChild(div);

		} else {
			var vNT = width / 2;
			var vOT = height / 2;
			var vPT = width - this.getLineWidth();
			var vQT = height - this.getLineWidth();
			var vRT = vPT / 2;
			var vST = vQT / 2;
			var vTT = vNT + Math.cos(vOA * Math.PI / 180.0) * vRT;
			var vUT = vOT + -Math.sin(vOA * Math.PI / 180.0) * vST;
			var vVT = vNT + Math.cos((vOA + vPA) * Math.PI / 180.0) * vRT;
			var vWT = vOT + -Math.sin((vOA + vPA) * Math.PI / 180.0) * vST;
			var vXT = vPA > 180 ? 1 : 0;
			var path = "M" + vTT + "," + vUT + " ";
			path += "A" + vRT + "," + vST + " ";
			path += "0 ";
			path += vXT + ",";
			path += "0 ";
			path += vVT + "," + vWT;
			code = "<path d=\"" + path + "\" style=\"stroke:" + this.vFT + ";stroke-width:" + this.getLineWidth() + ";fill:none\" />";
			this.vJT(this.x + x, this.vQ1 + vQ1, width, height, code);
		};
	},
	drawArc: function(x, vQ1, width, height, vOA, vPA) {
		if (!this.browser.isIE() || Std.parseFloat(this.browser.getVersion()) >= 9) this.vMT(x, vQ1, width, height, vOA, vPA);
		else this.vKT(x, vQ1, width, height, vOA, vPA);
	},
	vYT: function(c) {
		c.style.color = this.vFT;
	},
	vZT: function(vKA, text, vaT) {
		if (text == "x") return vaT;
		var vBK = this.getStyle();
		var vxE = com.wiris.e1_2.vD2(vBK.getP());
		if (vBK.isFlagMask(com.wiris.e1_2.vT2)) vxE.setFontSize(vBK.getFontSize());
		if (vBK.isFlagMask(com.wiris.e1_2.vW2)) vxE.setFontFamily(vBK.getFontFamily());
		if (vBK.isFlagMask(com.wiris.e1_2.vP2)) vxE.vw2(vBK.getZoom());
		this.setStyle(vxE, vxE);
		var vbT = this.vHT(vKA, "x", true);
		this.setStyle(vBK, vBK);
		return [vaT[0], vbT[1], vbT[2]];
	},
	setStyle: function(style, voF) {
		this.style = style;
		if (voF.isFlagMask(com.wiris.e1_2.vT2)) this.setFontSize(voF.getFontSize());
		if (voF.isFlagMask(com.wiris.e1_2.vM2)) this.setColor(voF.getColor());
		if (voF.isFlagMask(com.wiris.e1_2.vW2)) this.setFontFamily(voF.getFontFamily());
		var vGE = new Array();
		this.vvS = "";
		if (style.isFlagMask(com.wiris.e1_2.vY2)) {
			if (style.isFlag(com.wiris.e1_2.vY2)) {
				vGE.push("wrs_italic");
				this.vvS += ":italic";
			} else {
				vGE.push("wrs_notItalic");
				this.vvS += ":notItalic";
			}
		};
		if (style.isFlagMask(com.wiris.e1_2.vZ2)) {
			if (style.isFlag(com.wiris.e1_2.vZ2)) {
				vGE.push("wrs_bold");
				this.vvS += ":bold";
			} else {
				vGE.push("wrs_notBold");
				this.vvS += ":notBold";
			}
		};
		if (style.isFlagMask(com.wiris.e1_2.vW2)) {
			vGE.push(this.vcT(style.getFontFamily()));
			this.vvS += ":" + style.getFontFamily();
		};
		this.vuS = vGE.join(" ");
	},
	vdT: function(vqS) {
		if (vqS != null) this.vqS = vqS;
	},
	getFontSize: function() {
		return this.fontSize;
	},
	setFontSize: function(fontSize) {
		this.fontSize = fontSize;
	},
	setFontFamily: function(fontFamily) {
		this.fontFamily = fontFamily;
	},
	setColor: function(color) {
		this.vFT = com.wiris.e1_01.vBT(color);
		this.color = color;
	},
	setBracketsSmaller: function(b) {
		this.vtS = b;
	},
	veT: function() {
		return this.vsS || !this.vfT();
	},
	vgT: function() {
		var vhT = js.Lib.document.createElement("span");
		vhT.className = "wrs_aChar";
		vhT.appendChild(js.Lib.document.createTextNode("a"));
		var viT = js.Lib.document.createElement("span");
		viT.className = "wrs_mathChar";
		viT.appendChild(js.Lib.document.createTextNode("+"));
		var vjT = js.Lib.document.createElement("span");
		vjT.className = "wrs_mathRTLChar";
		vjT.innerHTML = "&#8773;";
		var vkT = js.Lib.document.createElement("span");
		vkT.className = "wrs_horizontalChar";
		vkT.appendChild(js.Lib.document.createTextNode(String.fromCharCode(61952)));
		var vlT = js.Lib.document.createElement("span");
		vlT.className = "wrs_specialChar";
		vlT.appendChild(js.Lib.document.createTextNode(String.fromCharCode(8214)));
		var vmT = js.Lib.document.createElement("span");
		vmT.className = "wrs_specialSmallChar";
		vmT.appendChild(js.Lib.document.createTextNode(String.fromCharCode(8214)));
		var vnT = js.Lib.document.createElement("span");
		vnT.style.position = "absolute";
		vnT.style.top = com.wiris.e1_01.vzS;
		vnT.className = "wrs_fontContainer";
		vnT.appendChild(vhT);
		vnT.appendChild(viT);
		vnT.appendChild(vjT);
		vnT.appendChild(vkT);
		vnT.appendChild(vlT);
		vnT.appendChild(vmT);
		this.vPN.parentNode.insertBefore(vnT, this.vPN);
	},
	voT: function(vKA) {
		return this.getMetrics(vKA, String.fromCharCode(61442))[0] > this.getMetrics("Arial", "x")[0] * 2;
	},
	vHT: function(vKA, text, vpT) {
		var _this = this;
		var vHH = text + ":" + this.style.getP() * this.style.getZoom() + ":" + this.style.getFontSize() + this.vvS;
		if (vKA == "brackets") vHH += ":b";
		if (vKA == "brack_sm") vHH += ":s";
		if (vpT) vHH += ":d";
		var vqT = this.vqS.get(vHH);
		if (vqT != null) return vqT;
		if (vKA == "jsRootFont") {
			var charCode = HxOverrides.cca(text, 0);
			var vQ9 = Math.round(this.getMetrics("Arial", "x")[1] * 0.1) | 0;
			var vrT = [0, 0, 0];
			if (charCode >= com.wiris.editor.formula.WCharacter.vc9 && charCode <= com.wiris.editor.formula.WCharacter.vd9) {
				var height = 14 + (charCode - com.wiris.editor.formula.WCharacter.vc9) * 2;
				vrT = [13, height, height - vQ9];
			};
			if (charCode >= com.wiris.editor.formula.WCharacter.ve9 && charCode <= com.wiris.editor.formula.WCharacter.vf9) {
				var height = 14 + (charCode - com.wiris.editor.formula.WCharacter.ve9) * 2;
				vrT = [13, height, height - vQ9];
			};
			if (charCode == com.wiris.editor.formula.WCharacter.vg9 || charCode == com.wiris.editor.formula.WCharacter.vh9) vrT = [1, 10, 10];
			return vrT;
		};
		var vsT = true;
		var vtT = false;
		var vuT = this.vGT(vKA);
		if (vuT != null) vtT = true;
		if (text.length == 1 && HxOverrides.cca(text, 0) == 61442) vsT = false;
		else if (vtT && !this.voT(vKA)) {
			this.vsS = true;
			vsT = false;
		};
		this.v0T.className = this.vuS;
		com.wiris.js.JsDOMUtils.vvT(this.v0T, vuT);
		this.v0T.style.fontSize = this.fontSize * (this.style.getP() * this.style.getZoom()) / 100 + "px";
		var vwT = js.Lib.document.createTextNode(text);
		this.v0T.replaceChild(vwT, this.v1T);
		this.v1T = vwT;
		var baseline = this.v2T.offsetTop;

		// ie8在计算baseline会有延迟。
		if (baseline > 1000) baseline = baseline / 100;

		if (this.v2T.offsetHeight > 0) {
			vsT = false;
			this.vsS = true;
			baseline = this.v2T.offsetHeight;
		};
		var vxT = vpT ? vHH : vHH + ":d";
		var vyT = !vpT ? vHH : HxOverrides.substr(vHH, 0, vHH.length - 2);
		var vrT = [this.v0T.offsetWidth, this.v0T.offsetHeight, baseline];
		var vzT;
		if (vtT) {
			var v0U = com.wiris.js.JsDOMUtils.v1U(this.v0T, "font-size");
			var fontSize = Std.parseInt(HxOverrides.substr(v0U, 0, v0U.length - 2));
			vzT = [vrT[0], vrT[1], vrT[2]];
			if (com.wiris.js.JsDOMUtils.v2U(this.v0T, "wrs_specialSmallChar")) {
				vzT[1] = Math.round(fontSize * 340.0 / 1024.0);
				vzT[2] = vzT[1];
			} else if (com.wiris.js.JsDOMUtils.v2U(this.v0T, "wrs_specialChar")) {
				vzT[1] = Math.round(fontSize * 896.0 / 1024.0);
				vzT[2] = vzT[1];
			}
		} else vzT = this.vZT(vKA, text, vrT); if (vsT) {
			this.vqS.set(vxT, vrT);
			this.vqS.set(vyT, vzT);
		};
		if (vpT) return vrT;
		return vzT;
	},
	getStyle: function() {
		return this.style;
	},
	v3U: function() {
		if (!this.vfT()) return null;
		return this.vqS;
	},
	vcT: function(fontFamily) {
		var i = HxOverrides.iter(fontFamily.toLowerCase().split(" "));
		fontFamily = i.next();
		while (i.hasNext()) {
			var v4U = i.next();
			if (v4U.length > 0) {
				fontFamily += v4U.toUpperCase().charAt(0);
				if (v4U.length > 1) fontFamily += HxOverrides.substr(v4U, 1, v4U.length - 1);
			}
		};
		return "wrs_font_" + fontFamily;
	},
	getColor: function() {
		return this.color;
	},
	endTranslate: function(x, vQ1, width, height) {
		this.x -= x;
		this.vQ1 -= vQ1;
	},
	drawVerticalLineWithType: function(id, x, vQ1, height, type) {
		x += this.x;
		vQ1 += this.vQ1;
		var vA2 = this.getLineWidth();
		var v5U = vA2 / 2 | 0;
		var line = js.Lib.document.createElement("span");
		if (type == "dotted") {
			line.style.borderLeftStyle = "dotted";
			line.style.borderLeftColor = this.vFT;
			line.style.borderLeftWidth = vA2 + "px";
		} else if (type == "dashed") {
			line.style.borderLeftStyle = "dashed";
			line.style.borderLeftColor = this.vFT;
			line.style.borderLeftWidth = vA2 + "px";
		} else {
			line.style.background = this.vFT;
			line.style.width = vA2 + "px";
		};
		line.style.position = "absolute";
		line.style.zIndex = 2;
		line.style.top = vQ1 - v5U + "px";
		line.style.left = x - v5U + "px";
		line.style.height = com.wiris.js.JsDOMUtils.v6U(height + 2 * v5U) + "px";
		line.innerHTML = "&nbsp;";
		this.vPN.appendChild(line);
	},
	drawVerticalLine: function(id, x, vQ1, height) {
		x += this.x;
		vQ1 += this.vQ1;
		var vA2 = this.getLineWidth();
		var v5U = vA2 / 2 | 0;
		var line = js.Lib.document.createElement("span");
		line.className = 'wrs_vertical';
		line.style.position = "absolute";
		line.style.zIndex = 2;
		line.style.background = this.vFT || "#097bdc";
		// line.style.background = "#097bdc";
		line.style.top = vQ1 - v5U + "px";
		line.style.left = x - v5U + "px";
		line.style.width = vA2 + "px";
		line.style.height = com.wiris.js.JsDOMUtils.v6U(height + 2 * v5U) + "px";
		line.innerHTML = "&nbsp;";
		this.vPN.appendChild(line);
	},

	/*
		@Atype:箭头方向，top-right(tr), bottom-right(br), top-left(tl), bottom-left(bl), center-left(cl), center-right(cr)
			  鱼钩箭头⇀，str, sbr, stl, sbl, scl, scr
	 */
	drawText: function(id, vKA, text, x, vQ1, baseline, Atype) {
		x += this.x;
		vQ1 += this.vQ1;
		if (vKA == "jsRootFont") {
			var v7U = js.Lib.document.createElement("img");
			var _uri = "plugin.js".replace(/\/[^\/]*.js/i, '\/');
			var src = _uri + "resources/charImages/" + StringTools.hex(HxOverrides.cca(text, 0)).toLowerCase() + (!this.support.svg() ? ".png" : ".svg");
			if(/f140/.test(src)){return;}
			var vrT = this.vHT(vKA, text, true);
			v7U.setAttribute("src", src);
			v7U.style.position = "absolute";
			v7U.style.zIndex = 2;
			v7U.style.top = vQ1 + baseline - vrT[2] + "px";
			v7U.style.left = x + "px";
			v7U.style.width = vrT[0] + "px";
			v7U.style.height = vrT[1] + "px";
			this.vPN.appendChild(v7U);
		} else {
			var v8U = js.Lib.document.createElement("span");
			this.vYT(v8U);
			var vuT = this.vGT(vKA);
			if (vuT != null) com.wiris.js.JsDOMUtils.vvT(v8U, vuT);
			com.wiris.js.JsDOMUtils.vvT(v8U, this.vuS);
			v8U.style.fontSize = this.fontSize * (this.style.getP() * this.style.getZoom()) / 100 + "px";
			v8U.style.position = "absolute";
			v8U.style.zIndex = 2;
			v8U.style.left = x + "px";

			var _top = vQ1 + baseline - this.vHT(vKA, text, true)[2];
			v8U.style.top = _top + "px";

			// if(text == "⎯"){
			// 	v8U.style.borderBottom="solid red 1.5px";
			// 	v8U.style.top = _top - 7 + "px";
			// }
			// console.log('text: ',text.charCodeAt(0));

			// if(text.charCodeAt(0) == 60){
			// 	v8U.style.left = x + 12 + "px";
			// }
			// else if(text.charCodeAt(0) == 62213){
			// 	text = '︿';
			// 	v8U.style.left = x + 1 + "px";
			// 	v8U.style.top = _top - 3 + "px";
			// 	v8U.style.transform="scale(1.1,2.5)";
			// 	v8U.style.webkitTransform="scale(1.1,2.5)";
			// 	v8U.style.mozTransform="scale(1.1,2.5)";
			// 	v8U.style.msTransform="scale(1.1,2.5)";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62212){
			// 	text = '﹀';
			// 	v8U.style.top = _top + 1 + "px";
			// 	v8U.style.transform="scale(1.1,2.3)";
			// 	v8U.style.webkitTransform="scale(1.1,2.3)";
			// 	v8U.style.mozTransform="scale(1.1,2.3)";
			// 	v8U.style.msTransform="scale(1.1,2.3)";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62210){
			// 	text = "╭ ";
			// 	v8U.style.fontSize = this.fontSize * (this.style.getP() * this.style.getZoom()) / 100 + 2 + "px";
			// 	v8U.style.transform = "scale(1,1.3) translateY(1px)";
			// 	v8U.style.webkitTransform="scale(1,1.3) translateY(1px)";
			// 	v8U.style.mozTransform="scale(1,1.3) translateY(1px)";
			// 	v8U.style.msTransform="scale(1,1.3) translateY(1px)";
			// 	v8U.style.top = _top - 3 + "px";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62211){
			// 	text = "╮";
			// 	v8U.style.fontSize = this.fontSize * (this.style.getP() * this.style.getZoom()) / 100 + 2 + "px";
			// 	v8U.style.transform = "scale(1,1.3) translateY(1px)";
			// 	v8U.style.webkitTransform="scale(1,1.3) translateY(1px)";
			// 	v8U.style.mozTransform="scale(1,1.3) translateY(1px)";
			// 	v8U.style.msTransform="scale(1,1.3) translateY(1px)";
			// 	v8U.style.top = _top - 3 + "px";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62209){
			// 	text = "╯";
			// 	v8U.style.top = v8U.style.top = _top - 2 + "px";
			// 	v8U.style.transform = "scale(1,1.3)";
			// 	v8U.style.webkitTransform="scale(1,1.3)";
			// 	v8U.style.mozTransform="scale(1,1.3)";
			// 	v8U.style.msTransform="scale(1,1.3)";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62208){
			// 	text = "╰";
			// 	v8U.style.top = v8U.style.top = _top - 2 + "px";
			// 	v8U.style.transform = "scale(1,1.3)";
			// 	v8U.style.webkitTransform="scale(1,1.3)";
			// 	v8U.style.mozTransform="scale(1,1.3)";
			// 	v8U.style.msTransform="scale(1,1.3)";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62214){
			// 	text = '╭';
			// 	v8U.style.transform = "skew(-188deg, -17deg) translate(-1px,-1px) translateY(2px)";
			// 	v8U.style.webkitTransform="skew(-188deg, -17deg) translate(-1px,-1px) translateY(2px)";
			// 	v8U.style.mozTransform="skew(-188deg, -17deg) translate(-1px,-1px) translateY(2px)";
			// 	v8U.style.msTransform="skew(-188deg, -17deg) translate(-1px,-1px) translateY(2px)";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62215){
			// 	text = "╭";
			// 	v8U.style.transform = "skew(13deg, 8deg) rotateY(180deg) translateY(2px)";
			// 	v8U.style.webkitTransform="skew(13deg, 8deg) rotateY(180deg) translateY(2px)";
			// 	v8U.style.mozTransform="skew(13deg, 8deg) rotateY(180deg) translateY(2px)";
			// 	v8U.style.msTransform="skew(13deg, 8deg) rotateY(180deg) translateY(2px)";
			// 	v8U.style.top = _top - 2 + "px";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62216){
			// 	text = "╰";
			// 	v8U.style.transform = "skew(22deg, 3deg)";
			// 	v8U.style.webkitTransform="skew(22deg, 3deg)";
			// 	v8U.style.mozTransform="skew(22deg, 3deg)";
			// 	v8U.style.msTransform="skew(22deg, 3deg)";
			// 	v8U.style.top = _top - 2 + "px";
			// 	v8U.style.fontWeight = '900';
			// }else if(text.charCodeAt(0) == 62217){
			// 	text = "╰";
			// 	v8U.style.transform = "skew(-29deg, -2deg) rotateY(180deg)";
			// 	v8U.style.webkitTransform="skew(-29deg, -2deg) rotateY(180deg)";
			// 	v8U.style.mozTransform="skew(-29deg, -2deg) rotateY(180deg)";
			// 	v8U.style.msTransform="skew(-29deg, -2deg) rotateY(180deg)";
			// 	v8U.style.top = _top - 2 + "px";
			// 	v8U.style.fontWeight = '900';
			// }
			// else if(text.charCodeAt(0) == 9122 || text.charCodeAt(0) == 9123 || text.charCodeAt(0) == 9121){
			// 	v8U.style.left = x + "px";
			// }


			// if (vuT){
			// 		if(/[↔→⇀←↼]/.test(text)){//只对箭头做处理，记录当前横线的高度
			// 			if(_top >= 0){
			// 				v8U.style.top = _top - 1 + "px";
			// 			}
			// 		}
			// 		if(text == "⎯" || text.charCodeAt(0) == 61952){//这个编码无法在html中显示，使用英文状态下的下划线(__)代替
			// 			v8U.style.fontFamily = "horizontal";

			// 			// text = '__';
			// 			// var _offset = 6;
			// 			// if(_top <= 0){
			// 			// 	_top = _top - 6;
			// 			// }else{
			// 			// 	_top = _top - 8;
			// 			// }
			// 			// v8U.style.top = _top + "px";
			// 			// this.lastTop = _top;
			// 			// //根据箭头类型来调整横线高度
			// 			// if(Atype){
			// 			// 	if (Atype == 'tr' || Atype == 'str') {
			// 			// 		v8U.style.left = x + 1 + "px";
			// 			// 	}else if(Atype == 'tl' || Atype == 'stl'){
			// 			// 		v8U.style.left = x - 2 + "px";
			// 			// 	}
			// 			// }
			// 		}


			// }
			// if(text.charCodeAt(0) === 12289){
			// 	text = '&#12289';
			// }
			var vwT = js.Lib.document.createTextNode(text);
			v8U.appendChild(vwT);
			this.vPN.appendChild(v8U);
		}
	},
	v9U: function(vnA, voA, vpA, vqA) {
		var vAU;
		var vBU;
		var vCU;
		var vDU;
		if (vnA < vpA) {
			vAU = vnA;
			vCU = vpA;
		} else {
			vAU = vpA;
			vCU = vnA;
		}; if (voA < vqA) {
			vBU = voA;
			vDU = vqA;
		} else {
			vBU = vqA;
			vDU = voA;
		};
		vnA = vnA - vAU;
		vpA = vpA - vAU;
		voA = voA - vBU;
		vqA = vqA - vBU;
		var vvL = this.getLineWidth() / 2 | 0;
		this.vIT(this.x + vAU - vvL, this.vQ1 + vBU - vvL, vCU - vAU, vDU - vBU, "<line xmlns=\"urn:schemas-microsoft-com:vml\" " + "style=\"behavior: url(#default#VML);display:inline-block;margin:0;padding:0;position:absolute;\" " + "strokecolor=\"" + this.vFT + "\" " + "from=\"" + vnA + "," + voA + "\" to=\"" + vpA + "," + vqA + "\" strokeweight=\"" + this.getLineWidth() + "px\"></line>");
	},
	vEU: function(vnA, voA, vpA, vqA) {
		var vAU;
		var vBU;
		var vCU;
		var vDU;
		if (vnA < vpA) {
			vAU = vnA;
			vCU = vpA;
		} else {
			vAU = vpA;
			vCU = vnA;
		}; if (voA < vqA) {
			vBU = voA;
			vDU = vqA;
		} else {
			vBU = vqA;
			vDU = voA;
		};
		vnA = vnA - vAU;
		vpA = vpA - vAU;
		voA = voA - vBU;
		vqA = vqA - vBU;
		var vvL = this.getLineWidth() / 2 | 0;
		this.vJT(this.x + vAU - vvL, this.vQ1 + vBU - vvL, vCU - vAU, vDU - vBU, "<line x1=\"" + vnA + "\" y1=\"" + voA + "\" x2=\"" + vpA + "\" y2=\"" + vqA + "\" style=\"stroke:" + this.vFT + ";stroke-width:" + this.getLineWidth() + ";\"/>");
	},
	drawLine: function(vnA, voA, vpA, vqA) {
		if (!this.browser.isIE() || Std.parseFloat(this.browser.getVersion()) >= 9) this.vEU(vnA, voA, vpA, vqA);
		else this.v9U(vnA, voA, vpA, vqA);
	},
	drawHorizontalLineWithType: function(id, x, vQ1, width, type) {
		x += this.x;
		vQ1 += this.vQ1;
		var vA2 = this.getLineWidth();
		var v5U = vA2 / 2 | 0;
		var line = js.Lib.document.createElement("span");
		if (type == "dotted") {
			line.style.borderTopStyle = "dotted";
			line.style.borderTopColor = this.vFT;
			line.style.borderTopWidth = vA2 + "px";
		} else if (type == "dashed") {
			line.style.borderTopStyle = "dashed";
			line.style.borderTopColor = this.vFT;
			line.style.borderTopWidth = vA2 + "px";
		} else {
			line.style.background = this.vFT;
			line.style.height = vA2 + "px";
		};
		line.style.position = "absolute";
		line.style.zIndex = 2;
		line.style.top = vQ1 - v5U + "px";
		line.style.left = x - v5U + "px";
		line.style.width = com.wiris.js.JsDOMUtils.v6U(width + 2 * v5U) + "px";
		line.innerHTML = "&nbsp;";
		this.vPN.appendChild(line);
	},
	drawHorizontalLine: function(id, x, vQ1, width) {
		x += this.x;
		vQ1 += this.vQ1;
		var vA2 = this.getLineWidth();
		var v5U = vA2 / 2 | 0;
		var line = js.Lib.document.createElement("span");
		line.style.position = "absolute";
		line.style.zIndex = 2;
		line.className = 'bbk_horizontal';
		line.style.background = this.vFT;
		line.style.top = vQ1 - v5U + "px";
		line.style.left = x - v5U + "px";
		line.style.width = com.wiris.js.JsDOMUtils.v6U(width + 2 * v5U) + "px";
		line.style.height = vA2 + "px";
		line.innerHTML = "&nbsp;";
		this.vPN.appendChild(line);
	},
	beginTranslate: function(x, vQ1, width, height) {
		if (this.vwS) {
			this.rtl = this.style.isFlag(com.wiris.e1_2.vc2);
			this.vwS = false;
		};
		this.x += x;
		this.vQ1 += vQ1;
	},
	vfT: function() {
		return this.voT("brackets") && com.wiris.js.JsDOMUtils.vFU(js.Lib.document.body, this.vPN);
	},
	rtl: null,
	vwS: null,
	browser: null,
	vQ1: null,
	x: null,
	vvS: null,
	vuS: null,
	style: null,
	vtS: null,
	vFT: null,
	resourceLoader: null,
	vsS: null,
	vrS: null,
	v2T: null,
	v1T: null,
	v0T: null,
	vyS: null,
	vqS: null,
	fontSize: null,
	fontFamily: null,
	vPN: null,
	color: null,
	__class__: com.wiris.e1_01
};