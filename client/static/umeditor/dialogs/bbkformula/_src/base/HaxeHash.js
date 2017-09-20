var HaxeHash = v91["HaxeHash"] = function() {
	this.h = {};
};
HaxeHash.__name__ = ["HaxeHash"];
HaxeHash.prototype = {
	toString: function() {
		var s = new StringBuf();
		s.b += Std.string("{");
		var it = this.keys();
		while (it.hasNext()) {
			var i = it.next();
			s.b += Std.string(i);
			s.b += Std.string(" => ");
			s.b += Std.string(Std.string(this.get(i)));
			if (it.hasNext()) s.b += Std.string(", ");
		};
		s.b += Std.string("}");
		return s.b;
	},
	iterator: function() {
		return {
			ref: this.h,
			it: this.keys(),
			hasNext: function() {
				return this.it.hasNext();
			},
			next: function() {
				var i = this.it.next();
				return this.ref["$" + i];
			}
		};
	},
	keys: function() {
		var a = [];
		for (var vJ1 in this.h) {
			if (this.h.hasOwnProperty(vJ1)) a.push(vJ1.substr(1));
		};
		return HxOverrides.iter(a);
	},
	remove: function(vJ1) {
		vJ1 = "$" + vJ1;
		if (!this.h.hasOwnProperty(vJ1)) return false;
		delete(this.h[vJ1]);
		return true;
	},
	exists: function(vJ1) {
		return this.h.hasOwnProperty("$" + vJ1);
	},
	get: function(vJ1) {
		return this.h["$" + vJ1];
	},
	set: function(vJ1, value) {
		this.h["$" + vJ1] = value;
	},
	h: null,
	__class__: HaxeHash
};