com.wiris.editor.ModelFactory = v91["com.wiris.editor.ModelFactory"] = function() {};
com.wiris.editor.ModelFactory.__name__ = ["com", "wiris", "editor", "ModelFactory"];
com.wiris.editor.ModelFactory.v75 = function(v85) {
	if (v85 == null) return new Array();
	return js.Boot.vX3(v85, Array);
};
com.wiris.editor.ModelFactory.v95 = function(v85) {
	if (v85 == null) return new HaxeHash();
	return js.Boot.vX3(v85, HaxeHash);
};
com.wiris.editor.ModelFactory.vA5 = function(v85) {
	if (v85 == null) return null;
	return js.Boot.vX3(v85, String);
};
com.wiris.editor.ModelFactory.vB5 = function(i, vC5, vD5) {
	var elements = new Array();
	while (i.hasNext()) {
		var node = com.wiris.editor.ModelFactory.v95(i.next());
		var attributes = com.wiris.editor.ModelFactory.v95(node.get("attrs"));
		if (vD5 == attributes.get(vC5)) elements.push(node);
	};
	return elements;
};
com.wiris.editor.ModelFactory.getElementsByName = function(i, name) {
	var elements = new Array();
	while (i.hasNext()) {
		var node = com.wiris.editor.ModelFactory.v95(i.next());
		if (name == node.get("name")) elements.push(node);
	};
	return elements;
};
com.wiris.editor.ModelFactory.vE5 = function(toolbar, vF5, vG5, vG3, vH5) {
	var vI5 = com.wiris.editor.ModelFactory.v95(vF5.get("attrs"));
	var vJ5 = com.wiris.editor.ModelFactory.vA5(vI5.get("action"));
	var icon = null;
	var iconRTL = null;
	var action = null;
	var vK5 = null;
	if (vJ5 != null) {
		action = vG5.get(vJ5);
		if (action == null) action = new com.wiris.e1_1(vJ5, vJ5);
		vK5 = com.wiris.editor.ModelFactory.vA5(vI5.get("description"));
		if (vK5 == null) vK5 = action.description != null ? action.description : vJ5;
		vK5 = com.wiris.editor.ModelFactory.vL5(vK5, vH5);
		var vM5 = com.wiris.editor.ModelFactory.v75(vF5.get("childs"));
		var icons = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vM5), "icon");
		if (icons.length > 0) icon = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[0]), vG3, true, false);
		else if (action.icon != null) icon = action.icon;
		else {
			var vO5 = new HaxeHash();
			vO5.set("name", "icon");
			var vP5 = new HaxeHash();
			vP5.set("src", vJ5);
			vO5.set("attrs", vP5);
			icon = com.wiris.editor.ModelFactory.vN5(vO5, vG3, true, false);
		};
		var vQ5 = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vM5), "iconRTL");
		if (vQ5.length > 0) iconRTL = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(vQ5[0]), vG3, false, false);
		else if (action.iconRTL != null) iconRTL = action.iconRTL;
		if (iconRTL == null && icon != null) iconRTL = vG3.vR5("rtl_" + vJ5, true);
	} else {
		vK5 = com.wiris.editor.ModelFactory.vA5(vI5.get("description"));
		var content = com.wiris.editor.ModelFactory.vA5(vI5.get("content"));
		var v52 = true;
		var vM5 = com.wiris.editor.ModelFactory.v75(vF5.get("childs"));
		if (content == null) {
			var vS5 = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vM5), "content");
			if (vS5.length == 0) throw "There is not content associated with the button with description \"" + vK5 + "\".";
			content = com.wiris.editor.ModelFactory.vA5(com.wiris.editor.ModelFactory.v95(vS5[0]).get("mml"));
		} else v52 = false;
		action = new com.wiris.e1_1(content, "insertion");
		vG5.set(content, action);
		action.content = content;
		action.v52 = v52;
		if (vK5 != null) vK5 = com.wiris.editor.ModelFactory.vL5(vK5, vH5);
		else if (vH5.exists(content)) vK5 = com.wiris.editor.ModelFactory.vL5(content, vH5);
		action.description = vK5;
		var vT5 = com.wiris.editor.ModelFactory.vA5(vI5.get("offset"));
		if (vT5 != null) action.v42 = Std.parseInt(vT5);
		var icons = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vM5), "icon");
		if (icons.length == 0) throw "There is not icon associated with the button with description \"" + vK5 + "\".";
		icon = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[0]), vG3, true, false);
		iconRTL = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[0]), vG3, false, true);
	};
	var button = new com.wiris.e1_l(toolbar, vK5, icon);
	button.iconRTL = iconRTL;
	button.action = action;
	if (com.wiris.editor.ModelFactory.vU5.indexOf(action.command) >= 0) button.vV5 = true;
	return button;
};
com.wiris.editor.ModelFactory.vW5 = function(toolbar, vX5, vG5, vG3, vH5) {
	var vY5 = com.wiris.editor.ModelFactory.v95(vX5.get("attrs"));
	var vJ5 = com.wiris.editor.ModelFactory.vA5(vY5.get("action"));
	if (vJ5 == null) throw "There is a matrix button widget without an \"action\" attribute.";
	var action = vG5.get(vJ5);
	if (action == null) action = new com.wiris.e1_1(vJ5, vJ5);
	action.v62 = true;
	var vK5 = com.wiris.editor.ModelFactory.vA5(vY5.get("description"));
	if (vK5 == null) vK5 = vJ5;
	vK5 = com.wiris.editor.ModelFactory.vL5(vK5, vH5);
	var icon = null;
	var iconRTL = null;
	var vZ5 = com.wiris.editor.ModelFactory.v75(vX5.get("childs"));
	var icons = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vZ5), "icon");
	if (icons.length == 0) {
		if (action.icon == null) {
			var vO5 = new HaxeHash();
			vO5.set("name", "icon");
			var vP5 = new HaxeHash();
			vP5.set("src", vJ5);
			vO5.set("attrs", vP5);
			icon = com.wiris.editor.ModelFactory.vN5(vO5, vG3, true, false);
			iconRTL = com.wiris.editor.ModelFactory.vN5(vO5, vG3, false, true);
		} else {
			icon = action.icon;
			iconRTL = action.iconRTL;
		}
	} else {
		icon = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[0]), vG3, true, false);
		iconRTL = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[0]), vG3, false, true);
	};
	var matrixButton = new com.wiris.e1_q(toolbar, action, vK5, icon);
	return matrixButton;
};
com.wiris.editor.ModelFactory.va5 = function(toolbar, vb5, vG5, vH5) {
	var vc5 = com.wiris.editor.ModelFactory.v95(vb5.get("attrs"));
	var vJ5 = com.wiris.editor.ModelFactory.vA5(vc5.get("action"));
	if (vJ5 == null) throw "There is a color chooser widget without an \"action\" attribute.";
	var action = vG5.get(vJ5);
	if (action == null) action = new com.wiris.e1_1(vJ5, vJ5);
	var vK5 = com.wiris.editor.ModelFactory.vA5(vc5.get("description"));
	if (vK5 == null) vK5 = vJ5;
	vK5 = com.wiris.editor.ModelFactory.vL5(vK5, vH5);
	var vd5 = com.wiris.editor.ModelFactory.vA5(vc5.get("default"));
	if (vd5 == null) vd5 = "#000000";
	var colorChooser = new com.wiris.e1_m(toolbar, action, vK5, vd5);
	return colorChooser;
};
com.wiris.editor.ModelFactory.ve5 = function(vf5, vG3, vH5) {
	var icon = null;
	var vg5 = com.wiris.editor.ModelFactory.v95(vf5.get("attrs"));
	var description = com.wiris.editor.ModelFactory.vA5(vg5.get("description"));
	description = com.wiris.editor.ModelFactory.vL5(description, vH5);
	var url = com.wiris.editor.ModelFactory.vA5(vg5.get("url"));
	if (url == null) throw "The link with description \"" + description + "\" has not an URL.";
	var vh5 = com.wiris.editor.ModelFactory.v75(vf5.get("childs"));
	var icons = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vh5), "icon");
	if (icons.length == 0) throw "There is not icon associated with the button with description \"" + Std.string(vf5) + "\".";
	icon = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[0]), vG3, true, false);
	var link = new HaxeHash();
	link.set("description", description);
	link.set("url", url);
	link.set("icon", icon);
	return link;
};
com.wiris.editor.ModelFactory.vi5 = function(toolbar, vj5, vG5, vG3, vH5) {
	var vk5 = com.wiris.editor.ModelFactory.v95(vj5.get("attrs"));
	var vJ5 = com.wiris.editor.ModelFactory.vA5(vk5.get("action"));
	if (vJ5 == null) throw "There is a select widget without an \"action\" attribute.";
	var action = vG5.get(vJ5);
	if (action == null) action = new com.wiris.e1_1(vJ5, vJ5);
	var vK5 = com.wiris.editor.ModelFactory.vA5(vk5.get("description"));
	if (vK5 == null) vK5 = vJ5;
	vK5 = com.wiris.editor.ModelFactory.vL5(vK5, vH5);
	var vl5 = com.wiris.editor.ModelFactory.vA5(vk5.get("icon"));
	var icon = null;
	if (vl5 != null) {
		var vO5 = new HaxeHash();
		vO5.set("name", "icon");
		var vP5 = new HaxeHash();
		vP5.set("src", vl5);
		vO5.set("attrs", vP5);
		icon = com.wiris.editor.ModelFactory.vN5(vO5, vG3, true, false);
	};
	var vm5 = com.wiris.editor.ModelFactory.vA5(vk5.get("selected"));
	var options = new HaxeHash();
	var i = HxOverrides.iter(com.wiris.editor.ModelFactory.v75(vj5.get("childs")));
	if (!i.hasNext()) throw "There is a select node with no options.";
	while (i.hasNext()) {
		var node = com.wiris.editor.ModelFactory.v95(i.next());
		var nodeName = com.wiris.editor.ModelFactory.vA5(node.get("name"));
		if (nodeName == "option") {
			var vn5 = com.wiris.editor.ModelFactory.v95(node.get("attrs"));
			var id = com.wiris.editor.ModelFactory.vA5(vn5.get("id"));
			if (id == null) throw "There is an option node without the \"id\" attribute.";
			var label = com.wiris.editor.ModelFactory.vA5(vn5.get("label"));
			if (label == null) label = id;
			options.set(id, label);
		} else throw "Unknown node \"" + nodeName + "\".";
	};
	var select = new com.wiris.e1_t(toolbar, action, vK5, icon, options, vm5);
	return select;
};
com.wiris.editor.ModelFactory.vb3 = function(vo5, vG5, vG3, parameters) {
	var language = "en";
	if (parameters != null && parameters.exists("language")) language = parameters.get("language");
	var vH5 = com.wiris.editor.ModelFactory.vp5(language);
	var toolbar = new com.wiris.e1_w();
	com.wiris.editor.ModelFactory.vq5(toolbar, vo5, vG5, vG3, vH5);
	return toolbar;
};
com.wiris.editor.ModelFactory.vT3 = function(vr5, vG5, vG3, parameters) {
	var vo5 = com.wiris.editor.ModelFactory.vs5(vr5);
	return com.wiris.editor.ModelFactory.vb3(vo5, vG5, vG3, parameters);
};
com.wiris.editor.ModelFactory.vN5 = function(vO5, vG3, ltr, vt5) {
	var src = com.wiris.editor.ModelFactory.vA5(com.wiris.editor.ModelFactory.v95(vO5.get("attrs")).get("src"));
	var vi3 = com.wiris.editor.ModelFactory.vA5(vO5.get("mml"));
	if (vi3 != null) {
		vi3 = StringTools.trim(vi3);
		if (vi3.length == 0) vi3 = null;
	};
	if (!ltr) {
		if (vi3 != null && StringTools.startsWith(vi3, "<")) {
			var vu5 = vi3.indexOf(">");
			if (vu5 != -1 && HxOverrides.substr(vi3, 0, vu5).indexOf(" dir=\"") < 0) vi3 = HxOverrides.substr(vi3, 0, vu5) + " dir=\"rtl\"" + HxOverrides.substr(vi3, vu5, null);
		};
		if (src != null && !StringTools.startsWith(src, "rtl_")) src = "rtl_" + src;
	};
	if (src != null) {
		var img = vG3.vR5(src, vt5);
		if (img != null) img.vi3 = vi3;
		return img;
	};
	return vG3.vv5(vi3);
};
com.wiris.editor.ModelFactory.vp5 = function(language) {
	var vH5 = new HaxeHash();
	var resourceLoader = new com.wiris.system.ResourceLoader();
	var vw5 = resourceLoader.loadResource("lang/" + language + ".xml");
	if (vw5 == null) {
		if (language == "en") return vH5;
		return com.wiris.editor.ModelFactory.vp5("en");
	};
	var vx5 = com.wiris.util.xml.WXmlUtils.vN3(vw5);
	var i = com.wiris.util.xml.WXmlUtils.vy5(vx5).elements();
	while (i.hasNext()) {
		var node = i.next();
		if (node.getNodeName() == "t") vH5.set(com.wiris.util.xml.WXmlUtils.getAttribute(node, "k"), com.wiris.util.xml.WXmlUtils.getAttribute(node, "v"));
	};
	return vH5;
};
com.wiris.editor.ModelFactory.va3 = function(vR3, vG3) {
	var vG5 = new HaxeHash();
	var i = HxOverrides.iter(com.wiris.editor.ModelFactory.v75(vR3.get("childs")));
	while (i.hasNext()) {
		var vz5 = com.wiris.editor.ModelFactory.v95(i.next());
		if (vz5.get("name") == "action") {
			var v06 = com.wiris.editor.ModelFactory.v95(vz5.get("attrs"));
			var id = com.wiris.editor.ModelFactory.vA5(v06.get("id"));
			if (id == null) throw "There is an action without the \"id\" attribute.";
			var description = com.wiris.editor.ModelFactory.vA5(v06.get("description"));
			var content = null;
			var contentRTL = null;
			var icon = null;
			var iconRTL = null;
			var vH4 = HxOverrides.iter(com.wiris.editor.ModelFactory.v75(vz5.get("childs")));
			while (vH4.hasNext()) {
				var node = com.wiris.editor.ModelFactory.v95(vH4.next());
				var nodeName = com.wiris.editor.ModelFactory.vA5(node.get("name"));
				if (nodeName == "content") content = com.wiris.editor.ModelFactory.vA5(node.get("mml"));
				else if (nodeName == "contentRTL") contentRTL = com.wiris.editor.ModelFactory.vA5(node.get("mml"));
				// else if (nodeName == "icon") icon = com.wiris.editor.ModelFactory.vN5(node, vG3, true, false);
				// else if (nodeName == "iconRTL") iconRTL = com.wiris.editor.ModelFactory.vN5(node, vG3, false, false);
			};
			var command = com.wiris.editor.ModelFactory.vA5(v06.get("command"));
			if (command == null) {
				if (content != null) command = "insertion";
				else command = id;
			};
			var action = new com.wiris.e1_1(id, command);
			action.description = description;
			action.icon = icon;
			action.iconRTL = iconRTL;
			if (command == "insertion") {
				if (content == null) throw "There is no content associated to the action \"" + Std.string(v06.get("id")) + "\".";
				action.content = content;
				action.contentRTL = contentRTL;
				var vT5 = com.wiris.editor.ModelFactory.vA5(v06.get("offset"));
				if (vT5 != null) action.v42 = Std.parseInt(vT5);
			};
			vG5.set(id, action);
		}
	};
	return vG5;
};
com.wiris.editor.ModelFactory.vS3 = function(v16, vG3) {
	var vR3 = com.wiris.editor.ModelFactory.vs5(v16);
	return com.wiris.editor.ModelFactory.va3(vR3, vG3);
};
com.wiris.editor.ModelFactory.v26 = function(toolbar, section, v36, vG5, v46, extra, showDisabled, vH5) {
	var i = HxOverrides.iter(com.wiris.editor.ModelFactory.v75(v36.get("childs")));
	while (i.hasNext()) {
		var node = com.wiris.editor.ModelFactory.v95(i.next());
		var vn5 = com.wiris.editor.ModelFactory.v95(node.get("attrs"));
		var nodeName = com.wiris.editor.ModelFactory.vA5(node.get("name"));
		var v56 = showDisabled || !("false" == vn5.get("enabled"));
		if (nodeName == "button") {
			var button = com.wiris.editor.ModelFactory.vE5(toolbar, node, vG5, v46, vH5);
			button.v56 = v56;
			section.v66(button, extra);
		} else if (nodeName == "select") {
			var select = com.wiris.editor.ModelFactory.vi5(toolbar, node, vG5, v46, vH5);
			select.v56 = v56;
			section.v66(select, extra);
		} else if (nodeName == "colorChooser") {
			var colorChooser = com.wiris.editor.ModelFactory.va5(toolbar, node, vG5, vH5);
			colorChooser.v56 = v56;
			section.v66(colorChooser, extra);
		} else if (nodeName == "matrixButton") {
			var matrixButton = com.wiris.editor.ModelFactory.vW5(toolbar, node, vG5, v46, vH5);
			matrixButton.v56 = v56;
			section.v66(matrixButton, extra);
		} else if (!extra && nodeName == "extra") {
			var extraLayout = vn5.get("layout");
			if (extraLayout != null) section.extraLayout = "horizontal" == extraLayout ? com.wiris.e1_s.v76 : com.wiris.e1_s.v86;
			com.wiris.editor.ModelFactory.v26(toolbar, section, node, vG5, v46, true, showDisabled, vH5);
		} else throw "Unknown node \"" + nodeName + "\".";
	}
};
com.wiris.editor.ModelFactory.v96 = function(toolbar, vo5, vA6, vG5, vG3, enabled, showDisabled, vH5) {
	var vB6 = com.wiris.editor.ModelFactory.v95(vA6.get("attrs"));
	var vC6 = com.wiris.editor.ModelFactory.v75(vA6.get("childs"));
	var id = com.wiris.editor.ModelFactory.vA5(vB6.get("id"));
	if (id == null) throw "There is a tab without an \"id\" attribute.";
	var description = com.wiris.editor.ModelFactory.vA5(vB6.get("description"));
	if (description == null) description = id;
	description = com.wiris.editor.ModelFactory.vL5(description, vH5);
	var icons = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vC6), "icon");
	var vD6 = null;
	var vE6 = null;
	if (icons.length > 0) {
		vD6 = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[0]), vG3, true, false);
		if (icons.length > 1) vE6 = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(icons[1]), vG3, true, false);
		else vE6 = vD6;
	};
	var vQ5 = com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vC6), "iconRTL");
	var vF6 = null;
	var vG6 = null;
	if (vQ5.length > 0) {
		vF6 = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(vQ5[0]), vG3, true, false);
		if (vQ5.length > 1) vG6 = com.wiris.editor.ModelFactory.vN5(com.wiris.editor.ModelFactory.v95(vQ5[1]), vG3, true, false);
		else vG6 = vF6;
	};
	var vH6 = com.wiris.editor.ModelFactory.vA5(vB6.get("panel"));
	if (vH6 == null) throw "There is not panel associated with the tab \"" + description + "\".";
	var vI6 = com.wiris.editor.ModelFactory.v75(vo5.get("childs"));
	var vJ6 = com.wiris.editor.ModelFactory.vB5(HxOverrides.iter(com.wiris.editor.ModelFactory.getElementsByName(HxOverrides.iter(vI6), "panel")), "id", vH6);
	if (vJ6.length == 0) throw "Panel \"" + vH6 + "\" does not exist.";
	var vK6 = com.wiris.editor.ModelFactory.v95(vJ6[0]);
	var tab = new com.wiris.e1_u(toolbar, id, description, vD6, vE6);
	if (vF6 != null) tab.vF6 = vF6;
	if (vG6 != null) tab.vG6 = vG6;
	tab.v56 = enabled;
	toolbar.vL6(tab);
	com.wiris.editor.ModelFactory.vM6(toolbar, tab.panel, vK6, vG5, vG3, showDisabled, vH5);
};
com.wiris.editor.ModelFactory.vM6 = function(toolbar, panel, vK6, vG5, v46, showDisabled, vH5) {
	var rowsPerSection = 2;
	var vN6 = com.wiris.editor.ModelFactory.v95(vK6.get("attrs"));
	var vO6 = com.wiris.editor.ModelFactory.vA5(vN6.get("rowsPerSection"));
	if (vO6 != null) rowsPerSection = Std.parseInt(vO6);
	var i = HxOverrides.iter(com.wiris.editor.ModelFactory.v75(vK6.get("childs")));
	while (i.hasNext()) {
		var node = com.wiris.editor.ModelFactory.v95(i.next());
		var nodeName = com.wiris.editor.ModelFactory.vA5(node.get("name"));
		if (nodeName == "disabled") continue;
		if (!(nodeName == "section")) throw "Uknown node \"" + nodeName + "\".";
		var vn5 = com.wiris.editor.ModelFactory.v95(node.get("attrs"));
		var layout = "horizontal" == vn5.get("layout") ? com.wiris.e1_s.v76 : com.wiris.e1_s.v86;
		var rows = rowsPerSection;
		var vP6 = com.wiris.editor.ModelFactory.vA5(vn5.get("rows"));
		if (vP6 != null) rows = Std.parseInt(vP6);
		var section = new com.wiris.e1_s(layout, layout, rows);
		section.v56 = showDisabled || !("false" == vn5.get("enabled"));
		section.context = com.wiris.editor.ModelFactory.vA5(vn5.get("context"));
		panel.vQ6(section);
		com.wiris.editor.ModelFactory.v26(toolbar, section, node, vG5, v46, false, showDisabled, vH5);
	}
};
com.wiris.editor.ModelFactory.vq5 = function(toolbar, vo5, vG5, vG3, vH5) {
	var showDisabled = "true" == vo5.get("showDisabled");
	var i = HxOverrides.iter(com.wiris.editor.ModelFactory.v75(vo5.get("childs")));
	while (i.hasNext()) {
		var node = com.wiris.editor.ModelFactory.v95(i.next());
		var nodeName = com.wiris.editor.ModelFactory.vA5(node.get("name"));
		var vn5 = com.wiris.editor.ModelFactory.v95(node.get("attrs"));
		if (nodeName == "tab") com.wiris.editor.ModelFactory.v96(toolbar, vo5, node, vG5, vG3, showDisabled || !("false" == vn5.get("enabled")), showDisabled, vH5);
		else if (nodeName == "link") {
			var link = com.wiris.editor.ModelFactory.ve5(node, vG3, vH5);
			toolbar.vR6(link);
		}
	}
};
com.wiris.editor.ModelFactory.vL5 = function(vJ1, vH5) {
	if (vJ1 == null) return null;
	var value = vH5.get(vJ1);
	if (value == null) return vJ1;
	return value;
};
com.wiris.editor.ModelFactory.vs5 = function(element) {
	var hash = new HaxeHash();
	hash.set("name", element.getNodeName());
	var attributes = new HaxeHash();
	var i = element.attributes();
	while (i.hasNext()) {
		var name = i.next();
		attributes.set(name, com.wiris.util.xml.WXmlUtils.getAttribute(element, name));
	};
	hash.set("attrs", attributes);
	if (element.getNodeName() == "content" || element.getNodeName() == "contentRTL" || element.getNodeName() == "icon" || element.getNodeName() == "iconRTL") hash.set("mml", com.wiris.util.xml.WXmlUtils.vS6(element));
	else {
		var childNodes = new Array();
		var vH4 = element.elements();
		while (vH4.hasNext()) childNodes.push(com.wiris.editor.ModelFactory.vs5(vH4.next()));
		hash.set("childs", childNodes);
	};
	return hash;
};
com.wiris.editor.ModelFactory.vq3 = function(editorModel, toolbar, vo3) {
	toolbar.vr3 = false;
	var vT6 = com.wiris.util.xml.WXmlUtils.vN3(vo3).firstElement();
	toolbar.empty();
	var vU6 = false;
	var vV6 = vT6.get("ref");
	var vF3 = editorModel.registeredToolbars.get("general");
	if (vV6 != null && editorModel.toolbarExists(vV6)) {
		vU6 = true;
		toolbar.vI3(editorModel.registeredToolbars.get(vV6));
		if ("true" == vT6.get("removeLinks")) toolbar.removeLinks();
	} else if (!("true" == vT6.get("removeLinks"))) toolbar.vW6(vF3);
	var i = vT6.elements();
	var vX6 = false;
	while (i.hasNext()) {
		var node = i.next();
		if ("removeTab" == node.getNodeName()) {
			var vY6 = com.wiris.util.xml.WXmlUtils.getAttribute(node, "ref");
			if (vY6 == null) throw "\"removeTab\" node without \"ref\" attribute.";
			if (vY6 == "contextual") vX6 = true;
			com.wiris.editor.ModelFactory.removeTab(toolbar, vY6);
		} else if ("tab" == node.getNodeName()) {
			var vZ6 = false;
			var vY6 = com.wiris.util.xml.WXmlUtils.getAttribute(node, "ref");
			if (vY6 == null) {
				vZ6 = true;
				vY6 = com.wiris.util.xml.WXmlUtils.getAttribute(node, "name");
				if (vY6 == null) throw "\"tab\" node without \"ref\" or \"name\" attribute.";
			} else if (vY6 == "contextual") vX6 = true;
			var tab = com.wiris.editor.ModelFactory.vL6(toolbar, vY6, "true" == node.get("empty"), com.wiris.util.xml.WXmlUtils.getAttribute(node, "before"), vF3, vZ6);
			var rows = 2;
			var vP6 = node.get("rows");
			if (vP6 != null) rows = Std.parseInt(vP6);
			var extraRows = 2;
			vP6 = node.get("extraRows");
			if (vP6 != null) extraRows = Std.parseInt(vP6);
			com.wiris.editor.ModelFactory.va6(toolbar, tab, node, rows, extraRows, vF3);
		} else throw "Unknown node \"" + node.getNodeName() + "\".";
	};
	var showTabs = vT6.get("showTabs");
	if (showTabs != null) toolbar.vb6 = showTabs == "true" ? true : false;
	else toolbar.vb6 = toolbar.vc6().length > 1; if (!vU6 && !vX6 && toolbar.vb6) com.wiris.editor.ModelFactory.vL6(toolbar, "contextual", false, null, vF3, false);
	toolbar.vr3 = true;
	toolbar.vs3();
	toolbar.vd6(0);
};
com.wiris.editor.ModelFactory.va6 = function(toolbar, tab, ve6, rows, extraRows, vF3) {
	var i = ve6.elements();
	while (i.hasNext()) {
		var node = i.next();
		if (node.getNodeName() == "removeItem") {
			var vf6 = com.wiris.util.xml.WXmlUtils.getAttribute(node, "ref");
			if (vf6 == null) throw "\"removeItem\" node without \"ref\" attribute.";
			com.wiris.editor.ModelFactory.vg6(tab, vf6);
		} else if (node.getNodeName() == "item") {
			var vf6 = com.wiris.util.xml.WXmlUtils.getAttribute(node, "ref");
			if (vf6 == null) throw "\"item\" node without \"ref\" attribute.";
			com.wiris.editor.ModelFactory.v66(toolbar, tab, vf6, "true" == node.get("extra"), com.wiris.util.xml.WXmlUtils.getAttribute(node, "before"), null, rows, extraRows, vF3);
		} else if (node.getNodeName() == "section") {
			var layout = "horizontal" == node.get("layout") ? com.wiris.e1_s.v76 : com.wiris.e1_s.v86;
			var vh6 = node.get("extraLayout");
			var extraLayout = layout;
			if (vh6 != null) extraLayout = vh6 == "horizontal" ? com.wiris.e1_s.v76 : com.wiris.e1_s.v86;
			var vi6 = rows;
			var vP6 = node.get("rows");
			if (vP6 != null) vi6 = Std.parseInt(vP6);
			var vj6 = extraRows;
			vP6 = node.get("extraRows");
			if (vP6 != null) vj6 = Std.parseInt(vP6);
			var section = new com.wiris.e1_s(layout, extraLayout, vi6);
			section.extraRows = vj6;
			var vk6 = node.get("position");
			if (vk6 == null) tab.panel.vQ6(section);
			else {
				var position = Std.parseInt(vk6);
				if (position < 0 || position >= tab.panel.vl6()) throw "Wrong position " + position;
				tab.panel.vm6(section, position);
			};
			com.wiris.editor.ModelFactory.vn6(toolbar, tab, section, node, vF3);
		} else throw "Unknown node \"" + node.getNodeName() + "\".";
	}
};
com.wiris.editor.ModelFactory.vn6 = function(toolbar, tab, section, v36, vF3) {
	var i = v36.elements();
	while (i.hasNext()) {
		var node = i.next();
		if (node.getNodeName() == "item") {
			var vf6 = com.wiris.util.xml.WXmlUtils.getAttribute(node, "ref");
			if (vf6 == null) throw "\"item\" node without \"ref\" attribute.";
			com.wiris.editor.ModelFactory.v66(toolbar, tab, vf6, "true" == node.get("extra"), null, section, section.rows, section.extraRows, vF3);
		} else throw "Unknown node \"" + node.getNodeName() + "\".";
	}
};
com.wiris.editor.ModelFactory.v66 = function(toolbar, tab, vo6, extra, before, section, vp6, vq6, vF3) {
	var vr6 = null;
	var i = HxOverrides.iter(vF3.vc6());
	while (i.hasNext() && vr6 == null) {
		var vs6 = i.next();
		var vH4 = vs6.panel.vl6() - 1;
		while (vH4 >= 0 && vr6 == null) {
			var vt6 = vs6.panel.vu6(vH4);
			vr6 = com.wiris.editor.ModelFactory.vv6(vt6, vo6, false);
			if (vr6 == null) vr6 = com.wiris.editor.ModelFactory.vv6(vt6, vo6, true);
			--vH4;
		}
	};
	if (vr6 == null) throw "Component with id \"" + vo6 + "\" not found.";
	var vw6 = vr6.copy();
	vw6.v56 = true;
	vw6.vx6 = toolbar;
	if (before == null) {
		if (section == null) {
			var vy6 = tab.panel.vl6();
			if (vy6 == 0) {
				section = new com.wiris.e1_s(com.wiris.e1_s.v86, com.wiris.e1_s.v86, vp6);
				section.extraRows = vq6;
				tab.panel.vQ6(section);
			} else section = tab.panel.vu6(tab.panel.vl6() - 1);
		};
		section.v66(vw6, extra);
	} else {
		var vz6 = null;
		var v07 = 0;
		var vH4 = tab.panel.vl6() - 1;
		while (vH4 >= 0 && vz6 == null) {
			section = tab.panel.vu6(vH4);
			var k = section.v17(extra) - 1;
			while (k >= 0 && vz6 == null) {
				var vl4 = section.v27(k, extra);
				if (vl4.action != null && vl4.action.id == before) {
					vz6 = section;
					v07 = k;
				};
				--k;
			};
			--vH4;
		};
		if (vz6 == null) throw "Referenced component \"" + before + "\" not found.";
		vz6.v37(vw6, v07, extra);
	}
};
com.wiris.editor.ModelFactory.vv6 = function(section, vJ5, extra) {
	var i = section.v17(extra) - 1;
	while (i >= 0) {
		var vl4 = section.v27(i, extra);
		if (vl4.action != null && vl4.action.id == vJ5) return vl4;
		--i;
	};
	return null;
};
com.wiris.editor.ModelFactory.vg6 = function(tab, vJ5) {
	var i = tab.panel.vl6() - 1;
	var v47 = false;
	var section = null;
	while (i >= 0 && !v47) {
		section = tab.panel.vu6(i);
		v47 = com.wiris.editor.ModelFactory.v57(section, vJ5, false) || com.wiris.editor.ModelFactory.v57(section, vJ5, true);
		if (!v47)--i;
	};
	if (v47 && section.v17(false) + section.v17(true) == 0) tab.panel.v67(i);
};
com.wiris.editor.ModelFactory.v57 = function(section, vJ5, extra) {
	var i = section.v17(extra) - 1;
	while (i >= 0) {
		var vl4 = section.v27(i, extra);
		if (vl4.action != null && vl4.action.id == vJ5) {
			section.vg6(i, extra);
			return true;
		};
		--i;
	};
	return false;
};
com.wiris.editor.ModelFactory.vL6 = function(toolbar, id, empty, before, vF3, vZ6) {
	var v77 = null;
	var i = HxOverrides.iter(toolbar.vc6());
	while (i.hasNext() && v77 == null) {
		var v87 = i.next();
		if (v87.id == id) {
			v77 = v87;
			if (empty) v77.empty();
		}
	};
	if (v77 == null) {
		if (vZ6) v77 = new com.wiris.e1_u(toolbar, id, id, null, null);
		else {
			i = HxOverrides.iter(vF3.vc6());
			while (i.hasNext() && v77 == null) {
				var vs6 = i.next();
				if (vs6.id == id) {
					if (empty) v77 = new com.wiris.e1_u(toolbar, id, vs6.title, vs6.v97, vs6.vA7);
					else v77 = com.wiris.e1_u.getNewInstance(vs6, toolbar);
					v77.vF6 = vs6.vF6;
					v77.vG6 = vs6.vG6;
				}
			};
			if (v77 == null) throw "Tab \"" + id + "\" not found in the general toolbar specification.";
		}; if (before != null) {
			var index = 0;
			i = HxOverrides.iter(toolbar.vc6());
			while (i.hasNext() && index == -1) {
				var v87 = i.next();
				if (v87.id == before) break;
				++index;
			};
			if (index == -1) throw "Referenced tab \"" + before + "\" does not exist.";
			toolbar.vB7(v77, index);
		} else toolbar.vL6(v77);
	};
	return v77;
};
com.wiris.editor.ModelFactory.removeTab = function(toolbar, vY6) {
	var i = HxOverrides.iter(toolbar.vc6());
	while (i.hasNext()) {
		var tab = i.next();
		if (tab.id == vY6) HxOverrides.remove(toolbar.vc6(), tab);
	}
};