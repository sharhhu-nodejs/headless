com.wiris.e1_R = v91["com.wiris.e1_R"] = function() {};
com.wiris.e1_R.__name__ = ["com", "wiris", "e1_R"];
com.wiris.e1_R.vvK = function(b, x) {
	if (x < 0 || x >= b.vmK()) throw "Invalid position";
	var vlD;
	vlD = new com.wiris.e1_R();
	vlD.b = b;
	vlD.x = x;
	return vlD;
};
com.wiris.e1_R.vzK = function(b, vX9) {
	var parent = b.getParent();
	if (parent == null) return null;
	var v0L = parent.viF();
	if (v0L == null) {
		if (0 <= b.vn7 + vX9 && b.vn7 + vX9 < parent.vN8()) return com.wiris.e1_R.vmD(parent.getChild(b.vn7 + vX9), vX9);
		return com.wiris.e1_R.vzK(parent, vX9);
	};
	return com.wiris.e1_R.v1L(v0L, b.vn7, vX9);
};
com.wiris.e1_R.v1L = function(b, vn7, vX9) {
	var vQ1;
	vQ1 = b.vsK(vn7, -vX9);
	if (vQ1 >= 0) return com.wiris.e1_R.vvK(b, vQ1);
	return com.wiris.e1_R.vzK(b, vX9);
};
com.wiris.e1_R.v2L = function(b, x, vX9) {
	var vNG = null;
	if (0 <= x + vX9 && x + vX9 < b.vmK()) vNG = com.wiris.e1_R.vvK(b, x + vX9);
	else vNG = null;
	var veB = b.vgF(x, vX9);
	if (veB != -1) {
		var vW9 = vNG.b.vgF(vNG.x, vX9);
		if (veB == vW9 && vNG != null) return vNG;
		else return com.wiris.e1_R.vmD(b.getChild(veB), vX9);
	};
	if (vNG != null) return vNG;
	return com.wiris.e1_R.vzK(b, vX9);
};
com.wiris.e1_R.vmD = function(b, vX9) {
	var v5G = b.viF();
	if (v5G != null) {
		var n = v5G.vmK();
		if (n > 0) {
			if (vX9 > 0) return com.wiris.e1_R.vvK(v5G, 0);
			else return com.wiris.e1_R.vvK(v5G, n - 1);
		}
	};
	var v3L = b.vN8();
	if (v3L > 0) {
		if (vX9 > 0) return com.wiris.e1_R.vmD(b.getChild(0), vX9);
		else return com.wiris.e1_R.vmD(b.getChild(v3L - 1), vX9);
	};
	return com.wiris.e1_R.vzK(b, vX9);
};
com.wiris.e1_R.prototype = {
	v4L: function() {
		return com.wiris.e1_R.v2L(this.b, this.x, -1);
	},
	next: function() {
		return com.wiris.e1_R.v2L(this.b, this.x, 1);
	},
	vg3: function() {
		return this.b.vg3(this.x, this.x, null, null);
	},
	vnD: function() {
		var x = 0;
		var i;
		var vc1 = 0;
		while (vc1 < x) {
			var vW9 = vc1++;
			x += com.wiris.editor.formula.box.BoxUtils.vsC(this.b.getChild(vW9));
		};
		return x + com.wiris.editor.formula.box.BoxUtils.vhG(this.b) + x;
	},
	x: null,
	b: null,
	__class__: com.wiris.e1_R
};