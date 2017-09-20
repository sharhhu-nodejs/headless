if (!com.wiris.editor.formula) com.wiris.editor.formula = {};

com.wiris.editor.formula.WCharacter = v91["com.wiris.editor.formula.WCharacter"] = function() {};
com.wiris.editor.formula.WCharacter.__name__ = ["com", "wiris", "editor", "formula", "WCharacter"];
com.wiris.editor.formula.WCharacter.ve8 = function(c) {
	if (48 <= c && c <= 57) return true;
	if (1632 <= c && c <= 1641) return true;
	if (1776 <= c && c <= 1785) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.vf8 = function(c) {
	return com.wiris.editor.formula.WCharacter.vg8(c) || c == 95;
};
com.wiris.editor.formula.WCharacter.vh8 = function(c) {
	return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vj8, c);
};
com.wiris.editor.formula.WCharacter.vk8 = function(c) {
	return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vl8, c);
};
com.wiris.editor.formula.WCharacter.vm8 = function(c) {
	return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vn8, c);
};
com.wiris.editor.formula.WCharacter.vo8 = function(c) {
	return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vp8, c);
};
com.wiris.editor.formula.WCharacter.vi8 = function(v, c) {
	var min = 0;
	var max = v.length - 1;
	do {
		var vq8 = Math.floor((min + max) / 2);
		var vr8 = v[vq8];
		if (c == vr8) return true;
		else if (c < vr8) max = vq8 - 1;
		else min = vq8 + 1;
	} while (min <= max);
	return false;
};
com.wiris.editor.formula.WCharacter.vs8 = function(str) {
	var vt8 = "";
	var i = 0;
	while (i < str.length) {
		var c = HxOverrides.cca(str, i);
		var vH4 = 0;
		while (vH4 < com.wiris.editor.formula.WCharacter.vu8.length) {
			if (c == com.wiris.editor.formula.WCharacter.vu8[vH4]) {
				c = com.wiris.editor.formula.WCharacter.vu8[vH4 + 1];
				break;
			};
			vH4 += 2;
		};
		vt8 += com.wiris.e1_61.v12(c);
		++i;
	};
	return vt8;
};
com.wiris.editor.formula.WCharacter.vv8 = function(c) {
	var i = 0;
	while (i < com.wiris.editor.formula.WCharacter.vw8.length) {
		if (c == com.wiris.editor.formula.WCharacter.vw8[i]) return true;
		++i;
	};
	return false;
};
com.wiris.editor.formula.WCharacter.vx8 = function(c) {
	var i = 0;
	while (i < com.wiris.editor.formula.WCharacter.vy8.length) {
		if (com.wiris.editor.formula.WCharacter.vy8[i] == c) return com.wiris.editor.formula.WCharacter.vy8[i + 1];
		i += 2;
	};
	return -1;
};
com.wiris.editor.formula.WCharacter.vz8 = function(c) {
	var i = 1;
	while (i < com.wiris.editor.formula.WCharacter.vy8.length) {
		if (com.wiris.editor.formula.WCharacter.vy8[i] == c) return com.wiris.editor.formula.WCharacter.vy8[i - 1];
		i += 2;
	};
	return -1;
};
com.wiris.editor.formula.WCharacter.vg8 = function(c) {
	if (com.wiris.editor.formula.WCharacter.ve8(c)) return false;
	if (65 <= c && c <= 90) return true;
	if (97 <= c && c <= 122) return true;
	if (192 <= c && c <= 696 && c != 215 && c != 247) return true;
	if (867 <= c && c <= 1521) return true;
	if (1552 <= c && c <= 8188) return true;
	if (c == 8450 || c == 8461 || c == 8469 || c == 8472 || c == 8473 || c == 8474 || c == 8477 || c == 8484) return true;
	if (com.wiris.editor.formula.WCharacter.v09(c)) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.v19 = function(c) {
	return c >= 97 && c <= 122 || c >= 224 && c <= 255 || c >= 591 && c >= 659 || c >= 661 && c <= 687 || c >= 940 && c <= 974;
};
com.wiris.editor.formula.WCharacter.v29 = function(c) {
	if (com.wiris.editor.formula.WCharacter.v39(c) || com.wiris.editor.formula.WCharacter.v09(c) || com.wiris.editor.formula.WCharacter.v49(c)) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.v59 = function(s) {
	var i = s.length - 1;
	while (i >= 0) {
		if (!com.wiris.editor.formula.WCharacter.v69(HxOverrides.cca(s, i))) return false;
		--i;
	};
	return true;
};
com.wiris.editor.formula.WCharacter.v69 = function(c) {
	if (c >= 1536 && c <= 1791 && !com.wiris.editor.formula.WCharacter.ve8(c)) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.v49 = function(c) {
	if (c >= 1424 && c <= 1535) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.v09 = function(c) {
	if (c >= 13312 && c <= 40959) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.v79 = function(c) {
	if (c >= 945 && c <= 969) return true;
	else if (c >= 913 && c <= 937 && c != 930) return true;
	else if (c == 977 || c == 981 || c == 982) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.v39 = function(c) {
	if (c >= 2304 && c < 2431) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.v89 = function(s) {
	var i = s.length - 1;
	while (i >= 0) {
		if (!com.wiris.editor.formula.WCharacter.v39(HxOverrides.cca(s, i))) return false;
		--i;
	};
	return true;
};
com.wiris.editor.formula.WCharacter.v99 = function(c) {
	if (com.wiris.editor.formula.WCharacter.v49(c) || com.wiris.editor.formula.WCharacter.v69(c)) return true;
	return false;
};
com.wiris.editor.formula.WCharacter.vA9 = function(c) {
	if (97 <= c && c <= 122 || 945 <= c && c <= 969) return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vB9, c);
	return true;
};
com.wiris.editor.formula.WCharacter.vC9 = function(c) {
	if (97 <= c && c <= 122 || 945 <= c && c <= 969) return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vD9, c);
	else if (65 <= c && c <= 90) return false;
	return true;
};
com.wiris.editor.formula.WCharacter.vE9 = function(c) {
	return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vF9, c);
};
com.wiris.editor.formula.WCharacter.vG9 = function(c) {
	return com.wiris.editor.formula.WCharacter.vi8(com.wiris.editor.formula.WCharacter.vH9, c);
};
com.wiris.editor.formula.WCharacter.vI9 = function(l) {
	var index = -1;
	if (l < 100) index = com.wiris.editor.formula.WCharacter.vJ9.indexOf("@00" + l + "@");
	else if (l < 1000) index = com.wiris.editor.formula.WCharacter.vJ9.indexOf("@0" + l + "@");
	else index = com.wiris.editor.formula.WCharacter.vJ9.indexOf("@" + l + "@"); if (index != -1) {
		var s = com.wiris.editor.formula.WCharacter.vK9.substring(index + 1, index + 5);
		return Std.parseInt(s);
	};
	return l;
};
com.wiris.editor.formula.WCharacter.vL9 = function(vM9) {
	var index = -1;
	if (vM9 < 100) index = com.wiris.editor.formula.WCharacter.vK9.indexOf("@00" + vM9 + "@");
	else if (vM9 < 1000) index = com.wiris.editor.formula.WCharacter.vK9.indexOf("@0" + vM9 + "@");
	else index = com.wiris.editor.formula.WCharacter.vK9.indexOf("@" + vM9 + "@"); if (index != -1) {
		var s = com.wiris.editor.formula.WCharacter.vJ9.substring(index + 1, index + 5);
		return Std.parseInt(s);
	};
	return vM9;
};

com.wiris.editor.formula.FormulaModel = v91["com.wiris.editor.formula.FormulaModel"] = function() {
	var s;
	s = new com.wiris.e1_I();
	s.setMode(com.wiris.e1_I.vvB);
	new com.wiris.e1_V().vwB(s);
	new com.wiris.e1_f().vwB(s);
	new com.wiris.e1_h().vwB(s);
	new com.wiris.e1_i().vwB(s);
	new com.wiris.e1_a().vwB(s);
	new com.wiris.e1_d().vwB(s);
	new com.wiris.e1_S().vwB(s);
	new com.wiris.e1_X().vwB(s);
	new com.wiris.e1_j().vwB(s);
	new com.wiris.e1_P().vwB(s);
	new com.wiris.e1_T().vwB(s);
	new com.wiris.e1_b().vwB(s);
	new com.wiris.e1_U().vwB(s);
	new com.wiris.e1_e().vwB(s);
	new com.wiris.e1_c().vwB(s);
	var vxB = "";
	vxB += com.wiris.e1_61.v12(1580);
	vxB += com.wiris.e1_61.v12(1575);
	vxB += ",";
	vxB += com.wiris.e1_61.v12(1580);
	vxB += com.wiris.e1_61.v12(1578);
	vxB += com.wiris.e1_61.v12(1575);
	vxB += ",";
	vxB += com.wiris.e1_61.v12(1592);
	vxB += com.wiris.e1_61.v12(1575);
	this.v54("sin,cos,tan,log,ln," + vxB);
	this.vyB = null;
	this.mode = com.wiris.editor.formula.FormulaModel.vy3;
	this.display = com.wiris.editor.formula.FormulaModel.v04;
	this.setEmptyBoxColor(com.wiris.editor.formula.FormulaModel.vzB);
	this.setEmptyScriptBoxColor(com.wiris.editor.formula.FormulaModel.v0C);
	this.readOnly = false;
	this.v1C = null;
	this.forceReservedWords = false;
	this.reservedWordsColor = "#0000ff";
	this.vX7 = com.wiris.editor.formula.FormulaModel.vC4;
	this.v2C = com.wiris.editor.formula.FormulaModel.v3C;
	this.allowInnerNewLines = false;
	this.v4C = false;
	this.v5C = true;
	this.v6C = new com.wiris.e1_J();
	this.v7C = new HaxeHash();
	this.v8C = new com.wiris.e1_2();
	this.v8C.vE2(100);
	this.v9C = new com.wiris.e1_2();
	this.v9C.vE2(100);
	this.v9C.setFontSize(16);
	this.v9C.setLineWidth(1);
	this.v9C.vw2(1.0);
	this.v9C.setColor(0);
	this.v9C.setFontFamily("Arial");
	this.v9C.vy2(com.wiris.e1_2.vY2, false);
	this.v9C.vy2(com.wiris.e1_2.vZ2, false);
	this.v9C.vy2(com.wiris.e1_2.va2, false);
	this.v9C.vy2(com.wiris.e1_2.vd2, false);
	this.v9C.vy2(com.wiris.e1_2.vb2, false);
	this.v9C.vy2(com.wiris.e1_2.vAC, true);
	this.v9C.vy2(com.wiris.e1_2.v03, false);
	this.v9C.vz2(com.wiris.e1_2.vB2);
	this.v9C.setClassType("");
	this.vBC = 0;
	this.reset();
};
com.wiris.editor.formula.FormulaModel.__name__ = ["com", "wiris", "editor", "formula", "FormulaModel"];
com.wiris.editor.formula.FormulaModel.__interfaces__ = [com.wiris.e1_C];
com.wiris.editor.formula.FormulaModel.prototype = {
	replaceChild: function(parent, position, vCC) {
		this.vr4();
		this.vDC(parent.getChild(position));
		parent.replace(position, vCC);
		this.vMB(vCC);
		this.vu4();
		this.vEC();
		this.vFC();
	},
	vP4: function(enabled) {
		this.v5C = enabled;
	},
	removeAccents: function() {
		var vGC = this.deleteSelection();
		if (vGC != null) {
			vGC = this.vHC(vGC.vIC());
			this.vJC(vGC, true, null, com.wiris.editor.formula.FormulaModel.vKC);
		}
	},
	vHC: function(box) {
		var i;
		var vd1 = 0,
			vc1 = box.vN8();
		while (vd1 < vc1) {
			var vW9 = vd1++;
			var vTB = box.getChild(vW9);
			var v9B = this.vHC(box.getChild(vW9));
			if (vTB != v9B) box.replace(vTB.vn7, v9B);
		};
		if (box.vLC()) {
			var vMC = js.Boot.vX3(box, com.wiris.e1_j);
			if ((vMC.type == com.wiris.e1_j.vNC || vMC.type == com.wiris.e1_j.vOC) && vMC.getChild(0).getChild(0) != null) {
				var vPC = vMC.getChild(0).getChild(0);
				if (vPC.vK8()) {
					var vQC = js.Boot.vX3(vPC, com.wiris.e1_f);
					if (vQC.vRC() != null && vQC.vRC().accent) {
						var content = box.getChild(1);
						content.styles = com.wiris.e1_2.join(box.styles, content.styles);
						return box.getChild(1);
					}
				}
			}
		};
		return box;
	},
	vSC: function(root) {
		if (root != null) {
			root.styles = this.vNB(root);
			var i;
			var vd1 = 0,
				vc1 = root.vN8();
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.vSC(root.getChild(vW9));
			}
		}
	},
	setAttributes: function(vTC, h) {
		var vj2 = new com.wiris.e1_I();
		vj2.setAttributes(h);
		vj2.setMode(com.wiris.e1_I.vUC);
		vj2.vVC(vTC);
		vTC.vWC();
		this.vEC();
	},
	vLB: function(vJ1, vXC, v1A) {
		var value = this.v7C.get(vJ1);
		if (value != null && com.wiris.common.WInteger.v32(value)) return Std.parseInt(value);
		var k = com.wiris.editor.formula.Styles.vYC(v1A, value, vXC);
		if (vJ1 != null && (vJ1 == "fraction-linethickness" || vJ1 == "fraction-linethickness-small")) {
			if (value != null && value.indexOf("px") >= 0) k = js.Boot.vX3(Math.round(k / v1A.getZoom()), Int);
		};
		return k;
	},
	vO4: function(vZC) {
		this.vE4 = vZC;
		this.vm4();
		this.vMB(this.box);
		this.vaC();
		this.vEC();
	},
	vK4: function(v7C) {
		this.v7C = v7C;
		this.vm4();
		this.vaC();
	},
	vD4: function(vbC) {
		this.allowInnerNewLines = vbC;
	},
	vcC: function(str) {
		if (this.v4C) {
			var vdC = "";
			var i;
			var vd1 = 0,
				vc1 = str.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				vdC = vdC + com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vI9(HxOverrides.cca(str, vW9)));
			};
			str = vdC;
			vdC = null;
		};
		return str;
	},
	veC: function(str) {
		if (this.vX7 == com.wiris.editor.formula.FormulaModel.vC4) return str;
		var i = 0;
		while (i <= 9) {
			if (this.vX7 == com.wiris.editor.formula.FormulaModel.vA4) str = StringTools.replace(str, "" + i, com.wiris.e1_61.v12(1632 + i));
			else if (this.vX7 == com.wiris.editor.formula.FormulaModel.vB4) str = StringTools.replace(str, "" + i, com.wiris.e1_61.v12(1776 + i));
			++i;
		};
		return str;
	},
	vY7: function() {
		return this.vX7;
	},
	v94: function(mode, vN7) {
		if (this.vX7 == mode && !vN7) this.vX7 = com.wiris.editor.formula.FormulaModel.vC4;
		else this.vX7 = mode;
		this.vaC();
	},
	v54: function(vfC) {
		this.reservedWords = vfC.split(",");
		var i = 0;
		while (i < this.reservedWords.length) {
			var word = StringTools.trim(this.reservedWords[i]);
			if (word.length == 0) this.reservedWords.splice(i, 1);
			else {
				this.reservedWords[i] = word;
				++i;
			}
		};
		var vgC = false;
		while (!vgC) {
			vgC = true;
			i = 1;
			while (i < this.reservedWords.length) {
				var a = this.reservedWords[i - 1];
				var b = this.reservedWords[i];
				if (a.length > b.length) {
					vgC = false;
					this.reservedWords[i - 1] = b;
					this.reservedWords[i] = a;
				};
				++i;
			}
		};
		this.v64(this.forceReservedWords);
		if (this.box != null) this.vMB(this.box);
	},
	v74: function(color) {
		this.reservedWordsColor = color;
	},
	v64: function(enabled) {
		this.forceReservedWords = enabled;
		if (enabled) {
			var vhC = new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines);
			vhC.viC(this.vf3(), true);
		}
	},
	vk4: function() {
		this.vjC = new Array();
	},
	vkC: function() {
		var vlC = this.vg3().vmC();
		var vnC = new com.wiris.e1_i();
		vnC.voC(this.vf3().styles, true, false);
		vnC.vpC(vlC);
		return vnC;
	},
	getSelectionMathML: function() {
		if (this.vqC == 0) return null;
		var vnC = this.vkC();
		var xml = this.vrC(vnC);
		return com.wiris.util.xml.WXmlUtils.vb4(xml);
	},
	getLength: function() {
		return com.wiris.editor.formula.box.BoxUtils.vsC(this.box);
	},
	vu3: function(readOnly) {
		this.readOnly = readOnly;
	},
	vtC: function() {
		return this.display;
	},
	getErrorRectangles: function() {
		if (this.vuC != null) {
			var va4 = this.vuC.vvC(false);
			var i = HxOverrides.iter(va4);
			while (i.hasNext()) {
				var vd4 = i.next();
				if (vd4.width < 4) {
					vd4.x -= 2;
					vd4.width = 4;
				}
			};
			return va4;
		};
		return null;
	},
	vwC: function() {
		if (this.vuC != null) {
			this.vuC = null;
			this.vFC();
		}
	},
	vxC: function(vyC, vzC) {
		this.vuC = this.v0D(vyC, vzC - vyC);
		this.vFC();
	},
	setEmptyScriptBoxColor: function(v1D) {
		this.v1D = v1D;
	},
	getEmptyScriptBoxColor: function() {
		return this.v1D;
	},
	setEmptyBoxColor: function(v2D) {
		this.v2D = v2D;
	},
	getEmptyBoxColor: function() {
		return this.v2D;
	},
	setMode: function(mode) {
		this.mode = mode;
	},
	setDisplay: function(display) {
		this.display = display;
		this.box.v3D();
		this.vMB(this.box);
	},
	v4D: function() {
		this.v5D();
		var vhC = new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines);
		var top = this.vf3();
		var box;
		box = vhC.v6D(top, this.v7D());
		if (box == null) box = top;
		var b = this.vNB(box);
		this.v8D = com.wiris.e1_2.join(b, this.v9D);
	},
	getCurrentActualStyles: function() {
		this.v4D();
		return this.v8D;
	},
	v5D: function() {
		if (this.v9D != null) return;
		var vhC = new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines);
		this.v9D = vhC.vAD(this.vf3(), this.v7D()).vA3();
		this.v8D = null;
	},
	vBD: function(styles) {
		var vCD = this.getCurrentStyles();
		var vDD = com.wiris.e1_2.join(vCD, styles);
		this.v9D = vDD;
		this.vFC();
		this.v9D = vDD;
	},
	v7D: function() {
		var c;
		if (this.vqC > 0) c = this.vV4 + this.vqC;
		else c = this.vV4;
		return c;
	},
	getCurrentStyles: function() {
		this.v5D();
		return this.v9D;
	},
	getDesiredDefaultStyles: function() {
		return this.v9C;
	},
	setDefaultStyles: function(styles) {
		this.v8C = com.wiris.e1_2.vF2(styles);
		this.vm4();
		this.vMB(this.box);
		this.vaC();
		this.vEC();
	},
	getDefaultStyles: function() {
		return this.v8C;
	},
	isRecalcNeeded: function() {
		return !this.box.vED;
	},
	vFD: function() {
		if (this.isRecalcNeeded()) throw "Formula needs recalc.";
	},
	reset: function() {
		this.vGD(new com.wiris.e1_h());
		this.vEC();
	},
	vHD: function() {
		this.vV4 = 0;
		this.vqC = 0;
		this.vID = 0;
		this.vJD = new Array();
		this.vjC = new Array();
		this.vKD = com.wiris.editor.formula.UndoState.UNDO_NORMAL;
		this.vLD = 0;
		this.v8D = null;
		this.v9D = null;
	},
	vMD: function(maction, v5B, v6B, vND) {
		if (this.readOnly) return false;
		var vOD = com.wiris.e1_X.vPD(this.box, this.vV4);
		if (vOD == null) return false;
		this.vr4();
		try {
			var vQD = js.Boot.vX3(vOD[0], com.wiris.e1_X);
			this.vDC(vQD);
			var vq7 = js.Boot.vX3(vOD[1], Int);
			var vr7 = js.Boot.vX3(vOD[2], Int);
			vr7 += v5B;
			vq7 += v6B;
			if (maction == "insertRow") {
				var b = vQD.vRD(1, vQD.vSD);
				var s = vQD.vTD(vq7, 0);
				this.vUD(s);
				this.vVD(b, com.wiris.editor.formula.FormulaModel.vKC, 0);
			};
			if (maction == "insertColumn") {
				var b = vQD.vRD(vQD.vWD, 1);
				var s = vQD.vXD(vr7, 0);
				this.vUD(s);
				this.vVD(b, com.wiris.editor.formula.FormulaModel.vKC, 0);
			};
			if (maction == "removeRow") {
				var s = vQD.vTD(vq7, 1);
				this.vUD(s);
				this.deleteSelection();
			};
			if (maction == "removeColumn") {
				var s = vQD.vXD(vr7, 1);
				this.vUD(s);
				this.deleteSelection();
			};
			if (maction == "addFrame") vQD.vYD(-1);
			if (maction == "removeFrame") vQD.vZD();
			if (maction == "addFrameTop") vQD.vYD(0);
			if (maction == "addFrameBottom") vQD.vYD(2);
			if (maction == "addFrameLeft") vQD.vYD(3);
			if (maction == "addFrameRight") vQD.vYD(1);
			if (maction == "addLineBelow") vQD.addLineBelow(vq7);
			if (maction == "removeLineBelow") vQD.removeLineBelow(vq7);
			if (maction == "addLineRight") vQD.addLineRight(vr7);
			if (maction == "removeLineRight") vQD.removeLineRight(vr7);
			if (maction == "columnLeftAlign") vQD.vaD(vr7, com.wiris.editor.formula.Styles.vy7);
			if (maction == "columnRightAlign") vQD.vaD(vr7, com.wiris.editor.formula.Styles.vz7);
			if (maction == "columnCenterAlign") vQD.vaD(vr7, com.wiris.editor.formula.Styles.v45);
			if (maction == "columnDecimalAlign") vQD.vaD(vr7, com.wiris.editor.formula.Styles.vbD);
			if (maction == "columnRelationAlign") vQD.vaD(vr7, com.wiris.editor.formula.Styles.vcD);
			if (maction == "rowTopAlign") vQD.vdD(vq7, com.wiris.editor.formula.Styles.v25);
			if (maction == "rowBottomAlign") vQD.vdD(vq7, com.wiris.editor.formula.Styles.v35);
			if (maction == "rowCenterAlign") vQD.vdD(vq7, com.wiris.editor.formula.Styles.v45);
			if (maction == "rowAxisAlign") vQD.vdD(vq7, com.wiris.editor.formula.Styles.v55);
			if (maction == "rowBaselineAlign") vQD.vdD(vq7, com.wiris.editor.formula.Styles.v65);
			if (maction == "equalColWidth") vQD.veD();
			if (maction == "equalRowHeight") vQD.vfD();
			if (maction == "matrixSolidLine") {
				vQD.vgD();
				this.vaC();
			};
			if (maction == "matrixThickLine") {
				vQD.vhD();
				this.vaC();
			};
			if (maction == "matrixDashLine") {
				vQD.viD();
				this.vaC();
			};
			if (maction == "matrixDotLine") {
				vQD.vjD();
				this.vaC();
			};
			if (vq7 >= vQD.vWD) vq7--;
			if (vr7 >= vQD.vSD) vr7--;
			if (vND) {
				var a = vQD.vkD(vq7, vr7);
				var vlD = com.wiris.e1_R.vmD(a, 1);
				this.setCaret(vlD.vnD(), 0);
			}
		} catch (e) {};
		this.vu4();
		this.vEC();
		return true;
	},
	vq4: function(vt4, voD) {
		if (this.readOnly) return;
		var vOD = com.wiris.e1_X.vPD(this.box, this.vV4);
		if (vOD == null) return;
		this.vr4();
		var vQD = js.Boot.vX3(vOD[0], com.wiris.e1_X);
		this.vDC(vQD);
		if (vt4) {
			var vr7 = js.Boot.vX3(vOD[2], Int);
			if (this.box.styles.isFlag(com.wiris.e1_2.vc2))--vr7;
			vQD.setColumnSpacing(vr7, voD);
		} else {
			var vq7 = js.Boot.vX3(vOD[1], Int);
			vQD.setRowSpacing(vq7, voD);
		};
		this.vu4();
		this.vEC();
		this.vFC();
	},
	removeLineRight: function() {
		if (this.box.styles.isFlag(com.wiris.e1_2.vc2)) return this.vMD("removeLineRight", -1, 0, false);
		return this.vMD("removeLineRight", 0, 0, false);
	},
	addLineRight: function() {
		if (this.box.styles.isFlag(com.wiris.e1_2.vc2)) return this.vMD("addLineRight", -1, 0, false);
		return this.vMD("addLineRight", 0, 0, false);
	},
	removeLineBelow: function() {
		return this.vMD("removeLineBelow", 0, 0, false);
	},
	addLineBelow: function() {
		return this.vMD("addLineBelow", 0, 0, false);
	},
	removeFrame: function() {
		return this.vMD("removeFrame", 0, 0, false);
	},
	addFrame: function(i) {
		if (i == 0) return this.vMD("addFrameTop", 0, 0, false);
		if (i == 1) return this.vMD("addFrameRight", 0, 0, false);
		if (i == 2) return this.vMD("addFrameBottom", 0, 0, false);
		if (i == 3) return this.vMD("addFrameLeft", 0, 0, false);
		return this.vMD("addFrame", 0, 0, false);
	},
	removeColumn: function() {
		return this.vMD("removeColumn", 0, 0, true);
	},
	removeRow: function() {
		return this.vMD("removeRow", 0, 0, true);
	},
	appendColumn: function() {
		if (this.box.styles.isFlag(com.wiris.e1_2.vc2)) return this.vMD("insertColumn", 0, 0, true);
		return this.vMD("insertColumn", 1, 0, true);
	},
	prependColumn: function() {
		if (this.box.styles.isFlag(com.wiris.e1_2.vc2)) return this.vMD("insertColumn", 1, 0, true);
		return this.vMD("insertColumn", 0, 0, true);
	},
	appendRow: function() {
		return this.vMD("insertRow", 0, 1, true);
	},
	prependRow: function() {
		return this.vMD("insertRow", 0, 0, true);
	},
	testGetPathsOfBoxes: function() {
		var a = this.vpD();
		var i;
		var vd1 = 0,
			vc1 = a.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			haxe.Log.trace(a[vW9].vQB, {
				fileName: "FormulaModel.hx",
				lineNumber: 2241,
				className: "com.wiris.editor.formula.FormulaModel",
				methodName: "testGetPathsOfBoxes"
			});
		}
	},
	vpD: function() {
		return com.wiris.editor.formula.box.BoxUtils.vpD(this.vqD());
	},
	vI8: function() {
		return this.vqC != 0;
	},
	vF8: function() {
		return this.v1C != null;
	},
	vH7: function() {
		return this.vjC.length > 0;
	},
	vK7: function() {
		return this.vJD.length > 0;
	},
	setStyle: function(b, vQA) {
		if (this.readOnly) return;
		this.vr4();
		try {
			this.vDC(this.box);
			b.voC(vQA, true, true);
			this.vMB(b);
			this.vEC();
			this.v9D = null;
			this.v8D = null;
		} catch (e) {};
		this.vu4();
		this.vaC();
	},
	vrD: function(vQA) {
		this.setStyle(this.box, vQA);
	},
	vy2: function(v13) {
		if (this.vqC != 0) {
			var vT1 = this.getCurrentStyles().isFlag(v13);
			var b = new com.wiris.e1_2();
			b.vy2(v13, !vT1);
			this.vQ4(b);
			this.vBD(b);
		} else {
			var vT1 = this.getCurrentStyles().isFlag(v13);
			var b = new com.wiris.e1_2();
			b.vy2(v13, !vT1);
			this.vBD(b);
		}
	},
	vy4: function() {
		this.vy2(com.wiris.e1_2.vd2);
	},
	vx4: function() {
		if (this.getCurrentStyles().isFlagMask(com.wiris.e1_2.vY2)) this.vy2(com.wiris.e1_2.vsD);
		else {
			this.getCurrentStyles().vy2(com.wiris.e1_2.vY2, true);
			this.vy2(com.wiris.e1_2.vY2);
		}
	},
	clearStyles: function() {
		if (this.vqC != 0) {
			this.vr4();
			var vGC = this.vtD(true).vIC();
			if (vGC != null) {
				this.vuD(vGC);
				this.vJC(vGC, false, this.v9C, com.wiris.editor.formula.FormulaModel.vvD);
			};
			this.vu4();
		}
	},
	vW4: function(b) {
		this.v4C = b;
	},
	vwD: function() {
		return this.v4C;
	},
	turnToGreek: function() {
		if (this.vqC != 0) {
			var b = new com.wiris.e1_2();
			this.vxD(b, "greek");
		}
	},
	turnToLatin: function() {
		if (this.vqC != 0) {
			var b = new com.wiris.e1_2();
			this.vxD(b, "latin");
		}
	},
	matrixDotLine: function() {
		return this.vMD("matrixDotLine", 0, 0, false);
	},
	matrixDashLine: function() {
		return this.vMD("matrixDashLine", 0, 0, false);
	},
	matrixThickLine: function() {
		return this.vMD("matrixThickLine", 0, 0, false);
	},
	matrixSolidLine: function() {
		return this.vMD("matrixSolidLine", 0, 0, false);
	},
	v15: function(vyD) {
		var vQA = com.wiris.e1_2.vF2(this.v9D);
		var s = this.vg3();
		var b = s.vf3();
		var parent = b;
		while (parent != null && !js.Boot.__instanceof(parent, com.wiris.e1_h)) parent = parent.getParent();
		if (parent != null) this.setStyle(parent, vQA);
		if (vyD == com.wiris.editor.formula.Styles.v25) this.vMD("rowTopAlign", 0, 0, false);
		else if (vyD == com.wiris.editor.formula.Styles.v35) this.vMD("rowBottomAlign", 0, 0, false);
		else if (vyD == com.wiris.editor.formula.Styles.v45) this.vMD("rowCenterAlign", 0, 0, false);
		else if (vyD == com.wiris.editor.formula.Styles.v55) this.vMD("rowAxisAlign", 0, 0, false);
		else if (vyD == com.wiris.editor.formula.Styles.v65) this.vMD("rowBaselineAlign", 0, 0, false);
	},
	v05: function(i) {
		var vg7 = false;
		if (i == com.wiris.e1_2.vn2) vg7 = this.vMD("columnLeftAlign", 0, 0, false);
		else if (i == com.wiris.e1_2.vm2) vg7 = this.vMD("columnRightAlign", 0, 0, false);
		else if (i == com.wiris.e1_2.vo2) vg7 = this.vMD("columnCenterAlign", 0, 0, false);
		else if (i == com.wiris.e1_2.vp2) vg7 = this.vMD("columnDecimalAlign", 0, 0, false);
		else if (i == com.wiris.e1_2.vq2) vg7 = this.vMD("columnRelationAlign", 0, 0, false);
		if (vg7) {
			var vzD = this.vg3().vf3();
			while (!js.Boot.__instanceof(vzD, com.wiris.e1_X)) vzD = vzD.getParent();
			vzD.v3D();
		};
		var vQA = new com.wiris.e1_2();
		vQA.vz2(i);
		var parent = this.vg3().vf3();
		while (parent != null && !parent.vRB()) parent = parent.getParent();
		if (parent != null) {
			var v0E = js.Boot.vX3(parent, com.wiris.e1_h);
			if (v0E.isMultiLine()) this.setStyle(parent, vQA);
		}
	},
	equalRowHeight: function() {
		var vQA = com.wiris.e1_2.vF2(this.v9D);
		var s = this.vg3();
		var b = s.vf3();
		var parent = b;
		while (parent != null && !js.Boot.__instanceof(parent, com.wiris.e1_h)) parent = parent.getParent();
		if (parent != null) this.setStyle(parent, vQA);
		this.vMD("equalRowHeight", 0, 0, false);
	},
	equalColWidth: function() {
		var vQA = com.wiris.e1_2.vF2(this.v9D);
		var s = this.vg3();
		var b = s.vf3();
		var parent = b;
		while (parent != null && !js.Boot.__instanceof(parent, com.wiris.e1_h)) parent = parent.getParent();
		if (parent != null) this.setStyle(parent, vQA);
		this.vMD("equalColWidth", 0, 0, false);
	},
	setMatrixLineColor: function(str) {
		if (this.readOnly) return;
		var vOD;
		vOD = com.wiris.e1_X.vPD(this.box, this.vV4);
		if (vOD != null) {
			this.vr4();
			var vQD = js.Boot.vX3(vOD[0], com.wiris.e1_X);
			this.vDC(vQD);
			vQD.v1E(str);
			this.vu4();
			this.vEC();
		}
	},
	setClassType: function(str) {
		var b = new com.wiris.e1_2();
		if (this.vqC != 0) {
			b.setClassType(str);
			this.vQ4(b);
			this.vBD(b);
		} else {
			b.setClassType(str);
			this.vBD(b);
		}
	},
	setFontFamily: function(str) {
		var vQA = new com.wiris.e1_2();
		if (str.toLowerCase() == "inherit") vQA.vy2(com.wiris.e1_2.v2E, false);
		else vQA.setFontFamily(str); if (this.v5C) this.vrD(vQA);
		else {
			this.vQ4(vQA);
			this.vBD(vQA);
		}
	},
	setMaxWidth: function(str) {
		var vQA = new com.wiris.e1_2();
		vQA.setMaxWidth(str);
		this.vrD(vQA);
	},
	setColor: function(str) {
		if (this.vqC != 0) {
			var b = new com.wiris.e1_2();
			b.setColor(com.wiris.util.css.CSSUtils.vs2(str));
			this.vQ4(b);
			this.vBD(b);
		} else {
			var b = new com.wiris.e1_2();
			b.setColor(com.wiris.util.css.CSSUtils.vs2(str));
			this.vBD(b);
		}
	},
	setFontSize: function(i) {
		var vQA = new com.wiris.e1_2();
		if (i < 0) vQA.vy2(com.wiris.e1_2.v3E, false);
		else vQA.setFontSize(i); if (this.v5C) this.vrD(vQA);
		else {
			this.vQ4(vQA);
			this.vBD(vQA);
		}
	},
	v84: function(rtl) {
		var vQA = new com.wiris.e1_2();
		vQA.vy2(com.wiris.e1_2.vc2, rtl);
		this.vrD(vQA);
	},
	vz4: function() {
		this.vy2(com.wiris.e1_2.va2);
	},
	vw4: function() {
		this.vy2(com.wiris.e1_2.vY2);
	},
	vv4: function() {
		this.vy2(com.wiris.e1_2.vZ2);
	},
	isEmpty: function() {
		return com.wiris.editor.formula.box.BoxUtils.vsC(this.box) == 1;
	},
	vm4: function() {
		com.wiris.editor.formula.box.BoxUtils.vm4(this.box);
	},
	handleKeyEvent: function(keyCode, shiftKey, ctrlKey, altKey) {
		var vZ4 = true;
		if (keyCode == 90 && ctrlKey && !altKey) this.undo();
		else if (keyCode == 89 && ctrlKey && !altKey) this.redo();
		else if (keyCode == 67 && ctrlKey && !altKey) this.copy();
		else if (keyCode == 86 && ctrlKey && !altKey) this.paste();
		else if (keyCode == 88 && ctrlKey && !altKey) this.cut();
		else if (keyCode == 39) {
			if (this.vf3().styles.isFlag(com.wiris.e1_2.vc2)) this.vND(-1, shiftKey);
			else this.vND(1, shiftKey);
		} else if (keyCode == 37) {
			if (this.vf3().styles.isFlag(com.wiris.e1_2.vc2)) this.vND(1, shiftKey);
			else this.vND(-1, shiftKey);
		} else if (keyCode == 38) this.v4E(true, shiftKey);
		else if (keyCode == 40) this.v4E(false, shiftKey);
		else if (keyCode == 8) this["delete"](-1);
		else if (keyCode == 127) this["delete"](1);
		else if (keyCode == 36) this.v5E(shiftKey);
		else if (keyCode == 35) this.v6E(shiftKey);
		else if (keyCode == 10) {
			var s = new StringBuf();
			s.b += String.fromCharCode(keyCode);
			this.insertText(s.b);
		} else vZ4 = false;
		if (keyCode >= 35 && keyCode <= 40) this.v4C = false;
		return vZ4;
	},
	vi4: function() {
		return this.styleChanged;
	},
	vg4: function() {
		return this.clipboardChanged;
	},
	vf4: function() {
		return this.caretPositionChanged;
	},
	vh4: function() {
		return this.contentChanged;
	},
	vj4: function() {
		this.contentChanged = false;
		this.caretPositionChanged = false;
		this.clipboardChanged = false;
		this.styleChanged = false;
	},
	vaC: function() {
		this.styleChanged = true;
	},
	v7E: function() {
		this.clipboardChanged = true;
	},
	vEC: function() {
		this.contentChanged = true;
		this.vuC = null;
	},
	vFC: function() {
		this.caretPositionChanged = true;
		this.v9D = null;
		this.v8D = null;
	},
	v8E: function(style) {
		this.vr4();
		try {
			this.v9E(style);
		} catch (e) {};
		this.vu4();
	},
	vxD: function(style, s) {
		this.vr4();
		try {
			this.vAE(style, s);
		} catch (e) {};
		this.vu4();
	},
	vQ4: function(style) {
		this.vr4();
		try {
			this.vBE(null, com.wiris.editor.formula.FormulaModel.vvD, 0, null, style);
		} catch (e) {};
		this.vu4();
	},
	vu4: function() {
		--this.vBC;
	},
	vr4: function() {
		if (this.vBC == 0) this.vCE();
		++this.vBC;
	},
	vDE: function(selector, currentStyle) {
		var vEE = this.vE4.get(selector);
		if (vEE == null) return currentStyle;
		return com.wiris.e1_2.join(currentStyle, vEE);
	},
	vFE: function(vGE, prefix, currentStyle) {
		var i = HxOverrides.iter(vGE);
		while (i.hasNext()) currentStyle = this.vDE(prefix + i.next(), currentStyle);
		return currentStyle;
	},
	vNB: function(b) {
		var parent = b.getParent();
		var tag = com.wiris.editor.formula.box.BoxUtils.vWB(b);
		var vHE = false;
		var s = this.v8C.vA3();
		if (parent != null) {
			var vIE = com.wiris.editor.formula.box.BoxUtils.vWB(parent);
			if (vIE == "mrow") {
				var vJE = parent.getParent();
				if (vJE != null && com.wiris.editor.formula.box.BoxUtils.vWB(vJE) == "p") {
					s.vy2(com.wiris.e1_2.va2, true);
					return s;
				}
			}
		};
		if (tag == "mrow" && b.vN8() == 0) {
			vHE = true;
			s.setColor(this.getEmptyBoxColor());
		};
		if (tag == "mi") {
			var vKE = js.Boot.vX3(b, com.wiris.e1_f);
			s.vy2(com.wiris.e1_2.vY2, vKE.vLE() <= 1);
			if (this.forceReservedWords) {
				var vhC = new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines);
				if (vhC.vME(vKE.vM8())) s.setParam("color", this.reservedWordsColor);
			};
			s.vy2(com.wiris.e1_2.vZ2, false);
		};
		if (tag == "mtext") {
			s.vy2(com.wiris.e1_2.va2, true);
			var vQA = null;
			if (this.vE4 != null) vQA = this.vE4.get("mtext");
			if (vQA != null) s.vJ2(vQA);
		};
		if (tag == "mn") {
			var vQA = null;
			if (this.vE4 != null) vQA = this.vE4.get("mn");
			if (vQA != null) s.vJ2(vQA);
		};
		if (tag == "mo") {
			var vQA = null;
			if (this.vE4 != null) vQA = this.vE4.get("mo");
			if (vQA != null) s.vJ2(vQA);
			var vL8 = js.Boot.vX3(b, com.wiris.e1_f);
			if (vL8.type == com.wiris.e1_f.vNE && vL8.vOE()) {
				var text = vL8.vM8();
				var size = text != null && text.length > 0 && com.wiris.editor.formula.WCharacter.vk8(HxOverrides.cca(text, 0)) ? 200 : 150;
				s.vE2(size);
			}
		};
		if (tag == "mphantom") s.vy2(com.wiris.e1_2.vb2, true);
		if (tag == "maction") {
			var vPE = js.Boot.vX3(b, com.wiris.e1_P);
			if (vPE.vQE()) s.setColor(this.v2C);
		};
		if (parent != null) {
			var script = false;
			tag = com.wiris.editor.formula.box.BoxUtils.vWB(parent);
			if (tag == "sub" || tag == "sup" || tag == "subsup" || tag == "presub" || tag == "presup" || tag == "presubsup") script = true;
			if (tag == "munder") script = b.vn7 == 1;
			if (tag == "mover") script = b.vn7 == 0;
			if (tag == "munderover") script = b.vn7 == 0 || b.vn7 == 2;
			if (tag == "mroot") script = b.vn7 == 0;
			if (tag == "mfrac") {
				if (parent.v08 != null) {
					script = !parent.v08.isFlag(com.wiris.e1_2.vAC);
					if (!script) s.vy2(com.wiris.e1_2.vAC, false);
				}
			};
			if (script) s.v33(1);
			if (vHE && script) s.setColor(this.getEmptyScriptBoxColor());
		};
		if (!s.isFlagMask(com.wiris.e1_2.vAC)) {
			if (parent == null) s.vy2(com.wiris.e1_2.vAC, this.display == com.wiris.editor.formula.FormulaModel.v04);
			else s.vy2(com.wiris.e1_2.vAC, parent.v08.isFlag(com.wiris.e1_2.vAC));
		};
		var vRE = s.getScriptLevel();
		var vSE = vRE;
		if (parent != null && parent.v08 != null) {
			vSE += parent.v08.getScriptLevel();
			s.v33(vSE);
		};
		if (vRE == 1) {
			var vTE = 1;
			if (vSE == 1) vTE = 0.75;
			else if (vSE == 2) vTE = 0.625 / 0.75;
			else if (vSE == 3) vTE = 0.8;
			s.vE2(s.getP() * vTE);
		};
		if (this.vE4 != null) {
			var vGE = b.styles.getClassType().split(" ");
			var vUE = false;
			var vOE = false;
			var i = 0;
			while (i < vGE.length) {
				var className = StringTools.trim(vGE[i]);
				vGE[i] = className;
				s = this.vDE("." + className, s);
				if (className == "bigOp") vUE = true;
				++i;
			};
			if (b.vK8()) {
				var text = js.Boot.vX3(b, com.wiris.e1_f);
				vOE = text.vOE();
				if (text.type == com.wiris.e1_f.vVE) {
					s = this.vDE("mi", s);
					s = this.vFE(vGE, "mi.", s);
					if (text.vLE() == 1 && com.wiris.editor.formula.WCharacter.v79(HxOverrides.cca(text.vM8(), 0))) s = this.vDE("mi:greek", s);
				} else if (text.type == com.wiris.e1_f.vNE) {
					s = this.vDE("mo", s);
					s = this.vFE(vGE, "mo.", s);
				} else if (text.type == com.wiris.e1_f.vWE) {
					s = this.vDE("mn", s);
					s = this.vFE(vGE, "mn.", s);
				} else if (text.type == com.wiris.e1_f.vXE) s = this.vDE("mtext", s);
			};
			if (vRE == 1) {
				s = this.vDE(":scriptlevel(" + vSE + ")", s);
				if (vUE) {
					var vH4 = 0;
					while (vH4 < vSE) {
						s = this.vDE(".bigOp:scriptlevel(>" + vH4 + ")", s);
						++vH4;
					};
					s = this.vDE(".bigOp:scriptlevel(" + vSE + ")", s);
				}
			} else if (vRE == 0 && vSE > 0 && vUE) {
				var vH4 = 1;
				while (vH4 <= vSE) {
					s = this.vDE(":scriptlevel(" + vH4 + ") .bigOp", s);
					++vH4;
				}
			};
			if (vOE || vUE) {
				var vYE = parent;
				var apply = false;
				while (vYE != null && !apply) {
					var vZE = vYE.styles.getClassType().split(" ");
					var vH4 = 0;
					while (vH4 < vZE.length) {
						var className = StringTools.trim(vZE[vH4]);
						if (className == "bigOp") apply = true;
						++vH4;
					};
					vYE = vYE.getParent();
				};
				if (apply) {
					if (vOE) s = this.vDE(".bigOp :largeop", s);
					if (vUE) s = this.vDE(".bigOp .bigOp", s);
				}
			}
		};
		return s;
	},
	pasteMathML: function(vi3) {
		var xml = com.wiris.util.xml.WXmlUtils.vN3(vi3);
		var box = this.vaE(xml);
		this.vVD(box, com.wiris.editor.formula.FormulaModel.vbE, 0);
	},
	insertMathML: function(vi3, v42) {
		this.vcE(com.wiris.util.xml.WXmlUtils.vN3(vi3), v42);
	},
	vcE: function(xml, v42) {
		var box = this.vaE(xml);
		this.vVD(box, com.wiris.editor.formula.FormulaModel.vKC, v42);
	},
	insertText: function(text) {
		var vdE = text.length;
		var i;
		var vc1 = 0;
		while (vc1 < vdE) {
			var vW9 = vc1++;
			this.veE(com.wiris.e1_61.v12(HxOverrides.cca(text, vW9)));
		}
	},
	veE: function(character) {
		if (character == " ") character = com.wiris.e1_61.v12(160);
		character = this.veC(character);
		character = this.vcC(character);
		var vL8 = new com.wiris.e1_f();
		vL8.vfE(character);
		com.wiris.editor.formula.box.BoxUtils.vgE(vL8);
		this.vVD(vL8, com.wiris.editor.formula.FormulaModel.vKC, 1);
	},
	vv3: function(xml) {
		var b = this.vaE(xml);
		this.vGD(b);
		if (this.forceReservedWords) {
			var vhC = new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines);
			vhC.viC(this.box, true);
		};
		this.vMB(b);
		this.v6E(false);
	},
	vc4: function() {
		return this.vrC(this.vf3());
	},
	vaE: function(xml) {
		var s = new com.wiris.e1_I();
		s.vhE(this);
		s.setMode(com.wiris.e1_I.viE);
		xml = this.v6C.standardToFormula(xml);
		var b = s.vjE(xml);
		return b;
	},
	vrC: function(b) {
		var s = new com.wiris.e1_I();
		s.vhE(this);
		s.setMode(com.wiris.e1_I.vkE);
		var vlE = this.display == com.wiris.editor.formula.FormulaModel.v04;
		if (b.getParent() != null) vlE = b.getParent().v08.isFlag(com.wiris.e1_2.vAC);
		var xml = s.vmE(b);
		xml = this.v6C.formulaToStandard(xml, vlE);
		return xml;
	},
	v4E: function(vnE, shift) {
		this.vFD();
		var p = com.wiris.editor.formula.box.BoxUtils.v4E(this.box, this.vV4, vnE, false);
		if (p >= 0) {
			if (shift) {
				var vnA = this.vV4 + this.vqC;
				this.setCaret(p, vnA - p);
			} else this.setCaret(p, 0);
		}
	},
	getPositionFromPoint: function(x, vQ1) {
		this.vFD();
		var p = com.wiris.editor.formula.box.BoxUtils.getPositionFromPoint(this.box, false, com.wiris.e1_6.vC7(x, vQ1));
		return p;
	},
	voE: function(x, vQ1) {
		this.vFD();
		var p = com.wiris.editor.formula.box.BoxUtils.getPositionFromPoint(this.box, false, com.wiris.e1_6.vC7(x, vQ1));
		this.setCaret(p, 0);
	},
	'delete': function(x) {
		if (this.vqC != 0) this.deleteSelection();
		else {
			var vX4 = this.vV4;
			this.vND(x, true);
			if (vX4 == this.vV4) return;
			this.setCaret(this.vV4 + this.vqC, -this.vqC);
			var selection = this.vg3();
			if (selection.vpE() - selection.vqE() != 1) return;
			this.deleteSelection();
		}
	},
	v6E: function(shift) {
		var vrE = com.wiris.editor.formula.box.BoxUtils.vsC(this.box) - 1;
		while (!this.v0D(vrE, 0).vsE() && vrE >= 0)--vrE;
		if (vrE >= 0) {
			if (shift) this.setCaret(vrE, this.vV4 + this.vqC - vrE);
			else this.setCaret(vrE, 0);
		}
	},
	v5E: function(shift) {
		var position = 0;
		var n = com.wiris.editor.formula.box.BoxUtils.vsC(this.box);
		while (!this.v0D(position, 0).vsE() && position < n)++position;
		if (position < n) {
			if (shift) this.setCaret(position, this.vV4 + this.vqC);
			else this.setCaret(position, 0);
		}
	},
	cut: function() {
		this.copy();
		this.deleteSelection();
	},
	paste: function() {
		if (this.v1C != null) this.pasteMathML(this.v1C);
	},
	copy: function() {
		if (this.vqC == 0) return;
		this.v1C = this.getSelectionMathML();
		this.v7E();
	},
	redo: function() {
		if (this.vjC.length == 0) return;
		var vtE = this.vjC.pop();
		this.vKD = com.wiris.editor.formula.UndoState.UNDO_REDO;
		this.vr4();
		try {
			vtE.vuE(this);
		} catch (e) {};
		this.vu4();
		this.vKD = com.wiris.editor.formula.UndoState.UNDO_NORMAL;
	},
	undo: function() {
		if (this.vJD.length == 0) return;
		var vtE = this.vJD.pop();
		this.vKD = com.wiris.editor.formula.UndoState.UNDO_UNDO;
		this.vr4();
		try {
			vtE.vuE(this);
		} catch (e) {};
		this.vu4();
		this.vKD = com.wiris.editor.formula.UndoState.UNDO_NORMAL;
	},
	vvE: function() {
		if (this.vKD == com.wiris.editor.formula.UndoState.UNDO_NORMAL) this.vjC = new Array();
		if (this.vKD == com.wiris.editor.formula.UndoState.UNDO_UNDO) return this.vjC;
		return this.vJD;
	},
	vCE: function() {
		this.vLD = this.vvE().length;
	},
	vDC: function(target) {
		this.vwE(com.wiris.e1_L.vxE(target.vIC()));
	},
	vyE: function(i, vH4, mode, b) {
		this.vwE(com.wiris.e1_L.vzE(i, vH4, mode, b));
	},
	v0F: function(i, vH4, mode) {
		this.vwE(com.wiris.e1_L.v1F(i, vH4, mode));
	},
	vwE: function(vtE) {
		var v2F = this.vvE();
		if (v2F.length > this.vLD) {
			var last = v2F.pop();
			this.vwE(com.wiris.e1_L.v3F(last, vtE));
		} else this.vvE().push(vtE);
	},
	vtD: function(v4F) {
		if (this.readOnly) return null;
		var s;
		var b;
		s = this.vg3();
		var box = s.vf3();
		b = s.vmC();
		if (s.vqE() == s.vpE()) return null;
		if (!s.deleteSelection(v4F)) return null;
		var v5F = s.vqE();
		var v6F = s.vpE();
		new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines).v7F(this.vf3(), v5F, v6F, com.wiris.editor.formula.FormulaModel.v8F);
		this.setCaret(v5F, v6F - v5F);
		this.vyE(v5F, v6F, s.v9F(), b);
		if (this.forceReservedWords) {
			var vhC = new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines);
			vhC.viC(box, false);
		};
		this.vMB(box);
		this.vEC();
		return b;
	},
	deleteSelection: function() {
		this.vr4();
		var b = null;
		try {
			b = this.vtD(false);
			if (b != null) {
				var s = this.vg3();
				var v5F = s.vqE();
				var v6F = s.vpE();
				if (!s.vAF()) this.setCaret(v5F, 0);
				else if (v6F - v5F == 0 && !s.vsE()) {
					this.setCaret(v5F, 0);
					this.vND(1, false);
				} else this.setCaret(v5F, v6F - v5F);
			}
		} catch (e) {};
		this.vu4();
		return b;
	},
	vJC: function(box, vBF, styles, vCF) {
		if (this.readOnly) return;
		var vhC;
		var s;
		var vDF, vEF, vFF;
		vhC = new com.wiris.e1_W(this, this.reservedWords, this.allowInnerNewLines);
		s = this.vg3();
		vDF = s.vqE();
		var vGF = box.vIC();
		s = vhC.vVD(s, this.vf3(), vGF, styles, vCF);
		if (s == null) return;
		vEF = s.vqE();
		vFF = s.vpE();
		vhC.v7F(this.vf3(), vEF, vFF, vCF);
		if (this.forceReservedWords) vhC.viC(s.vf3(), false);
		this.vMB(s.vf3());
		if (vCF != com.wiris.editor.formula.FormulaModel.vvD && !s.vAF()) {
			if (vBF) this.setCaret(vFF, 0);
			else this.setCaret(vEF, 0);
		} else if (vBF) this.setCaret(vFF, vEF - vFF);
		else this.setCaret(vEF, vFF - vEF);
		var b = vhC.vHF();
		if (b != null) this.vyE(vEF, vEF, s.v9F(), b);
		this.v0F(vEF, vFF, s.v9F());
		this.vEC();
	},
	vuD: function(box) {
		box.styles = com.wiris.e1_2.vF2(this.v9C);
		var i = 0;
		while (i < box.vN8()) {
			this.vuD(box.getChild(i));
			++i;
		}
	},
	v9E: function(vIF) {
		var vGC = null;
		var vBF;
		vBF = this.vqC <= 0;
		vGC = this.vtD(true);
		var vGF = vGC.vIC();
		vGF.styles = this.vNB(vGF);
		this.vSC(vGF);
		if (vGC != null) this.vJC(vGF, vBF, vIF, com.wiris.editor.formula.FormulaModel.vvD);
	},
	vAE: function(vIF, s) {
		var vGC = null;
		var vBF;
		vBF = this.vqC < 0;
		vGC = this.vtD(true);
		var vGF = vGC.vIC();
		var k;
		var vd1 = 0,
			vc1 = vGF.vN8();
		while (vd1 < vc1) {
			var vJF = vd1++;
			if (vGF.getChild(vJF).vK8()) {
				var text = js.Boot.vX3(vGF.getChild(vJF), com.wiris.e1_f);
				var t = text.vM8();
				var vKF = "";
				var i;
				if (s == "latin") {
					var vLF = 0,
						vMF = t.length;
					while (vLF < vMF) {
						var vW9 = vLF++;
						vKF = vKF + com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vL9(HxOverrides.cca(t, vW9)));
					};
					t = vKF;
					vKF = null;
				} else if (s == "greek") {
					var vLF = 0,
						vMF = t.length;
					while (vLF < vMF) {
						var vW9 = vLF++;
						vKF = vKF + com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vI9(HxOverrides.cca(t, vW9)));
					};
					t = vKF;
					vKF = null;
				};
				text.vfE(t);
			}
		};
		if (vGC != null) this.vJC(vGF, vBF, vIF, com.wiris.editor.formula.FormulaModel.vvD);
	},
	vBE: function(box, vCF, v42, styles, vIF) {
		var vGC = null;
		var vBF;
		if (vCF == com.wiris.editor.formula.FormulaModel.vvD) vBF = this.vqC < 0;
		else vBF = v42 <= 0;
		vGC = this.vtD(true);
		if (box != null) this.vJC(box, vBF, styles, vCF);
		if (v42 > 0) this.vND(v42, false);
		if (vGC != null && (vCF == com.wiris.editor.formula.FormulaModel.vvD || vCF == com.wiris.editor.formula.FormulaModel.vKC && com.wiris.editor.formula.box.BoxUtils.vsC(box) >= 1)) this.vJC(vGC, vBF, vIF, vCF);
	},
	vVD: function(box, vCF, v42) {
		this.vr4();
		try {
			this.vBE(box, vCF, v42, this.getCurrentStyles(), null);
		} catch (e) {};
		this.vu4();
	},
	getSelectionRectangles: function() {
		var va4 = null;
		if (this.vqC != 0) {
			var s;
			s = this.vg3();
			this.vFD();
			va4 = s.vvC(false);
		};
		return va4;
	},
	getInverseCaretRectangle: function() {
		var vNF = this.vOF(this.vV4, true);
		if (vNF == null) return this.vOF(0, true);
		return vNF;
	},
	getCaretRectangle: function() {
		var vNF = this.vOF(this.vV4, false);
		if (vNF == null) return this.vOF(0, false);
		return vNF;
	},
	vOF: function(n, v73) {
		var s;
		s = this.v0D(n, 0);
		this.vFD();
		var r = s.vvC(v73)[0];
		if (r.width > 1) r = com.wiris.e1_7.vD7(r.x + js.Boot.vX3(Math.round(r.width / 2.0), Int), r.vQ1, 1, r.height);
		return r;
	},
	vUD: function(s) {
		var vEA = s.vqE();
		this.vPF(vEA, s.vpE() - vEA, s.v9F());
	},
	vg3: function() {
		var s = this.v0D(this.vV4, this.vqC);
		s.setMode(this.vID);
		return s;
	},
	v0D: function(vQF, length) {
		if (length > 0) return com.wiris.editor.formula.box.BoxUtils.select(this.box, vQF, length);
		else return com.wiris.editor.formula.box.BoxUtils.select(this.box, vQF + length, -length);
	},
	vqD: function() {
		if (this.vqC != 0) return null;
		var vlD = com.wiris.editor.formula.box.BoxUtils.vRF(this.vf3(), this.vV4);
		return vlD.b;
	},
	selectWord: function(position) {
		var vlD = com.wiris.editor.formula.box.BoxUtils.vRF(this.vf3(), position);
		var vf7 = vlD.b;
	},
	vsE: function(vEA, selection) {
		var vlD = com.wiris.editor.formula.box.BoxUtils.vRF(this.box, vEA);
		return vlD.b.vSF(vlD.x, selection);
	},
	vTF: function(pos, vUF, vX9, selection) {
		pos = com.wiris.common.WInteger.min(com.wiris.common.WInteger.max(pos, 0), vUF - 1);
		var vVF = false;
		while (!this.vsE(pos, selection)) {
			pos += vX9;
			if (pos < 0 || pos >= vUF) {
				if (vVF) {
					pos = this.vV4;
					break;
				} else {
					vX9 = -vX9;
					pos = this.vV4 + pos;
					pos = com.wiris.common.WInteger.min(com.wiris.common.WInteger.max(pos, 0), vUF - 1);
					vVF = true;
				}
			}
		};
		return pos;
	},
	vND: function(pos, shift) {
		if (pos == 0) return;
		if (!shift) {
			var n = com.wiris.editor.formula.box.BoxUtils.vsC(this.box);
			var vX9 = pos >= 0 ? 1 : -1;
			var vWF = this.vV4 + pos;
			vWF = com.wiris.common.WInteger.min(com.wiris.common.WInteger.max(vWF, 0), n - 1);
			var vVF = false;
			while (!this.v0D(vWF, 0).vsE()) {
				vWF += vX9;
				if (vWF < 0 || vWF >= n) {
					if (vVF) {
						vWF = this.vV4;
						break;
					} else {
						vX9 = -vX9;
						vWF = this.vV4 + pos;
						vWF = com.wiris.common.WInteger.min(com.wiris.common.WInteger.max(vWF, 0), n - 1);
						vVF = true;
					}
				}
			};
			vWF = this.vTF(vWF, n, vX9, shift);
			this.setCaret(vWF, 0);
			return;
		} else {
			var n = com.wiris.editor.formula.box.BoxUtils.vsC(this.box);
			var vX9 = pos >= 0 ? 1 : -1;
			var vWF = this.vV4 + pos;
			var vXF = this.vV4 + this.vqC;
			vXF = this.vTF(vXF, n, -vX9, shift);
			var vYF = false;
			var vZF = false;
			var s = this.vg3();
			var vaF = s.vpE() - s.vqE();
			var vbF = -1;
			do {
				vWF = this.vTF(vWF, n, vX9, shift);
				if (vWF == this.vV4) break;
				s = this.v0D(vWF, vXF - vWF);
				var vcF = s.vpE() - s.vqE();
				if (!vYF && vcF != vaF) {
					vYF = true;
					vbF = vcF;
				};
				if (vYF && vcF != vbF) vZF = true;
				if (vYF && !vZF) this.setCaret(vWF, vXF - vWF);
				vWF += vX9;
			} while (!vZF);
		}
	},
	vPF: function(vV4, length, mode) {
		this.vV4 = vV4;
		this.vqC = length;
		this.vID = mode;
		this.vFC();
	},
	setCaret: function(vV4, length) {
		this.vPF(vV4, length, 0);
		if (com.wiris.editor.formula.FormulaModel.vdF == com.wiris.editor.formula.FormulaModel.veF) {
			var vX4 = this.getCaret();
			var vfF = com.wiris.editor.formula.box.BoxUtils.vRF(this.vf3(), vX4);
			var vf7 = vfF.b;
			if (vf7.vRB() && vfF.x > 0) vf7 = vfF.b.getChild(vfF.b.vgF(vfF.x, -1));
			if (vf7 != this.vyB) {
				if (this.vyB != null) {
					var vhF = this.vyB.viF();
					if (vhF != null && vhF.vjF) {
						vhF.vjF = false;
						vhF.vkF();
					}
				};
				if (vf7 != null) {
					var vlF = vf7.viF();
					if (vlF != null && vlF.vmF && this.mode == com.wiris.editor.formula.FormulaModel.vy3) {
						vlF.vjF = true;
						vlF.vkF();
					}
				};
				this.vyB = vf7;
			} else if (this.mode == com.wiris.editor.formula.FormulaModel.vw3) {
				var vlF = vf7.viF();
				if (vlF != null && vlF.vjF) {
					vlF.vjF = false;
					vlF.vkF();
				}
			}
		}
	},
	getCaretLength: function() {
		return this.vqC;
	},
	getCaret: function() {
		return this.vV4;
	},
	getBaseline: function() {
		this.vFD();
		return this.box.baseline;
	},
	getHeight: function() {
		this.vFD();
		return this.box.height;
	},
	getWidth: function() {
		this.vFD();
		return this.box.width;
	},
	vnF: function(b, voF) {
		var n;
		var i;
		var vpF;
		if (b.vqF) return;
		b.vqF = true;
		if (b.vrF || voF) {
			var parent = b.getParent();
			if (parent != null) {
				var vsF = b.styles.getClassType();
				var vtF = b.styles.isFlag(com.wiris.e1_2.v03);
				b.styles = com.wiris.e1_2.join(parent.styles, b.styles);
				b.styles.setClassType(vsF);
				b.styles.vy2(com.wiris.e1_2.v03, vtF);
			};
			b.vuF();
			b.v08 = this.vvF(b.styles, b, b.getParent());
		};
		n = b.vN8();
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			vpF = b.getChild(vW9);
			this.vnF(vpF, b.vrF || voF);
		};
		b.vrF = false;
	},
	vMB: function(b) {
		if (b.vqF) return;
		while (b.getParent() != null) b = b.getParent();
		this.vnF(b, false);
	},
	vwF: function(b, reset) {
		if (this.readOnly) return;
		if (reset) this.vHD();
		else {
			this.vr4();
			this.vDC(this.box);
		}; if (!b.vxF()) {
			var vKE;
			vKE = new com.wiris.e1_i();
			vKE.vVD(0, b);
			this.vwF(vKE, reset);
		} else {
			b.vyF();
			this.box = b;
		};
		this.vMB(this.box);
		if (!reset) this.vu4();
		this.vEC();
		this.vFC();
	},
	vGD: function(b) {
		this.vwF(b, true);
	},
	vf3: function() {
		return this.box;
	},
	vvF: function(styles, b, parent) {
		var vzF = this.vNB(b);
		var v0G = com.wiris.e1_2.join(vzF, styles);
		if (b.styles.isFlag(com.wiris.e1_2.v03)) v0G.vE2(100);
		if (parent != null && !b.styles.isFlag(com.wiris.e1_2.v03)) v0G.vE2(parent.v08.getP() * v0G.getP() / 100);
		return v0G;
	},
	v1G: function(b, v1A) {
		if (!b.vED) {
			var n = b.vN8();
			if (!b.v2G) this.v3G(b);
			var i;
			var vc1 = 0;
			while (vc1 < n) {
				var vW9 = vc1++;
				this.v1G(b.getChild(vW9), v1A);
			};
			v1A.setStyle(b.v08);
			if (this.mode == com.wiris.editor.formula.FormulaModel.vy3 && com.wiris.editor.formula.FormulaModel.vdF == com.wiris.editor.formula.FormulaModel.v4G) {
				var v5G = b.viF();
				if (v5G != null && v5G.vmF) v5G.vjF = true;
			};
			b.v6G(v1A, this.mode);
			b.vED = true;
			if (!b.v2G && this.v3G(b)) {
				var vc1 = 0;
				while (vc1 < n) {
					var vW9 = vc1++;
					this.v1G(b.getChild(vW9), v1A);
				};
				v1A.setStyle(b.v08);
				b.v7G(v1A);
			};
			if (b.styles.isFlag(com.wiris.e1_2.vc2)) {
				var vc1 = 0;
				while (vc1 < n) {
					var vW9 = vc1++;
					var vTB = b.getChild(vW9);
					vTB.x = b.width - vTB.x - vTB.width;
				}
			}
		}
	},
	v3G: function(b) {
		var v8G = false;
		var n = b.vN8();
		var i;
		var c;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			c = b.getChild(vW9);
			if (c.v2G) {
				c.vED = false;
				v8G = true;
				this.v3G(c);
			}
		};
		return v8G;
	},
	recalcClient: function(vY4) {
		var v1A = new com.wiris.e1_B(vY4);
		this.recalc(v1A);
	},
	recalc: function(vY4) {
		vY4.setStyle(this.getDefaultStyles());
		vY4.setFormat(this);
		this.v9G(this.vf3(), vY4);
	},
	paintClient: function(vY4) {
		var v1A = new com.wiris.e1_B(vY4);
		this.paint(v1A);
	},
	paint: function(vY4) {
		vY4.setStyle(this.getDefaultStyles());
		vY4.setFormat(this);
		this.vAG(this.vf3(), vY4);
	},
	v9G: function(b, v1A) {
		this.v1G(b, v1A);
		this.v4D();
		this.vFD();
	},
	vBG: function(v5G, v1A) {
		var va7 = v1A.getColor();
		v1A.setColor(com.wiris.editor.formula.FormulaModel.vCG);
		com.wiris.editor.formula.box.BoxUtils.vDG(v1A, v5G, 0, 0, 0, 0, false);
		v1A.setColor(va7);
	},
	vAG: function(b, v1A) {
		if (b.v08.isFlag(com.wiris.e1_2.vb2)) return;
		var n;
		var i;
		var vpF;
		n = b.vN8();
		v1A.setStyle(b.v08);
		v1A.beginTranslate(b.x, b.vQ1, b.width, b.height);
		var v5G = b.viF();
		if (v5G != null && v5G.vjF) this.vBG(v5G, v1A);
		b.vEG(v1A, this.mode);
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			vpF = b.getChild(vW9);

			this.vAG(vpF, v1A);
		};
		v1A.endTranslate(b.x, b.vQ1, b.width, b.height);
	},
	v5C: null,
	v4C: null,
	vE4: null,
	v7C: null,
	allowInnerNewLines: null,
	vX7: null,
	readOnly: null,
	v2C: null,
	reservedWordsColor: null,
	forceReservedWords: null,
	reservedWords: null,
	vuC: null,
	vyB: null,
	v1D: null,
	v2D: null,
	v8D: null,
	v9D: null,
	v9C: null,
	v8C: null,
	v6C: null,
	styleChanged: null,
	clipboardChanged: null,
	caretPositionChanged: null,
	contentChanged: null,
	v1C: null,
	vKD: null,
	vLD: null,
	vjC: null,
	vJD: null,
	vBC: null,
	display: null,
	mode: null,
	vID: null,
	vqC: null,
	vV4: null,
	box: null,
	__class__: com.wiris.editor.formula.FormulaModel
};

