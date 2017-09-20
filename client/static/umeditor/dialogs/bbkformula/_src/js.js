var js = js || {};
js.Boot = v91["js.Boot"] = function() {};
js.Boot.__name__ = ["js", "Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v, i) {
	var vfa = i != null ? i.fileName + ":" + i.lineNumber + ": " : "";
	vfa += js.Boot.__string_rec(v, "");
	var d;
	if (typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(vfa) + "<br/>";
	else if (typeof(vga) != "undefined" && vga.log != null) vga.log(vfa);
};
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if (d != null) d.innerHTML = "";
};
js.Boot.vha = function(o) {
	return o.__name__;
};
js.Boot.via = function(e) {
	return e.vX1;
};
js.Boot.getClass = function(o) {
	return o.__class__;
};
js.Boot.__string_rec = function(o, s) {
	if (o == null) return "null";
	if (s.length >= 5) return "<...>";
	var t = typeof(o);
	if (t == "function" && (o.__name__ || o.vX1)) t = "object";
	switch (t) {
		case "object":
			if (o instanceof Array) {
				if (o.va1) {
					if (o.length == 2) return o[0];
					var str = o[0] + "(";
					s += "\t";
					var vd1 = 2,
						vc1 = o.length;
					while (vd1 < vc1) {
						var i = vd1++;
						if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);
						else str += js.Boot.__string_rec(o[i], s);
					};
					return str + ")";
				};
				var l = o.length;
				var i;
				var str = "[";
				s += "\t";
				var vc1 = 0;
				while (vc1 < l) {
					var vW9 = vc1++;
					str += (vW9 > 0 ? "," : "") + js.Boot.__string_rec(o[vW9], s);
				};
				str += "]";
				return str;
			};
			var vja;
			try {
				vja = o.toString;
			} catch (e) {
				return "???";
			};
			if (vja != null && vja != Object.toString) {
				var vk2 = o.toString();
				if (vk2 != "[object Object]") return vk2;
			};
			var k = null;
			var str = "{\n";
			s += "\t";
			var vka = o.hasOwnProperty != null;
			for (var k in o) {;
				if (vka && !o.hasOwnProperty(k)) {
					continue;
				};
				if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
					continue;
				};
				if (str.length != 2) str += ", \n";
				str += s + k + " : " + js.Boot.__string_rec(o[k], s);
			};
			s = s.substring(1);
			str += "\n" + s + "}";
			return str;
		case "function":
			return "<function>";
		case "string":
			return o;
		default:
			return String(o);
	}
};
js.Boot.__interfLoop = function(vr8, vh1) {
	if (vr8 == null) return false;
	if (vr8 == vh1) return true;
	var vla = vr8.__interfaces__;
	if (vla != null) {
		var vd1 = 0,
			vc1 = vla.length;
		while (vd1 < vc1) {
			var i = vd1++;
			var vW9 = vla[i];
			if (vW9 == vh1 || js.Boot.__interfLoop(vW9, vh1)) return true;
		}
	};
	return js.Boot.__interfLoop(vr8.__super__, vh1);
};
js.Boot.__instanceof = function(o, vh1) {
	try {
		if (o instanceof vh1) {
			if (vh1 == Array) return o.va1 == null;
			return true;
		};
		if (js.Boot.__interfLoop(o.__class__, vh1)) return true;
	} catch (e) {
		if (vh1 == null) return false;
	};
	switch (vh1) {
		case Int:
			return Math.ceil(o % 2147483648.0) === o;
		case Float:
			return typeof(o) == "number";
		case Bool:
			return o === true || o === false;
		case String:
			return typeof(o) == "string";
		case Dynamic:
			return true;
		default:
			if (o == null) return false;
			if (vh1 == Class && o.__name__ != null) return true;
			else null; if (vh1 == Enum && o.vX1 != null) return true;
			else null;
			return o.va1 == vh1;
	}
};
js.Boot.vX3 = function(o, t) {
	if (js.Boot.__instanceof(o, t)) return o;
	else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
js.Lib = v91["js.Lib"] = function() {};
js.Lib.__name__ = ["js", "Lib"];
js.Lib.document = null;
js.Lib.window = null;
js.Lib.debug = function() {
	debugger;
};
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v, ""));
};
js.Lib.eval = function(code) {
	return eval(code);
};
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
};