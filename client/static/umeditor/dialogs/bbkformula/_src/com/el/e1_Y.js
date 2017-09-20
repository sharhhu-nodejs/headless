com.wiris.e1_Y = v91["com.wiris.e1_Y"] = function() {
	com.wiris.e1_N.call(this);
};
com.wiris.e1_Y.__name__ = ["com", "wiris", "e1_Y"];
com.wiris.e1_Y.vxK = function(box, vEA, vnA, left, right) {
	var t;
	t = new com.wiris.e1_Y();
	t.box = box;
	t.vEA = vEA;
	t.vnA = vnA;
	t.left = left;
	t.right = right;
	return t;
};
com.wiris.e1_Y.vTP = function(vtN) {
	return null;
};
com.wiris.e1_Y.__super__ = com.wiris.e1_N;
com.wiris.e1_Y.prototype = vB1(com.wiris.e1_N.prototype, {
	vmC: function() {
		var t = new com.wiris.e1_h();
		var i;
		if (this.left != null) t.vpC(this.left.vmC());
		var vd1 = this.vEA,
			vc1 = this.vnA;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			t.vpC(this.box.getChild(vW9).vIC());
		};
		if (this.right != null) t.vpC(this.right.vmC());
		com.wiris.editor.formula.box.BoxUtils.vgK(this.box, t);
		return t;
	},
	vsE: function() {
		return this.box.vSF(this.vEA, false);
	},
	vpE: function() {
		if (this.right != null) return this.right.vpE();
		var x = 0;
		var i;
		var vd1 = 0,
			vc1 = this.vnA;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			x += com.wiris.editor.formula.box.BoxUtils.vsC(this.box.getChild(vW9));
		};
		return x + com.wiris.editor.formula.box.BoxUtils.vhG(this.box) + this.vnA;
	},
	vqE: function() {
		if (this.left != null) return this.left.vqE();
		var x = 0;
		var i;
		var vd1 = 0,
			vc1 = this.vEA;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			x += com.wiris.editor.formula.box.BoxUtils.vsC(this.box.getChild(vW9));
		};
		return x + com.wiris.editor.formula.box.BoxUtils.vhG(this.box) + this.vEA;
	},
	vf3: function() {
		return this.box;
	},
	deleteSelection: function(v4F) {
		if (this.left != null) this.left.deleteSelection(v4F);
		if (this.right != null) this.right.deleteSelection(v4F);
		this.box["delete"](this.vEA, this.vnA - this.vEA);
		this.vnA = this.vEA;
		this.box.vhK();
		return true;
	},
	vVD: function(b) {
		var n;
		var i;
		n = b.vN8();
		var m = this.box.vN8();
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			var c = b.getChild(n - vW9 - 1);
			var vCD = c.styles.vA3();
			c.styles.vJ2(b.styles);
			c.styles.vJ2(vCD);
			this.box.vVD(this.vEA, c);
		};
		this.vnA = this.vEA + this.box.vN8() - m;
		this.box.vhK();
	},
	box: null,
	__class__: com.wiris.e1_Y
});