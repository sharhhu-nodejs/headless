com.wiris.e1_B = v91["com.wiris.e1_B"] = function(v2A) {
	this.v2A = v2A;
	this.v3A = new Array();
	this.v4A = new Array();
	this.v5A = new com.wiris.e1_E();
	this.v5A.v6A(v2A.getFonts());
	this.s = new com.wiris.e1_2();
	this.zoom = 1;
	this.v7A = new HaxeHash();
	this.v8A("sans-serif", "Arial");
	this.v8A("sans-serif", "Lucida Sans");
	this.v8A("sans-serif", "Helvetica");
	this.v8A("monospace", "Courier New");
	this.v8A("monospace", "FreeMono");
	this.v8A("monospace", "Courier");
	this.v8A("serif", "Times New Roman");
	this.v8A("serif", "FreeSerif");
	this.v8A("serif", "Times");
	this.v8A("Arial", "Arial");
	this.v8A("Arial", "Lucida Sans");
	this.v8A("Arial", "Helvetica");
	this.v8A("Arial", "sans-serif");
	this.v8A("Courier New", "Courier New");
	this.v8A("Courier New", "FreeMono");
	this.v8A("Courier New", "Courier");
	this.v8A("Courier New", "monospace");
	this.v8A("Tahoma", "Tahoma");
	this.v8A("Tahoma", "DejaVu LGC Sans");
	this.v8A("Tahoma", "Geneva");
	this.v8A("Tahoma", "sans-serif");
	this.v8A("Times New Roman", "Times New Roman");
	this.v8A("Times New Roman", "FreeSerif");
	this.v8A("Times New Roman", "Times");
	this.v8A("Times New Roman", "serif");
	this.v8A("Verdana", "Verdana");
	this.v8A("Verdana", "DejaVu LGC Sans");
	this.v8A("Verdana", "Geneva");
	this.v8A("Verdana", "sans-serif");
	if (com.wiris.e1_B.v9A == null) {
		com.wiris.e1_B.v9A = new HaxeHash();
		com.wiris.e1_B.vAA = new HaxeHash();
		com.wiris.e1_B.italicExtraSpace = new HaxeHash();
		var resourceLoader = new com.wiris.system.ResourceLoader();
		var vBA = resourceLoader.loadResource("font_adjust.xml");
		if (vBA != null) this.vCA(vBA, v2A);
	}
};

