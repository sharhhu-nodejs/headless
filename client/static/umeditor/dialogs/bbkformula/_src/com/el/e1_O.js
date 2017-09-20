com.wiris.e1_O = v91["com.wiris.e1_O"] = function() {
	com.wiris.e1_M.call(this);
	this.vmF = false;
	this.vjF = false;
};
com.wiris.e1_O.__name__ = ["com", "wiris", "e1_O"];
com.wiris.e1_O.__super__ = com.wiris.e1_M;
com.wiris.e1_O.prototype = vB1(com.wiris.e1_M.prototype, {
	vcK: function() {
		if (this.vPK) return;
		com.wiris.e1_M.prototype.vcK.call(this);
		this.vUF += this.vmK();
	},
	vrK: function(vEA) {
		return null;
	},
	getSelectionRectangles: function(vEA, vnA, v73) {
		console.log('selection: com.wiris.e1_O.prototype');
		return null;
	},
	vgF: function(x, vX9) {
		var c = x;
		var n = this.vN8();
		if (c >= n) c = n - 1;
		var p = this.vsK(c, vX9);
		while (p > x && c >= 0) {
			c--;
			if (c >= 0) p = this.vsK(c, vX9);
		};
		while (p < x && c < n) {
			c++;
			if (c < n) p = this.vsK(c, vX9);
		};
		if (p == x) return c;
		return -1;
	},
	vsK: function(vTB, vX9) {
		if (vX9 > 0) return this.vtK(vTB) - 1;
		else return this.vtK(vTB);
	},
	vtK: function(vTB) {
		return 0;
	},
	vuK: function(x) {
		if (x < 0 || x >= this.vmK()) throw "Invalid position";
		return com.wiris.e1_R.vvK(this, x);
	},
	vSF: function(x, selection) {
		return false;
	},
	vg3: function(vEA, vnA, left, right) {
		return null;
	},
	vmK: function() {
		return 0;
	},
	viF: function() {
		return this;
	},
	vjF: null,
	vmF: null,
	__class__: com.wiris.e1_O
});