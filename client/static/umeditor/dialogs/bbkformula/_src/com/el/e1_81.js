com.wiris.e1_81 = v91["com.wiris.e1_81"] = function() {
	com.wiris.e1_71.call(this);
};
com.wiris.e1_81.__name__ = ["com", "wiris", "e1_81"];
com.wiris.e1_81.encode = function(o) {
	var js = new com.wiris.e1_81();
	var v5G = new StringBuf();
	js.v1Z(v5G, o);
	return v5G.b;
};
com.wiris.e1_81.decode = function(str) {
	var json = new com.wiris.e1_81();
	return json.v2Z(str);
};
com.wiris.e1_81.__super__ = com.wiris.e1_71;
com.wiris.e1_81.prototype = vB1(com.wiris.e1_71.prototype, {
	v3Z: function() {
		var v = new Array();
		this.vzY();
		this.v0Z();
		if (this.c == 93) {
			this.vzY();
			return v;
		};
		while (this.c != 93) {
			var o = this.v4Z();
			v.push(o);
			this.v0Z();
			if (this.c == 44) {
				this.vzY();
				this.v0Z();
			} else if (this.c != 93) throw "Expected ',' or ']'.";
		};
		this.vzY();
		return v;
	},
	v5Z: function() {
		var h = new HaxeHash();
		this.vzY();
		this.v0Z();
		if (this.c == 125) {
			this.vzY();
			return h;
		};
		while (this.c != 125) {
			var vJ1 = this.decodeString();
			this.v0Z();
			if (this.c != 58) throw "Expected ':'.";
			this.vzY();
			this.v0Z();
			var o = this.v4Z();
			h.set(vJ1, o);
			this.v0Z();
			if (this.c == 44) {
				this.vzY();
				this.v0Z();
			} else if (this.c != 125) throw "Expected ',' or '}'.";
		};
		this.vzY();
		return h;
	},
	decodeString: function() {
		var v5G = new StringBuf();
		var d = this.c;
		this.vzY();
		this.v0Z();
		do {
			if (this.c == 92) {
				this.vzY();
				if (this.c == 110) v5G.b += Std.string("\n");
				else if (this.c == 114) v5G.b += Std.string("\r");
				else if (this.c == 34) v5G.b += Std.string("\"");
				else if (this.c == 39) v5G.b += Std.string("'");
				else if (this.c == 116) v5G.b += Std.string("\t");
				else throw "Unknown scape sequence '\\" + this.c + "'";
			} else v5G.b += Std.string(com.wiris.e1_61.v12(this.c));
			this.vzY();
		} while (this.c != d);
		this.vzY();
		return v5G.b;
	},
	v4Z: function() {
		this.v0Z();
		if (this.c == 123) return this.v5Z();
		else if (this.c == 91) return this.v3Z();
		else if (this.c == 34) return this.decodeString();
		else if (this.c == 39) return this.decodeString();
		else throw "Unrecognized char " + this.c;
	},
	v2Z: function(str) {
		this.init(str);
		return this.v4Z();
	},
	encodeString: function(v5G, s) {
		v5G.b += Std.string("\"");
		var i;
		var vd1 = 0,
			vc1 = s.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			var c = HxOverrides.cca(s, vW9);
			if (c == 34) v5G.b += Std.string("\"");
			else if (c == 13) v5G.b += Std.string("\\r");
			else if (c == 10) v5G.b += Std.string("\\n");
			else if (c == 9) v5G.b += Std.string("\\t");
			else v5G.b += Std.string(s.charAt(vW9));
		};
		v5G.b += Std.string("\"");
	},
	v6Z: function(v5G, v) {
		v5G.b += Std.string("[");
		var i;
		var vd1 = 0,
			vc1 = v.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (vW9 > 0) v5G.b += Std.string(",");
			this.v1Z(v5G, v[vW9]);
		};
		v5G.b += Std.string("]");
	},
	v7Z: function(v5G, h) {
		v5G.b += Std.string("{");
		var e = h.keys();
		var first = true;
		while (e.hasNext()) {
			if (first) first = false;
			else v5G.b += Std.string(",");
			var vJ1 = e.next();
			this.encodeString(v5G, vJ1);
			v5G.b += Std.string(":");
			this.v1Z(v5G, h.get(vJ1));
		};
		v5G.b += Std.string("}");
	},
	v1Z: function(v5G, o) {
		if (com.wiris.system.TypeTools.viY(o)) this.v7Z(v5G, js.Boot.vX3(o, HaxeHash));
		else if (com.wiris.system.TypeTools.v8Y(o)) this.v6Z(v5G, js.Boot.vX3(o, Array));
		else if (js.Boot.__instanceof(o, String)) this.encodeString(v5G, js.Boot.vX3(o, String));
		else throw "Impossible to convert to json object of type " + Std.string(Type.getClass(o));
	},
	__class__: com.wiris.e1_81
});