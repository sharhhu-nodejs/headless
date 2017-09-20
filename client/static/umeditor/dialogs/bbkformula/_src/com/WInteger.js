com.wiris.common.WInteger = v91["com.wiris.common.WInteger"] = function() {};
com.wiris.common.WInteger.__name__ = ["com", "wiris", "common", "WInteger"];
com.wiris.common.WInteger.max = function(x, vQ1) {
	if (x > vQ1) return x;
	return vQ1;
};
com.wiris.common.WInteger.min = function(x, vQ1) {
	if (x < vQ1) return x;
	return vQ1;
};
com.wiris.common.WInteger.v02 = function(x, vj1) {
	var s = "";
	while (x != 0 && vj1-- > 0) {
		var d = x & 15;
		s = com.wiris.e1_61.v12(d + (d >= 10 ? 55 : 48)) + s;
		x = x >> 4;
	};
	while (vj1-- > 0) s = "0" + s;
	return s;
};
com.wiris.common.WInteger.v22 = function(str) {
	return Std.parseInt("0x" + str);
};
com.wiris.common.WInteger.v32 = function(str) {
	str = StringTools.trim(str);
	var i = 0;
	var n = str.length;
	if (StringTools.startsWith(str, "-")) i++;
	if (StringTools.startsWith(str, "+")) i++;
	var c;
	while (i < n) {
		c = HxOverrides.cca(str, i);
		if (c < 48 || c > 57) return false;
		i++;
	};
	return true;
};