com.wiris.editor.formula.IntegerTools = v91["com.wiris.editor.formula.IntegerTools"] = function() {};
com.wiris.editor.formula.IntegerTools.__name__ = ["com", "wiris", "editor", "formula", "IntegerTools"];
com.wiris.editor.formula.IntegerTools.max = function(x, vQ1) {
	if (x > vQ1) return x;
	return vQ1;
};
com.wiris.editor.formula.IntegerTools.min = function(x, vQ1) {
	if (x < vQ1) return x;
	return vQ1;
};

com.wiris.editor.formula.Styles = v91["com.wiris.editor.formula.Styles"] = function() {};
com.wiris.editor.formula.Styles.__name__ = ["com", "wiris", "editor", "formula", "Styles"];
com.wiris.editor.formula.Styles.v9K = function(vY4, height) {
	var vAK = vY4.getHeight("x");
	var vBK = vY4.getStyle();
	var vxE = com.wiris.e1_2.vD2(height * vBK.getP() / vAK);
	return vxE;
};
com.wiris.editor.formula.Styles.vCK = function(v1A, vDK) {
	return Math.floor(vDK / v1A.getZoom());
};
com.wiris.editor.formula.Styles.vYC = function(v1A, size, vXC) {
	if (size == null) return vXC;
	size = StringTools.trim(size);
	if (size.length == 0) return vXC;
	var i = size.indexOf("px");
	if (i >= 0) return Math.floor(Std.parseInt(size.substring(0, i)) * v1A.getZoom());
	i = size.indexOf("em");
	if (i >= 0) return v1A.getLength(Std.parseFloat(size.substring(0, i)));
	i = size.indexOf("ex");
	if (i >= 0) return v1A.getLength(Std.parseFloat(size.substring(0, i)) * 0.5);
	i = size.indexOf("%");
	if (i >= 0) return Math.floor(Std.parseInt(size.substring(0, i)));
	return 0;
};

