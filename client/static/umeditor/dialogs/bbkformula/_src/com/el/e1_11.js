com.wiris.e1_11 = v91["com.wiris.e1_11"] = function(parent) {
	this.vPN = js.Lib.document.createElement("div");
	this.vPN.className = "wrs_contextPanel wrs_hidden";
	this.insertInto(parent);
	this.vGU = null;
	this.hidden = true;
};
com.wiris.e1_11.__name__ = ["com", "wiris", "e1_11"];
com.wiris.e1_11.prototype = {
	vHU: function(x, vQ1, content, vGU) {
		this.vIU();
		com.wiris.js.JsDOMUtils.vxS(this.vPN);
		this.vPN.appendChild(content);
		com.wiris.js.JsDOMUtils.vJU(this.vPN, "wrs_hidden");
		var vKU = this.vPN.offsetWidth;
		var vrA = this.vPN.parentNode.offsetWidth;
		var vLU = com.wiris.js.JsDOMUtils.getLeft(this.vPN.parentNode);
		var vMU = x + vKU - (vLU + vrA);
		if (vMU > 0) x -= vMU;
		this.vPN.style.left = x + "px";
		this.vPN.style.top = vQ1 + "px";
		this.vGU = vGU;
		this.hidden = false;
		com.wiris.js.JsDOMUtils.addEventListener(js.Lib.document, "mousedown", vNU(this, this.vOU));
		com.wiris.js.JsDOMUtils.addEventListener(js.Lib.document, "keydown", vNU(this, this.vPU));
	},
	vPU: function(e) {
		if (e.keyCode == 27) this.vIU();
	},
	vOU: function(e) {
		var target = com.wiris.js.JsDOMUtils.vQU(e);
		if (!com.wiris.js.JsDOMUtils.vFU(this.vPN, target)) this.vIU();
	},
	vIU: function() {
		if (!this.hidden) {
			this.hidden = true;
			com.wiris.js.JsDOMUtils.vvT(this.vPN, "wrs_hidden");
			com.wiris.js.JsDOMUtils.removeEventListener(js.Lib.document, "mousedown", vNU(this, this.vOU));
			com.wiris.js.JsDOMUtils.removeEventListener(js.Lib.document, "keydown", vNU(this, this.vPU));
			if (this.vGU != null) {
				this.vGU();
				this.vGU = null;
			}
		}
	},
	insertInto: function(parent) {
		if (parent != null) parent.appendChild(this.vPN);
	},
	hidden: null,
	vPN: null,
	vGU: null,
	__class__: com.wiris.e1_11
};