com.wiris.e1_q = v91["com.wiris.e1_q"] = function(vx6, action, vK5, icon) {
	com.wiris.e1_l.call(this, vx6, vK5, icon);
	this.action = action;
};
com.wiris.e1_q.__name__ = ["com", "wiris", "e1_q"];
com.wiris.e1_q.__super__ = com.wiris.e1_l;
com.wiris.e1_q.prototype = vB1(com.wiris.e1_l.prototype, {
	v2S: function(rows, vt4) {
		this.vXR(rows + ":" + vt4);
		this.vx6.vlR(this);
	},
	click: function() {
		this.vXR("3:3");
		this.vx6.vlR(this);
	},
	vYR: function(value) {
		return true;
	},
	veR: function() {
		return this;
	},
	copy: function() {
		var vkR = new com.wiris.e1_q(this.vx6, this.action, this.vK5, this.icon);
		vkR.enabled = this.enabled;
		vkR.value = this.value;
		vkR.v56 = this.v56;
		return vkR;
	},
	__class__: com.wiris.e1_q
});