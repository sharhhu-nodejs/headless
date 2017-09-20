com.wiris.e1_J = v91["com.wiris.e1_J"] = function() {};
com.wiris.e1_J.__name__ = ["com", "wiris", "e1_J"];
com.wiris.e1_J.prototype = {
	vTI: function(m, n) {
		var ve3 = n.attributes();
		while (ve3.hasNext()) {
			var name = ve3.next();
			if (m.get(name) == null) m.set(name, n.get(name));
		}
	},
	vUI: function(n, vlE) {
		if (n.nodeType == Xml.Document || n.nodeType == Xml.Element) {
			if (n.nodeType == Xml.Element) {
				var displaystyle = n.get(com.wiris.e1_J.vVI);
				if (displaystyle != null) {
					var vWI = displaystyle == "true";
					if (vlE == vWI) n.remove(com.wiris.e1_J.vVI);
					else vlE = vWI;
				};
				if (n.getNodeName() == "mfrac") vlE = false;
			};
			var childs = n.iterator();
			while (childs.hasNext()) this.vUI(childs.next(), vlE);
			if (n.nodeType == Xml.Element) {
				var displaystyle;
				childs = n.elements();
				if (com.wiris.e1_J.vXI.indexOf("@" + n.getNodeName() + "@1@") >= 0 && childs.hasNext() && (displaystyle = childs.next().get(com.wiris.e1_J.vVI)) != null && !(n.getNodeName() == "math")) {
					var common = n.get(com.wiris.e1_J.vVI) == null || n.get(com.wiris.e1_J.vVI) == displaystyle;
					var count = 1;
					while (common && childs.hasNext()) {
						common = displaystyle == childs.next().get(com.wiris.e1_J.vVI);
						count++;
					};
					if (common && count >= 2) {
						childs = n.elements();
						while (childs.hasNext()) childs.next().remove(com.wiris.e1_J.vVI);
						n.set(com.wiris.e1_J.vVI, displaystyle);
					}
				}
			}
		}
	},
	vYI: function(name) {
		return name == "mn" || name == "mi" || name == "mo" || name == "mtext";
	},
	vZI: function(n, pos) {
		if (n.nodeType == Xml.Document || n.nodeType == Xml.Element) {
			var childs;
			if (n.nodeType == Xml.Element) {
				var mathvariant = n.get("mathvariant");
				var mathsize = n.get("mathsize");
				if (com.wiris.e1_J.vaI.indexOf(n.getNodeName()) == -1 && !(n.getNodeName() == "math") && (mathvariant != null || mathsize != null)) {
					childs = n.iterator();
					while (childs.hasNext()) {
						var c = childs.next();
						if (c.nodeType == Xml.Element) {
							if (mathvariant != null) c.set("mathvariant", mathvariant);
							if (mathsize != null) c.set("mathsize", mathsize);
						}
					};
					n.remove("mathvariant");
					n.remove("mathsize");
				}
			};
			childs = n.iterator();
			var i = 0;
			while (childs.hasNext()) this.vZI(childs.next(), i++);

			// TUDO: 这块可以尝试优化
			if (n.nodeType == Xml.Element && !(n.getNodeName() == "__document")) {
				var p = n.getParent();
				if (n.getNodeName() == "mrow" && n.firstElement() != null) {
					var c;
					var it = n.iterator();
					var k = 0;
					while (it.hasNext()) {
						var m = it.next();
						if (com.wiris.e1_J.subs.indexOf("@" + m.getNodeName() + "@") != -1) {
							var vbI = Xml.createElement("m" + m.getNodeName());
							this.vTI(vbI, m);
							var vcI = null;
							childs = n.iterator();
							var vH4;
							var vc1 = 0;
							while (vc1 < k) {
								var vdI = vc1++;
								c = childs.next();
								if (c.nodeType == Xml.Element) vcI = c;
							};
							if (vcI != null) n.removeChild(vcI);
							else vcI = Xml.createElement("mrow");
							vbI.addChild(vcI);
							while ((c = m.firstChild()) != null) {
								m.removeChild(c);
								vbI.addChild(c);
							};
							n.removeChild(m);
							n.insertChild(vbI, k - 1);
							it = n.iterator();
							k = 0;
						} else if (com.wiris.e1_J.veI.indexOf("@" + m.getNodeName() + "@") != -1) {
							var mmultiscripts = Xml.createElement("mmultiscripts");
							this.vTI(mmultiscripts, m);
							var vfI = null;
							while (it.hasNext()) {
								c = it.next();
								if (c.nodeType == Xml.Element) {
									vfI = c;
									break;
								}
							};
							var next = null;
							while (it.hasNext()) {
								c = it.next();
								if (c.nodeType == Xml.Element) {
									next = c;
									break;
								}
							};
							if (vfI != null) n.removeChild(vfI);
							else vfI = Xml.createElement("mrow");
							mmultiscripts.addChild(vfI);
							if (next != null && com.wiris.e1_J.subs.indexOf("@" + next.getNodeName() + "@") != -1) {
								n.removeChild(next);
								if (next.getNodeName() == "sup") mmultiscripts.addChild(Xml.createElement("none"));
								while ((c = next.firstChild()) != null) {
									next.removeChild(c);
									mmultiscripts.addChild(c);
								};
								if (next.getNodeName() == "sub") mmultiscripts.addChild(Xml.createElement("none"));
							};
							mmultiscripts.addChild(Xml.createElement("mprescripts"));
							if (m.getNodeName() == "presup") mmultiscripts.addChild(Xml.createElement("none"));
							while ((c = m.firstChild()) != null) {
								m.removeChild(c);
								mmultiscripts.addChild(c);
							};
							if (m.getNodeName() == "presub") mmultiscripts.addChild(Xml.createElement("none"));
							n.removeChild(m);
							n.insertChild(mmultiscripts, k);
							it = n.iterator();
							k = 0;
						} else k++;
					};
					childs = n.elements();
					c = childs.next();
					if (!childs.hasNext() && n.get(com.wiris.e1_J.vgI) == null) {
						p.removeChild(n);
						p.insertChild(c, pos);
						this.vTI(c, n);
						n = c;
					}
				};
				var displaystyle = n.get(com.wiris.e1_J.vVI);
				if (!(n.getNodeName() == "mstyle") && displaystyle != null) {
					var m = Xml.createElement("mstyle");
					m.set(com.wiris.e1_J.vVI, displaystyle);
					n.remove(com.wiris.e1_J.vVI);
					p.removeChild(n);
					m.addChild(n);
					p.insertChild(m, pos);
					n = m;
				};
				var indentalign = n.get(com.wiris.e1_J.vhI);
				if (!(n.getNodeName() == "mstyle") && !(n.getNodeName() == "math") && indentalign != null) {
					var m = Xml.createElement("mstyle");
					m.set(com.wiris.e1_J.vhI, indentalign);
					n.remove(com.wiris.e1_J.vhI);
					p.removeChild(n);
					m.addChild(n);
					p.insertChild(m, pos);
					n = m;
				};
				var mathsize = n.get(com.wiris.e1_J.viI);
				if (n.getNodeName() == "math" && mathsize != null) {
					var m = Xml.createElement("mstyle");
					m.set(com.wiris.e1_J.viI, mathsize);
					n.remove(com.wiris.e1_J.viI);
					var vH4 = n.iterator();
					while (vH4.hasNext()) {
						var vTB = vH4.next();
						n.removeChild(vTB);
						m.addChild(vTB);
					};
					n.addChild(m);
				};
				if (com.wiris.e1_J.vXI.indexOf("@" + n.getNodeName() + "@1@") != -1) {
					childs = n.iterator();
					var m = Xml.createElement(n.getNodeName());
					this.vTI(m, n);
					var c;
					while ((c = n.firstChild()) != null)
						if (c.nodeType == Xml.Element && c.getNodeName() == "mrow" && !c.attributes().hasNext()) {
							n.removeChild(c);
							var vr8;
							while ((vr8 = c.firstChild()) != null) {
								c.removeChild(vr8);
								m.addChild(vr8);
							}
						} else {
							n.removeChild(c);
							m.addChild(c);
						};
					p.removeChild(n);
					p.insertChild(m, pos);
					n = m;
				};
				if (n.getNodeName() == "mfenced") {
					this.vjI(n, "open", com.wiris.e1_J.vkI, true);
					this.vjI(n, "close", com.wiris.e1_J.vkI, true);
				};
				if (this.vYI(n.getNodeName())) {
					var text = com.wiris.util.xml.WXmlUtils.getNodeValue(n.firstChild());
					if (text.length == 1) {
						var vlI = HxOverrides.cca(text, 0);
						if (vlI == 10) {
							var m = Xml.createElement("mspace");
							m.set("linebreak", "newline");
							p.insertChild(m, pos);
							p.removeChild(n);
							n = m;
						} else if (vlI == com.wiris.editor.formula.WCharacter.vu9) {
							var m = Xml.createElement("mspace");
							m.set("width", "-0.2em");
							p.insertChild(m, pos);
							p.removeChild(n);
							n = m;
						}
					}
				};
				if (n.getNodeName() == "mo") this.vmI(n, com.wiris.e1_J.vnI, true, null);
				if (n.getNodeName() == "math") {
					if ("ltr" == n.get("dir")) n.remove("dir");
				}
			}
		}
	},
	vnH: function(vc3, rule, r) {
		var v5G = new StringBuf();
		var i;
		var vd1 = 0,
			vc1 = vc3.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (vW9 > 0) v5G.b += Std.string("-");
			v5G.b += Std.string(HxOverrides.cca(vc3, vW9));
		};
		var vJ1 = (r ? "$" : "@") + v5G.b + (r ? "@" : "$");
		var index = rule.indexOf(vJ1);
		if (index != -1) {
			var start;
			if (r) start = rule.lastIndexOf("@", index) + 1;
			else {
				start = index + vJ1.length;
				index = rule.indexOf("@", start);
			};
			var voI = HxOverrides.substr(rule, start, index - start).split("-");
			var vpI = new StringBuf();
			var vd1 = 0,
				vc1 = voI.length;
			while (vd1 < vc1) {
				var vW9 = vd1++;
				vpI.b += Std.string(com.wiris.e1_61.v12(Std.parseInt(voI[vW9])));
			};
			vc3 = vpI.b;
		};
		return vc3;
	},
	vjI: function(node, name, rule, vqI) {
		var value = com.wiris.util.xml.WXmlUtils.getAttribute(node, name);
		if (value != null) {
			var vrI = this.vnH(value, rule, vqI);
			if (value != vrI) com.wiris.util.xml.WXmlUtils.setAttribute(node, name, vrI);
		}
	},
	vmI: function(node, rule, vqI, ve3) {
		var c = node.firstChild();
		if (c != null && (c.nodeType == Xml.PCData || c.nodeType == Xml.CData)) {
			var vFH = com.wiris.util.xml.WXmlUtils.getNodeValue(c);
			var vsI = this.vnH(vFH, rule, vqI);
			if (vFH != vsI) {
				node.removeChild(c);
				node.insertChild(com.wiris.util.xml.WXmlUtils.createPCData(node, vsI), 0);
				if (ve3 != null) {
					var keys = ve3.keys();
					while (keys.hasNext()) {
						var name = keys.next();
						node.set(name, ve3.get(name));
					}
				}
			}
		}
	},
	vtI: function(n, sub, sup, pre) {
		var script = null;
		var prefix = pre ? "pre" : "";
		var vuI = sub == null || sub.getNodeName() == "none";
		var vvI = sup == null || sup.getNodeName() == "none";
		if (vuI && !vvI) {
			script = Xml.createElement(prefix + "sup");
			n.removeChild(sup);
			script.addChild(sup);
		} else if (!vuI && vvI) {
			script = Xml.createElement(prefix + "sub");
			n.removeChild(sub);
			script.addChild(sub);
		} else if (!vuI && !vvI) {
			script = Xml.createElement(prefix + "subsup");
			n.removeChild(sub);
			n.removeChild(sup);
			script.addChild(sub);
			script.addChild(sup);
		};
		return script;
	},
	vwI: function(n, pos) {
		var p = n.getParent();
		if (n.getNodeName() == "mtable" && p != null && p.nodeType == Xml.Element && p.getNodeName() == "math" && "left" == n.get("columnalign") && "0" == n.get("rowspacing")) {
			var m = Xml.createElement("mrow");
			if (n.get("dir") != null) m.set("dir", n.get("dir"));
			var vxI = n.iterator();
			var first = true;
			while (vxI.hasNext()) {
				var mtr = vxI.next();
				if (mtr.nodeType == Xml.Element && mtr.getNodeName() == "mtr") {
					if (!first) {
						var vvG = Xml.createElement("mspace");
						vvG.set("linebreak", "newline");
						m.addChild(vvG);
					};
					var cols = mtr.iterator();
					while (cols.hasNext()) {
						var mtd = cols.next();
						if (mtd.nodeType == Xml.Element && mtd.getNodeName() == "mtd") {
							var c;
							while ((c = mtd.firstChild()) != null) {
								mtd.removeChild(c);
								m.addChild(c);
							}
						}
					};
					first = false;
				}
			};
			p.insertChild(m, pos);
			p.removeChild(n);
			n = m;
		};
		if (n.getNodeName() == "csymbol") {
			var m = Xml.createElement("mrow");
			if (n.get("dir") != null) m.set("dir", n.get("dir"));
			var c;
			while ((c = n.firstChild()) != null)
				if (c.nodeType == Xml.Element) {
					n.removeChild(c);
					m.addChild(c);
				} else
			if (c.nodeType == Xml.PCData || c.nodeType == Xml.CData) {
				var mo = Xml.createElement("mo");
				n.removeChild(c);
				mo.addChild(c);
				m.addChild(mo);
			};
			var childs = m.iterator();
			if (childs.hasNext() && childs.next() != null && !childs.hasNext()) m = m.firstChild();
			p.insertChild(m, pos);
			p.removeChild(n);
			n = m;
		};
		if (n.getNodeName() == "template") {
			var m = Xml.createElement("maction");
			if (n.get("dir") != null) m.set("dir", n.get("dir"));
			m.set("actiontype", "argument");
			m.addChild(Xml.createElement("mrow"));
			p.insertChild(m, pos);
			p.removeChild(n);
			n = m;
		};
		return n;
	},
	vyI: function(table) {
		var vzI = 0;
		var v0J = new Array();
		var rows = table.iterator();
		while (rows.hasNext()) {
			var vq7 = rows.next();
			if (vq7.nodeType == Xml.Element && "mtr" == vq7.getNodeName()) {
				var cols = vq7.iterator();
				var v1J = 0;
				while (cols.hasNext()) {
					var v2J = cols.next();
					if (v2J.nodeType == Xml.Element && "mtd" == v2J.getNodeName()) v1J++;
				};
				v0J.push(v1J);
				vzI = com.wiris.editor.formula.IntegerTools.max(vzI, v1J);
			}
		};
		rows = table.iterator();
		var i = 0;
		while (rows.hasNext()) {
			var vq7 = rows.next();
			if (vq7.nodeType == Xml.Element && "mtr" == vq7.getNodeName()) {
				var vH4;
				var vd1 = 0,
					vc1 = vzI - v0J[i];
				while (vd1 < vc1) {
					var vdI = vd1++;
					var m = Xml.createElement("mtd");
					if (vq7.get("dir") != null) m.set("dir", vq7.get("dir"));
					var c = Xml.createElement("mspace");
					m.addChild(c);
					vq7.addChild(m);
				};
				i++;
			}
		}
	},
	v3J: function(n, pos) {
		if (n.nodeType == Xml.Element || n.nodeType == Xml.Document) {
			if (n.nodeType == Xml.Element) n = this.vwI(n, pos);
			var c;
			var childs;
			childs = n.iterator();
			while (childs.hasNext()) {
				c = childs.next();
				if (c.nodeType == Xml.Element && this.v4J(c.getNodeName())) {
					n.removeChild(c);
					childs = n.iterator();
				}
			};
			childs = n.iterator();
			var i = 0;
			while (childs.hasNext()) this.v3J(childs.next(), i++);
			if (n.nodeType == Xml.Element) {
				var p = n.getParent();
				childs = n.elements();
				if (com.wiris.e1_J.vXI.indexOf("@" + n.getNodeName() + "@1@") > 0 && (!childs.hasNext() || childs.hasNext() && childs.next() != null && childs.hasNext())) {
					var v5J = Xml.createElement("mrow");
					if (n.get("dir") != null) v5J.set("dir", n.get("dir"));
					while ((c = n.firstChild()) != null) {
						n.removeChild(c);
						v5J.addChild(c);
					};
					n.addChild(v5J);
				};
				if (com.wiris.e1_J.vXI.indexOf("@" + n.getNodeName() + "@") > 0) {
					childs = n.iterator();
					var vH4 = 0;
					while (childs.hasNext()) {
						c = childs.next();
						if (c.nodeType == Xml.Element && !(c.getNodeName() == "mrow")) {
							var v5J = Xml.createElement("mrow");
							if (n.get("dir") != null) v5J.set("dir", n.get("dir"));
							c.getParent().removeChild(c);
							v5J.addChild(c);
							n.insertChild(v5J, vH4);
						};
						vH4++;
					}
				};
				if (com.wiris.e1_J.v6J.indexOf("@" + n.getNodeName() + "@") != -1) {
					var m = Xml.createElement("mrow");
					if (n.get("dir") != null) m.set("dir", n.get("dir"));
					c = n.firstChild();
					while (c.nodeType != Xml.Element) {
						n.removeChild(c);
						m.addChild(c);
						c = n.firstChild();
					};
					n.removeChild(c);
					m.addChild(c);
					n.removeChild(c);
					var sub = Xml.createElement(HxOverrides.substr(n.getNodeName(), 1, null));
					this.vTI(sub, n);
					while ((c = n.firstChild()) != null) {
						n.removeChild(c);
						sub.addChild(c);
					};
					m.addChild(sub);
					p.removeChild(n);
					p.insertChild(m, pos);
					n = m;
				};
				if (n.getNodeName() == "mmultiscripts") {
					var m = Xml.createElement("mrow");
					if (n.get("dir") != null) m.set("dir", n.get("dir"));
					c = n.firstChild();
					while (c.nodeType != Xml.Element) {
						n.removeChild(c);
						m.addChild(c);
						c = n.firstChild();
					};
					n.removeChild(c);
					m.addChild(c);
					var vlB = null;
					var v7J = null;
					childs = n.iterator();
					while (childs.hasNext()) {
						c = childs.next();
						if (c.nodeType == Xml.Element) {
							if (c.getNodeName() == "mprescripts") break;
							if (vlB == null) vlB = c;
							else if (v7J == null) v7J = c;
						}
					};
					var vmB = null;
					var v8J = null;
					while (childs.hasNext()) {
						c = childs.next();
						if (c.nodeType == Xml.Element) {
							if (vmB == null) vmB = c;
							else if (v8J == null) v8J = c;
						}
					};
					var v9J = this.vtI(n, vlB, v7J, false);
					var pre = this.vtI(n, vmB, v8J, true);
					if (pre != null) m.insertChild(pre, 0);
					if (v9J != null) m.addChild(v9J);
					p.removeChild(n);
					p.insertChild(m, pos);
					n = m;
				};
				if (n.getNodeName() == "semantics") {
					var m = Xml.createElement("mrow");
					if (n.get("dir") != null) m.set("dir", n.get("dir"));
					while ((c = n.firstChild()) != null)
						if (c.nodeType != Xml.Element || c.getNodeName() == "annotation" || c.getNodeName() == "annotation-xml") n.removeChild(c);
						else
					if (!(c.getNodeName() == "mrow")) {
						n.removeChild(c);
						m.addChild(c);
					} else {
						n.removeChild(c);
						var d;
						while ((d = c.firstChild()) != null) {
							c.removeChild(d);
							m.addChild(d);
						}
					};
					p.removeChild(n);
					p.insertChild(m, pos);
					n = m;
				};
				if (n.getNodeName() == "mfenced") {
					this.vjI(n, "open", com.wiris.e1_J.vkI, false);
					this.vjI(n, "close", com.wiris.e1_J.vkI, false);
				};
				if (n.getNodeName() == "mo") {
					c = n.firstChild();
					if (c != null) {
						var text = com.wiris.util.xml.WXmlUtils.getNodeValue(c);
						if (text.length > 1) {
							var vAJ = StringTools.trim(text);
							if (vAJ.length < text.length) {
								n.removeChild(c);
								n.insertChild(com.wiris.util.xml.WXmlUtils.createPCData(n, vAJ), 0);
							}
						}
					};
					this.vmI(n, com.wiris.e1_J.vnI, false, null);
					this.vmI(n, com.wiris.e1_J.vBJ, false, null);
					var vCJ = new HaxeHash();
					vCJ.set("largeop", "true");
					this.vmI(n, com.wiris.e1_J.vDJ, false, vCJ);
				};
				if (n.getNodeName() == "mspace") {
					if ("newline" == n.get("linebreak")) {
						var m = Xml.createElement("mo");
						if (n.get("dir") != null) m.set("dir", n.get("dir"));
						c = com.wiris.util.xml.WXmlUtils.createPCData(m, com.wiris.e1_61.v12(10));
						m.addChild(c);
						p.insertChild(m, pos);
						p.removeChild(n);
						n = m;
					}
				};
				if (n.getNodeName() == "mtable") this.vyI(n);
			}
		}
	},
	vEJ: function(n, pos, vt9) {
		var vi1;
		if (n.nodeType == Xml.Element) {
			var ve3 = n.attributes();
			while (ve3.hasNext()) {
				var name = ve3.next();
				if (StringTools.startsWith(name, "xmlns")) {
					vi1 = "";
					if (name.length > 5) vi1 = HxOverrides.substr(name, 6, null);
					var url = n.get(name);
					vt9.set(vi1, url);
					if (url == com.wiris.e1_i.vFJ) {
						n.remove(name);
						n.set("xmlns", com.wiris.e1_i.vFJ);
					}
				}
			}
		};
		var childs = n.iterator();
		var i = 0;
		while (childs.hasNext()) {
			var c = childs.next();
			if (c.nodeType == Xml.Element) this.vEJ(c, i, vt9);
			i++;
		};
		if (n.nodeType == Xml.Element) {
			var index;
			if ((index = n.getNodeName().indexOf(":")) != -1) {
				vi1 = HxOverrides.substr(n.getNodeName(), 0, index);
				if (!vt9.exists(vi1) || vt9.get(vi1) == com.wiris.e1_i.vFJ) {
					var name = HxOverrides.substr(n.getNodeName(), index + 1, null);
					var m = Xml.createElement(name);
					this.vTI(m, n);
					var c;
					while ((c = n.firstChild()) != null) {
						n.removeChild(c);
						m.addChild(c);
					};
					var p = n.getParent();
					if (p != null) {
						p.removeChild(n);
						p.insertChild(m, pos);
					}
				}
			}
		}
	},
	v4J: function(tag) {
		return tag == "maligngroup" || tag == "malignmark";
	},
	vGJ: function(node) {
		if (node.nodeType != Xml.Element) return false;
		if (StringTools.startsWith(node.getNodeName(), "wrs:")) return true;
		var i = node.attributes();
		while (i.hasNext()) {
			var vC5 = i.next();
			if (StringTools.startsWith(vC5, "wrs:")) return true;
		};
		var vH4 = node.iterator();
		while (vH4.hasNext())
			if (this.vGJ(vH4.next())) return true;
		return false;
	},
	formulaToStandard: function(n, vlE) {
		this.vUI(n, vlE);
		this.vZI(n, 0);
		if (this.vGJ(n.firstChild())) com.wiris.util.xml.WXmlUtils.setAttribute(n.firstChild(), "xmlns:wrs", com.wiris.e1_J.vHJ);
		return n;
	},
	standardToFormula: function(n) {
		this.vEJ(n, 0, new HaxeHash());
		this.v3J(n, 0);
		return n;
	},
	__class__: com.wiris.e1_J
};