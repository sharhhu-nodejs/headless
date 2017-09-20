com.wiris.e1_Z = v91["com.wiris.e1_Z"] = function() {
	com.wiris.e1_Y.call(this);
};
com.wiris.e1_Z.__name__ = ["com", "wiris", "e1_Z"];
com.wiris.e1_Z.vkO = function(box, vEA, vnA, mode, left, right) {
	var t;
	t = new com.wiris.e1_Z();
	t.box = box;
	t.vEA = vEA;
	t.vnA = vnA;
	if (left != null) {
		t.vEA--;
		if (right == null && t.vnA - t.vEA == 1) {
			t.vnA++;
			if (t.vnA == box.vmK()) {
				t.vEA = 0;
				t.vnA--;
			}
		}
	};
	if (right != null) {
		t.vnA++;
		if (left == null && t.vnA - t.vEA == 1) {
			t.vEA--;
			if (t.vEA == -1) {
				t.vEA = 0;
				t.vnA = box.vmK() - 1;
			}
		}
	};
	t.mode = mode;
	return t;
};
com.wiris.e1_Z.__super__ = com.wiris.e1_Y;
com.wiris.e1_Z.prototype = vB1(com.wiris.e1_Y.prototype, {
	vAF: function() {
		return true;
	},
	vmC: function() {
		return (js.Boot.vX3(this.box, com.wiris.e1_X)).vmC(this.vEA, this.vnA);
	},
	vVD: function(b) {
		this.vnA = (js.Boot.vX3(this.box, com.wiris.e1_X)).vmO(this.vEA, this.vnA, this.mode, js.Boot.vX3(b, com.wiris.e1_X));
	},
	deleteSelection: function(v4F) {
		var x = (js.Boot.vX3(this.box, com.wiris.e1_X)).vtO(this.vEA, this.vnA, this.mode, v4F);
		if (x == -1) return false;
		this.mode = 0;
		if (x == -2) {
			this.mode = 1;
			this.vnA = this.vEA;
			return true;
		};
		if (x == -3) {
			this.mode = 2;
			this.vnA = this.vEA;
			return true;
		};
		this.vnA = x;
		return true;
	},
	vlK: function() {
		return false;
	},
	vnK: function() {
		return false;
	},
	vsE: function() {
		return false;
	},
	__class__: com.wiris.e1_Z
});