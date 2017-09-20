com.wiris.e1_u = v91["com.wiris.e1_u"] = function(vx6, id, title, vD6, vE6) {
	this.id = id;
	this.panel = new com.wiris.e1_r();
	this.vD6 = vD6;
	this.v97 = vD6;
	this.vF6 = null;
	this.title = title;
	this.vE6 = vE6;
	this.vA7 = vE6;
	this.vG6 = null;
	this.v56 = true;
	this.vx6 = vx6;
	this.enabled = true;
};
com.wiris.e1_u.__name__ = ["com", "wiris", "e1_u"];
com.wiris.e1_u.getNewInstance = function(tab, vx6) {
	var vBS = new com.wiris.e1_u(vx6, tab.id, tab.title, tab.v97, tab.vA7);
	vBS.vF6 = tab.vF6;
	vBS.vG6 = tab.vG6;
	vBS.panel = com.wiris.e1_r.getNewInstance(tab.panel, vx6);
	vBS.v56 = tab.v56;
	vBS.enabled = tab.enabled;
	return vBS;
};
com.wiris.e1_u.prototype = {
	vaR: function(enabled) {
		if (enabled != this.enabled) {
			this.enabled = enabled;
			this.vx6.vCS(this);
		}
	},
	vU7: function(ltr) {
		var vDS = this.vD6;
		if (ltr || this.vF6 == null) this.vD6 = this.v97;
		else this.vD6 = this.vF6;
		var vES = this.vE6;
		if (ltr || this.vG6 == null) this.vE6 = this.vA7;
		else this.vE6 = this.vG6; if (vDS != this.vD6 || vES != this.vE6) this.vx6.vCS(this);
	},
	empty: function() {
		this.panel = new com.wiris.e1_r();
	},
	enabled: null,
	vx6: null,
	v56: null,
	vG6: null,
	vA7: null,
	vE6: null,
	title: null,
	vF6: null,
	v97: null,
	vD6: null,
	panel: null,
	id: null,
	__class__: com.wiris.e1_u
};