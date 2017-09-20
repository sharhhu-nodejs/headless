if (!com.wiris.util.xml) com.wiris.util.xml = {};
com.wiris.util.xml.WEntities = v91["com.wiris.util.xml.WEntities"] = function() {};
com.wiris.util.xml.WEntities.__name__ = ["com", "wiris", "util", "xml", "WEntities"];
com.wiris.util.xml.WXmlUtils = v91["com.wiris.util.xml.WXmlUtils"] = function() {};
com.wiris.util.xml.WXmlUtils.__name__ = ["com", "wiris", "util", "xml", "WXmlUtils"];
com.wiris.util.xml.WXmlUtils.vS6 = function(element) {
	var v5G = new StringBuf();
	if (element.nodeType == Xml.Document || element.nodeType == Xml.Element) {
		var i = element.iterator();
		while (i.hasNext()) v5G.b += Std.string(i.next().toString());
	};
	return v5G.b;
};
com.wiris.util.xml.WXmlUtils.vB5 = function(v8Z, vC5, vD5) {
	var nodes = new Array();
	while (v8Z.hasNext()) {
		var node = v8Z.next();
		if (node.nodeType == Xml.Element && vD5 == com.wiris.util.xml.WXmlUtils.getAttribute(node, vC5)) nodes.push(node);
	};
	return nodes;
};
com.wiris.util.xml.WXmlUtils.getElementsByTagName = function(v8Z, vQB) {
	var nodes = new Array();
	while (v8Z.hasNext()) {
		var node = v8Z.next();
		if (node.nodeType == Xml.Element && node.getNodeName() == vQB) nodes.push(node);
	};
	return nodes;
};
com.wiris.util.xml.WXmlUtils.getElements = function(node) {
	var nodes = new Array();
	var v8Z = node.iterator();
	while (v8Z.hasNext()) {
		var item = v8Z.next();
		if (item.nodeType == Xml.Element) nodes.push(item);
	};
	return nodes;
};
com.wiris.util.xml.WXmlUtils.vy5 = function(doc) {
	var v8Z = doc.iterator();
	while (v8Z.hasNext()) {
		var node = v8Z.next();
		if (node.nodeType == Xml.Element) return node;
	};
	return null;
};
com.wiris.util.xml.WXmlUtils.getAttribute = function(node, vC5) {
	var value = node.get(vC5);

	if (value == null) return null;
	// if (com.wiris.settings.PlatformSettings.v9Z) return com.wiris.util.xml.WXmlUtils.htmlUnescape(value);
	return value;
};
com.wiris.util.xml.WXmlUtils.setAttribute = function(node, name, value) {
	if (value != null && com.wiris.settings.PlatformSettings.v9Z) value = com.wiris.util.xml.WXmlUtils.htmlEscape(value);
	node.set(name, value);
};
com.wiris.util.xml.WXmlUtils.getNodeValue = function(node) {
	var value = node.getNodeValue();
	if (value == null) return null;
	if (com.wiris.settings.PlatformSettings.v9Z && node.nodeType == Xml.PCData) return com.wiris.util.xml.WXmlUtils.htmlUnescape(value);
	return value;
};
com.wiris.util.xml.WXmlUtils.createPCData = function(node, text) {
	if (com.wiris.settings.PlatformSettings.v9Z) text = com.wiris.util.xml.WXmlUtils.htmlEscape(text);
	return Xml.createPCData(text);
};
com.wiris.util.xml.WXmlUtils.htmlEscape = function(input) {
	var output = StringTools.replace(input, "&", "&amp;");
	output = StringTools.replace(output, "<", "&lt;");
	output = StringTools.replace(output, ">", "&gt;");
	output = StringTools.replace(output, "\"", "&quot;");
	return output;
};
com.wiris.util.xml.WXmlUtils.htmlUnescape = function(input) {
	var output = "";
	var start = 0;
	var position = input.indexOf("&", start);
	while (position != -1) {
		output += HxOverrides.substr(input, start, position - start);
		if (input.charAt(position + 1) == "#") {
			var vAZ = position + 2;
			var vrE = input.indexOf(";", vAZ);
			if (vrE != -1) {
				var number = HxOverrides.substr(input, vAZ, vrE - vAZ);
				if (StringTools.startsWith(number, "x")) number = "0" + number;
				var charCode = Std.parseInt(number);
				output += com.wiris.e1_61.v12(charCode);
				start = vrE + 1;
			} else {
				output += "&";
				start = position + 1;
			}
		} else {
			output += "&";
			start = position + 1;
		};
		position = input.indexOf("&", start);
	};
	output += HxOverrides.substr(input, start, input.length - start);
	output = StringTools.replace(output, "&lt;", "<");
	output = StringTools.replace(output, "&gt;", ">");
	output = StringTools.replace(output, "&quot;", "\"");
	output = StringTools.replace(output, "&amp;", "&");
	return output;
};
com.wiris.util.xml.WXmlUtils.vBZ = null;
com.wiris.util.xml.WXmlUtils.vN3 = function(xml) {
	xml = com.wiris.util.xml.WXmlUtils.vCZ(xml);
	var x = Xml.parse(xml);
	return x;
};
com.wiris.util.xml.WXmlUtils.vb4 = function(xml) {
	var s = xml.toString();
	//暂时不对数据转义
	// s = com.wiris.util.xml.WXmlUtils.vCZ(s);
	return s;
};
com.wiris.util.xml.WXmlUtils.vCZ = function(text) {
	com.wiris.util.xml.WXmlUtils.vDZ();
	var v5G = new StringBuf();
	var i = 0;
	var n = text.length;
	while (i < n) {
		var c = HxOverrides.cca(text, i);
		if (c == 60 && i + 12 < n && HxOverrides.cca(text, i + 1) == 33) {
			if (HxOverrides.substr(text, i, 9) == "<![CDATA[") {
				var e = text.indexOf("]]>", i);
				if (e != -1) {
					v5G.b += Std.string(HxOverrides.substr(text, i, e - i + 3));
					i = e + 3;
					continue;
				}
			}
		};
		if (c > 127) {
			var d = c;
			if (com.wiris.settings.PlatformSettings.vEZ) {
				var vH4 = 0;
				c = 128;
				do {
					c = c >> 1;
					vH4++;
				} while ((d & c) != 0);
				d = c - 1 & d;
				while (--vH4 > 0) {
					i++;
					c = HxOverrides.cca(text, i);
					d = (d << 6) + (c & 63);
				}
			};
			v5G.b += Std.string("&#" + d + ";");
		} else {
			v5G.b += String.fromCharCode(c);
			if (c == 38) {
				i++;
				c = HxOverrides.cca(text, i);
				if (com.wiris.util.xml.WXmlUtils.vFZ(c)) {
					var name = new StringBuf();
					name.b += String.fromCharCode(c);
					i++;
					c = HxOverrides.cca(text, i);
					while (com.wiris.util.xml.WXmlUtils.vGZ(c)) {
						name.b += String.fromCharCode(c);
						i++;
						c = HxOverrides.cca(text, i);
					};
					var vHZ = name.b;
					if (c == 59 && com.wiris.util.xml.WXmlUtils.vBZ.exists(vHZ)) {
						var vIZ = com.wiris.util.xml.WXmlUtils.vBZ.get(vHZ);
						v5G.b += Std.string("#");
						v5G.b += Std.string(vIZ);
					} else v5G.b += Std.string(name);
				} else if (c == 35) {
					v5G.b += String.fromCharCode(c);
					i++;
					c = HxOverrides.cca(text, i);
					if (c == 120) {
						var hex = new StringBuf();
						i++;
						c = HxOverrides.cca(text, i);
						while (com.wiris.util.xml.WXmlUtils.vJZ(c)) {
							hex.b += String.fromCharCode(c);
							i++;
							c = HxOverrides.cca(text, i);
						};
						var vKZ = hex.b;
						if (c == 59) {
							var vLZ = Std.parseInt("0x" + vKZ);
							v5G.b += Std.string("" + vLZ);
						} else {
							v5G.b += Std.string("x");
							v5G.b += Std.string(vKZ);
						}
					}
				};
				v5G.b += String.fromCharCode(c);
			}
		};
		i++;
	};
	return v5G.b;
};
com.wiris.util.xml.WXmlUtils.vFZ = function(c) {
	if (65 <= c && c <= 90) return true;
	if (97 <= c && c <= 122) return true;
	if (c == 95 || c == 58) return true;
	return false;
};
com.wiris.util.xml.WXmlUtils.vGZ = function(c) {
	if (com.wiris.util.xml.WXmlUtils.vFZ(c)) return true;
	if (48 <= c && c <= 57) return true;
	if (c == 46 || c == 45) return true;
	return false;
};
com.wiris.util.xml.WXmlUtils.vJZ = function(c) {
	if (c >= 48 && c <= 57) return true;
	if (c >= 65 && c <= 70) return true;
	if (c >= 97 && c <= 102) return true;
	return false;
};
com.wiris.util.xml.WXmlUtils.vDZ = function() {
	if (com.wiris.util.xml.WXmlUtils.vBZ == null) {
		var e = com.wiris.util.xml.WEntities.vMZ;
		com.wiris.util.xml.WXmlUtils.vBZ = new HaxeHash();
		var start = 0;
		var vq8;
		while ((vq8 = e.indexOf("@", start)) != -1) {
			var name = HxOverrides.substr(e, start, vq8 - start);
			vq8++;
			start = e.indexOf("@", vq8);
			if (start == -1) break;
			var value = HxOverrides.substr(e, vq8, start - vq8);
			var viJ = Std.parseInt("0x" + value);
			com.wiris.util.xml.WXmlUtils.vBZ.set(name, "" + viJ);
			start++;
		}
	}
};
com.wiris.util.xml.WXmlUtils.vM8 = function(xml) {
	if (xml.nodeType == Xml.PCData) return xml.getNodeValue();
	var r = "";
	var iter = xml.iterator();
	while (iter.hasNext()) r += com.wiris.util.xml.WXmlUtils.vM8(iter.next());
	return r;
};
com.wiris.util.xml.WXmlUtils.vNZ = function(vOZ) {
	return com.wiris.util.xml.WXmlUtils.vPZ(vOZ, vOZ);
};
com.wiris.util.xml.WXmlUtils.vPZ = function(vOZ, vQZ) {
	var n = null;
	if (vOZ.nodeType == Xml.Element) {
		n = Xml.createElement(vOZ.getNodeName());
		var keys = vOZ.attributes();
		while (keys.hasNext()) {
			var vJ1 = keys.next();
			n.set(vJ1, vOZ.get(vJ1));
		};
		var vNK = vOZ.iterator();
		while (vNK.hasNext()) n.addChild(com.wiris.util.xml.WXmlUtils.vPZ(vNK.next(), vQZ));
	} else if (vOZ.nodeType == Xml.Document) n = com.wiris.util.xml.WXmlUtils.vPZ(vOZ.firstElement(), vQZ);
	else if (vOZ.nodeType == Xml.CData) n = Xml.createCData(vOZ.getNodeValue());
	else if (vOZ.nodeType == Xml.PCData) n = Xml.createPCData(vOZ.getNodeValue());
	else throw "Unsupported node type: " + Std.string(vOZ.nodeType);
	return n;
};
com.wiris.util.xml.WXmlUtils.indentXml = function(xml, vvG) {
	var depth = 0;
	var vRZ = new EReg("^<([\\w-_]+)[^>]*>$", "");
	var vSZ = new EReg("^<([\\w-_]+)[^>]*/>$", "");
	var vTZ = new EReg("^</([\\w-_]+)>$", "");
	var vpI = new StringBuf();
	var end = 0;
	var start;
	var text;
	while (end < xml.length && (start = xml.indexOf("<", end)) != -1) {
		text = start > end;
		if (text) vpI.b += Std.string(HxOverrides.substr(xml, end, start - end));
		end = xml.indexOf(">", start) + 1;
		var v7N = HxOverrides.substr(xml, start, end - start);
		if (vSZ.match(v7N)) {
			vpI.b += Std.string("\n");
			var i;
			var vc1 = 0;
			while (vc1 < depth) {
				var vW9 = vc1++;
				vpI.b += Std.string(vvG);
			};
			vpI.b += Std.string(v7N);
		} else if (vRZ.match(v7N)) {
			vpI.b += Std.string("\n");
			var i;
			var vc1 = 0;
			while (vc1 < depth) {
				var vW9 = vc1++;
				vpI.b += Std.string(vvG);
			};
			vpI.b += Std.string(v7N);
			depth++;
		} else if (vTZ.match(v7N)) {
			depth--;
			if (!text) {
				vpI.b += Std.string("\n");
				var i;
				var vc1 = 0;
				while (vc1 < depth) {
					var vW9 = vc1++;
					vpI.b += Std.string(vvG);
				}
			};
			vpI.b += Std.string(v7N);
		} else {
			haxe.Log.trace("WARNING! malformed XML at character " + end + ":" + xml, {
				fileName: "WXmlUtils.hx",
				lineNumber: 498,
				className: "com.wiris.util.xml.WXmlUtils",
				methodName: "indentXml"
			});
			vpI.b += Std.string(v7N);
		}
	};
	return StringTools.trim(vpI.b);
};