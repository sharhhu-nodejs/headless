com.wiris.e1_8 = v91["com.wiris.e1_8"] = function(editorModel, vG3) {
	this.editorModel = editorModel;
	this.vG3 = vG3;
	this.vE7();
};
com.wiris.e1_8.__name__ = ["com", "wiris", "e1_8"];
com.wiris.e1_8.__interfaces__ = [com.wiris.e1_5, com.wiris.editor.EditorListener];
com.wiris.e1_8.prototype = {
	sectionUpdated: function(vc3, tabIndex, vd3) {},
	toolbarReseted: function(vc3) {
		this.vE7();
	},
	tabUpdated: function(vc3, index) {},
	tabRemoved: function(vc3, index) {},
	tabChanged: function(vc3, from, to) {},
	contextTabAdded: function(vc3, tab) {
		this.vE7();
	},
	componentUpdated: function(vc3, vl4) {},
	componentFired: function(vc3, vl4) {},
	vF7: function() {
		var formulaModel = this.editorModel.getFormulaModel();
		var vG7 = js.Boot.vX3(this.editorModel.getToolbarModel(), com.wiris.e1_w);
		var vH7 = formulaModel.vH7();
		if (vH7 != this.vI7) {
			vG7.vJ7("redo", vH7);
			this.vI7 = vH7;
		};
		var vK7 = formulaModel.vK7();
		if (vK7 != this.vL7) {
			vG7.vJ7("undo", vK7);
			this.vL7 = vK7;
		}
	},
	vM7: function(style, vN7) {
		if (style == null) return;
		var formulaModel = this.editorModel.getFormulaModel();
		var vG7 = js.Boot.vX3(this.editorModel.getToolbarModel(), com.wiris.e1_w);
		var bold = style.isFlag(com.wiris.e1_2.vZ2);
		if (vN7 || bold != this.vO7) {
			vG7.vP7("bold", bold);
			this.vO7 = bold;
		};
		var italic = style.isFlag(com.wiris.e1_2.vY2);
		if (vN7 || italic != this.vQ7) {
			vG7.vP7("italic", italic);
			this.vQ7 = italic;
		};
		var autoItalic = !style.isFlagMask(com.wiris.e1_2.vY2);
		if (vN7 || autoItalic != this.vR7) {
			vG7.vP7("autoItalic", autoItalic);
			this.vR7 = autoItalic;
		};
		var mtext = style.isFlag(com.wiris.e1_2.va2);
		if (vN7 || mtext != this.vS7) {
			vG7.vP7("mtext", mtext);
			this.vS7 = mtext;
		};
		var rtl = formulaModel.vf3().styles.isFlag(com.wiris.e1_2.vc2);
		if (vN7 || rtl != this.vT7) {
			vG7.vU7(!rtl);
			vG7.vP7("rtl", rtl);
			this.vT7 = rtl;
		};
		var vV7 = style.isFlag(com.wiris.e1_2.vd2);
		if (vN7 || vV7 != this.vW7) {
			vG7.vP7("forceLigature", vV7);
			this.vW7 = vV7;
		};
		var vX7 = formulaModel.vY7();
		if (vN7 || vX7 != this.vZ7) {
			vG7.vP7("arabicIndicNumbers", vX7 == com.wiris.editor.formula.FormulaModel.vA4);
			vG7.vP7("easternArabicIndicNumbers", vX7 == com.wiris.editor.formula.FormulaModel.vB4);
		};
		var color = style.getColor();
		if (vN7 || color != this.va7) {
			vG7.vb7("setColor", com.wiris.util.css.CSSUtils.vc7(color));
			this.va7 = color;
		};
		var fontFamily = style.getFontFamily();
		if (vN7 || !(fontFamily == this.vd7)) {
			vG7.vb7("setFontFamily", fontFamily);
			this.vd7 = fontFamily;
		};
		var fontSize;
		if (style.isFlagMask(com.wiris.e1_2.vT2)) fontSize = style.getFontSize() + "px";
		else fontSize = "inherit"; if (vN7 || !(fontSize == this.ve7)) {
			vG7.vb7("setFontSize", fontSize);
			this.ve7 = fontSize;
		};
		var vf7 = js.Boot.vX3(this.editorModel.getCurrentEditorBox(), com.wiris.e1_D);
		var vg7 = false;
		var vh7 = vf7.isMultiLine();
		var vi7 = com.wiris.e1_2.vB2;
		var vj7 = null;
		var vk7 = null;
		var vl7 = null;
		var vm7 = null;
		var vn7 = 0;
		while (vf7 != null && !vg7)
			if (vf7.getTagName() == "mtable") {
				vg7 = true;
				var attributes = com.wiris.system.PropertiesTools.vo7(vf7.getAttributes());
				var vp7 = Std.parseInt(attributes.get("#columns"));
				var vq7 = Math.floor(Math.floor(vn7 / js.Boot.vX3(vp7, Float)));
				var vr7 = vn7 % vp7;
				var vs7 = attributes.get("rowalign");
				if (vs7 == null) vs7 = com.wiris.editor.formula.Styles.vt7;
				var vs4 = vs7.split(" ");
				var vu7 = vq7 >= vs4.length ? vs4.length - 1 : vq7;
				vj7 = vs4[vu7];
				if (vN7 || vj7 != this.vv7) {
					vG7.vP7("alignRowsCenter", vj7 == com.wiris.editor.formula.Styles.v45);
					vG7.vP7("alignRowsTop", vj7 == com.wiris.editor.formula.Styles.v25);
					vG7.vP7("alignRowsBottom", vj7 == com.wiris.editor.formula.Styles.v35);
					vG7.vP7("alignRowsAxis", vj7 == com.wiris.editor.formula.Styles.v55);
					vG7.vP7("alignRowsBaseline", vj7 == com.wiris.editor.formula.Styles.v65 || vj7 == com.wiris.editor.formula.Styles.vt7);
					this.vv7 = vj7;
				};
				var vw7 = attributes.get("columnalign");
				if (vw7 == null) vw7 = com.wiris.editor.formula.Styles.vt7;
				vs4 = vw7.split(" ");
				var vx7 = vr7 >= vs4.length ? vs4.length - 1 : vr7;
				vk7 = vs4[vx7];
				if (vk7 == com.wiris.editor.formula.Styles.vy7) vi7 = com.wiris.e1_2.vn2;
				else if (vk7 == com.wiris.editor.formula.Styles.vz7) vi7 = com.wiris.e1_2.vm2;
				else vi7 = com.wiris.e1_2.vo2;
				vl7 = attributes.get("rowspacing");
				if (vl7 == null) vl7 = "default";
				vs4 = vl7.split(" ");
				vu7 = vq7 >= vs4.length ? vs4.length - 1 : vq7;
				vl7 = vs4[vu7];
				vm7 = attributes.get("columnspacing");
				if (vm7 == null) vm7 = "default";
				vs4 = vm7.split(" ");
				vx7 = vr7;
				if (rtl) {
					--vx7;
					if (vx7 < 0) vx7 = vs4.length - 1;
				};
				if (vx7 >= vs4.length) vx7 = vs4.length - 1;
				vm7 = vs4[vx7];
			} else {
				if (vi7 == com.wiris.e1_2.vB2) vi7 = vf7.vf3().v08.getAlign();
				var parent = vf7.getParent();
				if (parent == null) vf7 = null;
				else {
					if (parent.getTagName() == "mtable") vn7 = vf7.vf3().vn7;
					vf7 = js.Boot.vX3(parent, com.wiris.e1_D);
				}
			};
		if (vN7 || vg7 != this.v18 || vh7 != this.v28) {
			vG7.vJ7("alignLeft", vg7 || vh7);
			vG7.vJ7("alignRight", vg7 || vh7);
			vG7.vJ7("alignCenter", vg7 || vh7);
			vG7.vJ7("alignDecimal", vg7 || vh7);
			vG7.vJ7("alignRelation", vg7 || vh7);
		};
		if (vN7 || vg7 != this.v18) {
			vG7.v38("matrix", vg7);
			vG7.vJ7("prependRow", vg7);
			vG7.vJ7("appendRow", vg7);
			vG7.vJ7("prependColumn", vg7);
			vG7.vJ7("appendColumn", vg7);
			vG7.vJ7("removeRow", vg7);
			vG7.vJ7("removeColumn", vg7);
			vG7.vJ7("addFrame", vg7);
			vG7.vJ7("removeFrame", vg7);
			vG7.vJ7("addFrameTop", vg7);
			vG7.vJ7("addFrameBottom", vg7);
			vG7.vJ7("addFrameRight", vg7);
			vG7.vJ7("addFrameLeft", vg7);
			vG7.vJ7("addLineBelow", vg7);
			vG7.vJ7("removeLineBelow", vg7);
			vG7.vJ7("addLineRight", vg7);
			vG7.vJ7("removeLineRight", vg7);
			vG7.vJ7("alignRowsAxis", vg7);
			vG7.vJ7("alignRowsBaseline", vg7);
			vG7.vJ7("alignRowsTop", vg7);
			vG7.vJ7("alignRowsCenter", vg7);
			vG7.vJ7("alignRowsBottom", vg7);
			vG7.vJ7("equalColWidth", vg7);
			vG7.vJ7("equalRowHeight", vg7);
			vG7.vJ7("matrixSolidLine", vg7);
			vG7.vJ7("matrixThickLine", vg7);
			vG7.vJ7("matrixDotLine", vg7);
			vG7.vJ7("matrixDashLine", vg7);
			vG7.vJ7("setColumnSpacing", vg7);
			vG7.vJ7("setRowSpacing", vg7);
			this.v18 = vg7;
		};
		if (vN7 || vh7 != this.v28) {
			vG7.v38("multiline", vh7);
			this.v28 = vh7;
		};
		if (vi7 == com.wiris.e1_2.vB2) vi7 = rtl ? com.wiris.e1_2.vm2 : com.wiris.e1_2.vn2;
		if (vN7 || vi7 != this.v48) {
			vG7.vP7("alignLeft", vi7 == com.wiris.e1_2.vn2);
			vG7.vP7("alignCenter", vi7 == com.wiris.e1_2.vo2);
			vG7.vP7("alignRight", vi7 == com.wiris.e1_2.vm2);
			this.v48 = vi7;
		};
		var v58 = null;
		if (vg7) {
			v58 = com.wiris.system.PropertiesTools.vo7(vf7.getAttributes());
			var v68 = v58.get("#currentlinetype");
			if (vN7 || !(v68 == this.v78)) {
				vG7.vP7("matrixSolidLine", v68 == "solid");
				vG7.vP7("matrixDashLine", v68 == "dashed");
				this.v78 = v68;
			};
			var v88 = "true" == v58.get("equalrows");
			if (vN7 || v88 != this.v98) {
				vG7.vP7("equalRowHeight", v88);
				this.v98 = v88;
			};
			var vA8 = "true" == v58.get("equalcolumns");
			if (vN7 || vA8 != this.vB8) {
				vG7.vP7("equalColWidth", vA8);
				this.vB8 = vA8;
			};
			if (vN7 || !(vm7 == this.vC8)) {
				vG7.vb7("setColumnSpacing", vm7);
				this.vC8 = vm7;
			};
			if (vN7 || !(vl7 == this.vD8)) {
				vG7.vb7("setRowSpacing", vl7);
				this.vD8 = vl7;
			}
		}
	},
	vE8: function() {
		var vF8 = this.editorModel.getFormulaModel().vF8();
		if (vF8 != this.vG8) {
			var vG7 = js.Boot.vX3(this.editorModel.getToolbarModel(), com.wiris.e1_w);
			vG7.vJ7("paste", vF8);
			this.vG8 = vF8;
		}
	},
	vH8: function() {
		var vI8 = this.editorModel.getFormulaModel().vI8();
		if (vI8 != this.vJ8) {
			var vG7 = js.Boot.vX3(this.editorModel.getToolbarModel(), com.wiris.e1_w);
			vG7.vJ7("copy", vI8);
			vG7.vJ7("cut", vI8);
			this.vJ8 = vI8;
		}
	},
	vE7: function() {
		var formulaModel = this.editorModel.getFormulaModel();
		this.vJ8 = !formulaModel.vI8();
		this.vG8 = !formulaModel.vF8();
		this.vI7 = !formulaModel.vH7();
		this.vL7 = !formulaModel.vK7();
		this.va7 = -1;
		this.ve7 = "inherit";
		this.vd7 = null;
		var style = formulaModel.getCurrentStyles();
		this.vO7 = !style.isFlag(com.wiris.e1_2.vZ2);
		this.vQ7 = !style.isFlag(com.wiris.e1_2.vY2);
		this.vR7 = style.isFlagMask(com.wiris.e1_2.vY2);
		this.vS7 = style.isFlag(com.wiris.e1_2.va2);
		this.vT7 = !formulaModel.vf3().styles.isFlag(com.wiris.e1_2.vc2);
		this.vZ7 = -1;
		this.v18 = false;
		this.v28 = false;
		this.v78 = null;
		this.v98 = false;
		this.vB8 = false;
		this.v48 = -1;
		this.vv7 = null;
		this.vC8 = null;
		this.vD8 = null;
		this.vW7 = !style.isFlag(com.wiris.e1_2.vd2);
		this.vH8();
		this.vE8();
		this.vF7();
		this.vM7(formulaModel.getCurrentStyles(), true);
	},
	transformationReceived: function(vc3, vj3) {},
	styleChanged: function(vc3) {
		this.vM7(this.editorModel.getFormulaModel().getCurrentStyles(), false);
	},
	contentChanged: function(vc3) {
		this.vF7();
	},
	clipboardChanged: function(vc3) {
		this.vE8();
	},
	caretPositionChanged: function(vc3) {
		this.vH8();
		this.vM7(this.editorModel.getFormulaModel().getCurrentStyles(), false);
	},
	editorModel: null,
	vW7: null,
	vD8: null,
	vC8: null,
	vv7: null,
	v48: null,
	vB8: null,
	v98: null,
	v78: null,
	v28: null,
	v18: null,
	vZ7: null,
	ve7: null,
	vd7: null,
	va7: null,
	vT7: null,
	vQ7: null,
	vL7: null,
	vI7: null,
	vG8: null,
	vJ8: null,
	vS7: null,
	vO7: null,
	vR7: null,
	vG3: null,
	__class__: com.wiris.e1_8
};