com.wiris.editor.formula.UndoState = v91["com.wiris.editor.formula.UndoState"] = {
	vX1: ["com", "wiris", "editor", "formula", "UndoState"],
	vn1: ["UNDO_NORMAL", "UNDO_UNDO", "UNDO_REDO"]
};
com.wiris.editor.formula.UndoState.UNDO_NORMAL = ["UNDO_NORMAL", 0];
com.wiris.editor.formula.UndoState.UNDO_NORMAL.toString = vA1;
com.wiris.editor.formula.UndoState.UNDO_NORMAL.va1 = com.wiris.editor.formula.UndoState;
com.wiris.editor.formula.UndoState.UNDO_UNDO = ["UNDO_UNDO", 1];
com.wiris.editor.formula.UndoState.UNDO_UNDO.toString = vA1;
com.wiris.editor.formula.UndoState.UNDO_UNDO.va1 = com.wiris.editor.formula.UndoState;
com.wiris.editor.formula.UndoState.UNDO_REDO = ["UNDO_REDO", 2];
com.wiris.editor.formula.UndoState.UNDO_REDO.toString = vA1;
com.wiris.editor.formula.UndoState.UNDO_REDO.va1 = com.wiris.editor.formula.UndoState;


if (!com.wiris.editor.formula.box) com.wiris.editor.formula.box = {};

