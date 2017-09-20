com.wiris.e1_I = v91["com.wiris.e1_I"] = function() {
	this.vUH = new Array();
	this.vVH = new Array();
	this.styles = new Array();
	this.currentStyle = new com.wiris.e1_2();
	this.mode = com.wiris.e1_I.vvB;
	this.vxF = true;
};
com.wiris.e1_I.__name__ = ["com", "wiris", "e1_I"];
com.wiris.e1_I.split = function(s) {
	if (s == null) return null;
	var vnB = s.split(" ");
	var i;
	var vH4 = 0;
	var vd1 = 0,
		vc1 = vnB.length;
	while (vd1 < vc1) {
		var vW9 = vd1++;
		var c = vnB[vW9];
		if (StringTools.trim(c).length != 0) vnB[vH4++] = c;
	};
	if (vH4 == vnB.length) return vnB;
	var r = new Array();
	var vc1 = 0;
	while (vc1 < vH4) {
		var vW9 = vc1++;
		r[vW9] = vnB[vW9];
	};
	return r;
};
com.wiris.e1_I.join = function(vnB) {
	if (vnB == null) return null;
	var v5G = new StringBuf();
	var i;
	var vd1 = 0,
		vc1 = vnB.length;
	while (vd1 < vc1) {
		var vW9 = vd1++;
		if (vW9 > 0) v5G.b += Std.string(" ");
		v5G.b += Std.string(vnB[vW9]);
	};
	return v5G.b;
};
com.wiris.e1_I.prototype = {
	setAttributes: function(ve3) {
		this.ve3 = ve3;
	},
	getAttributes: function() {
		return this.ve3;
	},
	vWH: function(vNG, vQG) {
		var vQA = com.wiris.e1_2.vF2(vNG);
		if (vNG.isFlagMask(com.wiris.e1_2.vY2)) {
			if (!vNG.isFlagMask(com.wiris.e1_2.vZ2)) {
				var b = vQG == null ? false : vQG.isFlag(com.wiris.e1_2.vZ2);
				vQA.vy2(com.wiris.e1_2.vZ2, b);
			}
		} else if (vNG.isFlagMask(com.wiris.e1_2.vZ2)) {
			var b = vQG == null ? false : vQG.isFlag(com.wiris.e1_2.vY2);
			vQA.vy2(com.wiris.e1_2.vY2, b);
		};
		return vQA;
	},
	vgG: function(n) {
		this.vXH = n;
	},
	vOG: function() {
		return this.vYH;
	},
	vhE: function(vDA) {
		this.v8C = vDA;
	},
	vZH: function() {
		return this.vaH;
	},
	vbH: function() {
		return this.vcH;
	},
	vdH: function() {
		this.currentStyle = this.styles.pop();
	},
	veH: function(box) {
		this.styles.push(this.currentStyle);
		var vfH;
		if (this.v8C != null) {
			var vgH = this.v8C.getDefaultStyles();
			var vhH = this.v8C.vNB(box);
			var viH;
			viH = com.wiris.e1_2.join(vgH, vhH);
			viH = com.wiris.e1_2.join(viH, this.currentStyle);
			viH.vu2(com.wiris.e1_2.vAC);
			vfH = viH;
		} else vfH = this.currentStyle;
		vfH = this.vWH(vfH, null);
		var style = com.wiris.e1_2.vL2(box.styles, vfH);
		style = this.vWH(style, vfH);
		var vjH = false;
		var bold = false;
		var italic = false;
		if (style.isFlagMask(com.wiris.e1_2.vZ2) || style.isFlagMask(com.wiris.e1_2.vY2)) {
			vjH = true;
			bold = style.isFlag(com.wiris.e1_2.vZ2);
			italic = style.isFlag(com.wiris.e1_2.vY2);
		};
		var vkH;
		if (vjH) {
			if (bold && italic) vkH = "bold-italic";
			else if (bold) vkH = "bold";
			else if (italic) vkH = "italic";
			else vkH = "normal";
		} else vkH = "";
		var vlH = null;
		if (this.mode == com.wiris.e1_I.vkE) vlH = com.wiris.e1_2.vi2(style);
		vlH = this.vmH("style", vlH, null);
		if (vlH != null && this.mode == com.wiris.e1_I.viE) {
			var vQA = new com.wiris.e1_2();
			vQA.setParams(vlH);
			style.vJ2(vQA);
		};
		var vC2 = "";
		if (style.isFlagMask(com.wiris.e1_2.vX2)) vC2 = style.getClassType();
		vC2 = this.vnH("class", vC2, "");
		if (!(vC2 == "")) style.setClassType(vC2);
		var voH = "";
		if (style.isFlagMask(com.wiris.e1_2.vc2)) voH = style.isFlag(com.wiris.e1_2.vc2) ? "rtl" : "ltr";
		var vpH = this.vnH("dir", voH, "");
		if (vpH.length > 0) style.vy2(com.wiris.e1_2.vc2, vpH == "rtl");
		var vqH = this.vnH("mathvariant", vkH, "");
		var color = "";
		if (style.isFlagMask(com.wiris.e1_2.vM2)) color = com.wiris.util.css.CSSUtils.vc7(style.getColor());
		color = this.vnH("mathcolor", color, "");
		var displaystyle = "";
		if (style.isFlagMask(com.wiris.e1_2.vAC)) displaystyle = style.isFlag(com.wiris.e1_2.vAC) ? "true" : "false";
		displaystyle = this.vnH("displaystyle", displaystyle, "");
		var indentalign = "";
		if (style.isFlagMask(com.wiris.e1_2.vV2)) indentalign = com.wiris.e1_2.vl2(style.getAlign());
		indentalign = this.vnH("indentalign", indentalign, "");
		var fontSize = "";
		if (style.isFlagMask(com.wiris.e1_2.vT2)) fontSize = style.getFontSize() + "px";
		fontSize = this.vnH("mathsize", fontSize, "");
		if (this.mode == com.wiris.e1_I.viE) {
			vjH = false;
			if (vqH == "bold-italic") {
				vjH = true;
				bold = true;
				italic = true;
			} else if (vqH == "bold") {
				vjH = true;
				bold = true;
				italic = false;
			} else if (vqH == "italic") {
				vjH = true;
				bold = false;
				italic = true;
			} else if (vqH == "normal") {
				vjH = true;
				bold = false;
				italic = false;
			};
			if (vjH) {
				var vrH = false;
				if (box.vK8()) {
					var vL8 = js.Boot.vX3(box, com.wiris.e1_f);
					var text = this.vsH(null, "");
					if (text.length > 1) vrH = vL8.type == com.wiris.e1_f.vVE;
				};
				if (vfH == null || vfH.isFlag(com.wiris.e1_2.vY2) != italic || vrH) style.vy2(com.wiris.e1_2.vY2, italic);
				if (vfH == null || vfH.isFlag(com.wiris.e1_2.vZ2) != bold) style.vy2(com.wiris.e1_2.vZ2, bold);
			};
			if (color.length > 0) style.setColor(com.wiris.common.WInteger.v22(HxOverrides.substr(color, 1, null)));
			if (displaystyle.length > 0) style.vy2(com.wiris.e1_2.vAC, "true" == displaystyle);
			if (indentalign.length > 0) style.vz2(com.wiris.e1_2.vr2(indentalign));
			if (fontSize.length > 0) style.setParam("fontSize", fontSize);
			box.styles = style;
		};
		this.currentStyle = com.wiris.e1_2.join(this.currentStyle, style);
	},
	vjE: function(xml) {
		this.current = xml;
		this.vtH = com.wiris.util.xml.WXmlUtils.getElements(xml);
		this.vuH = 0;
		var vKE = this.vvH();
		if (vKE == null) {
			var vL8 = new com.wiris.e1_f();
			var text = xml.toString();
			vL8.vfE(com.wiris.util.xml.WXmlUtils.htmlUnescape(text));
			return vL8;
		};
		return vKE;
	},
	vmE: function(box) {
		this.doc = Xml.createDocument();
		this.current = this.doc;
		this.vVC(box);
		if (this.current.nodeType == Xml.Element && this.current.getNodeName() == "__document") this.current = this.doc;
		return this.current;
	},
	vVC: function(box) {
		if (this.mode == com.wiris.e1_I.vwH) this.vaH = new com.wiris.e1_Q();
		box.vwB(this);
	},
	vvH: function() {
		if (this.vuH < this.vtH.length) {
			var node = this.vtH[this.vuH];
			var vG2 = com.wiris.e1_I.vxH.get(node.getNodeName());
			if (vG2 == null) throw "Unknown node " + node.getNodeName();
			var b = vG2.vIC();
			this.vVC(b);
			return b;
		};
		return null;
	},
	vyH: function(box, i) {
		if (this.mode == com.wiris.e1_I.vkE || this.mode == com.wiris.e1_I.vfG) this.vVC(box.getChild(i));
		else if (this.mode == com.wiris.e1_I.viE) {
			var b = this.vvH();
			box.vpC(b);
		}
	},
	vzH: function(box) {
		if (this.mode == com.wiris.e1_I.vkE || this.mode == com.wiris.e1_I.vfG) {
			var i;
			var n = box.vN8();
			var vd1 = 0,
				vc1 = box.vN8();
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.vVC(box.getChild(n - vW9 - 1));
			}
		} else if (this.mode == com.wiris.e1_I.viE) {
			var b;
			do {
				b = this.vvH();
				if (b != null) box.vVD(0, b);
			} while (b != null);
		}
	},
	v0I: function(box, pos) {
		var i;
		if (this.mode == com.wiris.e1_I.vkE || this.mode == com.wiris.e1_I.vfG) {
			var vd1 = 0,
				vc1 = pos.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.vVC(box.getChild(pos[vW9]));
			}
		} else if (this.mode == com.wiris.e1_I.viE) {
			var vQA = new Array();
			var vd1 = 0,
				vc1 = pos.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				vQA[pos[vW9]] = this.vvH();
			};
			var vd1 = 0,
				vc1 = pos.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				box.vpC(vQA[vW9]);
			}
		}
	},
	v1I: function(box) {
		var v2I = this.vxF;
		this.vxF = false;
		if (this.mode == com.wiris.e1_I.vkE || this.mode == com.wiris.e1_I.vfG) {
			var i;
			var vd1 = 0,
				vc1 = box.vN8();
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.vVC(box.getChild(vW9));
			}
		} else if (this.mode == com.wiris.e1_I.viE) {
			var b;
			do {
				b = this.vvH();
				if (b != null) box.vpC(b);
			} while (b != null);
		};
		this.vxF = v2I;
	},
	v3I: function() {
		this.vtH = this.vVH.pop();
		this.vuH = this.vUH.pop();
		this.current = this.current.getParent();
	},
	v4I: function() {
		this.vVH.push(this.vtH);
		this.vUH.push(this.vuH);
	},
	vu5: function(tag) {
		if (this.mode == com.wiris.e1_I.vkE) {
			var name = this.current.getNodeName();
			if (!(name == tag)) throw "Begin and end tags do not match.";
		};
		this.v5I();
	},
	v5I: function() {
		if (this.mode == com.wiris.e1_I.vkE) {
			this.vdH();
			this.current = this.current.getParent();
		} else if (this.mode == com.wiris.e1_I.viE) {
			this.vdH();
			this.v3I();
		}
	},
	v6I: function(tag) {
		if (this.vuH >= this.vtH.length) return false;
		var node = this.vtH[this.vuH];
		if (!(node.getNodeName() == tag)) return false;
		this.vuH++;
		this.v4I();
		this.current = node;
		this.vuH = 0;
		this.vtH = com.wiris.util.xml.WXmlUtils.getElements(this.current);
		return true;
	},
	v7I: function(box, tag) {
		if (this.mode == com.wiris.e1_I.vvB) com.wiris.e1_I.vxH.set(tag, box);
		if (this.mode == com.wiris.e1_I.v8I) this.vcH = tag;
		if (this.mode == com.wiris.e1_I.vwH) this.vaH.vQB = tag;
		if (this.mode == com.wiris.e1_I.vkE) {
			var vTB = Xml.createElement(tag);
			this.current.addChild(vTB);
			this.current = vTB;
			this.veH(box);
		};
		if (this.mode == com.wiris.e1_I.vfG) {
			if (this.v9I == this.vXH) this.vYH = box;
			this.v9I++;
		};
		if (this.mode == com.wiris.e1_I.viE) {
			if (this.v6I(tag)) this.veH(box);
			else return false;
		};
		return true;
	},
	vAI: function(box, tag) {
		var b = this.v7I(box, tag);
		if (!b) throw "Tag " + tag + " not found.";
	},
	vBI: function(box) {
		if (this.vCI != null) this.vAI(box, this.vCI);
	},
	vDI: function() {
		if (this.mode == com.wiris.e1_I.viE) {
			var node = this.vtH[this.vuH];
			this.vEI = node.getNodeName();
		}
	},
	vFI: function(box, tag, current, vR8) {
		if (this.mode == com.wiris.e1_I.vvB) {
			this.vcH = null;
			com.wiris.e1_I.vxH.set(tag, box);
		};
		if (this.mode == com.wiris.e1_I.v8I) {
			if (current == vR8) this.vcH = tag;
		};
		if (this.mode == com.wiris.e1_I.vwH) {
			if (current == vR8) this.vCI = tag;
		};
		if (this.mode == com.wiris.e1_I.vkE) {
			if (current == vR8) this.vCI = tag;
		};
		if (this.mode == com.wiris.e1_I.viE) {
			if (this.vEI == tag) {
				this.vCI = tag;
				return vR8;
			}
		};
		return current;
	},
	vsH: function(s, vXC) {
		if (this.mode == com.wiris.e1_I.vkE) {
			var vTB = com.wiris.util.xml.WXmlUtils.createPCData(this.current, s);
			this.current.addChild(vTB);
		} else if (this.mode == com.wiris.e1_I.viE) {
			s = vXC;
			var vTB = this.current.firstChild();
			if (vTB != null) s = com.wiris.util.xml.WXmlUtils.getNodeValue(vTB);
		} else if (this.mode == com.wiris.e1_I.vGI) {
			var v = this.ve3.get("#text");
			if (v == null) return this.vHI(vXC);
			return v;
		} else if (this.mode == com.wiris.e1_I.vII) {
			if (s == null) this.ve3.remove("#text");
			else this.ve3.set("#text", s);
		};
		return s;
	},
	vJI: function(name, v, vnB, vXC) {
		if (this.mode == com.wiris.e1_I.vkE) return v;
		return vXC;
	},
	vKI: function(name, b, vXC) {
		var obj = this.vLI(name, b, vXC, "integer");
		if (obj == null) return vXC;
		return Std.parseInt(obj);
	},
	vMI: function(name, b, vXC) {
		var obj = this.vLI(name, b, vXC, "boolean");
		if (obj == null) return vXC;
		return obj == "true";
	},
	vHI: function(obj) {
		if (obj == null) return null;
		return obj.toString();
	},
	vLI: function(name, obj, vXC, type) {
		if (this.mode == com.wiris.e1_I.vkE) {
			if (!StringTools.startsWith(name, "#")) {
				if (obj == null || obj == vXC && obj == null || obj == vXC) this.current.remove(name);
				else this.current.set(name, obj.toString());
			}
		} else if (this.mode == com.wiris.e1_I.viE) {
			if (!StringTools.startsWith(name, "#")) {
				var v = com.wiris.util.xml.WXmlUtils.getAttribute(this.current, name);
				if (v == null) return this.vHI(vXC);
				return v;
			}
		} else if (this.mode == com.wiris.e1_I.vNI) {
			if (!StringTools.startsWith(name, "#")) return this.vHI(vXC);
		} else if (this.mode == com.wiris.e1_I.vGI || this.mode == com.wiris.e1_I.vUC) {
			if (this.mode == com.wiris.e1_I.vGI || !StringTools.startsWith(name, "#")) {
				var v = this.ve3.get(name);
				if (v == null) return this.vHI(vXC);
				return v;
			}
		} else if (this.mode == com.wiris.e1_I.vII) {
			if (obj == null) this.ve3.remove(name);
			else this.ve3.set(name, obj.toString());
		} else if (this.mode == com.wiris.e1_I.vwH) {
			var vOD = new Array();
			vOD[0] = name;
			vOD[1] = obj;
			vOD[2] = vXC;
			vOD[3] = type;
			this.vaH.vOI.push(vOD);
		};
		return this.vHI(obj);
	},
	vmH: function(name, h, vXC) {
		var s = com.wiris.util.css.CSSUtils.vPI(h);
		var vQI = com.wiris.util.css.CSSUtils.vPI(vXC);
		s = this.vnH(name, s, vQI);
		if (s == null) return null;
		return com.wiris.util.css.CSSUtils.vRI(s);
	},
	vSI: function(name, s, vXC) {
		if (this.mode == com.wiris.e1_I.vkE || this.mode == com.wiris.e1_I.vII) {
			this.vnH(name, com.wiris.e1_I.join(s), com.wiris.e1_I.join(vXC));
			return s;
		};
		if (this.mode == com.wiris.e1_I.vNI) return vXC;
		if (this.mode == com.wiris.e1_I.viE || this.mode == com.wiris.e1_I.vGI || this.mode == com.wiris.e1_I.vUC) return com.wiris.e1_I.split(this.vnH(name, null, com.wiris.e1_I.join(vXC)));
		return s;
	},
	vnH: function(name, s, vXC) {
		return this.vLI(name, s, vXC, "string");
	},
	v9F: function() {
		return this.mode;
	},
	setMode: function(m) {
		this.mode = m;
		if (this.mode == com.wiris.e1_I.vII) this.ve3 = new HaxeHash();
		if (this.mode == com.wiris.e1_I.vwH) this.vaH = new com.wiris.e1_Q();
		if (this.mode == com.wiris.e1_I.vfG) this.v9I = 0;
	},
	v8C: null,
	v9I: null,
	vXH: null,
	vYH: null,
	vaH: null,
	vCI: null,
	vcH: null,
	ve3: null,
	currentStyle: null,
	styles: null,
	vVH: null,
	vUH: null,
	vxF: null,
	vEI: null,
	vtH: null,
	vuH: null,
	current: null,
	doc: null,
	mode: null,
	__class__: com.wiris.e1_I
};