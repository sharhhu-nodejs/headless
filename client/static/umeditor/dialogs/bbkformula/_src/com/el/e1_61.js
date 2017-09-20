com.wiris.e1_61 = v91["com.wiris.e1_61"] = function() {};
com.wiris.e1_61.__name__ = ["com", "wiris", "e1_61"];
com.wiris.e1_61.getLength = function(s) {
	return s.length;
};
com.wiris.e1_61.charCodeAt = function(s, i) {
	return HxOverrides.cca(s, i);
};
com.wiris.e1_61.charAt = function(s, i) {
	return com.wiris.e1_61.v12(HxOverrides.cca(s, i));
};
com.wiris.e1_61.v12 = function(i) {
	var s = new haxe.Utf8();
	s.vjY += String.fromCharCode(i);
	return s.vjY;
};
com.wiris.e1_61.sub = function(s, pos, len) {
	return HxOverrides.substr(s, pos, len);
};
com.wiris.e1_61.vkY = function(s) {
	return haxe.io.Bytes.ofString(s).b;
};
com.wiris.e1_61.vlY = function(s) {
	var vQA = haxe.io.Bytes.ofData(s);
	return vQA.toString();
};
com.wiris.e1_61.prototype = {
	__class__: com.wiris.e1_61
};