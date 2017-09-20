com.wiris.e1_V = v91["com.wiris.e1_V"] = function() {
	com.wiris.e1_M.call(this);
};
com.wiris.e1_V.__name__ = ["com", "wiris", "e1_V"];
com.wiris.e1_V.__super__ = com.wiris.e1_M;
com.wiris.e1_V.prototype = vB1(com.wiris.e1_M.prototype, {
	v0N: function() {
		if (!this.v08.isFlag(com.wiris.e1_2.vAC)) return false;
		return true;
	},
	vIC: function() {
		var vyL;
		vyL = new com.wiris.e1_V();
		this.veK(vyL);
		return vyL;
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
	},
	vuF: function() {
		com.wiris.e1_M.prototype.vuF.call(this);
		this.getChild(0).styles.vy2(com.wiris.e1_2.vAC, false);
		this.getChild(1).styles.vy2(com.wiris.e1_2.vAC, false);
	},
	vwB: function(s) {
		s.vAI(this, "mfrac");
		this.linethickness = s.vnH("linethickness", this.linethickness, null);
		if (s.vMI("bevelled", this.type == com.wiris.e1_V.v1N, false)) this.type = com.wiris.e1_V.v1N;
		else if (s.vMI("slashed", this.type == com.wiris.e1_V.v2N, false)) this.type = com.wiris.e1_V.v2N;
		else this.type = com.wiris.e1_V.v3N;
		s.v1I(this);
		s.vu5("mfrac");
	},
	vkK: function(v1A) {
		if (this.v4N != 0) {
			v1A.setLineWidth(this.v4N);
			var v5B = v1A.getLength(0.1);
			if (this.type == com.wiris.e1_V.v1N) {
				var v5N = this.getChild(0);
				var vX9 = v1A.getLength(0.3);
				var v6N = v1A.getLength(0.06);
				var v7N = -((v5N.vQ1 + v5N.height) / -2.0) + v5N.width;
				var v8N = Math.floor(Math.round((this.height - vX9) / -2.0 + v7N));
				var v9N = Math.floor(Math.round(vX9 / -2.0 + v7N));
				var vAN = Math.floor(Math.round((vX9 - 1) / 2.0));
				var vnA = v8N - v6N + js.Boot.vX3(Math.floor(this.v4N * v1A.getZoom() / 2.0), Int);
				var voA = this.height - vX9 + 2 * v6N;
				var vpA = v9N + v6N + js.Boot.vX3(Math.floor(this.v4N * v1A.getZoom() / 2.0), Int);
				var vqA = 2 * vAN - 2 * v6N;
				v1A.drawLine(vnA, voA, vpA, vqA);
			} else if (this.type == com.wiris.e1_V.v2N) {
				var v5N = this.getChild(0);
				var vBN = this.getChild(1);
				var vX9 = v1A.getLength(0.1);
				var vCN = v1A.getLength(0.06);
				if (this.styles.isFlag(com.wiris.e1_2.vc2)) {
					var vnA = v5N.x + v5N.width - vBN.width - vX9 - 1 - js.Boot.vX3(Math.floor(this.v4N / 2 * v1A.getZoom() / 2), Int);
					var vpA = vBN.x + v5N.width + vX9 + js.Boot.vX3(Math.floor(this.v4N / 2 * v1A.getZoom() / 2), Int);
					var voA = vCN;
					var vqA = this.height - vCN;
					v1A.drawLine(vnA, voA, vpA, vqA);
				} else {
					var vnA = v5N.x + v5N.width + vX9 + js.Boot.vX3(Math.floor(this.v4N / 2 * v1A.getZoom() / 2), Int);
					var vpA = vBN.x - vX9 - 1 - js.Boot.vX3(Math.floor(this.v4N / 2 * v1A.getZoom() / 2), Int);
					var voA = this.height - vCN;
					var vqA = vCN;
					v1A.drawLine(vnA, voA, vpA, vqA);
				}
			} else {
				var vnA = v5B;
				var voA = this.baseline - v1A.getMiddle();
				var width = this.width - 2 * v5B;
				v1A.drawHorizontalLine(0, vnA, voA, width);
			}
		}
	},
	vDN: function(v1A) {
		var v5N = this.getChild(0);
		var vBN = this.getChild(1);
		var vX9 = v1A.getLength(0.1);
		var vCN = v1A.getLength(0.06);
		this.baseline = com.wiris.editor.formula.IntegerTools.max(v5N.baseline, vBN.baseline) + vCN;
		this.height = this.baseline + com.wiris.editor.formula.IntegerTools.max(v5N.viK(), vBN.viK()) + 2 * vCN;
		v5N.vQ1 = this.baseline - v5N.baseline;
		vBN.vQ1 = this.baseline - vBN.baseline;
		v5N.x = vX9;
		vBN.x = v5N.x + v5N.width + Math.floor(Math.ceil(0.3 * this.height)) + 3 * vX9 + js.Boot.vX3(Math.floor(this.v4N / 2 * v1A.getZoom()), Int);
		this.width = vBN.x + vBN.width + vX9;
	},
	vEN: function(v1A) {
		var v5N = this.getChild(0);
		var vBN = this.getChild(1);
		var vX9 = v1A.getLength(0.3);
		this.height = com.wiris.editor.formula.IntegerTools.max(v5N.height, vBN.height) + vX9;
		v5N.vQ1 = Math.floor(Math.round((this.height - vX9 - v5N.height) / 2.0));
		vBN.vQ1 = vX9 + Math.floor(Math.round((this.height - vX9 - vBN.height) / 2.0));
		this.baseline = Math.floor(Math.round(this.height / 2.0)) + v1A.getMiddle();
		v5N.x = 0;
		vBN.x = v5N.x + v5N.width + Math.floor(Math.floor((v5N.vQ1 + v5N.height - vBN.vQ1 + 1) / 2.0)) + 1;
		vBN.x += js.Boot.vX3(Math.floor(this.v4N * v1A.getZoom() - 1), Int);
		this.width = vBN.x + vBN.width;
	},
	vFN: function(v1A, vGN, vHN, vIN) {
		var c = vIN;
		com.wiris.editor.formula.box.BoxUtils.vDL(this, c);
		var v5N;
		var vBN;
		var vQA;
		var vq8 = v1A.getMiddle();
		var vJN = Math.floor(Math.floor(this.v4N / 2.0) * v1A.getZoom());
		v5N = this.getChild(0);
		vBN = this.getChild(1);
		vQA = new Array();
		vQA[0] = -vq8 - vGN - vJN - (v5N.height - v5N.baseline);
		vQA[1] = -vq8 + vHN + vJN + vBN.baseline;
		com.wiris.editor.formula.box.BoxUtils.v5L(v1A, this, vQA);
	},
	v7G: function(v1A) {
		var vGN = v1A.getDefaultStyles().vLB("numerator-height", v1A.getLength(0.1), v1A);
		var vHN = v1A.getDefaultStyles().vLB("denominator-depth", v1A.getLength(0.1), v1A);
		var vIN = v1A.getDefaultStyles().vLB("fracline-ledge", v1A.getLength(0.3), v1A);
		var vKN = v1A.getDefaultStyles().vLB("fraction-linethickness", 1, v1A);
		var vLN = v1A.getDefaultStyles().vLB("fraction-linethickness-small", 1, v1A);
		if (this.linethickness == null) {
			if (!this.v0N()) this.v4N = vLN;
			else this.v4N = vKN;
		} else if (this.linethickness == "thin") this.v4N = 1;
		else if (this.linethickness == "medium") this.v4N = 2;
		else if (this.linethickness == "thick") this.v4N = 3;
		else this.v4N = Std.parseInt(this.linethickness); if (this.type == com.wiris.e1_V.v1N) this.vEN(v1A);
		else if (this.type == com.wiris.e1_V.v2N) this.vDN(v1A);
		else this.vFN(v1A, vGN, vHN, vIN);
	},
	v4N: null,
	linethickness: null,
	type: null,
	__class__: com.wiris.e1_V
});