com.wiris.e1_j = v91["com.wiris.e1_j"] = function() {
	com.wiris.e1_a.call(this);
};
com.wiris.e1_j.__name__ = ["com", "wiris", "e1_j"];
com.wiris.e1_j.__super__ = com.wiris.e1_a;
com.wiris.e1_j.prototype = vB1(com.wiris.e1_a.prototype, {
	vBR: function(b) {
		var i = 0;
		var pos = -1;
		while (i < this.vN8()) {
			if (this.getChild(i) == b) pos = i;
			++i;
		};
		if (this.type == com.wiris.e1_j.vNC && pos == 0) return true;
		if (this.type == com.wiris.e1_j.vOC && (pos == 0 || pos == 2)) return true;
		if (this.type == com.wiris.e1_j.vMR && pos == 1) return true;
		return false;
	},
	vLC: function() {
		return true;
	},
	vN8: function() {
		if (this.vNR) return this.type == com.wiris.e1_j.vOC ? 2 : 1;
		return com.wiris.e1_a.prototype.vN8.call(this);
	},
	getChild: function(i) {
		if (this.vNR) {
			if (this.type == com.wiris.e1_j.vMR && i == 0) i = 1;
			if (this.type == com.wiris.e1_j.vOC && i == 0) i = 2;
			if (this.type == com.wiris.e1_j.vOC && i == 1) i = 0;
		};
		return com.wiris.e1_a.prototype.getChild.call(this, i);
	},
	vjP: function() {
		var p = this.type == com.wiris.e1_j.vMR ? 0 : 1;
		return com.wiris.e1_a.prototype.getChild.call(this, p);
	},
	vTK: function(position) {
		return this.type == com.wiris.e1_j.vOC && (position == 0 || position == 2) || this.type == com.wiris.e1_j.vMR && position == 1 || this.type == com.wiris.e1_j.vNC && position == 0;
	},
	vWK: function(vVK, position) {
		if (vVK == com.wiris.e1_M.vXK) return this;
		return com.wiris.e1_a.prototype.vWK.call(this, vVK, position);
	},
	vIC: function() {
		var b;
		b = new com.wiris.e1_j();
		b.type = this.type;
		this.veK(b);
		return b;
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
	},
	vwB: function(s) {
		s.vDI();
		this.type = s.vFI(this, "munder", this.type, com.wiris.e1_j.vMR);
		this.type = s.vFI(this, "mover", this.type, com.wiris.e1_j.vNC);
		this.type = s.vFI(this, "munderover", this.type, com.wiris.e1_j.vOC);
		s.vBI(this);
		var vTH;
		if (this.type == com.wiris.e1_j.vMR) vTH = com.wiris.e1_j.vOR;
		else if (this.type == com.wiris.e1_j.vNC) vTH = com.wiris.e1_j.vPR;
		else vTH = com.wiris.e1_j.vQR;
		s.v0I(this, vTH);
		s.v5I();
	},
	v7G: function(v1A) {
		var vRR = v1A.getDefaultStyles().vLB("limit-height", 0, v1A);
		var vSR = v1A.getDefaultStyles().vLB("limit-depth", 0, v1A);
		var p;
		p = this.type == com.wiris.e1_j.vMR ? 0 : 1;
		var vYP = this.getChild(p);
		if (this.vTR()) {
			this.vNR = true;
			com.wiris.e1_a.prototype.v7G.call(this, v1A);
			vYP.x = 0;
			vYP.vQ1 = vYP.baseline < this.baseline ? this.baseline - vYP.baseline : 0;
			this.getChild(0).x += vYP.width;
			this.getChild(0).vQ1 += this.baseline < vYP.baseline ? vYP.baseline - this.baseline : 0;
			if (this.type == com.wiris.e1_j.vOC) {
				this.getChild(1).x += vYP.width;
				this.getChild(1).vQ1 += this.baseline < vYP.baseline ? vYP.baseline - this.baseline : 0;
			};
			this.width += vYP.width;
			this.height = com.wiris.editor.formula.IntegerTools.max(vYP.viK(), this.viK()) + com.wiris.editor.formula.IntegerTools.max(vYP.baseline, this.baseline);
			this.baseline = com.wiris.editor.formula.IntegerTools.max(vYP.baseline, this.baseline);
			this.vNR = false;
		} else {
			com.wiris.editor.formula.box.BoxUtils.v8L(v1A, this, com.wiris.e1_j.center, p, 0);
			var vUR = 0;
			var vVR = 0;
			if (this.type == com.wiris.e1_j.vNC || this.type == com.wiris.e1_j.vOC) {
				var c = this.getChild(0);
				var vWR = vYP.vQK(v1A, com.wiris.e1_M.vCQ);
				vUR = com.wiris.common.WInteger.min(vWR, c.height);
				vYP.vQ1 -= vUR - vRR;
				this.height -= vUR - vRR;
				this.baseline -= vUR - vRR;
				if (vUR < vWR) c.vQ1 += vWR - vUR;
			};
			if (this.type == com.wiris.e1_j.vMR || this.type == com.wiris.e1_j.vOC) {
				var c = this.getChild(this.type == com.wiris.e1_j.vMR ? 1 : 2);
				vVR = vYP.vQK(v1A, com.wiris.e1_M.vBQ);
				c.vQ1 += -vUR + vVR + vSR;
				if (this.type == com.wiris.e1_j.vOC) c.vQ1 += vRR;
				this.height -= com.wiris.common.WInteger.min(-vVR - vSR, c.height);
			}
		}
	},
	vTR: function() {
		if (!this.v08.isFlag(com.wiris.e1_2.vAC)) return this.vjP().vSK();
		return false;
	},
	vNR: null,
	__class__: com.wiris.e1_j
});