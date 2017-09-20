com.wiris.e1_d = v91["com.wiris.e1_d"] = function() {
	com.wiris.e1_M.call(this);
};
com.wiris.e1_d.__name__ = ["com", "wiris", "e1_d"];
com.wiris.e1_d.__super__ = com.wiris.e1_M;
com.wiris.e1_d.prototype = vB1(com.wiris.e1_M.prototype, {
	vIC: function() {
		var b;
		b = new com.wiris.e1_d();
		b.type = this.type;
		this.veK(b);
		return b;
	},
	vwB: function(s) {
		s.vDI();
		this.type = s.vFI(this, "msqrt", this.type, com.wiris.e1_d.vpP);
		this.type = s.vFI(this, "mroot", this.type, com.wiris.e1_d.vqP);
		s.vBI(this);
		s.vzH(this);
		s.v5I();
	},
	vkK: function(v1A) {
		var vrP = this.type == com.wiris.e1_d.vqP ? 1 : 0;
		var vX9 = this.vsP - this.getChild(vrP).height;
		var v1M = new com.wiris.e1_K();
		v1M.vy9(v1A, com.wiris.editor.formula.WCharacter.vc9, 0, this.getChild(vrP).vQ1 - vX9, this.vsP - this.vQ9, this.vtP, this.vsP);
		v1A.drawHorizontalLine(1, this.vtP, this.height - this.vsP, this.width - this.vtP);
	},
	v7G: function(v1A) {
		var vuP = v1A.getDefaultStyles().vLB("radical-gap", 0, v1A);
		var vrP = this.type == com.wiris.e1_d.vpP ? 0 : 1;
		this.vQ9 = v1A.getLength(0.1);
		var vvP = v1A.getWidth(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vc9));
		this.vtP = vvP;
		if (this.type == com.wiris.e1_d.vqP) {
			var vX9 = this.getChild(0).width - Math.floor(Math.round(this.vtP * 0.6));
			if (vX9 > 0) {
				this.vtP += vX9;
				this.getChild(0).x = 0;
			} else this.getChild(0).x = -vX9;
		};
		// var vwP = this.getChild(vrP).width + 2 * this.vQ9;
		var vwP = this.getChild(vrP) && this.getChild(vrP).width;
		vwP = vwP ? vwP : 0 + 2 * this.vQ9;
		
		this.width = this.vtP + vwP;
		this.getChild(vrP).x = this.vtP + this.vQ9;
		var vxP = new Array();
		this.vsP = new com.wiris.e1_K().vq9(v1A, vvP, this.getChild(vrP).height + vuP, com.wiris.editor.formula.WCharacter.vc9, com.wiris.e1_K.vlJ);
		if (this.type == com.wiris.e1_d.vqP) {
			var vSJ = com.wiris.common.WInteger.min(this.vsP, v1A.getHeight(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vd9)));
			var vyP = Math.floor(Math.round(0.6 * (vSJ - 1))) + (this.vsP - vSJ);
			var vzP = vyP - (this.vsP - this.getChild(vrP).height);
			var v0Q = this.getChild(vrP).baseline - vzP;
			var v6B = v0Q + this.getChild(0).viK();
			vxP.push(-v6B);
		};
		vxP.push(0);
		com.wiris.editor.formula.box.BoxUtils.v5L(v1A, this, vxP);
		com.wiris.editor.formula.box.BoxUtils.vAL(this, vrP, 2 * this.vQ9);
		this.height += vuP;
		this.baseline += vuP;
		if (this.type == com.wiris.e1_d.vqP) this.getChild(1).vQ1 += vuP;
		else this.getChild(0).vQ1 += vuP;
	},
	type: null,
	vQ9: null,
	vsP: null,
	vtP: null,
	__class__: com.wiris.e1_d
});