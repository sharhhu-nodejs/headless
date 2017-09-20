var Xml = v91["Xml"] = function() {};
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.Prolog = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
};
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new HaxeHash();
	r.setNodeName(name);
	return r;
};
Xml.createPCData = function(vs1) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.setNodeValue(vs1);
	return r;
};
Xml.createCData = function(vs1) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.setNodeValue(vs1);
	return r;
};
Xml.createComment = function(vs1) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.setNodeValue(vs1);
	return r;
};
Xml.createDocType = function(vs1) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.setNodeValue(vs1);
	return r;
};
Xml.createProlog = function(vs1) {
	var r = new Xml();
	r.nodeType = Xml.Prolog;
	r.setNodeValue(vs1);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	toString: function() {
		if (this.nodeType == Xml.PCData) return this._nodeValue;
		if (this.nodeType == Xml.CData) return "<![CDATA[" + this._nodeValue + "]]>";
		if (this.nodeType == Xml.Comment) return "<!--" + this._nodeValue + "-->";
		if (this.nodeType == Xml.DocType) return "<!DOCTYPE " + this._nodeValue + ">";
		if (this.nodeType == Xml.Prolog) return "<?" + this._nodeValue + "?>";
		var s = new StringBuf();
		if (this.nodeType == Xml.Element) {
			s.b += Std.string("<");
			s.b += Std.string(this._nodeName);
			var vt1 = this._attributes.keys();
			while (vt1.hasNext()) {
				var k = vt1.next();
				s.b += Std.string(" ");
				s.b += Std.string(k);
				s.b += Std.string("=\"");
				s.b += Std.string(this._attributes.get(k));
				s.b += Std.string("\"");
			};
			if (this._children.length == 0) {
				s.b += Std.string("/>");
				return s.b;
			};
			s.b += Std.string(">");
		};
		var vu1 = this.iterator();
		while (vu1.hasNext()) {
			var x = vu1.next();
			s.b += Std.string(x.toString());
		};
		if (this.nodeType == Xml.Element) {
			s.b += Std.string("</");
			s.b += Std.string(this._nodeName);
			s.b += Std.string(">");
		};
		return s.b;
	},
	insertChild: function(x, pos) {
		if (this._children == null) throw "bad nodetype";
		if (x._parent != null) HxOverrides.remove(x._parent._children, x);
		x._parent = this;
		this._children.splice(pos, 0, x);
	},
	removeChild: function(x) {
		if (this._children == null) throw "bad nodetype";
		var b = HxOverrides.remove(this._children, x);
		if (b) x._parent = null;
		return b;
	},
	addChild: function(x) {
		if (this._children == null) throw "bad nodetype";
		if (x._parent != null) HxOverrides.remove(x._parent._children, x);
		x._parent = this;
		this._children.push(x);
	},
	firstElement: function() {
		if (this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while (cur < l) {
			var n = this._children[cur];
			if (n.nodeType == Xml.Element) return n;
			cur++;
		};
		return null;
	},
	firstChild: function() {
		if (this._children == null) throw "bad nodetype";
		return this._children[0];
	},
	elementsNamed: function(name) {
		if (this._children == null) throw "bad nodetype";
		return {
			cur: 0,
			x: this._children,
			hasNext: function() {
				var k = this.cur;
				var l = this.x.length;
				while (k < l) {
					var n = this.x[k];
					if (n.nodeType == Xml.Element && n._nodeName == name) break;
					k++;
				};
				this.cur = k;
				return k < l;
			},
			next: function() {
				var k = this.cur;
				var l = this.x.length;
				while (k < l) {
					var n = this.x[k];
					k++;
					if (n.nodeType == Xml.Element && n._nodeName == name) {
						this.cur = k;
						return n;
					}
				};
				return null;
			}
		};
	},
	elements: function() {
		if (this._children == null) throw "bad nodetype";
		return {
			cur: 0,
			x: this._children,
			hasNext: function() {
				var k = this.cur;
				var l = this.x.length;
				while (k < l) {
					if (this.x[k].nodeType == Xml.Element) break;
					k += 1;
				};
				this.cur = k;
				return k < l;
			},
			next: function() {
				var k = this.cur;
				var l = this.x.length;
				while (k < l) {
					var n = this.x[k];
					k += 1;
					if (n.nodeType == Xml.Element) {
						this.cur = k;
						return n;
					}
				};
				return null;
			}
		};
	},
	iterator: function() {
		if (this._children == null) throw "bad nodetype";
		return {
			cur: 0,
			x: this._children,
			hasNext: function() {
				return this.cur < this.x.length;
			},
			next: function() {
				return this.x[this.cur++];
			}
		};
	},
	attributes: function() {
		if (this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.keys();
	},
	exists: function(att) {
		if (this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	},
	remove: function(att) {
		if (this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.remove(att);
	},
	set: function(att, value) {
		if (this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att, value);
	},
	get: function(att) {
		if (this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	},
	getParent: function() {
		return this._parent;
	},
	setNodeValue: function(v) {
		if (this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	},
	getNodeValue: function() {
		if (this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue;
	},
	setNodeName: function(n) {
		if (this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	},
	getNodeName: function() {
		if (this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	},
	_parent: null,
	_children: null,
	_attributes: null,
	_nodeValue: null,
	_nodeName: null,
	parent: null,
	nodeValue: null,
	nodeName: null,
	nodeType: null,
	__class__: Xml,
	__properties__: {
		vv1: "setNodeName",
		vw1: "getNodeName",
		vx1: "setNodeValue",
		vy1: "getNodeValue",
		vz1: "getParent"
	}
};