com.wiris.e1_g = v91["com.wiris.e1_g"] = function() {
	com.wiris.e1_N.call(this);
};
com.wiris.e1_g.__name__ = ["com", "wiris", "e1_g"];
com.wiris.e1_g.v1O = function(box, vEA, vnA, left, right) {
	var t;
	t = new com.wiris.e1_g();
	t.box = box;
	t.vEA = vEA;
	t.vnA = vnA;
	t.left = left;
	t.right = right;
	return t;
};
com.wiris.e1_g.__super__ = com.wiris.e1_N;
com.wiris.e1_g.prototype = vB1(com.wiris.e1_N.prototype, {
	vmC: function() {
		var t = new com.wiris.e1_f();
		t.vfE(this.box.vAQ(this.vEA, this.vnA));
		com.wiris.editor.formula.box.BoxUtils.vgK(this.box, t);
		return t;
	},
	vlK: function() {
		this.vnA = this.box.vLE() - 1;
		return true;
	},
	vnK: function() {
		this.vEA = -1;
		return true;
	},
	vsE: function() {
		return true;
	},
	vpE: function() {
		return com.wiris.editor.formula.box.BoxUtils.vhG(this.box) + this.vnA;
	},
	vqE: function() {
		return com.wiris.editor.formula.box.BoxUtils.vhG(this.box) + this.vEA;
	},
	vf3: function() {
		return this.box;
	},
	deleteSelection: function(v4F) {
		this.box.vfE(this.box.vkN(this.vEA) + this.box.vlN(this.vnA));
		this.vnA = this.vEA;
		this.box.vhK();
		return true;
	},
	vVD: function(b) {
		var t;
		t = js.Boot.vX3(b, com.wiris.e1_f);
		this.box.vfE(this.box.vkN(this.vEA) + t.vM8() + this.box.vlN(this.vnA));
		this.vnA = this.vEA + t.vLE();
		this.box.vhK();
	},
	box: null,
	__class__: com.wiris.e1_g
});