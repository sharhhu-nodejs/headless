var EReg = v91["EReg"] = function(r, opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r, opt);
};
EReg.__name__ = ["EReg"];
EReg.prototype = {
	customReplace: function(s, f) {
		var buf = new StringBuf();
		while (true) {
			if (!this.match(s)) break;
			buf.b += Std.string(this.matchedLeft());
			buf.b += Std.string(f(this));
			s = this.matchedRight();
		};
		buf.b += Std.string(s);
		return buf.b;
	},
	replace: function(s, vD1) {
		return s.replace(this.r, vD1);
	},
	split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r, d).split(d);
	},
	matchedPos: function() {
		if (this.r.m == null) throw "No string matched";
		return {
			pos: this.r.m.index,
			len: this.r.m[0].length
		};
	},
	matchedRight: function() {
		if (this.r.m == null) throw "No string matched";
		var vE1 = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(vE1, this.r.s.length - vE1);
	},
	matchedLeft: function() {
		if (this.r.m == null) throw "No string matched";
		return this.r.s.substr(0, this.r.m.index);
	},
	matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length ? this.r.m[n] : (function(vF1) {
			var vG1;
			throw "EReg::matched";
			return vG1;
		}(this));
	},
	match: function(s) {
		if (this.r.vH1) this.r.vI1 = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	},
	r: null,
	__class__: EReg
};