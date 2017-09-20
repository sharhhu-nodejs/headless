var Type = v91["Type"] = function() {};
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if (o == null) return null;
	return o.__class__;
};
Type.getEnum = function(o) {
	if (o == null) return null;
	return o.va1;
};
Type.getSuperClass = function(c) {
	return c.__super__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.vX1;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var vh1 = v91[name];
	if (vh1 == null || !vh1.__name__) return null;
	return vh1;
};
Type.resolveEnum = function(name) {
	var e = v91[name];
	if (e == null || !e.vX1) return null;
	return e;
};
Type.createInstance = function(vh1, args) {
	switch (args.length) {
		case 0:
			return new vh1();
		case 1:
			return new vh1(args[0]);
		case 2:
			return new vh1(args[0], args[1]);
		case 3:
			return new vh1(args[0], args[1], args[2]);
		case 4:
			return new vh1(args[0], args[1], args[2], args[3]);
		case 5:
			return new vh1(args[0], args[1], args[2], args[3], args[4]);
		case 6:
			return new vh1(args[0], args[1], args[2], args[3], args[4], args[5]);
		case 7:
			return new vh1(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
		case 8:
			return new vh1(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
		default:
			throw "Too many arguments";
	};
	return null;
};
Type.createEmptyInstance = function(vh1) {
	function empty() {};
	empty.prototype = vh1.prototype;
	return new empty();
};
Type.createEnum = function(e, vp1, params) {
	var f = Reflect.field(e, vp1);
	if (f == null) throw "No such constructor " + vp1;
	if (Reflect.isFunction(f)) {
		if (params == null) throw "Constructor " + vp1 + " need parameters";
		return f.apply(e, params);
	};
	if (params != null && params.length != 0) throw "Constructor " + vp1 + " does not need parameters";
	return f;
};
Type.createEnumIndex = function(e, index, params) {
	var c = e.vn1[index];
	if (c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e, c, params);
};
Type.getInstanceFields = function(c) {
	var a = [];
	for (var i in c.prototype) a.push(i);
	HxOverrides.remove(a, "__class__");
	HxOverrides.remove(a, "__properties__");
	return a;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a, "__name__");
	HxOverrides.remove(a, "__interfaces__");
	HxOverrides.remove(a, "__properties__");
	HxOverrides.remove(a, "__super__");
	HxOverrides.remove(a, "prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.vn1;
	return a.slice();
};
Type["typeof"] = function(v) {
	switch (typeof(v)) {
		case "boolean":
			return ValueType.TBool;
		case "string":
			return ValueType.TClass(String);
		case "number":
			if (Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
			return ValueType.TFloat;
		case "object":
			if (v == null) return ValueType.TNull;
			var e = v.va1;
			if (e != null) return ValueType.TEnum(e);
			var c = v.__class__;
			if (c != null) return ValueType.TClass(c);
			return ValueType.TObject;
		case "function":
			if (v.__name__ || v.vX1) return ValueType.TObject;
			return ValueType.TFunction;
		case "undefined":
			return ValueType.TNull;
		default:
			return ValueType.TUnknown;
	}
};
Type.enumEq = function(a, b) {
	if (a == b) return true;
	try {
		if (a[0] != b[0]) return false;
		var vd1 = 2,
			vc1 = a.length;
		while (vd1 < vc1) {
			var i = vd1++;
			if (!Type.enumEq(a[i], b[i])) return false;
		};
		var e = a.va1;
		if (e != b.va1 || e == null) return false;
	} catch (e) {
		return false;
	};
	return true;
};
Type.enumConstructor = function(e) {
	return e[0];
};
Type.enumParameters = function(e) {
	return e.slice(2);
};
Type.enumIndex = function(e) {
	return e[1];
};
Type.vq1 = function(e) {
	var all = [];
	var vr1 = e.vn1;
	var vc1 = 0;
	while (vc1 < vr1.length) {
		var c = vr1[vc1];
		++vc1;
		var v = Reflect.field(e, c);
		if (!Reflect.isFunction(v)) all.push(v);
	};
	return all;
};