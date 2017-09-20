var haxe = haxe || {};
haxe.Int32 = v91["haxe.Int32"] = function() {};
haxe.Int32.__name__ = ["haxe", "Int32"];
haxe.Int32.make = function(a, b) {
	return a << 16 | b;
};
haxe.Int32.ofInt = function(x) {
	return x | 0;
};
haxe.Int32.vUZ = function(x) {
	return x | 0;
};
haxe.Int32.toInt = function(x) {
	if ((x >> 30 & 1) != x >>> 31) throw "Overflow " + Std.string(x);
	return x;
};
haxe.Int32.toNativeInt = function(x) {
	return x;
};
haxe.Int32.add = function(a, b) {
	return a + b | 0;
};
haxe.Int32.sub = function(a, b) {
	return a - b | 0;
};
haxe.Int32.mul = function(a, b) {
	return a * (b & 65535) + (a * (b >>> 16) << 16 | 0) | 0;
};
haxe.Int32.div = function(a, b) {
	return a / b | 0;
};
haxe.Int32.mod = function(a, b) {
	return a % b;
};
haxe.Int32.shl = function(a, b) {
	return a << b;
};
haxe.Int32.shr = function(a, b) {
	return a >> b;
};
haxe.Int32.ushr = function(a, b) {
	return a >>> b;
};
haxe.Int32.and = function(a, b) {
	return a & b;
};
haxe.Int32.or = function(a, b) {
	return a | b;
};
haxe.Int32.xor = function(a, b) {
	return a ^ b;
};
haxe.Int32.neg = function(a) {
	return -a;
};
haxe.Int32.vVZ = function(a) {
	return a < 0;
};
haxe.Int32.vWZ = function(a) {
	return a == 0;
};
haxe.Int32.complement = function(a) {
	return~ a;
};
haxe.Int32.compare = function(a, b) {
	return a - b;
};
haxe.Int32.vXZ = function(a, b) {
	if (a < 0) return b < 0 ? ~b - ~a : 1;
	return b < 0 ? -1 : a - b;
};
haxe.Json = v91["haxe.Json"] = function() {};
haxe.Json.__name__ = ["haxe", "Json"];
haxe.Json.parse = function(text) {
	return new haxe.Json().vYZ(text);
};
haxe.Json.vuU = function(value) {
	return new haxe.Json().toString(value);
};
haxe.Json.prototype = {
	vZZ: function() {
		var start = this.pos;
		var buf = new StringBuf();
		while (true) {
			var c = this.str.charCodeAt(this.pos++);
			if (c == 34) break;
			if (c == 92) {
				buf.b += HxOverrides.substr(this.str, start, this.pos - start - 1);
				c = this.str.charCodeAt(this.pos++);
				switch (c) {
					case 114:
						buf.b += String.fromCharCode(13);
						break;
					case 110:
						buf.b += String.fromCharCode(10);
						break;
					case 116:
						buf.b += String.fromCharCode(9);
						break;
					case 98:
						buf.b += String.fromCharCode(8);
						break;
					case 102:
						buf.b += String.fromCharCode(12);
						break;
					case 47:
					case 92:
					case 34:
						buf.b += String.fromCharCode(c);
						break;
					case 117:
						var vaZ = Std.parseInt("0x" + HxOverrides.substr(this.str, this.pos, 4));
						this.pos += 4;
						buf.b += String.fromCharCode(vaZ);
						break;
					default:
						throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
				};
				start = this.pos;
			} else if (c != c) throw "Unclosed string";
		};
		buf.b += HxOverrides.substr(this.str, start, this.pos - start - 1);
		return buf.b;
	},
	vbZ: function() {
		while (true) {
			var c = this.str.charCodeAt(this.pos++);
			switch (c) {
				case 32:
				case 13:
				case 10:
				case 9:
					break;
				case 123:
					var obj = {}, field = null,
						vcZ = null;
					while (true) {
						var v5N = this.str.charCodeAt(this.pos++);
						switch (v5N) {
							case 32:
							case 13:
							case 10:
							case 9:
								break;
							case 125:
								if (field != null || vcZ == false) this.vdZ();
								return obj;
							case 58:
								if (field == null) this.vdZ();
								obj[field] = this.vbZ();
								field = null;
								vcZ = true;
								break;
							case 44:
								if (vcZ) vcZ = false;
								else this.vdZ();
								break;
							case 34:
								if (vcZ) this.vdZ();
								field = this.vZZ();
								break;
							default:
								this.vdZ();
						}
					};
					break;
				case 91:
					var arr = [],
						vcZ = null;
					while (true) {
						var v5N = this.str.charCodeAt(this.pos++);
						switch (v5N) {
							case 32:
							case 13:
							case 10:
							case 9:
								break;
							case 93:
								if (vcZ == false) this.vdZ();
								return arr;
							case 44:
								if (vcZ) vcZ = false;
								else this.vdZ();
								break;
							default:
								if (vcZ) this.vdZ();
								this.pos--;
								arr.push(this.vbZ());
								vcZ = true;
						}
					};
					break;
				case 116:
					var save = this.pos;
					if (this.str.charCodeAt(this.pos++) != 114 || this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 101) {
						this.pos = save;
						this.vdZ();
					};
					return true;
				case 102:
					var save = this.pos;
					if (this.str.charCodeAt(this.pos++) != 97 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 115 || this.str.charCodeAt(this.pos++) != 101) {
						this.pos = save;
						this.vdZ();
					};
					return false;
				case 110:
					var save = this.pos;
					if (this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 108) {
						this.pos = save;
						this.vdZ();
					};
					return null;
				case 34:
					return this.vZZ();
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 45:
					this.pos--;
					if (!this.veZ.match(HxOverrides.substr(this.str, this.pos, null))) throw "Invalid float at position " + this.pos;
					var v = this.veZ.matched(0);
					this.pos += v.length;
					var f = Std.parseFloat(v);
					var i = f | 0;
					return i == f ? i : f;
				default:
					this.vdZ();
			}
		}
	},
	vfZ: function() {
		return this.str.charCodeAt(this.pos++);
	},
	vdZ: function() {
		this.pos--;
		throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
	},
	vYZ: function(str) {
		this.veZ = new EReg("^-?(0|[1-9][0-9]*)(\\.[0-9]+)?([eE][+-]?[0-9]+)?", "");
		this.str = str;
		this.pos = 0;
		return this.vbZ();
	},
	quote: function(s) {
		this.buf.b += Std.string("\"");
		var i = 0;
		while (true) {
			var c = s.charCodeAt(i++);
			if (c != c) break;
			switch (c) {
				case 34:
					this.buf.b += Std.string("\\\"");
					break;
				case 92:
					this.buf.b += Std.string("\\\\");
					break;
				case 10:
					this.buf.b += Std.string("\\n");
					break;
				case 13:
					this.buf.b += Std.string("\\r");
					break;
				case 9:
					this.buf.b += Std.string("\\t");
					break;
				case 8:
					this.buf.b += Std.string("\\b");
					break;
				case 12:
					this.buf.b += Std.string("\\f");
					break;
				default:
					this.buf.b += String.fromCharCode(c);
			}
		};
		this.buf.b += Std.string("\"");
	},
	vgZ: function(v) {
		var vhZ = (Type["typeof"](v));
		switch (vhZ[1]) {
			case 8:
				this.buf.b += Std.string("\"???\"");
				break;
			case 4:
				this.viZ(v);
				break;
			case 1:
			case 2:
				this.buf.b += Std.string(v);
				break;
			case 5:
				this.buf.b += Std.string("\"<fun>\"");
				break;
			case 6:
				var c = vhZ[2];
				if (c == String) this.quote(v);
				else if (c == Array) {
					var vjZ = v;
					this.buf.b += Std.string("[");
					var len = vjZ.length;
					if (len > 0) {
						this.vgZ(vjZ[0]);
						var i = 1;
						while (i < len) {
							this.buf.b += Std.string(",");
							this.vgZ(vjZ[i++]);
						}
					};
					this.buf.b += Std.string("]");
				} else if (c == HaxeHash) {
					var vjZ = v;
					var o = {};
					var vt1 = vjZ.keys();
					while (vt1.hasNext()) {
						var k = vt1.next();
						o[k] = vjZ.get(k);
					};
					this.viZ(o);
				} else this.viZ(v);
				break;
			case 7:
				var e = vhZ[2];
				this.buf.b += Std.string(v[1]);
				break;
			case 3:
				this.buf.b += Std.string(v ? "true" : "false");
				break;
			case 0:
				this.buf.b += Std.string("null");
				break;
		}
	},
	viZ: function(v) {
		this.vkZ(v, Reflect.fields(v));
	},
	vkZ: function(v, fields) {
		var first = true;
		this.buf.b += Std.string("{");
		var vc1 = 0;
		while (vc1 < fields.length) {
			var f = fields[vc1];
			++vc1;
			var value = Reflect.field(v, f);
			if (Reflect.isFunction(value)) continue;
			if (first) first = false;
			else this.buf.b += Std.string(",");
			this.quote(f);
			this.buf.b += Std.string(":");
			this.vgZ(value);
		};
		this.buf.b += Std.string("}");
	},
	toString: function(v) {
		this.buf = new StringBuf();
		this.vgZ(v);
		return this.buf.b;
	},
	veZ: null,
	pos: null,
	str: null,
	buf: null,
	__class__: haxe.Json
};
haxe.Log = v91["haxe.Log"] = function() {};
haxe.Log.__name__ = ["haxe", "Log"];
haxe.Log.trace = function(v, infos) {
	js.Boot.__trace(v, infos);
};
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
};
haxe.Md5 = v91["haxe.Md5"] = function() {};
haxe.Md5.__name__ = ["haxe", "Md5"];
haxe.Md5.encode = function(s) {
	return new haxe.Md5().doEncode(s);
};
haxe.Md5.prototype = {
	doEncode: function(str) {
		var x = this.str2blks(str);
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		var vlZ;
		var i = 0;
		while (i < x.length) {
			var vmZ = a;
			var vnZ = b;
			var voZ = c;
			var vpZ = d;
			vlZ = 0;
			a = this.ff(a, b, c, d, x[i], 7, -680876936);
			d = this.ff(d, a, b, c, x[i + 1], 12, -389564586);
			c = this.ff(c, d, a, b, x[i + 2], 17, 606105819);
			b = this.ff(b, c, d, a, x[i + 3], 22, -1044525330);
			a = this.ff(a, b, c, d, x[i + 4], 7, -176418897);
			d = this.ff(d, a, b, c, x[i + 5], 12, 1200080426);
			c = this.ff(c, d, a, b, x[i + 6], 17, -1473231341);
			b = this.ff(b, c, d, a, x[i + 7], 22, -45705983);
			a = this.ff(a, b, c, d, x[i + 8], 7, 1770035416);
			d = this.ff(d, a, b, c, x[i + 9], 12, -1958414417);
			c = this.ff(c, d, a, b, x[i + 10], 17, -42063);
			b = this.ff(b, c, d, a, x[i + 11], 22, -1990404162);
			a = this.ff(a, b, c, d, x[i + 12], 7, 1804603682);
			d = this.ff(d, a, b, c, x[i + 13], 12, -40341101);
			c = this.ff(c, d, a, b, x[i + 14], 17, -1502002290);
			b = this.ff(b, c, d, a, x[i + 15], 22, 1236535329);
			a = this.gg(a, b, c, d, x[i + 1], 5, -165796510);
			d = this.gg(d, a, b, c, x[i + 6], 9, -1069501632);
			c = this.gg(c, d, a, b, x[i + 11], 14, 643717713);
			b = this.gg(b, c, d, a, x[i], 20, -373897302);
			a = this.gg(a, b, c, d, x[i + 5], 5, -701558691);
			d = this.gg(d, a, b, c, x[i + 10], 9, 38016083);
			c = this.gg(c, d, a, b, x[i + 15], 14, -660478335);
			b = this.gg(b, c, d, a, x[i + 4], 20, -405537848);
			a = this.gg(a, b, c, d, x[i + 9], 5, 568446438);
			d = this.gg(d, a, b, c, x[i + 14], 9, -1019803690);
			c = this.gg(c, d, a, b, x[i + 3], 14, -187363961);
			b = this.gg(b, c, d, a, x[i + 8], 20, 1163531501);
			a = this.gg(a, b, c, d, x[i + 13], 5, -1444681467);
			d = this.gg(d, a, b, c, x[i + 2], 9, -51403784);
			c = this.gg(c, d, a, b, x[i + 7], 14, 1735328473);
			b = this.gg(b, c, d, a, x[i + 12], 20, -1926607734);
			a = this.hh(a, b, c, d, x[i + 5], 4, -378558);
			d = this.hh(d, a, b, c, x[i + 8], 11, -2022574463);
			c = this.hh(c, d, a, b, x[i + 11], 16, 1839030562);
			b = this.hh(b, c, d, a, x[i + 14], 23, -35309556);
			a = this.hh(a, b, c, d, x[i + 1], 4, -1530992060);
			d = this.hh(d, a, b, c, x[i + 4], 11, 1272893353);
			c = this.hh(c, d, a, b, x[i + 7], 16, -155497632);
			b = this.hh(b, c, d, a, x[i + 10], 23, -1094730640);
			a = this.hh(a, b, c, d, x[i + 13], 4, 681279174);
			d = this.hh(d, a, b, c, x[i], 11, -358537222);
			c = this.hh(c, d, a, b, x[i + 3], 16, -722521979);
			b = this.hh(b, c, d, a, x[i + 6], 23, 76029189);
			a = this.hh(a, b, c, d, x[i + 9], 4, -640364487);
			d = this.hh(d, a, b, c, x[i + 12], 11, -421815835);
			c = this.hh(c, d, a, b, x[i + 15], 16, 530742520);
			b = this.hh(b, c, d, a, x[i + 2], 23, -995338651);
			a = this.ii(a, b, c, d, x[i], 6, -198630844);
			d = this.ii(d, a, b, c, x[i + 7], 10, 1126891415);
			c = this.ii(c, d, a, b, x[i + 14], 15, -1416354905);
			b = this.ii(b, c, d, a, x[i + 5], 21, -57434055);
			a = this.ii(a, b, c, d, x[i + 12], 6, 1700485571);
			d = this.ii(d, a, b, c, x[i + 3], 10, -1894986606);
			c = this.ii(c, d, a, b, x[i + 10], 15, -1051523);
			b = this.ii(b, c, d, a, x[i + 1], 21, -2054922799);
			a = this.ii(a, b, c, d, x[i + 8], 6, 1873313359);
			d = this.ii(d, a, b, c, x[i + 15], 10, -30611744);
			c = this.ii(c, d, a, b, x[i + 6], 15, -1560198380);
			b = this.ii(b, c, d, a, x[i + 13], 21, 1309151649);
			a = this.ii(a, b, c, d, x[i + 4], 6, -145523070);
			d = this.ii(d, a, b, c, x[i + 11], 10, -1120210379);
			c = this.ii(c, d, a, b, x[i + 2], 15, 718787259);
			b = this.ii(b, c, d, a, x[i + 9], 21, -343485551);
			a = this.addme(a, vmZ);
			b = this.addme(b, vnZ);
			c = this.addme(c, voZ);
			d = this.addme(d, vpZ);
			i += 16;
		};
		return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
	},
	ii: function(a, b, c, d, x, s, t) {
		return this.cmn(this.bitXOR(c, this.bitOR(b, ~d)), a, b, x, s, t);
	},
	hh: function(a, b, c, d, x, s, t) {
		return this.cmn(this.bitXOR(this.bitXOR(b, c), d), a, b, x, s, t);
	},
	gg: function(a, b, c, d, x, s, t) {
		return this.cmn(this.bitOR(this.bitAND(b, d), this.bitAND(c, ~d)), a, b, x, s, t);
	},
	ff: function(a, b, c, d, x, s, t) {
		return this.cmn(this.bitOR(this.bitAND(b, c), this.bitAND(~b, d)), a, b, x, s, t);
	},
	cmn: function(q, a, b, x, s, t) {
		return this.addme(this.rol(this.addme(this.addme(a, q), this.addme(x, t)), s), b);
	},
	rol: function(viJ, vqZ) {
		return viJ << vqZ | viJ >>> 32 - vqZ;
	},
	str2blks: function(str) {
		var vrZ = (str.length + 8 >> 6) + 1;
		var vsZ = new Array();
		var vd1 = 0,
			vc1 = vrZ * 16;
		while (vd1 < vc1) {
			var i = vd1++;
			vsZ[i] = 0;
		};
		var i = 0;
		while (i < str.length) {
			vsZ[i >> 2] |= HxOverrides.cca(str, i) << (str.length * 8 + i) % 4 * 8;
			i++;
		};
		vsZ[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
		var l = str.length * 8;
		var k = vrZ * 16 - 2;
		vsZ[k] = l & 255;
		vsZ[k] |= (l >>> 8 & 255) << 8;
		vsZ[k] |= (l >>> 16 & 255) << 16;
		vsZ[k] |= (l >>> 24 & 255) << 24;
		return vsZ;
	},
	rhex: function(viJ) {
		var str = "";
		var hex_chr = "0123456789abcdef";
		var vc1 = 0;
		while (vc1 < 4) {
			var vH4 = vc1++;
			str += hex_chr.charAt(viJ >> vH4 * 8 + 4 & 15) + hex_chr.charAt(viJ >> vH4 * 8 & 15);
		};
		return str;
	},
	addme: function(x, vQ1) {
		var vtZ = (x & 65535) + (vQ1 & 65535);
		var vuZ = (x >> 16) + (vQ1 >> 16) + (vtZ >> 16);
		return vuZ << 16 | vtZ & 65535;
	},
	bitAND: function(a, b) {
		var vvZ = a & 1 & (b & 1);
		var vwZ = a >>> 1 & b >>> 1;
		return vwZ << 1 | vvZ;
	},
	bitXOR: function(a, b) {
		var vvZ = a & 1 ^ b & 1;
		var vwZ = a >>> 1 ^ b >>> 1;
		return vwZ << 1 | vvZ;
	},
	bitOR: function(a, b) {
		var vvZ = a & 1 | b & 1;
		var vwZ = a >>> 1 | b >>> 1;
		return vwZ << 1 | vvZ;
	},
	__class__: haxe.Md5
};
haxe.Resource = v91["haxe.Resource"] = function() {};
haxe.Resource.__name__ = ["haxe", "Resource"];
haxe.Resource.content = null;
haxe.Resource.vxZ = function() {
	var vyZ = new Array();
	var vc1 = 0,
		vd1 = haxe.Resource.content;
	while (vc1 < vd1.length) {
		var x = vd1[vc1];
		++vc1;
		vyZ.push(x.name);
	};
	return vyZ;
};
haxe.Resource.vHY = function(name) {
	var vc1 = 0,
		vd1 = haxe.Resource.content;
	while (vc1 < vd1.length) {
		var x = vd1[vc1];
		++vc1;
		if (x.name == name) {
			if (x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.vs1);
			return b.toString();
		}
	};
	return null;
};
haxe.Resource.getBytes = function(name) {
	var vc1 = 0,
		vd1 = haxe.Resource.content;
	while (vc1 < vd1.length) {
		var x = vd1[vc1];
		++vc1;
		if (x.name == name) {
			if (x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.vs1);
		}
	};
	return null;
};
haxe.Timer = v91["haxe.Timer"] = function(vzZ) {
	var v0a = this;

	//由于此处会触发带箭头的公式重绘，暂时注释掉。此处会影响公式内的光标不会闪烁
	this.id = window.setInterval(function() {
		v0a.run();
	}, vzZ < 500 ? 500 : vzZ);
};
haxe.Timer.__name__ = ["haxe", "Timer"];
haxe.Timer.delay = function(f, vzZ) {
	var t = new haxe.Timer(vzZ);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.v1a = function(f, pos) {
	var v2a = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - v2a + "s", pos);
	return r;
};
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	run: function() {},
	stop: function() {
		if (this.id == null) return;
		window.clearInterval(this.id);
		this.id = null;
	},
	id: null,
	__class__: haxe.Timer
};
haxe.Unserializer = v91["haxe.Unserializer"] = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if (r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	};
	this.setResolver(r);
};
haxe.Unserializer.__name__ = ["haxe", "Unserializer"];
haxe.Unserializer.initCodes = function() {
	var voV = new Array();
	var vd1 = 0,
		vc1 = haxe.Unserializer.BASE64.length;
	while (vd1 < vc1) {
		var i = vd1++;
		voV[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	};
	return voV;
};
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
};
haxe.Unserializer.prototype = {
	unserialize: function() {
		switch (this.buf.charCodeAt(this.pos++)) {
			case 110:
				return null;
			case 116:
				return true;
			case 102:
				return false;
			case 122:
				return 0;
			case 105:
				return this.readDigits();
			case 100:
				var v3a = this.pos;
				while (true) {
					var c = this.buf.charCodeAt(this.pos);
					if (c >= 43 && c < 58 || c == 101 || c == 69) this.pos++;
					else break;
				};
				return Std.parseFloat(HxOverrides.substr(this.buf, v3a, this.pos - v3a));
			case 121:
				var len = this.readDigits();
				if (this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
				var s = HxOverrides.substr(this.buf, this.pos, len);
				this.pos += len;
				s = StringTools.urlDecode(s);
				this.scache.push(s);
				return s;
			case 107:
				return Math.NaN;
			case 109:
				return Math.NEGATIVE_INFINITY;
			case 112:
				return Math.POSITIVE_INFINITY;
			case 97:
				var buf = this.buf;
				var a = new Array();
				this.cache.push(a);
				while (true) {
					var c = this.buf.charCodeAt(this.pos);
					if (c == 104) {
						this.pos++;
						break;
					};
					if (c == 117) {
						this.pos++;
						var n = this.readDigits();
						a[a.length + n - 1] = null;
					} else a.push(this.unserialize());
				};
				return a;
			case 111:
				var o = {};
				this.cache.push(o);
				this.unserializeObject(o);
				return o;
			case 114:
				var n = this.readDigits();
				if (n < 0 || n >= this.cache.length) throw "Invalid reference";
				return this.cache[n];
			case 82:
				var n = this.readDigits();
				if (n < 0 || n >= this.scache.length) throw "Invalid string reference";
				return this.scache[n];
			case 120:
				throw this.unserialize();
				break;
			case 99:
				var name = this.unserialize();
				var vh1 = this.resolver.resolveClass(name);
				if (vh1 == null) throw "Class not found " + name;
				var o = Type.createEmptyInstance(vh1);
				this.cache.push(o);
				this.unserializeObject(o);
				return o;
			case 119:
				var name = this.unserialize();
				var v4a = this.resolver.resolveEnum(name);
				if (v4a == null) throw "Enum not found " + name;
				var e = this.unserializeEnum(v4a, this.unserialize());
				this.cache.push(e);
				return e;
			case 106:
				var name = this.unserialize();
				var v4a = this.resolver.resolveEnum(name);
				if (v4a == null) throw "Enum not found " + name;
				this.pos++;
				var index = this.readDigits();
				var tag = Type.getEnumConstructs(v4a)[index];
				if (tag == null) throw "Unknown enum index " + name + "@" + index;
				var e = this.unserializeEnum(v4a, tag);
				this.cache.push(e);
				return e;
			case 108:
				var l = new List();
				this.cache.push(l);
				var buf = this.buf;
				while (this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
				this.pos++;
				return l;
			case 98:
				var h = new HaxeHash();
				this.cache.push(h);
				var buf = this.buf;
				while (this.buf.charCodeAt(this.pos) != 104) {
					var s = this.unserialize();
					h.set(s, this.unserialize());
				};
				this.pos++;
				return h;
			case 113:
				var h = new IntHash();
				this.cache.push(h);
				var buf = this.buf;
				var c = this.buf.charCodeAt(this.pos++);
				while (c == 58) {
					var i = this.readDigits();
					h.set(i, this.unserialize());
					c = this.buf.charCodeAt(this.pos++);
				};
				if (c != 104) throw "Invalid IntHash format";
				return h;
			case 118:
				var d = HxOverrides.vL1(HxOverrides.substr(this.buf, this.pos, 19));
				this.cache.push(d);
				this.pos += 19;
				return d;
			case 115:
				var len = this.readDigits();
				var buf = this.buf;
				if (this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
				var voV = haxe.Unserializer.CODES;
				if (voV == null) {
					voV = haxe.Unserializer.initCodes();
					haxe.Unserializer.CODES = voV;
				};
				var i = this.pos;
				var v5a = len & 3;
				var size = (len >> 2) * 3 + (v5a >= 2 ? v5a - 1 : 0);
				var max = i + (len - v5a);
				var bytes = haxe.io.Bytes.alloc(size);
				var v6a = 0;
				while (i < max) {
					var v5N = voV[buf.charCodeAt(i++)];
					var vBN = voV[buf.charCodeAt(i++)];
					bytes.b[v6a++] = (v5N << 2 | vBN >> 4) & 255;
					var v7a = voV[buf.charCodeAt(i++)];
					bytes.b[v6a++] = (vBN << 4 | v7a >> 2) & 255;
					var v8a = voV[buf.charCodeAt(i++)];
					bytes.b[v6a++] = (v7a << 6 | v8a) & 255;
				};
				if (v5a >= 2) {
					var v5N = voV[buf.charCodeAt(i++)];
					var vBN = voV[buf.charCodeAt(i++)];
					bytes.b[v6a++] = (v5N << 2 | vBN >> 4) & 255;
					if (v5a == 3) {
						var v7a = voV[buf.charCodeAt(i++)];
						bytes.b[v6a++] = (vBN << 4 | v7a >> 2) & 255;
					}
				};
				this.pos += len;
				this.cache.push(bytes);
				return bytes;
			case 67:
				var name = this.unserialize();
				var vh1 = this.resolver.resolveClass(name);
				if (vh1 == null) throw "Class not found " + name;
				var o = Type.createEmptyInstance(vh1);
				this.cache.push(o);
				o.v9a(this);
				if (this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
				return o;
			default:
		};
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	},
	unserializeEnum: function(v4a, tag) {
		if (this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var vAa = this.readDigits();
		if (vAa == 0) return Type.createEnum(v4a, tag);
		var args = new Array();
		while (vAa-- > 0) args.push(this.unserialize());
		return Type.createEnum(v4a, tag, args);
	},
	unserializeObject: function(o) {
		while (true) {
			if (this.pos >= this.length) throw "Invalid object";
			if (this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if (!js.Boot.__instanceof(k, String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		};
		this.pos++;
	},
	readDigits: function() {
		var k = 0;
		var s = false;
		var vBa = this.pos;
		while (true) {
			var c = this.buf.charCodeAt(this.pos);
			if (c != c) break;
			if (c == 45) {
				if (this.pos != vBa) break;
				s = true;
				this.pos++;
				continue;
			};
			if (c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		};
		if (s) k *= -1;
		return k;
	},
	get: function(p) {
		return this.buf.charCodeAt(p);
	},
	getResolver: function() {
		return this.resolver;
	},
	setResolver: function(r) {
		if (r == null) this.resolver = {
			resolveClass: function(_) {
				return null;
			},
			resolveEnum: function(_) {
				return null;
			}
		};
		else this.resolver = r;
	},
	resolver: null,
	scache: null,
	cache: null,
	length: null,
	pos: null,
	buf: null,
	__class__: haxe.Unserializer
};
haxe.Utf8 = v91["haxe.Utf8"] = function(size) {
	this.vjY = "";
};
haxe.Utf8.__name__ = ["haxe", "Utf8"];
haxe.Utf8.iter = function(s, voI) {
	var vd1 = 0,
		vc1 = s.length;
	while (vd1 < vc1) {
		var i = vd1++;
		voI(HxOverrides.cca(s, i));
	}
};
haxe.Utf8.encode = function(s) {
	throw "Not implemented";
	return s;
};
haxe.Utf8.decode = function(s) {
	throw "Not implemented";
	return s;
};
haxe.Utf8.charCodeAt = function(s, index) {
	return HxOverrides.cca(s, index);
};
haxe.Utf8.validate = function(s) {
	return true;
};
haxe.Utf8.compare = function(a, b) {
	return a > b ? 1 : a == b ? 0 : -1;
};
haxe.Utf8.sub = function(s, pos, len) {
	return HxOverrides.substr(s, pos, len);
};
haxe.Utf8.prototype = {
	toString: function() {
		return this.vjY;
	},
	addChar: function(c) {
		this.vjY += String.fromCharCode(c);
	},
	vjY: null,
	__class__: haxe.Utf8
};
if (!haxe.io) haxe.io = {};
haxe.io.Bytes = v91["haxe.io.Bytes"] = function(length, b) {
	this.length = length;
	this.b = b;
};
haxe.io.Bytes.__name__ = ["haxe", "io", "Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var vc1 = 0;
	while (vc1 < length) {
		var i = vc1++;
		a.push(0);
	};
	return new haxe.io.Bytes(length, a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var vd1 = 0,
		vc1 = s.length;
	while (vd1 < vc1) {
		var i = vd1++;
		var c = s.charCodeAt(i);
		if (c <= 127) a.push(c);
		else if (c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if (c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	};
	return new haxe.io.Bytes(a.length, a);
};
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length, b);
};
haxe.io.Bytes.prototype = {
	getData: function() {
		return this.b;
	},
	v02: function() {
		var s = new StringBuf();
		var voI = [];
		var str = "0123456789abcdef";
		var vd1 = 0,
			vc1 = str.length;
		while (vd1 < vc1) {
			var i = vd1++;
			voI.push(HxOverrides.cca(str, i));
		};
		var vd1 = 0,
			vc1 = this.length;
		while (vd1 < vc1) {
			var i = vd1++;
			var c = this.b[i];
			s.b += String.fromCharCode(voI[c >> 4]);
			s.b += String.fromCharCode(voI[c & 15]);
		};
		return s.b;
	},
	toString: function() {
		return this.readString(0, this.length);
	},
	readString: function(pos, len) {
		if (pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var vCa = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while (i < max) {
			var c = b[i++];
			if (c < 128) {
				if (c == 0) break;
				s += vCa(c);
			} else if (c < 224) s += vCa((c & 63) << 6 | b[i++] & 127);
			else if (c < 240) {
				var vBN = b[i++];
				s += vCa((c & 31) << 12 | (vBN & 127) << 6 | b[i++] & 127);
			} else {
				var vBN = b[i++];
				var v7a = b[i++];
				s += vCa((c & 15) << 18 | (vBN & 127) << 12 | v7a << 6 & 127 | b[i++] & 127);
			}
		};
		return s;
	},
	compare: function(vDa) {
		var vNG = this.b;
		var vQG = vDa.b;
		var len = this.length < vDa.length ? this.length : vDa.length;
		var vc1 = 0;
		while (vc1 < len) {
			var i = vc1++;
			if (vNG[i] != vQG[i]) return vNG[i] - vQG[i];
		};
		return this.length - vDa.length;
	},
	sub: function(pos, len) {
		if (pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		return new haxe.io.Bytes(len, this.b.slice(pos, pos + len));
	},
	blit: function(pos, src, vEa, len) {
		if (pos < 0 || vEa < 0 || len < 0 || pos + len > this.length || vEa + len > src.length) throw haxe.io.Error.OutsideBounds;
		var vNG = this.b;
		var vQG = src.b;
		if (vNG == vQG && pos > vEa) {
			var i = len;
			while (i > 0) {
				i--;
				vNG[i + pos] = vQG[i + vEa];
			};
			return;
		};
		var vc1 = 0;
		while (vc1 < len) {
			var i = vc1++;
			vNG[i + pos] = vQG[i + vEa];
		}
	},
	set: function(pos, v) {
		this.b[pos] = v & 255;
	},
	get: function(pos) {
		return this.b[pos];
	},
	b: null,
	length: null,
	__class__: haxe.io.Bytes
};
haxe.io.BytesBuffer = v91["haxe.io.BytesBuffer"] = function() {
	this.b = new Array();
};
haxe.io.BytesBuffer.__name__ = ["haxe", "io", "BytesBuffer"];
haxe.io.BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length, this.b);
		this.b = null;
		return bytes;
	},
	addBytes: function(src, pos, len) {
		if (pos < 0 || len < 0 || pos + len > src.length) throw haxe.io.Error.OutsideBounds;
		var vNG = this.b;
		var vQG = src.b;
		var vd1 = pos,
			vc1 = pos + len;
		while (vd1 < vc1) {
			var i = vd1++;
			this.b.push(vQG[i]);
		}
	},
	add: function(src) {
		var vNG = this.b;
		var vQG = src.b;
		var vd1 = 0,
			vc1 = src.length;
		while (vd1 < vc1) {
			var i = vd1++;
			this.b.push(vQG[i]);
		}
	},
	addByte: function(vFa) {
		this.b.push(vFa);
	},
	b: null,
	__class__: haxe.io.BytesBuffer
};
haxe.io.Eof = v91["haxe.io.Eof"] = function() {};
haxe.io.Eof.__name__ = ["haxe", "io", "Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	},
	__class__: haxe.io.Eof
};
haxe.io.Error = v91["haxe.io.Error"] = {
	vX1: ["haxe", "io", "Error"],
	vn1: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
};
haxe.io.Error.Blocked = ["Blocked", 0];
haxe.io.Error.Blocked.toString = vA1;
haxe.io.Error.Blocked.va1 = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow", 1];
haxe.io.Error.Overflow.toString = vA1;
haxe.io.Error.Overflow.va1 = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds", 2];
haxe.io.Error.OutsideBounds.toString = vA1;
haxe.io.Error.OutsideBounds.va1 = haxe.io.Error;
haxe.io.Error.Custom = function(e) {
	var vo1 = ["Custom", 3, e];
	vo1.va1 = haxe.io.Error;
	vo1.toString = vA1;
	return vo1;
};
haxe.io.Input = v91["haxe.io.Input"] = function() {};
haxe.io.Input.__name__ = ["haxe", "io", "Input"];
haxe.io.Input.prototype = {
	vGa: function(bytes) {
		return Std.parseInt((((bytes[1] & 15) << 16 | bytes[2] << 8 | bytes[3]) * Math.pow(2, 32)).toString()) + Std.parseInt(((bytes[4] >> 7) * Math.pow(2, 31)).toString()) + Std.parseInt(((bytes[4] & 127) << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7]).toString());
	},
	readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b, 0, len);
		return b.toString();
	},
	readInt32: function() {
		var vHa = this.readByte();
		var vIa = this.readByte();
		var vJa = this.readByte();
		var vKa = this.readByte();
		return this.bigEndian ? (vHa << 8 | vIa) << 16 | (vJa << 8 | vKa) : (vKa << 8 | vJa) << 16 | (vIa << 8 | vHa);
	},
	readUInt30: function() {
		var vHa = this.readByte();
		var vIa = this.readByte();
		var vJa = this.readByte();
		var vKa = this.readByte();
		if ((this.bigEndian ? vHa : vKa) >= 64) throw haxe.io.Error.Overflow;
		return this.bigEndian ? vKa | vJa << 8 | vIa << 16 | vHa << 24 : vHa | vIa << 8 | vJa << 16 | vKa << 24;
	},
	readInt31: function() {
		var vHa, vIa, vJa, vKa;
		if (this.bigEndian) {
			vKa = this.readByte();
			vJa = this.readByte();
			vIa = this.readByte();
			vHa = this.readByte();
		} else {
			vHa = this.readByte();
			vIa = this.readByte();
			vJa = this.readByte();
			vKa = this.readByte();
		}; if ((vKa & 128) == 0 != ((vKa & 64) == 0)) throw haxe.io.Error.Overflow;
		return vHa | vIa << 8 | vJa << 16 | vKa << 24;
	},
	readUInt24: function() {
		var vHa = this.readByte();
		var vIa = this.readByte();
		var vJa = this.readByte();
		return this.bigEndian ? vJa | vIa << 8 | vHa << 16 : vHa | vIa << 8 | vJa << 16;
	},
	readInt24: function() {
		var vHa = this.readByte();
		var vIa = this.readByte();
		var vJa = this.readByte();
		var n = this.bigEndian ? vJa | vIa << 8 | vHa << 16 : vHa | vIa << 8 | vJa << 16;
		if ((n & 8388608) != 0) return n - 16777216;
		return n;
	},
	readUInt16: function() {
		var vHa = this.readByte();
		var vIa = this.readByte();
		return this.bigEndian ? vIa | vHa << 8 : vHa | vIa << 8;
	},
	readInt16: function() {
		var vHa = this.readByte();
		var vIa = this.readByte();
		var n = this.bigEndian ? vIa | vHa << 8 : vHa | vIa << 8;
		if ((n & 32768) != 0) return n - 65536;
		return n;
	},
	readInt8: function() {
		var n = this.readByte();
		if (n >= 128) return n - 256;
		return n;
	},
	readDouble: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if (this.bigEndian) bytes.reverse();
		var vLa = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 4 & 2047 | bytes[1] >> 4) - 1023;
		var vMa = this.vGa(bytes);
		if (vMa == 0 && exp == -1023) return 0.0;
		return vLa * (1.0 + Math.pow(2, -52) * vMa) * Math.pow(2, exp);
	},
	readFloat: function() {
		var bytes = [];
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		bytes.push(this.readByte());
		if (this.bigEndian) bytes.reverse();
		var vLa = 1 - (bytes[0] >> 7 << 1);
		var exp = (bytes[0] << 1 & 255 | bytes[1] >> 7) - 127;
		var vMa = (bytes[1] & 127) << 16 | bytes[2] << 8 | bytes[3];
		if (vMa == 0 && exp == -127) return 0.0;
		return vLa * (1 + Math.pow(2, -23) * vMa) * Math.pow(2, exp);
	},
	readLine: function() {
		var buf = new StringBuf();
		var last;
		var s;
		try {
			while ((last = this.readByte()) != 10) buf.b += String.fromCharCode(last);
			s = buf.b;
			if (HxOverrides.cca(s, s.length - 1) == 13) s = HxOverrides.substr(s, 0, -1);
		} catch (e) {
			if (js.Boot.__instanceof(e, haxe.io.Eof)) {
				s = buf.b;
				if (s.length == 0) throw e;
			} else throw (e);
		};
		return s;
	},
	readUntil: function(end) {
		var buf = new StringBuf();
		var last;
		while ((last = this.readByte()) != end) buf.b += String.fromCharCode(last);
		return buf.b;
	},
	read: function(vNa) {
		var s = haxe.io.Bytes.alloc(vNa);
		var p = 0;
		while (vNa > 0) {
			var k = this.readBytes(s, p, vNa);
			if (k == 0) throw haxe.io.Error.Blocked;
			p += k;
			vNa -= k;
		};
		return s;
	},
	readFullBytes: function(s, pos, len) {
		while (len > 0) {
			var k = this.readBytes(s, pos, len);
			pos += k;
			len -= k;
		}
	},
	readAll: function(vOa) {
		if (vOa == null) vOa = 16384;
		var buf = haxe.io.Bytes.alloc(vOa);
		var vPa = new haxe.io.BytesBuffer();
		try {
			while (true) {
				var len = this.readBytes(buf, 0, vOa);
				if (len == 0) throw haxe.io.Error.Blocked;
				vPa.addBytes(buf, 0, len);
			}
		} catch (e) {
			if (js.Boot.__instanceof(e, haxe.io.Eof)) {} else throw (e);
		};
		return vPa.getBytes();
	},
	setEndian: function(b) {
		this.bigEndian = b;
		return b;
	},
	close: function() {},
	readBytes: function(s, pos, len) {
		var k = len;
		var b = s.b;
		if (pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while (k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		};
		return len;
	},
	readByte: function() {
		return (function(vF1) {
			var vG1;
			throw "Not implemented";
			return vG1;
		}(this));
	},
	bigEndian: null,
	__class__: haxe.io.Input,
	__properties__: {
		vQa: "setEndian"
	}
};
haxe.io.Output = v91["haxe.io.Output"] = function() {};
haxe.io.Output.__name__ = ["haxe", "io", "Output"];
haxe.io.Output.prototype = {
	writeString: function(s) {
		var b = haxe.io.Bytes.ofString(s);
		this.writeFullBytes(b, 0, b.length);
	},
	writeInput: function(i, vOa) {
		if (vOa == null) vOa = 4096;
		var buf = haxe.io.Bytes.alloc(vOa);
		try {
			while (true) {
				var len = i.readBytes(buf, 0, vOa);
				if (len == 0) throw haxe.io.Error.Blocked;
				var p = 0;
				while (len > 0) {
					var k = this.writeBytes(buf, p, len);
					if (k == 0) throw haxe.io.Error.Blocked;
					p += k;
					len -= k;
				}
			}
		} catch (e) {
			if (js.Boot.__instanceof(e, haxe.io.Eof)) {} else throw (e);
		}
	},
	prepare: function(vNa) {},
	writeInt32: function(x) {
		if (this.bigEndian) {
			this.writeByte(haxe.Int32.toInt(x >>> 24));
			this.writeByte(haxe.Int32.toInt(x >>> 16) & 255);
			this.writeByte(haxe.Int32.toInt(x >>> 8) & 255);
			this.writeByte(haxe.Int32.toInt(x & (255 | 0)));
		} else {
			this.writeByte(haxe.Int32.toInt(x & (255 | 0)));
			this.writeByte(haxe.Int32.toInt(x >>> 8) & 255);
			this.writeByte(haxe.Int32.toInt(x >>> 16) & 255);
			this.writeByte(haxe.Int32.toInt(x >>> 24));
		}
	},
	writeUInt30: function(x) {
		if (x < 0 || x >= 1073741824) throw haxe.io.Error.Overflow;
		if (this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	},
	writeInt31: function(x) {
		if (x < -1073741824 || x >= 1073741824) throw haxe.io.Error.Overflow;
		if (this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	},
	writeUInt24: function(x) {
		if (x < 0 || x >= 16777216) throw haxe.io.Error.Overflow;
		if (this.bigEndian) {
			this.writeByte(x >> 16);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16);
		}
	},
	writeInt24: function(x) {
		if (x < -8388608 || x >= 8388608) throw haxe.io.Error.Overflow;
		this.writeUInt24(x & 16777215);
	},
	writeUInt16: function(x) {
		if (x < 0 || x >= 65536) throw haxe.io.Error.Overflow;
		if (this.bigEndian) {
			this.writeByte(x >> 8);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8);
		}
	},
	writeInt16: function(x) {
		if (x < -32768 || x >= 32768) throw haxe.io.Error.Overflow;
		this.writeUInt16(x & 65535);
	},
	writeInt8: function(x) {
		if (x < -128 || x >= 128) throw haxe.io.Error.Overflow;
		this.writeByte(x & 255);
	},
	writeDouble: function(x) {
		if (x == 0.0) {
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			return;
		};
		var exp = Math.floor(Math.log(Math.abs(x)) / haxe.io.Output.vRa);
		var vMa = Math.floor(Math.abs(x) / Math.pow(2, exp) * Math.pow(2, 52));
		var vSa = vMa & 34359738367;
		var vTa = Math.floor(vMa / Math.pow(2, 32));
		var vNG = exp + 1023 >> 4 | (exp > 0 ? x < 0 ? 128 : 64 : x < 0 ? 128 : 0),
			vQG = exp + 1023 << 4 & 255 | vTa >> 16 & 15,
			vUa = vTa >> 8 & 255,
			vVa = vTa & 255,
			vWa = vSa >> 24 & 255,
			vXa = vSa >> 16 & 255,
			vYa = vSa >> 8 & 255,
			vZa = vSa & 255;
		if (this.bigEndian) {
			this.writeByte(vZa);
			this.writeByte(vYa);
			this.writeByte(vXa);
			this.writeByte(vWa);
			this.writeByte(vVa);
			this.writeByte(vUa);
			this.writeByte(vQG);
			this.writeByte(vNG);
		} else {
			this.writeByte(vNG);
			this.writeByte(vQG);
			this.writeByte(vUa);
			this.writeByte(vVa);
			this.writeByte(vWa);
			this.writeByte(vXa);
			this.writeByte(vYa);
			this.writeByte(vZa);
		}
	},
	writeFloat: function(x) {
		if (x == 0.0) {
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			this.writeByte(0);
			return;
		};
		var exp = Math.floor(Math.log(Math.abs(x)) / haxe.io.Output.vRa);
		var vMa = Math.floor(Math.abs(x) / Math.pow(2, exp) * 8388608) & 8388607;
		var vNG = exp + 127 >> 1 | (exp > 0 ? x < 0 ? 128 : 64 : x < 0 ? 128 : 0),
			vQG = exp + 127 << 7 & 255 | vMa >> 16 & 127,
			vUa = vMa >> 8 & 255,
			vVa = vMa & 255;
		if (this.bigEndian) {
			this.writeByte(vVa);
			this.writeByte(vUa);
			this.writeByte(vQG);
			this.writeByte(vNG);
		} else {
			this.writeByte(vNG);
			this.writeByte(vQG);
			this.writeByte(vUa);
			this.writeByte(vVa);
		}
	},
	writeFullBytes: function(s, pos, len) {
		while (len > 0) {
			var k = this.writeBytes(s, pos, len);
			pos += k;
			len -= k;
		}
	},
	write: function(s) {
		var l = s.length;
		var p = 0;
		while (l > 0) {
			var k = this.writeBytes(s, p, l);
			if (k == 0) throw haxe.io.Error.Blocked;
			p += k;
			l -= k;
		}
	},
	setEndian: function(b) {
		this.bigEndian = b;
		return b;
	},
	close: function() {},
	flush: function() {},
	writeBytes: function(s, pos, len) {
		var k = len;
		var b = s.b;
		if (pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while (k > 0) {
			this.writeByte(b[pos]);
			pos++;
			k--;
		};
		return len;
	},
	writeByte: function(c) {
		throw "Not implemented";
	},
	bigEndian: null,
	__class__: haxe.io.Output,
	__properties__: {
		vQa: "setEndian"
	}
};
if (!haxe.xml) haxe.xml = {};
haxe.xml.Parser = v91["haxe.xml.Parser"] = function() {};
haxe.xml.Parser.__name__ = ["haxe", "xml", "Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.vYZ(str, 0, doc);
	return doc;
};
haxe.xml.Parser.vYZ = function(str, p, parent) {
	if (p == null) p = 0;
	var xml = null;
	var v23 = 1;
	var next = 1;
	var vaa = null;
	var start = 0;
	var vba = 0;
	var vca = 0;
	var c = str.charCodeAt(p);
	while (!(c != c)) {
		switch (v23) {
			case 0:
				switch (c) {
					case 10:
					case 13:
					case 9:
					case 32:
						break;
					default:
						v23 = next;
						continue;
				};
				break;
			case 1:
				switch (c) {
					case 60:
						v23 = 0;
						next = 2;
						break;
					default:
						start = p;
						v23 = 13;
						continue;
				};
				break;
			case 13:
				if (c == 60) {
					var vTB = Xml.createPCData(HxOverrides.substr(str, start, p - start));
					parent.addChild(vTB);
					vba++;
					v23 = 0;
					next = 2;
				};
				break;
			case 17:
				if (c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
					var vTB = Xml.createCData(HxOverrides.substr(str, start, p - start));
					parent.addChild(vTB);
					vba++;
					p += 2;
					v23 = 1;
				};
				break;
			case 2:
				switch (c) {
					case 33:
						if (str.charCodeAt(p + 1) == 91) {
							p += 2;
							if (HxOverrides.substr(str, p, 6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
							p += 5;
							v23 = 17;
							start = p + 1;
						} else if (str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
							if (HxOverrides.substr(str, p + 2, 6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
							p += 8;
							v23 = 16;
							start = p + 1;
						} else if (str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--";
						else {
							p += 2;
							v23 = 15;
							start = p + 1;
						};
						break;
					case 63:
						v23 = 14;
						start = p;
						break;
					case 47:
						if (parent == null) throw "Expected node name";
						start = p + 1;
						v23 = 0;
						next = 10;
						break;
					default:
						v23 = 3;
						start = p;
						continue;
				};
				break;
			case 3:
				if (!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
					if (p == start) throw "Expected node name";
					xml = Xml.createElement(HxOverrides.substr(str, start, p - start));
					parent.addChild(xml);
					v23 = 0;
					next = 4;
					continue;
				};
				break;
			case 4:
				switch (c) {
					case 47:
						v23 = 11;
						vba++;
						break;
					case 62:
						v23 = 9;
						vba++;
						break;
					default:
						v23 = 5;
						start = p;
						continue;
				};
				break;
			case 5:
				if (!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
					var vU1;
					if (start == p) throw "Expected attribute name";
					vU1 = HxOverrides.substr(str, start, p - start);
					vaa = vU1;
					if (xml.exists(vaa)) throw "Duplicate attribute";
					v23 = 0;
					next = 6;
					continue;
				};
				break;
			case 6:
				switch (c) {
					case 61:
						v23 = 0;
						next = 7;
						break;
					default:
						throw "Expected =";
				};
				break;
			case 7:
				switch (c) {
					case 34:
					case 39:
						v23 = 8;
						start = p;
						break;
					default:
						throw "Expected \"";
				};
				break;
			case 8:
				if (c == str.charCodeAt(start)) {
					var vIZ = HxOverrides.substr(str, start + 1, p - start - 1);
					xml.set(vaa, vIZ);
					v23 = 0;
					next = 4;
				};
				break;
			case 9:
				p = haxe.xml.Parser.vYZ(str, p, xml);
				start = p;
				v23 = 1;
				break;
			case 11:
				switch (c) {
					case 62:
						v23 = 1;
						break;
					default:
						throw "Expected >";
				};
				break;
			case 12:
				switch (c) {
					case 62:
						if (vba == 0) parent.addChild(Xml.createPCData(""));
						return p;
					default:
						throw "Expected >";
				};
				break;
			case 10:
				if (!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
					if (start == p) throw "Expected node name";
					var v = HxOverrides.substr(str, start, p - start);
					if (v != parent.getNodeName()) throw "Expected </" + parent.getNodeName() + ">";
					v23 = 0;
					next = 12;
					continue;
				};
				break;
			case 15:
				if (c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
					parent.addChild(Xml.createComment(HxOverrides.substr(str, start, p - start)));
					p += 2;
					v23 = 1;
				};
				break;
			case 16:
				if (c == 91) vca++;
				else if (c == 93) vca--;
				else if (c == 62 && vca == 0) {
					parent.addChild(Xml.createDocType(HxOverrides.substr(str, start, p - start)));
					v23 = 1;
				};
				break;
			case 14:
				if (c == 63 && str.charCodeAt(p + 1) == 62) {
					p++;
					var vda = HxOverrides.substr(str, start + 1, p - start - 2);
					parent.addChild(Xml.createProlog(vda));
					v23 = 1;
				};
				break;
		};
		c = str.charCodeAt(++p);
	};
	if (v23 == 1) {
		start = p;
		v23 = 13;
	};
	if (v23 == 13) {
		if (p != start || vba == 0) parent.addChild(Xml.createPCData(HxOverrides.substr(str, start, p - start)));
		return p;
	};
	throw "Unexpected end";
};
haxe.xml.Parser.vea = function(c) {
	return c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45;
};