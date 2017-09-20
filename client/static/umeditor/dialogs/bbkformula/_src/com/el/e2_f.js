com.wiris.e1_f = v91["com.wiris.e1_f"] = function() {
	com.wiris.e1_O.call(this);
	this.v4Q(com.wiris.e1_f.vVE);
};
com.wiris.e1_f.__name__ = ["com", "wiris", "e1_f"];
com.wiris.e1_f.v5Q = function(text) {
	var vKE = new com.wiris.e1_f();
	vKE.vfE(text);
	return vKE;
};
com.wiris.e1_f.__super__ = com.wiris.e1_O;
com.wiris.e1_f.prototype = vB1(com.wiris.e1_O.prototype, {
	vRC: function() {
		return this.v6Q;
	},
	v7Q: function() {
		return this.type == com.wiris.e1_f.vNE && this.accent;
	},
	vK8: function() {
		return true;
	},
	vSK: function() {
		return this.type == com.wiris.e1_f.vNE && this.v6Q.vmG;
	},
	v4Q: function(type) {
		this.type = type;
		this.vmF = type == com.wiris.e1_f.vXE;
	},
	vVB: function() {
		return this.text.length == 1 && HxOverrides.cca(this.text, 0) == 10;
	},
	v99: function() {
		if (this.text == null) return false;
		var n = this.text.length;
		var i;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			if (com.wiris.editor.formula.WCharacter.v99(HxOverrides.cca(this.text, vW9))) return true;
		};
		return false;
	},
	vOE: function() {
		return this.type == com.wiris.e1_f.vNE && this.v6Q.largeop;
	},
	v8Q: function(i) {
		if (this.vn7 + i < this.getParent().vN8() && this.vn7 + i >= 0) return this.getParent().getChild(this.vn7 + 1);
		return null;
	},
	v9Q: function(v1A, vvG) {
		var s = vvG / 18.0;
		var em = v1A.getWidth("m");
		return Math.floor(Math.round(s * em * 0.5));
	},
	vLE: function() {
		if (this.text == null) return 0;
		return this.text.length;
	},
	vM8: function() {
		return this.text;
	},
	vAQ: function(vEA, vnA) {
		if (this.text.length == 0) return "";
		return HxOverrides.substr(this.text, vEA + 1, vnA - vEA);
	},
	vlN: function(vEA) {
		if (this.text.length == 0) return "";
		var n = this.text.length;
		return n > vEA + 1 ? HxOverrides.substr(this.text, vEA + 1, n - (vEA + 1)) : "";
	},
	vkN: function(vEA) {
		if (this.text.length == 0) return "";
		return HxOverrides.substr(this.text, 0, vEA + 1);
	},
	vQK: function(v1A, vRK) {
		if (this.type == com.wiris.e1_f.vNE && this.text.length > 0) {
			if (this.v6Q.largeop) {
				if (com.wiris.editor.formula.WCharacter.vk8(HxOverrides.cca(this.text, 0))) {
					if (vRK == com.wiris.e1_M.vmP) return -v1A.getLength(0.3);
					if (vRK == com.wiris.e1_M.voP) return v1A.getLength(0.1);
					if (vRK == com.wiris.e1_M.vbP) return v1A.getLength(0.3);
				} else {
					if (vRK == com.wiris.e1_M.vBQ) return -v1A.getLength(0.15);
					if (vRK == com.wiris.e1_M.vCQ) return v1A.getLength(0.1);
					var c = HxOverrides.cca(this.text, this.text.length - 1);
					if (!com.wiris.editor.formula.WCharacter.ve8(c) && !com.wiris.editor.formula.WCharacter.vf8(c)) {
						if (vRK == com.wiris.e1_M.vmP) return -v1A.getLength(0.1);
						if (vRK == com.wiris.e1_M.voP) return -v1A.getLength(0.1);
					}
				}
			} else if (this.vDQ.accent) {
				if (vRK == com.wiris.e1_M.vCQ) return v1A.getLength(0.35);
				if (vRK == com.wiris.e1_M.vBQ) return -v1A.getLength(0.2);
			} else if (vRK == com.wiris.e1_M.vBQ) return -v1A.getLength(0.1);
		} else if (this.type == com.wiris.e1_f.vVE && this.text.length > 0) {
			var vEQ = true;
			if (vRK == com.wiris.e1_M.vCQ) {
				var i;
				var vd1 = 0,
					vc1 = this.text.length;
				while (vd1 < vc1) {
					var vW9 = vd1++;
					var c = HxOverrides.cca(this.text, vW9);
					vEQ = vEQ && !com.wiris.editor.formula.WCharacter.vA9(c);
				};
				return v1A.getLength(vEQ ? 0.3 : 0.1);
			} else if (vRK == com.wiris.e1_M.vBQ) {
				var i;
				var vd1 = 0,
					vc1 = this.text.length;
				while (vd1 < vc1) {
					var vW9 = vd1++;
					var c = HxOverrides.cca(this.text, vW9);
					vEQ = vEQ && !com.wiris.editor.formula.WCharacter.vC9(c);
				};
				return vEQ ? 0 : v1A.getLength(0.1);
			}
		} else if (this.type == com.wiris.e1_f.vWE && this.text.length > 0) {
			if (vRK == com.wiris.e1_M.vCQ) return v1A.getLength(0.1);
			else if (vRK == com.wiris.e1_M.vBQ) return -v1A.getLength(0.1);
		};
		return 0;
	},
	vIC: function() {
		var t;
		t = new com.wiris.e1_f();
		this.veK(t);
		return t;
	},
	veK: function(b) {
		com.wiris.e1_O.prototype.veK.call(this, b);
	},
	vwB: function(s) {
		s.vDI();
		this.type = s.vFI(this, "mtext", this.type, com.wiris.e1_f.vXE);
		this.type = s.vFI(this, "mi", this.type, com.wiris.e1_f.vVE);
		this.type = s.vFI(this, "mn", this.type, com.wiris.e1_f.vWE);
		this.type = s.vFI(this, "mo", this.type, com.wiris.e1_f.vNE);
		this.type = s.vFI(this, "span", this.type, com.wiris.e1_f.vuN);
		s.vBI(this);
		this.type = s.vKI("#type", this.type, com.wiris.e1_f.vVE);
		this.v4Q(this.type);
		if (this.type == com.wiris.e1_f.vXE) this.styles.vy2(com.wiris.e1_2.va2, true);
		this.vFQ(s.vsH(this.text, ""));
		if (this.type == com.wiris.e1_f.vXE) s.vnH("dir", this.v99() && !this.styles.isFlag(com.wiris.e1_2.vc2) ? "rtl" : "", "");
		if (this.type == com.wiris.e1_f.vNE) {
			this.v6Q.stretchy = s.vMI("stretchy", this.v6Q.stretchy, this.vDQ.stretchy);
			this.v6Q.largeop = s.vMI("largeop", this.v6Q.largeop, this.vDQ.largeop);
			this.v6Q.accent = s.vMI("accent", this.v6Q.accent, this.vDQ.accent);
			this.v6Q.vuG(s.vnH("lspace", this.v6Q.vBH(), this.vDQ.vBH()));
			this.v6Q.vsG(s.vnH("rspace", this.v6Q.vAH(), this.vDQ.vAH()));
		};
		s.v5I();
	},
	vGQ: function() {
		if (this.vn7 == 0 || this.getParent() == null) return com.wiris.e1_G.vHQ;
		if (this.vn7 == this.getParent().vN8() - 1) return com.wiris.e1_G.vIQ;
		return com.wiris.e1_G.vJQ;
	},
	vKQ: function() {
		var vLQ = new com.wiris.e1_H().getAttributes(this.text, this.vGQ());
		var vMQ = new com.wiris.e1_G(vLQ);
		if (this.vDQ != null) vMQ.merge(this.vDQ, this.v6Q);
		this.vDQ = vLQ;
		this.v6Q = vMQ;
	},
	vFQ: function(t) {
		if (t != null) {
			var i = 0;
			var remove = false;
			var vNQ = "";
			while (i < t.length) {
				var c = HxOverrides.substr(t, i, 1);
				if (!remove) {
					vNQ += c;
					if (c == " ") remove = true;
				} else if (!(c == " ")) {
					vNQ += c;
					remove = false;
				};
				++i;
			};
			if (StringTools.startsWith(vNQ, " ")) vNQ = HxOverrides.substr(vNQ, 1, vNQ.length - 1);
			if (StringTools.endsWith(vNQ, " ")) vNQ = HxOverrides.substr(vNQ, 0, vNQ.length - 1);
			t = vNQ;
		};
		this.text = t;
		if (this.type == com.wiris.e1_f.vNE) this.vKQ();
	},
	vOQ: function(x) {
		if (this.vZA == null) {
			var k;
			k = 33;
		};
		if (0 > x || x > this.vZA.length) {
			var k;
			k = 33;
		}
	},
	getWidth: function(i, v73) {
		if (i < 0) i += this.vZA.length;
		this.vOQ(i);
		var vP9 = v73 ? this.vPQ[i] : this.vZA[i];
		return vP9;
	},
	vQQ: function(vEA, vnA, vRQ, vSQ) {
		var vTQ = this.getWidth(vEA, vRQ);
		var vUQ = this.getWidth(vnA, vSQ);
		if (vTQ > vUQ) {
			var k = vTQ;
			vTQ = vUQ;
			vUQ = k;
		};
		if (vTQ == vUQ) vUQ = vUQ + 1;
		var r = com.wiris.e1_7.vD7(vTQ, 0, vUQ - vTQ, this.height);
		return r;
	},
	getSelectionRectangles: function(vEA, vnA, v73) {
		++vEA;
		++vnA;
		if (vEA > vnA) {
			var x = vnA;
			vnA = vEA;
			vEA = x;
		};
		var va4 = new Array();
		var i = vEA;
		var vVQ = com.wiris.editor.formula.WCharacter.v99(HxOverrides.cca(this.text, i));
		var start = i;
		while (i < vnA) {
			var v99 = com.wiris.editor.formula.WCharacter.v99(HxOverrides.cca(this.text, i));
			if (vVQ != v99) {
				va4.push(this.vQQ(start, i, false, false));
				vVQ = v99;
				start = i;
			};
			++i;
		};
		if (i == start && va4.length == 0) va4.push(this.vQQ(start, i, v73, v73));
		else if (i != start) {
			if (vVQ == this.styles.isFlag(com.wiris.e1_2.vc2)) va4.push(this.vQQ(start, i, false, false));
			else va4.push(this.vQQ(start, i, true, true));
		};
		return va4;
	},
	vrK: function(vEA) {
		var vTQ = this.getWidth(vEA + 1, false);
		return com.wiris.e1_6.vC7(vTQ, this.baseline);
	},
	vSF: function(x, selection) {
		return x >= 0 && x < this.text.length - 1;
	},
	vg3: function(vEA, vnA, left, right) {
		return com.wiris.e1_g.v1O(this, vEA, vnA, left, right);
	},
	vmK: function() {
		return this.text.length - 1;
	},
	vfE: function(t) {
		this.vWC();
		if (t.length > 0) {
			var c = HxOverrides.cca(t, 0);
			if (this.type == com.wiris.e1_f.vNE && this.v6Q.largeop) this.v4Q(com.wiris.e1_f.vNE);
			else if (this.type != com.wiris.e1_f.vXE) {
				if (com.wiris.editor.formula.WCharacter.ve8(c)) this.v4Q(com.wiris.e1_f.vWE);
				else if (com.wiris.editor.formula.WCharacter.vf8(c)) this.v4Q(com.wiris.e1_f.vVE);
				else this.v4Q(com.wiris.e1_f.vNE);
			}
		} else this.v4Q(com.wiris.e1_f.vVE);
		this.vFQ(t);
		this.v3D();
	},
	vuF: function() {
		com.wiris.e1_O.prototype.vuF.call(this);
		if (this.styles.isFlag(com.wiris.e1_2.va2)) this.v4Q(com.wiris.e1_f.vXE);
		else if (this.type == com.wiris.e1_f.vXE) this.v4Q(com.wiris.e1_f.vVE);
	},
	vEG: function(v1A, mode) {
		var vWQ = this.baseline;

		// if (this.text == 'undefined') ;
		if (this.type == com.wiris.e1_f.vNE && this.v6Q.largeop) this.baseline += v1A.getLength(0.1);
		if (this.text.length == 0) {
			if (mode == com.wiris.editor.formula.FormulaModel.vy3 || mode == com.wiris.editor.formula.FormulaModel.vx3) com.wiris.editor.formula.box.BoxUtils.vDG(v1A, this, 0, v1A.getLength(0.1), 0, 0, true);
		} else {
			var x = this.type == com.wiris.e1_f.vNE && !this.v6Q.largeop && !this.vXQ && !this.accent ? this.v9Q(v1A, this.v6Q.lspace) : 0;
			if (this.type == com.wiris.e1_f.vNE && this.accent) {
				if (com.wiris.editor.formula.WCharacter.vG9(HxOverrides.cca(this.text, 0))) this.baseline += Math.floor(Math.round(0.333203125 * v1A.getWidth("m")));
			};
			if (this.type == com.wiris.e1_f.vNE && this.stretchy) {
				var v1M = new com.wiris.e1_K();
				var vYQ = this.width;
				if (!this.vXQ) vYQ += -this.v9Q(v1A, this.v6Q.lspace) - this.v9Q(v1A, this.v6Q.rspace);
				v1M.vy9(v1A, HxOverrides.cca(this.text, 0), x, 0, this.baseline, vYQ, this.height - this.vZQ);
			} else {
				var v9B = this.text;
				if (this.type == com.wiris.e1_f.vXE) v9B = StringTools.replace(v9B, " ", com.wiris.e1_61.v12(160));
				v1A.drawText2(0, v9B, x, 0, this.baseline);
			}
		};
		this.baseline = vWQ;
	},
	vkK: function(v1A) {
		this.vEG(v1A, com.wiris.editor.formula.FormulaModel.vw3);
	},
	vaQ: function(vTB, parent) {
		while (vTB != parent) {
			vTB.v2G = true;
			vTB = vTB.getParent();
		}
	},
	v7G: function(v1A) {
		var v9B = this.text;
		this.vZQ = v1A.getDefaultStyles().vLB("accent-gap", 0, v1A);
		if (this.type == com.wiris.e1_f.vXE) v9B = StringTools.replace(v9B, " ", com.wiris.e1_61.v12(160));
		this.width = v1A.getWidth(v9B);
		this.height = v1A.getHeight(v9B);
		this.baseline = v1A.getBaseline(v9B);
		if (this.type == com.wiris.e1_f.vNE) {
			if (this.getParent().vED) {
				if (this.v6Q.form != this.vGQ()) this.vKQ();
			} else this.v2G = true; if (this.v6Q.largeop) {
				if (this.width == 0) {
					this.width = v1A.getLength(0.5);
					this.height = v1A.getLength(1.0);
					this.baseline = v1A.getLength(0.85);
				};
				this.baseline -= v1A.getLength(0.1);
			};
			this.vXQ = false;
			var p = this.getParent();
			var vbQ = p.vWK(com.wiris.e1_M.vYK, this.vn7);
			var vcQ = p.vWK(com.wiris.e1_M.vXK, this.vn7);
			this.stretchy = this.v6Q.stretchy && (vbQ != this || vcQ != this);
			if (this.stretchy) {
				var v1M = new com.wiris.e1_K();
				var c = HxOverrides.cca(v9B, 0);
				if (v1M.vLJ(c, com.wiris.e1_K.vdQ)) {
					if (vbQ.vED) {
						this.height = p.vUK(com.wiris.e1_M.vYK, this.vn7);
						this.height = v1M.vq9(v1A, this.width, this.height, c, com.wiris.e1_K.vkJ);
						this.baseline = p.vUK(com.wiris.e1_M.v65, this.vn7);
					} else this.vaQ(this, vbQ);
				};
				if (v1M.vLJ(c, com.wiris.e1_K.vMJ)) {
					this.vXQ = true;
					if (vcQ.vED) {
						this.width = p.vUK(com.wiris.e1_M.vXK, this.vn7);
						var veQ = this.accent ? com.wiris.e1_K.vkJ : com.wiris.e1_K.vlJ;
						this.width = v1M.vo9(v1A, this.width, this.height, c, veQ);
					} else this.vaQ(this, vcQ);
				}
			};
			this.accent = this.v6Q.accent && this.getParent().vTK(this.vn7);
			if (this.accent) {
				this.baseline = Math.floor(Math.round(0.25 * v1A.getWidth("m")));
				this.height = Math.floor(Math.round(0.4166015625 * v1A.getWidth("m")));
				this.height += this.vZQ;
			};
			if (!this.v6Q.largeop && !this.vXQ && !this.accent) {
				this.width += this.v9Q(v1A, this.v6Q.lspace);
				this.width += this.v9Q(v1A, this.v6Q.rspace);
			}
		};
		if (this.v08.isFlag(com.wiris.e1_2.vY2)) {
			if (this.getParent().vED) {
				var r = this.v8Q(1);
				if (r == null || !r.v08.isFlag(com.wiris.e1_2.vY2)) this.width += v1A.getLength(v1A.getItalicExtraSpace());
			} else this.v2G = true;
		};
		this.vZA = v1A.getWidths(v9B, false);
		this.vPQ = v1A.getWidths(v9B, true);
	},
	vZQ: null,
	stretchy: null,
	accent: null,
	vXQ: null,
	vDQ: null,
	v6Q: null,
	type: null,
	vPQ: null,
	vZA: null,
	text: null,
	__class__: com.wiris.e1_f
});