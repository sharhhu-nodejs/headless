var Std = v91["Std"] = function() {};
Std.__name__ = ["Std"];
Std["is"] = function(v, t) {
	return js.Boot.__instanceof(v, t);
};
Std.string = function(s) {
	return js.Boot.__string_rec(s, "");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x, 10);
	if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88)) v = parseInt(x);
	if (isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	return Math.floor(Math.random() * x);
};