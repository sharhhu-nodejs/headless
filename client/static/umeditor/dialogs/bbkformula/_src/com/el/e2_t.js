com.wiris.e1_t = v91["com.wiris.e1_t"] = function(vx6, action, vK5, icon, options, vm5) {
	com.wiris.e1_k.call(this, vx6, action);
	this.action = action;
	this.options = options;
	this.vK5 = vK5;
	this.icon = icon;
	this.value = null;
	if (this.vYR(this.value)) this.value = vm5;
	if (this.value == null) {
		var i = this.options.keys();
		if (i.hasNext()) this.value = i.next();
	}
};
com.wiris.e1_t.__name__ = ["com", "wiris", "e1_t"];
com.wiris.e1_t.__super__ = com.wiris.e1_k;
com.wiris.e1_t.prototype = vB1(com.wiris.e1_k.prototype, {
	select: function(option) {
		this.vXR(option);
		this.vx6.vlR(this);
	},
	vbR: function() {
		return this;
	},
	vYR: function(value) {
		return value != null && this.options.exists(value);
	},
	copy: function() {
		var vkR = new com.wiris.e1_t(this.vx6, this.action, this.vK5, this.icon, this.options, this.value);
		vkR.enabled = this.enabled;
		vkR.v56 = this.v56;
		return vkR;
	},
	icon: null,
	options: null,
	__class__: com.wiris.e1_t
});