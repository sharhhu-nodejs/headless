com.wiris.e1_e = v91["com.wiris.e1_e"] = function() {
	com.wiris.e1_M.call(this);
};
com.wiris.e1_e.__name__ = ["com", "wiris", "e1_e"];
com.wiris.e1_e.__super__ = com.wiris.e1_M;
com.wiris.e1_e.prototype = vB1(com.wiris.e1_M.prototype, {
	vIC: function() {
		var b;
		b = new com.wiris.e1_e();
		this.veK(b);
		return b;
	},
	v7G: function(v1A) {
		this.width = com.wiris.editor.formula.Styles.vYC(v1A, this.v1Q, 0);
		this.baseline = com.wiris.editor.formula.Styles.vYC(v1A, this.v2Q, 0);
		this.height = this.baseline + com.wiris.editor.formula.Styles.vYC(v1A, this.v3Q, 0);
	},
	vwB: function(s) {
		s.vAI(this, "mspace");
		this.v1Q = s.vnH("width", this.v1Q, "0em");
		this.v2Q = s.vnH("height", this.v2Q, "0ex");
		this.v3Q = s.vnH("depth", this.v3Q, "0ex");
		this.linebreak = s.vnH("linebreak", this.linebreak, "auto");
		s.vu5("mspace");
	},
	linebreak: null,
	v3Q: null,
	v2Q: null,
	v1Q: null,
	__class__: com.wiris.e1_e
});