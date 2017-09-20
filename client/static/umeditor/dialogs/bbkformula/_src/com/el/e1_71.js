com.wiris.e1_71 = v91["com.wiris.e1_71"] = function() {};
com.wiris.e1_71.__name__ = ["com", "wiris", "e1_71"];
com.wiris.e1_71.isBlank = function(c) {
	return c == 32 || c == 10 || c == 13 || c == 9 || c == 160;
};
com.wiris.e1_71.prototype = {
	vyY: function() {
		if (this.i < this.n) {
			this.c = HxOverrides.cca(this.str, this.i);
			this.i++;
		} else this.c = -1;
	},
	vzY: function() {
		if (this.c == -1) throw "End of string";
		this.vyY();
	},
	v0Z: function() {
		while (this.i < this.n && com.wiris.e1_71.isBlank(this.c)) this.vzY();
	},
	init: function(str) {
		this.str = str;
		this.i = 0;
		this.n = str.length;
		this.vzY();
	},
	str: null,
	c: null,
	n: null,
	i: null,
	__class__: com.wiris.e1_71
};