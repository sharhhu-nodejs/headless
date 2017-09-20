if (!com.wiris.util.css) com.wiris.util.css = {};
com.wiris.util.css.CSSUtils = v91["com.wiris.util.css.CSSUtils"] = function() {};
com.wiris.util.css.CSSUtils.__name__ = ["com", "wiris", "util", "css", "CSSUtils"];
com.wiris.util.css.CSSUtils.vs2 = function(color) {
	if (color == null) return 0;
	color = StringTools.trim(color);
	var vmY = color.length;
	if (vmY == 0) return 0;
	if (color.charAt(0) != "#") return 0;
	if (vmY == 4) color = "" + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2) + color.charAt(3) + color.charAt(3);
	else if (vmY == 7) color = HxOverrides.substr(color, 1, 6);
	else return 0;
	return com.wiris.common.WInteger.v22(color);
};
com.wiris.util.css.CSSUtils.vc7 = function(color) {
	return "#" + com.wiris.common.WInteger.v02(color, 6);
};
com.wiris.util.css.CSSUtils.vv2 = function(vp4) {
	if (vp4 == null) return 0;
	vp4 = StringTools.trim(vp4);
	if (StringTools.endsWith(vp4, "px")) return Std.parseInt(HxOverrides.substr(vp4, 0, vp4.length - 2));
	var vnY = Std.parseInt(vp4);
	if (vp4 == "" + vnY) return vnY;
	return 0;
};
com.wiris.util.css.CSSUtils.vt2 = function(voY) {
	if (voY == null) return 0;
	voY = StringTools.trim(voY);
	if (StringTools.endsWith(voY, "%")) return Std.parseFloat(HxOverrides.substr(voY, 0, voY.length - 1));
	return 0;
};
com.wiris.util.css.CSSUtils.vPI = function(vpY) {
	if (vpY == null) return "";
	var v5G = new StringBuf();
	var keys = vpY.keys();
	var vqY = new Array();
	while (keys.hasNext()) vqY.push(keys.next());
	com.wiris.util.css.CSSUtils.sort(vqY);
	var i;
	var vd1 = 0,
		vc1 = vqY.length;
	while (vd1 < vc1) {
		var vW9 = vd1++;
		var vJ1 = vqY[vW9];
		if (vW9 > 0) v5G.b += Std.string(";");
		v5G.b += Std.string(com.wiris.util.css.CSSUtils.vrY(vJ1));
		v5G.b += Std.string(":");
		var value = vpY.get(vJ1);
		if (vJ1 == "fontFamily" && value.indexOf(" ") != -1) value = "'" + value + "'";
		v5G.b += Std.string(value);
	};
	return v5G.b;
};
com.wiris.util.css.CSSUtils.vRI = function(vpY) {
	var vnB = vpY.split(";");
	var h = new HaxeHash();
	var i;
	var vd1 = 0,
		vc1 = vnB.length;
	while (vd1 < vc1) {
		var vW9 = vd1++;
		var vsY = vnB[vW9].split(":");
		if (vsY.length >= 2) {
			var input = vsY[1];
			vsY[0] = com.wiris.util.css.CSSUtils.vN4(StringTools.trim(vsY[0]));
			vsY[1] = StringTools.trim(vsY[1]);
			if (vsY[0] == "fontFamily" && com.wiris.util.css.CSSUtils.vtY(vsY[1])) vsY[1] = HxOverrides.substr(vsY[1], 1, vsY[1].length - 2);
			h.set(vsY[0], vsY[1]);
		}
	};
	return h;
};
com.wiris.util.css.CSSUtils.vtY = function(value) {
	if (StringTools.startsWith(value, "\"") && StringTools.endsWith(value, "\"")) return true;
	return StringTools.startsWith(value, "'") && StringTools.endsWith(value, "'");
};
com.wiris.util.css.CSSUtils.vrY = function(vuY) {
	var vvY = HxOverrides.cca("A", 0);
	var vwY = HxOverrides.cca("Z", 0);
	var i = 0;
	var vxY = "";
	while (i < vuY.length) {
		var code = HxOverrides.cca(vuY, i);
		var character = HxOverrides.substr(vuY, i, 1);
		if (vvY <= code && code <= vwY) vxY += "-" + character.toLowerCase();
		else vxY += character;
		++i;
	};
	return vxY;
};
com.wiris.util.css.CSSUtils.vN4 = function(vxY) {
	var i = HxOverrides.iter(vxY.split("-"));
	if (!i.hasNext()) return "";
	var vuY = i.next();
	while (i.hasNext()) {
		var word = i.next();
		if (word.length > 0) vuY += HxOverrides.substr(word, 0, 1).toUpperCase() + HxOverrides.substr(word, 1, null).toLowerCase();
	};
	return vuY;
};
com.wiris.util.css.CSSUtils.sort = function(a) {
	var i;
	var vH4;
	var n = a.length;
	var vc1 = 0;
	while (vc1 < n) {
		var vW9 = vc1++;
		var vd1 = vW9 + 1;
		while (vd1 < n) {
			var vdI = vd1++;
			var vj2 = a[vW9];
			var vk2 = a[vdI];
			if (com.wiris.system.StringEx.vXY(vj2, vk2) > 0) {
				a[vW9] = vk2;
				a[vdI] = vj2;
			}
		}
	}
};