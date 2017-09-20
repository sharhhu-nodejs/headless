var StringBuf = v91["StringBuf"] = function() {
	this.b = "";
};
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	toString: function() {
		return this.b;
	},
	addSub: function(s, pos, len) {
		this.b += HxOverrides.substr(s, pos, len);
	},
	addChar: function(c) {
		this.b += String.fromCharCode(c);
	},
	add: function(x) {
		this.b += Std.string(x);
	},
	b: null,
	__class__: StringBuf
};