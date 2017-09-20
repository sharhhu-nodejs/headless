com.wiris.e1_2 = v91["com.wiris.e1_2"] = function() {
	this.p = 0;
	this.v72 = 0;
	this.color = 0;
	this.fontFamily = "inherit";
	this.v82 = 0;
	this.v92 = 0;
	this.fontSize = 0;
	this.vA2 = 0;
	this.zoom = 1.0;
	this.align = com.wiris.e1_2.vB2;
	this.vC2 = "";
};
com.wiris.e1_2.__name__ = ["com", "wiris", "e1_2"];
com.wiris.e1_2.__interfaces__ = [com.wiris.util.graphics.BoxStyleInterface];
com.wiris.e1_2.vD2 = function(p) {
	var s = new com.wiris.e1_2();
	s.vE2(p);
	return s;
};
com.wiris.e1_2.vF2 = function(vG2) {
	var b = new com.wiris.e1_2();
	b.p = vG2.getP();
	b.v72 = vG2.getScriptLevel();
	b.fontFamily = vG2.getFontFamily();
	b.fontSize = vG2.getFontSize();
	b.color = vG2.getColor();
	b.v82 = vG2.getFlags();
	b.v92 = vG2.getFlagsMask();
	b.vA2 = vG2.getLineWidth();
	b.zoom = vG2.getZoom();
	b.width = vG2.getWidth();
	b.maxWidth = vG2.getMaxWidth();
	b.align = vG2.getAlign();
	b.vC2 = vG2.getClassType();
	return b;
};
com.wiris.e1_2.join = function(vH2, vI2) {
	var a = com.wiris.e1_2.vF2(vH2);
	a.vJ2(vI2);
	return a;
};
com.wiris.e1_2.remove = function(vH2, vI2) {
	var a = com.wiris.e1_2.vF2(vH2);
	a.vK2(vI2, true);
	return a;
};
com.wiris.e1_2.vL2 = function(vH2, vI2) {
	var a = com.wiris.e1_2.vF2(vH2);
	if (vI2.isFlagMask(com.wiris.e1_2.vM2) && vH2.getColor() == vI2.getColor()) a.v92 &= ~com.wiris.e1_2.vM2;
	if (vI2.isFlagMask(com.wiris.e1_2.vN2) && vH2.getScriptLevel() == vI2.getScriptLevel()) a.v92 &= ~com.wiris.e1_2.vN2;
	if (vI2.isFlagMask(com.wiris.e1_2.vO2) && vH2.getP() == vI2.getP()) a.v92 &= ~com.wiris.e1_2.vO2;
	if (vI2.isFlagMask(com.wiris.e1_2.vP2) && vH2.getZoom() == vI2.getZoom()) a.v92 &= ~com.wiris.e1_2.vP2;
	if (vI2.isFlagMask(com.wiris.e1_2.vQ2) && com.wiris.e1_2.vR2(vH2.getWidth(), vI2.getWidth())) a.v92 &= ~com.wiris.e1_2.vQ2;
	if (vI2.isFlagMask(com.wiris.e1_2.vS2) && vH2.getLineWidth() == vI2.getLineWidth()) a.v92 &= ~com.wiris.e1_2.vS2;
	if (vI2.isFlagMask(com.wiris.e1_2.vT2) && vH2.getFontSize() == vI2.getFontSize()) a.v92 &= ~com.wiris.e1_2.vT2;
	if (vI2.isFlagMask(com.wiris.e1_2.vU2) && com.wiris.e1_2.vR2(vH2.getMaxWidth(), vI2.getMaxWidth())) a.v92 &= ~com.wiris.e1_2.vU2;
	if (vI2.isFlagMask(com.wiris.e1_2.vV2) && vH2.getAlign() == vI2.getAlign()) a.v92 &= ~com.wiris.e1_2.vV2;
	if (vI2.isFlagMask(com.wiris.e1_2.vW2) && com.wiris.e1_2.vR2(vH2.getFontFamily(), vI2.getFontFamily())) a.v92 &= ~com.wiris.e1_2.vW2;
	if (vI2.isFlagMask(com.wiris.e1_2.vX2) && com.wiris.e1_2.vR2(vH2.getClassType(), vI2.getClassType())) a.v92 &= ~com.wiris.e1_2.vX2;
	a.v92 &= ~(vI2.getFlagsMask() & ~(vH2.getFlags() ^ vI2.getFlags()) & (com.wiris.e1_2.vY2 | com.wiris.e1_2.vZ2 | com.wiris.e1_2.va2 | com.wiris.e1_2.vb2 | com.wiris.e1_2.vc2 | com.wiris.e1_2.vd2));
	a.ve2();
	return a;
};
com.wiris.e1_2.vf2 = function(vg2, vh2, v92) {
	vg2 &= ~v92;
	vg2 |= vh2;
	return vg2;
};
com.wiris.e1_2.vi2 = function(style) {
	var h = new HaxeHash();
	if (style.isFlagMask(com.wiris.e1_2.vW2)) h.set("fontFamily", style.getFontFamily());
	if (style.isFlagMask(com.wiris.e1_2.vQ2)) h.set("width", style.getWidth());
	if (style.isFlagMask(com.wiris.e1_2.vU2)) h.set("maxWidth", style.getMaxWidth());
	return h;
};
com.wiris.e1_2.vR2 = function(vj2, vk2) {
	return vj2 == vk2 || vj2 != null && vj2 == vk2;
};
com.wiris.e1_2.vl2 = function(align) {
	if (align == com.wiris.e1_2.vm2) return "right";
	if (align == com.wiris.e1_2.vn2) return "left";
	if (align == com.wiris.e1_2.vo2) return "center";
	if (align == com.wiris.e1_2.vp2) return "decimal";
	if (align == com.wiris.e1_2.vq2) return "relation";
	return "auto";
};
com.wiris.e1_2.vr2 = function(s) {
	if (s == "right") return com.wiris.e1_2.vm2;
	if (s == "left") return com.wiris.e1_2.vn2;
	if (s == "center") return com.wiris.e1_2.vo2;
	if (s == "decimal") return com.wiris.e1_2.vp2;
	if (s == "relation") return com.wiris.e1_2.vq2;
	return com.wiris.e1_2.vB2;
};
com.wiris.e1_2.prototype = {
	setParams: function(parameters) {
		var i = parameters.keys();
		while (i.hasNext()) {
			var vJ1 = i.next();
			var value = parameters.get(vJ1);
			this.setParam(vJ1, value);
		}
	},
	setParam: function(vJ1, value) {
		vJ1 = vJ1.toLowerCase();
		if ("color" == vJ1) this.setColor(com.wiris.util.css.CSSUtils.vs2(value));
		else if ("fontfamily" == vJ1) this.setFontFamily(value);
		else if ("fontsize" == vJ1) {
			if (value.indexOf("%") >= 0) {
				this.vE2(com.wiris.util.css.CSSUtils.vt2(value));
				this.vu2(com.wiris.e1_2.vT2);
			} else this.setFontSize(com.wiris.util.css.CSSUtils.vv2(value));
		} else if ("zoom" == vJ1) this.vw2(Std.parseFloat(value));
		else if ("width" == vJ1) this.vx2(value);
		else if ("maxwidth" == vJ1) this.setMaxWidth(value);
		else if ("fontstyle" == vJ1) this.vy2(com.wiris.e1_2.vY2, value == "italic");
		else if ("fontweight" == vJ1) this.vy2(com.wiris.e1_2.vZ2, value == "bold");
		else if ("classtype" == vJ1) this.setClassType(value);
		else if ("textalign" == vJ1) this.vz2(com.wiris.e1_2.vr2(value));
	},
	getFlagsMask: function() {
		return this.v92;
	},
	getFlags: function() {
		return this.v82;
	},
	getAlign: function() {
		return this.align;
	},
	getMaxWidth: function() {
		return this.maxWidth;
	},
	vz2: function(align) {
		this.align = align;
		this.v92 |= com.wiris.e1_2.vV2;
	},
	setMaxWidth: function(maxWidth) {
		this.maxWidth = maxWidth;
		this.v92 |= com.wiris.e1_2.vU2;
	},
	vx2: function(width) {
		this.width = width;
		this.v92 |= com.wiris.e1_2.vQ2;
	},
	getWidth: function() {
		return this.width;
	},
	setFontSize: function(size) {
		this.fontSize = size;
		this.v92 |= com.wiris.e1_2.vT2;
		this.vy2(com.wiris.e1_2.v03, true);
	},
	getFontSize: function() {
		return this.fontSize;
	},
	setFontFamily: function(fontFamily) {
		this.fontFamily = fontFamily;
		this.v92 |= com.wiris.e1_2.vW2;
	},
	getFontFamily: function() {
		return this.fontFamily;
	},
	isFlag: function(v13) {
		return (this.v82 & v13 & this.v92) != 0;
	},
	vy2: function(v13, v23) {
		if (v23) this.v82 |= v13;
		else this.v82 &= ~v13;
		this.v92 |= v13;
	},
	setClassType: function(vC2) {
		this.vC2 = vC2;
		this.v92 |= com.wiris.e1_2.vX2;
	},
	getClassType: function() {
		return this.vC2;
	},
	setColor: function(color) {
		this.color = color;
		this.v92 |= com.wiris.e1_2.vM2;
	},
	getColor: function() {
		return this.color;
	},
	v33: function(v72) {
		this.v72 = v72;
		this.v92 |= com.wiris.e1_2.vN2;
	},
	getScriptLevel: function() {
		return this.v72;
	},
	setLineWidth: function(v43) {
		this.vA2 = v43;
		this.v92 |= com.wiris.e1_2.vS2;
	},
	getLineWidth: function() {
		return this.vA2;
	},
	vw2: function(zoom) {
		this.zoom = zoom;
		this.v92 |= com.wiris.e1_2.vP2;
	},
	getZoom: function() {
		return this.zoom;
	},
	vE2: function(p) {
		this.p = p;
		this.v92 |= com.wiris.e1_2.vO2;
	},
	getP: function() {
		return this.p;
	},
	isFlagMask: function(v13) {
		return (this.v92 & v13) != 0;
	},
	vu2: function(v13) {
		this.v92 &= ~v13;
		this.ve2();
	},
	ve2: function() {
		this.v82 = this.v82 & this.v92;
		if (!this.isFlagMask(com.wiris.e1_2.vM2)) this.color = 0;
		if (!this.isFlagMask(com.wiris.e1_2.vN2)) this.v72 = 0;
		if (!this.isFlagMask(com.wiris.e1_2.vO2)) this.p = 0;
		if (!this.isFlagMask(com.wiris.e1_2.vP2)) this.zoom = 0;
		if (!this.isFlagMask(com.wiris.e1_2.vQ2)) this.width = null;
		if (!this.isFlagMask(com.wiris.e1_2.vS2)) this.vA2 = 0;
		if (!this.isFlagMask(com.wiris.e1_2.vT2)) this.fontSize = 0;
		if (!this.isFlagMask(com.wiris.e1_2.vU2)) this.maxWidth = null;
		if (!this.isFlagMask(com.wiris.e1_2.vV2)) this.align = com.wiris.e1_2.vB2;
		if (!this.isFlagMask(com.wiris.e1_2.vW2)) this.fontFamily = "inherit";
		if (!this.isFlagMask(com.wiris.e1_2.vX2)) this.vC2 = "";
	},
	v53: function(v63) {
		this.v92 &= v63;
		this.ve2();
	},
	vK2: function(vI2, v73) {
		if (v73) this.v92 &= ~vI2.getFlagsMask();
		else this.v92 &= vI2.getFlagsMask();
		this.ve2();
	},
	vJ2: function(style) {
		if (style.isFlagMask(com.wiris.e1_2.vM2)) this.color = style.getColor();
		if (style.isFlagMask(com.wiris.e1_2.vN2)) this.v72 = style.getScriptLevel();
		if (style.isFlagMask(com.wiris.e1_2.vO2)) this.p = style.getP();
		if (style.isFlagMask(com.wiris.e1_2.vP2)) this.zoom = style.getZoom();
		if (style.isFlagMask(com.wiris.e1_2.vQ2)) this.width = style.getWidth();
		if (style.isFlagMask(com.wiris.e1_2.vS2)) this.vA2 = style.getLineWidth();
		if (style.isFlagMask(com.wiris.e1_2.vT2)) this.fontSize = style.getFontSize();
		if (style.isFlagMask(com.wiris.e1_2.vW2)) this.fontFamily = style.getFontFamily();
		if (style.isFlagMask(com.wiris.e1_2.vU2)) this.maxWidth = style.getMaxWidth();
		if (style.isFlagMask(com.wiris.e1_2.vV2)) this.align = style.getAlign();
		if (style.isFlagMask(com.wiris.e1_2.vX2)) this.vC2 = style.getClassType();
		this.v92 |= style.getFlagsMask();
		this.v82 = com.wiris.e1_2.vf2(this.v82, style.getFlags(), style.getFlagsMask());
		var n = style.getFlagsMask() >> com.wiris.e1_2.v83;
		if (n != 0) {
			this.v92 &= ~n;
			this.v82 &= ~n;
			this.v92 &= com.wiris.e1_2.v93 - 1;
		}
	},
	vA3: function() {
		return com.wiris.e1_2.vF2(this);
	},
	vB3: function(style, vC3) {
		var vD3 = style.v82 ^ this.v82;
		return style.p == this.p && style.v72 == this.v72 && com.wiris.e1_2.vR2(style.fontFamily, this.fontFamily) && style.fontSize == this.fontSize && style.color == this.color && (vD3 | vC3) == vC3 && style.v92 == this.v92 && style.vA2 == this.vA2 && style.zoom == this.zoom && com.wiris.e1_2.vR2(style.width, this.width) && com.wiris.e1_2.vR2(style.maxWidth, this.maxWidth) && style.align == this.align && com.wiris.e1_2.vR2(style.vC2, this.vC2);
	},
	vE3: function(style) {
		return this.vB3(style, 0);
	},
	vC2: null,
	align: null,
	maxWidth: null,
	width: null,
	zoom: null,
	v92: null,
	v82: null,
	fontFamily: null,
	fontSize: null,
	vA2: null,
	color: null,
	v72: null,
	p: null,
	__class__: com.wiris.e1_2
};