com.wiris.e1_K = v91["com.wiris.e1_K"] = function() {};
com.wiris.e1_K.__name__ = ["com", "wiris", "e1_K"];
com.wiris.e1_K.prototype = {
	vIJ: function(vM9, vT9, x, vQ1, width, height, baseline) {
		var i = 2;
		var n = Math.floor((vT9.length - 2) / 2);
		var px = new Array();
		var vV9 = new Array();
		px[0] = x + Math.floor(Math.round(width * vT9[2] / 1000.0));
		vV9[0] = vQ1 + Math.floor(Math.round(height * vT9[3] / 1000.0));
		var vc1 = 1;
		while (vc1 < n) {
			var vW9 = vc1++;
			var vJJ = width * (vT9[vW9 * 2 + 2] - vT9[(vW9 - 1) * 2 + 2]) / 1000.0;
			var vKJ = height * (vT9[vW9 * 2 + 3] - vT9[(vW9 - 1) * 2 + 3]) / 1000.0;
			px[vW9] = px[vW9 - 1] + Math.floor(Math.round(vJJ));
			vV9[vW9] = vV9[vW9 - 1] + Math.floor(Math.round(vKJ));
		};
		var vc1 = 1;
		while (vc1 < n) {
			var vW9 = vc1++;
			vM9.drawLine(px[vW9 - 1], vV9[vW9 - 1], px[vW9], vV9[vW9]);
		}
	},
	vLJ: function(c, direction) {
		if (c == com.wiris.editor.formula.WCharacter.vc9) return true;
		var a;
		if (direction == com.wiris.e1_K.vMJ) a = com.wiris.e1_K.vNJ;
		else a = com.wiris.e1_K.vOJ;
		var i;
		var vd1 = 0,
			vc1 = a.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (c == a[vW9][0]) return true;
		};
		var vd1 = 0,
			vc1 = com.wiris.e1_K.vPJ.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (c == com.wiris.e1_K.vPJ[vW9][0] && (com.wiris.e1_K.vPJ[vW9][1] == direction || com.wiris.e1_K.vPJ[vW9][1] == com.wiris.e1_K.vQJ)) return true;
		};
		return false;
	},
	vRJ: function(v1A, c, height, x, vQ1, baseline) {
		var s = com.wiris.e1_61.v12(c);
		var vSJ = this.vTJ(v1A, c);
		var vUJ = 0;
		while (vUJ + vSJ <= height) {
			v1A.drawText(0, s, x, vQ1 + vUJ, baseline);
			vUJ += vSJ;
		};
		v1A.drawVerticalLine(0, x, vQ1 + vUJ, height - vUJ);
	},
	vVJ: function(v1A, c, n, x, vQ1) {
		var t = com.wiris.e1_61.v12(c);
		var b = v1A.getBaseline(t);
		var vSJ = this.vTJ(v1A, c);
		var i;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			v1A.drawText(vW9, t, x, vQ1, b);
			vQ1 += vSJ;
		}
	},
	vWJ: function(v1A, c, vP9, n, x, vQ1, b, Atype) {
		var t = com.wiris.e1_61.v12(c);
		var i;
		var vc1 = 0;
		while (vc1 < n) {
			var vW9 = vc1++;
			v1A.drawText(vW9, t, x, vQ1, b, Atype);
			x += vP9;
		}
	},
	vXJ: function(v1A, x, vQ1, baseline, width, height) {
		var vYJ = com.wiris.editor.formula.WCharacter.vc9;
		var vZJ = com.wiris.e1_61.v12(vYJ);
		var vaJ = width - v1A.getWidth(vZJ);
		var vbJ = vaJ > 0 ? com.wiris.editor.formula.WCharacter.ve9 : vYJ;
		var vcJ = v1A.getHeight(vZJ);
		var vQ9 = 2 * v1A.getZoom();
		var vdJ = height - vcJ;
		var vO9 = Math.floor(Math.round(vdJ / vQ9));
		var veJ = false;
		if (vdJ > 0) {
			if (vO9 < com.wiris.editor.formula.WCharacter.vd9 - com.wiris.editor.formula.WCharacter.vc9) vbJ += vO9;
			else {
				vbJ += com.wiris.editor.formula.WCharacter.vd9 - com.wiris.editor.formula.WCharacter.vc9;
				veJ = true;
			}
		};
		if (vaJ > 0) {
			vQ9 = v1A.getLength(0.1);
			var vfJ = Math.floor(Math.floor(height - v1A.getHeight(com.wiris.e1_61.v12(vbJ)) * 0.4));
			var vgJ = vaJ + Math.floor(Math.round(1.25 * vQ9));
			var vhJ = v1A.getWidth(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vg9));
			var viJ = Math.floor(Math.floor(1.0 * vgJ / vhJ));
			var vjJ = viJ * vhJ;
			this.vWJ(v1A, com.wiris.editor.formula.WCharacter.vg9, vhJ, viJ, x + (vgJ - vjJ), vQ1, vfJ);
		};
		if (veJ) this.vRJ(v1A, com.wiris.editor.formula.WCharacter.vh9, height, x + width - 1, vQ1, v1A.getBaseline(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vh9)));
		v1A.drawText(1, com.wiris.e1_61.v12(vbJ), x + vaJ, vQ1, baseline);
	},
	toInt: function(d, mode) {
		if (mode == com.wiris.e1_K.vp9) return Math.floor(Math.round(d));
		else if (mode == com.wiris.e1_K.vkJ) return Math.floor(Math.floor(d));
		else if (mode == com.wiris.e1_K.vlJ) return Math.floor(Math.ceil(d));
		return 0;
	},
	vmJ: function(v1A, width, mode) {
		var vnJ = v1A.getWidth(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vc9));
		var vaJ = width - vnJ;
		if (vaJ > 0) {
			var vQ9 = v1A.getLength(0.1);
			var vgJ = vaJ + Math.floor(Math.round(1.25 * vQ9));
			var vhJ = v1A.getWidth(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vg9));
			var viJ = this.toInt(1.0 * vgJ / vhJ, mode);
			return viJ * vhJ + v1A.getWidth(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.ve9));
		} else return vnJ;
	},
	voJ: function(v1A, height, mode) {
		var vcJ = v1A.getHeight(com.wiris.e1_61.v12(com.wiris.editor.formula.WCharacter.vc9));
		var vQ9 = Math.floor(2 * v1A.getZoom());
		var vpJ = Math.max(1.0 * (height - vcJ) / vQ9, 0.0);
		var viJ = this.toInt(vpJ, mode);
		return Math.floor(vcJ + viJ * vQ9);
	},
	vqJ: function(v1A, vrJ) {
		var width;
		if (vrJ == 0) width = 0;
		else {
			width = v1A.getWidth(com.wiris.e1_61.v12(vrJ));
			if (vrJ == 9128 || vrJ == 9132) width += v1A.getLength(0.1);
		};
		return width;
	},
	vTJ: function(v1A, vrJ) {
		var size = vrJ != 0 ? v1A.getHeight(com.wiris.e1_61.v12(vrJ)) : 0;
		if (com.wiris.e1_K.vsJ > 0) {
			if (size > com.wiris.e1_K.vsJ) size -= com.wiris.e1_K.vsJ;
		};
		return size;
	},
	vtJ: function(v1A, c, height) {
		v1A.setBracketsSmaller(false);
		if (Math.floor(height / this.vTJ(v1A, c)) < 3) v1A.setBracketsSmaller(true);
	},
	vuJ: function(v1A, voI, x, vQ1, baseline, height) {
		this.vtJ(v1A, voI[2], height);
		var vvJ = this.vwJ(v1A, voI, true, true);
		var viJ = this.vxJ(height, vvJ, com.wiris.e1_K.vkJ);
		if (this.vyJ(voI, viJ)) v1A.drawText(0, com.wiris.e1_61.v12(voI[0]), x, vQ1, baseline);
		else {
			var vzJ = vvJ[0] + vvJ[2] + vvJ[3] + viJ[0] * vvJ[1];
			if (vzJ == 0) {
				viJ[0] = 1;
				vzJ = vvJ[1];
			};
			vQ1 += Math.round(2.0 / 3.0 * (height - vzJ));
			x += v1A.getLength(0.1);
			if (voI[4] == 9128) x += v1A.getLength(0.1);
			if (voI[1] != 0) {
				this.vVJ(v1A, voI[1], 1, x, vQ1);
				vQ1 += vvJ[0];
			};
			if (voI[4] == 0) {
				this.vVJ(v1A, voI[2], viJ[0], x, vQ1);
				vQ1 += viJ[0] * vvJ[1];
			} else {
				this.vVJ(v1A, voI[2], viJ[1], x, vQ1);
				vQ1 += viJ[1] * vvJ[1];
				this.vVJ(v1A, voI[4], 1, x, vQ1);
				vQ1 += vvJ[3];
				this.vVJ(v1A, voI[2], viJ[2], x, vQ1);
				vQ1 += viJ[2] * vvJ[1];
			}; if (voI[3] != 0) this.vVJ(v1A, voI[3], 1, x, vQ1);
		}
	},
	v0K: function(v1A, voI, x, vQ1, baseline, width) {
		var v1K = com.wiris.editor.formula.WCharacter.vv8(voI[0]);
		var vT7 = v1A.getStyle().isFlag(com.wiris.e1_2.vc2);
		if (v1K) {
			var style = js.Boot.vX3(v1A.getStyle(), com.wiris.e1_2);
			style.vy2(com.wiris.e1_2.vc2, false);
		};
		var vvJ = this.vwJ(v1A, voI, false, false);
		var viJ = this.vxJ(width, vvJ, com.wiris.e1_K.vkJ);
		if (this.vyJ(voI, viJ)) {
			v1A.drawText(0, com.wiris.e1_61.v12(voI[0]), x, vQ1, baseline);

		}else {
			var v2K = vvJ[0] + vvJ[2] + vvJ[3] + viJ[0] * vvJ[1];
			if (v2K == 0) {
				viJ[0] = 1;
				v2K = vvJ[1];
			};
			x += Math.floor(Math.floor((width - v2K) / 2.0));
			
			var _Atype = null;
			if (voI[1] != 0) {
					//其他符号暂不处理
				this.vWJ(v1A, voI[1], vvJ[0], 1, x, vQ1, baseline, _Atype);
				x += vvJ[0];
			};

			//此处是箭头后面的横线
			if (voI[4] == 0) {
				this.vWJ(v1A, voI[2], vvJ[1], viJ[0], x, vQ1, baseline, _Atype);
				x += viJ[0] * vvJ[1];
			} else {
				this.vWJ(v1A, voI[2], vvJ[1], viJ[1], x, vQ1, baseline, _Atype);
				x += viJ[1] * vvJ[1];
				this.vWJ(v1A, voI[4], vvJ[3], 1, x, vQ1, baseline, _Atype);
				x += vvJ[3];
				this.vWJ(v1A, voI[2], vvJ[1], viJ[2], x, vQ1, baseline, _Atype);
				x += viJ[2] * vvJ[1];
			}

			if (voI[3] != 0) this.vWJ(v1A, voI[3], vvJ[2], 1, x, vQ1, baseline);

			// if (voI[3] != 0) this.vWJ(v1A, voI[3], vvJ[2], 1, x, vQ1, baseline);
			// //对应unicode码为8594：→，8592： ←，8640：⇀ ，8636：↼
			// if(voI[0] == 8594 || voI[0] == 8640){
			// 	_Atype = "tr";
			// 	if (voI[4] == 0) {
			// 		this.vWJ(v1A, voI[2], vvJ[1], viJ[0] + 1, x, vQ1, baseline, _Atype);
			// 		x += (viJ[0] + 1) * vvJ[1];
			// 	} else {
			// 		this.vWJ(v1A, voI[2], vvJ[1], viJ[1] + 1, x, vQ1, baseline, _Atype);
			// 		x += (viJ[1] + 1) * vvJ[1];
			// 		this.vWJ(v1A, voI[4], vvJ[3], 1, x, vQ1, baseline, _Atype);
			// 		x += vvJ[3];
			// 		this.vWJ(v1A, voI[2], vvJ[1], viJ[2] + 1, x, vQ1, baseline, _Atype);
			// 		x += (viJ[2] + 1) * vvJ[1];
			// 	};

			// 	//如果是右箭头，则最后传入箭头
			// 	if(voI[0] != 0 && (voI[0] == 8594 || voI[0] == 8592 || voI[0] == 8640 || voI[0] == 8636)){
			// 		//这里只处理箭头，对应unicode码为8594：→，8592： ←，8640：⇀ ，8636：↼
			// 		this.vWJ(v1A, voI[0], vvJ[0], 1, x, vQ1, baseline, _Atype);//针对此处传入
			// 		x += vvJ[0];
			// 	}
			// }else{
			// 	//如果不是右箭头，则按原来的方式处理，但是在第一传入的地方对箭头做强制处理
			// 	// if(voI[0] != 0 && (voI[0] == 8592 || voI[0] == 8636)){
			// 	// 	if(voI[0] == 8592 || voI[0] == 8636){
			// 	// 		_Atype = "tl";
			// 	// 	}
			// 	// 	//这里只处理箭头，对应unicode码为8594：→，8592： ←，8640：⇀ ，8636：↼
			// 	// 	this.vWJ(v1A, voI[0], vvJ[0], 1, x, vQ1, baseline, _Atype);//针对此处传入
			// 	// 	x += vvJ[0];

			// 	// }else 
			// 	// if (voI[0] == 8596) {//双向箭头↔
			// 	// 	//先传左箭头
			// 	// 	this.vWJ(v1A, 8592, vvJ[0], 1, x, vQ1, baseline, _Atype);
			// 	// 	x += vvJ[0];

			// 	// }else 

			// 	if (voI[1] != 0) {
			// 		//其他符号暂不处理
			// 		this.vWJ(v1A, voI[1], vvJ[0], 1, x, vQ1, baseline, _Atype);
			// 		x += vvJ[0];
			// 	};

			// 	//此处是箭头后面的横线
			// 	if (voI[4] == 0) {
			// 		this.vWJ(v1A, voI[2], vvJ[1], viJ[0], x, vQ1, baseline, _Atype);
			// 		x += viJ[0] * vvJ[1];
			// 	} else {
			// 		this.vWJ(v1A, voI[2], vvJ[1], viJ[1], x, vQ1, baseline, _Atype);
			// 		x += viJ[1] * vvJ[1];
			// 		this.vWJ(v1A, voI[4], vvJ[3], 1, x, vQ1, baseline, _Atype);
			// 		x += vvJ[3];
			// 		this.vWJ(v1A, voI[2], vvJ[1], viJ[2], x, vQ1, baseline, _Atype);
			// 		x += viJ[2] * vvJ[1];
			// 	}

			// 	if (voI[3] != 0) this.vWJ(v1A, voI[3], vvJ[2], 1, x, vQ1, baseline);
			// 	// if(voI[0] == 8592 || voI[0] == 8636){
			// 	// 	if (voI[3] != 0) this.vWJ(v1A, voI[1], vvJ[2], 1, x, vQ1, baseline, _Atype);
			// 	// }

			// 	// if(voI[0] == 8596){
			// 	// 	this.vWJ(v1A, 8594, vvJ[2], 1, x, vQ1, baseline, _Atype);
			// 	// }else{
			// 	// }
			// }

		}; if (v1K) {
			var style = js.Boot.vX3(v1A.getStyle(), com.wiris.e1_2);
			style.vy2(com.wiris.e1_2.vc2, vT7);
		}
	},
	vyJ: function(voI, viJ) {
		return voI[5] != 0 && viJ[0] == 0;
	},
	vxJ: function(size, vvJ, mode) {
		var viJ = new Array();
		if (vvJ[3] == 0) {
			viJ[0] = this.toInt(1.0 * (size - vvJ[0] - vvJ[2]) / vvJ[1], mode);
			if (viJ[0] < 0) viJ[0] = 0;
		} else {
			viJ[1] = this.toInt(1.0 * (size - vvJ[0] - vvJ[2] - vvJ[3]) / (2.0 * vvJ[1]), mode);
			if (viJ[1] < 0) viJ[1] = 0;
			viJ[2] = viJ[1];
			viJ[0] = viJ[1] + viJ[2];
		};
		return viJ;
	},
	v3K: function(v) {
		var h = 0;
		var i;
		var vd1 = 0,
			vc1 = v.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (h < v[vW9]) h = v[vW9];
		};
		return h;
	},
	vwJ: function(v1A, voI, height, veJ) {
		var n = voI.length - 2;
		var vvJ = new Array();
		var i;
		if (height) {
			var vc1 = 0;
			while (vc1 < n) {
				var vW9 = vc1++;
				vvJ[vW9] = this.vTJ(v1A, voI[vW9 + 1]);
			}
		} else {
			var vc1 = 0;
			while (vc1 < n) {
				var vW9 = vc1++;
				vvJ[vW9] = this.vqJ(v1A, voI[vW9 + 1]);
				if (com.wiris.e1_K.v4K > 0 && !veJ) {
					if (vW9 != 2 && vvJ[vW9] > com.wiris.e1_K.v4K) vvJ[vW9] -= com.wiris.e1_K.v4K;
				}
			}
		};
		return vvJ;
	},
	vy9: function(v1A, c, x, vQ1, baseline, width, height) {
		var v5K = v1A.getStyle();
		var v6K = com.wiris.e1_2.vF2(v5K);
		v6K.vy2(com.wiris.e1_2.vY2, false);
		v1A.setStyle(v6K);
		if (c == com.wiris.editor.formula.WCharacter.vc9) {
			this.vXJ(v1A, x, vQ1, baseline, width, height);
			return;
		};
		var i;
		var vd1 = 0,
			vc1 = com.wiris.e1_K.vOJ.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (com.wiris.e1_K.vOJ[vW9][0] == c) {
				this.vuJ(v1A, com.wiris.e1_K.vOJ[vW9], x, vQ1, baseline, height);
				return;
			}
		};
		var vd1 = 0,
			vc1 = com.wiris.e1_K.vNJ.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (com.wiris.e1_K.vNJ[vW9][0] == c) {
				this.v0K(v1A, com.wiris.e1_K.vNJ[vW9], x, vQ1, baseline, width);
				return;
			}
		};
		var vd1 = 0,
			vc1 = com.wiris.e1_K.vPJ.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (com.wiris.e1_K.vPJ[vW9][0] == c) {
				this.vIJ(v1A, com.wiris.e1_K.vPJ[vW9], x, vQ1, width, height, baseline);
				return;
			}
		};
		v1A.drawText(0, com.wiris.e1_61.v12(c), x, vQ1, baseline);
		v1A.setStyle(v5K);
	},
	v7K: function(v1A, width, height, c, mode, a, v8K, veJ) {
		var i;
		var r = -1;
		var vd1 = 0,
			vc1 = a.length;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			if (a[vW9][0] == c) {
				this.vtJ(v1A, a[vW9][2], height);
				var vvJ = this.vwJ(v1A, a[vW9], veJ, veJ);
				var viJ = this.vxJ(veJ ? height : width, vvJ, mode);
				if (this.vyJ(a[vW9], viJ)) {
					if (v8K) r = this.vTJ(v1A, c);
					else r = v1A.getWidth(com.wiris.e1_61.v12(c));
				} else if (veJ == v8K) {
					r = vvJ[0] + viJ[0] * vvJ[1] + vvJ[2] + vvJ[3];
					if (r == 0) r = vvJ[1];
				} else {
					r = this.v3K(this.vwJ(v1A, a[vW9], v8K, veJ));
					if (veJ) r += 2 * v1A.getLength(0.1);
				};
				break;
			}
		};
		return r;
	},
	vo9: function(v1A, width, height, c, mode) {
		var n;
		if (c == com.wiris.editor.formula.WCharacter.vc9) return this.vmJ(v1A, width, mode);
		n = this.v7K(v1A, width, height, c, mode, com.wiris.e1_K.vOJ, false, true);
		if (n > -1) return n;
		n = this.v7K(v1A, width, height, c, mode, com.wiris.e1_K.vNJ, false, false);
		if (n > -1) return n;
		return width;
	},
	vq9: function(v1A, width, height, c, mode) {
		if (c == com.wiris.editor.formula.WCharacter.vc9) return this.voJ(v1A, height, mode);
		var n;
		n = this.v7K(v1A, width, height, c, mode, com.wiris.e1_K.vOJ, true, true);
		if (n > -1) return n;
		n = this.v7K(v1A, width, height, c, mode, com.wiris.e1_K.vNJ, true, false);
		if (n > -1) return n;
		return height;
	},
	__class__: com.wiris.e1_K
};