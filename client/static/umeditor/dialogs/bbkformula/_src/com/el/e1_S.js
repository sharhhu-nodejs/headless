com.wiris.e1_S = v91["com.wiris.e1_S"] = function() {
	com.wiris.e1_M.call(this);
	this.center = false;
};
com.wiris.e1_S.__name__ = ["com", "wiris", "e1_S"];
com.wiris.e1_S.__super__ = com.wiris.e1_M;
com.wiris.e1_S.prototype = vB1(com.wiris.e1_M.prototype, {
	vIC: function() {
		var vyL;
		vyL = new com.wiris.e1_S();
		this.veK(vyL);
		return vyL;
	},
	vyF: function() {
		com.wiris.editor.formula.box.BoxUtils.vKL(this);
	},
	vwB: function(s) {
		s.vAI(this, "mfenced");
		this.open = s.vnH("open", this.open, "(");
		this.close = s.vnH("close", this.close, ")");
		this.separators = s.vnH("separators", this.separators, ",");
		s.v1I(this);
		s.vu5("mfenced");
	},
	vzL: function(v1A, vZA) {
		if (vZA.length == 0) return v1A.getLength(0.2);
		var vP9 = 0;
		var i = 0;
		while (i < vZA.length) {
			vP9 += vZA[i];
			++i;
		};
		return vP9;
	},
	v0M: function(v1A, s) {
		var vZA = new Array();
		var v1M = new com.wiris.e1_K();
		var i = 0;
		while (i < s.length) {
			vZA[i] = v1M.vo9(v1A, v1A.getWidth(HxOverrides.substr(s, i, 1)), this.height, HxOverrides.cca(s, i), com.wiris.e1_K.vkJ);
			++i;
		};
		return vZA;
	},
	v2M: function(v1A, s, vP9) {
		var v1M = new com.wiris.e1_K();
		var i = 0;
		var c = 0;
		var v3M = 0;
		while (i < this.vN8() - 1) {
			if (i < s.length) {
				c = HxOverrides.cca(s, i);
				v3M = vP9[i];
			};
			var x;
			if (this.styles.isFlag(com.wiris.e1_2.vc2)) x = this.width - (this.getChild(i).x - this.v4M);
			else x = this.getChild(i).x + this.getChild(i).width + this.v4M;
			v1M.vy9(v1A, c, x, 0, this.baseline, v3M, this.height);
			++i;
		}
	},
	v5M: function(v1A, s, vP9, x) {
		var v1M = new com.wiris.e1_K();
		//此处统一获取unicode码值
		s = s.replace('&lt;', '&#60;').replace('&gt;', '&#62;');
		if(/[0-9]/.test(s)){
			s = s.replace('&#', '').replace(';', '');
			s = String.fromCharCode(s);
		}
		var i = 0;
		while (i < s.length) {
			var c = HxOverrides.cca(s, 0);
			v1M.vy9(v1A, c, x, 0, this.baseline, vP9[i], this.height);
			x += vP9[i];
			++i;
		}
	},

	vkK: function(v1A) {
		this.v5M(v1A, this.open, this.v6M, 0);
		this.v2M(v1A, this.separators, this.v7M);
		this.v5M(v1A, this.close, this.v8M, this.width - this.v9M);
	},
	v7G: function(v1A) {
		var i;
		var vAM = v1A.getDefaultStyles().vLB("delim-overhang", 0, v1A);
		this.v4M = v1A.getLength(0.1);
		this.height = this.getChild(0).height + 2 * vAM;
		this.baseline = this.getChild(0).baseline + vAM;
		if (vAM == 0) this.getChild(0).vQ1 = 0;
		if (this.center) {
			var top = this.baseline - v1A.getMiddle();
			var bottom = this.height - top;
			var m = com.wiris.common.WInteger.max(top, bottom);
			if (bottom > top) {
				this.baseline += bottom - top;
				this.getChild(0).vQ1 = bottom - top;
			};
			this.height = 2 * m;
		};
		this.v6M = this.v0M(v1A, this.open);
		this.vBM = this.vzL(v1A, this.v6M);
		this.v8M = this.v0M(v1A, this.close);
		this.v9M = this.vzL(v1A, this.v8M);
		this.width = this.vBM + this.getChild(0).width + this.v9M;
		this.getChild(0).x = this.vBM;
		if (this.vN8() > 1) {
			if (this.separators.length == 0) this.separators = ",";
			this.separators = StringTools.replace(this.separators, " ", "");
			this.v7M = this.v0M(v1A, this.separators);
			this.width += this.v7M[0] + 2 * this.v4M;
			i = 1;
			while (i < this.vN8()) {
				this.width += this.getChild(i).width + 2 * this.v4M;
				if (i <= this.v7M.length - 1) this.width += this.v7M[i];
				else this.width += this.v7M[this.v7M.length - 1];
				this.height = com.wiris.editor.formula.IntegerTools.max(this.height, this.getChild(i).height);
				this.baseline = com.wiris.editor.formula.IntegerTools.max(this.baseline, this.getChild(i).baseline + vAM);
				this.getChild(i).x = this.getChild(i - 1).x + this.getChild(i - 1).width + 2 * this.v4M;
				if (i - 1 <= this.v7M.length - 1) this.getChild(i).x += this.v7M[i - 1];
				else this.getChild(i).x += this.v7M[this.v7M.length - 1];
				++i;
				this.width = this.width - this.v7M[this.v7M.length - 1] - 2 * this.v4M;
			}
		};
		i = 0;
		while (i < this.vN8()) {
			this.getChild(i).vQ1 = this.baseline - this.getChild(i).baseline;
			++i;
		}
	},
	v7M: null,
	v8M: null,
	v9M: null,
	v6M: null,
	vBM: null,
	v4M: null,
	center: null,
	separators: null,
	close: null,
	open: null,
	__class__: com.wiris.e1_S
});