com.wiris.e1_A = v91["com.wiris.e1_A"] = function() {
	this.rtl = false;
};
com.wiris.e1_A.__name__ = ["com", "wiris", "e1_A"];
com.wiris.e1_A.prototype = {
	vN9: function(vM9, vO9) {
		var vP9 = vM9.getLength(0.65);
		var vQ9 = 2;
		var h = Math.floor(Math.round((14 + vO9 * vQ9) * vM9.getZoom()));
		var m = [vP9, h, h - vM9.getLength(0.1)];
		return m;
	},
	vR9: function(vM9, x, vQ1, vS9) {
		var vT9 = [
			[1, 0.95],
			[1.0, 1.0],
			[0.27, 0.6]
		];
		var vU9 = [0.09, 0.65];
		if (this.rtl) {
			vT9[0][0] = 1.0 - vT9[0][0];
			vT9[1][0] = 1.0 - vT9[1][0];
			vT9[2][0] = 1.0 - vT9[2][0];
			vU9[0] = 1.0 - vU9[0];
		};
		var m = this.vN9(vM9, 31);
		var vP9 = m[0] - 1;
		var h = m[1] - 1;
		var b = m[2];
		var px = new Array();
		var vV9 = new Array();
		var i;
		var vd1 = 0,
			vc1 = vT9.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			px[vW9] = Math.floor(Math.round(vT9[vW9][0] * vP9));
			vV9[vW9] = Math.floor(Math.round(vT9[vW9][1] * h) - b);
		};
		vM9.drawPolyline(x, vQ1, px, vV9, 3);
		var vX9 = Math.floor(Math.floor(vM9.getLineWidth() * 0.5 * 0.70711));
		var vY9 = [Math.round(px[1] + vX9), Math.round(px[2] + vX9), js.Boot.vX3(Math.round(vU9[0] * vP9), Int)];
		var vZ9 = [Math.round(vV9[1] - vX9), Math.round(vV9[2] - vX9), js.Boot.vX3(Math.round(vU9[1] * h) - b, Int)];
		vM9.drawPolyline(x, vQ1, vY9, vZ9, vS9 ? 3 : 2);
	},
	va9: function(vM9, x, vQ1, size, vS9) {
		var vT9 = [
			[1.0, 0.0],
			[0.52, 0.99],
			[0.19, 0.60]
		];
		var vU9 = [0.09, 0.65];
		if (this.rtl) {
			vT9[0][0] = 1.0 - vT9[0][0];
			vT9[1][0] = 1.0 - vT9[1][0];
			vT9[2][0] = 1.0 - vT9[2][0];
			vU9[0] = 1.0 - vU9[0];
		};
		var m = this.vN9(vM9, size);
		var vP9 = m[0] - 1;
		var h = m[1] - 1;
		var b = m[2];
		var px = new Array();
		var vV9 = new Array();
		var i;
		var vd1 = 0,
			vc1 = vT9.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			px[vW9] = Math.floor(Math.round(vT9[vW9][0] * vP9));
			vV9[vW9] = Math.floor(Math.round(vT9[vW9][1] * h) - b);
		};
		vM9.drawPolyline(x, vQ1, px, vV9, 3);
		var vX9 = Math.floor(Math.floor(vM9.getLineWidth() * 0.5 * 0.70711));
		var vY9 = [px[1] + vX9, px[2] + vX9, js.Boot.vX3(Math.round(vU9[0] * vP9), Int)];
		var vZ9 = [vV9[1] - vX9, vV9[2] - vX9, js.Boot.vX3(Math.round(vU9[1] * h) - b, Int)];
		vM9.drawPolyline(x, vQ1, vY9, vZ9, vS9 ? 3 : 2);
	},
	vb9: function(vM9, c) {
		if (c >= com.wiris.editor.formula.WCharacter.vc9 && c < com.wiris.editor.formula.WCharacter.vd9) return this.vN9(vM9, c - com.wiris.editor.formula.WCharacter.vc9);
		if (c == com.wiris.editor.formula.WCharacter.vd9) return this.vN9(vM9, c - com.wiris.editor.formula.WCharacter.vc9);
		if (c >= com.wiris.editor.formula.WCharacter.ve9 && c < com.wiris.editor.formula.WCharacter.vf9) return this.vN9(vM9, c - com.wiris.editor.formula.WCharacter.ve9);
		if (c == com.wiris.editor.formula.WCharacter.vf9) return this.vN9(vM9, c - com.wiris.editor.formula.WCharacter.ve9);
		if (c == com.wiris.editor.formula.WCharacter.vg9) return [com.wiris.common.WInteger.max(vM9.getLength(0.1), 1), vM9.getLength(0.5), vM9.getLength(0.5)];
		if (c == com.wiris.editor.formula.WCharacter.vh9) return [1, vM9.getLength(0.5), vM9.getLength(0.5)];
		if (c == com.wiris.editor.formula.WCharacter.vi9 || c == com.wiris.editor.formula.WCharacter.vj9) return [vM9.getLength(0.5), vM9.getLength(1.0), vM9.getBaseline("x")];
		if (this.vk9(c, com.wiris.e1_A.vl9) != -1) {
			var s = new com.wiris.e1_K();
			var vm9 = vM9.getWidth("x");
			var vn9 = vM9.getHeight("x");
			return [s.vo9(vM9, vm9, vn9, c, com.wiris.e1_K.vp9), s.vq9(vM9, vm9, vn9, c, com.wiris.e1_K.vp9), vM9.getBaseline("x")];
		};
		if (com.wiris.editor.formula.WCharacter.vE9(c)) return [0, vM9.getHeight("x"), vM9.getBaseline("x")];
		var index;
		if ((index = this.vr9(c, com.wiris.e1_A.vs9)) != -1) {
			var text = com.wiris.e1_61.v12(com.wiris.e1_A.vs9[index][1]);
			return [vM9.getWidth(text), vM9.getHeight(text), vM9.getBaseline(text)];
		};
		if ((index = this.vr9(c, com.wiris.e1_A.vt9)) != -1) {
			var width = 0;
			var size = com.wiris.e1_A.vt9[index][1];
			if (size >= 0) width = vM9.getLength(size / 1024.0);
			else if (c == com.wiris.editor.formula.WCharacter.vu9) width = -vM9.getLength(0.2);
			else if (c == com.wiris.editor.formula.WCharacter.vv9) width = vM9.getWidth("0");
			else if (c == com.wiris.editor.formula.WCharacter.vw9) width = vM9.getWidth(".");
			return [width, vM9.getLength(1.0), vM9.getBaseline("x")];
		};
		return null;
	},
	vx9: function(vM9, c, x, vQ1, b) {
		var s = js.Boot.vX3(vM9.getStyle(), com.wiris.e1_2);
		var rtl = s.isFlag(com.wiris.e1_2.vc2);
		s.vy2(com.wiris.e1_2.vc2, false);
		if (c >= com.wiris.editor.formula.WCharacter.vc9 && c < com.wiris.editor.formula.WCharacter.vd9) this.va9(vM9, x, vQ1 + b, c - com.wiris.editor.formula.WCharacter.vc9, true);
		if (c == com.wiris.editor.formula.WCharacter.vd9) this.vR9(vM9, x, vQ1 + b, true);
		if (c >= com.wiris.editor.formula.WCharacter.ve9 && c < com.wiris.editor.formula.WCharacter.vf9) this.va9(vM9, x, vQ1 + b, c - com.wiris.editor.formula.WCharacter.ve9, false);
		if (c == com.wiris.editor.formula.WCharacter.vf9) this.vR9(vM9, x, vQ1 + b, false);
		if (c == com.wiris.editor.formula.WCharacter.vg9) vM9.drawHorizontalLine(0, x, vQ1 + b - 1, vM9.getWidth(com.wiris.e1_61.v12(c)));
		if (c == com.wiris.editor.formula.WCharacter.vh9) vM9.drawVerticalLine(0, x, vQ1 + b - vM9.getBaseline(com.wiris.e1_61.v12(c)), vM9.getHeight(com.wiris.e1_61.v12(c)));
		if (this.vk9(c, com.wiris.e1_A.vl9) != -1) new com.wiris.e1_K().vy9(vM9, c, x, vQ1, b, vM9.getLength(0.5), vM9.getLength(1.0));
		var index;
		if ((index = this.vr9(c, com.wiris.e1_A.vs9)) != -1) {
			var text = com.wiris.e1_61.v12(com.wiris.e1_A.vs9[index][1]);
			vM9.drawText(0, text, x, vQ1, b);
		};
		(js.Boot.vX3(vM9.getStyle(), com.wiris.e1_2)).vy2(com.wiris.e1_2.vc2, rtl);
	},
	vk9: function(v, a) {
		var i;
		var vd1 = 0,
			vc1 = a.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (a[vW9] == v) return vW9;
		};
		return -1;
	},
	vr9: function(c, vz9) {
		var i;
		var vd1 = 0,
			vc1 = vz9.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (vz9[vW9][0] == c) return vW9;
		};
		return -1;
	},
	canDisplay: function(c, v0A) {
		if (v0A) return c >= com.wiris.editor.formula.WCharacter.vc9 && c <= com.wiris.editor.formula.WCharacter.vh9;
		if (com.wiris.editor.formula.WCharacter.vE9(c)) return true;
		if (c == 57344) return true;
		if (this.vr9(c, com.wiris.e1_A.vs9) != -1) return true;
		if (this.vr9(c, com.wiris.e1_A.vt9) != -1) return true;
		return this.vk9(c, com.wiris.e1_A.vl9) != -1;
	},
	getMetrics: function(v1A, str) {
		return this.vb9(v1A, HxOverrides.cca(str, 0));
	},
	drawText: function(v1A, id, str, x, vQ1, b) {
		this.vx9(v1A, HxOverrides.cca(str, 0), x, vQ1, b);
		return 0;
	},
	v84: function(rtl) {
		this.rtl = rtl;
	},
	rtl: null,
	__class__: com.wiris.e1_A
};