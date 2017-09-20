com.wiris.e1_k = v91["com.wiris.e1_k"] = function(vx6, action) {
	this.action = action;
	this.enabled = true;
	this.vx6 = vx6;
	this.value = null;
	this.v56 = true;
};
com.wiris.e1_k.__name__ = ["com", "wiris", "e1_k"];
com.wiris.e1_k.prototype = {
	vXR: function(value) {
		if (this.vYR(value)) {
			this.value = value;
			this.vx6.vZR(this);
		}
	},
	vaR: function(enabled) {
		if (this.enabled != enabled) {
			this.enabled = enabled;
			this.vx6.vZR(this);
		}
	},
	vbR: function() {
		return null;
	},
	vcR: function() {
		return null;
	},
	vdR: function() {
		return null;
	},
	veR: function() {
		return null;
	},
	vfR: function() {
		return null;
	},
	vYR: function(value) {
		return false;
	},
	copy: function() {
		return null;
	},
	v56: null,
	vK5: null,
	value: null,
	vx6: null,
	enabled: null,
	action: null,
	__class__: com.wiris.e1_k
};