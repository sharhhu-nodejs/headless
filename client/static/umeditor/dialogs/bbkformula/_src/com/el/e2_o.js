com.wiris.e1_o = v91["com.wiris.e1_o"] = function(filePath, left, top, right, bottom, vi3) {
	this.filePath = filePath;
	this.left = left;
	this.top = top;
	this.right = right;
	this.bottom = bottom;
	this.vi3 = vi3;
};
com.wiris.e1_o.__name__ = ["com", "wiris", "e1_o"];
com.wiris.e1_o.prototype = {
	getWidth: function() {
		return this.right - this.left;
	},
	getHeight: function() {
		return this.bottom - this.top;
	},
	top: null,
	right: null,
	vi3: null,
	left: null,
	filePath: null,
	bottom: null,
	__class__: com.wiris.e1_o
};