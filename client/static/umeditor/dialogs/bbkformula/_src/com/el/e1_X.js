com.wiris.e1_X = v91["com.wiris.e1_X"] = function() {
	this.v7O = "#000000";
	this.v8O = "solid";
	com.wiris.e1_O.call(this);
};
com.wiris.e1_X.__name__ = ["com", "wiris", "e1_X"];
com.wiris.e1_X.vPD = function(top, c) {
	var vlD = com.wiris.editor.formula.box.BoxUtils.vRF(top, c);
	var box = vlD.b;
	var i = 0;
	while (box != null && !js.Boot.__instanceof(box, com.wiris.e1_X)) {
		i = box.vn7;
		box = box.getParent();
	};
	if (box != null) {
		var vQD = js.Boot.vX3(box, com.wiris.e1_X);
		var v2J = i % vQD.vSD;
		var vq7 = Math.floor(Math.floor(i / js.Boot.vX3(vQD.vSD, Float)));
		var vOD = new Array();
		vOD[0] = vQD;
		vOD[1] = vq7;
		vOD[2] = v2J;
		return vOD;
	};
	return null;
};
com.wiris.e1_X.v9O = function(vnB, i, n) {
	if (vnB == null) return null;
	if (i >= vnB.length) return vnB;
	var vAO = new Array();
	com.wiris.e1_X.vBO(vnB, 0, vAO, 0, i);
	var k = i > 0 ? i - 1 : i;
	com.wiris.e1_X.vCO(vAO, i, vnB[k], n);
	com.wiris.e1_X.vBO(vnB, i, vAO, i + n, vnB.length - i);
	return vAO;
};
com.wiris.e1_X.vDO = function(vnB, i, n) {
	if (vnB == null) return null;
	if (i >= vnB.length) return vnB;
	var m = com.wiris.common.WInteger.max(vnB.length - i - n, 0);
	var vAO;
	if (i + m == 0) {
		vAO = new Array();
		vAO[0] = vnB[vnB.length - 1];
		return vAO;
	};
	vAO = new Array();
	com.wiris.e1_X.vBO(vnB, 0, vAO, 0, i);
	com.wiris.e1_X.vBO(vnB, i + n, vAO, i, m);
	return vAO;
};
com.wiris.e1_X.vEO = function(vnB, i, n) {
	if (vnB == null) return null;
	vnB = com.wiris.e1_X.vDO(vnB, i + n, vnB.length);
	vnB = com.wiris.e1_X.vDO(vnB, 0, i);
	return vnB;
};
com.wiris.e1_X.setStyle = function(vnB, i, n, src, vXC) {
	var vH4;
	if (src == null) return vnB;
	var vAO = new Array();
	com.wiris.e1_X.vBO(vnB, 0, vAO, 0, vAO.length);
	if (vnB != null) vXC = vnB[vnB.length - 1];
	var vc1 = 0;
	while (vc1 < n) {
		var vdI = vc1++;
		if (vdI < src.length) vAO = com.wiris.e1_X.vFO(vAO, i + vdI, src[vdI], vXC);
		else vAO = com.wiris.e1_X.vFO(vAO, i + vdI, src[src.length - 1], vXC);
	};
	return vAO;
};
com.wiris.e1_X.vFO = function(src, i, v, vXC) {
	var vAO;
	if (i < src.length) vAO = src;
	else {
		vAO = new Array();
		com.wiris.e1_X.vBO(src, 0, vAO, 0, src.length);
		com.wiris.e1_X.vCO(vAO, src.length, vXC, i - src.length);
	};
	vAO[i] = v;
	return vAO;
};
com.wiris.e1_X.vBO = function(src, vGO, vTC, vHO, n) {
	var i;
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		vTC[vHO + vW9] = src[vGO + vW9];
	}
};
com.wiris.e1_X.vCO = function(vTC, vHO, value, n) {
	var i;
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		vTC[vHO + vW9] = value;
	}
};
com.wiris.e1_X.__super__ = com.wiris.e1_O;
com.wiris.e1_X.prototype = vB1(com.wiris.e1_O.prototype, {
	setRowSpacing: function(vq7, voD) {
		var vIO = new Array();
		var i;
		var vd1 = 0,
			vc1 = this.vWD - 1;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (this.rowspacing != null && vW9 < this.rowspacing.length) vIO[vW9] = this.rowspacing[vW9];
			else vIO[vW9] = "default"; if (vW9 == vq7) vIO[vW9] = voD;
		};
		this.rowspacing = vIO;
		this.vkF();
	},
	setColumnSpacing: function(vr7, voD) {
		var vJO = new Array();
		var i;
		var vd1 = 0,
			vc1 = this.vSD - 1;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (this.columnspacing != null && vW9 < this.columnspacing.length) vJO[vW9] = this.columnspacing[vW9];
			else vJO[vW9] = "default"; if (vW9 == vr7) vJO[vW9] = voD;
		};
		this.columnspacing = vJO;
		this.vkF();
	},
	vKO: function() {
		var i;
		var vH4;
		var vd1 = 0,
			vc1 = this.vSD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			var vLO = 0;
			var c;
			var vLF = 0,
				vMF = this.vWD;
			while (vLF < vMF) {
				var vdI = vLF++;
				c = this.getChild(vW9 + vdI * this.vSD);
				vLO = com.wiris.common.WInteger.max(c.x + c.width - this.vMO[vW9], vLO);
			};
			var align;
			if (this.columnalign == null || this.columnalign.length == 0) align = com.wiris.editor.formula.Styles.v45;
			else if (vW9 < this.columnalign.length) align = this.columnalign[vW9];
			else align = this.columnalign[this.columnalign.length - 1];
			var vLF = 0,
				vMF = this.vWD;
			while (vLF < vMF) {
				var vdI = vLF++;
				c = this.getChild(vW9 + vdI * this.vSD);
				if (align == com.wiris.editor.formula.Styles.vz7 || align == com.wiris.editor.formula.Styles.vbD) c.x += this.vNO - vLO;
				else if (align == com.wiris.editor.formula.Styles.v45) c.x += Math.floor(Math.floor((this.vNO - vLO) / 2.0));
			}
		}
	},
	vOO: function(align, vPO, vQO, vRO, vSO) {
		var vTO = 0;
		var rtl = this.styles.isFlag(com.wiris.e1_2.vc2);
		if (!rtl && (align == com.wiris.editor.formula.Styles.vz7 || align == com.wiris.editor.formula.Styles.vbD) || rtl && (align == com.wiris.editor.formula.Styles.vy7 || align == com.wiris.editor.formula.Styles.vcD)) {
			if (vQO != -1) {
				if (vRO != -1) vTO = com.wiris.common.WInteger.max(vSO, vQO) - vRO;
				else vTO = com.wiris.common.WInteger.max(vSO, vQO) - vPO;
			} else vTO = vSO - vPO;
		} else if (!rtl && (align == com.wiris.editor.formula.Styles.vy7 || align == com.wiris.editor.formula.Styles.vcD) || rtl && (align == com.wiris.editor.formula.Styles.vz7 || align == com.wiris.editor.formula.Styles.vbD)) {
			if (vQO != -1) {
				if (vRO != -1) vTO = vQO - vRO;
				else vTO = vQO;
			} else vTO = 0;
		} else if (vQO != -1) {
			var vUO = Math.floor(Math.round(vSO / 2.0));
			if (vRO != -1) vTO = com.wiris.common.WInteger.max(vUO, vQO) - vRO;
			else {
				var a = Math.floor(Math.round(vQO - vPO / 2.0));
				var b = Math.floor(Math.round(vUO - vPO / 2.0));
				vTO = com.wiris.common.WInteger.max(a, b);
			}
		} else vTO = Math.floor(Math.floor((vSO - vPO) / 2.0));
		return vTO;
	},
	vVO: function(box) {
		var b = false;
		if (box.vK8()) {
			var vUB;
			vUB = js.Boot.vX3(box, com.wiris.e1_f);
			b = vUB.type == com.wiris.e1_f.vNE && vUB.vLE() == 1 && com.wiris.e1_O.vWO.indexOf("@" + HxOverrides.cca(vUB.vM8(), 0) + "@") >= 0;
		};
		return b;
	},
	vXO: function(box) {
		var b = false;
		if (box.vK8()) {
			var vUB;
			vUB = js.Boot.vX3(box, com.wiris.e1_f);
			b = vUB.type == com.wiris.e1_f.vNE && vUB.vM8() == ".";
		};
		return b;
	},
	vYO: function(box) {
		var b = false;
		if (box.vK8()) {
			var vUB;
			vUB = js.Boot.vX3(box, com.wiris.e1_f);
			b = vUB.type == com.wiris.e1_f.vNE && vUB.vLE() == 1 && HxOverrides.cca(vUB.vM8(), 0) == 57358;
		};
		return b;
	},
	vZO: function(v2J, vq7, vaO, vbO, c) {
		var i;
		var vcO = 0;
		var vdO = -1;
		var veO = false;
		var vfO = false;
		var vgO = false;
		var s = null;
		if (this.columnalign != null && this.columnalign.length > 0) {
			if (v2J < this.columnalign.length) s = this.columnalign[v2J];
			else s = this.columnalign[this.columnalign.length - 1];
		};
		var vd1 = 0,
			vc1 = c.vN8();
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (vW9 == 0) vcO = c.getChild(0).x;
			if (this.vYO(c.getChild(vW9))) {
				veO = true;
				vdO = c.getChild(vW9).x - vcO;
			} else if (this.vXO(c.getChild(vW9)) && !veO && !vgO) {
				vgO = true;
				if (this.columnalign != null) {
					if (s == "decimal") vdO = c.getChild(vW9).x - vcO;
				}
			} else if (this.vVO(c.getChild(vW9)) && !veO && !vfO) {
				vfO = true;
				if (this.columnalign != null) {
					if (s == "relation") vdO = c.getChild(vW9).x - vcO;
				}
			}
		};
		vbO[v2J][vq7] = vdO;
		vaO[v2J] = com.wiris.common.WInteger.max(vdO, vaO[v2J]);
	},
	vUK: function(vVK, position) {
		if (vVK == com.wiris.e1_M.vXK) return this.vhO[position % this.vSD];
		else if (vVK == com.wiris.e1_M.vYK) return this.viO[Math.floor(Math.floor(position / js.Boot.vX3(this.vSD, Float)))];
		else return this.vjO[Math.floor(Math.floor(position / js.Boot.vX3(this.vSD, Float)))];
	},
	vWK: function(vVK, position) {
		return this;
	},
	vRD: function(rows, vt4) {
		var vQD = new com.wiris.e1_X();
		com.wiris.editor.formula.box.BoxUtils.vgE(vQD);
		vQD.vWD = rows;
		vQD.vSD = vt4;
		var i;
		var vd1 = 0,
			vc1 = vQD.vSD * vQD.vWD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			vQD.vpC(new com.wiris.e1_h());
		};
		return vQD;
	},
	vXD: function(vH4, m) {
		var vEA;
		var vnA;
		vEA = vH4;
		if (m > 0) vnA = this.vSD * (this.vWD - 1) + vH4 + m;
		else vnA = vEA;
		return com.wiris.e1_Z.vkO(this, vEA, vnA, 1, null, null);
	},
	vTD: function(i, n) {
		var vEA;
		var vnA;
		vEA = i * this.vSD;
		vnA = vEA + n * this.vSD;
		return com.wiris.e1_Z.vkO(this, vEA, vnA, 2, null, null);
	},
	vlO: function(v5N, vBN) {
		var n = vBN[0] - v5N[0] + 1;
		var m = vBN[1] - v5N[1] + 1;
		var i;
		var vH4;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			var vd1 = 0;
			while (vd1 < m) {
				var vdI = vd1++;
				var b = this.vkD(vdI + v5N[1], vW9 + v5N[0]);
				if (b.vRB() && b.vN8() != 0) return false;
			}
		};
		return true;
	},
	vmO: function(vEA, vnA, mode, b) {
		if (mode == 1) {
			if (b.vWD == this.vWD) {
				this.insertColumn(vEA, b.vSD);
				vnA = this.vSD * (this.vWD - 1) + vEA + b.vSD;
			}
		};
		if (mode == 2) {
			if (b.vSD == this.vSD) {
				var vQ1 = Math.floor(Math.floor(vnA / js.Boot.vX3(b.vSD, Float)));
				this.insertRow(vQ1, b.vWD);
				vnA = this.vSD * (vQ1 + b.vWD);
			}
		};
		var vnO = this.voO(vEA, vnA);
		var v5N = this.vpO(vnO[0].vn7);
		var i;
		var vH4;
		var vW9;
		var vdI;
		var vd1 = 0,
			vc1 = b.vSD;
		while (vd1 < vc1) {
			var vqO = vd1++;
			var vLF = 0,
				vMF = b.vWD;
			while (vLF < vMF) {
				var vrO = vLF++;
				var c = b.vkD(vrO, vqO);
				vW9 = vqO + v5N[0];
				vdI = vrO + v5N[1];
				if (vW9 < this.vSD && vdI < this.vWD) this.replace(vdI * this.vSD + vW9, c);
			}
		};
		this.columnspacing = com.wiris.e1_X.setStyle(this.columnspacing, v5N[0], b.vSD, b.columnspacing, com.wiris.e1_X.vsO);
		this.columnalign = com.wiris.e1_X.setStyle(this.columnalign, v5N[0], b.vSD, b.columnalign, com.wiris.editor.formula.Styles.v45);
		return vnA;
	},
	vtO: function(vEA, vnA, mode, v4F) {
		var vnO = this.voO(vEA, vnA);
		var v5N = this.vpO(vnO[0].vn7);
		var vBN = this.vpO(vnO[1].vn7);
		var n = vBN[0] - v5N[0] + 1;
		var m = vBN[1] - v5N[1] + 1;
		var empty = this.vlO(v5N, vBN);
		if (empty || mode != 0) {
			if (mode != 2 && v5N[1] == 0 && vBN[1] == this.vWD - 1) {
				if (v4F) return -1;
				this.vuO(v5N[0], n);
				return -2;
			};
			if (mode != 1 && v5N[0] == 0 && vBN[0] == this.vSD - 1) {
				if (v4F) return -1;
				this.vvO(v5N[1], m);
				return -3;
			}
		};
		if (empty) return -1;
		var i;
		var vH4;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			var vd1 = 0;
			while (vd1 < m) {
				var vdI = vd1++;
				var b = this.vkD(vdI + v5N[1], vW9 + v5N[0]);
				this.replace(b.vn7, new com.wiris.e1_h());
			}
		};
		return vnA;
	},
	vmC: function(vEA, vnA) {
		var vnO = this.voO(vEA, vnA);
		var v5N = this.vpO(vnO[0].vn7);
		var vBN = this.vpO(vnO[1].vn7);
		var vQD = new com.wiris.e1_X();
		com.wiris.editor.formula.box.BoxUtils.vgE(vQD);
		vQD.vWD = vBN[1] - v5N[1] + 1;
		vQD.vSD = vBN[0] - v5N[0] + 1;
		var i;
		var vH4;
		var vd1 = 0,
			vc1 = vQD.vWD;
		while (vd1 < vc1) {
			var vdI = vd1++;
			var vLF = 0,
				vMF = vQD.vSD;
			while (vLF < vMF) {
				var vW9 = vLF++;
				var b = this.vkD(vdI + v5N[1], vW9 + v5N[0]);
				vQD.vpC(b.vIC());
			}
		};
		com.wiris.editor.formula.box.BoxUtils.vgK(this, vQD);
		vQD.columnspacing = com.wiris.e1_X.vEO(this.columnspacing, v5N[0], vQD.vSD);
		vQD.columnalign = com.wiris.e1_X.vEO(this.columnalign, v5N[0], vQD.vSD);
		return vQD;
	},
	voO: function(vEA, vnA) {
		var r = this.vwO(vEA, vnA);
		if (r.length < 2) return r;
		var v5N = this.vpO(r[0].vn7);
		var vBN = this.vpO(r[1].vn7);
		if (v5N[0] > vBN[0]) {
			r[0] = this.vkD(v5N[1], vBN[0]);
			r[1] = this.vkD(vBN[1], v5N[0]);
		};
		return r;
	},
	vwO: function(vEA, vnA) {
		var vnN;
		var r = new Array();
		if (vnA > this.vN8()) return r;
		if (vEA < this.vN8()) vnN = this.getChild(vEA);
		else vnN = this.getChild(vEA - 1);
		var vuB;
		if (vnA > 0) vuB = this.getChild(vnA - 1);
		else vuB = this.getChild(vnA);
		r[0] = vnN;
		r[1] = vuB;
		return r;
	},
	vpO: function(n) {
		var c = new Array();
		c[0] = n % this.vSD;
		c[1] = Math.floor(Math.floor(n / js.Boot.vX3(this.vSD, Float)));
		return c;
	},
	getSelectionRectangles: function(vEA, vnA, v73) {
		var a = new Array();
		var vQA = this.voO(vEA, vnA);
		var vnN = vQA[0];
		var vuB = vQA[1];
		a.push(com.wiris.e1_7.vD7(vnN.x, vnN.vQ1, vuB.x - vnN.x + vuB.width, vuB.vQ1 - vnN.vQ1 + vuB.height));
		return a;
	},
	vg3: function(vEA, vnA, left, right) {
		return com.wiris.e1_Z.vkO(this, vEA, vnA, 0, left, right);
	},
	vtK: function(vTB) {
		return vTB + 1;
	},
	vmK: function() {
		return this.vN8() + 1;
	},
	vkD: function(i, vH4) {
		return this.getChild(i * this.vSD + vH4);
	},
	vdD: function(vq7, vxO) {
		var vyO = new Array();
		var i;
		var vd1 = 0,
			vc1 = this.vWD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (this.rowalign != null && vW9 < this.rowalign.length) vyO[vW9] = this.rowalign[vW9];
			else vyO[vW9] = com.wiris.editor.formula.Styles.v65; if (vW9 == vq7) vyO[vW9] = vxO;
		};
		this.rowalign = vyO;
		vyO = null;
	},
	vaD: function(v2J, vxO) {
		var vzO = new Array();
		var i;
		var vd1 = 0,
			vc1 = this.vSD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (this.columnalign != null && vW9 < this.columnalign.length) vzO[vW9] = this.columnalign[vW9];
			else vzO[vW9] = "center"; if (vW9 == v2J) vzO[vW9] = vxO;
		};
		this.columnalign = vzO;
		vzO = null;
	},
	removeLineRight: function(v2J) {
		if (!(this.columnlines.length < v2J + 1)) {
			this.columnlines[v2J] = "none";
			var i = 0;
			var v0P = 0;
			var vd1 = 0,
				vc1 = this.columnlines.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				if (!(this.columnlines[vW9] == "none")) v0P = vW9 + 1;
			};
			if (v0P == this.vSD) v0P = v0P - 1;
			if (v0P != 0) {
				var v1P = new Array();
				var vd1 = 0,
					vc1 = v0P + 1;
				while (vd1 < vc1) {
					var vW9 = vd1++;
					v1P[vW9] = this.columnlines[vW9];
				};
				this.columnlines = v1P;
				v1P = null;
			} else this.columnlines = null;
		}
	},
	addLineRight: function(v2J) {
		var i = 0;
		if (this.columnlines == null) {
			var v1P = new Array();
			var vd1 = 0,
				vc1 = v2J + 2;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				v1P[vW9] = "none";
				if (vW9 == v2J) v1P[vW9] = StringTools.replace(v1P[vW9], v1P[vW9], this.v8O);
			};
			this.columnlines = v1P;
			v1P = null;
		} else if (this.columnlines.length < v2J + 2) {
			var v1P = new Array();
			var vd1 = 0,
				vc1 = this.columnlines.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				v1P[vW9] = this.columnlines[vW9];
				if (vW9 == v2J) v1P[vW9] = StringTools.replace(v1P[vW9], v1P[vW9], this.v8O);
			};
			var vd1 = this.columnlines.length,
				vc1 = v2J + 2;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				v1P[vW9] = "none";
				if (vW9 == v2J) v1P[vW9] = StringTools.replace(v1P[vW9], v1P[vW9], this.v8O);
			};
			this.columnlines = v1P;
			v1P = null;
		} else {
			this.columnlines[v2J] = "none";
			this.columnlines[v2J] = StringTools.replace(this.columnlines[v2J], this.columnlines[v2J], this.v8O);
		}
	},
	removeLineBelow: function(vq7) {
		if (!(this.rowlines.length < vq7 + 1)) {
			this.rowlines[vq7] = "none";
			var i;
			var v0P = 0;
			var vd1 = 0,
				vc1 = this.rowlines.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				if (!(this.rowlines[vW9] == "none")) v0P = vW9 + 1;
			};
			if (v0P == this.vSD) v0P = v0P - 1;
			if (v0P != 0) {
				var v2P = new Array();
				var vd1 = 0,
					vc1 = v0P + 1;
				while (vd1 < vc1) {
					var vW9 = vd1++;
					v2P[vW9] = this.rowlines[vW9];
				};
				this.rowlines = v2P;
				v2P = null;
			} else this.rowlines = null;
		}
	},
	addLineBelow: function(vq7) {
		var i = 0;
		if (this.rowlines == null) {
			var v2P = new Array();
			var vd1 = 0,
				vc1 = vq7 + 2;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				v2P[vW9] = "none";
				if (vW9 == vq7) v2P[vW9] = StringTools.replace(v2P[vW9], v2P[vW9], this.v8O);
			};
			this.rowlines = v2P;
			v2P = null;
		} else if (this.rowlines.length < vq7 + 2) {
			var v2P = new Array();
			var vd1 = 0,
				vc1 = this.rowlines.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				v2P[vW9] = this.rowlines[vW9];
				if (vW9 == vq7) v2P[vW9] = StringTools.replace(v2P[vW9], v2P[vW9], this.v8O);
			};
			var vd1 = this.rowlines.length,
				vc1 = vq7 + 2;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				v2P[vW9] = "none";
				if (vW9 == vq7) v2P[vW9] = StringTools.replace(v2P[vW9], v2P[vW9], this.v8O);
			};
			this.rowlines = v2P;
			v2P = null;
		} else {
			this.rowlines[vq7] = "none";
			this.rowlines[vq7] = StringTools.replace(this.rowlines[vq7], this.rowlines[vq7], this.v8O);
		}
	},
	vZD: function() {
		this.frame = null;
	},
	vYD: function(i) {
		var k;
		if (i == -1) {
			this.frame = new Array();
			this.frame[0] = this.v8O;
		} else {
			if (i > 3) i = 0;
			if (this.frame == null || this.frame.length == 0) {
				this.frame = new Array();
				var vc1 = 0;
				while (vc1 < 4) {
					var vJF = vc1++;
					this.frame[vJF] = "none";
				};
				this.frame[i] = StringTools.replace(this.frame[i], this.frame[i], this.v8O);
			} else {
				var v3P = new Array();
				var vc1 = 0;
				while (vc1 < 4) {
					var vJF = vc1++;
					if (vJF < this.frame.length) v3P[vJF] = this.frame[vJF];
					else v3P[vJF] = this.frame[this.frame.length - 1]; if (vJF == i) v3P[vJF] = StringTools.replace(v3P[vJF], v3P[vJF], this.v8O);
				};
				this.frame = v3P;
				v3P = null;
			}
		}
	},
	v1E: function(str) {
		this.v7O = str;
	},
	vjD: function() {
		this.v8O = "dotted";
	},
	viD: function() {
		this.v8O = "dashed";
	},
	vhD: function() {
		this.v8O = "thick";
	},
	vgD: function() {
		this.v8O = "solid";
	},
	vfD: function() {
		this.equalrows = !this.equalrows;
	},
	veD: function() {
		this.equalcolumns = !this.equalcolumns;
	},
	vuO: function(vH4, m) {
		if (this.vSD == 1) return;
		this.vSD -= m;
		var i;
		var vd1 = 0,
			vc1 = this.vWD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			this["delete"](vW9 * this.vSD + vH4, m);
		};
		this.columnspacing = com.wiris.e1_X.vDO(this.columnspacing, vH4, m);
		this.columnalign = com.wiris.e1_X.vDO(this.columnalign, vH4, m);
		this.columnlines = com.wiris.e1_X.vDO(this.columnlines, vH4, m);
	},
	vvO: function(i, n) {
		if (this.vWD == 1) return;
		this.vWD -= n;
		this["delete"](i * this.vSD, n * this.vSD);
		this.rowlines = com.wiris.e1_X.vDO(this.rowlines, i, n);
	},
	insertColumn: function(vH4, n) {
		var i;
		var v4P;
		this.vSD += n;
		var vd1 = 0,
			vc1 = this.vWD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			var vMF = 0;
			while (vMF < n) {
				var v5P = vMF++;
				this.vVD(vW9 * this.vSD + vH4 + v5P, new com.wiris.e1_h());
			}
		};
		this.columnspacing = com.wiris.e1_X.v9O(this.columnspacing, vH4, n);
		this.columnalign = com.wiris.e1_X.v9O(this.columnalign, vH4, n);
		this.columnlines = com.wiris.e1_X.v9O(this.columnlines, vH4, n);
	},
	insertRow: function(i, n) {
		var vH4;
		this.vWD += n;
		var vd1 = 0,
			vc1 = this.vSD * n;
		while (vd1 < vc1) {
			var vdI = vd1++;
			this.vVD(i * this.vSD, new com.wiris.e1_h());
		};
		this.rowlines = com.wiris.e1_X.v9O(this.rowlines, i, n);
	},
	vIC: function() {
		var vyL;
		vyL = new com.wiris.e1_X();
		this.veK(vyL);
		return vyL;
	},
	vwB: function(s) {
		s.vAI(this, "mtable");
		this.align = s.vSI("align", this.align, null);
		this.vSD = s.vKI("#columns", this.vSD, 0);
		this.vWD = s.vKI("#rows", this.vWD, 0);
		this.v8O = s.vnH("#currentlinetype", this.v8O, "solid");
		this.columnspacing = s.vSI("columnspacing", this.columnspacing, null);
		this.rowspacing = s.vSI("rowspacing", this.rowspacing, null);
		this.rowalign = s.vSI("rowalign", this.rowalign, null);
		this.columnalign = s.vSI("columnalign", this.columnalign, null);
		this.rowlines = s.vSI("rowlines", this.rowlines, null);
		this.columnlines = s.vSI("columnlines", this.columnlines, null);
		this.frame = s.vSI("frame", this.frame, null);
		this.equalrows = s.vMI("equalrows", this.equalrows, false);
		this.equalcolumns = s.vMI("equalcolumns", this.equalcolumns, false);
		this.v7O = s.vnH("wrs:linecolor", this.v7O, "#000000");
		if (this.columnalign == null) {
			var v6P = s.vSI("groupalign", null, null);
			if (v6P != null) {
				var i = 0;
				while (i < v6P.length) {
					v6P[i] = StringTools.replace(v6P[i], "{", "");
					v6P[i] = StringTools.replace(v6P[i], "}", "");
					++i;
				};
				this.columnalign = v6P;
			}
		};
		this.framespacing = s.vSI("framespacing", this.framespacing, null);
		if (s.mode == com.wiris.e1_I.vkE || s.mode == com.wiris.e1_I.vfG) {
			var i, vH4, k;
			k = 0;
			var vd1 = 0,
				vc1 = this.vWD;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				s.vAI(this, "mtr");
				var vLF = 0,
					vMF = this.vSD;
				while (vLF < vMF) {
					var vdI = vLF++;
					s.vAI(this, "mtd");
					s.vVC(this.getChild(k++));
					s.vu5("mtd");
				};
				s.vu5("mtr");
			}
		} else if (s.mode == com.wiris.e1_I.viE) {
			this.vWD = 0;
			this.vSD = 0;
			while (s.v7I(this, "mtr")) {
				this.vWD++;
				var v7P = 0;
				while (s.v7I(this, "mtd")) {
					v7P++;
					s.v1I(this);
					s.vu5("mtd");
				};
				this.vSD = com.wiris.editor.formula.IntegerTools.max(this.vSD, v7P);
				s.vu5("mtr");
			}
		};
		s.vu5("mtable");
	},
	vl7: function(v1A, i) {
		if (i == 0 || i == this.vWD) {
			if (this.framespacing != null && this.framespacing.length > 1) return com.wiris.editor.formula.Styles.vYC(v1A, this.framespacing[1], 0);
			return v1A.getLength(0.125);
		};
		if (this.rowspacing != null && this.rowspacing.length > 0) {
			var n = this.rowspacing.length;
			var s;
			if (i - 1 >= n) s = this.rowspacing[n - 1];
			else s = this.rowspacing[i - 1]; if (s == "default") return this.v8P;
			return com.wiris.editor.formula.Styles.vYC(v1A, s, 0);
		};
		return this.v8P;
	},
	vm7: function(v1A, i) {
		if (i == 0 || i == this.vSD) {
			if (this.framespacing != null && this.framespacing.length > 0) return com.wiris.editor.formula.Styles.vYC(v1A, this.framespacing[0], 0);
			return v1A.getLength(0.2);
		};
		if (this.columnspacing != null && this.columnspacing.length > 0) {
			var n = this.columnspacing.length;
			var s;
			if (i - 1 >= n) s = this.columnspacing[n - 1];
			else s = this.columnspacing[i - 1]; if (s == "default") return this.v9P;
			return com.wiris.editor.formula.Styles.vYC(v1A, s, 0);
		};
		return this.v9P;
	},
	vAP: function(v1A) {
		var vBP;
		var vCP;
		var vDP;
		if (this.align != null && this.align.length >= 2) {
			var n = Std.parseInt(this.align[1]);
			if (n < 0) n = this.vWD + n;
			else n--; if (n < 0 || n >= this.vWD) n = 0;
			vBP = this.vEP[n];
			vCP = this.viO[n];
			vDP = this.vjO[n];
		} else {
			vBP = 0;
			vCP = this.height;
			vDP = Math.floor(Math.floor(vCP / 2.0));
		};
		var vFP = null;
		if (this.align != null && this.align.length >= 1) vFP = this.align[0];
		if (vFP == null || vFP == com.wiris.editor.formula.Styles.v55) this.baseline = vBP + Math.floor(Math.floor(vCP / 2.0)) + v1A.getMiddle();
		else if (vFP == com.wiris.editor.formula.Styles.v65) this.baseline = vBP + vDP;
		else if (vFP == com.wiris.editor.formula.Styles.v45) this.baseline = vBP + Math.floor(Math.floor(vCP / 2.0)) + v1A.getMiddle();
		else if (vFP == com.wiris.editor.formula.Styles.v25) this.baseline = vBP;
		else if (vFP == com.wiris.editor.formula.Styles.v35) this.baseline = vBP + vCP - 1;
	},
	vGP: function(v1A, vaO, vbO) {
		var i, vH4;
		this.vMO = new Array();
		this.vEP = new Array();
		this.vMO[0] = this.vm7(v1A, 0);
		var vd1 = 1,
			vc1 = this.vSD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			this.vMO[vW9] = this.vMO[vW9 - 1] + this.vhO[vW9 - 1] + this.vm7(v1A, vW9);
		};
		this.vMO[this.vSD] = this.vMO[this.vSD - 1] + this.vhO[this.vSD - 1];
		this.vEP[0] = this.vl7(v1A, 0);
		var vd1 = 1,
			vc1 = this.vWD;
		while (vd1 < vc1) {
			var vdI = vd1++;
			this.vEP[vdI] = this.vEP[vdI - 1] + this.viO[vdI - 1] + this.vl7(v1A, vdI);
		};
		this.vEP[this.vWD] = this.vEP[this.vWD - 1] + this.viO[this.vWD - 1];
		var vd1 = 0,
			vc1 = this.vWD;
		while (vd1 < vc1) {
			var vdI = vd1++;
			var vHP;
			if (this.rowalign == null || this.rowalign.length == 0) vHP = com.wiris.editor.formula.Styles.v65;
			else if (vdI < this.rowalign.length) vHP = this.rowalign[vdI];
			else vHP = this.rowalign[this.rowalign.length - 1];
			var vLF = 0,
				vMF = this.vSD;
			while (vLF < vMF) {
				var vW9 = vLF++;
				var vTB;
				vTB = this.getChild(vW9 + vdI * this.vSD);
				var vIP;
				if (this.columnalign == null || this.columnalign.length == 0) vIP = com.wiris.editor.formula.Styles.v45;
				else if (vW9 < this.columnalign.length) vIP = this.columnalign[vW9];
				else vIP = this.columnalign[this.columnalign.length - 1];
				vTB.x = this.vMO[vW9] + this.vOO(vIP, vTB.width, vaO[vW9], vbO[vW9][vdI], this.vSO[vW9]);
				if (vHP == com.wiris.editor.formula.Styles.v65) vTB.vQ1 = this.vEP[vdI] + this.vjO[vdI] - vTB.baseline;
				else if (vHP == com.wiris.editor.formula.Styles.v25) vTB.vQ1 = this.vEP[vdI];
				else if (vHP == com.wiris.editor.formula.Styles.v35) vTB.vQ1 = this.vEP[vdI] + this.viO[vdI] - vTB.height;
				else if (vHP == com.wiris.editor.formula.Styles.v45) vTB.vQ1 = Math.floor(Math.round(this.vEP[vdI] + (this.viO[vdI] - vTB.height) / 2.0));
				else if (vHP == com.wiris.editor.formula.Styles.v55) vTB.vQ1 = this.vEP[vdI] + this.vjO[vdI] - vTB.baseline + v1A.getMiddle();
			}
		};
		this.width = this.vMO[this.vSD] + this.vm7(v1A, this.vSD);
		this.height = this.vEP[this.vWD] + this.vl7(v1A, this.vWD);
		if (this.equalcolumns) this.vKO();
	},
	vJP: function(v1A, vaO, vbO) {
		var i = 0;
		var vH4 = 0;
		this.vhO = new Array();
		this.viO = new Array();
		this.vjO = new Array();
		this.vSO = new Array();
		var vd1 = 0,
			vc1 = this.vSD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			this.vhO[vW9] = 0;
			this.vSO[vW9] = 0;
			var vLF = 0,
				vMF = this.vWD;
			while (vLF < vMF) {
				var vdI = vLF++;
				this.viO[vdI] = 0;
				this.vjO[vdI] = 0;
				var c;
				c = this.getChild(vW9 + vdI * this.vSD);
				if (vbO[vW9][vdI] == -1) this.vSO[vW9] = com.wiris.common.WInteger.max(c.width, this.vSO[vW9]);
			}
		};
		this.vNO = 0;
		this.vKP = 0;
		this.vLP = 0;
		var vd1 = 0,
			vc1 = this.vSD;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			var vLF = 0,
				vMF = this.vWD;
			while (vLF < vMF) {
				var vdI = vLF++;
				var c = this.getChild(vW9 + vdI * this.vSD);
				var vMP = c.width;
				var align = com.wiris.editor.formula.Styles.v45;
				if (this.columnalign != null && this.columnalign.length != 0) {
					if (vW9 >= this.columnalign.length) align = this.columnalign[this.columnalign.length - 1];
					else align = this.columnalign[vW9];
				};
				vMP += this.vOO(align, c.width, vaO[vW9], vbO[vW9][vdI], this.vSO[vW9]);
				this.vhO[vW9] = com.wiris.common.WInteger.max(this.vhO[vW9], vMP);
				this.viO[vdI] = com.wiris.common.WInteger.max(this.viO[vdI], c.height - c.baseline);
				this.vjO[vdI] = com.wiris.common.WInteger.max(this.vjO[vdI], c.baseline);
				this.vLP = com.wiris.common.WInteger.max(this.vLP, this.vjO[vdI]);
			};
			this.vNO = com.wiris.common.WInteger.max(this.vNO, this.vhO[vW9]);
		};
		var vd1 = 0,
			vc1 = this.vWD;
		while (vd1 < vc1) {
			var vdI = vd1++;
			this.viO[vdI] += this.vjO[vdI];
			this.vKP = com.wiris.common.WInteger.max(this.vKP, this.viO[vdI]);
			var align = com.wiris.editor.formula.Styles.v65;
			if (this.rowalign != null) {
				if (vdI < this.rowalign.length) align = this.rowalign[vdI];
				else align = this.rowalign[this.rowalign.length - 1];
			};
			if (align == com.wiris.editor.formula.Styles.v65) {
				if (this.viO[vdI] - this.vjO[vdI] + this.vLP > this.vKP) this.vKP = com.wiris.common.WInteger.max(this.vKP, this.viO[vdI] - this.vjO[vdI] + this.vLP);
			}
		};
		if (this.equalcolumns) {
			var vd1 = 0,
				vc1 = this.vSD;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.vhO[vW9] = this.vNO;
			}
		};
		if (this.equalrows) {
			var vd1 = 0,
				vc1 = this.vWD;
			while (vd1 < vc1) {
				var vdI = vd1++;
				this.viO[vdI] = this.vKP;
				this.vjO[vdI] = this.vLP;
			}
		}
	},
	vNP: function(type, i, v1A) {
		var vnA;
		var vpA;
		var voA;
		var vqA;
		if (type == "thick") v1A.setLineWidth(2);
		if (i == 0) {
			voA = this.vEP[0];
			vnA = this.vMO[0] - this.vl7(v1A, 0);
			vpA = this.vMO[this.vSD - 1] + this.vhO[this.vSD - 1] + this.vl7(v1A, 0);
			v1A.drawHorizontalLineWithType(0, vnA, voA, vpA - vnA, type);
		} else if (i == 1) {
			vnA = this.vMO[this.vSD - 1] + this.vhO[this.vSD - 1] + this.vl7(v1A, 0);
			voA = this.vEP[0];
			vqA = this.vEP[this.vWD - 1] + this.viO[this.vWD - 1] + 1;
			v1A.drawVerticalLineWithType(0, vnA, voA, vqA - voA, type);
		} else if (i == 2) {
			voA = this.vEP[this.vWD - 1] + this.viO[this.vWD - 1];
			vnA = this.vMO[0] - this.vl7(v1A, 0);
			vpA = this.vMO[this.vSD - 1] + this.vhO[this.vSD - 1] + this.vl7(v1A, 0);
			v1A.drawHorizontalLineWithType(0, vnA, voA, vpA - vnA, type);
		} else if (i == 3) {
			vnA = this.vMO[0] - this.vl7(v1A, 0);
			voA = this.vEP[0];
			vqA = this.vEP[this.vWD - 1] + this.viO[this.vWD - 1];
			v1A.drawVerticalLineWithType(0, vnA, voA, vqA - voA, type);
		};
		v1A.setLineWidth(1);
	},
	vOP: function(type, i, v1A) {
		if (type != null) {
			if (type == "thick") v1A.setLineWidth(2);
			var vQ1 = this.vEP[i] + this.viO[i] + Math.floor(Math.round(this.vl7(v1A, i + 1) / 2.0));
			var vnA = this.vMO[0] - this.vl7(v1A, 0);
			var vpA = this.vMO[this.vMO.length - 1] + this.vl7(v1A, 0);
			v1A.drawHorizontalLineWithType(0, vnA, vQ1, vpA - vnA, type);
			v1A.setLineWidth(1);
		}
	},
	vPP: function(type, i, v1A) {
		if (type != null) {
			if (type == "thick") v1A.setLineWidth(2);
			var x = this.vMO[i] + this.vhO[i] + Math.floor(Math.round(this.vm7(v1A, i + 1) / 2.0));
			var voA = this.vEP[0];
			var vqA = this.vEP[this.vEP.length - 1];
			v1A.drawVerticalLineWithType(0, x, voA, vqA - voA, type);
			v1A.setLineWidth(1);
		}
	},
	vkK: function(v1A) {
		var i;
		var type;
		var vQP = this.v08.getColor();
		v1A.setColor(com.wiris.util.css.CSSUtils.vs2(this.v7O));
		var vd1 = 0,
			vc1 = this.vSD - 1;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			type = null;
			if (this.columnlines != null && this.columnlines.length != 0) {
				if (vW9 < this.columnlines.length) type = this.columnlines[vW9];
				else type = this.columnlines[this.columnlines.length - 1];
			};
			if (type != null && !(type == "none")) this.vPP(type, vW9, v1A);
		};
		var vd1 = 0,
			vc1 = this.vWD - 1;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			type = null;
			if (this.rowlines != null && this.rowlines.length != 0) {
				if (vW9 < this.rowlines.length) type = this.rowlines[vW9];
				else type = this.rowlines[this.rowlines.length - 1];
			};
			if (type != null && !(type == "none")) this.vOP(type, vW9, v1A);
		};
		var vc1 = 0;
		while (vc1 < 4) {
			var vW9 = vc1++;
			type = null;
			if (this.frame != null && this.frame.length != 0) {
				if (vW9 < this.frame.length) type = this.frame[vW9];
				else type = this.frame[this.frame.length - 1];
			};
			if (type != null && !(type == "none")) this.vNP(type, vW9, v1A);
		};
		v1A.setColor(vQP);
	},
	v7G: function(v1A) {
		if (this.vWD == 0 || this.vSD == 0) return;
		this.v8P = v1A.getDefaultStyles().vLB("row-space", v1A.getLength(0.25), v1A);
		this.v9P = v1A.getDefaultStyles().vLB("column-space", v1A.getLength(0.4), v1A);
		var vaO = new Array();
		var vbO = new Array();
		var v2J, vq7;
		var vd1 = 0,
			vc1 = this.vSD;
		while (vd1 < vc1) {
			var vRP = vd1++;
			vaO[vRP] = -1;
			var rowlines = new Array();
			var vLF = 0,
				vMF = this.vWD;
			while (vLF < vMF) {
				var vSP = vLF++;
				rowlines[vSP] = -1;
			};
			vbO[vRP] = rowlines;
			rowlines = null;
		};
		var c;
		var vd1 = 0,
			vc1 = this.vSD;
		while (vd1 < vc1) {
			var vRP = vd1++;
			var vLF = 0,
				vMF = this.vWD;
			while (vLF < vMF) {
				var vSP = vLF++;
				c = this.getChild(vRP + vSP * this.vSD);
				this.vZO(vRP, vSP, vaO, vbO, c);
			}
		};
		this.vJP(v1A, vaO, vbO);
		this.vGP(v1A, vaO, vbO);
		this.vAP(v1A);
	},
	v7O: null,
	v8O: null,
	vLP: null,
	vKP: null,
	vNO: null,
	vSO: null,
	vEP: null,
	vMO: null,
	vjO: null,
	viO: null,
	vhO: null,
	v9P: null,
	v8P: null,
	framespacing: null,
	equalcolumns: null,
	equalrows: null,
	frame: null,
	columnlines: null,
	rowlines: null,
	align: null,
	columnalign: null,
	rowalign: null,
	rowspacing: null,
	columnspacing: null,
	vSD: null,
	vWD: null,
	__class__: com.wiris.e1_X
});