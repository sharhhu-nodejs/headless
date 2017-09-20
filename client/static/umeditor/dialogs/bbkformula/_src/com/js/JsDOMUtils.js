if (!com.wiris.js) com.wiris.js = {};
com.wiris.js.JsDOMUtils = v91["com.wiris.js.JsDOMUtils"] = function() {};
com.wiris.js.JsDOMUtils.__name__ = ["com", "wiris", "js", "JsDOMUtils"];
com.wiris.js.JsDOMUtils.addEventListener = function(element, vRU, vSU) {
	if (element.attachEvent) element.attachEvent("on" + vRU, vSU);
	else element.addEventListener(vRU, vSU, false);
};
com.wiris.js.JsDOMUtils.vTU = function(e) {
	if (e.preventDefault) e.preventDefault();
	else e.returnValue = false;
};
com.wiris.js.JsDOMUtils.getComputedStyle = function(element) {
	if (element.currentStyle) return element.currentStyle;
	return document.defaultView.getComputedStyle(element, null);
};
com.wiris.js.JsDOMUtils.v1U = function(element, name) {
	var value;
	if (element.currentStyle) {
		var vUU = com.wiris.js.JsDOMUtils.vVU(name);
		value = element.currentStyle[vUU];
		if (value != null && value.length > 0) {
			var vWU = HxOverrides.cca(value, 0);
			if (vWU >= 48 && vWU <= 57 && !StringTools.endsWith(value, "px")) {
				left = element.style.left;
				vXU = element.runtimeStyle && element.runtimeStyle.left;
				if (vXU) element.runtimeStyle.left = element.currentStyle.left;
				element.style.left = vUU == "fontSize" ? "1em" : value;
				value = element.style.pixelLeft + "px";
				element.style.left = left;
				if (vXU) element.runtimeStyle.left = vXU;
			}
		}
	} else if (document.defaultView && document.defaultView.getComputedStyle) {
		var currentStyle = document.defaultView.getComputedStyle(element, null);
		if (currentStyle) {
			value = currentStyle.getPropertyValue(name);
		} else {
			value = element.style[com.wiris.js.JsDOMUtils.vVU(name)];
		}

	}
	else value = element.style[com.wiris.js.JsDOMUtils.vVU(name)];
	return value;
};
com.wiris.js.JsDOMUtils.vVU = function(str) {
	var start = 0;
	var pos;
	var v5G = new StringBuf();
	while ((pos = str.indexOf("-", start)) != -1) {
		v5G.b += Std.string(HxOverrides.substr(str, start, pos - start));
		v5G.b += Std.string(str.charAt(pos + 1).toUpperCase());
		start = pos + 2;
	};
	v5G.b += Std.string(HxOverrides.substr(str, start, null));
	return v5G.b;
};
com.wiris.js.JsDOMUtils.vYU = function(parent, className, recursive) {
	var returnValue = new Array();
	var vd1 = 0,
		vc1 = parent.childNodes.length;
	while (vd1 < vc1) {
		var i = vd1++;
		if (com.wiris.js.JsDOMUtils.v2U(parent.childNodes[i], className)) returnValue.push(parent.childNodes[i]);
		if (recursive) returnValue.concat(com.wiris.js.JsDOMUtils.vYU(parent.childNodes[i], className, true));
	};
	return returnValue;
};
com.wiris.js.JsDOMUtils.vQU = function(vZU) {
	if (vZU.srcElement) return vZU.srcElement;
	return vZU.target;
};
com.wiris.js.JsDOMUtils.getLeft = function(element) {
	var left = 0;
	do {
		left += element.offsetLeft;
		if (com.wiris.js.JsDOMUtils.v1U(element, "position") == "fixed") {
			left += com.wiris.js.JsDOMUtils.vaU()[0] | 0;
			element = null;
		} else {
			if (element != js.Lib.document.body) {
				var vbU = element.parentNode;
				while (vbU != null && vbU != element.offsetParent) {
					if (vbU.scrollLeft != null) left -= vbU.scrollLeft;
					vbU = vbU.parentNode;
				}
			};
			element = element.offsetParent;
		}
	} while (element != null);
	return left;
};
com.wiris.js.JsDOMUtils.vcU = function(element, parent) {
	if (parent == null) return com.wiris.js.JsDOMUtils.getLeft(element);
	return com.wiris.js.JsDOMUtils.getLeft(element) - com.wiris.js.JsDOMUtils.getLeft(parent);
};
com.wiris.js.JsDOMUtils.getTop = function(element) {
	var top = 0;
	do {
		top += element.offsetTop;
		if (com.wiris.js.JsDOMUtils.v1U(element, "position") == "fixed") {
			top += com.wiris.js.JsDOMUtils.vaU()[1] | 0;
			element = null;
		} else {
			if (element != js.Lib.document.body) {
				var vbU = element.parentNode;
				while (vbU != null && vbU != element.offsetParent) {
					if (vbU.scrollTop != null) top -= vbU.scrollTop;
					vbU = vbU.parentNode;
				}
			};
			element = element.offsetParent;
		}
	} while (element != null);
	return top;
};
com.wiris.js.JsDOMUtils.vdU = function(element, parent) {
	if (parent == null) return com.wiris.js.JsDOMUtils.getTop(element);
	return com.wiris.js.JsDOMUtils.getTop(element) - com.wiris.js.JsDOMUtils.getTop(parent);
};
com.wiris.js.JsDOMUtils.vaU = function() {
	var veU = new Array();
	if (js.Lib.window.pageYOffset == undefined) {
		veU[0] = js.Lib.document.documentElement.scrollLeft;
		veU[1] = js.Lib.document.documentElement.scrollTop;
	} else {
		veU[0] = js.Lib.window.pageXOffset;
		veU[1] = js.Lib.window.pageYOffset;
	};
	return veU;
};
com.wiris.js.JsDOMUtils.vFU = function(parent, vfU) {
	if (vfU.parentNode == null) return false;
	if (vfU.parentNode == parent) return true;
	return com.wiris.js.JsDOMUtils.vFU(parent, vfU.parentNode);
};
com.wiris.js.JsDOMUtils.v6U = function(x) {
	return x < 0 || x == null ? 0 : x;
};
com.wiris.js.JsDOMUtils.vxS = function(element) {
	while (element.firstChild != null) element.removeChild(element.firstChild);
};

