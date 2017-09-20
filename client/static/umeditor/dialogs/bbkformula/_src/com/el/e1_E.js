com.wiris.e1_E = v91["com.wiris.e1_E"] = function() {
	this.v8B = new Array();
	this.vYB = new Array();
	this.vZB = new Array();
};
com.wiris.e1_E.__name__ = ["com", "wiris", "e1_E"];
com.wiris.e1_E.v0B = function(m, vaB) {
	if (m == null) {
		m = new Array();
		m[0] = vaB[0];
		m[1] = vaB[1];
		m[2] = vaB[2];
		return m;
	};
	m[0] += vaB[0];
	var b = com.wiris.common.WInteger.max(m[2], vaB[2]);
	var u = com.wiris.common.WInteger.max(m[1] - m[2], vaB[1] - vaB[2]);
	m[1] = b + u;
	m[2] = b;
	return m;
};
com.wiris.e1_E.v99 = function(text, vbB) {
	var n = text.length;
	var i;
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		var c = HxOverrides.cca(text, vW9);
		if (com.wiris.editor.formula.WCharacter.v99(c) || !com.wiris.editor.formula.WCharacter.vf8(c) && !com.wiris.editor.formula.WCharacter.ve8(c) && !vbB) return true;
	};
	return false;
};
com.wiris.e1_E.prototype = {
	vLA: function(i) {
		return this.vYB[i];
	},
	vSA: function(i) {
		return this.vZB[i];
	},
	reverse: function(ar, n) {
		var i;
		var m = n >> 1;
		var vc1 = 0;
		while (vc1 < m) {
			var vW9 = vc1++;
			var s = ar[vW9];
			var d = ar[n - vW9 - 1];
			ar[vW9] = d;
			ar[n - vW9 - 1] = s;
		}
	},
	vcB: function(font, s, pos) {
		if (pos >= this.vYB.length) {
			this.vYB.push(font);
			this.vZB.push(s);
		} else {
			this.vYB[pos] = font;
			this.vZB[pos] = s;
		}
	},
	vJA: function(v2A, s, str, vdB) {
		var n;
		var veB;
		var m;
		n = str.length;
		if (n == 0) {
			this.vcB(this.vfB(v2A, s, 120, vdB), "", 0);
			return 1;
		};
		var i = 0;
		veB = 0;
		var vgB = null;
		var vhB = true;
		m = 0;
		if (!vdB) str = com.wiris.editor.formula.WCharacter.vs8(str);
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			var c = HxOverrides.cca(str, vW9);
			var viB = this.vfB(v2A, s, c, vdB);
			var vjB = com.wiris.editor.formula.WCharacter.v99(c);
			var vkB = true;
			if (vW9 == 0) {
				vgB = viB;
				vhB = vjB;
			} else if (viB != null && vgB != null) vkB = viB == vgB && vhB == vjB;
			else vkB = viB == vgB; if (!vkB) {
				var vlB = HxOverrides.substr(str, veB, vW9 - veB);
				this.vcB(vgB, vlB, m);
				vgB = viB;
				vhB = vjB;
				veB = vW9;
				m++;
			}
		};
		var vmB = HxOverrides.substr(str, veB, n - veB);
		this.vcB(vgB, vmB, m);
		m++;
		if (!vdB) {
			this.reverse(this.vYB, m);
			this.reverse(this.vZB, m);
		};
		return m;
	},
	v6A: function(vnB) {
		var i;
		var vd1 = 0,
			vc1 = vnB.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			this.v8B.push(vnB[vW9]);
			if (vnB[vW9] == "brackets") this.voB = "brackets";
			if (vnB[vW9] == "brack_sm") this.vpB = "brack_sm";
			if (vnB[vW9] == "Brackets full size") this.voB = "Brackets full size";
			if (vnB[vW9] == "Brackets small size") this.vpB = "Brackets small size";
		}
	},
	setBracketsSmaller: function(b) {
		this.vqB = b;
	},
	vrB: function(v2A, c) {
		var vsB = this.vpB != null ? v2A.canDisplay(this.vpB, c) : false;
		var vtB = this.voB != null ? v2A.canDisplay(this.voB, c) : false;
		if (vsB && (this.vqB || !vtB)) return this.vpB;
		if (vtB) return this.voB;
		return null;
	},
	vfB: function(v2A, s, c, vdB) {
		var vuB = this.vrB(v2A, c);
		if (vuB != null) return vuB;
		var i;
		var n;
		n = this.v8B.length;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			var vKA = this.v8B[vW9];
			if (vKA == "drawFont") {
				var vwA = new com.wiris.e1_A();
				if (vwA.canDisplay(c, false)) return vKA;
			} else if (vKA == "rootFont") {
				var vwA = new com.wiris.e1_A();
				if (vwA.canDisplay(c, true)) return vKA;
			} else if (vKA == "negationFont") {
				var v3B = com.wiris.editor.formula.WCharacter.vz8(c);
				if (v3B != -1 && v2A.canDisplay("math1", v3B)) return vKA;
			} else if (vKA == "math1_rtl") {
				if (!vdB && v2A.canDisplay("math1_rtl", c)) return vKA;
			} else if (v2A.canDisplay(vKA, c)) return vKA;
		};
		return s.getFontFamily();
	},
	vZB: null,
	vYB: null,
	vqB: null,
	vpB: null,
	voB: null,
	v8B: null,
	__class__: com.wiris.e1_E
};