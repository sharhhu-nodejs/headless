com.wiris.e1_D = v91["com.wiris.e1_D"] = function(editor, box) {
	this.editor = editor;
	this.vOB = box;
	this.vPB = false;
	this.vQB = null;
};
com.wiris.e1_D.__name__ = ["com", "wiris", "e1_D"];
com.wiris.e1_D.__interfaces__ = [com.wiris.editor.EditorBoxInterface];
com.wiris.e1_D.prototype = {
	isMultiLine: function() {
		if (!this.vPB) {
			if (this.vOB.vRB()) {
				var i = this.vOB.vN8() - 1;
				this.vSB = false;
				while (i >= 0 && !this.vPB) {
					var vTB = this.vOB.getChild(i);
					if (vTB.vK8()) {
						var vUB = js.Boot.vX3(vTB, com.wiris.e1_f);
						if (vUB.vVB()) this.vSB = true;
					};
					--i;
				}
			} else if (this.getParent() != null) this.vSB = this.getParent().isMultiLine();
			this.vPB = true;
		};
		return this.vSB;
	},
	vf3: function() {
		return this.vOB;
	},
	setAttributes: function(p) {
		var h = com.wiris.system.PropertiesTools.vo7(p);
		this.editor.setAttributes(this, h);
	},
	getParent: function() {
		var p = this.vOB.getParent();
		if (p == null) return null;
		return new com.wiris.e1_D(this.editor, p);
	},
	getTagName: function() {
		if (this.vQB == null) this.vQB = com.wiris.editor.formula.box.BoxUtils.vWB(this.vOB);
		return this.vQB;
	},
	getAttributes: function() {
		return com.wiris.system.PropertiesTools.vXB(com.wiris.editor.formula.box.BoxUtils.getAttributes(this.vOB));
	},
	getChild: function(i) {
		return new com.wiris.e1_D(this.editor, this.vOB.getChild(i));
	},
	getLength: function() {
		return this.vOB.vN8();
	},
	vQB: null,
	vPB: null,
	vSB: null,
	vOB: null,
	editor: null,
	__class__: com.wiris.e1_D
};