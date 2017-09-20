com.wiris.e1_m = v91["com.wiris.e1_m"] = function(vx6, action, vK5, vmR) {
	com.wiris.e1_k.call(this, vx6, action);
	this.value = vmR;
	this.vK5 = vK5;
};
com.wiris.e1_m.__name__ = ["com", "wiris", "e1_m"];
com.wiris.e1_m.__super__ = com.wiris.e1_k;
com.wiris.e1_m.prototype = vB1(com.wiris.e1_k.prototype, {
	vdR: function() {
		return this;
	},
	vnR: function(color) {
		this.vXR(color);
		this.vx6.vlR(this);
	},
	copy: function() {
		var vkR = new com.wiris.e1_m(this.vx6, this.action, this.vK5, this.value);
		vkR.enabled = this.enabled;
		vkR.v56 = this.v56;
		return vkR;
	},
	vYR: function(value) {
		return true;
	},
	__class__: com.wiris.e1_m
});