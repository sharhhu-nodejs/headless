com.wiris.e1_c = v91["com.wiris.e1_c"] = function() {
	com.wiris.e1_M.call(this);
};
com.wiris.e1_c.__name__ = ["com", "wiris", "e1_c"];
com.wiris.e1_c.__super__ = com.wiris.e1_M;
com.wiris.e1_c.prototype = vB1(com.wiris.e1_M.prototype, {
	vxF: function() {
		return true;
	},
	vIC: function() {
		var b;
		b = new com.wiris.e1_c();
		this.veK(b);
		return b;
	},
	vwB: function(s) {
		s.vAI(this, "p");
		s.v1I(this);
		s.vu5("p");
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
		if (this.vN8() == 0) this.vpC(new com.wiris.e1_h());
	},
	v7G: function(v1A) {
		this.width = this.getChild(0).width;
		this.height = this.getChild(0).height;
		this.baseline = this.getChild(0).baseline;
	},
	__class__: com.wiris.e1_c
});