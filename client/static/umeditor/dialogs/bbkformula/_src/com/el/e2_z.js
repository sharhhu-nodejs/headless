com.wiris.e1_z = v91["com.wiris.e1_z"] = function() {
	this.vaS = new Array();
	this.vbS("navigator.userAgent", null, "Chrome", null, "Chrome");
	this.vbS("navigator.userAgent", null, "OmniWeb", null, "OmniWeb");
	this.vbS("navigator.vendor", null, "Apple", "Version", "Safari");
	this.vbS(null, "window.opera", null, "Version", "Opera");
	this.vbS("navigator.vendor", null, "iCab", null, "iCab");
	this.vbS("navigator.vendor", null, "KDE", null, "Konkeror");
	this.vbS("navigator.userAgent", null, "Firefox", null, "Firefox");
	this.vbS("navigator.vendor", null, "Camino", null, "Camino");
	this.vbS("navigator.userAgent", null, "Netscape", null, "Netscape");
	this.vbS("navigator.userAgent", null, "MSIE", "MSIE", "Explorer");
	this.vbS("navigator.userAgent", null, "Gecko", "rv", "Mozilla");
	this.vbS("navigator.userAgent", null, "Mozilla", "Mozilla", "Netscape");
	this.vcS = new Array();
	this.vdS("navigator.platform", "Win", "Windows");
	this.vdS("navigator.platform", "Mac", "Mac");
	this.vdS("navigator.userAgent", "iPhone", "iOS");
	this.vdS("navigator.userAgent", "iPad", "iOS");
	this.vdS("navigator.userAgent", "Android", "Android");
	this.vdS("navigator.platform", "Linux", "Linux");
	this.veS();
	this.vfS();
};
com.wiris.e1_z.__name__ = ["com", "wiris", "e1_z"];
com.wiris.e1_z.prototype = {
	vgS: function() {
		return this.vOD == "Android";
	},
	vhS: function() {
		return this.vOD == "iOS";
	},
	viS: function() {
		return this.browser == "Firefox";
	},
	vjS: function() {
		return this.browser == "Safari";
	},
	vkS: function() {
		return this.browser == "Chrome";
	},
	isIE: function() {
		return this.browser == "Explorer";
	},
	getVersion: function() {
		return this.vlS;
	},
	vmS: function() {
		return this.vOD;
	},
	vnS: function() {
		return this.browser;
	},
	voS: function(vZS, search) {
		var str = js.Boot.vX3(eval(vZS), String);
		var index = str.indexOf(search);
		if (index == -1) return null;
		return "" + Std.parseFloat(HxOverrides.substr(str, index + search.length + 1, null));
	},
	vfS: function() {
		var i = HxOverrides.iter(this.vcS);
		while (i.hasNext()) {
			var s = i.next();
			var str = js.Boot.vX3(eval(s.string), String);
			if (str.indexOf(s.vYS) != -1) {
				this.vOD = s.vWS;
				return;
			}
		}
	},
	veS: function() {
		var i = HxOverrides.iter(this.vaS);
		while (i.hasNext()) {
			var b = i.next();
			if (b.string != null) {
				var obj = eval(b.string);
				if (obj != null) {
					var str = js.Boot.vX3(obj, String);
					if (str.indexOf(b.vYS) != -1) {
						this.browser = b.vWS;
						this.vlS = this.voS("navigator.userAgent", b.vXS);
						if (this.vlS == null) this.vlS = this.voS("navigator.appVersion", b.vXS);
						return;
					}
				}
			}
		}
	},
	vdS: function(string, vYS, vWS) {
		var s = new com.wiris.e1_y();
		s.string = string;
		s.vYS = vYS;
		s.vWS = vWS;
		this.vcS.push(s);
	},
	vbS: function(string, vZS, vYS, vXS, vWS) {
		var b = new com.wiris.e1_x();
		b.string = string;
		b.vZS = vZS;
		b.vYS = vYS;
		b.vXS = vXS != null ? vXS : vWS;
		b.vWS = vWS;
		this.vaS.push(b);
	},
	vOD: null,
	vlS: null,
	browser: null,
	vcS: null,
	vaS: null,
	__class__: com.wiris.e1_z
};