var StringTools = v91["StringTools"] = function() {};
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
};
StringTools.startsWith = function(s, start) {
	return s.length >= start.length && HxOverrides.substr(s, 0, start.length) == start;
};
StringTools.endsWith = function(s, end) {
	var ve1 = end.length;
	var vf1 = s.length;
	return vf1 >= ve1 && HxOverrides.substr(s, vf1 - ve1, ve1) == end;
};
StringTools.isSpace = function(s, pos) {
	var c = HxOverrides.cca(s, pos);
	return c >= 9 && c <= 13 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while (r < l && StringTools.isSpace(s, r)) r++;
	if (r > 0) return HxOverrides.substr(s, r, l - r);
	else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while (r < l && StringTools.isSpace(s, l - r - 1)) r++;
	if (r > 0) return HxOverrides.substr(s, 0, l - r);
	else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.rpad = function(s, c, l) {
	var vg1 = s.length;
	var vh1 = c.length;
	while (vg1 < l)
		if (l - vg1 < vh1) {
			s += HxOverrides.substr(c, 0, l - vg1);
			vg1 = l;
		} else {
			s += c;
			vg1 += vh1;
		};
	return s;
};
StringTools.lpad = function(s, c, l) {
	var vi1 = "";
	var vg1 = s.length;
	if (vg1 >= l) return s;
	var vh1 = c.length;
	while (vg1 < l)
		if (l - vg1 < vh1) {
			vi1 += HxOverrides.substr(c, 0, l - vg1);
			vg1 = l;
		} else {
			vi1 += c;
			vg1 += vh1;
		};
	return vi1 + s;
};
StringTools.replace = function(s, sub, vD1) {
	return s.split(sub).join(vD1);
};
StringTools.hex = function(n, vj1) {
	var s = "";
	var vk1 = "0123456789ABCDEF";
	do {
		s = vk1.charAt(n & 15) + s;
		n >>>= 4;
	} while (n > 0);
	if (vj1 != null)
		while (s.length < vj1) s = "0" + s;
	return s;
};
StringTools.vl1 = function(s, index) {
	return s.charCodeAt(index);
};
StringTools.vm1 = function(c) {
	return c != c;
};