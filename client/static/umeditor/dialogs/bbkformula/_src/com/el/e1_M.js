com.wiris.e1_M = v91["com.wiris.e1_M"] = function() {
	this.vNK = new Array();
	this.styles = new com.wiris.e1_2();
	this.x = this.vQ1 = 0;
	this.vOK = false;
	this.vPK = false;
	this.vED = false;
	this.vrF = true;
	this.v2G = false;
};
com.wiris.e1_M.__name__ = ["com", "wiris", "e1_M"];
com.wiris.e1_M.prototype = {
	vLC: function() {
		return false;
	},
	vK8: function() {
		return false;
	},
	vxF: function() {
		return false;
	},
	vRB: function() {
		return false;
	},
	vQK: function(v1A, vRK) {
		return 0;
	},
	vSK: function() {
		return false;
	},
	viF: function() {
		return null;
	},
	vTK: function(vn7) {
		return false;
	},
	vUK: function(vVK, position) {
		var b = this.vWK(vVK, position);
		if (vVK == com.wiris.e1_M.vXK) return b.width;
		if (vVK == com.wiris.e1_M.vYK) return b.height;
		return b.baseline;
	},
	vWK: function(vVK, position) {
		return this.getChild(position);
	},
	v3D: function() {
		this.vrF = true;
		this.vZK();
		this.vkF();
	},
	voC: function(a, vN7, rec) {
		if (vN7) this.styles = com.wiris.e1_2.join(this.styles, a);
		else this.styles = com.wiris.e1_2.join(a, this.styles); if (rec) {
			var vaK = com.wiris.e1_2.vF2(a);
			vaK.vu2(com.wiris.e1_2.v03);
			var i;
			var vd1 = 0,
				vc1 = this.vN8();
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.getChild(vW9).voC(vaK, vN7, rec);
			}
		};
		this.v3D();
	},
	vZK: function() {
		if (!this.vqF) return;
		this.vqF = false;
		if (this.getParent() != null) this.getParent().vZK();
	},
	vkF: function() {
		if (!this.vED) return;
		this.vED = false;
		if (this.getParent() != null) this.getParent().vkF();
	},
	vbK: function() {
		if (!this.vPK) return;
		this.vPK = false;
		if (this.getParent() != null) this.getParent().vbK();
	},
	vWC: function() {
		this.vbK();
		this.vkF();
		this.vZK();
		this.vrF = true;
	},
	vcK: function() {
		if (this.vPK) return;
		var i;
		this.vUF = 0;
		var vd1 = 0,
			vc1 = this.vN8();
		while (vd1 < vc1) {
			var vW9 = vd1++;
			var vpF = this.getChild(vW9);
			vpF.vcK();
			this.vUF += vpF.vUF;
		};
		this.vPK = true;
	},
	vdK: function() {
		var i;
		var parent = this.getParent();
		i = 0;
		while (parent != null) {
			i++;
			parent = parent.getParent();
		};
		return i;
	},
	vIC: function() {
		return null;
	},
	veK: function(b) {
		var i;
		b.x = this.x;
		b.vQ1 = this.vQ1;
		b.width = this.width;
		b.height = this.height;
		b.baseline = this.baseline;
		b.vn7 = this.vn7;
		b.parent = this.parent;
		com.wiris.editor.formula.box.BoxUtils.vfK(this, b);
		com.wiris.editor.formula.box.BoxUtils.vgK(this, b);
		var n = this.vN8();
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			b.vpC(this.getChild(vW9).vIC());
		}
	},
	vyF: function() {},
	vhK: function() {},
	vwB: function(s) {
		s.v1I(this);
	},
	getParent: function() {
		return this.parent;
	},
	viK: function() {
		return this.height - this.baseline;
	},
	getChild: function(i) {
		return this.vNK[i];
	},
	vN8: function() {
		return this.vNK.length;
	},
	vjK: function() {
		var i;
		var vd1 = 0,
			vc1 = this.vNK.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			this.vNK[vW9].vn7 = vW9;
			this.vNK[vW9].parent = this;
		};
		if (!this.vOK) {
			this.vOK = true;
			this.vyF();
			this.vOK = false;
		};
		this.vWC();
	},
	vpC: function(b) {
		this.vVD(this.vN8(), b);
	},
	replace: function(i, vRD) {
		vRD.vrF = true;
		var vHK;
		vHK = this.getChild(i);
		this.vNK.splice(i, 1);
		this.vNK.splice(i, 0, vRD);
		vRD.vn7 = i;
		vRD.parent = this;
		vHK.vn7 = 0;
		vHK.parent = null;
		this.vjK();
		return vHK;
	},
	'delete': function(i, len) {
		var vQA;
		vQA = this.vNK.splice(i, len);
		var vH4 = HxOverrides.iter(vQA);
		while (vH4.hasNext()) {
			var b = vH4.next();
			b.vn7 = 0;
			b.parent = null;
		};
		this.vjK();
		return vQA;
	},
	vVD: function(i, b) {
		b.vrF = true;
		this.vNK.splice(i, 0, b);
		this.vjK();
	},
	vEG: function(v1A, mode) {
		this.vkK(v1A);
	},
	vkK: function(v1A) {},
	vuF: function() {},
	v6G: function(v1A, mode) {
		this.v7G(v1A);
	},
	v7G: function(v1A) {},
	v2G: null,
	vrF: null,
	vqF: null,
	vED: null,
	vUF: null,
	vPK: null,
	v08: null,
	styles: null,
	vOK: null,
	vn7: null,
	parent: null,
	baseline: null,
	height: null,
	width: null,
	vQ1: null,
	x: null,
	vNK: null,
	__class__: com.wiris.e1_M
};