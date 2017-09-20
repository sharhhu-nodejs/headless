com.wiris.editor.WordValidator = v91["com.wiris.editor.WordValidator"] = function() {
	this.bannedWords = new Array();
};
com.wiris.editor.WordValidator.__name__ = ["com", "wiris", "editor", "WordValidator"];
com.wiris.editor.WordValidator.__interfaces__ = [com.wiris.editor.Validator];
com.wiris.editor.WordValidator.prototype = {
	validate: function(box) {
		if (box.vK8()) {
			var vL8 = js.Boot.vX3(box, com.wiris.e1_f);
			var text = vL8.vM8();
			var i = HxOverrides.iter(this.bannedWords);
			while (i.hasNext())
				if (text.indexOf(i.next()) >= 0) return false;
			return true;
		};
		var vH4 = box.vN8() - 1;
		while (vH4 >= 0) {
			if (!this.validate(box.getChild(vH4))) return false;
			--vH4;
		};
		return true;
	},
	banWord: function(word) {
		this.bannedWords.push(word);
	},
	bannedWords: null,
	__class__: com.wiris.editor.WordValidator
};