com.wiris.e1_a = v91["com.wiris.e1_a"] = function() {
	com.wiris.e1_M.call(this);
	this.alignRight = false;
};
com.wiris.e1_a.__name__ = ["com", "wiris", "e1_a"];
com.wiris.e1_a.__super__ = com.wiris.e1_M;
com.wiris.e1_a.prototype = vB1(com.wiris.e1_M.prototype, {
	vwB: function(s) {
		s.vDI();
		this.type = s.vFI(this, "sub", this.type, com.wiris.e1_a.vUP);
		this.type = s.vFI(this, "sup", this.type, com.wiris.e1_a.vVP);
		this.type = s.vFI(this, "subsup", this.type, com.wiris.e1_a.vWP);
		s.vBI(this);
		this.superscriptshift = s.vnH("superscriptshift", this.superscriptshift, null);
		this.subscriptshift = s.vnH("subscriptshift", this.subscriptshift, null);
		s.v1I(this);
		s.v5I();
	},
	vXP: function(v1A, b, vYP) {
		var vZP;
		var vaP;
		var middle = this.type == com.wiris.e1_a.vUP ? v1A.getLength(0.4) : v1A.getLength(0.3);
		if (vYP != null) {
			vZP = vYP.viK();
			vaP = vYP.vQK(v1A, com.wiris.e1_M.vbP);
		} else {
			vZP = v1A.getLength(0.25);
			vaP = 0;
		};
		var vcP = vZP + vaP;
		var top = vcP - b.baseline;
		top = com.wiris.common.WInteger.max(-middle, top);
		vcP = top + b.baseline;
		vcP += v1A.getLength(v1A.getXHeight() - 0.4);
		if (this.subscriptshift != null) vcP += com.wiris.editor.formula.Styles.vYC(v1A, this.subscriptshift, 0);
		else vcP += this.vdP;
		return vcP;
	},
	veP: function(v1A, b, vYP) {
		var vfP;
		var vaP;
		var middle = v1A.getLength(0.25);
		if (vYP != null) {
			vfP = vYP.baseline;
			vaP = vYP.vQK(v1A, com.wiris.e1_M.vgP);
		} else {
			vfP = v1A.getLength(0.75);
			vaP = 0;
		};
		var vhP = -(vfP - Math.floor(Math.round(b.height * 0.6))) + vaP;
		var bottom = vhP + b.viK();
		bottom = com.wiris.common.WInteger.min(bottom, -middle);
		vhP = bottom - b.viK();
		vhP += v1A.getLength(v1A.getXHeight() - 0.4);
		if (this.superscriptshift != null) vhP -= com.wiris.editor.formula.Styles.vYC(v1A, this.superscriptshift, 0);
		else vhP -= this.viP;
		return vhP;
	},
	vIC: function() {
		var b;
		b = new com.wiris.e1_a();
		b.type = this.type;
		this.veK(b);
		return b;
	},
	vjP: function() {
		if (this.vn7 > 0) {
			var vYP = this.getParent().getChild(this.vn7 - 1);
			return vYP;
		};
		return null;
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
	},
	v7G: function(v1A) {
		if (!this.getParent().vED) this.v2G = true;
		else {
			this.viP = v1A.getDefaultStyles().vLB("superscript-shift", 0, v1A);
			this.vdP = v1A.getDefaultStyles().vLB("subscript-shift", 0, v1A);
			this.vYP = this.vjP();
			var vkP = new Array();
			if (this.type == com.wiris.e1_a.vUP || this.type == com.wiris.e1_a.vWP) {
				if(this.getChild(0)){
					this.getChild(0).x = this.vYP != null ? this.vYP.vQK(v1A, this.alignRight ? com.wiris.e1_M.vlP : com.wiris.e1_M.vmP) : 0;
					vkP[0] = this.vXP(v1A, this.getChild(0), this.vYP);
				}
			};
			if (this.type == com.wiris.e1_a.vVP || this.type == com.wiris.e1_a.vWP) {
				var vH4 = this.type == com.wiris.e1_a.vWP ? 1 : 0;
				if(this.getChild(vH4)){
					this.getChild(vH4).x = this.vYP != null ? this.vYP.vQK(v1A, this.alignRight ? com.wiris.e1_M.vnP : com.wiris.e1_M.voP) : 0;
					vkP[vH4] = this.veP(v1A, this.getChild(vH4), this.vYP);
				}
			};
			this.width = 0;
			var i;
			var vd1 = 0,
				vc1 = this.vN8();
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.width = com.wiris.common.WInteger.max(this.width, this.getChild(vW9).width + this.getChild(vW9).x);
			};
			if (this.alignRight) {
				var vd1 = 0,
					vc1 = this.vN8();
				while (vd1 < vc1) {
					var vW9 = vd1++;
					this.getChild(vW9).x += this.width - this.getChild(vW9).width;
				}
			};
			com.wiris.editor.formula.box.BoxUtils.v5L(v1A, this, vkP);
		}
	},
	vdP: null,
	viP: null,
	subscriptshift: null,
	superscriptshift: null,
	alignRight: null,
	vYP: null,
	type: null,
	__class__: com.wiris.e1_a
});