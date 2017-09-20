com.wiris.e1_W = v91["com.wiris.e1_W"] = function(vDA, reservedWords, allowInnerNewLines) {
	this.vDA = vDA;
	this.reservedWords = reservedWords;
	this.vMN = null;
	this.allowInnerNewLines = allowInnerNewLines;
};
com.wiris.e1_W.__name__ = ["com", "wiris", "e1_W"];
com.wiris.e1_W.prototype = {
	vNN: function(str) {
		if (str.length == 1) {
			var c = HxOverrides.cca(str, 0);
			var vH4;
			var vd1 = 0,
				vc1 = com.wiris.e1_W.vON.length;
			while (vd1 < vc1) {
				var vdI = vd1++;
				if (c == com.wiris.e1_W.vON[vdI]) return true;
			}
		};
		return false;
	},
	vME: function(str) {
		var i = HxOverrides.iter(this.reservedWords);
		while (i.hasNext())
			if (i.next() == str) return true;
		return this.vNN(str);
	},
	viC: function(vPN, recursive) {
		if (vPN == null) return;
		var vQN = 0;
		var vRN = 0;
		var s = "";
		while (vQN < vPN.vN8()) {
			var vTB = vRN < vPN.vN8() ? vPN.getChild(vRN) : null;
			if (vTB != null && vTB.vK8() && (js.Boot.vX3(vTB, com.wiris.e1_f)).type == com.wiris.e1_f.vVE) {
				var text = (js.Boot.vX3(vTB, com.wiris.e1_f)).vM8();
				s += text;
				if (vTB.styles.getFlagsMask() == com.wiris.e1_2.vY2 && !vTB.styles.isFlag(com.wiris.e1_2.vY2)) {
					vTB.styles.vu2(com.wiris.e1_2.vY2);
					vTB.v3D();
				}
			} else {
				var i = HxOverrides.iter(this.reservedWords);
				while (i.hasNext()) {
					var word = i.next();
					var vSN = s.indexOf(word);
					while (vSN >= 0) {
						var vTN = vSN;
						var vUN = vQN;
						while (vSN >= (js.Boot.vX3(vPN.getChild(vUN), com.wiris.e1_f)).vLE()) {
							vSN -= (js.Boot.vX3(vPN.getChild(vUN), com.wiris.e1_f)).vLE();
							++vUN;
						};
						var vVN = vSN + word.length;
						var vWN = vUN;
						while (vVN > (js.Boot.vX3(vPN.getChild(vWN), com.wiris.e1_f)).vLE()) {
							vVN -= (js.Boot.vX3(vPN.getChild(vWN), com.wiris.e1_f)).vLE();
							++vWN;
						};
						if (vSN > 0) {
							var vXN = js.Boot.vX3(vPN.getChild(vUN), com.wiris.e1_f);
							var vYN = new com.wiris.e1_f();
							vYN.vfE(HxOverrides.substr(vXN.vM8(), vSN, null));
							vXN.vfE(HxOverrides.substr(vXN.vM8(), 0, vSN));
							vYN.voC(vXN.styles, true, true);
							com.wiris.editor.formula.box.BoxUtils.vgE(vYN);
							vPN.vVD(vUN + 1, vYN);
							++vUN;
							++vWN;
							++vRN;
							if (vUN == vWN) vVN -= vXN.vM8().length;
						};
						var vZN = js.Boot.vX3(vPN.getChild(vWN), com.wiris.e1_f);
						if (vVN < vZN.vM8().length) {
							var vXN = new com.wiris.e1_f();
							vXN.vfE(HxOverrides.substr(vZN.vM8(), 0, vVN));
							vZN.vfE(HxOverrides.substr(vZN.vM8(), vVN, null));
							vXN.voC(vZN.styles, true, true);
							com.wiris.editor.formula.box.BoxUtils.vgE(vXN);
							vPN.vVD(vWN, vXN);
							++vRN;
						};
						var vaN = js.Boot.vX3(vPN.getChild(vUN), com.wiris.e1_f);
						if (vWN != vUN) {
							vaN.vfE(word);
							vPN["delete"](vUN + 1, vWN - vUN);
							vRN -= vWN - vUN;
						};
						vaN.styles.vy2(com.wiris.e1_2.vY2, false);
						vaN.v3D();
						vSN = s.indexOf(word, vTN + word.length);
					}
				};
				vQN = vRN + 1;
				s = "";
				if (recursive) this.viC(vTB, true);
			};
			++vRN;
		}
	},
	vbN: function(vKE, vEA) {
		var s = "";
		var x = vEA;
		x--;
		while (x >= 0) {
			var c = vKE.getChild(x);
			if (c.vK8()) {
				var vcN = js.Boot.vX3(c, com.wiris.e1_f);
				if (vcN.type != com.wiris.e1_f.vXE) {
					s = vcN.vM8() + s;
					if (this.vME(s)) {
						vKE["delete"](x + 1, vEA - x - 1);
						vcN.vfE(s);
						vcN.styles.vy2(com.wiris.e1_2.vY2, false);
						vcN.v3D();
					}
				}
			} else return;
			x--;
		}
	},
	voC: function(b, a, vN7, rec) {
		var tag = com.wiris.editor.formula.box.BoxUtils.vWB(b);
		if (!vN7) a.vK2(b.styles, true);
		if (!com.wiris.e1_W.vdN || tag == "mi") b.voC(a, vN7, false);
		if (rec) {
			if (a.isFlag(com.wiris.e1_2.va2) && !b.vRB() && !b.vK8()) a.vy2(com.wiris.e1_2.va2, false);
			var i;
			var vd1 = 0,
				vc1 = b.vN8();
			while (vd1 < vc1) {
				var vW9 = vd1++;
				this.voC(b.getChild(vW9), a, vN7, rec);
			}
		}
	},
	v6D: function(top, vEA) {
		var vlD = com.wiris.editor.formula.box.BoxUtils.vRF(top, vEA);
		var b = vlD.b;
		if (vlD.b.vRB()) {
			if (vlD.x > 0) b = b.getChild(vlD.x - 1);
			else if (b.vN8() > 0) b = b.getChild(0);
		};
		var p = b.getParent();
		var i = b.vn7;
		while (i >= 0) {
			var t = p.getChild(i);
			if (t.vK8() && (!com.wiris.e1_W.vdN || com.wiris.editor.formula.box.BoxUtils.vWB(t) == "mi")) {
				var vKE = js.Boot.vX3(t, com.wiris.e1_f);
				if (!this.vME(vKE.vM8()) && !vKE.vOE() || vKE.type == com.wiris.e1_f.vXE) return t;
			};
			i--;
		};
		return null;
	},
	vAD: function(top, vEA) {
		var b = this.v6D(top, vEA);
		if (b != null) return b.styles;
		return new com.wiris.e1_2();
	},
	veN: function(vfN, vj2, vgN, vk2) {
		var vhN = false;
		if (vfN.vVB()) {
			vfN.styles.vy2(com.wiris.e1_2.va2, false);
			vhN = true;
		};
		if (vgN.vVB()) {
			vgN.styles.vy2(com.wiris.e1_2.va2, false);
			vhN = true;
		};
		this.vDA.vMB(vfN);
		this.vDA.vMB(vgN);
		if (vhN) return false;
		var last = HxOverrides.cca(vj2, vj2.length - 1);
		var first = HxOverrides.cca(vk2, 0);
		var vV7 = vfN.v08.isFlag(com.wiris.e1_2.vd2) && vgN.v08.isFlag(com.wiris.e1_2.vd2) && com.wiris.editor.formula.WCharacter.v59(vj2) && com.wiris.editor.formula.WCharacter.v59(vk2) || com.wiris.editor.formula.WCharacter.v29(last) && com.wiris.editor.formula.WCharacter.v29(first);
		if (!vfN.v08.vE3(vgN.v08)) {
			if (!vV7) return false;
			if (!vfN.v08.vB3(vgN.v08, com.wiris.e1_2.vY2)) return false;
		};
		if (vfN.type == com.wiris.e1_f.vXE && vgN.type == com.wiris.e1_f.vXE) return true;
		if (vj2.length != 0 && vk2.length != 0) {
			if (com.wiris.editor.formula.WCharacter.ve8(last) && com.wiris.editor.formula.WCharacter.ve8(first)) return true;
			if (com.wiris.editor.formula.WCharacter.v99(last) != com.wiris.editor.formula.WCharacter.v99(first)) return false;
			if (vV7) return true;
			if (com.wiris.editor.formula.WCharacter.vf8(last) != com.wiris.editor.formula.WCharacter.vf8(first)) return false;
		};
		if (vfN.type == com.wiris.e1_f.vVE && vgN.type == com.wiris.e1_f.vVE) {
			if (com.wiris.editor.formula.WCharacter.v59(vj2) || com.wiris.editor.formula.WCharacter.v59(vk2)) return false;
			if (vfN == vgN && !vfN.styles.isFlagMask(com.wiris.e1_2.vY2)) {
				vfN.v3D();
				return false;
			};
			if (com.wiris.e1_W.viN && !vfN.v08.isFlag(com.wiris.e1_2.vY2)) return true;
		};
		return false;
	},
	vjN: function(vKE, x) {
		var vj2 = vKE.vkN(x);
		var vk2 = vKE.vlN(x);
		vKE.vfE(vj2);
		var vgN = js.Boot.vX3(vKE.vIC(), com.wiris.e1_f);
		vgN.vfE(vk2);
		vKE.getParent().vVD(vKE.vn7 + 1, vgN);
	},
	vmN: function(b, x, vCF, vQF) {
		var vlD = com.wiris.editor.formula.box.BoxUtils.vRF(b, x);
		if (vlD.b.vK8()) {
			var vKE = js.Boot.vX3(vlD.b, com.wiris.e1_f);
			var vj2 = vKE.vkN(vlD.x);
			var vk2 = vKE.vlN(vlD.x);
			if (!this.veN(vKE, vj2, vKE, vk2)) this.vjN(vKE, vlD.x);
		};
		if (vlD.b.vRB()) {
			var vKE = js.Boot.vX3(vlD.b, com.wiris.e1_h);
			if (vlD.x > 0 && vlD.x < vKE.vN8()) {
				var vXN = vKE.getChild(vlD.x - 1);
				var vYN = vKE.getChild(vlD.x);
				if (vXN.vK8() && vYN.vK8()) {
					var vnN = js.Boot.vX3(vXN, com.wiris.e1_f);
					var tr = js.Boot.vX3(vYN, com.wiris.e1_f);
					if (this.veN(vnN, vnN.vM8(), tr, tr.vM8())) {
						vnN.vfE(vnN.vM8() + tr.vM8());
						vKE["delete"](tr.vn7, 1);
					}
				}
			};
			if (vCF == com.wiris.editor.formula.FormulaModel.vKC && !vQF) this.vbN(vKE, vlD.x);
		}
	},
	v7F: function(b, vEA, vnA, vCF) {
		this.vmN(b, vEA, vCF, true);
		if (vCF == com.wiris.editor.formula.FormulaModel.vvD) {
			var i;
			var vc1 = vEA + 1;
			while (vc1 < vnA) {
				var vW9 = vc1++;
				this.vmN(b, vW9, vCF, false);
			}
		};
		if (vEA != vnA) this.vmN(b, vnA, vCF, false);
	},
	voN: function(s) {
		if (s.vEA > 0 && s.vEA == s.vnA) return s.vf3().getChild(s.vEA - 1);
		return null;
	},
	vpN: function(b) {
		while (b.vN8() > 0) {
			if (js.Boot.__instanceof(b, com.wiris.e1_P)) {
				var a = js.Boot.vX3(b, com.wiris.e1_P);
				if (com.wiris.e1_P.vyK == a.actiontype) return a;
			};
			b = b.getChild(0);
		};
		return null;
	},
	vqN: function(b) {
		if (js.Boot.__instanceof(b, com.wiris.e1_P)) {
			var a = js.Boot.vX3(b, com.wiris.e1_P);
			if (com.wiris.e1_P.vyK == a.actiontype) {
				var p = a.getParent();
				var vrN = a.vn7;
				p["delete"](vrN, 1);
				var i;
				var n = a.vN8();
				var vc1 = 0;
				while (vc1 < n) {
					var vW9 = vc1++;
					var vTB = a.getChild(0);
					a["delete"](0, 1);
					p.vVD(vrN + vW9, vTB);
				};
				return true;
			}
		} else if (b.getParent() != null) return this.vqN(b.getParent());
		return false;
	},
	vsN: function(vtN, top, box) {
		var parent = vtN.vf3().getParent();
		if (js.Boot.__instanceof(parent, com.wiris.e1_h)) parent = parent.getParent();
		if (js.Boot.__instanceof(parent, com.wiris.e1_c)) {
			if (js.Boot.__instanceof(box, com.wiris.e1_h) || js.Boot.__instanceof(box, com.wiris.e1_i)) {
				var i;
				var vd1 = 0,
					vc1 = box.vN8();
				while (vd1 < vc1) {
					var vW9 = vd1++;
					if (!this.vsN(vtN, top, box.getChild(vW9))) return false;
				};
				return true;
			};
			if (js.Boot.__instanceof(box, com.wiris.e1_f)) {
				var vKE = js.Boot.vX3(box, com.wiris.e1_f);
				vKE.type = com.wiris.e1_f.vuN;
				return true;
			};
			return false;
		};
		return true;
	},
	vBE: function(vtN, top, box) {
		this.vMN = null;
		var x = vtN.vqE();
		if (box.vK8()) {
			var vKE = js.Boot.vX3(box, com.wiris.e1_f);
			if (vKE.vVB() && !this.allowInnerNewLines) {
				var vlC = vtN.vf3();
				if (!vlC.vK8() && !vlC.parent.vxF()) {
					var vvN = com.wiris.editor.formula.box.BoxUtils.select(top, com.wiris.editor.formula.box.BoxUtils.vhG(vlC.parent) + com.wiris.editor.formula.box.BoxUtils.vsC(vlC.parent), 0);
					return this.vBE(vvN, top, box);
				}
			}
		};
		var vwN = this.vxN(vtN, box, top);
		if (vwN != null) return vwN;
		if (!this.vsN(vtN, top, box)) return null;
		if (box.vxF()) return this.vBE(vtN, top, box.getChild(0));
		if (js.Boot.__instanceof(vtN, com.wiris.e1_g)) {
			var vyN = js.Boot.vX3(vtN, com.wiris.e1_g);
			if (vyN.box.vM8().length == 0) vtN.vVD(box);
			else {
				this.vjN(vyN.box, vyN.vEA);
				var vzN = com.wiris.editor.formula.box.BoxUtils.select(top, x, 0);
				return this.vBE(vzN, top, box);
			}
		};
		if (js.Boot.__instanceof(vtN, com.wiris.e1_Z)) {
			if (box.vRB()) {
				if (box.vN8() == 1) return this.vBE(vtN, top, box.getChild(0));
			} else if (js.Boot.__instanceof(box, com.wiris.e1_X)) {
				vtN.vVD(box);
				return vtN;
			}
		};
		if (js.Boot.__instanceof(vtN, com.wiris.e1_Y) && !js.Boot.__instanceof(vtN, com.wiris.e1_Z)) {
			if (box.vK8()) {
				var v0O = js.Boot.vX3(vtN, com.wiris.e1_Y);
				var vKE = v0O.box;
				if (vKE.vN8() == 1 && vKE.getChild(0).vK8() && (js.Boot.vX3(vKE.getChild(0), com.wiris.e1_f)).vM8().length == 0) {
					var vyN = com.wiris.e1_g.v1O(js.Boot.vX3(vKE.getChild(0), com.wiris.e1_f), 0, 0, null, null);
					vyN.vVD(box);
					if (this.vqN(vyN.box)) return com.wiris.editor.formula.box.BoxUtils.select(top, x - 1, 0);
					return vyN;
				}
			};
			if (box.vRB()) {
				var action = this.vpN(box);
				if (action != null && action.vN8() == 1 && action.getChild(0).vRB() && action.getChild(0).vN8() == 0) {
					var argument = this.voN(js.Boot.vX3(vtN, com.wiris.e1_Y));
					if (argument != null) action.getParent()["delete"](action.vn7, 1);
				};
				vtN.vVD(box);
				if (this.vqN(vtN.vf3())) vtN = com.wiris.editor.formula.box.BoxUtils.select(top, x - 1, 0);
				return vtN;
			} else {
				var vPN = com.wiris.e1_h.v2O(box);
				return this.vBE(vtN, top, vPN);
			}
		};
		return null;
	},
	vxN: function(vtN, box, top) {
		if (box.vRB()) return this.vxN(vtN, box.getChild(0), top);
		if (!box.vK8() || !js.Boot.__instanceof(vtN, com.wiris.e1_Y)) return null;
		var v3O = vtN.vf3();
		if (!js.Boot.__instanceof(v3O.parent, com.wiris.e1_T)) return null;
		var v4O = js.Boot.vX3(v3O.parent, com.wiris.e1_T);
		if (!("updiagonalstrike" == v4O.notation)) return null;
		if (v3O.vN8() > 0) return null;
		var text = (js.Boot.vX3(box, com.wiris.e1_f)).vM8();
		if (text.length > 1) return null;
		var v5O = com.wiris.editor.formula.WCharacter.vx8(HxOverrides.cca(text, 0));
		if (v5O == -1) return null;
		var v6O = vtN.vqE();
		this.vMN = v3O.parent;
		var vPN = v3O.parent.parent;
		var position = v3O.parent.vn7;
		vPN["delete"](position, 1);
		var t = new com.wiris.e1_f();
		t.vfE(com.wiris.e1_61.v12(v5O));
		t.voC(this.vMN.styles, true, true);
		com.wiris.editor.formula.box.BoxUtils.vgE(t);
		vPN.vVD(position, t);
		return com.wiris.editor.formula.box.BoxUtils.select(top, v6O - 1, 1);
	},
	vHF: function() {
		return this.vMN;
	},
	vVD: function(vtN, top, box, styles, vCF) {
		if (styles != null) {
			box.styles.setClassType(box.styles.getClassType());
			this.voC(box, styles, vCF == com.wiris.editor.formula.FormulaModel.vvD, true);
		};
		return this.vBE(vtN, top, box);
	},
	allowInnerNewLines: null,
	vMN: null,
	vDA: null,
	reservedWords: null,
	__class__: com.wiris.e1_W
};