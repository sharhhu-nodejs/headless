/**
 * 构建toolbar。
 * @return {[type]} [description]
 */
com.wiris.e1_w = v91["com.wiris.e1_w"] = function() {
	this.vIS = null;
	this.vJS = new Array();
	this.links = new Array();
	this.listeners = new Array();
	this.vr3 = true;
	this.vKS = new Array();
	this.vLS = -1;
	this.vb6 = false;
	this.ltr = true;
};
com.wiris.e1_w.__name__ = ["com", "wiris", "e1_w"];
com.wiris.e1_w.__interfaces__ = [com.wiris.e1_v];
com.wiris.e1_w.prototype = {
	v38: function(context, v56) {
		var i = this.vKS.length - 1;
		while (i >= 0) {
			var tab = this.vKS[i];
			var vMS = true;
			var vH4 = tab.panel.vl6() - 1;
			while (vH4 >= 0) {
				var section = tab.panel.vu6(vH4);
				if (context == section.context) {
					section.v56 = v56;
					var k = HxOverrides.iter(this.listeners);
					while (k.hasNext()) k.next().sectionUpdated(this, i, vH4);
				};
				if (section.v56) vMS = false;
				--vH4;
			};
			tab.vaR(!vMS);
			--i;
		}
	},
	vU7: function(ltr) {
		if (this.ltr != ltr) {
			var i = this.vIS.keys();
			while (i.hasNext()) {
				var vH4 = HxOverrides.iter(this.vIS.get(i.next()));
				while (vH4.hasNext()) {
					var button = vH4.next().vfR();
					if (button != null) button.vU7(ltr);
				}
			};
			var k = HxOverrides.iter(this.vKS);
			while (k.hasNext()) k.next().vU7(ltr);
			this.ltr = ltr;
		}
	},
	vFS: function() {
		return this.vb6;
	},
	vCS: function(tab) {
		if (!this.vr3) return;
		if (!tab.enabled && this.vKS[this.vLS] == tab) this.vd6(0);
		var i = this.vKS.length - 1;
		while (i >= 0) {
			if (this.vKS[i] == tab) {
				var vH4 = HxOverrides.iter(this.listeners);
				while (vH4.hasNext()) vH4.next().tabUpdated(this, i);
				return;
			};
			--i;
		}
	},
	vZR: function(vl4) {
		if (!this.vr3) return;
		var i = HxOverrides.iter(this.listeners);
		while (i.hasNext()) i.next().componentUpdated(this, vl4);
	},
	vP7: function(action, vhR) {
		var i = HxOverrides.iter(this.vNS(action));
		while (i.hasNext())(js.Boot.vX3(i.next(), com.wiris.e1_l)).vjR(vhR);
	},
	vb7: function(action, value) {
		var i = HxOverrides.iter(this.vNS(action));
		while (i.hasNext()) i.next().vXR(value);
	},
	vJ7: function(action, enabled) {
		var i = HxOverrides.iter(this.vNS(action));
		while (i.hasNext()) i.next().vaR(enabled);
	},
	vd6: function(index) {
		if (index >= 0 && index < this.vKS.length) {
			if (!this.vKS[index].v56) {
				var vOS = index - 1;
				while (vOS >= 0 && !this.vKS[vOS].v56)--vOS;
				if (vOS < 0) {
					vOS = index + 1;
					while (vOS < this.vKS.length && !this.vKS[vOS].v56)++vOS;
					if (vOS >= this.vKS.length) {
						if (this.vJS.length > 0) vOS = this.vKS.length;
						else vOS = -1;
					}
				};
				index = vOS;
			};
			if (this.vKS[index].enabled) {
				var vPS = this.vLS;
				this.vLS = index;
				if (this.vr3 && index >= 0) {
					var i = HxOverrides.iter(this.listeners);
					while (i.hasNext()) i.next().tabChanged(this, vPS, this.vLS);
				}
			}
		}
	},
	removeLinks: function() {
		this.links = new Array();
	},
	vQS: function() {
		var v0P = this.vKS.length;
		if (this.vLS >= v0P) this.vd6(v0P - 1);
		var i = v0P + this.vJS.length - 1;
		while (i >= v0P) {
			this.vJS.pop();
			if (this.vr3) {
				var vH4 = HxOverrides.iter(this.listeners);
				while (vH4.hasNext()) vH4.next().tabRemoved(this, i);
			};
			--i;
		}
	},
	vRS: function(section, extra) {
		var vSS = section.v17(extra);
		var i = 0;
		while (i < vSS) {
			var vl4 = section.v27(i, extra);
			if (vl4.action.id != null) {
				var stack = this.vIS.get(vl4.action.id);
				if (stack == null) {
					stack = new Array();
					this.vIS.set(vl4.action.id, stack);
				};
				stack.push(vl4);
			};
			++i;
		}
	},
	vs3: function() {
		if (!this.vr3) return;
		var i = HxOverrides.iter(this.listeners);
		while (i.hasNext()) i.next().toolbarReseted(this);
	},
	vc6: function() {
		return this.vKS;
	},
	vGS: function() {
		return this.links;
	},
	vHS: function() {
		return this.vJS;
	},
	vNS: function(action) {
		if (this.vIS == null) {
			this.vIS = new HaxeHash();
			var i = HxOverrides.iter(this.vKS);
			while (i.hasNext()) {
				var tab = i.next();
				var vTS = tab.panel.vl6();
				var vH4 = 0;
				while (vH4 < vTS) {
					var section = tab.panel.vu6(vH4);
					this.vRS(section, false);
					this.vRS(section, true);
					++vH4;
				}
			}
		};
		var vUS = this.vIS.get(action);
		if (vUS == null) return new Array();
		return vUS;
	},
	vlR: function(vl4) {
		if (!this.vr3) return;
		var i = HxOverrides.iter(this.listeners);
		while (i.hasNext()) i.next().componentFired(this, vl4);
	},
	vB7: function(tab, index) {
		this.vKS.splice(index, 0, tab);
		if (this.vLS == -1) this.vd6(0);
		if (this.vKS.length > 1) this.vb6 = true;
	},
	vL6: function(tab) {
		this.vKS.push(tab);
		if (this.vLS == -1) this.vd6(0);
		if (this.vKS.length > 1) this.vb6 = true;
	},
	vJ3: function(listener) {
		this.listeners.push(listener);
	},
	vR6: function(link) {
		this.links.push(link);
	},
	vVS: function(tab) {
		this.vJS.push(tab);
		if (this.vr3) {
			var i = HxOverrides.iter(this.listeners);
			while (i.hasNext()) i.next().contextTabAdded(this, tab);
		};
		if (this.vLS == -1) this.vd6(0);
	},
	empty: function() {
		this.vIS = null;
		this.vJS = new Array();
		this.links = new Array();
		this.vKS = new Array();
		this.vLS = -1;
	},
	vI3: function(toolbar) {
		this.vb6 = toolbar.vb6;
		var i = HxOverrides.iter(toolbar.vKS);
		while (i.hasNext()) {
			var vBS = com.wiris.e1_u.getNewInstance(i.next(), this);
			this.vL6(vBS);
		};
		this.vW6(toolbar);
	},
	vW6: function(toolbar) {
		var vH4 = HxOverrides.iter(toolbar.links);
		while (vH4.hasNext()) this.vR6(vH4.next());
	},
	ltr: null,
	vb6: null,
	vLS: null,
	vKS: null,
	vr3: null,
	listeners: null,
	links: null,
	vJS: null,
	vIS: null,
	__class__: com.wiris.e1_w
};