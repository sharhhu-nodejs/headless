var IntIter = v91["IntIter"] = function(min, max) {
	this.min = min;
	this.max = max;
};
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	next: function() {
		return this.min++;
	},
	hasNext: function() {
		return this.min < this.max;
	},
	max: null,
	min: null,
	__class__: IntIter
};