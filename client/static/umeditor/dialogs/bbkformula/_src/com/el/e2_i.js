com.wiris.e1_i = v91["com.wiris.e1_i"] = function() {
	com.wiris.e1_M.call(this);
};
com.wiris.e1_i.__name__ = ["com", "wiris", "e1_i"];
com.wiris.e1_i.__super__ = com.wiris.e1_M;
com.wiris.e1_i.prototype = vB1(com.wiris.e1_M.prototype, {
	vxF: function() {
		return true;
	},
	vIC: function() {
		var b;
		b = new com.wiris.e1_i();
		this.veK(b);
		return b;
	},
	vwB: function(s) {
		s.vAI(this, "math");
		if (!com.wiris.settings.PlatformSettings.vLR) s.vnH("xmlns", com.wiris.e1_i.vFJ, "");
		s.v1I(this);
		s.vu5("math");
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
	},
	v7G: function(v1A) {
		this.width = this.getChild(0).width;
		this.height = this.getChild(0).height;
		this.baseline = this.getChild(0).baseline;
	},
	__class__: com.wiris.e1_i
});