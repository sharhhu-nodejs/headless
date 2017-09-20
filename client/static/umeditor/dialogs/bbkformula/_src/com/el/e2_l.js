com.wiris.e1_l = v91["com.wiris.e1_l"] = function(vx6, vK5, icon) {
	com.wiris.e1_k.call(this, vx6, null);
	this.icon = icon;
	this.vgR = icon;
	this.iconRTL = null;
	this.vV5 = false;
	this.vhR = false;
	this.vK5 = vK5;
};
com.wiris.e1_l.__name__ = ["com", "wiris", "e1_l"];
com.wiris.e1_l.__super__ = com.wiris.e1_k;
com.wiris.e1_l.prototype = vB1(com.wiris.e1_k.prototype, {
	vU7: function(ltr) {
		var viR = this.icon;
		if (ltr || this.iconRTL == null) this.icon = this.vgR;
		else this.icon = this.iconRTL; if (viR != this.icon) this.vx6.vZR(this);
	},
	vjR: function(vhR) {
		if (this.vV5 && this.vhR != vhR) {
			this.vhR = vhR;
			this.vx6.vZR(this);
		}
	},
	vfR: function() {
		return this;
	},
	copy: function() {
		var vkR = new com.wiris.e1_l(this.vx6, this.vK5, this.vgR);
		vkR.vgR = this.vgR;
		vkR.iconRTL = this.iconRTL;
		vkR.action = this.action;
		vkR.enabled = this.enabled;
		vkR.value = this.value;
		vkR.v56 = this.v56;
		vkR.vV5 = this.vV5;
		vkR.vhR = this.vhR;
		return vkR;
	},
	click: function() {
		if (this.enabled) this.vx6.vlR(this);
	},
	vhR: null,
	vV5: null,
	iconRTL: null,
	vgR: null,
	icon: null,
	__class__: com.wiris.e1_l
});