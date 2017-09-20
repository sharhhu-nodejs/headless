if (!com.wiris.system) com.wiris.system = {};
com.wiris.system.ArrayEx = v91["com.wiris.system.ArrayEx"] = function() {};
com.wiris.system.ArrayEx.__name__ = ["com", "wiris", "system", "ArrayEx"];
com.wiris.system.ArrayEx.v7Y = function(a, b) {
	var vc1 = 0;
	while (vc1 < a.length) {
		var x = a[vc1];
		++vc1;
		if (x == b) return true;
	};
	return false;
};
com.wiris.system.JSONUtils = v91["com.wiris.system.JSONUtils"] = function() {};
com.wiris.system.JSONUtils.__name__ = ["com", "wiris", "system", "JSONUtils"];
com.wiris.system.JSONUtils.v8Y = function(v85) {
	return v85 instanceof Array;
};
com.wiris.system.JSONUtils.v9Y = function(v85) {
	return typeof(v85) == "string";
};
com.wiris.system.JSONUtils.vV3 = function(json) {
	return eval("(" + json + ")");
};
com.wiris.system.JSONUtils.serialize = function(v85) {
	if (Reflect.isObject(v85) && !com.wiris.system.JSONUtils.v9Y(v85)) {
		if (com.wiris.system.JSONUtils.v8Y(v85)) return com.wiris.system.JSONUtils.vAY(v85);
		return com.wiris.system.JSONUtils.vBY(v85);
	};
	return v85;
};
com.wiris.system.JSONUtils.vAY = function(v85) {
	var array = js.Boot.vX3(v85, Array);
	var i = 0;
	while (i < array.length) {
		array[i] = com.wiris.system.JSONUtils.serialize(array[i]);
		++i;
	};
	return array;
};
com.wiris.system.JSONUtils.vBY = function(v85) {
	var hash = new HaxeHash();
	var i = HxOverrides.iter(Reflect.fields(v85));
	while (i.hasNext()) {
		var vJ1 = i.next();
		var value = Reflect.field(v85, vJ1);
		value = com.wiris.system.JSONUtils.serialize(value);
		hash.set(vJ1, value);
	};
	return hash;
};
com.wiris.system.PropertiesTools = v91["com.wiris.system.PropertiesTools"] = function() {};
com.wiris.system.PropertiesTools.__name__ = ["com", "wiris", "system", "PropertiesTools"];
com.wiris.system.PropertiesTools.vCY = function(s) {
	return null;
};
com.wiris.system.PropertiesTools.getProperty = function(vZS, vJ1, vXC) {
	if (vZS.exists(vJ1)) {
		haxe.Log.trace("we", {
			fileName: "PropertiesTools.hx",
			lineNumber: 20,
			className: "com.wiris.system.PropertiesTools",
			methodName: "getProperty"
		});
		return vZS.get(vJ1);
	};
	return vXC;
};
com.wiris.system.PropertiesTools.vDY = function() {
	return new HaxeHash();
};
com.wiris.system.PropertiesTools.vV1 = function(vZS, vJ1, value) {
	vZS.set(vJ1, value);
};
com.wiris.system.PropertiesTools.vo7 = function(vZS) {
	var vtU = new HaxeHash();
	var i = HxOverrides.iter(Reflect.fields(vZS));
	while (i.hasNext()) {
		var vJ1 = i.next();
		var value = Reflect.field(vZS, vJ1);
		vtU.set(vJ1, value);
	};
	return vtU;
};
com.wiris.system.PropertiesTools.vXB = function(h) {
	var vEY;
	vEY = new Array();;
	var vFY = h.keys();
	while (vFY.hasNext()) {
		var k = vFY.next();
		vEY[k] = h.get(k);
	};
	return vEY;
};
com.wiris.system.ResourceLoader = v91["com.wiris.system.ResourceLoader"] = function() {
	com.wiris.system.ResourceLoader.initialize();
	this.basePath = "";
};
com.wiris.system.ResourceLoader.__name__ = ["com", "wiris", "system", "ResourceLoader"];
com.wiris.system.ResourceLoader.resourcesCache = null;
com.wiris.system.ResourceLoader.initialize = function() {
	if (com.wiris.system.ResourceLoader.resourcesCache == null) com.wiris.system.ResourceLoader.resourcesCache = new HaxeHash();
};
com.wiris.system.ResourceLoader.newInstance = function(basePath) {
	var resourceLoader = new com.wiris.system.ResourceLoader();
	if (basePath.length > 0 && !StringTools.endsWith(basePath, "/")) basePath += "/";
	resourceLoader.basePath = basePath;
	return resourceLoader;
};
com.wiris.system.ResourceLoader.prototype = {
	getPath: function(path) {
		path += (path.indexOf("?") >= 0 ? "&" : "");
		if (StringTools.startsWith(path, "http://") || StringTools.startsWith(path, "https://")) return path;
		return this.basePath + path;
	},
	loadStaticResource: function(path) {
		if (path == "editor_definition.xml") return com.wiris.system.ResourceLoader.editorDefinition;
		if (path == "characters.xml") return com.wiris.system.ResourceLoader.charactersDefinition;
		if (path == "font_adjust.xml") return com.wiris.system.ResourceLoader.fontAdjust;
		if (StringTools.startsWith(path, "lang/")) {
			var lang = HxOverrides.substr(path, 5, path.lastIndexOf(".") - 5);
			if (com.wiris.system.ResourceLoader.translations[lang]) return com.wiris.system.ResourceLoader.translations[lang];
			lang = lang.toLowerCase();
			lang = lang.split("-").join("_");
			if (com.wiris.system.ResourceLoader.translations[lang]) return com.wiris.system.ResourceLoader.translations[lang];
			lang = HxOverrides.substr(lang, 0, 2);
			if (com.wiris.system.ResourceLoader.translations[lang]) return com.wiris.system.ResourceLoader.translations[lang];
		};
		return null;
	},
	loadResource: function(path) {
		var vGY = this.loadStaticResource(path);
		if (vGY != null) return vGY;
		vGY = haxe.Resource.vHY(path);
		if (vGY != null) return vGY;
		return null;
	},
	basePath: null,
	__class__: com.wiris.system.ResourceLoader
};
com.wiris.system.StringEx = v91["com.wiris.system.StringEx"] = function() {};
com.wiris.system.StringEx.__name__ = ["com", "wiris", "system", "StringEx"];
com.wiris.system.StringEx.substring = function(s, start, end) {
	if (end == null) return HxOverrides.substr(s, start, null);
	return HxOverrides.substr(s, start, end - start);
};
com.wiris.system.StringEx.vXY = function(vj2, vk2) {
	if (vj2 > vk2) return 1;
	if (vj2 < vk2) return -1;
	return 0;
};
com.wiris.system.System = v91["com.wiris.system.System"] = function() {};
com.wiris.system.System.__name__ = ["com", "wiris", "system", "System"];
com.wiris.system.System.vYY = function(src, vZY, vTC, vaY, n) {
	var vc1 = 0;
	while (vc1 < n) {
		var i = vc1++;
		vTC[vaY + i] = src[vZY + i];
	}
};
com.wiris.system.TypeTools = v91["com.wiris.system.TypeTools"] = function() {};
com.wiris.system.TypeTools.__name__ = ["com", "wiris", "system", "TypeTools"];
com.wiris.system.TypeTools.vbY = function(value) {
	return "" + value;
};
com.wiris.system.TypeTools.vcY = function(str) {
	var vdY = new EReg("^(\\d|\\d\\.|\\.\\d)", "");
	return vdY.match(str);
};
com.wiris.system.TypeTools.v32 = function(str) {
	var vdY = new EReg("^(\\d)", "");
	return vdY.match(str);
};
com.wiris.system.TypeTools.veY = function(c) {
	var vfY = new EReg("[a-z]", "i");
	var vgY = new EReg("[0-9]", "");
	var str = String.fromCharCode(c);
	return vfY.match(str) || vgY.match(str) || str == "_";
};
com.wiris.system.TypeTools.vhY = function(c) {
	var vfY = new EReg("[a-z]", "i");
	var str = String.fromCharCode(c);
	return vfY.match(str) || str == "_";
};
com.wiris.system.TypeTools.v8Y = function(o) {
	return js.Boot.__instanceof(o, Array);
};
com.wiris.system.TypeTools.viY = function(o) {
	return js.Boot.__instanceof(o, HaxeHash);
};