com.wiris.e1_9 = v91["com.wiris.e1_9"] = function() {};
com.wiris.e1_9.__name__ = ["com", "wiris", "e1_9"];
com.wiris.e1_9.parse = function(parameters) {
	var eInstructionStyles = parameters.get("eInstructionStyles");
	if (eInstructionStyles == null) eInstructionStyles = parameters.get("einstructionstyles");
	if (eInstructionStyles != null) {
		var styles = parameters.get("styles");
		var vE4 = styles != null ? js.Boot.vX3(com.wiris.e1_81.decode(styles), HaxeHash) : new HaxeHash();
		var vO8 = js.Boot.vX3(com.wiris.e1_81.decode(eInstructionStyles), HaxeHash);
		var i = vO8.keys();
		while (i.hasNext()) {
			var selector = i.next();
			vE4.set(selector, vO8.get(selector));
		};
		if (vO8.exists(".vector")) {
			var style = js.Boot.vX3(vO8.get(".vector"), HaxeHash);
			vE4.set("mi.vector", style);
			vE4.set("mo.vector", style);
			vE4.set("mn.vector", style);
		};
		var vP8 = 0;
		var vQ8 = 0;
		if (vO8.exists(".script")) {
			var style = js.Boot.vX3(vO8.get(".script"), HaxeHash);
			var vR8 = js.Boot.vX3(style.get("font-size"), String);
			if (vR8 != null) {
				vP8 = com.wiris.e1_9.round(com.wiris.util.css.CSSUtils.vt2(vR8));
				style.set("font-size", vP8 + "%");
			};
			vE4.set(":scriptlevel(1)", style);
		};
		if (vO8.exists(".smallScript")) {
			var vS8 = js.Boot.vX3(vO8.get(".smallScript"), HaxeHash);
			var vT8 = new HaxeHash();
			var vR8 = js.Boot.vX3(vS8.get("font-size"), String);
			if (vR8 != null) {
				vQ8 = com.wiris.e1_9.round(100 * com.wiris.util.css.CSSUtils.vt2(vR8) / vP8);
				vS8.set("font-size", vQ8 + "%");
				vT8.set("font-size", "100%");
			};
			vE4.set(":scriptlevel(2)", vS8);
			vE4.set(":scriptlevel(3)", vT8);
		};
		if (vO8.exists(".bigOp")) {
			var vU8 = new HaxeHash();
			vU8.set("font-size", "100%");
			vE4.set(".bigOp :largeop", vU8);
			vE4.set(".bigOp .bigOp", vU8);
		};
		if (vO8.exists(".smallBigOp")) {
			var vV8 = js.Boot.vX3(vO8.get(".smallBigOp"), HaxeHash);
			var vW8 = new HaxeHash();
			var vX8 = new HaxeHash();
			var vY8 = new HaxeHash();
			var vZ8 = new HaxeHash();
			var vR8 = js.Boot.vX3(vV8.get("font-size"), String);
			if (vR8 != null) {
				var va8 = com.wiris.e1_9.round(100 * com.wiris.util.css.CSSUtils.vt2(vR8) / vP8);
				var vb8 = com.wiris.e1_9.round(10000 * com.wiris.util.css.CSSUtils.vt2(vR8) / (vP8 * vQ8));
				var vc8 = va8;
				var vd8 = vb8;
				vW8.set("font-size", va8 + "%");
				vX8.set("font-size", vb8 + "%");
				vY8.set("font-size", vc8 + "%");
				vZ8.set("font-size", vd8 + "%");
			};
			vE4.set(".bigOp:scriptlevel(1)", vV8);
			vE4.set(".bigOp:scriptlevel(2)", vW8);
			vE4.set(".bigOp:scriptlevel(>2)", vX8);
			vE4.set(":scriptlevel(1) .bigOp", vY8);
			vE4.set(":scriptlevel(2) .bigOp", vZ8);
		};
		parameters.set("styles", com.wiris.e1_81.encode(vE4));
	}
};
com.wiris.e1_9.round = function(x) {
	return Math.round(x);
};
com.wiris.e1_9.prototype = {
	__class__: com.wiris.e1_9
};