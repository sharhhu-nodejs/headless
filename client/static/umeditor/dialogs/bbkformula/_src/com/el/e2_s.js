com.wiris.e1_s = v91["com.wiris.e1_s"] = function(layout, extraLayout, rows) {
	this.v6S = new Array();
	this.extraLayout = extraLayout;
	this.layout = layout;
	this.v7S = new Array();
	this.rows = rows;
	this.extraRows = rows;
	this.v56 = true;
	this.v8S = 0;
	this.v9S = 0;
	this.context = null;
};
com.wiris.e1_s.__name__ = ["com", "wiris", "e1_s"];
com.wiris.e1_s.getNewInstance = function(section, vx6) {
	var v5S = new com.wiris.e1_s(section.layout, section.extraLayout, section.rows);
	v5S.extraRows = section.extraRows;
	v5S.v56 = section.v56;
	v5S.context = section.context;
	var i = HxOverrides.iter(section.v7S);
	while (i.hasNext()) {
		var vAS = i.next().copy();
		vAS.vx6 = vx6;
		v5S.v66(vAS, false);
	};
	i = HxOverrides.iter(section.v6S);
	while (i.hasNext()) {
		var vAS = i.next().copy();
		vAS.vx6 = vx6;
		v5S.v66(vAS, true);
	};
	return v5S;
};
com.wiris.e1_s.prototype = {
	vg6: function(v07, extra) {
		if (extra) this.v6S.splice(v07, 1);
		else this.v7S.splice(v07, 1);
	},
	v17: function(extra) {
		if (extra) return this.v6S.length;
		return this.v7S.length;
	},
	v27: function(v07, extra) {
		if (extra) return this.v6S[v07];
		return this.v7S[v07];
	},
	v37: function(vl4, index, extra) {
		if (extra) {
			this.v6S.splice(index, 0, vl4);
			if (vl4.v56)++this.v9S;
		} else {
			this.v7S.splice(index, 0, vl4);
			if (vl4.v56)++this.v8S;
		}
	},
	v66: function(vl4, extra) {
		if (extra) {
			this.v6S.push(vl4);
			if (vl4.v56)++this.v9S;
		} else {
			this.v7S.push(vl4);
			if (vl4.v56)++this.v8S;
		}
	},
	context: null,
	v9S: null,
	v8S: null,
	v56: null,
	extraRows: null,
	rows: null,
	layout: null,
	v7S: null,
	extraLayout: null,
	v6S: null,
	__class__: com.wiris.e1_s
};