com.wiris.e1_U = v91["com.wiris.e1_U"] = function() {
	com.wiris.e1_M.call(this);
};
com.wiris.e1_U.__name__ = ["com", "wiris", "e1_U"];
com.wiris.e1_U.__super__ = com.wiris.e1_M;
com.wiris.e1_U.prototype = vB1(com.wiris.e1_M.prototype, {
	vIC: function() {
		var vyM;
		vyM = new com.wiris.e1_U();
		this.veK(vyM);
		return vyM;
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
	},
	vwB: function(s) {
		s.vAI(this, "merror");
		s.v1I(this);
		s.vu5("merror");
	},
	v7G: function(v1A) {
		var vTB = this.getChild(0);
		this.width = vTB.width;
		this.height = vTB.height;
		this.baseline = vTB.baseline;
	},
	vkK: function(v1A) {
		v1A.setColor(com.wiris.e1_U.vzM);
		v1A.fillRect(0, 0, this.width, this.height);
		com.wiris.e1_M.prototype.vkK.call(this, v1A);
	},
	__class__: com.wiris.e1_U
});