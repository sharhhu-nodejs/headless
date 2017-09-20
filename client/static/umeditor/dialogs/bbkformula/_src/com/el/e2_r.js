com.wiris.e1_r = v91["com.wiris.e1_r"] = function() {
	this.v3S = new Array();
};
com.wiris.e1_r.__name__ = ["com", "wiris", "e1_r"];
com.wiris.e1_r.getNewInstance = function(panel, vx6) {
	var v4S = new com.wiris.e1_r();
	var i = HxOverrides.iter(panel.v3S);
	while (i.hasNext()) {
		var v5S = com.wiris.e1_s.getNewInstance(i.next(), vx6);
		v4S.vQ6(v5S);
	};
	return v4S;
};
com.wiris.e1_r.prototype = {
	v67: function(vd3) {
		this.v3S.splice(vd3, 1);
	},
	vu6: function(vd3) {
		return this.v3S[vd3];
	},
	vl6: function() {
		return this.v3S.length;
	},
	vm6: function(section, index) {
		this.v3S.splice(index, 0, section);
	},
	vQ6: function(section) {
		this.v3S.push(section);
	},
	v3S: null,
	__class__: com.wiris.e1_r
};