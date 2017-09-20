com.wiris.e1_L = v91["com.wiris.e1_L"] = function() {};
com.wiris.e1_L.__name__ = ["com", "wiris", "e1_L"];
com.wiris.e1_L.v1F = function(i, vH4, mode) {
	var vtE = new com.wiris.e1_L();
	vtE.vEK = com.wiris.e1_L.vFK;
	vtE.vEA = i;
	vtE.vnA = vH4;
	vtE.mode = mode;
	return vtE;
};
com.wiris.e1_L.vzE = function(i, vH4, mode, b) {
	var vtE = new com.wiris.e1_L();
	vtE.vEK = com.wiris.e1_L.vGK;
	vtE.vEA = i;
	vtE.vnA = vH4;
	vtE.mode = mode;
	vtE.b = b;
	return vtE;
};
com.wiris.e1_L.vxE = function(vHK) {
	var vtE = new com.wiris.e1_L();
	vtE.vEK = com.wiris.e1_L.vIK;
	vtE.b = vHK;
	return vtE;
};
com.wiris.e1_L.v3F = function(vJK, vKK) {
	var vtE = new com.wiris.e1_L();
	vtE.vEK = com.wiris.e1_L.vLK;
	vtE.vJK = vJK;
	vtE.vKK = vKK;
	return vtE;
};
com.wiris.e1_L.prototype = {
	vuE: function(f) {
		if (this.vEK == com.wiris.e1_L.vGK) {
			f.vPF(this.vEA, this.vnA - this.vEA, this.mode);
			f.vBE(this.b, com.wiris.editor.formula.FormulaModel.vMK, 0, null, null);
		} else if (this.vEK == com.wiris.e1_L.vFK) {
			f.vPF(this.vEA, this.vnA - this.vEA, this.mode);
			f.vtD(false);
		} else if (this.vEK == com.wiris.e1_L.vLK) {
			this.vKK.vuE(f);
			this.vJK.vuE(f);
		} else if (this.vEK == com.wiris.e1_L.vIK) {
			if (this.b.getParent() == null) f.vwF(this.b, false);
			else f.replaceChild(this.b.getParent(), this.b.vn7, this.b);
		}
	},
	vKK: null,
	vJK: null,
	b: null,
	mode: null,
	vnA: null,
	vEA: null,
	vEK: null,
	__class__: com.wiris.e1_L
};