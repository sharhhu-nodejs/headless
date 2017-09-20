com.wiris.e1_p = v91["com.wiris.e1_p"] = function(voR) {
	this.vpR = new HaxeHash();
	this.vqR = new HaxeHash();
	var i = HxOverrides.iter(js.Boot.vX3(voR.get("childs"), Array));
	while (i.hasNext()) {
		var node = js.Boot.vX3(i.next(), HaxeHash);
		var nodeName = js.Boot.vX3(node.get("name"), String);
		if (nodeName == "imageGroup") this.vrR(node);
		else if (nodeName == "image") this.vsR(node);
	}
};
com.wiris.e1_p.__name__ = ["com", "wiris", "e1_p"];
com.wiris.e1_p.getNewInstanceFromXML = function(vtR) {
	if (vtR.nodeType != Xml.Element) throw "The root node at the images definition is not an Element.";
	if (!(vtR.getNodeName() == "images")) throw "The root node at the image definition is \"" + vtR.getNodeName() + "\" instead of \"images\".";
	return new com.wiris.e1_p(com.wiris.editor.ModelFactory.vs5(vtR));
};
com.wiris.e1_p.prototype = {
	vrR: function(node) {
		var filePath = js.Boot.vX3(node.get("filePath"), String);
		var i = HxOverrides.iter(js.Boot.vX3(node.get("childs"), Array));
		while (i.hasNext()) {
			var vTB = js.Boot.vX3(i.next(), HaxeHash);
			if (vTB.get("name") == "image") {
				vTB.set("filePath", filePath);
				this.vsR(vTB);
			}
		}
	},
	vsR: function(node) {
		var vn5 = js.Boot.vX3(node.get("attrs"), HaxeHash);
		var vuR = vn5.get("src");
		var vvR = this.vqR;
		if (vuR == null) {
			vuR = vn5.get("mathmlHash");
			vvR = this.vpR;
		};
		if (vuR != null) {
			var vJ1 = js.Boot.vX3(vuR, String);
			var vwR = vn5.get("filePath");
			if (vwR == null) throw "Attribute \"filePath\" not found in a \"image\" node.";
			var filePath = js.Boot.vX3(vwR, String);
			var vxR = vn5.get("bounds");
			if (vxR == null) throw "Attribute \"bounds\" not found in a \"image\" node.";
			var bounds = js.Boot.vX3(vxR, String);
			var vyR = bounds.split(",");
			if (vyR.length != 4) throw "Wrong format for bounds \"" + bounds + "\".";
			var image = new com.wiris.e1_o(filePath, Std.parseInt(vyR[0]), Std.parseInt(vyR[1]), Std.parseInt(vyR[2]), Std.parseInt(vyR[3]), null);
			vvR.set(vJ1, image);
		}
	},
	vR5: function(src, vt5) {
		var image = this.vqR.get(src);
		if (image == null) {
			if (vt5) return null;
			return this.vzR(src);
		};
		return image;
	},
	v0S: function(src) {
		return this.vqR.exists(src);
	},
	vv5: function(vi3) {
		var image = this.vpR.get(haxe.Md5.encode(vi3));
		if (image == null) return this.v1S(vi3);
		return image;
	},
	vzR: function(src) {
		return new com.wiris.e1_o(src, -1, -1, -1, -1, null);
	},
	v1S: function(vi3) {
		return new com.wiris.e1_o(null, -1, -1, -1, -1, vi3);
	},
	vqR: null,
	vpR: null,
	__class__: com.wiris.e1_p
};