var Reflect = v91["Reflect"] = function() {};
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o, field) {
	return Object.prototype.hasOwnProperty.call(o, field);
};
Reflect.field = function(o, field) {
	var v = null;
	try {
		v = o[field];
	} catch (e) {};
	return v;
};
Reflect.setField = function(o, field, value) {
	o[field] = value;
};
Reflect.getProperty = function(o, field) {
	var vU1;
	return o == null ? null : o.__properties__ && (vU1 = o.__properties__["get_" + field]) ? o[vU1]() : o[field];
};
Reflect.vV1 = function(o, field, value) {
	var vU1;
	if (o.__properties__ && (vU1 = o.__properties__["set_" + field])) o[vU1](value);
	else o[field] = value;
};
Reflect.callMethod = function(o, vW1, args) {
	return vW1.apply(o, args);
};
Reflect.fields = function(o) {
	var a = [];
	if (o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for (var f in o) {
			if (hasOwnProperty.call(o, f)) a.push(f);
		}
	};
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.vX1);
};
Reflect.compare = function(a, b) {
	return a == b ? 0 : a > b ? 1 : -1;
};
Reflect.compareMethods = function(vY1, vZ1) {
	if (vY1 == vZ1) return true;
	if (!Reflect.isFunction(vY1) || !Reflect.isFunction(vZ1)) return false;
	return vY1.scope == vZ1.scope && vY1.method == vZ1.method && vY1.method != null;
};
Reflect.isObject = function(v) {
	if (v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.va1 || t == "function" && (v.__name__ || v.vX1);
};
Reflect.deleteField = function(o, f) {
	if (!Reflect.hasField(o, f)) return false;
	delete(o[f]);
	return true;
};
Reflect.copy = function(o) {
	var vb1 = {};
	var vc1 = 0,
		vd1 = Reflect.fields(o);
	while (vc1 < vd1.length) {
		var f = vd1[vc1];
		++vc1;
		vb1[f] = Reflect.field(o, f);
	};
	return vb1;
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};