var List = v91["List"] = function() {
	this.length = 0;
};
List.__name__ = ["List"];
List.prototype = {
	map: function(f) {
		var b = new List();
		var l = this.h;
		while (l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		};
		return b;
	},
	filter: function(f) {
		var vR1 = new List();
		var l = this.h;
		while (l != null) {
			var v = l[0];
			l = l[1];
			if (f(v)) vR1.add(v);
		};
		return vR1;
	},
	join: function(vS1) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while (l != null) {
			if (first) first = false;
			else s.b += Std.string(vS1);
			s.b += Std.string(l[0]);
			l = l[1];
		};
		return s.b;
	},
	toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b += Std.string("{");
		while (l != null) {
			if (first) first = false;
			else s.b += Std.string(", ");
			s.b += Std.string(Std.string(l[0]));
			l = l[1];
		};
		s.b += Std.string("}");
		return s.b;
	},
	iterator: function() {
		return {
			h: this.h,
			hasNext: function() {
				return this.h != null;
			},
			next: function() {
				if (this.h == null) return null;
				var x = this.h[0];
				this.h = this.h[1];
				return x;
			}
		};
	},
	remove: function(v) {
		var vT1 = null;
		var l = this.h;
		while (l != null) {
			if (l[0] == v) {
				if (vT1 == null) this.h = l[1];
				else vT1[1] = l[1]; if (this.q == l) this.q = vT1;
				this.length--;
				return true;
			};
			vT1 = l;
			l = l[1];
		};
		return false;
	},
	clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	},
	isEmpty: function() {
		return this.h == null;
	},
	pop: function() {
		if (this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if (this.h == null) this.q = null;
		this.length--;
		return x;
	},
	last: function() {
		return this.q == null ? null : this.q[0];
	},
	first: function() {
		return this.h == null ? null : this.h[0];
	},
	push: function(item) {
		var x = [item, this.h];
		this.h = x;
		if (this.q == null) this.q = x;
		this.length++;
	},
	add: function(item) {
		var x = [item];
		if (this.h == null) this.h = x;
		else this.q[1] = x;
		this.q = x;
		this.length++;
	},
	length: null,
	q: null,
	h: null,
	__class__: List
};