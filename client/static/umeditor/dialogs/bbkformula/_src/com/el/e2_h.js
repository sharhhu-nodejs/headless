com.wiris.e1_h = v91["com.wiris.e1_h"] = function() {
	com.wiris.e1_O.call(this);
	this.maxWidth = 100000000;
	this.type = com.wiris.e1_h.vfQ;
	this.padding = new Array();
};
com.wiris.e1_h.__name__ = ["com", "wiris", "e1_h"];
com.wiris.e1_h.v2O = function(b) {
	var t;
	t = new com.wiris.e1_h();
	t.vpC(b);
	return t;
};
com.wiris.e1_h.__super__ = com.wiris.e1_O;
com.wiris.e1_h.prototype = vB1(com.wiris.e1_O.prototype, {
	isMultiLine: function() {
		var i = this.vN8() - 1;
		while (i >= 0) {
			var vTB = this.getChild(i);
			if (vTB.vK8()) {
				var vUB = js.Boot.vX3(vTB, com.wiris.e1_f);
				if (vUB.vVB()) return true;
			};
			--i;
		};
		return false;
	},
	vgQ: function(box) {
		var b = false;
		if (box.vK8()) {
			var vUB;
			vUB = js.Boot.vX3(box, com.wiris.e1_f);
			if (vUB.type == com.wiris.e1_f.vNE) {
				b = vUB.vLE() == 1 && vUB.vM8() == "'";
				b = b || vUB.vLE() == 2 && vUB.vM8() == "''";
				b = b || vUB.vLE() == 3 && vUB.vM8() == "'''";
				b = b || vUB.vLE() == 1 && HxOverrides.cca(vUB.vM8(), 0) == 8245;
			}
		};
		return b;
	},
	vhQ: function(viQ, vjQ, vQO, vkQ, vSO) {
		var vTO = 0;
		var rtl = this.styles.isFlag(com.wiris.e1_2.vc2);
		if (!rtl && (this.vlQ() || this.vmQ()) || rtl && (this.vnQ() || this.voQ())) {
			if (vQO[0] != -1) {
				if (vkQ[viQ] != -1) vTO = com.wiris.common.WInteger.max(vSO, vQO[0]) - vkQ[viQ];
				else vTO = com.wiris.common.WInteger.max(vSO, vQO[0]) - vjQ;
				this.vpQ = com.wiris.common.WInteger.max(vSO, vQO[0]);
			} else {
				this.vpQ = this.width;
				vTO = this.width - vjQ;
			}
		} else if (this.vqQ()) {
			if (vQO[0] != -1) {
				var vUO = Math.floor(Math.round(vSO / 2.0));
				if (vkQ[viQ] != -1) vTO = com.wiris.common.WInteger.max(vUO, vQO[0]) - vkQ[viQ];
				else {
					var a = Math.floor(Math.round(vQO[0] - vjQ / 2.0));
					var b = Math.floor(Math.round(vUO - vjQ / 2.0));
					if (a > b) this.vpQ = vQO[0];
					else this.vpQ = vUO;
					vTO = com.wiris.common.WInteger.max(a, b);
				}
			} else {
				this.vpQ = Math.floor(Math.round(this.width / 2.0));
				vTO = Math.floor(Math.round((this.width - vjQ) / 2.0));
			}
		} else if (!rtl && (this.vnQ() || this.voQ() || this.vrQ()) || rtl && (this.vlQ() || this.vmQ() || this.vrQ())) {
			if (vQO[0] != -1) {
				if (vkQ[viQ] != -1) vTO = vQO[0] - vkQ[viQ];
				else vTO = vQO[0];
				this.vpQ = vQO[0];
			} else {
				this.vpQ = 0;
				vTO = 0;
			}
		};
		return vTO;
	},
	vsQ: function(vQO, vkQ, viQ, vjQ) {
		if (vQO[0] == -1) this.maxWidth = 100000000;
		if (vjQ > vQO[0]) {
			vQO[0] = vjQ;
			vQO[1] = viQ;
		};
		vkQ[viQ] = com.wiris.common.WInteger.max(vkQ[viQ], vjQ);
	},
	vtQ: function(vQO, vkQ) {
		var c;
		var vuQ = false;
		var viQ = 0;
		var vjQ = 0;
		vQO[0] = -1;
		vQO[1] = -1;
		vkQ.push(-1);
		if (this.vmQ() || this.voQ()) this.maxWidth = 100000000;
		var vd1 = 0,
			vc1 = this.vN8();
		while (vd1 < vc1) {
			var v5N = vd1++;
			if (this.vVB(v5N)) {
				++viQ;
				vjQ = 0;
				vkQ.push(-1);
				vuQ = false;
			} else {
				if (this.vvQ(this.getChild(v5N))) {
					this.vsQ(vQO, vkQ, viQ, vjQ);
					vuQ = true;
					this.getChild(v5N).width = 0;
				} else if (this.vmQ() && this.vXO(this.getChild(v5N))) {
					if (!vuQ) this.vsQ(vQO, vkQ, viQ, vjQ);
				} else if (this.voQ() && this.vVO(this.getChild(v5N))) {
					if (!vuQ) this.vsQ(vQO, vkQ, viQ, vjQ);
				};
				vjQ += this.getChild(v5N).width;
			}
		}
	},
	vVO: function(box) {
		var b = false;
		if (box.vK8()) {
			var vUB;
			vUB = js.Boot.vX3(box, com.wiris.e1_f);
			b = vUB.type == com.wiris.e1_f.vNE && vUB.vLE() == 1 && com.wiris.e1_O.vWO.indexOf("@" + HxOverrides.cca(vUB.vM8(), 0) + "@") >= 0;
			if (b && this.padding[2] == 0) this.padding[2] = Math.floor(Math.round(box.width / 2.0));
		};
		return b;
	},
	vXO: function(box) {
		var b = false;
		if (box.vK8()) {
			var vUB;
			vUB = js.Boot.vX3(box, com.wiris.e1_f);
			b = vUB.type == com.wiris.e1_f.vNE && vUB.vM8() == ".";
			if (b && this.padding[1] == 0) this.padding[1] = Math.floor(Math.round(box.width / 2.0));
		};
		return b;
	},
	vvQ: function(box) {
		var b = false;
		if (box.vK8()) {
			var vUB;
			vUB = js.Boot.vX3(box, com.wiris.e1_f);
			b = vUB.type == com.wiris.e1_f.vNE && vUB.vLE() == 1 && HxOverrides.cca(vUB.vM8(), 0) == 57358;
			if (b && this.padding[0] == 0) this.padding[0] = Math.floor(Math.round(box.width / 2.0));
		};
		return b;
	},
	voQ: function() {
		return this.v08.getAlign() == com.wiris.e1_2.vq2;
	},
	vmQ: function() {
		return this.v08.getAlign() == com.wiris.e1_2.vp2;
	},
	vlQ: function() {
		return this.v08.getAlign() == com.wiris.e1_2.vm2;
	},
	vqQ: function() {
		return this.v08.getAlign() == com.wiris.e1_2.vo2;
	},
	vnQ: function() {
		return this.v08.getAlign() == com.wiris.e1_2.vn2;
	},
	vrQ: function() {
		return this.v08.getAlign() == com.wiris.e1_2.vB2;
	},
	vSK: function() {
		if (this.vN8() == 1) return this.getChild(0).vSK();
		else return false;
	},
	vRB: function() {
		return this.type == com.wiris.e1_h.vfQ || this.type == com.wiris.e1_h.vwQ;
	},
	vVB: function(position) {
		var b = this.getChild(position);
		if (b.vK8()) return (js.Boot.vX3(b, com.wiris.e1_f)).vVB();
		return false;
	},
	vTK: function(position) {
		if (this.vN8() == 1 && position == 0) return this.getParent().vTK(this.vn7);
		return com.wiris.e1_O.prototype.vTK.call(this, position);
	},
	vUK: function(vVK, position) {
		if (this.vN8() == 1 && position == 0) return this.getParent().vUK(vVK, this.vn7);
		return com.wiris.e1_O.prototype.vUK.call(this, vVK, position);
	},
	vWK: function(vVK, position) {
		if (this.vN8() == 1 && position == 0) {
			var b = this.getParent().vWK(vVK, this.vn7);
			if (b != this) return b;
		};
		return com.wiris.e1_O.prototype.vWK.call(this, vVK, position);
	},
	vQK: function(v1A, vxQ) {
		if (this.vN8() > 0) {
			if (vxQ == com.wiris.e1_M.voP || vxQ == com.wiris.e1_M.vgP || vxQ == com.wiris.e1_M.vmP || vxQ == com.wiris.e1_M.vbP) return this.getChild(this.vN8() - 1).vQK(v1A, vxQ);
			else if (vxQ == com.wiris.e1_M.vCQ) {
				var m = 1073741824;
				var i;
				var vd1 = 0,
					vc1 = this.vN8();
				while (vd1 < vc1) {
					var vW9 = vd1++;
					var offset = this.getChild(vW9).vQK(v1A, vxQ);
					if (offset < m) m = offset;
				};
				return m;
			} else if (vxQ == com.wiris.e1_M.vBQ) {
				var m = -1073741824;
				var i;
				var vd1 = 0,
					vc1 = this.vN8();
				while (vd1 < vc1) {
					var vW9 = vd1++;
					var offset = this.getChild(vW9).vQK(v1A, vxQ);
					if (offset > m) m = offset;
				};
				return m;
			}
		} else if (vxQ == com.wiris.e1_M.vCQ) return v1A.getLength(0.1);
		else if (vxQ == com.wiris.e1_M.vBQ) return -v1A.getLength(0.1);
		return 0;
	},
	vIC: function() {
		var vKE;
		vKE = new com.wiris.e1_h();
		vKE.type = this.type;
		this.veK(vKE);
		return vKE;
	},
	veK: function(b) {
		com.wiris.e1_O.prototype.veK.call(this, b);
	},
	vwB: function(s) {
		s.vDI();
		this.type = s.vFI(this, "mrow", this.type, com.wiris.e1_h.vfQ);
		this.type = s.vFI(this, "mphantom", this.type, com.wiris.e1_h.vyQ);
		this.type = s.vFI(this, "mstyle", this.type, com.wiris.e1_h.vwQ);
		s.vBI(this);
		s.v1I(this);
		s.v5I();
	},
	vyF: function() {
		var n = this.vN8();
		var i = 0;
		while (i < n) {
			var c = this.getChild(i);
			var vzQ = c.styles.isFlagMask(com.wiris.e1_2.vV2);
			if (c.vRB() && c.styles.getClassType() == "" && (n == 1 || !vzQ)) {
				if (vzQ) {
					this.styles.vz2(c.styles.getAlign());
					c.styles.vu2(com.wiris.e1_2.vV2);
				};
				this["delete"](i, 1);
				var m = c.vN8();
				var vH4;
				var vc1 = 0;
				while (vc1 < m) {
					var vdI = vc1++;
					var v0R = c.getChild(vdI);
					v0R.styles = com.wiris.e1_2.join(c.styles, v0R.styles);
					v0R.v3D();
					this.vVD(i + vdI, v0R);
				};
				n += -1 + m;
				i--;
			};
			i++;
		}
	},
	getSelectionRectangles: function(vEA, vnA, v73) {
		var voK = new Array();
		if (vEA == vnA && vEA == 0 && this.vUF == 1) {
			var v1R = Math.floor(Math.ceil(this.width / 2.0)) - 1;
			voK.push(com.wiris.e1_7.vD7(v1R, 2, 1, this.height - 3));
			return voK;
		};
		var v2R;
		var v3R;
		var vP9;
		var h;
		var vaA = this.styles.isFlag(com.wiris.e1_2.vc2);
		if (vEA == vnA) {
			if (vEA == 0 && vEA < this.vN8()) {
				var vG2 = this.getChild(vEA);
				v2R = vG2.x;
				if (vG2.vK8()) {
					var vKE = js.Boot.vX3(vG2, com.wiris.e1_f);
					v2R += vKE.getWidth(0, v73);
				} else if (vaA) v2R += vG2.width;
				v3R = vG2.vQ1;
				h = vG2.height;
			} else if (this.vVB(vEA - 1)) {
				if (vEA == this.vN8()) {
					if (vaA) v2R = this.width;
					else {
						v2R = this.vpQ;
						if (this.vmQ()) v2R += this.padding[1];
						else if (this.voQ()) v2R += this.padding[2];
					};
					v3R = this.height - this.v4R;
					h = this.v4R;
				} else {
					var vG2 = this.getChild(vEA);
					v2R = vG2.x;
					if (vG2.vK8()) {
						var vKE = js.Boot.vX3(vG2, com.wiris.e1_f);
						v2R += vKE.getWidth(0, v73);
					} else if (vaA) v2R += vG2.width;
					v3R = vG2.vQ1;
					h = vG2.height;
				}
			} else {
				var b = this.getChild(vEA - 1);
				if (vaA) {
					v2R = b.x;
					if (b.vK8()) {
						var vKE = js.Boot.vX3(b, com.wiris.e1_f);
						v2R += vKE.getWidth(-1, v73);
					}
				} else v2R = b.x + b.width; if (v73) {
					if (vEA < this.vN8()) {
						var vG2 = this.getChild(vEA);
						if (vG2.vK8()) {
							var vKE = js.Boot.vX3(vG2, com.wiris.e1_f);
							if (vaA != com.wiris.e1_E.v99(vKE.vM8(), !vaA)) {
								v2R += vKE.getWidth(0, v73);
								if (vaA) v2R -= vKE.width;
							}
						}
					}
				};
				if (b.vK8()) {
					var vKE = js.Boot.vX3(b, com.wiris.e1_f);
					if (vaA != com.wiris.e1_E.v99(vKE.vM8(), !vaA)) v2R = vKE.x + vKE.getWidth(-1, v73);
				};
				if (js.Boot.__instanceof(b, com.wiris.e1_a) && vEA > 1) {
					v3R = Math.floor(Math.min(b.vQ1, this.getChild(vEA - 2).vQ1) / 1.0);
					h = Math.floor(Math.max(b.vQ1 + b.height, this.getChild(vEA - 2).vQ1 + this.getChild(vEA - 2).height)) - v3R;
				} else {
					v3R = b.vQ1;
					h = b.height;
				}
			};
			voK.push(com.wiris.e1_7.vD7(v2R, v3R, 1, h));
			return voK;
		};
		var vH4;
		var vc1 = vEA;
		while (vc1 < vnA) {
			var vdI = vc1++;
			v2R = this.getChild(vdI).x;
			if (vEA == vnA) vP9 = 1;
			else vP9 = this.getChild(vdI).width;
			v3R = this.getChild(vdI).vQ1;
			h = this.getChild(vdI).height;
			voK.push(com.wiris.e1_7.vD7(v2R, v3R, vP9, h));
		};
		return voK;
	},
	vrK: function(vEA) {
		var v2R;
		var v3R;
		if (vEA == 0 && this.vUF == 1) {
			v2R = Math.floor(Math.ceil(this.width / 2.0)) - 1;
			v3R = this.baseline;
		} else if (vEA < this.vN8()) {
			v2R = this.getChild(vEA).x;
			v3R = this.getChild(vEA).vQ1 + this.getChild(vEA).baseline;
		} else if (this.vVB(vEA - 1)) {
			v2R = 0;
			v3R = this.height;
		} else {
			v2R = this.getChild(vEA - 1).x + this.getChild(vEA - 1).width;
			v3R = this.getChild(vEA - 1).vQ1 + this.getChild(vEA - 1).baseline;
		};
		return com.wiris.e1_6.vC7(v2R, v3R);
	},
	v5R: function(x) {
		var b = this.getChild(x);
		if (js.Boot.__instanceof(b, com.wiris.e1_P)) {
			var a = js.Boot.vX3(b, com.wiris.e1_P);
			return a.actiontype == com.wiris.e1_P.vyK;
		};
		return false;
	},
	vSF: function(x, selection) {
		var n = this.vN8();
		if (n == 0) return true;
		else if (x == 0) return !this.v5R(0);
		else if (x == n) return !this.v5R(n - 1);
		else return !this.v5R(x - 1) && !this.v5R(x);
	},
	vg3: function(vEA, vnA, left, right) {
		return com.wiris.e1_Y.vxK(this, vEA, vnA, left, right);
	},
	vtK: function(n) {
		return n + 1;
	},
	vmK: function() {
		return this.vN8() + 1;
	},
	v6R: function(v1A, vQO, vkQ) {
		var v7R = new Array();
		var m = new Array();
		var i;
		var veB = 0;
		var v3R = 0;
		var v8R = 0;
		this.width = 0;
		var v9R = v1A.getDefaultStyles().vLB("line-leading", v1A.getLength(0.25), v1A);
		var vAR = v1A.getDefaultStyles().vLB("limit-linespace", -1, v1A);
		if (this.getParent().vLC()) {
			var b = js.Boot.vX3(this.getParent(), com.wiris.e1_j);
			if (b.vBR(this)) {
				if (vAR != -1) v9R = vAR;
			}
		};
		var vCR = v1A.getDefaultStyles().vLB("space-adjust", 0, v1A);
		var vDR = v1A.getDefaultStyles().vLB("minimum-gap", 0, v1A);
		this.vER = com.wiris.common.WInteger.max(vCR, vDR);
		var vFR = v1A.getDefaultStyles().vLB("prime-height", 0, v1A);
		var vGR = false;
		var viQ = 0;
		var vjQ = 0;
		var vSO = 0;
		var vHR = new Array();
		var vIR = new Array();
		var vd1 = 0,
			vc1 = this.vN8();
		while (vd1 < vc1) {
			var vW9 = vd1++;
			v7R[vW9] = 0;
		};
		vHR[0] = 0;
		vIR[0] = 0;
		i = 0;
		while (i < this.vN8()) {
			if (this.vVB(i)) {
				vIR[viQ] = vjQ;
				vGR = true;
				++viQ;
				vjQ = 0;
				if (i + 1 < this.vN8()) vHR[viQ] = i + 1;
				else vHR[viQ] = -1;
			} else {
				if (vjQ + this.getChild(i).width > this.maxWidth && vHR[viQ] != i) {
					vGR = true;
					++viQ;
					vjQ = this.getChild(i).width + this.vER;
					if (i < this.vN8()) vHR[viQ] = i;
					else vHR[viQ] = -1;
				} else vjQ += this.getChild(i).width + this.vER;
				vIR[viQ] = vjQ;
				this.width = com.wiris.common.WInteger.max(vIR[viQ], this.width);
			};
			++i;
		};
		this.width = com.wiris.common.WInteger.max(0, this.width - this.vER);
		var vd1 = 0,
			vc1 = vIR.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			vIR[vW9] = com.wiris.common.WInteger.max(0, vIR[vW9] - this.vER);
			if (vW9 < vkQ.length && vkQ[vW9] == -1) vSO = com.wiris.common.WInteger.max(vIR[vW9], vSO);
		};
		viQ = 0;
		vjQ = vIR[viQ];
		v8R = this.vhQ(viQ, vIR[viQ], vQO, vkQ, vSO);
		var vJR = false;
		while (viQ < vHR.length) {
			var vQF = vHR[viQ];
			i = vQF;
			var end;
			if (viQ + 1 < vHR.length) end = vHR[viQ + 1];
			else end = -1;
			while (i < this.vN8() && i != end) {
				if (this.vvQ(this.getChild(i))) this.getChild(i).x = v8R - this.padding[0];
				else {
					this.getChild(i).x = v8R;
					v8R = v8R + this.getChild(i).width + this.vER;
					if (!this.vVB(i) && vQO[0] != -1) this.width = com.wiris.common.WInteger.max(this.width, v8R - this.vER);
					if (this.vgQ(this.getChild(i))) {
						vJR = true;
						this.getChild(i).height += vFR;
					}
				}; if (i + 1 == end) {
					v7R[i] = 0;
					com.wiris.editor.formula.box.BoxUtils.v7L(v1A, this, v7R, veB, i + 1, v3R, m);
					veB = i + 1;
					v3R += m[0] + v9R;
					this.v4R = v1A.getHeight("x");
					++viQ;
					if (vQO[0] != -1 && i > -1) this.width = com.wiris.common.WInteger.max(this.width, v8R - this.getChild(i).width - this.vER);
					v8R = this.vhQ(viQ, vIR[viQ], vQO, vkQ, vSO);
				};
				++i;
			};
			if (end == -1)++viQ;
		};
		if (vQO[0] != -1 && i > 0) this.width = com.wiris.common.WInteger.max(this.width, v8R - this.getChild(i - 1).width - this.vER);
		com.wiris.editor.formula.box.BoxUtils.v7L(v1A, this, v7R, veB, this.vN8(), v3R, m);
		v3R += m[0];
		if (vHR[vHR.length - 1] == -1) {
			this.v4R = v1A.getHeight("x");
			v3R += this.v4R + v9R;
		};
		if (vJR && vFR != 0) {
			viQ = 0;
			var vKR = false;
			while (viQ < vHR.length) {
				vKR = false;
				var vQF = vHR[viQ];
				i = vQF;
				var end;
				if (viQ + 1 < vHR.length) end = vHR[viQ + 1];
				else end = -1;
				while (i < this.vN8() && i != end && !vKR) {
					if (this.vgQ(this.getChild(i))) vKR = true;
					++i;
				};
				if (vKR) {
					i = vQF;
					while (i < this.vN8() && i != end) {
						if (!this.vgQ(this.getChild(i))) this.getChild(i).vQ1 += vFR;
						++i;
					}
				};
				++viQ;
			}
		};
		this.height = v3R;
		if (vGR) this.baseline = Math.floor(this.height / 2.0);
		else this.baseline = m[1];
	},
	v7G: function(v1A) {
		this.maxWidth = com.wiris.editor.formula.Styles.vYC(v1A, this.v08.getMaxWidth(), 100000000);
		this.padding[0] = 0;
		this.padding[1] = 0;
		this.padding[2] = 0;
		if (this.vN8() == 0) {
			this.width = v1A.getWidth("x");
			this.height = v1A.getHeight("x");
			this.baseline = v1A.getBaseline("x");
		} else {
			var vQO = new Array();
			var vkQ = new Array();
			this.vtQ(vQO, vkQ);
			this.v6R(v1A, vQO, vkQ);
		}; if (this.styles.isFlagMask(com.wiris.e1_2.vQ2)) this.width = com.wiris.common.WInteger.max(com.wiris.editor.formula.Styles.vYC(v1A, this.styles.getWidth(), 0), this.width);
	},
	vEG: function(v1A, mode) {
		if (this.vN8() == 0 && (mode == com.wiris.editor.formula.FormulaModel.vy3 || mode == com.wiris.editor.formula.FormulaModel.vx3)) com.wiris.editor.formula.box.BoxUtils.vDG(v1A, this, 0, v1A.getLength(0.2), 0, v1A.getLength(0.05), true);
	},
	vkK: function(v1A) {
		this.vEG(v1A, com.wiris.editor.formula.FormulaModel.vw3);
	},
	vER: null,
	padding: null,
	vpQ: null,
	type: null,
	v4R: null,
	maxWidth: null,
	__class__: com.wiris.e1_h
});