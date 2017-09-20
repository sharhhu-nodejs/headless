com.wiris.e1_P = v91["com.wiris.e1_P"] = function() {
	com.wiris.e1_O.call(this);
	this.selection = 0;
};
com.wiris.e1_P.__name__ = ["com", "wiris", "e1_P"];
com.wiris.e1_P.__super__ = com.wiris.e1_O;
com.wiris.e1_P.prototype = vB1(com.wiris.e1_O.prototype, {
	vQE: function() {
		return this.vwK != null;
	},
	viF: function() {
		return this.vQE() ? this : null;
	},
	getSelectionRectangles: function(vEA, vnA, v73) {
		var voK = new Array();
		voK.push(com.wiris.e1_7.vD7(0, 0, this.width, this.height));
		return voK;
	},
	vSF: function(x, selection) {
		return !selection;
	},
	vg3: function(vEA, vnA, left, right) {
		return com.wiris.e1_Y.vxK(this, vEA, vnA, left, right);
	},
	vIC: function() {
		var b;
		b = new com.wiris.e1_P();
		this.veK(b);
		return b;
	},
	vmK: function() {
		return this.vQE() ? 1 : 0;
	},
	vwB: function(s) {
		s.vAI(this, "maction");
		this.actiontype = s.vnH("actiontype", this.actiontype, null);
		if (com.wiris.e1_P.vyK == this.actiontype) {
			if ((s.mode == com.wiris.e1_I.vkE || s.mode == com.wiris.e1_I.vII || s.mode == com.wiris.e1_I.vfG) && this.vQE()) {
				s.vAI(this, "mtext");
				this.vwK = s.vsH(this.vwK, null);
				s.vu5("mtext");
			} else if ((s.mode == com.wiris.e1_I.viE || s.mode == com.wiris.e1_I.vGI) && s.v7I(this, "mtext")) {
				this.vwK = s.vsH(this.vwK, null);
				s.vu5("mtext");
			}
		};
		s.v1I(this);
		s.vu5("maction");
	},
	vEG: function(v1A, mode) {
		if (this.vQE()) v1A.drawText2(0, this.vwK, 0, 0, this.baseline);
	},
	vkK: function(v1A) {
		this.vEG(v1A, com.wiris.editor.formula.FormulaModel.vw3);
	},
	v7G: function(v1A) {
		if (this.vN8() > 0) {
			var c = this.getChild(0);
			this.height = c.height;
			this.width = c.width;
			this.baseline = c.baseline;
			c.x = 0;
			c.vQ1 = 0;
		} else if (this.vQE()) {
			this.width = v1A.getWidth(this.vwK);
			this.height = v1A.getHeight(this.vwK);
			this.baseline = v1A.getBaseline(this.vwK);
		}
	},
	vwK: null,
	selection: null,
	actiontype: null,
	__class__: com.wiris.e1_P
});