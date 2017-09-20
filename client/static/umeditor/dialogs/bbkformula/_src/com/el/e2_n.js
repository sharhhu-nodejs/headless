com.wiris.e1_n = v91["com.wiris.e1_n"] = function(vx6, vK5, icons, vD6) {
	com.wiris.e1_k.call(this, vx6, null);
	this.icons = icons;
	this.vD6 = vD6;
	this.vK5 = vK5;
};
com.wiris.e1_n.__name__ = ["com", "wiris", "e1_n"];
com.wiris.e1_n.__super__ = com.wiris.e1_k;
com.wiris.e1_n.prototype = vB1(com.wiris.e1_k.prototype, {
	select: function(index) {
		if (this.enabled) {
			this.vD6 = index;
			this.vx6.vZR(this);
		}
	},
	vcR: function() {
		return this;
	},
	copy: function() {
		var vkR = new com.wiris.e1_n(this.vx6, this.vK5, this.icons, this.vD6);
		vkR.action = this.action;
		vkR.enabled = this.enabled;
		vkR.value = this.value;
		vkR.v56 = this.v56;
		return vkR;
	},
	vD6: null,
	icons: null,
	__class__: com.wiris.e1_n
});