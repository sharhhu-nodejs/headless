var HxOverrides = v91["HxOverrides"] = function() {};
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.vK1 = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
};
HxOverrides.vL1 = function(s) {
	switch (s.length) {
		case 8:
			var k = s.split(":");
			var d = new Date();
			d.vM1(0);
			d.vN1(k[0]);
			d.vO1(k[1]);
			d.vP1(k[2]);
			return d;
		case 10:
			var k = s.split("-");
			return new Date(k[0], k[1] - 1, k[2], 0, 0, 0);
		case 19:
			var k = s.split(" ");
			var vQ1 = k[0].split("-");
			var t = k[1].split(":");
			return new Date(vQ1[0], vQ1[1] - 1, vQ1[2], t[0], t[1], t[2]);
		default:
			throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s, index) {
	var x = s.charCodeAt(index);
	if (x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s, pos, len) {
	if (!s) return;
	if (pos != null && pos != 0 && len != null && len < 0) return "";
	if (len == null) len = s.length;
	if (pos < 0) {
		pos = s.length + pos;
		if (pos < 0) pos = 0;
	} else if (len < 0) len = s.length + len - pos;
	return s.substr(pos, len);
};
HxOverrides.remove = function(a, obj) {
	var i = 0;
	var l = a.length;
	while (i < l) {
		if (a[i] == obj) {
			a.splice(i, 1);
			return true;
		};
		i++;
	};
	return false;
};
HxOverrides.iter = function(a) {
	return {
		cur: 0,
		arr: a,
		hasNext: function() {
			return this.cur < this.arr.length;
		},
		next: function() {
			return this.arr[this.cur++];
		}
	};
};