com.wiris.editor.formula.box.BoxUtils = v91["com.wiris.editor.formula.box.BoxUtils"] = function() {};
com.wiris.editor.formula.box.BoxUtils.__name__ = ["com", "wiris", "editor", "formula", "box", "BoxUtils"];
com.wiris.editor.formula.box.BoxUtils.v5L = function(v1A, b, vQA) {
	var v6L;
	var i;
	v6L = 0;
	b.baseline = 0;
	var vd1 = 0,
		vc1 = vQA.length;
	while (vd1 < vc1) {
		var vW9 = vd1++;
		b.baseline = com.wiris.editor.formula.IntegerTools.max(b.getChild(vW9).baseline - vQA[vW9], b.baseline);
		v6L = com.wiris.editor.formula.IntegerTools.max(vQA[vW9] + b.getChild(vW9).viK(), v6L);
	};
	b.height = b.baseline + v6L;
	var vd1 = 0,
		vc1 = vQA.length;
	while (vd1 < vc1) {
		var vW9 = vd1++;
		b.getChild(vW9).vQ1 = b.baseline - (b.getChild(vW9).baseline - vQA[vW9]);
	}
};
com.wiris.editor.formula.box.BoxUtils.v7L = function(v1A, b, vQA, veB, vH4, vQ1, m) {
	var v6L;
	var baseline;
	var height;
	var i;
	if (vH4 == veB) {
		baseline = v1A.getBaseline("x");
		v6L = v1A.getHeight("x") - baseline;
	} else {
		baseline = 0;
		v6L = 0;
	};
	var vc1 = veB;
	while (vc1 < vH4) {
		var vW9 = vc1++;
		baseline = com.wiris.editor.formula.IntegerTools.max(b.getChild(vW9).baseline - vQA[vW9], baseline);
		v6L = com.wiris.editor.formula.IntegerTools.max(vQA[vW9] + b.getChild(vW9).viK(), v6L);
	};
	height = baseline + v6L;
	var vc1 = veB;
	while (vc1 < vH4) {
		var vW9 = vc1++;
		b.getChild(vW9).vQ1 = vQ1 + baseline - (b.getChild(vW9).baseline - vQA[vW9]);
	};
	m[0] = height;
	m[1] = baseline;
};
com.wiris.editor.formula.box.BoxUtils.v8L = function(v1A, b, align, v9L, margin) {
	var i;
	var a;
	b.height = 0;
	b.width = 0;
	var vd1 = 0,
		vc1 = b.vN8();
	while (vd1 < vc1) {
		var vW9 = vd1++;
		var c = b.getChild(vW9);
		c.x = 0;
		c.vQ1 = b.height;
		b.height += c.height + margin;
		b.width = com.wiris.editor.formula.IntegerTools.max(b.width, c.width);
	};
	var vd1 = 0,
		vc1 = b.vN8();
	while (vd1 < vc1) {
		var vW9 = vd1++;
		var c = b.getChild(vW9);
		if (align == null || align.length == 0) a = com.wiris.editor.formula.Styles.vy7;
		else if (vW9 < align.length) a = align[vW9];
		else a = align[align.length - 1]; if (!(a == com.wiris.editor.formula.Styles.vy7)) {
			if (a == com.wiris.editor.formula.Styles.vz7) c.x = b.width - c.width;
			if (a == com.wiris.editor.formula.Styles.v45) c.x = Math.floor((b.width - c.width) / 2);
		}
	};
	var p = v9L;
	if (p >= 0) b.baseline = b.getChild(p).vQ1 + b.getChild(p).baseline;
	else if (b.vN8() == 1) b.baseline = b.getChild(0).vQ1 + b.getChild(0).baseline;
	else b.baseline = Math.floor(b.height / 2) + v1A.getMiddle();
};
com.wiris.editor.formula.box.BoxUtils.vAL = function(b, i, m) {
	var extra = com.wiris.editor.formula.IntegerTools.max(b.getChild(i).baseline + m - b.baseline, 0);
	com.wiris.editor.formula.box.BoxUtils.vBL(b, extra);
};
com.wiris.editor.formula.box.BoxUtils.vBL = function(b, extra) {
	var vH4;
	var vd1 = 0,
		vc1 = b.vN8();
	while (vd1 < vc1) {
		var vdI = vd1++;
		b.getChild(vdI).vQ1 += extra;
	};
	b.baseline += extra;
	b.height += extra;
};
com.wiris.editor.formula.box.BoxUtils.vCL = function(b) {
	var m;
	var i;
	m = -1073741824;
	var vd1 = 0,
		vc1 = b.vN8();
	while (vd1 < vc1) {
		var vW9 = vd1++;
		m = com.wiris.editor.formula.IntegerTools.max(b.getChild(vW9).width, m);
	};
	return m;
};
com.wiris.editor.formula.box.BoxUtils.vDL = function(b, margin) {
	var m;
	var i;
	m = com.wiris.editor.formula.box.BoxUtils.vCL(b);
	var vd1 = 0,
		vc1 = b.vN8();
	while (vd1 < vc1) {
		var vW9 = vd1++;
		b.getChild(vW9).x = Math.floor(Math.round((m - b.getChild(vW9).width) / 2.0)) + margin;
	};
	b.width = m + 2 * margin;
};
com.wiris.editor.formula.box.BoxUtils.vEL = function(b, margin) {
	var m;
	var i;
	m = com.wiris.editor.formula.box.BoxUtils.vCL(b);
	var vd1 = 0,
		vc1 = b.vN8();
	while (vd1 < vc1) {
		var vW9 = vd1++;
		b.getChild(vW9).x = 0;
	};
	b.width = m + 2 * margin;
};
com.wiris.editor.formula.box.BoxUtils.vsC = function(b) {
	b.vcK();
	return b.vUF;
};
com.wiris.editor.formula.box.BoxUtils.vhG = function(b) {
	var p;
	var i;
	var x;
	p = b.getParent();
	if (p == null) return 0;
	x = 0;
	var vd1 = 0,
		vc1 = b.vn7;
	while (vd1 < vc1) {
		var vW9 = vd1++;
		x = x + com.wiris.editor.formula.box.BoxUtils.vsC(p.getChild(vW9));
	};
	var v5G = p.viF();
	if (v5G != null) x += v5G.vtK(b.vn7);
	return x + com.wiris.editor.formula.box.BoxUtils.vhG(p);
};
com.wiris.editor.formula.box.BoxUtils.vnD = function(p, b, left) {
	var vFL;
	vFL = b.getParent();
	while (vFL != null) {
		if (vFL == p) return p.vtK(b.vn7 + (left ? 0 : 1)) - 1;
		b = vFL;
		vFL = vFL.getParent();
	};
	return -1;
};
com.wiris.editor.formula.box.BoxUtils.vqK = function(p, c) {
	var x;
	var vQ1;
	x = 0;
	vQ1 = 0;
	while (c != p) {
		x += c.x;
		vQ1 += c.vQ1;
		c = c.getParent();
	};
	return com.wiris.e1_6.vC7(x, vQ1);
};
com.wiris.editor.formula.box.BoxUtils.select = function(b, vQF, length) {
	if (length == 0) {
		var vlD;
		vlD = com.wiris.editor.formula.box.BoxUtils.vRF(b, vQF);
		return vlD.vg3();
	} else {
		var vGL;
		var vHL;
		vGL = com.wiris.editor.formula.box.BoxUtils.select(b, vQF, 0);
		vHL = com.wiris.editor.formula.box.BoxUtils.select(b, vQF + length, 0);
		return com.wiris.editor.formula.box.BoxUtils.vIL(vGL, vHL);
	}
};
com.wiris.editor.formula.box.BoxUtils.vIL = function(vGL, vHL) {
	var p;
	var s;
	var v5G;
	p = com.wiris.editor.formula.box.BoxUtils.vJL(vGL.vf3(), vHL.vf3());
	while (p != null && !js.Boot.__instanceof(p, com.wiris.e1_O)) p = p.getParent();
	if (p == null) return null;
	v5G = js.Boot.vX3(p, com.wiris.e1_O);
	var vEA;
	var vnA;
	var left = null;
	var right = null;
	if (vGL.vf3() == p) vEA = vGL.vEA;
	else if (vGL.vf3().getParent() == p && vGL.vlK()) {
		vEA = com.wiris.editor.formula.box.BoxUtils.vnD(v5G, vGL.vf3(), false);
		left = vGL;
	} else vEA = com.wiris.editor.formula.box.BoxUtils.vnD(v5G, vGL.vf3(), true); if (vHL.vf3() == p) vnA = vHL.vEA;
	else if (vHL.vf3().getParent() == p && vHL.vnK()) {
		vnA = com.wiris.editor.formula.box.BoxUtils.vnD(v5G, vHL.vf3(), true);
		right = vHL;
	} else vnA = com.wiris.editor.formula.box.BoxUtils.vnD(v5G, vHL.vf3(), false);
	return v5G.vg3(vEA, vnA, left, right);
};
com.wiris.editor.formula.box.BoxUtils.vKL = function(b) {
	var n = b.vN8();
	var i;
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		var vTB = b.getChild(vW9);
		if (!vTB.vRB()) {
			var vLL;
			var vKE;
			vLL = b["delete"](vW9, 1);
			vKE = new com.wiris.e1_h();
			vKE.vVD(0, vLL[0]);
			b.vVD(vW9, vKE);
		}
	}
};
com.wiris.editor.formula.box.BoxUtils.vRF = function(b, x) {
	var n;
	var vML;
	var vNL;
	var vOL;
	var i;
	var v5G = null;
	v5G = b.viF();
	n = b.vN8();
	vML = 0;
	vNL = 0;
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		if (v5G != null) vML = v5G.vtK(vW9);
		else vML = 0; if (x < vML + vNL) return v5G.vuK(x - vNL);
		vOL = vNL + com.wiris.editor.formula.box.BoxUtils.vsC(b.getChild(vW9));
		if (x < vML + vOL) return com.wiris.editor.formula.box.BoxUtils.vRF(b.getChild(vW9), x - vML - vNL);
		vNL = vOL;
	};
	return v5G.vuK(x - vNL);
};
com.wiris.editor.formula.box.BoxUtils.vPL = function(a) {
	var t;
	var i;
	var n;
	t = Type.getClassName(Type.getClass(a));
	if (a.vK8()) return t + "[" + (js.Boot.vX3(a, com.wiris.e1_f)).vM8() + "]";
	n = a.vN8();
	if (n > 0) t = t + "(";
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		if (vW9 > 0) t = t + ",";
		t = t + com.wiris.editor.formula.box.BoxUtils.vPL(a.getChild(vW9));
	};
	if (n > 0) t = t + ")";
	return t;
};
com.wiris.editor.formula.box.BoxUtils.vJL = function(vH2, vI2) {
	var vQL;
	var vRL;
	var p;
	var i;
	var vH4;
	vQL = com.wiris.editor.formula.box.BoxUtils.vSL(vH2);
	vRL = com.wiris.editor.formula.box.BoxUtils.vSL(vI2);
	i = vQL.length - 1;
	vH4 = vRL.length - 1;
	p = null;
	while (i >= 0 && vH4 >= 0) {
		if (vQL[i] != vRL[vH4]) return p;
		p = vQL[i];
		i--;
		vH4--;
	};
	return p;
};
com.wiris.editor.formula.box.BoxUtils.vSL = function(a) {
	var vQA;
	var p;
	vQA = new Array();
	p = a;
	do {
		vQA.push(p);
		p = p.getParent();
	} while (p != null);
	return vQA;
};
com.wiris.editor.formula.box.BoxUtils.vTL = function(a) {
	var t;
	var i;
	var n;
	t = Type.getClassName(Type.getClass(a));
	t += " b=" + a.vqE() + ",e=" + a.vpE();
	t += " x0=" + a.vEA + ",x1=" + a.vnA;
	if (a.left != null) t += " L.$(" + com.wiris.editor.formula.box.BoxUtils.vTL(a.left) + ")";
	if (a.right != null) t += " R.$(" + com.wiris.editor.formula.box.BoxUtils.vTL(a.right) + ")";
	return t;
};
com.wiris.editor.formula.box.BoxUtils.vsE = function(vlD, selection) {
	return vlD.b.vSF(vlD.x, selection);
};
com.wiris.editor.formula.box.BoxUtils.vUL = function(top, vlD) {
	var ar = vlD.b.getSelectionRectangles(vlD.x, vlD.x, false);
	var p = com.wiris.editor.formula.box.BoxUtils.vqK(top, vlD.b);
	var r;
	r = ar[0];
	r.x += p.x;
	r.vQ1 += p.vQ1;
	return r;
};
com.wiris.editor.formula.box.BoxUtils.vVL = function(top, vlD) {
	var q = vlD.b.vrK(vlD.x);
	var p = com.wiris.editor.formula.box.BoxUtils.vqK(top, vlD.b);
	if (q == null) q = p;
	return com.wiris.e1_6.vC7(q.x + p.x, q.vQ1 + p.vQ1);
};
com.wiris.editor.formula.box.BoxUtils.vWL = function(vQ1, r) {
	if (vQ1 < r.vQ1) return r.vQ1 - vQ1;
	if (vQ1 > r.vQ1 + r.height) return vQ1 - r.vQ1 + r.height;
	return 0;
};
com.wiris.editor.formula.box.BoxUtils.getPositionFromPoint = function(a, selection, p) {
	var n;
	var i;
	var veB;
	var d;
	var vXL;
	var v6B;
	var vYL;
	var vZL;
	var vaL;
	veB = -1;
	vZL = null;
	vaL = false;
	n = com.wiris.editor.formula.box.BoxUtils.vsC(a);
	vXL = 0;
	vYL = 0;
	var vbL;
	var vcL = com.wiris.editor.formula.box.BoxUtils.vRF(a, 0);
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		vbL = vcL;
		if (vW9 + 1 < n) vcL = vbL.next();
		if (!com.wiris.editor.formula.box.BoxUtils.vsE(vbL, selection)) continue;
		var vdL;
		vdL = com.wiris.editor.formula.box.BoxUtils.vUL(a, vbL);
		v6B = vdL.height;
		vdL.vQ1 += Math.floor(Math.floor(vdL.height / 2.0));
		vdL.height = 1;
		d = com.wiris.editor.formula.box.BoxUtils.veL(p, vdL);
		if (veB == -1 || d < vXL || d == vXL && v6B > vYL) {
			veB = vW9;
			vZL = vdL;
			vXL = d;
			vYL = v6B;
		}
	};
	return veB;
};
com.wiris.editor.formula.box.BoxUtils.veL = function(p, r) {
	var v5B = 0;
	var v6B = 0;
	if (p.x < r.x) v5B += (r.x - p.x) * (r.x - p.x);
	if (p.x > r.x + r.width) v5B += (r.x + r.width - p.x) * (r.x + r.width - p.x);
	if (p.vQ1 < r.vQ1) v6B += (r.vQ1 - p.vQ1) * (r.vQ1 - p.vQ1);
	if (p.vQ1 > r.vQ1 + r.height) v6B += (r.vQ1 + r.height - p.vQ1) * (r.vQ1 + r.height - p.vQ1);
	return v5B + v6B;
};
com.wiris.editor.formula.box.BoxUtils.vfL = function(p, r) {
	var v5B = 0;
	var v6B = 0;
	if (r.x > p.x) v5B = r.x - p.x;
	if (p.x > r.x + r.width) v5B = p.x - (r.x + r.width);
	if (r.vQ1 > p.vQ1) v6B = r.vQ1 - p.vQ1;
	if (p.vQ1 > r.vQ1 + r.height) v6B = p.vQ1 - (r.vQ1 + r.height);
	return com.wiris.common.WInteger.max(v5B, v6B);
};
com.wiris.editor.formula.box.BoxUtils.vgL = function(a, i, vH4) {
	var vhL = com.wiris.editor.formula.box.BoxUtils.vRF(a, i);
	var viL = com.wiris.editor.formula.box.BoxUtils.vRF(a, vH4);
	return com.wiris.editor.formula.box.BoxUtils.vJL(vhL.b, viL.b);
};
com.wiris.editor.formula.box.BoxUtils.v4E = function(a, k, vnE, selection) {
	var n;
	var i;
	var veB;
	var depth;
	var vjL;
	var vkL;
	var vlL;
	veB = -1;
	vlL = null;
	vjL = 0;
	n = com.wiris.editor.formula.box.BoxUtils.vsC(a);
	var vcL = com.wiris.editor.formula.box.BoxUtils.vRF(a, 0);
	var vbL;
	vkL = com.wiris.editor.formula.box.BoxUtils.vVL(a, com.wiris.editor.formula.box.BoxUtils.vRF(a, k));
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		vbL = vcL;
		if (vW9 + 1 < n) {
			vcL = vbL.next();
			var vmL = com.wiris.editor.formula.box.BoxUtils.vRF(a, vW9 + 1);
			if (vcL.b != vmL.b || vcL.x != vmL.x) vcL = vbL.next();
		};
		if (!com.wiris.editor.formula.box.BoxUtils.vsE(vbL, selection)) continue;
		var vnL;
		vnL = com.wiris.editor.formula.box.BoxUtils.vVL(a, vbL);
		if (vnE && vnL.vQ1 < vkL.vQ1 || !vnE && vnL.vQ1 > vkL.vQ1) {
			depth = com.wiris.editor.formula.box.BoxUtils.vgL(a, k, vW9).vdK();
			if (veB == -1 || depth > vjL || depth == vjL && (vnE && vnL.vQ1 > vlL.vQ1 || !vnE && vnL.vQ1 < vlL.vQ1 || vnL.vQ1 == vlL.vQ1 && Math.abs(vnL.x - vkL.x) < Math.abs(vlL.x - vkL.x))) {
				vlL = vnL;
				veB = vW9;
				vjL = depth;
			}
		}
	};
	return veB;
};
com.wiris.editor.formula.box.BoxUtils.vgE = function(b) {
	var s = new com.wiris.e1_I();
	s.setMode(com.wiris.e1_I.vNI);
	s.vVC(b);
};
com.wiris.editor.formula.box.BoxUtils.vfK = function(src, vTC) {
	var vj2 = new com.wiris.e1_I();
	vj2.setMode(com.wiris.e1_I.vII);
	vj2.vVC(src);
	vj2.setMode(com.wiris.e1_I.vGI);
	vj2.vVC(vTC);
};
com.wiris.editor.formula.box.BoxUtils.getAttributes = function(src) {
	var vj2 = new com.wiris.e1_I();
	vj2.setMode(com.wiris.e1_I.vII);
	vj2.vVC(src);
	return vj2.getAttributes();
};
com.wiris.editor.formula.box.BoxUtils.vWB = function(vPE) {
	var vj2 = new com.wiris.e1_I();
	vj2.setMode(com.wiris.e1_I.v8I);
	vj2.vVC(vPE);
	return vj2.vbH();
};
com.wiris.editor.formula.box.BoxUtils.vm4 = function(box) {
	var i;
	box.vWC();
	var vd1 = 0,
		vc1 = box.vN8();
	while (vd1 < vc1) {
		var vW9 = vd1++;
		com.wiris.editor.formula.box.BoxUtils.vm4(box.getChild(vW9));
	}
};
com.wiris.editor.formula.box.BoxUtils.vpD = function(box) {
	var a = new Array();
	var current = box;
	var voL = null;
	while (current != null) {
		var vj2 = new com.wiris.e1_I();
		vj2.setMode(com.wiris.e1_I.vwH);
		vj2.vVC(current);
		var vpL = vj2.vZH();
		if (js.Boot.__instanceof(current, com.wiris.e1_O)) voL = js.Boot.vX3(current, com.wiris.e1_O);
		vpL.position = com.wiris.editor.formula.box.BoxUtils.vhG(voL);
		a.push(vpL);
		current = current.getParent();
	};
	return a;
};
com.wiris.editor.formula.box.BoxUtils.vDG = function(v1A, b, vqL, vrL, vsL, vtL, vuL) {
	var vA2 = v1A.getLineWidth();
	var vvL = Math.floor(vA2 / 2);
	var vwL = Math.floor(Math.ceil(vA2 / 2.0));
	vA2 = 2 * vvL;
	var vxL = vuL ? b.baseline : b.height;
	var vnA = vqL + vvL;
	var voA = vrL + vvL;
	var vpA = b.width - vqL - vwL;
	var vqA = vxL - vwL;
	var vP9 = b.width - 2 * vqL - vA2;
	var h = vxL - vrL - vA2;
	if (vP9 < 0)--vP9;

	if (!v1A.styles.pureRender) {
		v1A.drawHorizontalLine(0, vnA, voA, vP9);
		v1A.drawHorizontalLine(1, vnA, vqA, vP9);
		v1A.drawVerticalLine(2, vnA, voA, h);
		v1A.drawVerticalLine(3, vpA, voA, h);
	}
};
com.wiris.editor.formula.box.BoxUtils.vgK = function(src, vTC) {
	vTC.styles = src.styles.vA3();
	vTC.v3D();
};