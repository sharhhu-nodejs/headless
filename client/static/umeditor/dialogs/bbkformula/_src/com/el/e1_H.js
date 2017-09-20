com.wiris.e1_H = v91["com.wiris.e1_H"] = function() {};
com.wiris.e1_H.__name__ = ["com", "wiris", "e1_H"];
com.wiris.e1_H.vs9 = null;
com.wiris.e1_H.vCH = function() {
	if (com.wiris.e1_H.vs9 == null) {
		var e = com.wiris.e1_H.vDH + com.wiris.e1_H.vEH;
		com.wiris.e1_H.vs9 = new HaxeHash();
		var start = 0;
		var vq8;
		while ((vq8 = e.indexOf("@", start)) != -1) {
			var vFH = HxOverrides.substr(e, start, vq8 - start);
			vq8++;
			start = e.indexOf("@", vq8);
			if (start == -1) break;
			var value = HxOverrides.substr(e, vq8, start - vq8);
			start++;
			vFH = com.wiris.util.xml.WXmlUtils.htmlUnescape(vFH);
			var attributes = com.wiris.e1_H.vGH(value);
			var vHH = vFH + "@" + attributes.form;
			com.wiris.e1_H.vs9.set(vHH, attributes);
		}
	}
};
com.wiris.e1_H.vGH = function(value) {
	var vFH = new com.wiris.e1_G(null);
	vFH.form = Std.parseInt(HxOverrides.substr(value, 0, 1));
	vFH.lspace = Std.parseInt(HxOverrides.substr(value, 1, 1));
	vFH.rspace = Std.parseInt(HxOverrides.substr(value, 2, 1));
	var n = Std.parseInt("0x" + HxOverrides.substr(value, 3, null));
	vFH.accent = (n & com.wiris.e1_H.vIH) != 0;
	vFH.vkG = (n & com.wiris.e1_H.vJH) != 0;
	vFH.largeop = (n & com.wiris.e1_H.vKH) != 0;
	vFH.vlG = (n & com.wiris.e1_H.vLH) != 0 ? com.wiris.e1_G.vMH : com.wiris.e1_G.vNH;
	vFH.vmG = (n & com.wiris.e1_H.vOH) != 0;
	vFH.vnG = (n & com.wiris.e1_H.vPH) != 0;
	vFH.stretchy = (n & com.wiris.e1_H.vQH) != 0;
	vFH.voG = (n & com.wiris.e1_H.vRH) != 0;
	return vFH;
};
com.wiris.e1_H.prototype = {
	getAttributes: function(vSH, form) {
		com.wiris.e1_H.vCH();
		var vTH = [
			[0, 2, 1],
			[1, 2, 0],
			[2, 0, 1]
		];
		var i;
		var vc1 = 0;
		while (vc1 < 3) {
			var vW9 = vc1++;
			var vJ1 = vSH + "@" + vTH[form][vW9];
			var vFH = com.wiris.e1_H.vs9.get(vJ1);
			if (vFH != null) return vFH;
		};
		return new com.wiris.e1_G(null);
	},
	__class__: com.wiris.e1_H
};