/**
 * 是否存在className
 * @param  {[type]} element   [description]
 * @param  {[type]} className [description]
 * @return {[type]}           [description]
 */
com.wiris.js.JsDOMUtils.v2U = function(element, className) {
	if (element.className == null) return false;
	var vGE = element.className.split(" ");
	var i = HxOverrides.iter(vGE);
	while (i.hasNext())
		if (i.next() == className) return true;
	return false;
};

/**
 * 添加className
 * @param  {[type]} element   [description]
 * @param  {[type]} className [description]
 * @return {[type]}           [description]
 */
com.wiris.js.JsDOMUtils.vvT = function(element, className) {
	if (element.className == "") element.className = className;
	else if (!com.wiris.js.JsDOMUtils.v2U(element, className)) element.className += " " + className;
};

/**
 * 删除className
 * @param  {[type]} element   [description]
 * @param  {[type]} className [description]
 * @return {[type]}           [description]
 */
com.wiris.js.JsDOMUtils.vJU = function(element, className) {
	var vGE = element.className.split(" ");
	HxOverrides.remove(vGE, className);
	element.className = vGE.join(" ");
};
com.wiris.js.JsDOMUtils.vgU = function(element, className) {
	if (!com.wiris.js.JsDOMUtils.v2U(element, className)) com.wiris.js.JsDOMUtils.vvT(element, className);
};
com.wiris.js.JsDOMUtils.removeEventListener = function(element, vRU, vSU) {
	if (com.wiris.js.JsDOMUtils.browser.isIE()) element.detachEvent("on" + vRU, vSU);
	else element.removeEventListener(vRU, vSU, false);
};
com.wiris.js.JsDOMUtils.vhU = function(element, position, end) {
	if (element.setSelectionRange) element.setSelectionRange(position, end);
	else if (element.createTextRange) {
		var viU = element.createTextRange();
		viU.collapse(true);
		viU.moveStart("character", position);
		viU.moveEnd("character", end);
		viU.select();
	}
};
com.wiris.js.JsDOMUtils.vjU = function(element) {
	var bounds = new Array();
	if (element.selectionStart != null) {
		bounds[0] = element.selectionStart;
		bounds[1] = element.selectionEnd;
		return bounds;
	};
	var viU = document.selection.createRange();
	if (viU && viU.parentElement() == element) {
		var length = element.value.length;
		var normalizedValue = element.value.split("\r\n").join("\n");
		var vkU = element.createTextRange();
		vkU.moveToBookmark(viU.getBookmark());
		var vlU = element.createTextRange();
		vlU.collapse(false);
		if (vkU.compareEndPoints("StartToEnd", vlU) > -1) bounds[0] = bounds[1] = length;
		else {
			bounds[0] = -vkU.moveStart("character", -length);
			bounds[0] += normalizedValue.slice(0, bounds[0]).split("\n").length - 1;
			if (vkU.compareEndPoints("EndToEnd", vlU) > -1) bounds[1] = length;
			else {
				bounds[1] = -vkU.moveEnd("character", -length);
				bounds[1] += normalizedValue.slice(0, bounds[1]).split("\n").length - 1;
			}
		};
		return bounds;
	};
	return null;
};
com.wiris.js.JsDOMUtils.vmU = function(target, e) {
	var vnU = new Array();
	vnU[0] = target.scrollLeft;
	vnU[1] = target.scrollTop;
	return com.wiris.js.JsDOMUtils.voU(target, e, vnU, 0);
};
com.wiris.js.JsDOMUtils.voU = function(target, e, vnU, border) {
	var vpU = com.wiris.js.JsDOMUtils.vaU();
	var position = new Array();
	position[0] = vpU[0] + e.clientX - com.wiris.js.JsDOMUtils.getLeft(target) - border + vnU[0];
	position[1] = vpU[1] + e.clientY - com.wiris.js.JsDOMUtils.getTop(target) - border + vnU[1];
	return position;
};
com.wiris.js.JsDOMUtils.vqU = function(target, e) {
	var vnU = new Array();
	vnU[0] = target.scrollLeft;
	vnU[1] = target.scrollTop;
	return com.wiris.js.JsDOMUtils.vrU(target, e, vnU, 0);
};
com.wiris.js.JsDOMUtils.vrU = function(target, e, vnU, border) {
	var position = new Array();
	position[0] = e.touches[0].clientX - com.wiris.js.JsDOMUtils.getLeft(target) - border + vnU[0];
	position[1] = e.touches[0].clientY - com.wiris.js.JsDOMUtils.getTop(target) - border + vnU[1];
	if (Std.parseFloat(com.wiris.js.JsDOMUtils.browser.getVersion()) >= 5.1) {
		var vpU = com.wiris.js.JsDOMUtils.vaU();
		position[0] += vpU[0];
		position[1] += vpU[1];
	};
	return position;
};
com.wiris.js.JsDOMUtils.vsU = function(e) {
	var button = e.button;
	if (com.wiris.js.JsDOMUtils.browser.isIE()) {
		if (button == 1) button = 0;
		else if (button == 4) button = 1;
	};
	return button;
};