com.wiris.e1_T = v91["com.wiris.e1_T"] = function() {
	com.wiris.e1_M.call(this);
	this.vCM = new HaxeHash();
	this.vCM.set("longdiv", com.wiris.e1_T.vDM);
	this.vCM.set("actuarial", com.wiris.e1_T.vEM);
	this.vCM.set("radical", com.wiris.e1_T.vFM);
	this.vCM.set("box", com.wiris.e1_T.vGM);
	this.vCM.set("roundedbox", com.wiris.e1_T.vHM);
	this.vCM.set("circle", com.wiris.e1_T.vIM);
	this.vCM.set("left", com.wiris.e1_T.vy7);
	this.vCM.set("right", com.wiris.e1_T.vz7);
	this.vCM.set("top", com.wiris.e1_T.v25);
	this.vCM.set("bottom", com.wiris.e1_T.v35);
	this.vCM.set("updiagonalstrike", com.wiris.e1_T.vJM);
	this.vCM.set("downdiagonalstrike", com.wiris.e1_T.vKM);
	this.vCM.set("verticalstrike", com.wiris.e1_T.vLM);
	this.vCM.set("horizontalstrike", com.wiris.e1_T.vMM);
};
com.wiris.e1_T.__name__ = ["com", "wiris", "e1_T"];
com.wiris.e1_T.__super__ = com.wiris.e1_M;
com.wiris.e1_T.prototype = vB1(com.wiris.e1_M.prototype, {
	vIC: function() {
		var vNM;
		vNM = new com.wiris.e1_T();
		this.veK(vNM);
		return vNM;
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
	},
	vwB: function(s) {
		s.vAI(this, "menclose");
		this.vOM = 0;
		this.notation = s.vnH("notation", this.notation, null);
		if (this.notation != null) {
			var i = HxOverrides.iter(this.notation.split(" "));
			while (i.hasNext()) {
				var vPM = i.next();
				if (this.vCM.exists(vPM)) this.vOM |= this.vCM.get(vPM);
				else {
					this.vOM = com.wiris.e1_T.vDM;
					break;
				}
			}
		} else this.vOM = com.wiris.e1_T.vDM;
		s.v1I(this);
		s.vu5("menclose");
	},
	vQM: function(v1A) {
		v1A.drawHorizontalLine(1, this.vRM + this.vvL, this.vSM + Math.floor(this.vTM / 2), this.vUM - 2 * this.vvL);
	},
	vVM: function(v1A) {
		v1A.drawVerticalLine(1, this.vRM + Math.floor(this.vUM / 2), this.vSM + this.vvL, this.vTM - 2 * this.vvL);
	},
	vWM: function(v1A) {
		v1A.drawLine(this.vRM + this.vvL, this.vSM + this.vvL, this.vRM + this.vUM - this.vwL, this.vSM + this.vTM - this.vwL);
	},
	vXM: function(v1A) {
		v1A.drawLine(this.vRM + this.vvL, this.vSM + this.vTM - this.vwL, this.vRM + this.vUM - this.vwL, this.vSM + this.vvL);
	},
	vYM: function(v1A) {
		v1A.drawHorizontalLine(1, this.vRM + this.vvL, this.vSM + this.vTM - this.vwL, this.vUM - 2 * this.vvL);
	},
	vZM: function(v1A) {
		v1A.drawHorizontalLine(1, this.vRM + this.vvL, this.vSM + this.vvL, this.vUM - 2 * this.vvL);
	},
	vaM: function(v1A) {
		v1A.drawVerticalLine(1, this.vRM + this.vUM - this.vwL, this.vvL + this.vSM, this.vTM - 2 * this.vvL);
	},
	vbM: function(v1A) {
		v1A.drawVerticalLine(1, this.vvL + this.vRM, this.vvL + this.vSM, this.vTM - 2 * this.vvL);
	},
	vcM: function(v1A) {
		v1A.drawArc(this.x, this.vQ1, this.vUM, this.vTM, 0, 360);
	},
	vdM: function(v1A) {
		var veM = this.vfM * 2;
		var vgM = 2 * this.vvL;
		v1A.drawHorizontalLine(1, this.vRM + this.vfM + this.vvL, this.vSM + this.vvL, this.vUM - veM - vgM);
		v1A.drawHorizontalLine(1, this.vRM + this.vfM + this.vvL, this.vSM + this.vTM - this.vwL, this.vUM - veM - vgM);
		v1A.drawVerticalLine(1, this.vRM + this.vvL, this.vSM + this.vfM + this.vvL, this.vTM - veM - vgM);
		v1A.drawVerticalLine(1, this.vRM + this.vUM - this.vwL, this.vSM + this.vfM + this.vvL, this.vTM - veM - vgM);
		v1A.drawArc(this.vRM, this.vSM, veM, veM, 90, 90);
		v1A.drawArc(this.vRM + this.vUM - veM, this.vSM, veM, veM, 0, 90);
		v1A.drawArc(this.vRM + this.vUM - veM, this.vSM + this.vTM - veM, veM, veM, 270, 90);
		v1A.drawArc(this.vRM, this.vSM + this.vTM - veM, veM, veM, 180, 90);
	},
	vhM: function(v1A) {},
	viM: function(v1A) {
		var v1M = new com.wiris.e1_K();
		var vTB = this.getChild(0);
		v1M.vy9(v1A, HxOverrides.cca(")", 0), this.vRM, this.vSM, vTB.vQ1 + vTB.baseline, this.vjM, this.vTM);
	},
	vkK: function(v1A) {
		if ((this.vOM & com.wiris.e1_T.vkM) == com.wiris.e1_T.vkM) this.viM(v1A);
		if ((this.vOM & com.wiris.e1_T.vFM) == com.wiris.e1_T.vFM) this.vhM(v1A);
		if ((this.vOM & com.wiris.e1_T.vHM) == com.wiris.e1_T.vHM) this.vdM(v1A);
		if ((this.vOM & com.wiris.e1_T.vIM) == com.wiris.e1_T.vIM) this.vcM(v1A);
		if ((this.vOM & com.wiris.e1_T.vy7) == com.wiris.e1_T.vy7) this.vbM(v1A);
		if ((this.vOM & com.wiris.e1_T.vz7) == com.wiris.e1_T.vz7) this.vaM(v1A);
		if ((this.vOM & com.wiris.e1_T.v25) == com.wiris.e1_T.v25) this.vZM(v1A);
		if ((this.vOM & com.wiris.e1_T.v35) == com.wiris.e1_T.v35) this.vYM(v1A);
		if ((this.vOM & com.wiris.e1_T.vJM) == com.wiris.e1_T.vJM) this.vXM(v1A);
		if ((this.vOM & com.wiris.e1_T.vKM) == com.wiris.e1_T.vKM) this.vWM(v1A);
		if ((this.vOM & com.wiris.e1_T.vLM) == com.wiris.e1_T.vLM) this.vVM(v1A);
		if ((this.vOM & com.wiris.e1_T.vMM) == com.wiris.e1_T.vMM) this.vQM(v1A);
	},
	vlM: function() {
		if ((this.vmM & com.wiris.e1_T.vy7) == com.wiris.e1_T.vy7) {
			this.vUM += this.vA2 + this.vnM;
			this.getChild(0).x += this.vA2 + this.vnM;
		};
		if ((this.vmM & com.wiris.e1_T.vz7) == com.wiris.e1_T.vz7) this.vUM += this.vnM + this.vA2;
		if ((this.vmM & com.wiris.e1_T.v25) == com.wiris.e1_T.v25) {
			this.vTM += this.vA2 + this.voM;
			this.getChild(0).vQ1 += this.vA2 + this.voM;
		};
		if ((this.vmM & com.wiris.e1_T.v35) == com.wiris.e1_T.v35) this.vTM += this.voM + this.vA2;
	},
	vpM: function() {
		this.vnM = Math.floor(this.getChild(0).width * (Math.sqrt(2) - 1) / 2);
		this.voM = Math.floor(this.getChild(0).height * (Math.sqrt(2) - 1) / 2);
		this.vmM |= com.wiris.e1_T.vGM;
	},
	vqM: function(v1A) {
		var v1M = new com.wiris.e1_K();
		this.vTM = v1M.vq9(v1A, v1A.getWidth(")"), this.vTM, HxOverrides.cca(")", 0), com.wiris.e1_K.vlJ);
		this.vjM = v1M.vo9(v1A, v1A.getWidth(")"), this.vTM, HxOverrides.cca(")", 0), com.wiris.e1_K.vlJ);
		this.vUM += this.vjM;
		this.getChild(0).x += this.vjM;
	},
	v7G: function(v1A) {
		this.vA2 = v1A.getLineWidth();
		this.vwL = Math.floor(Math.ceil(this.vA2 / 2.0));
		this.vvL = Math.floor(this.vA2 / 2);
		this.vnM = v1A.getLength(com.wiris.e1_T.vrM);
		this.voM = v1A.getLength(com.wiris.e1_T.vsM);
		this.vRM = v1A.getLength(com.wiris.e1_T.vtM);
		this.vSM = v1A.getLength(com.wiris.e1_T.vuM);
		this.vfM = v1A.getLength(com.wiris.e1_T.vvM);
		var vTB = this.getChild(0);
		vTB.x = this.vRM;
		vTB.vQ1 = this.vSM;
		this.vUM = vTB.width;
		this.vTM = vTB.height;
		var vwM = v1A.getLength(1.0);
		this.vmM = 0;
		if ((this.vOM & com.wiris.e1_T.vHM) == com.wiris.e1_T.vHM) this.vmM |= com.wiris.e1_T.vGM;
		if ((this.vOM & com.wiris.e1_T.vy7) == com.wiris.e1_T.vy7) this.vmM |= com.wiris.e1_T.vy7;
		if ((this.vOM & com.wiris.e1_T.vz7) == com.wiris.e1_T.vz7) this.vmM |= com.wiris.e1_T.vz7;
		if ((this.vOM & com.wiris.e1_T.v25) == com.wiris.e1_T.v25) this.vmM |= com.wiris.e1_T.v25;
		if ((this.vOM & com.wiris.e1_T.v35) == com.wiris.e1_T.v35) this.vmM |= com.wiris.e1_T.v35;
		if ((this.vOM & com.wiris.e1_T.vLM) == com.wiris.e1_T.vLM) this.vmM |= com.wiris.e1_T.v25 | com.wiris.e1_T.v35;
		if ((this.vOM & com.wiris.e1_T.vMM) == com.wiris.e1_T.vMM) this.vmM |= com.wiris.e1_T.vy7 | com.wiris.e1_T.vz7;
		if ((this.vOM & com.wiris.e1_T.vDM) == com.wiris.e1_T.vDM) this.vqM(v1A);
		if ((this.vOM & com.wiris.e1_T.vIM) == com.wiris.e1_T.vIM) this.vpM();
		if ((this.vOM & com.wiris.e1_T.vIM) == com.wiris.e1_T.vIM && this.vUM + this.vnM * 2 < vwM) this.vnM = Math.floor((vwM - this.vUM) / 2);
		this.vlM();
		this.width = this.vUM + 2 * this.vRM + this.vxM;
		this.height = this.vTM + 2 * this.vSM;
		this.baseline = vTB.baseline + vTB.vQ1;
	},
	vwL: null,
	vvL: null,
	vA2: null,
	vjM: null,
	vxM: null,
	vSM: null,
	vRM: null,
	voM: null,
	vnM: null,
	vmM: null,
	vTM: null,
	vUM: null,
	vCM: null,
	vOM: null,
	notation: null,
	vfM: null,
	__class__: com.wiris.e1_T
});