var v91 = v91 || {},
	vA1 = function() {
		return js.Boot.__string_rec(this, '');
	};

function vB1(from, fields) {
	function inherit() {};
	inherit.prototype = from;
	var vC1 = new inherit();
	for (var name in fields) vC1[name] = fields[name];
	return vC1;
};

var com = com || {};
if (!com.wiris) com.wiris = {};
if (!com.wiris.common) com.wiris.common = {};