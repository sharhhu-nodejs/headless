com.wiris.e1_F = v91["com.wiris.e1_F"] = function(editorModel, formulaModel) {
	this.editorModel = editorModel;
	this.formulaModel = formulaModel;
};
com.wiris.e1_F.__name__ = ["com", "wiris", "e1_F"];
com.wiris.e1_F.__interfaces__ = [com.wiris.e1_4];
com.wiris.e1_F.prototype = {
	vFG: function(parameters, vj3) {
		if (this.vi3 == parameters.get("input")) {
			var error = this.vGG(vj3);
			if (error != null) {
				var vHG = this.vIG(this.vi3, error[0]);
				var vJG = this.vIG(this.vi3, error[1]);
				var vaB = this.vKG(vHG, this.vLG, false);
				var vMG = this.vKG(vJG, this.vLG, true);
				var vNG = this.vOG(this.s, this.formulaModel.vf3(), vaB);
				var vQF = this.vPG(vNG);
				var vQG = this.vOG(this.s, this.formulaModel.vf3(), vMG);
				var end = this.vRG(vQG);
				this.formulaModel.vxC(vQF, end);
			} else this.formulaModel.vwC();
			this.editorModel.notifyTransformation(vj3);
		}
	},
	urlAnswerReceived: function(url, parameters, vj3) {
		this.vFG(parameters, vj3);
	},
	serviceAnswerReceived: function(serviceName, parameters, vj3) {
		this.vFG(parameters, vj3);
	},
	vKG: function(n, vSG, forward) {
		var m;
		while ((m = vSG[n]) == -1) {
			n += forward ? 1 : -1;
			if (n >= vSG.length || n < 0) return 1;
		};
		return m;
	},
	vIG: function(s, n) {
		var c = 0;
		var p = 0;
		do {
			p = s.indexOf("<", p);
			if (p == -1) break;
			if (!(HxOverrides.substr(s, p, 2) == "</")) c++;
			p++;
		} while (p < n);
		return c - 1;
	},
	vTG: function(x, vSG) {
		if (x.nodeType == Xml.Element) {
			var number = x.get(com.wiris.e1_F.vUG);
			if (number != null) {
				vSG.push(Std.parseInt(number));
				x.remove(com.wiris.e1_F.vUG);
			} else vSG.push(-1);
			var i = x.iterator();
			while (i.hasNext()) this.vTG(i.next(), vSG);
		} else if (x.nodeType == Xml.Document) this.vTG(x.firstChild(), vSG);
	},
	vVG: function(x) {
		var vSG = new Array();
		this.vTG(x, vSG);
		return vSG;
	},
	vWG: function(x, n) {
		if (x.nodeType == Xml.Element) {
			x.set(com.wiris.e1_F.vUG, "" + n++);
			var i = x.iterator();
			while (i.hasNext()) n = this.vWG(i.next(), n);
		} else if (x.nodeType == Xml.Document) return this.vWG(x.firstChild(), n);
		return n;
	},
	vXG: function(x) {
		this.vWG(x, 0);
	},
	vYG: function(t, l, c) {
		var n = -1;
		var i;
		var vd1 = 0,
			vc1 = l - 1;
		while (vd1 < vc1) {
			var vW9 = vd1++;
			n = t.indexOf("\n", n + 1);
		};
		n += c;
		return n;
	},
	vGG: function(t) {
		var e = new EReg("Syntax error from line ([0-9]+) column ([0-9]+) to line ([0-9]+) column ([0-9]+).", "");
		if (e.match(t)) {
			var vZG = Std.parseInt(e.matched(1));
			var vaG = Std.parseInt(e.matched(2));
			var vbG = Std.parseInt(e.matched(3));
			var vcG = Std.parseInt(e.matched(4));
			var vdG = this.vYG(t, vZG, vaG);
			var veG = this.vYG(t, vbG, vcG);
			return [vdG, veG];
		} else return null;
	},
	vOG: function(s, top, n) {
		s.setMode(com.wiris.e1_I.vfG);
		s.vgG(n);
		top.vwB(s);
		return s.vOG();
	},
	vRG: function(b) {
		var p = b.parent;
		var n;
		if (p == null) n = com.wiris.editor.formula.box.BoxUtils.vsC(b) - 1;
		else if (b.vn7 + 1 == p.vN8()) n = com.wiris.editor.formula.box.BoxUtils.vhG(p) + com.wiris.editor.formula.box.BoxUtils.vsC(p) - 1;
		else n = com.wiris.editor.formula.box.BoxUtils.vhG(p.getChild(b.vn7 + 1));
		return n;
	},
	vPG: function(b) {
		var n = com.wiris.editor.formula.box.BoxUtils.vhG(b) - 1;
		if (n == -1) return 0;
		return n;
	},
	getTransformation: function(url, grammar) {
		this.formulaModel.vwC();
		this.s = new com.wiris.e1_I();
		this.s.vhE(this.formulaModel);
		this.s.setMode(com.wiris.e1_I.vkE);
		var xml = this.s.vmE(this.formulaModel.vf3());
		this.vXG(xml);
		var viG = new com.wiris.e1_J();
		viG.formulaToStandard(xml, this.formulaModel.vtC() == com.wiris.editor.formula.FormulaModel.v04);
		this.vLG = this.vVG(xml);
		this.vi3 = com.wiris.util.xml.WXmlUtils.vb4(xml);
		var parameters = new HaxeHash();
		parameters.set("input", this.vi3);
		if (grammar != null) parameters.set("grammar", grammar);
		// if (url == null) com.wiris.system.ServiceProvider.vU4("mathml2content", parameters, this);
		// else com.wiris.system.ServiceProvider.vjG(url, parameters, this);
	},
	s: null,
	vLG: null,
	vi3: null,
	formulaModel: null,
	editorModel: null,
	__class__: com.wiris.e1_F
};