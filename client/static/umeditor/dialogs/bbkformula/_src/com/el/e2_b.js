com.wiris.e1_b = v91["com.wiris.e1_b"] = function() {
	com.wiris.e1_a.call(this);
	this.alignRight = true;
};
com.wiris.e1_b.__name__ = ["com", "wiris", "e1_b"];
com.wiris.e1_b.__super__ = com.wiris.e1_a;
com.wiris.e1_b.prototype = vB1(com.wiris.e1_a.prototype, {
	vIC: function() {
		var b;
		b = new com.wiris.e1_b();
		b.type = this.type;
		this.veK(b);
		return b;
	},
	vwB: function(s) {
		s.vDI();
		this.type = s.vFI(this, "presub", this.type, com.wiris.e1_a.vUP);
		this.type = s.vFI(this, "presup", this.type, com.wiris.e1_a.vVP);
		this.type = s.vFI(this, "presubsup", this.type, com.wiris.e1_a.vWP);
		s.vBI(this);
		s.v1I(this);
		s.v5I();
	},
	vjP: function() {
		var p = this.getParent();
		if (this.vn7 + 1 < p.vN8()) {
			var vYP = this.getParent().getChild(this.vn7 + 1);
			return vYP;
		};
		return null;
	},
	__class__: com.wiris.e1_b
});