// 主要的渲染方法。
com.wiris.e1_B.__name__ = ["com", "wiris", "e1_B"];
com.wiris.e1_B.__interfaces__ = [com.wiris.editor.GraphicsContext];
com.wiris.e1_B.prototype = {
	getDefaultStyles: function() {
		return this.styles;
	},
	setFormat: function(vDA) {
		this.styles = vDA;
	},
	drawPolyline: function(vEA, vFA, px, vV9, length) {
		if (this.s.isFlag(com.wiris.e1_2.vc2)) {
			var vGA = vEA;
			var vHA = vEA;
			var i = 0;
			while (i < length) {
				if (px[i] < vGA) vGA = px[i];
				if (px[i] > vHA) vHA = px[i];
				++i;
			};
			var width = vHA - vGA;
			vEA = this.v3A[this.v3A.length - 1] - vEA - width;
			i = 0;
			while (i < length) {
				px[i] = this.v3A[this.v3A.length - 1] - px[i] - width;
				++i;
			}
		};
		this.v2A.drawPolyline(vEA, vFA, px, vV9, length);
	},
	vIA: function() {
		var n = this.v5A.vJA(this.v2A, this.s, "x", true);
		var i;
		var vKA = this.v5A.vLA(0);
		if (this.v7A.exists(vKA)) vKA = this.v7A.get(vKA);
		return vKA;
	},
	getItalicExtraSpace: function() {
		var vKA = this.vIA();
		var vMA = com.wiris.e1_B.italicExtraSpace.get(vKA.toLowerCase());
		if (vMA != null) return Std.parseFloat(vMA);
		return 0.05;
	},
	getXHeight: function() {
		var vKA = this.vIA();
		var vNA = com.wiris.e1_B.vAA.get(vKA.toLowerCase());
		if (vNA != null) return Std.parseFloat(vNA);
		return 0.4;
	},
	getZoom: function() {
		return this.zoom;
	},
	fillRect: function(x, vQ1, width, height) {
		if (this.s.isFlag(com.wiris.e1_2.vc2)) x = this.v3A[this.v3A.length - 1] - x - width;
		this.v2A.fillRect(x, vQ1, width, height);
	},
	drawArc: function(x, vQ1, width, height, vOA, vPA) {
		// console.log(this.v2A.x, this.v2A.vQ1);
		if (this.s.isFlag(com.wiris.e1_2.vc2)) {
			x = this.v3A[this.v3A.length - 1] - x - width;
			vOA = 180 - vOA - vPA;
		};
		if(vPA === 360){
			this.v2A.drawArc(this.v2A.x, this.v2A.vQ1, width, height, vOA, vPA);
		}else{
			this.v2A.drawArc(x, vQ1, width, height, vOA, vPA);
		}
	},
	getLineWidth: function() {
		return this.v2A.getLineWidth();
	},
	setStyle: function(s) {
		var c = com.wiris.e1_2.vL2(s, this.s);
		this.s = s;
		this.v2A.setStyle(s, c);
		if (c.isFlagMask(com.wiris.e1_2.vP2)) this.zoom = c.getZoom();
	},
	setLineWidth: function(vP9) {
		var vQA = com.wiris.e1_2.vF2(this.s);
		vQA.setLineWidth(vP9);
		this.setStyle(vQA);
	},
	setColor: function(c) {
		var vQA = com.wiris.e1_2.vF2(this.s);
		vQA.setColor(c);
		this.setStyle(vQA);
	},
	setBracketsSmaller: function(b) {
		this.v5A.setBracketsSmaller(b);
	},
	vRA: function(i, n) {
		var k;
		k = 0;
		i++;
		while (i < n) {
			k += this.v5A.vSA(i).length;
			i++;
		};
		return k;
	},
	vTA: function(n) {
		var i;
		var vUA = new Array();
		var vVA = 0;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			vUA.push(vVA);
			var sub = this.v5A.vSA(vW9);
			var vKA = this.v5A.vLA(vW9);
			vVA += this.vb9(vKA, sub)[0];
		};
		return vUA;
	},
	vWA: function(vXA, vYA) {
		if (vYA) return !vXA && (this.s.isFlag(com.wiris.e1_2.vd2) || this.s.isFlag(com.wiris.e1_2.va2));
		return vXA && (!this.s.isFlag(com.wiris.e1_2.vY2) || this.s.isFlag(com.wiris.e1_2.va2));
	},
	getWidths: function(str, v73) {
		var vZA = new Array();
		var vaA = this.s.isFlag(com.wiris.e1_2.vc2);
		var vbA = this.v5A.vJA(this.v2A, this.s, str, !vaA);
		var vcA = null;
		var sub;
		if (vaA) {
			vcA = this.vTA(vbA);
			sub = this.v5A.vSA(vbA - 1);
		} else sub = this.v5A.vSA(0);
		var vdA = 0;
		var veA = v73 && this.vWA(vaA, com.wiris.e1_E.v99(sub, !vaA));
		var width;
		if (veA == vaA) width = 0;
		else if (vaA) width = this.vb9(this.v5A.vLA(vbA - 1), sub)[0];
		else width = this.vb9(this.v5A.vLA(0), sub)[0]; if (vaA) width += vcA[vbA - 1];
		vZA.push(width);
		var i = 0;
		while (i < vbA) {
			var vfA = 0;
			var vgA;
			var vhA = null;
			var viA = null;
			if (vaA) {
				vgA = vbA - i - 1;
				vfA = vcA[vgA];
				if (vgA > 0) {
					vhA = this.v5A.vSA(vgA - 1);
					viA = this.v5A.vLA(vgA - 1);
				}
			} else {
				vgA = i;
				if (vgA < vbA - 1) {
					vhA = this.v5A.vSA(vgA + 1);
					viA = this.v5A.vLA(vgA + 1);
				}
			};
			var vKA = this.v5A.vLA(vgA);
			sub = this.v5A.vSA(vgA);
			var vjA = sub.length;
			var vkA = this.vb9(vKA, sub)[0];
			var vlA = com.wiris.e1_E.v99(sub, !vaA);
			var vH4 = 0;
			while (vH4 < vjA) {
				if ((vH4 != vjA - 1 || v73) && this.vWA(vaA, vlA)) {
					var vmA;
					if (vaA) vmA = HxOverrides.substr(sub, 0, vH4 + 1);
					else vmA = HxOverrides.substr(sub, vH4 + 1, vjA - vH4 - 1);
					width = this.vb9(vKA, vmA)[0];
				} else if (v73 && vH4 == vjA - 1 && vhA != null && this.vWA(vaA, com.wiris.e1_E.v99(vhA, !vaA))) {
					if (vaA) width = -this.vb9(viA, vhA)[0];
					else width = vkA + this.vb9(viA, vhA)[0];
				} else {
					var vmA;
					if (vaA) vmA = HxOverrides.substr(sub, vH4 + 1, vjA - vH4 - 1);
					else vmA = HxOverrides.substr(sub, 0, vH4 + 1);
					width = this.vb9(vKA, vmA)[0];
				}; if (vaA) vZA.push(vfA + width);
				else vZA.push(vdA + width);
				++vH4;
			};
			vdA += vkA;
			++i;
		};
		return vZA;
	},
	getWidth: function(str) {
		return this.getMetrics(str)[0];
	},
	getStyle: function() {
		return this.s;
	},
	getLength: function(x) {
		return Math.floor(Math.round(this.getHeight("x") * x));
	},
	getMiddle: function() {
		return this.getLength(0.3);
	},
	getHeight: function(str) {
		return this.getMetrics(str)[1];
	},
	getColor: function() {
		return this.s.getColor();
	},
	getBaseline: function(str) {
		return this.getMetrics(str)[2];
	},
	endTranslate: function(x, vQ1, width, height) {
		this.v4A.pop();
		this.v3A.pop();
		this.v2A.endTranslate(x, vQ1, width, height);
	},
	drawLine: function(vnA, voA, vpA, vqA) {
		if (this.s.isFlag(com.wiris.e1_2.vc2)) {
			var vrA = this.v3A[this.v3A.length - 1];
			vnA = vrA - vnA - 1;
			vpA = vrA - vpA - 1;
		};
		this.v2A.drawLine(vnA, voA, vpA, vqA);
	},
	drawVerticalLineWithType: function(id, x, vQ1, h, type) {
		if (this.s.isFlag(com.wiris.e1_2.vc2)) x = this.v3A[this.v3A.length - 1] - x - 1;
		this.v2A.drawVerticalLineWithType(id, x, vQ1, h, type);
	},
	drawHorizontalLineWithType: function(id, x, vQ1, vP9, type) {
		if (this.s.isFlag(com.wiris.e1_2.vc2)) x = this.v3A[this.v3A.length - 1] - x - vP9;
		this.v2A.drawHorizontalLineWithType(id, x, vQ1, vP9, type);
	},
	drawVerticalLine: function(id, x, vQ1, h) {
		if (this.s.isFlag(com.wiris.e1_2.vc2)) x = this.v3A[this.v3A.length - 1] - x - 1;
		this.v2A.drawVerticalLine(id, x, vQ1, h);
	},
	drawHorizontalLine: function(id, x, vQ1, vP9) {
		if (this.s.isFlag(com.wiris.e1_2.vc2)) x = this.v3A[this.v3A.length - 1] - x - vP9;
		this.v2A.drawHorizontalLine(id, x, vQ1, vP9);
	},
	vsA: function(vtA, vuA) {
		if (vuA != null) {
			vtA[0] += Math.floor((vuA[0] + vuA[2]) * this.s.getFontSize());
			vtA[1] += Math.floor((vuA[1] + vuA[3]) * this.s.getFontSize());
			vtA[2] += Math.floor(vuA[1] * this.s.getFontSize());
		};
		return vtA;
	},
	vb9: function(vKA, str) {
		if (this.s.isFlag(com.wiris.e1_2.vY2) && com.wiris.editor.formula.WCharacter.v59(str)) {
			var vvA = this.s;
			var vQA = com.wiris.e1_2.vF2(this.s);
			vQA.vy2(com.wiris.e1_2.vY2, false);
			this.setStyle(vQA);
			var m = this.vb9(vKA, str);
			this.setStyle(vvA);
			return m;
		};
		if (vKA != null && (vKA == "drawFont" || vKA == "rootFont")) {
			var vwA = new com.wiris.e1_A();
			return vwA.getMetrics(this, str);
		};
		var vtA = this.v2A.getMetrics(vKA, str);
		var vxA = [vtA[0], vtA[1], vtA[2]];
		var vyA = com.wiris.e1_B.v9A.get(vKA.toLowerCase());
		if (vyA != null) {
			vxA = this.vsA(vxA, vyA.get(str));
			vxA = this.vsA(vxA, vyA.get("all"));
		};
		return vxA;
	},
	getMetrics: function(t) {
		var m = null;
		var vzA = null;
		var n = this.v5A.vJA(this.v2A, this.s, t, !this.s.isFlag(com.wiris.e1_2.vc2));
		var i;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			var sub = this.v5A.vSA(vW9);
			var vKA = this.v5A.vLA(vW9);
			if (this.v7A.exists(vKA)) vKA = this.v7A.get(vKA);
			vzA = this.vb9(vKA, sub);
			m = com.wiris.e1_E.v0B(m, vzA);
		};
		return m;
	},
	v1B: function(position, vuA) {
		if (vuA != null) position[0] += Math.floor(vuA[0] * this.s.getFontSize());
		return position;
	},
	v2B: function(id, vKA, str, x, vQ1, b, Atype) {
		if (vKA != null && (vKA == "drawFont" || vKA == "rootFont")) {
			var vwA = new com.wiris.e1_A();
			vwA.v84(this.s.isFlag(com.wiris.e1_2.vc2));
			vwA.drawText(this, id, str, x, vQ1, b);
		} else if (vKA != null && vKA == "negationFont") {
			var v3B = com.wiris.editor.formula.WCharacter.vz8(HxOverrides.cca(str, 0));
			var v4B = com.wiris.e1_61.v12(v3B);
			this.v2A.drawText(id, "math1", v4B, x, vQ1, b);
			var vtA = this.getMetrics(v4B);
			var v5B = Math.floor(4 * vtA[0] / 10);
			var v6B = Math.floor(vtA[2] / 6);
			if (this.s.isFlag(com.wiris.e1_2.vc2)) this.v2A.drawLine(x + v5B, vQ1 + v6B, x + vtA[0] - v5B, vQ1 + vtA[2] + v6B);
			else this.v2A.drawLine(x + vtA[0] - v5B, vQ1 + v6B, x + v5B, vQ1 + vtA[2] + v6B);
		} else {
			if (this.v7A.exists(vKA)) vKA = this.v7A.get(vKA);
			var position = [x, vQ1, b];
			var vyA = com.wiris.e1_B.v9A.get(vKA.toLowerCase());
			if (vyA != null) {
				position = this.v1B(position, vyA.get(str));
				position = this.v1B(position, vyA.get("all"));
			};
			this.v2A.drawText(id, vKA, str, position[0], position[1], position[2], Atype);
		}
	},
	drawText2: function(id, t, x, vQ1, b, Atype) {
		if (this.s.isFlag(com.wiris.e1_2.vY2) && com.wiris.editor.formula.WCharacter.v59(t)) {
			var vvA = this.s;
			var vQA = com.wiris.e1_2.vF2(this.s);
			vQA.vy2(com.wiris.e1_2.vY2, false);
			this.setStyle(vQA);
			this.drawText2(id, t, x, vQ1, b);
			this.setStyle(vvA);
			return;
		};
		var rtl = false;
		if (this.s.isFlag(com.wiris.e1_2.vc2)) {
			rtl = true;
			x = this.v3A[this.v3A.length - 1] - x;
		};
		var n = this.v5A.vJA(this.v2A, this.s, t, !rtl);
		var i;
		var v7B = new Array();
		var v8B = new Array();
		var vZA = new Array();
		i = 0;
		while (i < n) {
			var sub = this.v5A.vSA(i);
			var vKA = this.v5A.vLA(i);
			var width = this.vb9(vKA, sub)[0];
			v7B.push(sub);
			v8B.push(vKA);
			vZA.push(width);
			if (rtl) x -= width;
			++i;
		};
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			this.v2B(id, v8B[vW9], v7B[vW9], x, vQ1, b, Atype);
			if (vW9 + 1 < n) x += vZA[vW9];
		}
	},
	drawText: function(id, t, x, vQ1, b, Atype) {
		this.drawText2(id, t, x, vQ1, b, Atype);
	},
	beginTranslate: function(x, vQ1, width, height) {
		this.v2A.beginTranslate(x, vQ1, width, height);
		this.v3A.push(width);
		this.v4A.push(this.s.isFlag(com.wiris.e1_2.vc2) ? 1 : 0);
	},
	v8A: function(fontFamily, v9B) {
		if (this.v7A.exists(fontFamily)) return;
		if (this.v2A.fontExists(v9B)) this.v7A.set(fontFamily, v9B);
	},
	vAB: function(vs1, vBB, vCB) {
		if (vBB != null) {
			var vs4 = vBB.split(",");
			if (vs4.length != 4) throw "Unknown dimensions format \"" + vBB + "\".";
			if (vCB) {
				vs1[0] = vs1[0] + Std.parseFloat(StringTools.trim(vs4[0]));
				vs1[1] = vs1[1] + Std.parseFloat(StringTools.trim(vs4[1]));
				vs1[2] = vs1[2] + Std.parseFloat(StringTools.trim(vs4[2]));
				vs1[3] = vs1[3] + Std.parseFloat(StringTools.trim(vs4[3]));
			} else {
				vs1[4] = Std.parseFloat(StringTools.trim(vs4[0]));
				vs1[5] = Std.parseFloat(StringTools.trim(vs4[1]));
				vs1[6] = Std.parseFloat(StringTools.trim(vs4[2]));
				vs1[7] = Std.parseFloat(StringTools.trim(vs4[3]));
			}
		}
	},
	vDB: function(vJ1, node, vyA) {
		var vEB = true;
		var selector = com.wiris.util.xml.WXmlUtils.getAttribute(node, "selector");
		if (selector != null) vEB = this.v2A.selects(selector);
		if (vEB) {
			var vs1 = vyA.get(vJ1);
			if (vs1 == null) {
				vs1 = new Array();
				var k = 0;
				while (k < 8) {
					vs1[k] = 0.0;
					++k;
				};
				vyA.set(vJ1, vs1);
			};
			var margin = com.wiris.util.xml.WXmlUtils.getAttribute(node, "margin");
			this.vAB(vs1, margin, true);
			var fitbox = com.wiris.util.xml.WXmlUtils.getAttribute(node, "fitbox");
			this.vAB(vs1, fitbox, false);
		}
	},
	vCA: function(vFB, v2A) {
		var i = HxOverrides.iter(com.wiris.util.xml.WXmlUtils.getElements(com.wiris.util.xml.WXmlUtils.vN3(vFB).firstChild()));
		while (i.hasNext()) {
			var vGB = i.next();
			var vKA = com.wiris.util.xml.WXmlUtils.getAttribute(vGB, "name");
			if (vKA == null) throw "Attribute \"name\" is missing on font node.";
			var vyA = new HaxeHash();
			com.wiris.e1_B.v9A.set(vKA.toLowerCase(), vyA);
			var vH4 = HxOverrides.iter(com.wiris.util.xml.WXmlUtils.getElements(vGB));
			while (vH4.hasNext()) {
				var node = vH4.next();
				if (node.getNodeName() == "glyph") {
					var vHB = com.wiris.util.xml.WXmlUtils.getAttribute(node, "char");
					if (vHB != null) {
						if (vHB.length != 1) throw "Attribute \"char\" with value \"" + vHB + "\" must contain one and only one character.";
						this.vDB(vHB, node, vyA);
					} else {
						var vIB = com.wiris.util.xml.WXmlUtils.getAttribute(node, "code");
						if (vIB != null) {
							if (vIB == "*") this.vDB("all", node, vyA);
							else {
								var charCode = Std.parseInt(vIB);
								if (charCode < 0) throw "Unknown char code " + charCode + ".";
								this.vDB(com.wiris.e1_61.v12(charCode), node, vyA);
							}
						} else {
							var vJB = com.wiris.util.xml.WXmlUtils.getAttribute(node, "from");
							var vKB = com.wiris.util.xml.WXmlUtils.getAttribute(node, "to");
							if (vJB == null || vKB == null) throw "Expected attribute \"char\", \"code\" or \"from\" and \"to\" is missing on a glyph node.";
							var from = Std.parseInt(vJB);
							if (from < 0) throw "Unknown char code " + from + ".";
							var to = Std.parseInt(vKB);
							if (to < 0) throw "Unknown char code " + to + ".";
							while (from <= to) {
								this.vDB(com.wiris.e1_61.v12(from), node, vyA);
								++from;
							}
						}
					}
				} else if (node.getNodeName() == "property") {
					var name = com.wiris.util.xml.WXmlUtils.getAttribute(node, "name");
					if (name == null) throw "Expected attribute \"name\" is missing on a property node.";
					var value = com.wiris.util.xml.WXmlUtils.getAttribute(node, "value");
					if (value == null) throw "Expected attribute \"value\" is missing on a property node.";
					var vEB = true;
					var selector = com.wiris.util.xml.WXmlUtils.getAttribute(node, "selector");
					if (selector != null) vEB = v2A.selects(selector);
					if (vEB) {
						if (name == "xHeight") com.wiris.e1_B.vAA.set(vKA.toLowerCase(), value);
						else if (name == "italicExtraSpace") com.wiris.e1_B.italicExtraSpace.set(vKA.toLowerCase(), value);
					}
				} else throw "Unknown node \"" + node.getNodeName() + "\".";
			}
		}
	},
	styles: null,
	v4A: null,
	v3A: null,
	v7A: null,
	zoom: null,
	s: null,
	v5A: null,
	v2A: null,
	__class__: com.wiris.e1_B
};