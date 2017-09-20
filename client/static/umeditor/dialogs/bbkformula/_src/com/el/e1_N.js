com.wiris.e1_N = v91["com.wiris.e1_N"] = function() {
	this.mode = 0;
};
com.wiris.e1_N.__name__ = ["com", "wiris", "e1_N"];
com.wiris.e1_N.prototype = {
	v9F: function() {
		return this.mode;
	},
	setMode: function(m) {
		this.mode = m;
	},
	vAF: function() {
		return false;
	},
	vmC: function() {
		return null;
	},
	vlK: function() {
		if (this.left != null) this.left.vlK();
		this.vnA = this.vf3().vmK() - 1;
		return true;
	},
	vnK: function() {
		if (this.right != null) this.right.vnK();
		this.vEA = 0;
		return true;
	},
	vvC: function(v73) {
		var voK;
		var vpK;
		var p;
		var i;
		voK = new Array();
		if (this.left != null) voK = voK.concat(this.left.vvC(v73));
		vpK = this.vf3().getSelectionRectangles(this.vEA, this.vnA, v73);
		p = com.wiris.editor.formula.box.BoxUtils.vqK(null, this.vf3());
		var vd1 = 0,
			vc1 = vpK.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			vpK[vW9].x += p.x;
			vpK[vW9].vQ1 += p.vQ1;
		};
		voK = voK.concat(vpK);
		if (this.right != null) voK = voK.concat(this.right.vvC(v73));
		return voK;
	},
	vpE: function() {
		return 0;
	},
	vqE: function() {
		return 0;
	},
	vsE: function() {
		return false;
	},
	vf3: function() {
		return null;
	},
	deleteSelection: function(v4F) {
		return false;
	},
	vVD: function(box) {},
	mode: null,
	vnA: null,
	vEA: null,
	right: null,
	left: null,
	__class__: com.wiris.e1_N
};