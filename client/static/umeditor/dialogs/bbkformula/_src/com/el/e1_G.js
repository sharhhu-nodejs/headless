com.wiris.e1_G = v91["com.wiris.e1_G"] = function(copy) {
	if (copy == null) {
		this.form = 0;
		this.accent = false;
		this.vkG = false;
		this.largeop = false;
		this.vlG = 0;
		this.vmG = false;
		this.vnG = false;
		this.stretchy = false;
		this.voG = true;
		this.lspace = com.wiris.e1_G.vpG;
		this.rspace = com.wiris.e1_G.vpG;
	} else {
		this.form = copy.form;
		this.accent = copy.accent;
		this.vkG = copy.vkG;
		this.largeop = copy.largeop;
		this.vlG = copy.vlG;
		this.vmG = copy.vmG;
		this.vnG = copy.vnG;
		this.stretchy = copy.stretchy;
		this.voG = copy.voG;
		this.lspace = copy.lspace;
		this.rspace = copy.rspace;
	}
};
com.wiris.e1_G.__name__ = ["com", "wiris", "e1_G"];
com.wiris.e1_G.prototype = {
	merge: function(vqG, vrG) {
		if (vqG.form != vrG.form) this.form = vrG.form;
		if (vqG.accent != vrG.accent) this.accent = vrG.accent;
		if (vqG.vkG != vrG.vkG) this.vkG = vrG.vkG;
		if (vqG.largeop != vrG.largeop) this.largeop = vrG.largeop;
		if (vqG.vlG != vrG.vlG) this.vlG = vrG.vlG;
		if (vqG.vmG != vrG.vmG) this.vmG = vrG.vmG;
		if (vqG.vnG != vrG.vnG) this.vnG = vrG.vnG;
		if (vqG.stretchy != vrG.stretchy) this.stretchy = vrG.stretchy;
		if (vqG.voG != vrG.voG) this.voG = vrG.voG;
		if (vqG.lspace != vrG.lspace) this.lspace = vrG.lspace;
		if (vqG.rspace != vrG.rspace) this.rspace = vrG.rspace;
	},
	vsG: function(rspace) {
		this.rspace = this.vtG(rspace);
	},
	vuG: function(lspace) {
		this.lspace = this.vtG(lspace);
	},
	vtG: function(vvG) {
		if (vvG == com.wiris.e1_G.vwG) return com.wiris.e1_G.vxG;
		if (vvG == com.wiris.e1_G.vyG) return com.wiris.e1_G.vzG;
		if (vvG == com.wiris.e1_G.v0H) return com.wiris.e1_G.v1H;
		if (vvG == com.wiris.e1_G.v2H) return com.wiris.e1_G.v3H;
		if (vvG == com.wiris.e1_G.v4H) return com.wiris.e1_G.vpG;
		if (vvG == com.wiris.e1_G.v5H) return com.wiris.e1_G.v6H;
		if (vvG == com.wiris.e1_G.v7H) return com.wiris.e1_G.v8H;
		return 0;
	},
	v9H: function(vvG) {
		switch (vvG) {
			case com.wiris.e1_G.vxG:
				return com.wiris.e1_G.vwG;
			case com.wiris.e1_G.vzG:
				return com.wiris.e1_G.vyG;
			case com.wiris.e1_G.v1H:
				return com.wiris.e1_G.v0H;
			case com.wiris.e1_G.v3H:
				return com.wiris.e1_G.v2H;
			case com.wiris.e1_G.vpG:
				return com.wiris.e1_G.v4H;
			case com.wiris.e1_G.v6H:
				return com.wiris.e1_G.v5H;
			case com.wiris.e1_G.v8H:
				return com.wiris.e1_G.v7H;
			default:
				return "0";
		}
	},
	vAH: function() {
		return this.v9H(this.rspace);
	},
	vBH: function() {
		return this.v9H(this.lspace);
	},
	rspace: null,
	lspace: null,
	voG: null,
	stretchy: null,
	vnG: null,
	vmG: null,
	vlG: null,
	largeop: null,
	vkG: null,
	accent: null,
	form: null,
	__class__: com.wiris.e1_G
};