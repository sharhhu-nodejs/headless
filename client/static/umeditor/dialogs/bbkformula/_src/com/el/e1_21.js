com.wiris.e1_21 = v91["com.wiris.e1_21"] = function(vGU) {
	this.vGU = vGU;
};
com.wiris.e1_21.__name__ = ["com", "wiris", "e1_21"];
com.wiris.e1_21.__interfaces__ = [com.wiris.editor.EditorListener];
com.wiris.e1_21.prototype = {
	transformationReceived: function(vc3, vj3) {},
	styleChanged: function(vc3) {},
	contentChanged: function(vc3) {
		this.vGU();
		vc3.removeEditorListener(this);
	},
	clipboardChanged: function(vc3) {},
	caretPositionChanged: function(vc3) {},
	vGU: null,
	__class__: com.wiris.e1_21
};