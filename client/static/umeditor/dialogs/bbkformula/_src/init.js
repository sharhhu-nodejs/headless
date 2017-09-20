function vNU(o, m) {
    var f = function() {
        return f.method.apply(f.scope, arguments);
    };
    f.scope = o;
    f.method = m;
    return f;
}
if (Array.prototype.indexOf) {
	HxOverrides.remove = function(a, o) {
	    var i = a.indexOf(o);
	    if (i == -1) return false;
	    a.splice(i, 1);
	    return true;
	}
} else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
v91.Math = Math;
Math.isFinite = function(i) {
    return isFinite(i);
};
Math.isNaN = function(i) {
    return isNaN(i);
};
String.prototype.__class__ = v91.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = v91.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = v91.Date = Date;
Date.__name__ = ["Date"];
var Int = v91.Int = {
    __name__: ["Int"]
};
var Dynamic = v91.Dynamic = {
    __name__: ["Dynamic"]
};
var Float = v91.Float = Number;
Float.__name__ = ["Float"];
var Bool = v91.Bool = Boolean;
Bool.vX1 = ["Bool"];
var Class = v91.Class = {
    __name__: ["Class"]
};
var Enum = {};
var Void = v91.Void = {
    vX1: ["Void"]
};
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.Prolog = "prolog";
Xml.Document = "document";
if (typeof(vna) != "undefined") haxe.Json = vna;
haxe.Resource.content = [{
    name: "toolbar_quizzes",
    vs1: "s6066:PHRvb2xiYXI%DQoJPHRhYiByZWY9ImdlbmVyYWwiIGVtcHR5PSJ0cnVlIiByb3dzPSIxIiBleHRyYVJvd3M9IjIiPg0KCQkNCgkJPGl0ZW0gcmVmPSJmcmFjdGlvbiIgLz4NCgkJPGl0ZW0gcmVmPSJzcXVhcmVSb290IiAvPg0KCQk8aXRlbSByZWY9Im5Sb290IiAvPg0KCQk8aXRlbSByZWY9InN1cGVyc2NyaXB0IiAvPg0KCQkNCgkJPHNlY3Rpb24%DQoJCQk8aXRlbSByZWY9InBhcmVudGhlc2lzIiAvPg0KCQkJPGl0ZW0gcmVmPSJzcXVhcmVCcmFja2V0IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJjdXJseUJyYWNrZXQiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9InZlcnRpY2FsQmFyIiBleHRyYT0idHJ1ZSIvPg0KCQk8L3NlY3Rpb24%DQoNCgkJPHNlY3Rpb24%DQoJCQk8aXRlbSByZWY9InBhcmVudGhlc2lzVGFibGUiIC8%DQoJCQk8aXRlbSByZWY9InByZXBlbmRSb3ciIGV4dHJhPSJ0cnVlIiAvPg0KCQkJPGl0ZW0gcmVmPSJhcHBlbmRSb3ciIGV4dHJhPSJ0cnVlIiAvPg0KCQkJPGl0ZW0gcmVmPSJwcmVwZW5kQ29sdW1uIiBleHRyYT0idHJ1ZSIgLz4NCgkJCTxpdGVtIHJlZj0iYXBwZW5kQ29sdW1uIiBleHRyYT0idHJ1ZSIgLz4NCgkJCTxpdGVtIHJlZj0icmVtb3ZlUm93IiBleHRyYT0idHJ1ZSIgLz4NCgkJCTxpdGVtIHJlZj0icmVtb3ZlQ29sdW1uIiBleHRyYT0idHJ1ZSIgLz4NCgkJPC9zZWN0aW9uPg0KDQoJCTxzZWN0aW9uPg0KCQkJPGl0ZW0gcmVmPSImIzIxNTsiIC8%DQoJCQk8aXRlbSByZWY9IiYjMTgzOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiMyNDc7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzE3NzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODgwMDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODgwNDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODgwNTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODc0MzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODc0NDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjMTc2OyIgZXh0cmE9InRydWUiLz4NCgkJPC9zZWN0aW9uPg0KDQoJCTwhLS1kaXNhYmxlZD4NCgkJPHNlY3Rpb24%DQoJCQk8aXRlbSByZWY9IiYjODcxMjsiIC8%DQoJCQk8aXRlbSByZWY9IiYjODc0NjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODc0NTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODgwNDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODgwNTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODgwMDsiIGV4dHJhPSJ0cnVlIi8%DQoJCTwvc2VjdGlvbj4NCgkJPC9kaXNhYmxlZC0tPg0KDQoJCTxzZWN0aW9uIGxheW91dD0iaG9yaXpvbnRhbCI%DQoJCQk8aXRlbSByZWY9Im51bWJlclBpIi8%DQoJCQk8aXRlbSByZWY9Im51bWJlckUiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9ImltYWdpbmFyeUkiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9ImltYWdpbmFyeUoiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODczNDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjODcwOTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQkNCgkJCTxpdGVtIHJlZj0ibmF0dXJhbHMiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9ImludGVnZXJzIiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJyYXRpb25hbHMiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9InJlYWxzIiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJjb21wbGV4ZXMiIGV4dHJhPSJ0cnVlIi8%DQoJCTwvc2VjdGlvbj4NCg0KCQk8c2VjdGlvbiBsYXlvdXQ9Imhvcml6b250YWwiPg0KCQkJPGl0ZW0gcmVmPSImIzk0NTsiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NDU7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk0NjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTQ3OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NDg7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk0OTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTUwOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NTE7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk1MjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTUzOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NTQ7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk1NTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTU2OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NTc7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk1ODsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTU5OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NjA7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk2MTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTYyOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NjM7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk2NDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTY1OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NjY7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk2NzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTY4OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5Njk7IiBleHRyYT0idHJ1ZSIvPg0KCQk8L3NlY3Rpb24%DQoNCgkJPHNlY3Rpb24gbGF5b3V0PSJob3Jpem9udGFsIj4NCgkJCTxpdGVtIHJlZj0iJiM5Mzc7Ii8%DQoJCQk8aXRlbSByZWY9IiYjOTEzOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MTQ7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkxNTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTE2OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MTc7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkxODsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTE5OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MjA7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkyMTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTIyOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MjM7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkyNDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTI1OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MjY7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkyNzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTI4OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5Mjk7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkzMTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTMyOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MzM7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkzNDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTM1OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MzY7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkzNzsiIGV4dHJhPSJ0cnVlIi8%DQoJCTwvc2VjdGlvbj4NCg0KCQk8IS0tDQoJCTxzZWN0aW9uIGxheW91dD0iaG9yaXpvbnRhbCI%DQoJCQk8aXRlbSByZWY9InNpbnVzIi8%DQoJCQk8aXRlbSByZWY9ImNvc2ludXMiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9ImNvc2VjYW50IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJzZWNhbnQiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9ImNvdGFuZ2VudCIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0ibG9nIiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJ0YW5nZW50IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJhcmNzaW51cyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iYXJjY29zaW51cyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iYXJjdGFuZ2VudCIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0ibmF0dXJhbExvZyIgZXh0cmE9InRydWUiLz4NCgkJPC9zZWN0aW9uPg0KCQktLT4NCg0KCQk8c2VjdGlvbj4NCgkJCTxpdGVtIHJlZj0iY29weSIgLz4NCgkJCTxpdGVtIHJlZj0icGFzdGUiIC8%DQoJCQk8aXRlbSByZWY9ImN1dCIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0idW5kbyIvPg0KCQkJPGl0ZW0gcmVmPSJyZWRvIi8%DQoJCTwvc2VjdGlvbj4NCgk8L3RhYj4NCjwvdG9vbGJhcj4NCg"
}, {
    name: "toolbar_evaluate",
    vs1: "s5547:PHRvb2xiYXI%DQoJPHRhYiByZWY9ImdlbmVyYWwiIGVtcHR5PSJ0cnVlIiByb3dzPSIxIiBleHRyYVJvd3M9IjIiPg0KCQk8aXRlbSByZWY9ImZyYWN0aW9uIiAvPg0KCQk8aXRlbSByZWY9InNxdWFyZVJvb3QiIC8%DQoJCTxpdGVtIHJlZj0iblJvb3QiIC8%DQoJCTxpdGVtIHJlZj0ic3VwZXJzY3JpcHQiIC8%DQoNCgkJPHNlY3Rpb24%DQoJCQk8aXRlbSByZWY9InBhcmVudGhlc2lzIiAvPg0KCQkJPGl0ZW0gcmVmPSJzcXVhcmVCcmFja2V0IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJjdXJseUJyYWNrZXQiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9InZlcnRpY2FsQmFyIiBleHRyYT0idHJ1ZSIvPg0KCQk8L3NlY3Rpb24%DQoNCgkJPHNlY3Rpb24%DQoJCQk8aXRlbSByZWY9InBhcmVudGhlc2lzVGFibGUiIC8%DQoJCQk8aXRlbSByZWY9InByZXBlbmRSb3ciIGV4dHJhPSJ0cnVlIiAvPg0KCQkJPGl0ZW0gcmVmPSJhcHBlbmRSb3ciIGV4dHJhPSJ0cnVlIiAvPg0KCQkJPGl0ZW0gcmVmPSJwcmVwZW5kQ29sdW1uIiBleHRyYT0idHJ1ZSIgLz4NCgkJCTxpdGVtIHJlZj0iYXBwZW5kQ29sdW1uIiBleHRyYT0idHJ1ZSIgLz4NCgkJCTxpdGVtIHJlZj0icmVtb3ZlUm93IiBleHRyYT0idHJ1ZSIgLz4NCgkJCTxpdGVtIHJlZj0icmVtb3ZlQ29sdW1uIiBleHRyYT0idHJ1ZSIgLz4NCgkJPC9zZWN0aW9uPg0KDQoJCTxzZWN0aW9uPg0KCQkJPGl0ZW0gcmVmPSImIzIxNTsiIC8%DQoJCQk8aXRlbSByZWY9IisiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjMTgzOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iLSIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiMyNDc7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzE3NzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9Ii8iIGV4dHJhPSJ0cnVlIi8%DQoJCTwvc2VjdGlvbj4NCg0KCQk8IS0tZGlzYWJsZWQ%DQoJCTxzZWN0aW9uPg0KCQkJPGl0ZW0gcmVmPSImIzg3MTI7IiAvPg0KCQkJPGl0ZW0gcmVmPSImIzg3NDY7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzg3NDU7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzg4MDQ7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzg4MDU7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzg4MDA7IiBleHRyYT0idHJ1ZSIvPg0KCQk8L3NlY3Rpb24%DQoJCTwvZGlzYWJsZWQtLT4NCg0KCQk8c2VjdGlvbiBsYXlvdXQ9Imhvcml6b250YWwiPg0KCQkJPGl0ZW0gcmVmPSJudW1iZXJQaSIvPg0KCQkJPGl0ZW0gcmVmPSJudW1iZXJFIiBleHRyYT0idHJ1ZSIvPg0KCQk8L3NlY3Rpb24%DQoNCgkJPHNlY3Rpb24gbGF5b3V0PSJob3Jpem9udGFsIj4NCgkJCTxpdGVtIHJlZj0iJiM5NDU7Ii8%DQoJCQk8aXRlbSByZWY9IiYjOTQ1OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NDY7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk0NzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTQ4OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NDk7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk1MDsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTUxOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NTI7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk1MzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTU0OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NTU7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk1NjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTU3OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NTg7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk1OTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTYwOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NjE7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk2MjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTYzOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5NjQ7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk2NTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTY2OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5Njc7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzk2ODsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTY5OyIgZXh0cmE9InRydWUiLz4NCgkJPC9zZWN0aW9uPg0KDQoJCTxzZWN0aW9uIGxheW91dD0iaG9yaXpvbnRhbCI%DQoJCQk8aXRlbSByZWY9IiYjOTM3OyIvPg0KCQkJPGl0ZW0gcmVmPSImIzkxMzsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTE0OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MTU7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkxNjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTE3OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MTg7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkxOTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTIwOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MjE7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkyMjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTIzOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MjQ7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkyNTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTI2OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5Mjc7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkyODsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTI5OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MzE7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkzMjsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTMzOyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5MzQ7IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSImIzkzNTsiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9IiYjOTM2OyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iJiM5Mzc7IiBleHRyYT0idHJ1ZSIvPg0KCQk8L3NlY3Rpb24%DQoNCgkJPHNlY3Rpb24gbGF5b3V0PSJob3Jpem9udGFsIj4NCgkJCTxpdGVtIHJlZj0ic2ludXMiLz4NCgkJCTxpdGVtIHJlZj0iY29zaW51cyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iY29zZWNhbnQiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9InNlY2FudCIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iY290YW5nZW50IiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJsb2ciIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9ImV4cCIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0ibmF0dXJhbExvZyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0idGFuZ2VudCIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iYXNpbiIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iYWNvcyIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0iYXRhbiIgZXh0cmE9InRydWUiLz4NCgkJCTxpdGVtIHJlZj0icm91bmQiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9ImZsb29yIiBleHRyYT0idHJ1ZSIvPg0KCQkJPGl0ZW0gcmVmPSJjZWlsaW5nIiBleHRyYT0idHJ1ZSIvPg0KCQk8L3NlY3Rpb24%DQoNCgkJPHNlY3Rpb24%DQoJCQk8aXRlbSByZWY9ImNvcHkiIC8%DQoJCQk8aXRlbSByZWY9InBhc3RlIiAvPg0KCQkJPGl0ZW0gcmVmPSJjdXQiIGV4dHJhPSJ0cnVlIi8%DQoJCQk8aXRlbSByZWY9InVuZG8iLz4NCgkJCTxpdGVtIHJlZj0icmVkbyIvPg0KCQk8L3NlY3Rpb24%DQoJPC90YWI%DQo8L3Rvb2xiYXI%DQo"
}];
if (typeof document != "undefined") js.Lib.document = document;
if (typeof window != "undefined") {
    js.Lib.window = window;
    js.Lib.window.onerror = function(vfa, url, line) {
        var f = js.Lib.onerror;
        if (f == null) return false;
        return f(vfa, [url + ":" + line]);
    };
};
com.wiris.e1_2.vM2 = 1;
com.wiris.e1_2.vN2 = 2;
com.wiris.e1_2.vO2 = 4;
com.wiris.e1_2.vY2 = 8;
com.wiris.e1_2.vZ2 = 16;
com.wiris.e1_2.vT2 = 32;
com.wiris.e1_2.vAC = 64;
com.wiris.e1_2.vW2 = 128;
com.wiris.e1_2.va2 = 256;
com.wiris.e1_2.vS2 = 512;
com.wiris.e1_2.vP2 = 1024;
com.wiris.e1_2.vQ2 = 2048;
com.wiris.e1_2.vb2 = 4096;
com.wiris.e1_2.vc2 = 8192;
com.wiris.e1_2.vU2 = 16384;
com.wiris.e1_2.vV2 = 32768;
com.wiris.e1_2.vX2 = 65536;
com.wiris.e1_2.vd2 = 131072;
com.wiris.e1_2.v03 = 262144;
com.wiris.e1_2.voa = 524288;
com.wiris.e1_2.vpa = com.wiris.e1_2.vY2 | com.wiris.e1_2.vZ2 | com.wiris.e1_2.vW2;
com.wiris.e1_2.v83 = 20;
com.wiris.e1_2.v93 = 1048576;
com.wiris.e1_2.vsD = 8388608;
com.wiris.e1_2.vqa = 16777216;
com.wiris.e1_2.v3E = 33554432;
com.wiris.e1_2.v2E = 134217728;
com.wiris.e1_2.vra = 268435456;
com.wiris.e1_2.vn2 = 1;
com.wiris.e1_2.vm2 = 2;
com.wiris.e1_2.vo2 = 3;
com.wiris.e1_2.vp2 = 4;
com.wiris.e1_2.vq2 = 5;
com.wiris.e1_2.vB2 = 6;
com.wiris.editor.EditorModel.RTL_LANGUAGES = "@ar@";
com.wiris.editor.EditorModel.LTR_LANGUAGES = "@ar_ma@";
com.wiris.editor.EditorModel.ARABIC_INDIC_LANGUAGES = "@ar_eg@ar_sd@ar_sa@";
com.wiris.editor.EditorModel.EASTERN_ARABIC_INDIC_LANGUAGES = "@fa@ps@ur@";
com.wiris.editor.EditorModel.EUROPEAN_LANGUAGES = "";
com.wiris.editor.EditorModel.ALLOWED_STYLE_PARAMS = "@font-size@font-weight@font-family@font-style@";
com.wiris.editor.ModelFactory.vU5 = "@bold@italic@autoItalic@mtext@rtl@arabicIndicNumbers@easternArabicIndicNumbers@matrixSolidLine@matrixDashLine@equalColWidth@equalRowHeight@alignLeft@alignCenter@alignRight@alignRowsTop@alignRowsBottom@alignRowsCenter@alignRowsBaseline@alignRowsAxis@forceLigature@";
com.wiris.editor.formula.WCharacter.vu9 = 57344;
com.wiris.editor.formula.WCharacter.vc9 = 61696;
com.wiris.editor.formula.WCharacter.vd9 = 61727;
com.wiris.editor.formula.WCharacter.ve9 = 61728;
com.wiris.editor.formula.WCharacter.vf9 = 61759;
com.wiris.editor.formula.WCharacter.vg9 = 61760;
com.wiris.editor.formula.WCharacter.vh9 = 61761;
com.wiris.editor.formula.WCharacter.vsa = 40;
com.wiris.editor.formula.WCharacter.vta = 41;
com.wiris.editor.formula.WCharacter.vua = 91;
com.wiris.editor.formula.WCharacter.vva = 93;
com.wiris.editor.formula.WCharacter.vwa = 94;
com.wiris.editor.formula.WCharacter.vxa = 123;
com.wiris.editor.formula.WCharacter.vya = 124;
com.wiris.editor.formula.WCharacter.vza = 125;
com.wiris.editor.formula.WCharacter.v0b = 126;
com.wiris.editor.formula.WCharacter.v1b = 175;
com.wiris.editor.formula.WCharacter.v2b = 818;
com.wiris.editor.formula.WCharacter.v3b = 711;
com.wiris.editor.formula.WCharacter.v4b = 8192;
com.wiris.editor.formula.WCharacter.v5b = 8193;
com.wiris.editor.formula.WCharacter.v6b = 8194;
com.wiris.editor.formula.WCharacter.v7b = 8195;
com.wiris.editor.formula.WCharacter.v8b = 8196;
com.wiris.editor.formula.WCharacter.v9b = 8197;
com.wiris.editor.formula.WCharacter.vAb = 8198;
com.wiris.editor.formula.WCharacter.vv9 = 8199;
com.wiris.editor.formula.WCharacter.vw9 = 8200;
com.wiris.editor.formula.WCharacter.vBb = 8201;
com.wiris.editor.formula.WCharacter.vCb = 8202;
com.wiris.editor.formula.WCharacter.vDb = 8203;
com.wiris.editor.formula.WCharacter.vEb = 8204;
com.wiris.editor.formula.WCharacter.vFb = 8205;
com.wiris.editor.formula.WCharacter.vGb = 8214;
com.wiris.editor.formula.WCharacter.vHb = 9552;
com.wiris.editor.formula.WCharacter.vIb = 8239;
com.wiris.editor.formula.WCharacter.vJb = 8287;
com.wiris.editor.formula.WCharacter.vKb = 8288;
com.wiris.editor.formula.WCharacter.vLb = 8463;
com.wiris.editor.formula.WCharacter.vMb = 8592;
com.wiris.editor.formula.WCharacter.vNb = 8593;
com.wiris.editor.formula.WCharacter.vOb = 8594;
com.wiris.editor.formula.WCharacter.vPb = 8595;
com.wiris.editor.formula.WCharacter.vQb = 8596;
com.wiris.editor.formula.WCharacter.vRb = 8597;
com.wiris.editor.formula.WCharacter.vSb = 8612;
com.wiris.editor.formula.WCharacter.vTb = 8614;
com.wiris.editor.formula.WCharacter.vUb = 8617;
com.wiris.editor.formula.WCharacter.vVb = 8618;
com.wiris.editor.formula.WCharacter.vWb = 8636;
com.wiris.editor.formula.WCharacter.vXb = 8640;
com.wiris.editor.formula.WCharacter.vYb = 8656;
com.wiris.editor.formula.WCharacter.vZb = 8658;
com.wiris.editor.formula.WCharacter.vab = 8660;
com.wiris.editor.formula.WCharacter.vbb = 8764;
com.wiris.editor.formula.WCharacter.vcb = 8968;
com.wiris.editor.formula.WCharacter.vdb = 8969;
com.wiris.editor.formula.WCharacter.veb = 8970;
com.wiris.editor.formula.WCharacter.vfb = 8971;
com.wiris.editor.formula.WCharacter.vgb = 9180;
com.wiris.editor.formula.WCharacter.vhb = 9181;
com.wiris.editor.formula.WCharacter.vib = 9140;
com.wiris.editor.formula.WCharacter.vjb = 9141;
com.wiris.editor.formula.WCharacter.vkb = 9182;
com.wiris.editor.formula.WCharacter.vlb = 9183;
com.wiris.editor.formula.WCharacter.vi9 = 10216;
com.wiris.editor.formula.WCharacter.vj9 = 10217;
com.wiris.editor.formula.WCharacter.vmb = 8517;
com.wiris.editor.formula.WCharacter.vnb = 8518;
com.wiris.editor.formula.WCharacter.vob = 8519;
com.wiris.editor.formula.WCharacter.vpb = 8520;
com.wiris.editor.formula.WCharacter.vqb = 949;
com.wiris.editor.formula.WCharacter.vrb = 1013;
com.wiris.editor.formula.WCharacter.vn8 = [43, 45, 47, 177, 183, 215, 247, 8226, 8722, 8723, 8724, 8726, 8727, 8728, 8743, 8744, 8745, 8746, 8760, 8768, 8846, 8851, 8852, 8853, 8854, 8855, 8856, 8857, 8858, 8859, 8861, 8862, 8863, 8864, 8865, 8890, 8891, 8900, 8901, 8902, 8903, 8905, 8906, 8907, 8908, 8910, 8911, 8914, 8915, 8966, 9021, 9675, 10678, 10789, 10794, 10797, 10798, 10799, 10804, 10805, 10812, 10815, 10835, 10836, 10837, 10838, 10846, 10847, 10851];
com.wiris.editor.formula.WCharacter.vp8 = [60, 61, 62, 8592, 8593, 8594, 8595, 8596, 8597, 8598, 8599, 8600, 8601, 8602, 8603, 8604, 8605, 8606, 8608, 8610, 8611, 8614, 8617, 8618, 8619, 8620, 8621, 8622, 8624, 8625, 8627, 8630, 8631, 8636, 8637, 8638, 8639, 8640, 8641, 8642, 8643, 8644, 8645, 8646, 8647, 8648, 8649, 8650, 8651, 8652, 8653, 8654, 8655, 8656, 8657, 8658, 8659, 8660, 8661, 8666, 8667, 8669, 8693, 8712, 8713, 8715, 8716, 8733, 8739, 8740, 8741, 8742, 8764, 8765, 8769, 8770, 8771, 8772, 8773, 8774, 8775, 8776, 8777, 8778, 8779, 8781, 8782, 8783, 8784, 8785, 8786, 8787, 8788, 8789, 8790, 8791, 8793, 8794, 8795, 8796, 8799, 8800, 8801, 8802, 8804, 8805, 8806, 8807, 8808, 8809, 8810, 8811, 8812, 8814, 8815, 8816, 8817, 8818, 8819, 8820, 8821, 8822, 8823, 8824, 8825, 8826, 8827, 8828, 8829, 8830, 8831, 8832, 8833, 8834, 8835, 8836, 8837, 8838, 8839, 8840, 8841, 8842, 8843, 8847, 8848, 8849, 8850, 8866, 8867, 8869, 8871, 8872, 8873, 8874, 8875, 8876, 8877, 8878, 8879, 8882, 8883, 8884, 8885, 8886, 8887, 8888, 8904, 8909, 8912, 8913, 8918, 8919, 8920, 8921, 8922, 8923, 8926, 8927, 8930, 8931, 8934, 8935, 8936, 8937, 8938, 8939, 8940, 8941, 8994, 8995, 9123, 10229, 10230, 10231, 10232, 10233, 10234, 10236, 10239, 10501, 10514, 10515, 10531, 10532, 10533, 10534, 10535, 10536, 10537, 10538, 10547, 10550, 10551, 10560, 10561, 10562, 10564, 10567, 10574, 10575, 10576, 10577, 10578, 10579, 10580, 10581, 10582, 10583, 10584, 10585, 10586, 10587, 10588, 10589, 10590, 10591, 10592, 10593, 10606, 10607, 10608, 10620, 10621, 10869, 10877, 10878, 10885, 10886, 10887, 10888, 10889, 10890, 10891, 10892, 10901, 10902, 10909, 10910, 10913, 10914, 10927, 10928, 10933, 10934, 10935, 10936, 10937, 10938, 10949, 10950, 10955, 10956, 10987, 11005];
com.wiris.editor.formula.WCharacter.vj8 = [8719, 8720, 8721, 8896, 8897, 8898, 8899, 10756, 10757, 10758, 10759, 10760];
com.wiris.editor.formula.WCharacter.vl8 = [8747, 8748, 8749, 8750, 8751, 8752, 8753, 8754, 8755, 10763, 10764, 10765, 10766, 10767, 10768, 10774, 10775, 10776, 10777, 10778, 10779, 10780];
com.wiris.editor.formula.WCharacter.vB9 = [98, 100, 102, 104, 105, 106, 107, 108, 116, 946, 948, 950, 952, 955, 958];
com.wiris.editor.formula.WCharacter.vD9 = [103, 106, 112, 113, 121, 946, 947, 950, 951, 956, 958, 961, 962, 966, 967, 968];
com.wiris.editor.formula.WCharacter.vy8 = [61, 8800, 8801, 8802, 8764, 8769, 8712, 8713, 8715, 8716, 8834, 8836, 8835, 8837, 8838, 8840, 8839, 8841, 62, 8815, 60, 8814, 8805, 8817, 8804, 8816, 10878, 8817, 10877, 8816, 8776, 8777, 8771, 8772, 8773, 8775, 8849, 8930, 8850, 8931, 8707, 8708, 8741, 8742];
com.wiris.editor.formula.WCharacter.vu8 = [40, 41, 41, 40, 60, 62, 62, 60, 91, 93, 93, 91, 123, 125, 125, 123, 171, 187, 187, 171, 3898, 3899, 3899, 3898, 3900, 3901, 3901, 3900, 5787, 5788, 5788, 5787, 8249, 8250, 8250, 8249, 8261, 8262, 8262, 8261, 8317, 8318, 8318, 8317, 8333, 8334, 8334, 8333, 8712, 8715, 8713, 8716, 8714, 8717, 8715, 8712, 8716, 8713, 8717, 8714, 8725, 10741, 8764, 8765, 8765, 8764, 8771, 8909, 8786, 8787, 8787, 8786, 8788, 8789, 8789, 8788, 8804, 8805, 8805, 8804, 8806, 8807, 8807, 8806, 8808, 8809, 8809, 8808, 8810, 8811, 8811, 8810, 8814, 8815, 8815, 8814, 8816, 8817, 8817, 8816, 8818, 8819, 8819, 8818, 8820, 8821, 8821, 8820, 8822, 8823, 8823, 8822, 8824, 8825, 8825, 8824, 8826, 8827, 8827, 8826, 8828, 8829, 8829, 8828, 8830, 8831, 8831, 8830, 8832, 8833, 8833, 8832, 8834, 8835, 8835, 8834, 8836, 8837, 8837, 8836, 8838, 8839, 8839, 8838, 8840, 8841, 8841, 8840, 8842, 8843, 8843, 8842, 8847, 8848, 8848, 8847, 8849, 8850, 8850, 8849, 8856, 10680, 8866, 8867, 8867, 8866, 8870, 10974, 8872, 10980, 8873, 10979, 8875, 10981, 8880, 8881, 8881, 8880, 8882, 8883, 8883, 8882, 8884, 8885, 8885, 8884, 8886, 8887, 8887, 8886, 8905, 8906, 8906, 8905, 8907, 8908, 8908, 8907, 8909, 8771, 8912, 8913, 8913, 8912, 8918, 8919, 8919, 8918, 8920, 8921, 8921, 8920, 8922, 8923, 8923, 8922, 8924, 8925, 8925, 8924, 8926, 8927, 8927, 8926, 8928, 8929, 8929, 8928, 8930, 8931, 8931, 8930, 8932, 8933, 8933, 8932, 8934, 8935, 8935, 8934, 8936, 8937, 8937, 8936, 8938, 8939, 8939, 8938, 8940, 8941, 8941, 8940, 8944, 8945, 8945, 8944, 8946, 8954, 8947, 8955, 8948, 8956, 8950, 8957, 8951, 8958, 8954, 8946, 8955, 8947, 8956, 8948, 8957, 8950, 8958, 8951, 8968, 8969, 8969, 8968, 8970, 8971, 8971, 8970, 9001, 9002, 9002, 9001, 10088, 10089, 10089, 10088, 10090, 10091, 10091, 10090, 10092, 10093, 10093, 10092, 10094, 10095, 10095, 10094, 10096, 10097, 10097, 10096, 10098, 10099, 10099, 10098, 10100, 10101, 10101, 10100, 10179, 10180, 10180, 10179, 10181, 10182, 10182, 10181, 10184, 10185, 10185, 10184, 10187, 10189, 10189, 10187, 10197, 10198, 10198, 10197, 10205, 10206, 10206, 10205, 10210, 10211, 10211, 10210, 10212, 10213, 10213, 10212, 10214, 10215, 10215, 10214, 10216, 10217, 10217, 10216, 10218, 10219, 10219, 10218, 10220, 10221, 10221, 10220, 10222, 10223, 10223, 10222, 10627, 10628, 10628, 10627, 10629, 10630, 10630, 10629, 10631, 10632, 10632, 10631, 10633, 10634, 10634, 10633, 10635, 10636, 10636, 10635, 10637, 10640, 10638, 10639, 10639, 10638, 10640, 10637, 10641, 10642, 10642, 10641, 10643, 10644, 10644, 10643, 10645, 10646, 10646, 10645, 10647, 10648, 10648, 10647, 10680, 8856, 10688, 10689, 10689, 10688, 10692, 10693, 10693, 10692, 10703, 10704, 10704, 10703, 10705, 10706, 10706, 10705, 10708, 10709, 10709, 10708, 10712, 10713, 10713, 10712, 10714, 10715, 10715, 10714, 10741, 8725, 10744, 10745, 10745, 10744, 10748, 10749, 10749, 10748, 10795, 10796, 10796, 10795, 10797, 10798, 10798, 10797, 10804, 10805, 10805, 10804, 10812, 10813, 10813, 10812, 10852, 10853, 10853, 10852, 10873, 10874, 10874, 10873, 10877, 10878, 10878, 10877, 10879, 10880, 10880, 10879, 10881, 10882, 10882, 10881, 10883, 10884, 10884, 10883, 10891, 10892, 10892, 10891, 10897, 10898, 10898, 10897, 10899, 10900, 10900, 10899, 10901, 10902, 10902, 10901, 10903, 10904, 10904, 10903, 10905, 10906, 10906, 10905, 10907, 10908, 10908, 10907, 10913, 10914, 10914, 10913, 10918, 10919, 10919, 10918, 10920, 10921, 10921, 10920, 10922, 10923, 10923, 10922, 10924, 10925, 10925, 10924, 10927, 10928, 10928, 10927, 10931, 10932, 10932, 10931, 10939, 10940, 10940, 10939, 10941, 10942, 10942, 10941, 10943, 10944, 10944, 10943, 10945, 10946, 10946, 10945, 10947, 10948, 10948, 10947, 10949, 10950, 10950, 10949, 10957, 10958, 10958, 10957, 10959, 10960, 10960, 10959, 10961, 10962, 10962, 10961, 10963, 10964, 10964, 10963, 10965, 10966, 10966, 10965, 10974, 8870, 10979, 8873, 10980, 8872, 10981, 8875, 10988, 10989, 10989, 10988, 10999, 11000, 11000, 10999, 11001, 11002, 11002, 11001, 11778, 11779, 11779, 11778, 11780, 11781, 11781, 11780, 11785, 11786, 11786, 11785, 11788, 11789, 11789, 11788, 11804, 11805, 11805, 11804, 11808, 11809, 11809, 11808, 11810, 11811, 11811, 11810, 11812, 11813, 11813, 11812, 11814, 11815, 11815, 11814, 11816, 11817, 11817, 11816, 12296, 12297, 12297, 12296, 12298, 12299, 12299, 12298, 12300, 12301, 12301, 12300, 12302, 12303, 12303, 12302, 12304, 12305, 12305, 12304, 12308, 12309, 12309, 12308, 12310, 12311, 12311, 12310, 12312, 12313, 12313, 12312, 12314, 12315, 12315, 12314, 65113, 65114, 65114, 65113, 65115, 65116, 65116, 65115, 65117, 65118, 65118, 65117, 65124, 65125, 65125, 65124, 65288, 65289, 65289, 65288, 65308, 65310, 65310, 65308, 65339, 65341, 65341, 65339, 65371, 65373, 65373, 65371, 65375, 65376, 65376, 65375, 65378, 65379, 65379, 65378, 9115, 9118, 9116, 9119, 9117, 9120, 9118, 9115, 9119, 9116, 9120, 9117, 9121, 9124, 9122, 9125, 9123, 9126, 9124, 9121, 9125, 9122, 9126, 9123, 9127, 9131, 9130, 9134, 9129, 9133, 9131, 9127, 9134, 9130, 9133, 9129, 9128, 9132, 9132, 9128];
com.wiris.editor.formula.WCharacter.vw8 = [com.wiris.editor.formula.WCharacter.vMb, com.wiris.editor.formula.WCharacter.vOb, com.wiris.editor.formula.WCharacter.vQb, com.wiris.editor.formula.WCharacter.vSb, com.wiris.editor.formula.WCharacter.vTb, com.wiris.editor.formula.WCharacter.vUb, com.wiris.editor.formula.WCharacter.vVb, com.wiris.editor.formula.WCharacter.vWb, com.wiris.editor.formula.WCharacter.vXb, com.wiris.editor.formula.WCharacter.vYb, com.wiris.editor.formula.WCharacter.vZb, com.wiris.editor.formula.WCharacter.vkb, com.wiris.editor.formula.WCharacter.vlb, com.wiris.editor.formula.WCharacter.vgb, com.wiris.editor.formula.WCharacter.vhb, com.wiris.editor.formula.WCharacter.vib, com.wiris.editor.formula.WCharacter.vjb];
com.wiris.editor.formula.WCharacter.vF9 = [8289, 8290, 8291];
com.wiris.editor.formula.WCharacter.vH9 = [175, 818, 8592, 8594, 8596, 8612, 8614, 8617, 8618, 8636, 8640, 8656, 8658, 8660, 8764, 9140, 9141, 9180, 9181, 9182, 9183, 9552];
com.wiris.editor.formula.WCharacter.vJ9 = "@0065@0066@0067@0068@0069@0070@0071@0072@0073@0074@0075@0076@0077@0078@0079@0080@0081@0082@0083@0084@0085@0086@0087@0088@0089@0090" + "@0097@0098@0099@0100@0101@0102@0103@0104@0105@0106@0107@0108@0109@0110@0111@0112@0113@0114@0115@0116@0117@0118@0119@0120@0121@0122@";
com.wiris.editor.formula.WCharacter.vK9 = "@0913@0914@0935@0916@0917@0934@0915@0919@0921@0977@0922@0923@0924@0925@0927@0928@0920@0929@0931@0932@0933@0962@0937@0926@0936@0918" + "@0945@0946@0967@0948@0949@0966@0947@0951@0953@0966@0954@0955@0956@0957@0959@0960@0952@0961@0963@0964@0965@0982@0969@0958@0968@0950@";
com.wiris.e1_A.vl9 = [com.wiris.editor.formula.WCharacter.vi9, com.wiris.editor.formula.WCharacter.vj9, com.wiris.editor.formula.WCharacter.vcb, com.wiris.editor.formula.WCharacter.vdb, com.wiris.editor.formula.WCharacter.veb, com.wiris.editor.formula.WCharacter.vfb, com.wiris.editor.formula.WCharacter.vGb, com.wiris.editor.formula.WCharacter.vya];
com.wiris.e1_A.vs9 = [
    [com.wiris.editor.formula.WCharacter.vmb, 68],
    [com.wiris.editor.formula.WCharacter.vnb, 100],
    [com.wiris.editor.formula.WCharacter.vob, 101],
    [com.wiris.editor.formula.WCharacter.vpb, 105],
    [com.wiris.editor.formula.WCharacter.vrb, com.wiris.editor.formula.WCharacter.vqb],
    [com.wiris.editor.formula.WCharacter.vLb, 295]
];
com.wiris.e1_A.vt9 = [
    [com.wiris.editor.formula.WCharacter.v4b, 512],
    [com.wiris.editor.formula.WCharacter.v5b, 1024],
    [com.wiris.editor.formula.WCharacter.v6b, 512],
    [com.wiris.editor.formula.WCharacter.v7b, 1024],
    [com.wiris.editor.formula.WCharacter.v8b, 341],
    [com.wiris.editor.formula.WCharacter.v9b, 256],
    [com.wiris.editor.formula.WCharacter.vAb, 171],
    [com.wiris.editor.formula.WCharacter.vv9, -1],
    [com.wiris.editor.formula.WCharacter.vw9, -1],
    [com.wiris.editor.formula.WCharacter.vBb, 171],
    [com.wiris.editor.formula.WCharacter.vCb, 80],
    [com.wiris.editor.formula.WCharacter.vDb, 0],
    [com.wiris.editor.formula.WCharacter.vEb, 0],
    [com.wiris.editor.formula.WCharacter.vFb, 0],
    [com.wiris.editor.formula.WCharacter.vIb, 171],
    [com.wiris.editor.formula.WCharacter.vJb, 228],
    [com.wiris.editor.formula.WCharacter.vKb, 0],
    [com.wiris.editor.formula.WCharacter.vu9, -1]
];
com.wiris.e1_B.v9A = null;
com.wiris.e1_B.vAA = null;
com.wiris.e1_B.italicExtraSpace = null;
com.wiris.editor.formula.FormulaModel.vKC = 0;
com.wiris.editor.formula.FormulaModel.v8F = 1;
com.wiris.editor.formula.FormulaModel.vvD = 2;
com.wiris.editor.formula.FormulaModel.vbE = 3;
com.wiris.editor.formula.FormulaModel.vMK = 4;
com.wiris.editor.formula.FormulaModel.vy3 = 0;
com.wiris.editor.formula.FormulaModel.vw3 = 1;
com.wiris.editor.formula.FormulaModel.vx3 = 2;
com.wiris.editor.formula.FormulaModel.v04 = 0;
com.wiris.editor.formula.FormulaModel.vz3 = 1;
com.wiris.editor.formula.FormulaModel.vCG = 41704;
com.wiris.editor.formula.FormulaModel.vsb = 0;
com.wiris.editor.formula.FormulaModel.veF = 1;
com.wiris.editor.formula.FormulaModel.v4G = 2;
com.wiris.editor.formula.FormulaModel.vdF = com.wiris.editor.formula.FormulaModel.v4G;
com.wiris.editor.formula.FormulaModel.v0C = 6988906;
com.wiris.editor.formula.FormulaModel.vzB = 25600;
com.wiris.editor.formula.FormulaModel.v3C = 1805709;
com.wiris.editor.formula.FormulaModel.vC4 = 0;
com.wiris.editor.formula.FormulaModel.vA4 = 2;
com.wiris.editor.formula.FormulaModel.vB4 = 3;
com.wiris.e1_F.vUG = "nodenumber";
com.wiris.e1_G.vHQ = 0;
com.wiris.e1_G.vJQ = 1;
com.wiris.e1_G.vIQ = 2;
com.wiris.e1_G.vNH = 0;
com.wiris.e1_G.vMH = 1;
com.wiris.e1_G.vtb = 2;
com.wiris.e1_G.vub = 0;
com.wiris.e1_G.vxG = 1;
com.wiris.e1_G.vzG = 2;
com.wiris.e1_G.v1H = 3;
com.wiris.e1_G.v3H = 4;
com.wiris.e1_G.vpG = 5;
com.wiris.e1_G.v6H = 6;
com.wiris.e1_G.v8H = 7;
com.wiris.e1_G.vwG = "veryverythinmathspace";
com.wiris.e1_G.vyG = "verythinmathspace";
com.wiris.e1_G.v0H = "thinmathspace";
com.wiris.e1_G.v2H = "mediummathspace";
com.wiris.e1_G.v4H = "thickmathspace";
com.wiris.e1_G.v5H = "verythickmathspace";
com.wiris.e1_G.v7H = "veryverythickmathspace";
com.wiris.e1_H.vDH = "&#8216;@00002@&#8217;@20002@&#8220;@00002@&#8221;@20002@(@000c2@)@200c2@[@000c2@]@200c2@{@000c2@|@000c2@|@200c2@||@000c2@||@200c2@|||@000c2@|||@200c2@}@200c2@&#8214;@00042@&#8214;@20042@&#8968;@000c2@&#8969;@200c2@&#8970;@000c2@&#8971;@200c2@&#10098;@000c2@&#10099;@200c2@&#10214;@000c2@&#10215;@200c2@&#10216;@000c2@&#10217;@200c2@&#10218;@000c2@&#10219;@200c2@&#10220;@000c2@&#10221;@200c2@&#10222;@000c2@&#10223;@200c2@&#10624;@00042@&#10624;@20042@&#10627;@000c2@&#10628;@200c2@&#10629;@000c2@&#10630;@200c2@&#10631;@000c2@&#10632;@200c2@&#10633;@000c2@&#10634;@200c2@&#10635;@000c2@&#10636;@200c2@&#10637;@000c2@&#10638;@200c2@&#10639;@000c2@&#10640;@200c2@&#10641;@000c2@&#10642;@200c2@&#10643;@000c2@&#10644;@200c2@&#10645;@000c2@&#10646;@200c2@&#10647;@000c2@&#10648;@200c2@&#10748;@000c2@&#10749;@200c2@;@10328@,@10328@&#8291;@10028@&#8756;@15500@&#8757;@15500@->@15500@..@20000@...@20000@:@11200@&#1014;@15500@&#8230;@10000@&#8942;@15500@&#8943;@10000@&#8945;@15500@&#8715;@15500@&#8866;@15500@&#8867;@15500@&#8868;@15500@&#8872;@15500@&#8873;@15500@&#8876;@15500@&#8877;@15500@&#8878;@15500@&#8879;@15500@&#8744;@14400@&amp;&amp;@14400@&#8743;@14400@&#8704;@02100@&#8707;@02100@&#8708;@02100@&#8705;@11200@&#8712;@15500@&#8713;@15500@&#8716;@15500@&#8834;@15500@&#8834;&#8402;@15500@&#8835;@15500@&#8835;&#8402;@15500@&#8836;@15500@&#8837;@15500@&#8838;@15500@&#8839;@15500@&#8840;@15500@&#8841;@15500@&#8842;@15500@&#8843;@15500@&lt;=@15500@&#8804;@15500@&#8805;@15500@>@15500@>=@15500@&#8815;@15500@&lt;@15500@&#8814;@15500@&#8776;@15500@&#8764;@15500@&#8777;@15500@&#8802;@15500@&#8800;@15500@!=@14400@*=@14400@+=@14400@-=@14400@/=@14400@:=@14400@=@15500@==@14400@&#8733;@15500@&#8740;@15500@&#8741;@15500@&#8742;@15500@&#8769;@15500@&#8771;@15500@&#8772;@15500@&#8773;@15500@&#8774;@15500@&#8775;@15500@&#8781;@15500@&#8788;@15500@&#8791;@15500@&#8793;@15500@&#8794;@15500@&#8796;@15500@&#8799;@15500@&#8801;@15500@&#8808;@15500@&#8809;@15500@&#8810;@15500@&#8810;&#824;@15500@&#8811;@15500@&#8811;&#824;@15500@&#8813;@15500@&#8816;@15500@&#8817;@15500@&#8826;@15500@&#8827;@15500@&#8828;@15500@&#8829;@15500@&#8832;@15500@&#8833;@15500@&#8869;@15500@&#8884;@15500@&#8885;@15500@&#8905;@14400@&#8906;@14400@&#8907;@14400@&#8908;@14400@&#8916;@15500@&#8918;@15500@&#8919;@15500@&#8920;@15500@&#8921;@15500@&#8938;@15500@&#8939;@15500@&#8940;@15500@&#8941;@15500@&#9632;@13300@&#9633;@13300@&#9642;@13300@&#9643;@13300@&#9645;@13300@&#9646;@13300@&#9647;@13300@&#9648;@13300@&#9649;@13300@&#9651;@14400@&#9652;@14400@&#9653;@14400@&#9654;@14400@&#9655;@14400@&#9656;@14400@&#9657;@14400@&#9660;@14400@&#9661;@14400@&#9662;@14400@&#9663;@14400@&#9664;@14400@&#9665;@14400@&#9666;@14400@&#9667;@14400@&#9668;@14400@&#9669;@14400@&#9670;@14400@&#9671;@14400@&#9672;@14400@&#9673;@14400@&#9676;@14400@&#9677;@14400@&#9678;@14400@&#9679;@14400@&#9686;@14400@&#9687;@14400@&#9702;@14400@&#10688;@15500@&#10689;@15500@&#10723;@15500@&#10724;@15500@&#10725;@15500@&#10726;@15500@&#10739;@13300@&#10887;@15500@&#10888;@15500@&#10927;@15500@&#10927;&#824;@15500@&#10928;@15500@&#10928;&#824;@15500@&#8260;@14440@&#8710;@13300@&#8714;@15500@&#8717;@15500@&#8718;@13300@&#8725;@14440@&#8727;@14400@&#8728;@14400@&#8729;@14400@&#8735;@15500@&#8739;@15500@&#8758;@15500@&#8759;@15500@&#8760;@14400@&#8761;@15500@&#8762;@14400@&#8763;@15500@&#8765;@15500@&#8765;&#817;@13300@&#8766;@15500@&#8767;@13300@&#8770;@15500@&#8770;&#824;@15500@&#8778;@15500@&#8779;@15500@&#8780;@15500@&#8782;@15500@&#8782;&#824;@15500@&#8783;@15500@&#8783;&#824;@15500@&#8784;@15500@&#8785;@15500@&#8786;@15500@&#8787;@15500@&#8789;@15500@&#8790;@15500@&#8792;@15500@&#8797;@15500@&#8798;@15500@&#8803;@15500@&#8806;@15500@&#8806;&#824;@15500@&#8807;@15500@&#8812;@15500@&#8818;@15500@&#8819;@15500@&#8820;@15500@&#8821;@15500@&#8822;@15500@&#8823;@15500@&#8824;@15500@&#8825;@15500@&#8830;@15500@&#8831;@15500@&#8831;&#824;@15500@&#8844;@14400@&#8845;@14400@&#8846;@14400@&#8847;@15500@&#8847;&#824;@15500@&#8848;@15500@&#8848;&#824;@15500@&#8849;@15500@&#8850;@15500@&#8851;@14400@&#8852;@14400@&#8858;@14400@&#8859;@14400@&#8860;@14400@&#8861;@14400@&#8870;@15500@&#8871;@15500@&#8874;@15500@&#8875;@15500@&#8880;@15500@&#8881;@15500@&#8882;@15500@&#8883;@15500@&#8886;@15500@&#8887;@15500@&#8889;@15500@&#8890;@14400@&#8891;@14400@&#8892;@14400@&#8893;@14400@&#8894;@13300@&#8895;@13300@&#8900;@14400@&#8902;@14400@&#8903;@14400@&#8904;@15500@&#8909;@15500@&#8910;@14400@&#8911;@14400@&#8912;@15500@&#8913;@15500@&#8914;@14400@&#8915;@14400@&#8917;@15500@&#8922;@15500@&#8923;@15500@&#8924;@15500@&#8925;@15500@&#8926;@15500@&#8927;@15500@&#8928;@15500@&#8929;@15500@&#8930;@15500@&#8931;@15500@&#8932;@15500@&#8933;@15500@&#8934;@15500@&#8935;@15500@&#8936;@15500@&#8937;@15500@&#8944;@15500@&#8946;@15500@&#8947;@15500@&#8948;@15500@&#8949;@15500@&#8950;@15500@&#8951;@15500@&#8952;@15500@&#8953;@15500@&#8954;@15500@&#8955;@15500@&#8956;@15500@&#8957;@15500@&#8958;@15500@&#8959;@15500@&#9650;@14400@&#10072;@15500@&#10625;@13300@&#10626;@13300@&#10656;@13300@&#10657;@13300@&#10658;@13300@&#10659;@13300@&#10660;@13300@&#10661;@13300@&#10662;@13300@&#10663;@13300@&#10664;@13300@&#10665;@13300@&#10666;@13300@&#10667;@13300@&#10668;@13300@&#10669;@13300@&#10670;@13300@&#10671;@13300@&#10672;@13300@&#10673;@13300@&#10674;@13300@&#10675;@13300@&#10676;@13300@&#10677;@13300@&#10678;@14400@&#10679;@14400@&#10680;@14400@&#10681;@14400@&#10682;@14400@&#10683;@14400@&#10684;@14400@&#10685;@14400@&#10686;@14400@&#10687;@14400@&#10690;@13300@&#10691;@13300@&#10692;@14400@&#10693;@14400@&#10694;@14400@&#10695;@14400@&#10696;@14400@&#10697;@13300@&#10698;@13300@&#10699;@13300@&#10700;@13300@&#10701;@13300@&#10702;@15500@&#10703;@15500@&#10703;&#824;@15500@&#10704;@15500@&#10704;&#824;@15500@&#10705;@15500@&#10706;@15500@&#10707;@15500@&#10708;@15500@&#10709;@15500@&#10710;@14400@&#10711;@14400@&#10712;@13300@&#10713;@13300@&#10715;@13300@&#10716;@13300@&#10717;@13300@&#10718;@15500@&#10720;@13300@&#10721;@15500@&#10722;@14400@&#10727;@13300@&#10728;@13300@&#10729;@13300@&#10730;@13300@&#10731;@13300@&#10732;@13300@&#10733;@13300@&#10734;@13300@&#10736;@13300@&#10737;@13300@&#10738;@13300@&#10741;@14400@&#10742;@14400@&#10743;@14400@&#10744;@13300@&#10745;@13300@&#10746;@13300@&#10747;@13300@&#10750;@14400@&#10751;@14400@&#10781;@13300@&#10782;@13300@&#10783;@13300@&#10784;@13300@&#10785;@13300@&#10786;@14400@&#10787;@14400@&#10788;@14400@&#10789;@14400@&#10790;@14400@&#10791;@14400@&#10792;@14400@&#10793;@14400@&#10794;@14400@&#10795;@14400@&#10796;@14400@&#10797;@14400@&#10798;@14400@&#10800;@14400@&#10801;@14400@&#10802;@14400@&#10803;@14400@&#10804;@14400@&#10805;@14400@&#10806;@14400@&#10807;@14400@&#10808;@14400@&#10809;@14400@&#10810;@14400@&#10811;@14400@&#10812;@14400@&#10813;@14400@&#10814;@14400@&#10816;@14400@&#10817;@14400@&#10818;@14400@&#10819;@14400@&#10820;@14400@&#10821;@14400@&#10822;@14400@&#10823;@14400@&#10824;@14400@&#10825;@14400@&#10826;@14400@&#10827;@14400@&#10828;@14400@&#10829;@14400@&#10830;@14400@&#10831;@14400@&#10832;@14400@&#10833;@14400@&#10834;@14400@&#10835;@14400@&#10836;@14400@&#10837;@14400@&#10838;@14400@&#10839;@14400@&#10840;@14400@&#10841;@15500@&#10842;@14400@&#10843;@14400@&#10844;@14400@&#10845;@14400@&#10846;@14400@&#10847;@14400@&#10848;@14400@&#10849;@14400@&#10850;@14400@&#10851;@14400@&#10852;@14400@&#10853;@14400@&#10854;@15500@&#10855;@15500@&#10856;@15500@&#10857;@15500@&#10858;@15500@&#10859;@15500@&#10860;@15500@&#10861;@15500@&#10862;@15500@&#10863;@15500@&#10864;@15500@&#10865;@14400@&#10866;@14400@&#10867;@15500@&#10868;@15500@&#10869;@15500@&#10870;@15500@&#10871;@15500@&#10872;@15500@&#10873;@15500@&#10874;@15500@&#10875;@15500@&#10876;@15500@&#10877;@15500@&#10877;&#824;@15500@&#10878;@15500@&#10878;&#824;@15500@&#10879;@15500@&#10880;@15500@&#10881;@15500@&#10882;@15500@&#10883;@15500@&#10884;@15500@&#10885;@15500@&#10886;@15500@&#10889;@15500@&#10890;@15500@&#10891;@15500@&#10892;@15500@&#10893;@15500@&#10894;@15500@&#10895;@15500@&#10896;@15500@&#10897;@15500@&#10898;@15500@&#10899;@15500@&#10900;@15500@&#10901;@15500@&#10902;@15500@&#10903;@15500@&#10904;@15500@&#10905;@15500@&#10906;@15500@&#10907;@15500@&#10908;@15500@&#10909;@15500@&#10910;@15500@&#10911;@15500@&#10912;@15500@&#10913;@15500@&#10913;&#824;@15500@&#10914;@15500@&#10914;&#824;@15500@&#10915;@15500@&#10916;@15500@&#10917;@15500@&#10918;@15500@&#10919;@15500@&#10920;@15500@&#10921;@15500@&#10922;@15500@&#10923;@15500@&#10924;@15500@&#10925;@15500@&#10926;@15500@&#10929;@15500@&#10930;@15500@&#10931;@15500@&#10932;@15500@&#10933;@15500@&#10934;@15500@&#10935;@15500@&#10936;@15500@&#10937;@15500@&#10938;@15500@&#10939;@15500@&#10940;@15500@&#10941;@15500@&#10942;@15500@&#10943;@15500@&#10944;@15500@&#10945;@15500@&#10946;@15500@&#10947;@15500@&#10948;@15500@&#10949;@15500@&#10950;@15500@&#10951;@15500@&#10952;@15500@&#10953;@15500@&#10954;@15500@&#10955;@15500@&#10956;@15500@&#10957;@15500@&#10958;@15500@&#10959;@15500@&#10960;@15500@&#10961;@15500@&#10962;@15500@&#10963;@15500@&#10964;@15500@&#10965;@15500@&#10966;@15500@&#10967;@15500@&#10968;@15500@&#10969;@15500@&#10970;@15500@&#10971;@15500@&#10972;@15500@&#10973;@15500@&#10974;@15500@&#10975;@15500@&#10976;@15500@&#10977;@15500@&#10978;@15500@&#10979;@15500@&#10980;@15500@&#10981;@15500@&#10982;@15500@&#10983;@15500@&#10984;@15500@&#10985;@15500@&#10986;@15500@&#10987;@15500@&#10988;@15500@&#10989;@15500@&#10990;@15500@&#10991;@15500@&#10992;@15500@&#10993;@15500@&#10994;@15500@&#10995;@15500@&#10996;@14400@&#10997;@14400@&#10998;@14400@&#10999;@15500@&#11000;@15500@&#11001;@15500@&#11002;@15500@&#11003;@14400@&#11005;@14400@&#11006;@13300@|@122c2@||@122c2@|||@122c2@&#8592;@15541@&#8593;@15540@→@15541@&#8595;@15540@&#8596;@15541@&#8597;@15540@&#8598;@15540@&#8599;@15540@&#8600;@15540@&#8601;@15540@&#8602;@15501@&#8603;@15501@&#8604;@15541@&#8605;@15541@&#8606;@15541@&#8607;@15541@&#8608;@15541@&#8609;@15540@&#8610;@15541@&#8611;@15541@&#8612;@15541@&#8613;@15540@&#8614;@15541@&#8615;@15540@&#8616;@15540@&#8617;@15541@&#8618;@15541@&#8619;@15541@&#8620;@15541@&#8621;@15541@&#8622;@15501@&#8623;@15540@&#8624;@15540@&#8625;@15540@&#8626;@15540@&#8627;@15540@&#8628;@15540@&#8629;@15540@&#8630;@15501@&#8631;@15501@&#8632;@15500@&#8633;@15541@&#8634;@15500@&#8635;@15500@&#8636;@15541@&#8637;@15541@&#8638;@15540@&#8639;@15540@&#8640;@15541@&#8641;@15541@&#8642;@15540@&#8643;@15540@&#8644;@15541@&#8645;@15540@&#8646;@15541@&#8647;@15541@&#8648;@15540@&#8649;@15541@&#8650;@15540@&#8651;@15541@&#8652;@15541@&#8653;@15501@&#8654;@15501@&#8655;@15501@&#8656;@15541@&#8657;@15540@&#8658;@15541@&#8659;@15540@&#8660;@15541@&#8661;@15540@&#8662;@15540@&#8663;@15540@&#8664;@15540@&#8665;@15540@&#8666;@15541@&#8667;@15541@&#8668;@15541@&#8669;@15541@&#8670;@15500@&#8671;@15500@&#8672;@15541@&#8673;@15540@&#8674;@15541@&#8675;@15540@&#8676;@15541@&#8677;@15541@&#8678;@15541@&#8679;@15540@&#8680;@15541@&#8681;@15540@&#8682;@15540@&#8683;@15540@&#8684;@15540@&#8685;@15540@&#8686;@15540@&#8687;@15540@&#8688;@15541@&#8689;@15500@&#8690;@15500@&#8691;@15540@&#8692;@15501@&#8693;@15540@&#8694;@15541@&#8695;@15501@&#8696;@15501@&#8697;@15501@&#8698;@15501@&#8699;@15501@&#8700;@15501@&#8701;@15541@&#8702;@15541@&#8703;@15541@&#8888;@15500@&#10224;@15540@&#10225;@15540@&#10229;@15541@&#10230;@15541@&#10231;@15541@&#10232;@15541@&#10233;@15541@&#10234;@15541@&#10235;@15541@&#10236;@15541@&#10237;@15541@&#10238;@15541@&#10239;@15541@&#10496;@15501@&#10497;@15501@&#10498;@15501@&#10499;@15501@&#10500;@15501@&#10501;@15501@&#10502;@15501@&#10503;@15501@&#10504;@15500@&#10505;@15500@&#10506;@15540@&#10507;@15540@&#10508;@15541@&#10509;@15541@&#10510;@15541@&#10511;@15541@&#10512;@15541@&#10513;@15501@&#10514;@15540@&#10515;@15540@&#10516;@15501@&#10517;@15501@&#10518;@15501@&#10519;@15501@&#10520;@15501@&#10521;@15501@&#10522;@15501@&#10523;@15501@&#10524;@15501@&#10525;@15501@&#10526;@15501@&#10527;@15501@&#10528;@15501@&#10529;@15540@&#10530;@15540@&#10531;@15500@&#10532;@15500@&#10533;@15500@&#10534;@15500@&#10535;@15500@&#10536;@15500@&#10537;@15500@&#10538;@15500@&#10539;@15500@&#10540;@15500@&#10541;@15500@&#10542;@15500@&#10543;@15500@&#10544;@15500@&#10545;@15500@&#10546;@15500@&#10547;@15501@&#10548;@15500@&#10549;@15500@&#10550;@15500@&#10551;@15500@&#10552;@15500@&#10553;@15500@&#10554;@15501@&#10555;@15501@&#10556;@15501@&#10557;@15501@&#10558;@15500@&#10559;@15500@&#10560;@15500@&#10561;@15500@&#10562;@15501@&#10563;@15501@&#10564;@15501@&#10565;@15501@&#10566;@15501@&#10567;@15501@&#10568;@15501@&#10569;@15500@&#10570;@15501@&#10571;@15501@&#10572;@15500@&#10573;@15500@&#10574;@15541@&#10575;@15540@&#10576;@15541@&#10577;@15540@&#10578;@15541@&#10579;@15541@&#10580;@15540@&#10581;@15540@&#10582;@15540@&#10583;@15540@&#10584;@15540@&#10585;@15540@&#10586;@15541@&#10587;@15541@&#10588;@15540@&#10589;@15540@&#10590;@15541@&#10591;@15541@&#10592;@15540@&#10593;@15540@&#10594;@15501@&#10595;@15500@&#10596;@15501@&#10597;@15500@&#10598;@15501@&#10599;@15501@&#10600;@15501@&#10601;@15501@&#10602;@15501@&#10603;@15501@&#10604;@15501@&#10605;@15501@&#10606;@15540@&#10607;@15540@&#10608;@15501@&#10609;@15501@&#10610;@15501@&#10611;@15501@&#10612;@15501@&#10613;@15501@&#10614;@15501@&#10615;@15501@&#10616;@15501@&#10617;@15501@&#10618;@15501@&#10619;@15501@&#10620;@15501@&#10621;@15501@&#10622;@15500@&#10623;@15500@&#10649;@13300@&#10650;@13300@&#10651;@13300@&#10652;@13300@&#10653;@13300@&#10654;@13300@&#10655;@13300@&#10719;@13300@&#10735;@13300@&#10740;@15500@&#11077;@15540@&#11078;@15540@+@14400@+@00100@-@14400@-@00100@&#177;@14400@&#177;@00100@&#8722;@14400@&#8722;@00100@&#8723;@14400@&#8723;@00100@&#8724;@14400@&#8862;@14400@&#8863;@14400@&#8721;@01294@&#10762;@01294@&#10763;@01284@&#8748;@00184@&#8749;@00184@&#8853;@14400@&#8854;@14400@&#8856;@14400@&#10753;@01294@&#8747;@00184@&#8750;@00184@&#8751;@00184@&#8752;@00184@&#8753;@00184@&#8754;@00184@&#8755;@00184@&#10764;@00184@&#10765;@01284@&#10766;@01284@&#10767;@01284@&#10768;@01294@&#10769;@01294@&#10770;@01294@&#10771;@01294@&#10772;@01294@&#10773;@01284@&#10774;@01284@&#10775;@01284@&#10776;@01284@&#10777;@01284@&#10778;@01284@&#10779;@01284@&#10780;@01284@&#8899;@01294@&#10755;@01294@&#10756;@01294@&#8896;@01294@&#8897;@01294@&#8898;@01294@&#10752;@01294@&#10754;@01294@&#10757;@01294@&#10758;@01294@&#10759;@01294@&#10760;@01294@&#10761;@01294@&#11004;@01294@&#11007;@01294@&#8768;@14400@&#8719;@01294@&#8720;@01294@&#8745;@14400@&#8746;@14400@*@13300@.@13300@&#215;@14400@&#8226;@14400@&#8290;@10000@&#8864;@14400@&#8865;@14400@&#8901;@14400@&#10799;@14400@&#10815;@14400@&#183;@14400@&#8855;@14400@%@13300@\\@10000@&#8726;@14400@/@11100@&#247;@14400@&#8736;@00000@&#8737;@00000@&#8738;@00000@&#172;@02100@&#8857;@14400@&#8706;@02100@&#8711;@02100@**@11100@&lt;>@11100@^@11100@&#8242;@20200@&#9837;@20200@&#9838;@20200@&#9839;@20200@!@21000@!!@21000@//@11100@&#64;@11100@?@11100@&#8517;@02100@&#8518;@02000@&#8730;@01140@&#8731;@01100@&#8732;@01100@&#8289;@10000@&amp;@20000@'@20001@++@20000@--@20000@^@20041@_@20041@`@20001@~@20041@&#168;@20001@&#175;@20041@&#176;@20000@&#180;@20001@&#184;@20001@&#710;@20041@&#711;@20041@&#713;@20041@&#714;@20001@&#715;@20001@&#717;@20041@&#728;@20001@&#729;@20001@&#730;@20001@&#732;@20041@&#733;@20001@&#759;@20041@&#770;@20041@&#785;@20001@&#8254;@20041@&#8292;@10000@&#8411;@20001@&#8412;@20001@&#9140;@20041@&#9141;@20041@&#9180;@20041@&#9181;@20041@&#9182;@20041@&#9183;@20041@&#9184;@20041@&#9185;@20041@_@11100@";
com.wiris.e1_H.vEH = "d@02100@(@00082@)@20082@[@00082@]@20082@{@00082@|@00082@|@20082@||@00082@||@20082@|||@00082@|||@20082@}@20082@|@12282@||@12282@|||@12282@&#160;@100c0@&#8194;@10080@&#8195;@10080@&#8196;@10080@&#8197;@10080@&#8199;@10080@&#8200;@10080@&#8201;@10080@&#8202;@10080@&#8203;@10080@&#57344;@10080@,@10028@&#8229;@20001@&#8764;@15501@&#818;@20041@&#9552;@20041@";
com.wiris.e1_H.vIH = 1;
com.wiris.e1_H.vJH = 2;
com.wiris.e1_H.vKH = 4;
com.wiris.e1_H.vLH = 8;
com.wiris.e1_H.vOH = 16;
com.wiris.e1_H.vPH = 32;
com.wiris.e1_H.vQH = 64;
com.wiris.e1_H.vRH = 128;
com.wiris.e1_I.vvB = 0;
com.wiris.e1_I.vkE = 1;
com.wiris.e1_I.viE = 2;
com.wiris.e1_I.vNI = 3;
com.wiris.e1_I.vGI = 4;
com.wiris.e1_I.vII = 5;
com.wiris.e1_I.v8I = 6;
com.wiris.e1_I.vwH = 7;
com.wiris.e1_I.vfG = 8;
com.wiris.e1_I.vUC = 9;
com.wiris.e1_I.vxH = new HaxeHash();
com.wiris.e1_J.vXI = "@mrow@1@math@1@mfrac@2@msqrt@1@mroot@2@mstyle@1@merror@1@mpadded@1@mphantom@1@msub@2@msup@2@msubsup@3@munder@2@mover@2@munderover@3@mtd@1@menclose@1@";
com.wiris.e1_J.v6J = "@msub@msup@msubsup@";
com.wiris.e1_J.subs = "@sub@sup@subsup@";
com.wiris.e1_J.veI = "@presub@presup@presubsup@";
com.wiris.e1_J.vaI = "@mi@mn@mo@mtext@ms@mspace@mphantom@";
com.wiris.e1_J.vVI = "displaystyle";
com.wiris.e1_J.vhI = "indentalign";
com.wiris.e1_J.vgI = "class";
com.wiris.e1_J.viI = "mathsize";
com.wiris.e1_J.vkI = "@60$10216" + "@62$10217" + "@124-124$8214" + "@9001$10216" + "@9002$10217" + "@";
com.wiris.e1_J.vnI = "@126$8764" + "@168$8229" + "@";
com.wiris.e1_J.vBJ = "@65079$9182" + "@65080$9183" + "@65077$9180" + "@65078$9181" + "@9001$10216" + "@9002$10217" + "@770$94" + "@771$8764" + "@772$175" + "@773$175" + "@776$8229" + "@775$729" + "@780$711" + "@732$8764" + "@8242$39" + "@8243$39-39" + "@8244$39-39-39" + "@8232$10" + "@";
com.wiris.e1_J.vDJ = "@8898$8745" + "@8899$8746" + "@";
com.wiris.e1_J.vHJ = "http://www.wiris.com/xml/mathml-extension";
com.wiris.e1_K.v4K = 1;
com.wiris.e1_K.vsJ = 0;
com.wiris.e1_K.vp9 = 0;
com.wiris.e1_K.vkJ = 1;
com.wiris.e1_K.vlJ = 2;
com.wiris.e1_K.vMJ = 0;
com.wiris.e1_K.vdQ = 1;
com.wiris.e1_K.vQJ = 2;
com.wiris.e1_K.vOJ = [
    [com.wiris.editor.formula.WCharacter.vsa, 9115, 9116, 9117, 0, 1],
    [com.wiris.editor.formula.WCharacter.vta, 9118, 9119, 9120, 0, 1],
    [com.wiris.editor.formula.WCharacter.vua, 9121, 9122, 9123, 0, 1],
    [com.wiris.editor.formula.WCharacter.vva, 9124, 9125, 9126, 0, 1],
    [com.wiris.editor.formula.WCharacter.vxa, 9127, 9130, 9129, 9128, 1],
    [com.wiris.editor.formula.WCharacter.vza, 9131, 9134, 9133, 9132, 1],
    [com.wiris.editor.formula.WCharacter.vya, 0, 62466, 0, 0, 1],
    [com.wiris.editor.formula.WCharacter.vGb, 0, 62467, 0, 0, 1],
    [com.wiris.editor.formula.WCharacter.vNb, 62464, 9168, 0, 0, 1],
    [com.wiris.editor.formula.WCharacter.vPb, 0, 9168, 62465, 0, 1],
    [com.wiris.editor.formula.WCharacter.vRb, 62464, 9168, 62465, 0, 1],
    [com.wiris.editor.formula.WCharacter.vcb, 9121, 9122, 0, 0, 0],
    [com.wiris.editor.formula.WCharacter.vdb, 9124, 9125, 0, 0, 0],
    [com.wiris.editor.formula.WCharacter.veb, 0, 9122, 9123, 0, 0],
    [com.wiris.editor.formula.WCharacter.vfb, 0, 9125, 9126, 0, 0]
];
com.wiris.e1_K.vNJ = [
    [com.wiris.editor.formula.WCharacter.vkb, 62210, 9135, 62211, 62213, 0],
    [com.wiris.editor.formula.WCharacter.vlb, 62208, 9135, 62209, 62212, 0],
    [com.wiris.editor.formula.WCharacter.vMb, 61953, 9135, 61964, 0, 1],
    [com.wiris.editor.formula.WCharacter.vOb, 61963, 9135, 61952, 0, 1],
    [com.wiris.editor.formula.WCharacter.vQb, 61953, 9135, 61952, 0, 1],
    [com.wiris.editor.formula.WCharacter.vSb, 61953, 9135, 61956, 0, 1],
    [com.wiris.editor.formula.WCharacter.vTb, 61957, 9135, 61952, 0, 1],
    [com.wiris.editor.formula.WCharacter.vUb, 61953, 9135, 61958, 0, 1],
    [com.wiris.editor.formula.WCharacter.vVb, 61959, 9135, 61952, 0, 1],
    [com.wiris.editor.formula.WCharacter.vWb, 61954, 9135, 61964, 0, 1],
    [com.wiris.editor.formula.WCharacter.vXb, 61963, 9135, 61955, 0, 1],
    [com.wiris.editor.formula.WCharacter.vYb, 61960, 61962, 61966, 0, 1],
    [com.wiris.editor.formula.WCharacter.vZb, 61965, 61962, 61961, 0, 1],
    [com.wiris.editor.formula.WCharacter.vab, 61960, 61962, 61961, 0, 1],
    [com.wiris.editor.formula.WCharacter.v1b, 0, 9135, 0, 0, 0],
    [com.wiris.editor.formula.WCharacter.v2b, 0, 9135, 0, 0, 0],
    [com.wiris.editor.formula.WCharacter.vgb, 62214, 9135, 62215, 0, 0],
    [com.wiris.editor.formula.WCharacter.vhb, 62216, 9135, 62217, 0, 0],
    [com.wiris.editor.formula.WCharacter.vib, 62218, 9135, 62219, 0, 0],
    [com.wiris.editor.formula.WCharacter.vjb, 62220, 9135, 62221, 0, 0],
    [com.wiris.editor.formula.WCharacter.vHb, 61965, 61962, 61966, 0, 0]
];
com.wiris.e1_K.vPJ = [
    [com.wiris.editor.formula.WCharacter.vi9, com.wiris.e1_K.vdQ, 800, 899, 201, 500, 800, 101],
    [com.wiris.editor.formula.WCharacter.vj9, com.wiris.e1_K.vdQ, 201, 899, 800, 500, 201, 101],
    [com.wiris.editor.formula.WCharacter.vwa, com.wiris.e1_K.vMJ, 51, 700, 500, 101, 949, 700],
    [com.wiris.editor.formula.WCharacter.v3b, com.wiris.e1_K.vMJ, 51, 101, 500, 700, 949, 101]
];
com.wiris.editor.formula.Styles.vvb = -1;
com.wiris.editor.formula.Styles.v55 = "axis";
com.wiris.editor.formula.Styles.v65 = "baseline";
com.wiris.editor.formula.Styles.v25 = "top";
com.wiris.editor.formula.Styles.v35 = "bottom";
com.wiris.editor.formula.Styles.v45 = "center";
com.wiris.editor.formula.Styles.vy7 = "left";
com.wiris.editor.formula.Styles.vz7 = "right";
com.wiris.editor.formula.Styles.vbD = "decimal";
com.wiris.editor.formula.Styles.vcD = "relation";
com.wiris.editor.formula.Styles.vt7 = "auto";
com.wiris.editor.formula.Styles.vwb = ["left", "center", "right"];
com.wiris.editor.formula.Styles.vxb = ["axis", "top", "center", "bottom", "baseline"];
com.wiris.editor.formula.Styles.vyb = ["", "top", "middle", "bottom", "baseline"];
com.wiris.e1_L.vGK = 0;
com.wiris.e1_L.vFK = 1;
com.wiris.e1_L.vLK = 2;
com.wiris.e1_L.vIK = 3;
com.wiris.e1_M.vXK = 0;
com.wiris.e1_M.vYK = 1;
com.wiris.e1_M.v65 = 3;
com.wiris.e1_M.voP = 0;
com.wiris.e1_M.vgP = 1;
com.wiris.e1_M.vmP = 2;
com.wiris.e1_M.vbP = 3;
com.wiris.e1_M.vzb = 4;
com.wiris.e1_M.vBQ = 5;
com.wiris.e1_M.v0c = 6;
com.wiris.e1_M.vCQ = 7;
com.wiris.e1_M.vnP = 8;
com.wiris.e1_M.vlP = 9;
com.wiris.e1_O.vWO = "@61@8801@8764@8776@8771@8773@8800@8802@8769@62@60@8805@8804" + "@10878@10877@10887@10888@8810@8811@8733@8826@8827@8882@8883@";
com.wiris.e1_P.vyK = "argument";
com.wiris.e1_P.v1c = "textbox";
com.wiris.e1_T.vkM = 1;
com.wiris.e1_T.v2c = 2;
com.wiris.e1_T.vy7 = 4;
com.wiris.e1_T.vz7 = 8;
com.wiris.e1_T.v25 = 16;
com.wiris.e1_T.v35 = 32;
com.wiris.e1_T.vDM = com.wiris.e1_T.vkM | com.wiris.e1_T.v25;
com.wiris.e1_T.vEM = com.wiris.e1_T.v25 | com.wiris.e1_T.vz7;
com.wiris.e1_T.vFM = com.wiris.e1_T.v2c | com.wiris.e1_T.v25;
com.wiris.e1_T.vGM = com.wiris.e1_T.v25 | com.wiris.e1_T.vz7 | com.wiris.e1_T.v35 | com.wiris.e1_T.vy7;
com.wiris.e1_T.vHM = 64;
com.wiris.e1_T.vIM = 128;
com.wiris.e1_T.vJM = 256;
com.wiris.e1_T.vKM = 512;
com.wiris.e1_T.vLM = 1024;
com.wiris.e1_T.vMM = 2048;
com.wiris.e1_T.vvM = 0.3;
com.wiris.e1_T.vrM = 0.05;
com.wiris.e1_T.vsM = 0.0;
com.wiris.e1_T.vtM = 0;
com.wiris.e1_T.vuM = 0;
com.wiris.e1_U.vzM = 16764108;
com.wiris.e1_V.v3N = 0;
com.wiris.e1_V.v1N = 1;
com.wiris.e1_V.v2N = 2;
com.wiris.e1_W.vON = [8450, 8465, 8469, 8474, 8476, 8477, 8484, 8592];
com.wiris.e1_W.vdN = false;
com.wiris.e1_W.viN = true;
com.wiris.e1_X.vsO = "0.4em";
com.wiris.e1_a.vUP = 0;
com.wiris.e1_a.vWP = 1;
com.wiris.e1_a.vVP = 2;
com.wiris.e1_d.vpP = 0;
com.wiris.e1_d.vqP = 1;
com.wiris.e1_d.vvA = true;
com.wiris.e1_f.vVE = 0;
com.wiris.e1_f.vWE = 1;
com.wiris.e1_f.vNE = 2;
com.wiris.e1_f.vXE = 3;
com.wiris.e1_f.vuN = 4;
com.wiris.e1_h.vfQ = 0;
com.wiris.e1_h.vyQ = 1;
com.wiris.e1_h.vwQ = 2;
com.wiris.e1_i.vFJ = "http://www.w3.org/1998/Math/MathML";
com.wiris.e1_j.vMR = com.wiris.e1_a.vUP;
com.wiris.e1_j.vOC = com.wiris.e1_a.vWP;
com.wiris.e1_j.vNC = com.wiris.e1_a.vVP;
com.wiris.e1_j.vOR = [0, 1];
com.wiris.e1_j.vPR = [1, 0];
com.wiris.e1_j.vQR = [1, 2, 0];
com.wiris.e1_j.center = [com.wiris.editor.formula.Styles.v45];
com.wiris.e1_s.v86 = 0;
com.wiris.e1_s.v76 = 1;
com.wiris.e1_01.vzS = "-9999px";
com.wiris.e1_01.v3T = 0;
com.wiris.e1_01.v4T = "Arial";
com.wiris.e1_01.v5T = 16;
com.wiris.js.JsDOMUtils.browser = new com.wiris.e1_z();
com.wiris.e1_31.vgW = 500;
com.wiris.e1_31.v3c = "@16@17@27@18@91@93@";
com.wiris.settings.PlatformSettings.v9Z = true;
com.wiris.settings.PlatformSettings.vEZ = false;
com.wiris.settings.PlatformSettings.vLR = false;
com.wiris.system.ResourceLoader.editorDefinition = null;
com.wiris.system.ResourceLoader.charactersDefinition = null;
com.wiris.system.ResourceLoader.translations = {};
com.wiris.system.ResourceLoader.fontAdjust = null;
com.wiris.util.xml.WEntities.vj2 = "boxDL@02557@boxDl@02556@boxdL@02555@boxdl@02510@boxDR@02554@boxDr@02553@boxdR@02552@boxdr@0250C@boxH@02550@boxh@02500@boxHD@02566@boxHd@02564@boxhD@02565@boxhd@0252C@boxHU@02569@boxHu@02567@boxhU@02568@boxhu@02534@boxUL@0255D@boxUl@0255C@boxuL@0255B@boxul@02518@boxUR@0255A@boxUr@02559@boxuR@02558@boxur@02514@boxV@02551@boxv@02502@boxVH@0256C@boxVh@0256B@boxvH@0256A@boxvh@0253C@boxVL@02563@boxVl@02562@boxvL@02561@boxvl@02524@boxVR@02560@boxVr@0255F@boxvR@0255E@boxvr@0251C@Acy@00410@acy@00430@Bcy@00411@bcy@00431@CHcy@00427@chcy@00447@Dcy@00414@dcy@00434@Ecy@0042D@ecy@0044D@Fcy@00424@fcy@00444@Gcy@00413@gcy@00433@HARDcy@0042A@hardcy@0044A@Icy@00418@icy@00438@IEcy@00415@iecy@00435@IOcy@00401@iocy@00451@Jcy@00419@jcy@00439@Kcy@0041A@kcy@0043A@KHcy@00425@khcy@00445@Lcy@0041B@lcy@0043B@Mcy@0041C@mcy@0043C@Ncy@0041D@ncy@0043D@numero@02116@Ocy@0041E@ocy@0043E@Pcy@0041F@pcy@0043F@Rcy@00420@rcy@00440@Scy@00421@scy@00441@SHCHcy@00429@shchcy@00449@SHcy@00428@shcy@00448@SOFTcy@0042C@softcy@0044C@Tcy@00422@tcy@00442@TScy@00426@tscy@00446@Ucy@00423@ucy@00443@Vcy@00412@vcy@00432@YAcy@0042F@yacy@0044F@Ycy@0042B@ycy@0044B@YUcy@0042E@yucy@0044E@Zcy@00417@zcy@00437@ZHcy@00416@zhcy@00436@DJcy@00402@djcy@00452@DScy@00405@dscy@00455@DZcy@0040F@dzcy@0045F@GJcy@00403@gjcy@00453@Iukcy@00406@iukcy@00456@Jsercy@00408@jsercy@00458@Jukcy@00404@jukcy@00454@KJcy@0040C@kjcy@0045C@LJcy@00409@ljcy@00459@NJcy@0040A@njcy@0045A@TSHcy@0040B@tshcy@0045B@Ubrcy@0040E@ubrcy@0045E@YIcy@00407@yicy@00457@acute@000B4@breve@002D8@caron@002C7@cedil@000B8@circ@002C6@dblac@002DD@die@000A8@dot@002D9@grave@00060@macr@000AF@ogon@002DB@ring@002DA@tilde@002DC@uml@000A8@Aacute@000C1@aacute@000E1@Acirc@000C2@acirc@000E2@AElig@000C6@aelig@000E6@Agrave@000C0@agrave@000E0@Aring@000C5@aring@000E5@Atilde@000C3@atilde@000E3@Auml@000C4@auml@000E4@Ccedil@000C7@ccedil@000E7@Eacute@000C9@eacute@000E9@Ecirc@000CA@ecirc@000EA@Egrave@000C8@egrave@000E8@ETH@000D0@eth@000F0@Euml@000CB@euml@000EB@Iacute@000CD@iacute@000ED@Icirc@000CE@icirc@000EE@Igrave@000CC@igrave@000EC@Iuml@000CF@iuml@000EF@Ntilde@000D1@ntilde@000F1@Oacute@000D3@oacute@000F3@Ocirc@000D4@ocirc@000F4@Ograve@000D2@ograve@000F2@Oslash@000D8@oslash@000F8@Otilde@000D5@otilde@000F5@Ouml@000D6@ouml@000F6@szlig@000DF@THORN@000DE@thorn@000FE@Uacute@000DA@uacute@000FA@Ucirc@000DB@ucirc@000FB@Ugrave@000D9@ugrave@000F9@Uuml@000DC@uuml@000FC@Yacute@000DD@yacute@000FD@yuml@000FF@Abreve@00102@abreve@00103@Amacr@00100@amacr@00101@Aogon@00104@aogon@00105@Cacute@00106@cacute@00107@Ccaron@0010C@ccaron@0010D@Ccirc@00108@ccirc@00109@Cdot@0010A@cdot@0010B@Dcaron@0010E@dcaron@0010F@Dstrok@00110@dstrok@00111@Ecaron@0011A@ecaron@0011B@Edot@00116@edot@00117@Emacr@00112@emacr@00113@ENG@0014A@eng@0014B@Eogon@00118@eogon@00119@gacute@001F5@Gbreve@0011E@gbreve@0011F@Gcedil@00122@Gcirc@0011C@gcirc@0011D@Gdot@00120@gdot@00121@Hcirc@00124@hcirc@00125@Hstrok@00126@hstrok@00127@Idot@00130@IJlig@00132@ijlig@00133@Imacr@0012A@imacr@0012B@inodot@00131@Iogon@0012E@iogon@0012F@Itilde@00128@itilde@00129@Jcirc@00134@jcirc@00135@Kcedil@00136@kcedil@00137@kgreen@00138@Lacute@00139@lacute@0013A@Lcaron@0013D@lcaron@0013E@Lcedil@0013B@lcedil@0013C@Lmidot@0013F@lmidot@00140@Lstrok@00141@lstrok@00142@Nacute@00143@nacute@00144@napos@00149@Ncaron@00147@ncaron@00148@Ncedil@00145@ncedil@00146@Odblac@00150@odblac@00151@OElig@00152@oelig@00153@Omacr@0014C@omacr@0014D@Racute@00154@racute@00155@Rcaron@00158@rcaron@00159@Rcedil@00156@rcedil@00157@Sacute@0015A@sacute@0015B@Scaron@00160@scaron@00161@Scedil@0015E@scedil@0015F@Scirc@0015C@scirc@0015D@Tcaron@00164@tcaron@00165@Tcedil@00162@tcedil@00163@Tstrok@00166@tstrok@00167@Ubreve@0016C@ubreve@0016D@Udblac@00170@udblac@00171@Umacr@0016A@umacr@0016B@Uogon@00172@uogon@00173@Uring@0016E@uring@0016F@Utilde@00168@utilde@00169@Wcirc@00174@wcirc@00175@Ycirc@00176@ycirc@00177@Yuml@00178@Zacute@00179@zacute@0017A@Zcaron@0017D@zcaron@0017E@Zdot@0017B@zdot@0017C@apos@00027@ast@0002A@brvbar@000A6@bsol@0005C@cent@000A2@colon@0003A@comma@0002C@commat@00040@copy@000A9@curren@000A4@darr@02193@deg@000B0@divide@000F7@dollar@00024@equals@0003D@excl@00021@frac12@000BD@frac14@000BC@frac18@0215B@frac34@000BE@frac38@0215C@frac58@0215D@frac78@0215E@gt@0003E@half@000BD@horbar@02015@hyphen@02010@iexcl@000A1@iquest@000BF@laquo@000AB@larr@02190@lcub@0007B@ldquo@0201C@lowbar@0005F@lpar@00028@lsqb@0005B@lsquo@02018@micro@000B5@middot@000B7@nbsp@000A0@not@000AC@num@00023@ohm@02126@ordf@000AA@ordm@000BA@para@000B6@percnt@00025@period@0002E@plus@0002B@plusmn@000B1@pound@000A3@quest@0003F@quot@00022@raquo@000BB@rarr@02192@rcub@0007D@rdquo@0201D@reg@000AE@rpar@00029@rsqb@0005D@rsquo@02019@sect@000A7@semi@0003B@shy@000AD@sol@0002F@sung@0266A@sup1@000B9@sup2@000B2@sup3@000B3@times@000D7@trade@02122@uarr@02191@verbar@0007C@yen@000A5@blank@02423@blk12@02592@blk14@02591@blk34@02593@block@02588@bull@02022@caret@02041@check@02713@cir@025CB@clubs@02663@copysr@02117@cross@02717@Dagger@02021@dagger@02020@dash@02010@diams@02666@dlcrop@0230D@drcrop@0230C@dtri@025BF@dtrif@025BE@emsp@02003@emsp13@02004@emsp14@02005@ensp@02002@female@02640@ffilig@0FB03@fflig@0FB00@ffllig@0FB04@filig@0FB01@flat@0266D@fllig@0FB02@frac13@02153@frac15@02155@frac16@02159@frac23@02154@frac25@02156@frac35@02157@frac45@02158@frac56@0215A@hairsp@0200A@hearts@02665@hellip@02026@hybull@02043@incare@02105@ldquor@0201E@lhblk@02584@loz@025CA@lozf@029EB@lsquor@0201A@ltri@025C3@ltrif@025C2@male@02642@malt@02720@marker@025AE@mdash@02014@mldr@02026@natur@0266E@ndash@02013@nldr@02025@numsp@02007@phone@0260E@puncsp@02008@rdquor@0201D@rect@025AD@rsquor@02019@rtri@025B9@rtrif@025B8@rx@0211E@sext@02736@sharp@0266F@spades@02660@squ@025A1@squf@025AA@star@02606@starf@02605@target@02316@telrec@02315@thinsp@02009@uhblk@02580@ulcrop@0230F@urcrop@0230E@utri@025B5@utrif@025B4@vellip@022EE@angzarr@0237C@cirmid@02AEF@cudarrl@02938@cudarrr@02935@cularr@021B6@cularrp@0293D@curarr@021B7@curarrm@0293C@Darr@021A1@dArr@021D3@ddarr@021CA@DDotrahd@02911@dfisht@0297F@dHar@02965@dharl@021C3@dharr@021C2@duarr@021F5@duhar@0296F@dzigrarr@027FF@erarr@02971@hArr@021D4@harr@02194@harrcir@02948@harrw@021AD@hoarr@021FF@imof@022B7@lAarr@021DA@Larr@0219E@larrbfs@0291F@larrfs@0291D@larrhk@021A9@larrlp@021AB@larrpl@02939@larrsim@02973@larrtl@021A2@lAtail@0291B@latail@02919@lBarr@0290E@lbarr@0290C@ldca@02936@ldrdhar@02967@ldrushar@0294B@ldsh@021B2@lfisht@0297C@lHar@02962@lhard@021BD@lharu@021BC@lharul@0296A@llarr@021C7@llhard@0296B@loarr@021FD@lrarr@021C6@lrhar@021CB@lrhard@0296D@lsh@021B0@lurdshar@0294A@luruhar@02966@Map@02905@map@021A6@midcir@02AF0@mumap@022B8@nearhk@02924@neArr@021D7@nearr@02197@nesear@02928@nhArr@021CE@nharr@021AE@nlArr@021CD@nlarr@0219A@nrArr@021CF@nrarr@0219B@nvHarr@02904@nvlArr@02902@nvrArr@02903@nwarhk@02923@nwArr@021D6@nwarr@02196@nwnear@02927@olarr@021BA@orarr@021BB@origof@022B6@rAarr@021DB@Rarr@021A0@rarrap@02975@rarrbfs@02920@rarrc@02933@rarrfs@0291E@rarrhk@021AA@rarrlp@021AC@rarrpl@02945@rarrsim@02974@Rarrtl@02916@rarrtl@021A3@rarrw@0219D@rAtail@0291C@ratail@0291A@RBarr@02910@rBarr@0290F@rbarr@0290D@rdca@02937@rdldhar@02969@rdsh@021B3@rfisht@0297D@rHar@02964@rhard@021C1@rharu@021C0@rharul@0296C@rlarr@021C4@rlhar@021CC@roarr@021FE@rrarr@021C9@rsh@021B1@ruluhar@02968@searhk@02925@seArr@021D8@searr@02198@seswar@02929@simrarr@02972@slarr@02190@srarr@02192@swarhk@02926@swArr@021D9@swarr@02199@swnwar@0292A@Uarr@0219F@uArr@021D1@Uarrocir@02949@udarr@021C5@udhar@0296E@ufisht@0297E@uHar@02963@uharl@021BF@uharr@021BE@uuarr@021C8@vArr@021D5@varr@02195@xhArr@027FA@xharr@027F7@xlArr@027F8@xlarr@027F5@xmap@027FC@xrArr@027F9@xrarr@027F6@zigrarr@021DD@ac@0223E@amalg@02A3F@barvee@022BD@Barwed@02306@barwed@02305@bsolb@029C5@Cap@022D2@capand@02A44@capbrcup@02A49@capcap@02A4B@capcup@02A47@capdot@02A40@ccaps@02A4D@ccups@02A4C@ccupssm@02A50@coprod@02210@Cup@022D3@cupbrcap@02A48@cupcap@02A46@cupcup@02A4A@cupdot@0228D@cupor@02A45@cuvee@022CE@cuwed@022CF@Dagger@02021@dagger@02020@diam@022C4@divonx@022C7@eplus@02A71@hercon@022B9@intcal@022BA@iprod@02A3C@loplus@02A2D@lotimes@02A34@lthree@022CB@ltimes@022C9@midast@0002A@minusb@0229F@minusd@02238@minusdu@02A2A@ncap@02A43@ncup@02A42@oast@0229B@ocir@0229A@odash@0229D@odiv@02A38@odot@02299@odsold@029BC@ofcir@029BF@ogt@029C1@ohbar@029B5@olcir@029BE@olt@029C0@omid@029B6@ominus@02296@opar@029B7@operp@029B9@oplus@02295@osol@02298@Otimes@02A37@otimes@02297@otimesas@02A36@ovbar@0233D@plusacir@02A23@plusb@0229E@pluscir@02A22@plusdo@02214@plusdu@02A25@pluse@02A72@plussim@02A26@plustwo@02A27@prod@0220F@race@029DA@roplus@02A2E@rotimes@02A35@rthree@022CC@rtimes@022CA@sdot@022C5@sdotb@022A1@setmn@02216@simplus@02A24@smashp@02A33@solb@029C4@sqcap@02293@sqcup@02294@ssetmn@02216@sstarf@022C6@subdot@02ABD@sum@02211@supdot@02ABE@timesb@022A0@timesbar@02A31@timesd@02A30@tridot@025EC@triminus@02A3A@triplus@02A39@trisb@029CD@tritime@02A3B@uplus@0228E@veebar@022BB@wedbar@02A5F@wreath@02240@xcap@022C2@xcirc@025EF@xcup@022C3@xdtri@025BD@xodot@02A00@xoplus@02A01@xotime@02A02@xsqcup@02A06@xuplus@02A04@xutri@025B3@xvee@022C1@xwedge@022C0@dlcorn@0231E@drcorn@0231F@gtlPar@02995@langd@02991@lbrke@0298B@lbrksld@0298F@lbrkslu@0298D@lceil@02308@lfloor@0230A@lmoust@023B0@lparlt@02993@ltrPar@02996@rangd@02992@rbrke@0298C@rbrksld@0298E@rbrkslu@02990@rceil@02309@rfloor@0230B@rmoust@023B1@rpargt@02994@ulcorn@0231C@urcorn@0231D@gnap@02A8A@gnE@02269@gne@02A88@gnsim@022E7@lnap@02A89@lnE@02268@lne@02A87@lnsim@022E6@nap@02249@ncong@02247@nequiv@02262@nge@02271@ngsim@02275@ngt@0226F@nle@02270@nlsim@02274@nlt@0226E@nltri@022EA@nltrie@022EC@nmid@02224@npar@02226@npr@02280@nprcue@022E0@nrtri@022EB@nrtrie@022ED@nsc@02281@nsccue@022E1@nsim@02241@nsime@02244@nsmid@02224@nspar@02226@nsqsube@022E2@nsqsupe@022E3@nsub@02284@nsube@02288@nsup@02285@nsupe@02289@ntgl@02279@ntlg@02278@nVDash@022AF@nVdash@022AE@nvDash@022AD@nvdash@022AC@parsim@02AF3@prnap@02AB9@prnE@02AB5@prnsim@022E8@rnmid@02AEE@scnap@02ABA@scnE@02AB6@scnsim@022E9@simne@02246@solbar@0233F@subnE@02ACB@subne@0228A@supnE@02ACC@supne@0228B@ang@02220@ange@029A4@angmsd@02221@angmsdaa@029A8@angmsdab@029A9@angmsdac@029AA@angmsdad@029AB@angmsdae@029AC@angmsdaf@029AD@angmsdag@029AE@angmsdah@029AF@angrtvb@022BE@angrtvbd@0299D@bbrk@023B5@bbrktbrk@023B6@bemptyv@029B0@beth@02136@boxbox@029C9@";
com.wiris.util.xml.WEntities.vk2 = "bprime@02035@bsemi@0204F@cemptyv@029B2@cirE@029C3@cirscir@029C2@comp@02201@daleth@02138@demptyv@029B1@ell@02113@empty@02205@emptyv@02205@gimel@02137@iiota@02129@image@02111@imath@00131@jmath@0006A@laemptyv@029B4@lltri@025FA@lrtri@022BF@mho@02127@nexist@02204@oS@024C8@planck@0210F@plankv@0210F@raemptyv@029B3@range@029A5@real@0211C@tbrk@023B4@trpezium@0FFFD@ultri@025F8@urtri@025F9@vzigzag@0299A@weierp@02118@apE@02A70@ape@0224A@apid@0224B@asymp@02248@Barv@02AE7@bcong@0224C@bepsi@003F6@bowtie@022C8@bsim@0223D@bsime@022CD@bump@0224E@bumpE@02AAE@bumpe@0224F@cire@02257@Colon@02237@Colone@02A74@colone@02254@congdot@02A6D@csub@02ACF@csube@02AD1@csup@02AD0@csupe@02AD2@cuepr@022DE@cuesc@022DF@Dashv@02AE4@dashv@022A3@easter@02A6E@ecir@02256@ecolon@02255@eDDot@02A77@eDot@02251@efDot@02252@eg@02A9A@egs@02A96@egsdot@02A98@el@02A99@els@02A95@elsdot@02A97@equest@0225F@equivDD@02A78@erDot@02253@esdot@02250@Esim@02A73@esim@02242@fork@022D4@forkv@02AD9@frown@02322@gap@02A86@gE@02267@gEl@02A8C@gel@022DB@ges@02A7E@gescc@02AA9@gesdot@02A80@gesdoto@02A82@gesdotol@02A84@gesles@02A94@Gg@022D9@gl@02277@gla@02AA5@glE@02A92@glj@02AA4@gsim@02273@gsime@02A8E@gsiml@02A90@Gt@0226B@gtcc@02AA7@gtcir@02A7A@gtdot@022D7@gtquest@02A7C@gtrarr@02978@homtht@0223B@lap@02A85@lat@02AAB@late@02AAD@lE@02266@lEg@02A8B@leg@022DA@les@02A7D@lescc@02AA8@lesdot@02A7F@lesdoto@02A81@lesdotor@02A83@lesges@02A93@lg@02276@lgE@02A91@Ll@022D8@lsim@02272@lsime@02A8D@lsimg@02A8F@Lt@0226A@ltcc@02AA6@ltcir@02A79@ltdot@022D6@ltlarr@02976@ltquest@02A7B@ltrie@022B4@mcomma@02A29@mDDot@0223A@mid@02223@mlcp@02ADB@models@022A7@mstpos@0223E@Pr@02ABB@pr@0227A@prap@02AB7@prcue@0227C@prE@02AB3@pre@02AAF@prsim@0227E@prurel@022B0@ratio@02236@rtrie@022B5@rtriltri@029CE@Sc@02ABC@sc@0227B@scap@02AB8@sccue@0227D@scE@02AB4@sce@02AB0@scsim@0227F@sdote@02A66@sfrown@02322@simg@02A9E@simgE@02AA0@siml@02A9D@simlE@02A9F@smid@02223@smile@02323@smt@02AAA@smte@02AAC@spar@02225@sqsub@0228F@sqsube@02291@sqsup@02290@sqsupe@02292@ssmile@02323@Sub@022D0@subE@02AC5@subedot@02AC3@submult@02AC1@subplus@02ABF@subrarr@02979@subsim@02AC7@subsub@02AD5@subsup@02AD3@Sup@022D1@supdsub@02AD8@supE@02AC6@supedot@02AC4@suphsub@02AD7@suplarr@0297B@supmult@02AC2@supplus@02AC0@supsim@02AC8@supsub@02AD4@supsup@02AD6@thkap@02248@thksim@0223C@topfork@02ADA@trie@0225C@twixt@0226C@Vbar@02AEB@vBar@02AE8@vBarv@02AE9@VDash@022AB@Vdash@022A9@vDash@022A8@vdash@022A2@Vdashl@02AE6@vltri@022B2@vprop@0221D@vrtri@022B3@Vvdash@022AA@alpha@003B1@beta@003B2@chi@003C7@Delta@00394@delta@003B4@epsi@003B5@epsiv@003F5@eta@003B7@Gamma@00393@gamma@003B3@Gammad@003DC@gammad@003DD@iota@003B9@kappa@003BA@kappav@003F0@Lambda@0039B@lambda@003BB@mu@003BC@nu@003BD@Omega@003A9@omega@003C9@Phi@003A6@phi@003C6@phiv@003D5@Pi@003A0@pi@003C0@piv@003D6@Psi@003A8@psi@003C8@rho@003C1@rhov@003F1@Sigma@003A3@sigma@003C3@sigmav@003C2@tau@003C4@Theta@00398@theta@003B8@thetav@003D1@Upsi@003D2@upsi@003C5@Xi@0039E@xi@003BE@zeta@003B6@Cfr@0212D@Hfr@0210C@Ifr@02111@Rfr@0211C@Zfr@02128@Copf@02102@Hopf@0210D@Nopf@02115@Popf@02119@Qopf@0211A@Ropf@0211D@Zopf@02124@acd@0223F@aleph@02135@And@02A53@and@02227@andand@02A55@andd@02A5C@andslope@02A58@andv@02A5A@angrt@0221F@angsph@02222@angst@0212B@ap@02248@apacir@02A6F@awconint@02233@awint@02A11@becaus@02235@bernou@0212C@bNot@02AED@bnot@02310@bottom@022A5@cap@02229@Cconint@02230@cirfnint@02A10@compfn@02218@cong@02245@Conint@0222F@conint@0222E@ctdot@022EF@cup@0222A@cwconint@02232@cwint@02231@cylcty@0232D@disin@022F2@Dot@000A8@DotDot@020DC@dsol@029F6@dtdot@022F1@dwangle@029A6@elinters@0FFFD@epar@022D5@eparsl@029E3@equiv@02261@eqvparsl@029E5@exist@02203@fltns@025B1@fnof@00192@forall@02200@fpartint@02A0D@ge@02265@hamilt@0210B@iff@021D4@iinfin@029DC@imped@001B5@infin@0221E@infintie@029DD@Int@0222C@int@0222B@intlarhk@02A17@isin@02208@isindot@022F5@isinE@022F9@isins@022F4@isinsv@022F3@isinv@02208@lagran@02112@Lang@0300A@lang@027e8@lArr@021D0@lbbrk@03014@le@02264@loang@03018@lobrk@0301A@lopar@02985@lowast@02217@minus@02212@mnplus@02213@nabla@02207@ne@02260@nhpar@02AF2@ni@0220B@nis@022FC@nisd@022FA@niv@0220B@Not@02AEC@notin@02209@notinva@02209@notinvb@022F7@notinvc@022F6@notni@0220C@notniva@0220C@notnivb@022FE@notnivc@022FD@npolint@02A14@nvinfin@029DE@olcross@029BB@Or@02A54@or@02228@ord@02A5D@order@02134@oror@02A56@orslope@02A57@orv@02A5B@par@02225@parsl@02AFD@part@02202@permil@02030@perp@022A5@pertenk@02031@phmmat@02133@pointint@02A15@Prime@02033@prime@02032@profalar@0232E@profline@02312@profsurf@02313@prop@0221D@qint@02A0C@qprime@02057@quatint@02A16@radic@0221A@Rang@0300B@rang@027e9@rArr@021D2@rbbrk@03015@roang@03019@robrk@0301B@ropar@02986@rppolint@02A12@scpolint@02A13@sim@0223C@simdot@02A6A@sime@02243@smeparsl@029E4@square@025A1@squarf@025AA@strns@000AF@sub@02282@sube@02286@sup@02283@supe@02287@tdot@020DB@there4@02234@tint@0222D@top@022A4@topbot@02336@topcir@02AF1@tprime@02034@utdot@022F0@uwangle@029A7@vangrt@0299C@veeeq@0225A@Verbar@02016@wedgeq@02259@xnis@022FB@angle@02220@ApplyFunction@02061@approx@02248@approxeq@0224A@Assign@02254@backcong@0224C@backepsilon@003F6@backprime@02035@backsim@0223D@backsimeq@022CD@Backslash@02216@barwedge@02305@Because@02235@because@02235@Bernoullis@0212C@between@0226C@bigcap@022C2@bigcirc@025EF@bigcup@022C3@bigodot@02A00@bigoplus@02A01@bigotimes@02A02@bigsqcup@02A06@bigstar@02605@bigtriangledown@025BD@bigtriangleup@025B3@biguplus@02A04@bigvee@022C1@bigwedge@022C0@bkarow@0290D@blacklozenge@029EB@blacksquare@025AA@blacktriangle@025B4@blacktriangledown@025BE@blacktriangleleft@025C2@blacktriangleright@025B8@bot@022A5@boxminus@0229F@boxplus@0229E@boxtimes@022A0@Breve@002D8@bullet@02022@Bumpeq@0224E@bumpeq@0224F@CapitalDifferentialD@02145@Cayleys@0212D@Cedilla@000B8@CenterDot@000B7@centerdot@000B7@checkmark@02713@circeq@02257@circlearrowleft@021BA@circlearrowright@021BB@circledast@0229B@circledcirc@0229A@circleddash@0229D@CircleDot@02299@circledR@000AE@circledS@024C8@CircleMinus@02296@CirclePlus@02295@CircleTimes@02297@ClockwiseContourIntegral@02232@CloseCurlyDoubleQuote@0201D@CloseCurlyQuote@02019@clubsuit@02663@coloneq@02254@complement@02201@complexes@02102@Congruent@02261@ContourIntegral@0222E@Coproduct@02210@CounterClockwiseContourIntegral@02233@CupCap@0224D@curlyeqprec@022DE@curlyeqsucc@022DF@curlyvee@022CE@curlywedge@022CF@curvearrowleft@021B6@curvearrowright@021B7@dbkarow@0290F@ddagger@02021@ddotseq@02A77@Del@02207@DiacriticalAcute@000B4@DiacriticalDot@002D9@DiacriticalDoubleAcute@002DD@DiacriticalGrave@00060@DiacriticalTilde@002DC@Diamond@022C4@diamond@022C4@diamondsuit@02666@DifferentialD@02146@digamma@003DD@div@000F7@divideontimes@022C7@doteq@02250@doteqdot@02251@DotEqual@02250@dotminus@02238@dotplus@02214@dotsquare@022A1@doublebarwedge@02306@DoubleContourIntegral@0222F@DoubleDot@000A8@DoubleDownArrow@021D3@DoubleLeftArrow@021D0@DoubleLeftRightArrow@021D4@DoubleLeftTee@02AE4@DoubleLongLeftArrow@027F8@DoubleLongLeftRightArrow@027FA@DoubleLongRightArrow@027F9@DoubleRightArrow@021D2@DoubleRightTee@022A8@DoubleUpArrow@021D1@DoubleUpDownArrow@021D5@DoubleVerticalBar@02225@DownArrow@02193@Downarrow@021D3@downarrow@02193@DownArrowUpArrow@021F5@downdownarrows@021CA@downharpoonleft@021C3@downharpoonright@021C2@DownLeftVector@021BD@DownRightVector@021C1@DownTee@022A4@DownTeeArrow@021A7@drbkarow@02910@Element@02208@emptyset@02205@eqcirc@02256@eqcolon@02255@eqsim@02242@eqslantgtr@02A96@eqslantless@02A95@EqualTilde@02242@Equilibrium@021CC@Exists@02203@expectation@02130@ExponentialE@02147@exponentiale@02147@fallingdotseq@02252@ForAll@02200@Fouriertrf@02131@geq@02265@geqq@02267@geqslant@02A7E@gg@0226B@ggg@022D9@gnapprox@02A8A@gneq@02A88@gneqq@02269@GreaterEqual@02265@GreaterEqualLess@022DB@GreaterFullEqual@02267@GreaterLess@02277@GreaterSlantEqual@02A7E@GreaterTilde@02273@gtrapprox@02A86@gtrdot@022D7@gtreqless@022DB@gtreqqless@02A8C@gtrless@02277@gtrsim@02273@Hacek@002C7@hbar@0210F@heartsuit@02665@HilbertSpace@0210B@hksearow@02925@hkswarow@02926@hookleftarrow@021A9@hookrightarrow@021AA@hslash@0210F@HumpDownHump@0224E@HumpEqual@0224F@iiiint@02A0C@iiint@0222D@Im@02111@ImaginaryI@02148@imagline@02110@imagpart@02111@Implies@021D2@in@02208@integers@02124@Integral@0222B@intercal@022BA@Intersection@022C2@intprod@02A3C@InvisibleComma@02063@InvisibleTimes@02062@langle@027e8@Laplacetrf@02112@lbrace@0007B@lbrack@0005B@LeftAngleBracket@027e8@LeftArrow@02190@Leftarrow@021D0@leftarrow@02190@LeftArrowBar@021E4@LeftArrowRightArrow@021C6@leftarrowtail@021A2@LeftCeiling@02308@LeftDoubleBracket@0301A@LeftDownVector@021C3@LeftFloor@0230A@leftharpoondown@021BD@leftharpoonup@021BC@leftleftarrows@021C7@LeftRightArrow@02194@Leftrightarrow@021D4@leftrightarrow@02194@leftrightarrows@021C6@leftrightharpoons@021CB@leftrightsquigarrow@021AD@LeftTee@022A3@LeftTeeArrow@021A4@leftthreetimes@022CB@LeftTriangle@022B2@LeftTriangleEqual@022B4@LeftUpVector@021BF@LeftVector@021BC@leq@02264@leqq@02266@leqslant@02A7D@lessapprox@02A85@lessdot@022D6@lesseqgtr@022DA@lesseqqgtr@02A8B@LessEqualGreater@022DA@LessFullEqual@02266@LessGreater@02276@lessgtr@02276@lesssim@02272@LessSlantEqual@02A7D@LessTilde@02272@ll@0226A@llcorner@0231E@Lleftarrow@021DA@lmoustache@023B0@lnapprox@02A89@lneq@02A87@lneqq@02268@LongLeftArrow@027F5@Longleftarrow@027F8@longleftarrow@027F5@LongLeftRightArrow@027F7@Longleftrightarrow@027FA@longleftrightarrow@027F7@longmapsto@027FC@LongRightArrow@027F6@Longrightarrow@027F9@longrightarrow@027F6@looparrowleft@021AB@looparrowright@021AC@LowerLeftArrow@02199@LowerRightArrow@02198@lozenge@025CA@lrcorner@0231F@Lsh@021B0@maltese@02720@mapsto@021A6@measuredangle@02221@Mellintrf@02133@MinusPlus@02213@mp@02213@multimap@022B8@napprox@02249@natural@0266E@naturals@02115@nearrow@02197@NegativeMediumSpace@0200B@NegativeThickSpace@0200B@NegativeThinSpace@0200B@NegativeVeryThinSpace@0200B@NestedGreaterGreater@0226B@NestedLessLess@0226A@nexists@02204@ngeq@02271@ngtr@0226F@nLeftarrow@021CD@nleftarrow@0219A@nLeftrightarrow@021CE@nleftrightarrow@021AE@nleq@02270@nless@0226E@NonBreakingSpace@000A0@NotCongruent@02262@NotDoubleVerticalBar@02226@NotElement@02209@NotEqual@02260@NotExists@02204@NotGreater@0226F@NotGreaterEqual@02271@NotGreaterLess@02279@NotGreaterTilde@02275@NotLeftTriangle@022EA@NotLeftTriangleEqual@022EC@NotLess@0226E@NotLessEqual@02270@NotLessGreater@02278@NotLessTilde@02274@NotPrecedes@02280@NotPrecedesSlantEqual@022E0@NotReverseElement@0220C@NotRightTriangle@022EB@NotRightTriangleEqual@022ED@NotSquareSubsetEqual@022E2@NotSquareSupersetEqual@022E3@NotSubsetEqual@02288@NotSucceeds@02281@NotSucceedsSlantEqual@022E1@NotSupersetEqual@02289@NotTilde@02241@NotTildeEqual@02244@NotTildeFullEqual@02247@NotTildeTilde@02249@NotVerticalBar@02224@nparallel@02226@nprec@02280@nRightarrow@021CF@nrightarrow@0219B@nshortmid@02224@nshortparallel@02226@nsimeq@02244@nsubseteq@02288@nsucc@02281@nsupseteq@02289@ntriangleleft@022EA@ntrianglelefteq@022EC@ntriangleright@022EB@ntrianglerighteq@022ED@nwarrow@02196@oint@0222E@OpenCurlyDoubleQuote@0201C@OpenCurlyQuote@02018@orderof@02134@parallel@02225@PartialD@02202@pitchfork@022D4@PlusMinus@000B1@pm@000B1@Poincareplane@0210C@prec@0227A@precapprox@02AB7@preccurlyeq@0227C@Precedes@0227A@PrecedesEqual@02AAF@PrecedesSlantEqual@0227C@PrecedesTilde@0227E@preceq@02AAF@precnapprox@02AB9@precneqq@02AB5@precnsim@022E8@precsim@0227E@primes@02119@Proportion@02237@Proportional@0221D@propto@0221D@quaternions@0210D@questeq@0225F@rangle@027e9@rationals@0211A@rbrace@0007D@rbrack@0005D@Re@0211C@realine@0211B@realpart@0211C@reals@0211D@ReverseElement@0220B@ReverseEquilibrium@021CB@ReverseUpEquilibrium@0296F@RightAngleBracket@027e9@RightArrow@02192@Rightarrow@021D2@rightarrow@02192@RightArrowBar@021E5@RightArrowLeftArrow@021C4@rightarrowtail@021A3@RightCeiling@02309@RightDoubleBracket@0301B@RightDownVector@021C2@RightFloor@0230B@rightharpoondown@021C1@rightharpoonup@021C0@rightleftarrows@021C4@rightleftharpoons@021CC@rightrightarrows@021C9@rightsquigarrow@0219D@RightTee@022A2@RightTeeArrow@021A6@rightthreetimes@022CC@RightTriangle@022B3@RightTriangleEqual@022B5@RightUpVector@021BE@RightVector@021C0@risingdotseq@02253@rmoustache@023B1@Rrightarrow@021DB@Rsh@021B1@searrow@02198@setminus@02216@ShortDownArrow@02193@ShortLeftArrow@02190@shortmid@02223@shortparallel@02225@ShortRightArrow@02192@ShortUpArrow@02191@simeq@02243@SmallCircle@02218@smallsetminus@02216@spadesuit@02660@Sqrt@0221A@sqsubset@0228F@sqsubseteq@02291@sqsupset@02290@sqsupseteq@02292@Square@025A1@SquareIntersection@02293@SquareSubset@0228F@SquareSubsetEqual@02291@SquareSuperset@02290@SquareSupersetEqual@02292@SquareUnion@02294@Star@022C6@straightepsilon@003F5@straightphi@003D5@Subset@022D0@subset@02282@subseteq@02286@subseteqq@02AC5@SubsetEqual@02286@subsetneq@0228A@subsetneqq@02ACB@succ@0227B@succapprox@02AB8@succcurlyeq@0227D@Succeeds@0227B@SucceedsEqual@02AB0@SucceedsSlantEqual@0227D@SucceedsTilde@0227F@succeq@02AB0@succnapprox@02ABA@succneqq@02AB6@succnsim@022E9@succsim@0227F@SuchThat@0220B@Sum@02211@Superset@02283@SupersetEqual@02287@Supset@022D1@supset@02283@supseteq@02287@supseteqq@02AC6@supsetneq@0228B@supsetneqq@02ACC@swarrow@02199@Therefore@02234@therefore@02234@thickapprox@02248@thicksim@0223C@ThinSpace@02009@Tilde@0223C@TildeEqual@02243@TildeFullEqual@02245@TildeTilde@02248@toea@02928@tosa@02929@triangle@025B5@triangledown@025BF@triangleleft@025C3@trianglelefteq@022B4@triangleq@0225C@triangleright@025B9@trianglerighteq@022B5@TripleDot@020DB@twoheadleftarrow@0219E@twoheadrightarrow@021A0@ulcorner@0231C@Union@022C3@UnionPlus@0228E@UpArrow@02191@Uparrow@021D1@uparrow@02191@UpArrowDownArrow@021C5@UpDownArrow@02195@Updownarrow@021D5@updownarrow@02195@UpEquilibrium@0296E@upharpoonleft@021BF@upharpoonright@021BE@UpperLeftArrow@02196@UpperRightArrow@02197@upsilon@003C5@UpTee@022A5@UpTeeArrow@021A5@upuparrows@021C8@urcorner@0231D@varepsilon@003F5@varkappa@003F0@varnothing@02205@varphi@003C6@varpi@003D6@varpropto@0221D@varrho@003F1@varsigma@003C2@vartheta@003D1@vartriangleleft@022B2@vartriangleright@022B3@Vee@022C1@vee@02228@Vert@02016@vert@0007C@VerticalBar@02223@VerticalTilde@02240@VeryThinSpace@0200A@Wedge@022C0@wedge@02227@wp@02118@wr@02240@zeetrf@02128@af@02061@asympeq@0224D@Cross@02A2F@DD@02145@dd@02146@DownArrowBar@02913@DownBreve@00311@DownLeftRightVector@02950@DownLeftTeeVector@0295E@DownLeftVectorBar@02956@DownRightTeeVector@0295F@DownRightVectorBar@02957@ee@02147@EmptySmallSquare@025FB@EmptyVerySmallSquare@025AB@Equal@02A75@FilledSmallSquare@025FC@FilledVerySmallSquare@025AA@GreaterGreater@02AA2@Hat@0005E@HorizontalLine@02500@ic@02063@ii@02148@it@02062@larrb@021E4@LeftDownTeeVector@02961@LeftDownVectorBar@02959@LeftRightVector@0294E@LeftTeeVector@0295A@LeftTriangleBar@029CF@LeftUpDownVector@02951@LeftUpTeeVector@02960@LeftUpVectorBar@02958@LeftVectorBar@02952@LessLess@02AA1@mapstodown@021A7@mapstoleft@021A4@mapstoup@021A5@MediumSpace@0205F@NewLine@0000A@NoBreak@02060@NotCupCap@0226D@OverBar@000AF@OverBrace@023DE@OverBracket@023B4@OverParenthesis@023DC@planckh@0210E@Product@0220F@rarrb@021E5@RightDownTeeVector@0295D@RightDownVectorBar@02955@RightTeeVector@0295B@RightTriangleBar@029D0@RightUpDownVector@0294F@RightUpTeeVector@0295C@RightUpVectorBar@02954@RightVectorBar@02953@RoundImplies@02970@RuleDelayed@029F4@Tab@00009@UnderBar@00332@UnderBrace@023DF@UnderBracket@023B5@UnderParenthesis@023DD@UpArrowBar@02912@Upsilon@003A5@VerticalLine@0007C@VerticalSeparator@02758@ZeroWidthSpace@0200B@omicron@003BF@amalg@02210@NegativeThinSpace@0E000@";
com.wiris.util.xml.WEntities.v4c = "infty@221e@partial@2202@iint@222c@neq@2260@nsubset@2284@nsupset@2285@exists@2203@ldots@2026@vdots@22ee@cdots@22ef@ddots@22f1@bar@00af@hat@005e@vec@21c0@ddot@00A8@";
com.wiris.util.xml.WEntities.vMZ = com.wiris.util.xml.WEntities.vj2 + com.wiris.util.xml.WEntities.vk2 + com.wiris.util.xml.WEntities.v4c;
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.io.Output.vRa = Math.log(2);
js.Lib.onerror = null;
com.wiris.system.ResourceLoader.editorDefinition = {
    "name": "editor",
    "childs": [{
        "name": "actions",
        "childs": [{
            "name": "action",
            "attrs": {
                "id": "fraction"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><mfrac><mrow/><mrow/></mfrac></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "smallFraction"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"false\"><mfrac><mrow/><mrow/></mfrac></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bevelledFraction"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><mfrac bevelled=\"true\"><mrow/><mrow/></mfrac></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "slashedFraction"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><mfrac slashed=\"true\"><mrow/><mrow/></mfrac></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "smallBevelledFraction"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"false\"><mfrac bevelled=\"true\"><mrow/><mrow/></mfrac></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "squareRoot"
            },
            "childs": [{
                "name": "content",
                "mml": "<msqrt><mrow/></msqrt>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "nRoot",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mroot><mrow/><mrow/></mroot>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "subscript"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "subscript"
                },
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mrow/><mo> </mo><mprescripts/><mspace width=\"6px\"/><mo> </mo></mmultiscripts>"
            }, {
                "name": "content",
                "mml": "<msub><maction actiontype=\"argument\"><mrow/></maction><mrow/></msub>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "superscript"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "superscript"
                },
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mo> </mo><mrow/><mprescripts/><mspace width=\"6px\"/><mo> </mo></mmultiscripts>"
            }, {
                "name": "content",
                "mml": "<msup><maction actiontype=\"argument\"><mrow/></maction><mrow/></msup>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "subsuperscript"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "subsuperscript"
                },
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mrow/><mrow/><mprescripts/><mspace width=\"6px\"/><mo> </mo></mmultiscripts>"
            }, {
                "name": "content",
                "mml": "<msubsup><maction actiontype=\"argument\"><mrow/></maction><mrow/><mrow/></msubsup>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "leftSuperscript",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "leftSuperscript"
                },
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mspace width=\"6px\"/><mo> </mo><mprescripts/><mo> </mo><mrow/></mmultiscripts>"
            }, {
                "name": "content",
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mprescripts/><none/><mrow/></mmultiscripts>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "leftSubscript",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "leftSubscript"
                },
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mspace width=\"6px\"/><mo> </mo><mprescripts/><mrow/><mo> </mo></mmultiscripts>"
            }, {
                "name": "content",
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mprescripts/><mrow/><none/></mmultiscripts>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "leftSubscriptAndSuperscript",
                "offset": "3"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "leftSubscriptAndSuperscript"
                },
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mspace width=\"6px\"/><mo> </mo><mprescripts/><mrow/><mrow/></mmultiscripts>"
            }, {
                "name": "content",
                "mml": "<mmultiscripts><maction actiontype=\"argument\"><mrow/></maction><mprescripts/><mrow/><mrow/></mmultiscripts>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "parenthesis"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "squareBracket"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"]\" open=\"[\"><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "verticalBar"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"|\" open=\"|\"><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "doubleVerticalBar"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"||\" open=\"||\"><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "angleBrackets"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"&gt;\" open=\"&lt;\"><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "curlyBracket"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"}\" open=\"{\"><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "floor"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"⌋\" open=\"⌊\"><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "ceiling"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"⌉\" open=\"⌈\"><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "angleBracketsWithBar"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"&gt;\" open=\"&lt;\" separators=\"|\"><mrow/><mrow/></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "upCurlyBracket",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<mover><mrow/><mo>⏞</mo></mover>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "downCurlyBracket"
            },
            "childs": [{
                "name": "content",
                "mml": "<munder><mrow/><mo>⏟</mo></munder>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "upParenthesis",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<mover><mrow/><mo>⏜</mo></mover>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "downParenthesis"
            },
            "childs": [{
                "name": "content",
                "mml": "<munder><mrow/><mo>⏝</mo></munder>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "apos3"
            },
            "childs": [{
                "name": "content",
                "mml": "<mn>\u2032</mn>"}]
        }, {
            "name": "action",
            "attrs": {
                "id": "aposApos"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo>''</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "numberPi"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">π</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "naturals"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">ℕ</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "rationals"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">ℚ</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "reals"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">ℝ</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "integers"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">ℤ</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "complexes"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">ℂ</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "primes"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">ℙ</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "ell"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">ℓ</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "zTransform"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo>Ƶ</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "table"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "table"
                },
                "mml": "<mtable><mtr><mtd/><mtd/><mtd/></mtr><mtr><mtd/><mtd/><mtd/></mtr><mtr><mtd/><mtd/><mtd/></mtr></mtable>"
            }, {
                "name": "content",
                "mml": "<mtable><mtr><mtd/></mtr></mtable>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "squareTable",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "squareTable"
                },
                "mml": "<mfenced close=\"]\" open=\"[\"><mtable><mtr><mtd/><mtd/></mtr><mtr><mtd/><mtd/></mtr></mtable></mfenced>"
            }, {
                "name": "content",
                "mml": "<mfenced close=\"]\" open=\"[\"><mtable><mtr><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "verticalLineTable",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "verticalLineTable"
                },
                "mml": "<mfenced close=\"|\" open=\"|\"><mtable><mtr><mtd/><mtd/></mtr><mtr><mtd/><mtd/></mtr></mtable></mfenced>"
            }, {
                "name": "content",
                "mml": "<mfenced close=\"|\" open=\"|\"><mtable><mtr><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "parenthesisTable",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "parenthesisTable"
                },
                "mml": "<mfenced><mtable><mtr><mtd/><mtd/></mtr><mtr><mtd/><mtd/></mtr></mtable></mfenced>"
            }, {
                "name": "content",
                "mml": "<mfenced><mtable><mtr><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "column"
            },
            "childs": [{
                "name": "content",
                "mml": "<mtable><mtr><mtd/></mtr><mtr><mtd/></mtr><mtr><mtd/></mtr></mtable>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "row"
            },
            "childs": [{
                "name": "content",
                "mml": "<mtable><mtr><mtd/><mtd/><mtd/></mtr></mtable>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "squareColumn",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"]\" open=\"[\"><mtable><mtr><mtd/></mtr><mtr><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "squareRow",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced close=\"]\" open=\"[\"><mtable><mtr><mtd/><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "parenthesisColumn",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced><mtable><mtr><mtd/></mtr><mtr><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "parenthesisRow",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mfenced><mtable><mtr><mtd/><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "lCurlyColumn",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "lCurlyColumn"
                },
                "mml": "<mfenced close=\"\" open=\"{\"><mtable columnalign=\"left\"><mtr><mtd><mrow style=\"width:1.5ex\"/></mtd></mtr><mtr><mtd/></mtr></mtable></mfenced>"
            }, {
                "name": "content",
                "mml": "<mfenced close=\"\" open=\"{\"><mtable columnalign=\"left\"><mtr><mtd/></mtr><mtr><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "rCurlyColumn",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "rCurlyColumn"
                },
                "mml": "<mfenced close=\"}\" open=\"\"><mtable columnalign=\"right\"><mtr><mtd/></mtr><mtr><mtd><mrow style=\"width:1.5ex\"/></mtd></mtr></mtable></mfenced>"
            }, {
                "name": "content",
                "mml": "<mfenced close=\"}\" open=\"\"><mtable columnalign=\"right\"><mtr><mtd/></mtr><mtr><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "piecewiseFunction",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "piecewiseFunction"
                },
                "mml": "<mfenced close=\"\" open=\"{\"><mtable columnalign=\"left\"><mtr><mtd><mrow style=\"width:1.15ex\"/></mtd><mtd/></mtr><mtr><mtd/><mtd><mrow style=\"width:1.3ex\"/></mtd></mtr></mtable></mfenced>"
            }, {
                "name": "content",
                "mml": "<mfenced close=\"\" open=\"{\"><mtable columnalign=\"left\" columnspacing=\"1.4ex\"><mtr><mtd/><mtd/></mtr><mtr><mtd/><mtd/></mtr></mtable></mfenced>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "equationAlign",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "equationAlign"
                },
                "mml": "<mtable columnalign=\"right center left\" columnspacing=\"0px\"><mtr><mtd><mrow style=\"width:1.5ex\"/></mtd><mtd><mo>=</mo></mtd><mtd/></mtr><mtr><mtd/><mtd><mo>=</mo></mtd><mtd><mrow style=\"width:1.3ex\"/></mtd></mtr></mtable>"
            }, {
                "name": "content",
                "mml": "<mtable columnalign=\"right center left\" columnspacing=\"2px\"><mtr><mtd/><mtd><mo>=</mo></mtd><mtd/></mtr><mtr><mtd/><mtd><mo>=</mo></mtd><mtd/></mtr></mtable>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "over",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "over"
                },
                "mml": "<mstyle displaystyle=\"true\"><munderover><mrow/><mrow style=\"font-size:7px\"><mo> </mo></mrow><mrow style=\"font-size:7px\"/></munderover></mstyle>"
            }, {
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><mover><mrow/><mrow/></mover></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "under"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "under"
                },
                "mml": "<mstyle displaystyle=\"true\"><munderover><mrow/><mrow style=\"font-size:7px\"/><mrow style=\"font-size:7px\"><mo> </mo></mrow></munderover></mstyle>"
            }, {
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munder><mrow/><mrow/></munder></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "underover",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "underover"
                },
                "mml": "<mstyle displaystyle=\"true\"><munderover><mrow/><mrow style=\"font-size:7px\"/><mrow style=\"font-size:7px\"/></munderover></mstyle>"
            }, {
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munderover><mrow/><mrow/><mrow/></munderover></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "sumUnderover",
                "offset": "5"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munderover><mo>∑</mo><mrow/><mrow/></munderover></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "sumUnder",
                "offset": "4"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munder><mo>∑</mo><mrow/></munder></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "sumSubsuperscript",
                "offset": "4"
            },
            "childs": [{
                "name": "content",
                "mml": "<msubsup><mo>∑</mo><mrow/><mrow/></msubsup>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "sumSubscript",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<msub><mo>∑</mo><mrow/></msub>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "productUnderover",
                "offset": "5"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munderover><mo>∏</mo><mrow/><mrow/></munderover></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "productUnder",
                "offset": "4"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munder><mo>∏</mo><mrow/></munder></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "productSubsuperscript",
                "offset": "4"
            },
            "childs": [{
                "name": "content",
                "mml": "<msubsup><mo>∏</mo><mrow/><mrow/></msubsup>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "productSubscript",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<msub><mo>∏</mo><mrow/></msub>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigOpUnderover",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munderover><mo largeop=\"true\"/><mrow/><mrow/></munderover></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigOpUnder"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><munder><mo largeop=\"true\"/><mrow/></munder></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigOpSubsuperscript"
            },
            "childs": [{
                "name": "content",
                "mml": "<msubsup><maction actiontype=\"argument\"><mrow><mo largeop=\"true\"/></mrow></maction><mrow/><mrow/></msubsup>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigOpSubscript"
            },
            "childs": [{
                "name": "content",
                "mml": "<msub><maction actiontype=\"argument\"><mrow><mo largeop=\"true\"/></mrow></maction><mrow/></msub>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigCap"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo largeop=\"true\">∩</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigCup"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo largeop=\"true\">∪</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigSqCap"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo largeop=\"true\">⊓</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigSqCup"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo largeop=\"true\">⊔</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigProd"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo>∏</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigCoProd"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo>∐</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "bigSum"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo>∑</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "integralSubsuperscript",
                "offset": "4"
            },
            "childs": [{
                "name": "content",
                "mml": "<msubsup><mo>∫</mo><mrow/><mrow/></msubsup>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "integralSubscript",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<msub><mo>∫</mo><mrow/></msub>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "integralSubsuperscriptD",
                "offset": "5"
            },
            "childs": [{
                "name": "content",
                "mml": "<mrow><msubsup><mo>∫</mo><mrow/><mrow/></msubsup><maction actiontype=\"argument\"><mrow/></maction><mo>d</mo><maction actiontype=\"argument\"><mrow/></maction></mrow>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "integralSubscriptD",
                "offset": "4"
            },
            "childs": [{
                "name": "content",
                "mml": "<mrow><msub><mo>∫</mo><mrow/></msub><maction actiontype=\"argument\"><mrow/></maction><mo>d</mo><maction actiontype=\"argument\"><mrow/></maction></mrow>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "fracPartial",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><mfrac><mrow><mo>∂</mo><maction actiontype=\"argument\"><mrow/></maction></mrow><mrow><mo>∂</mo><maction actiontype=\"argument\"><mrow/></maction></mrow></mfrac></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "fracDiff",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<mstyle displaystyle=\"true\"><mfrac><mrow><mo>d</mo><maction actiontype=\"argument\"><mrow/></maction></mrow><mrow><mo>d</mo><maction actiontype=\"argument\"><mrow/></maction></mrow></mfrac></mstyle>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "limitToInfinity",
                "offset": "10"
            },
            "childs": [{
                "name": "content",
                "mml": "<munder><mi>lim</mi><mrow><maction actiontype=\"argument\"><mrow/></maction><mo>→</mo><mo>∞</mo></mrow></munder>"
            }, {
                "name": "contentRTL",
                "mml": "<munder><mi>lim</mi><mrow><maction actiontype=\"argument\"><mrow/></maction><mo>←</mo><mo>∞</mo></mrow></munder>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "limitUnder",
                "offset": "6"
            },
            "childs": [{
                "name": "content",
                "mml": "<munder><mi>lim</mi><mrow/></munder>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "curl",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<mrow><mo>∇</mo><mo>×</mo><maction actiontype=\"argument\"><mrow/></maction></mrow>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "divergence",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<mrow><mo>∇</mo><mo>·</mo><maction actiontype=\"argument\"><mrow/></maction></mrow>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "gradient",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mrow><mo>∇</mo><maction actiontype=\"argument\"><mrow/></maction></mrow>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "laplacian",
                "offset": "2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mrow><mo>∆</mo><maction actiontype=\"argument\"><mrow/></maction></mrow>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "differentialD"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo>d</mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "rightArrowWithOverScript"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mo>→</mo><mrow/></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "leftArrowWithOverScript"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mo>←</mo><mrow/></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "rightArrowWithUnderScript",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><munder><mo>→</mo><mrow/></munder></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "leftArrowWithUnderScript",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><munder><mo>←</mo><mrow/></munder></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "rightArrowWithUnderAndOverScript"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><munderover><mo>→</mo><mrow/><mrow/></munderover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "leftArrowWithUnderAndOverScript"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><munderover><mo>←</mo><mrow/><mrow/></munderover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "vectorAccent",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>⇀</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "rightArrowAccent",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>→</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "barAccent",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>¯</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "rightLeftArrowAccent",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>↔</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "hatAccent",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>^</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "tilde",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>~</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "diaeresis",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>‥</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "dotAccent",
                "offset": "3"
            },
            "childs": [{
                "name": "content",
                "mml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover><mrow/><mo>˙</mo></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "underScriptWithBrace",
                "offset": "2"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "underScriptWithBrace"
                },
                "mml": "<math><munder><munder><mrow><mspace width=\"0.5ex\"/><maction actiontype=\"argument\"><mrow/></maction><mspace width=\"0.5ex\"/></mrow><mo>⏟</mo></munder><mrow/></munder></math>"
            }, {
                "name": "content",
                "mml": "<math><munder><munder><mrow/><mo>⏟</mo></munder><mrow/></munder></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "overScriptWithBrace",
                "offset": "5"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "overScriptWithBrace"
                },
                "mml": "<math><mover><mover><mrow><mspace width=\"0.5ex\"/><maction actiontype=\"argument\"><mrow/></maction><mspace width=\"0.5ex\"/></mrow><mo>⏞</mo></mover><mrow/></mover></math>"
            }, {
                "name": "content",
                "mml": "<math><mover><mover><mrow/><mo>⏞</mo></mover><mrow/></mover></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "figureSpace"
            },
            "childs": [{
                "name": "content",
                "mml": "<mo> </mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "thinSpace"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "thinSpace"
                },
                "mml": "<math><maction actiontype=\"argument\"><mrow/></maction><mo> </mo><maction actiontype=\"argument\"><mrow/></maction></math>"
            }, {
                "name": "content",
                "mml": "<mo> </mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "digitSpace"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "digitSpace"
                },
                "mml": "<math><maction actiontype=\"argument\"><mrow/></maction><mo> </mo><maction actiontype=\"argument\"><mrow/></maction></math>"
            }, {
                "name": "content",
                "mml": "<mo> </mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "backSpace"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "backSpace"
                },
                "mml": "<math><maction actiontype=\"argument\"><mrow/></maction><mspace width=\"-0.2em\"/><maction actiontype=\"argument\"><mrow/></maction></math>"
            }, {
                "name": "content",
                "mml": "<mspace width=\"-0.2em\"/>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "thinnerSpace"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "thinnerSpace"
                },
                "mml": "<math><maction actiontype=\"argument\"><mrow/></maction><mo> </mo><maction actiontype=\"argument\"><mrow/></maction></math>"
            }, {
                "name": "content",
                "mml": "<mo> </mo>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseTop"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"top\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseBottom"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"bottom\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseLeft"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"left\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseRight"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"right\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseActuarial"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"actuarial\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseBox"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"box\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseRoundedBox"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"roundedbox\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseCircle"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"circle\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "negateOperator"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"updiagonalstrike\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "upDiagonalStrike"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"updiagonalstrike\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "horizontalStrike"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"horizontalstrike\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "downDiagonalStrike"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"downdiagonalstrike\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "verticalStrike"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"verticalstrike\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "upAndDownDiagonalStrike"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"downdiagonalstrike updiagonalstrike\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "horizontalAndVerticalStrike"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose notation=\"verticalstrike horizontalstrike\"><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseLongDivision"
            },
            "childs": [{
                "name": "content",
                "mml": "<menclose><mrow/></menclose>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "encloseLongDivision2"
            },
            "childs": [{
                "name": "content",
                "mml": "<mtable><mtr><mtd columnalign='right'><mrow/></mtd></mtr><mtr><mtd columnalign='right'><menclose notation='longdiv'><mrow/></menclose></mtd></mtr></mtable>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "numberE"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">e</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "imaginaryI"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">i</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "imaginaryJ"
            },
            "childs": [{
                "name": "content",
                "mml": "<mi mathvariant=\"normal\">j</mi>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "sinus",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "sinus"
                },
                "mml": "<mi>sin</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>sin</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "cosinus",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "cosinus"
                },
                "mml": "<mi>cos</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>cos</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "tangent",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tangent"
                },
                "mml": "<mi>tan</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>tan</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "cosecant",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "cosecant"
                },
                "mml": "<mi>csc</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>csc</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "secant",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "secant"
                },
                "mml": "<mi>sec</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>sec</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "cotangent",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "cotangent"
                },
                "mml": "<mi>cot</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>cot</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "arcsinus",
                "offset": "8"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "arcsinus"
                },
                "mml": "<msup><mi>sin</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup>"
            }, {
                "name": "content",
                "mml": "<math><msup><mi>sin</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "arccosinus",
                "offset": "8"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "arccosinus"
                },
                "mml": "<msup><mi>cos</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup>"
            }, {
                "name": "content",
                "mml": "<math><msup><mi>cos</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "arctangent",
                "offset": "8"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "arctangent"
                },
                "mml": "<msup><mi>tan</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup>"
            }, {
                "name": "content",
                "mml": "<math><msup><mi>tan</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "asin",
                "offset": "5"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "asin"
                },
                "mml": "<mi>asin</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>asin</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "acos",
                "offset": "5"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "acos"
                },
                "mml": "<mi>acos</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>acos</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "atan",
                "offset": "5"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "atan"
                },
                "mml": "<mi>atan</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>atan</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "round",
                "offset": "7"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "round"
                },
                "mml": "<mi>round</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>round</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "log",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "log"
                },
                "mml": "<mi>log</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>log</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "nlog",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "nlog"
                },
                "mml": "<msubsup><mi>log</mi><mrow/><mo> </mo></msubsup>"
            }, {
                "name": "content",
                "mml": "<math><msub><mi>log</mi><mrow/></msub><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "exp",
                "offset": "4"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "exp"
                },
                "mml": "<mi>exp</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>exp</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "naturalLog",
                "offset": "3"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "ln"
                },
                "mml": "<mi>ln</mi>"
            }, {
                "name": "content",
                "mml": "<math><mi>ln</mi><mrow/></math>"
            }]
        }, {
            "name": "action",
            "attrs": {
                "id": "binomialCoefficient"
            },
            "childs": [{
                "name": "content",
                "mml": "<math><mrow><mfrac linethickness=\"0\"><mrow/><mrow/></mfrac></mrow></math>"
            }]
        }]
    }, {
        "name": "toolbar",
        "childs": [{
            "name": "tab",
            "attrs": {
                "id": "general",
                "panel": "general"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab1_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab1_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab1_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab1_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "symbols",
                "panel": "symbols"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab2_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab2_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab2_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab2_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "arrows",
                "panel": "arrows"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab3_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab3_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab3_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab3_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "greek",
                "panel": "greek"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab4_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab4_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab4_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab4_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "matrices",
                "panel": "matrices"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab5_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab5_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab5_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab5_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "scriptsAndLayout",
                "panel": "scriptsAndLayout"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab6_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab6_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab6_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab6_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "bracketsAndAccents",
                "panel": "bracketsAndAccents"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab7_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab7_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab7_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab7_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "bigOps",
                "panel": "bigOps"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab8_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab8_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab8_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab8_white_rtl"
                }
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "calculus",
                "panel": "calculus"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "tab9_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "tab9_white"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab9_dark_rtl"
                }
            }, {
                "name": "iconRTL",
                "attrs": {
                    "src": "tab9_white_rtl"
                }
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "general"
            },
            "childs": [{
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "fraction"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bevelledFraction"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "squareRoot"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "nRoot"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "superscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "subscript"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "parenthesis"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "verticalBar"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "squareBracket"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "curlyBracket"
                    }
                }]
            }, {
            	"name": "section",
            	"childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "encloseLongDivision"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "encloseLongDivision2"
                    }
            	}]
            }, {
            	"name": "section",
            	"attrs": {
            		"layout": "horizontal",
            		"rows": "3"
            	},
            	"childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "hatAccent"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "vectorAccent"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "vectorAccent2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rightArrowAccent"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "rightArrowAccent2"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "layout": "horizontal",
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "≥"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "geq"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "≤"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "leq"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∈"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "isin"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∉"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "notin3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊆"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "subsetEqual3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊂"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "subset"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∪"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "cup"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∩"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "cap"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∁"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "comp"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊊"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "trueIn"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊈"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "noIn"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊄"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "noIn3"
                        }
                    }]
                }]
            }, {
            	"name": "section",
            	"attrs": {
            		"layout": "horizontal",
            		"rows": "3"
            	},
            	"childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "∠"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "ang3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∥"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "parallel3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊥"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "bottom3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "▱"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "parallelogram"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∵"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "because"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∴"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "therefore"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "∅"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "emptyset"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∞"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "infinity"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "numberPi"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "numberPi"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "+"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "plus"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "×"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "times"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "-"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "minus"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "/"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "slash"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "±"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "plusminus"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "÷"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "div"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "copy",
                        "description": "copyDescription"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "copy"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "cut",
                        "description": "cutDescription"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "cut"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "paste",
                        "description": "pasteDescription"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "paste"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "undo"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "undo"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "redo"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "redo"
                        }
                    }]
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "symbols",
                "rowsPerSection": "3"
            },
            "childs": [{
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "negateOperator"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "+"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "plus3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "-"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "minus3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "±"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "plusminus3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "×"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "times3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "÷"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "div3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "*"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "asterisk3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "·"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "middot3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "/"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "slash3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∘"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "smallcircle3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "\\"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "backslash3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∖"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "setminus3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∓"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "minusplus3"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "numberPi"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "numberPi3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∞"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "infinity3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∅"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "emptyset3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∂"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "partial3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∆"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "increment3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∇"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "nabla3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "°"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "degree3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "apos3"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "aposApos"
                    }
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "‵"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "backprime"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "="
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "equal3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∼"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "sim3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "≃"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "simeq3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "≡"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "congruent3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "≈"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "approx3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "≅"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "tildeFullEqual3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "≠"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "ne3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "≢"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "notCongruent3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "≁"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "notTilde3"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": ">"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "greater3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "≥"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "geq3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⩾"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "geqslant3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "<"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "less3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "≤"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "leq3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⩽"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "leqslant3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "⪇"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "lne3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⪈"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "gneq3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "≪"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "mlt3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "≫"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "mgt3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∝"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "propto3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "≺"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "precedes"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "≻"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "follows"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊲"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "lftSubGroup"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊳"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rghtSubGroup"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "layout": "horizontal"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "∈"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "in3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∋"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "ni3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∪"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "cup3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∩"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "cap3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊂"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "subset3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊃"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "supset3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [
                    {
	                    "name": "button",
	                    "attrs": {
	                        "content": "∁"
	                    },
	                    "childs": [{
	                        "name": "icon",
	                        "attrs": {
	                            "src": "comp"
	                        }
	                    }]
	                }, {
	                    "name": "button",
	                    "attrs": {
	                        "content": "⊊"
	                    },
	                    "childs": [{
	                        "name": "icon",
	                        "attrs": {
	                            "src": "trueIn"
	                        }
	                    }]
	                }, {
	                    "name": "button",
	                    "attrs": {
	                        "content": "⊋"
	                    },
	                    "childs": [{
	                        "name": "icon",
	                        "attrs": {
	                            "src": "trueIn2"
	                        }
	                    }]
	                }, {
	                    "name": "button",
	                    "attrs": {
	                        "content": "⊈"
	                    },
	                    "childs": [{
	                        "name": "icon",
	                        "attrs": {
	                            "src": "noIn"
	                        }
	                    }]
	                }, {
	                    "name": "button",
	                    "attrs": {
	                        "content": "⊉"
	                    },
	                    "childs": [{
	                        "name": "icon",
	                        "attrs": {
	                            "src": "noIn2"
	                        }
	                    }]
	                }, {
	                    "name": "button",
	                    "attrs": {
	                        "content": "⊄"
	                    },
	                    "childs": [{
	                        "name": "icon",
	                        "attrs": {
	                            "src": "noIn3"
	                        }
	                    }]
	                }, {
	                    "name": "button",
	                    "attrs": {
	                        "content": "⊅"
	                    },
	                    "childs": [{
	                        "name": "icon",
	                        "attrs": {
	                            "src": "noIn4"
	                        }
	                    }]
	                }, {
                        "name": "button",
                        "attrs": {
                            "content": "∉"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "notin3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∌"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "notni3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊆"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "subsetEqual3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊇"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "supersetEqual3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊏"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "sqsub3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊐"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "sqsupset3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊑"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "sqsubseteq3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊒"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "squareSupersetEqual3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊓"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "sqcap3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊔"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "squareUnion3"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "layout": "horizontal"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "∧"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "and3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∨"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "or3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "¬"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "not3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∀"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "forall3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∃"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "exists3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∄"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "notExists3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "∴"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "therefore"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∵"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "because"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∴",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "there4"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∵",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "becaus"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "∠"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "ang3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∥"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "parallel3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊥"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "bottom3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "∦"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "nparallel3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∡"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "measuredangle3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∢"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "angsph3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⋄"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "diamond"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "□"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "square3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "△"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "bigtriangleup3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "○"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "cir3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "▱"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "parallelogram"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "⊕"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "oplus3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊗"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "otimes3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⊙"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "odot"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "⊝"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "ominus"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⊛"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "ostar"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⨸"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "odivide"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∙"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "bullet"
                            }
                        }]
                    }]
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "arrows",
                "rowsPerSection": "3"
            },
            "childs": [{
                "name": "section",
                "attrs": {
                    "layout": "horizontal"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "←"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "leftarrow"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "→"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "rightarrow"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "↔"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "leftrightarrow"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⇐"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "DoubleLeftArrow"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⇒"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "DoubleRightArrow"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⇔"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "DoubleLeftRightArrow"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "↤"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "leftTeeArrow"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "↦"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "map"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⇌"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "rlhar"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "↗"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "nearr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↘"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "searr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↩"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "larrhk"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↪"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "hookrightarrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↖"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "nwarr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↙"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "swarrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↼"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "lharu"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇀"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rharu"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↑"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "uparrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↓"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "downArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↕"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "upDownArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇑"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "doubleUpArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇓"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "doubleDownArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇕"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "doubleUpDownArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⥭"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rghtEquilib"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⥪"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "lftEquilib"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↵"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "CR"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↕",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "varr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇑",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "UpArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇓",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "DownArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇕",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "UpDownArrow"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇁",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rhard"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "↽",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "lhard"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇋",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "lrhar"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇌",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rlhar"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇄",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rlarr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇆",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "lrarr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇵",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "duarr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⇅",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "udarr"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⥯",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "duhar"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⥮",
                            "enabled": "false"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "udhar"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "⋮"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "vellip"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "…"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "hellip"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⋯"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "ctdot"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⋰"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "utdot"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⋱"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "dtdot"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "2"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "rightArrowWithOverScript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "leftArrowWithOverScript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rightArrowWithUnderScript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "leftArrowWithUnderScript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rightArrowWithUnderAndOverScript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "leftArrowWithUnderAndOverScript"
                    }
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "2"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "vectorAccent"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rightArrowAccent"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rightLeftArrowAccent"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "barAccent"
                    }
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "greek",
                "rowsPerSection": "3"
            },
            "childs": [{
                "name": "section",
                "attrs": {
                    "layout": "horizontal"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "α"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "alpha"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "β"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "beta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "γ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "gamma"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "δ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "delta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ε"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "epsilon"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ζ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "zeta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "η"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "eta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "θ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "theta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ϑ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "vartheta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ι"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "iota"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "κ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "kappa"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "λ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "lambda"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "μ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "mu"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ν"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "nu"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ξ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "xi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ο"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "omicron"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "π"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "pi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ϖ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "varPiOld"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ρ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "rho"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ς"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "sigmav"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "σ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "sigma"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "τ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "tau"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "υ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "upsilon"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "φ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "phi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ϕ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "varphi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "χ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "chi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ψ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "psi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "ω"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "omega"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "layout": "horizontal"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "Α"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Alpha"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Β"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Beta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Γ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Gamma"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Δ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Delta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ε"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Epsilon"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ζ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Zeta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Η"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Eta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Θ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Theta"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ι"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Iota"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Κ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Kappa"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Λ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Lambda"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Μ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Mu"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ν"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Nu"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ξ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Xi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ο"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Omicron"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Π"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Pi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ρ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Rho"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Σ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Sigma"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Τ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Tau"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Υ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Upsilon"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Φ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Phi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Χ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Chi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ψ"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Psi"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "Ω"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "Omega"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "naturals"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "naturals3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rationals"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "rationals3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "reals"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "reals3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "integers"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "integers3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "complexes"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "complexes3"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "primes"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "primes3"
                        }
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "ℑ"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "ifr3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "ℜ"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "realpart3"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "ell"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "Ell"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "ℵ"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "Aleph"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "℘"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "Weierstrass"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "ℱ"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "Fourier"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "ℒ"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "Laplace"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "zTransform"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "zTransform"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "arabicIndicNumbers"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "arabicIndicNumbers"
                        },
                        "mml": "<mn>٤٦</mn>"
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "easternArabicIndicNumbers"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "easternArabicIndicNumbers"
                        },
                        "mml": "<mn>۴۶</mn>"
                    }]
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "matrices"
            },
            "childs": [{
                "name": "section",
                "childs": [{
                    "name": "matrixButton",
                    "attrs": {
                        "action": "table"
                    }
                }, {
                    "name": "matrixButton",
                    "attrs": {
                        "action": "squareTable"
                    }
                }, {
                    "name": "matrixButton",
                    "attrs": {
                        "action": "verticalLineTable"
                    }
                }, {
                    "name": "matrixButton",
                    "attrs": {
                        "action": "parenthesisTable"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "column"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "row"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "squareColumn"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "squareRow"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "parenthesisColumn"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "parenthesisRow"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "lCurlyColumn"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rCurlyColumn"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "piecewiseFunction"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "equationAlign"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "⋮"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "vellip2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⋯"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "ctdot2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⋰"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "utdot2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "⋱"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "dtdot2"
                        }
                    }]
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "scriptsAndLayout"
            },
            "childs": [{
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "fraction"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bevelledFraction"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "smallFraction"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "smallBevelledFraction"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "squareRoot"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "nRoot"
                    }
                }]
            }, {
                "name": "section",
                "attrs": {
                    "layout": "horizontal"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "superscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "subsuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "subscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "leftSuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "leftSubscriptAndSuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "leftSubscript"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "over"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "underover"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "under"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "underScriptWithBrace"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "overScriptWithBrace"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "bigOpUnderover"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bigOpUnder"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bigOpSubsuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bigOpSubscript"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "digitSpace"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "backSpace"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "thinnerSpace"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "thinSpace",
                        "enabled": "false"
                    }
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "bracketsAndAccents"
            },
            "childs": [{
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "parenthesis"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "squareBracket"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "verticalBar"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "doubleVerticalBar"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "angleBrackets"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "curlyBracket"
                    }
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "action": "floor"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "ceiling"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "angleBracketsWithBar"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "upCurlyBracket"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "downCurlyBracket"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "upParenthesis"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "downParenthesis"
                    }
                }]
            }, {
                "name": "section",
                "attrs": {
                    "layout": "horizontal",
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "vectorAccent"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "vectorAccent2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rightArrowAccent"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "rightArrowAccent2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "rightLeftArrowAccent"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "rightLeftArrowAccent2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "barAccent"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "barAccent2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "hatAccent"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "tilde"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "diaeresis"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "dotAccent"
                    }
                }]
            }, {
                "name": "disabled",
                "childs": [{
                    "name": "section",
                    "attrs": {
                        "rows": "3"
                    },
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "("
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "leftParenthesis"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": ")"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rightParenthesis"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "["
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "leftSquareBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "]"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rightSquareBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "{"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "leftCurlyBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "}"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rightCurlyBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⌈"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "leftCeiling"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⌊"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "leftFloor"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⌉"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rightCeiling"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⌋"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rightFloor"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "|"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "bar"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⟩"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "rightAngleBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⟨"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "leftAngleBracket"
                            }
                        }]
                    }]
                }, {
                    "name": "section",
                    "attrs": {
                        "rows": "3"
                    },
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "⏜"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "topParenthesis"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⏝"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "bottomParenthesis"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⎴"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "topSquareBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⎵"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "bottomSquareBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⏞"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "topCurlyBracket"
                            }
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "⏟"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "bottomCurlyBracket"
                            }
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "2"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "encloseTop"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "encloseBottom"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "encloseLeft"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "encloseRight"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "encloseBox"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "encloseCircle"
                    }
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "action": "encloseActuarial"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "encloseRoundedBox"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "2"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "upDiagonalStrike"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "downDiagonalStrike"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "horizontalStrike"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "upAndDownDiagonalStrike"
                    }
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "action": "verticalStrike"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "horizontalAndVerticalStrike"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "encloseLongDivision"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "encloseLongDivision2"
                        }
                    }]
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "bigOps"
            },
            "childs": [{
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "sumUnderover"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "sumUnder"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "sumSubsuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "sumSubscript"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "productUnderover"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "productUnder"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "productSubsuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "productSubscript"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "bigOpUnderover"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bigOpUnder"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bigOpSubsuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bigOpSubscript"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "bigCap"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "bigCup"
                    }
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "action": "bigSqCap"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "bigSqCup"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "bigProd"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "bigCoProd"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "bigSum"
                        }
                    }]
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "calculus"
            },
            "childs": [{
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "integralSubsuperscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "integralSubscript"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "integralSubsuperscriptD"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "integralSubscriptD"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "differentialD"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∂"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "partial2"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "fracDiff"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "fracPartial"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "limitToInfinity"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "limitUnder"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "curl"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "divergence"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "gradient"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "laplacian"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "content": "∫"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "integral"
                        },
                        "mml": "<mo style=\"font-size:24px\">∫</mo>"
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∮"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "integralContour"
                        },
                        "mml": "<mo style=\"font-size:24px\">∮</mo>"
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∬"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "integralDouble"
                        },
                        "mml": "<mo style=\"font-size:24px\">∬</mo>"
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "content": "∯"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "integralDoubleContour"
                        },
                        "mml": "<mo style=\"font-size:24px\">∯</mo>"
                    }]
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "content": "∭"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "iiint"
                            },
                            "mml": "<mo style=\"font-size:24px\">∭</mo>"
                        }]
                    }, {
                        "name": "button",
                        "attrs": {
                            "content": "∰"
                        },
                        "childs": [{
                            "name": "icon",
                            "attrs": {
                                "src": "cconint"
                            },
                            "mml": "<mo style=\"font-size:24px\">∰</mo>"
                        }]
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "layout": "horizontal",
                    "rows": "2"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "sinus"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "cosinus"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "tangent"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "log"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "nlog"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "naturalLog"
                    }
                }, {
                    "name": "extra",
                    "childs": [{
                        "name": "button",
                        "attrs": {
                            "action": "cosecant"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "secant"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "cotangent"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "arcsinus"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "arccosinus"
                        }
                    }, {
                        "name": "button",
                        "attrs": {
                            "action": "arctangent"
                        }
                    }]
                }]
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "functions"
            },
            "childs": [{
                "name": "section"
            }]
        }, {
            "name": "tab",
            "attrs": {
                "enabled": "false",
                "id": "quizzes",
                "panel": "quizzes"
            }
        }, {
            "name": "panel",
            "attrs": {
                "id": "quizzes"
            },
            "childs": [{
                "name": "section",
                "attrs": {
                    "rows": "2"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "parenthesisTable"
                    }
                }]
            }, {
                "name": "section",
                "attrs": {
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "numberE"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "imaginaryI"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "imaginaryJ"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "binomialCoefficient"
                    }
                }]
            }, {
                "name": "section",
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "asin"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "acos"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "atan"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "exp"
                    }
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "round"
                    }
                }]
            }]
        }, {
            "name": "tab",
            "attrs": {
                "id": "contextual",
                "panel": "contextual"
            },
            "childs": [{
                "name": "icon",
                "attrs": {
                    "src": "properties_dark"
                }
            }, {
                "name": "icon",
                "attrs": {
                    "src": "properties_white"
                }
            }]
        }, {
            "name": "panel",
            "attrs": {
                "id": "contextual"
            },
            "childs": [{
                "name": "section",
                "attrs": {
                    "context": "multiline",
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "alignLeft"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "align_left"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "alignCenter"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "align_center"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "alignRight"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "align_right"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "context": "matrix",
                    "layout": "horizontal",
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "appendRow"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "append_row"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "prependRow"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "prepend_row"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "appendColumn"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "append_column"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "prependColumn"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "prepend_column"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "removeRow"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "remove_row"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "removeColumn"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "remove_column"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "context": "matrix",
                    "layout": "horizontal",
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "addFrame"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "frame_solid"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "removeFrame"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "frame_none"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "matrixSolidLine"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "matrix_solid_line"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "addLineBelow"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "line_below"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "addLineRight"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "line_right"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "matrixDashLine"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "matrix_dash_line"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "removeLineBelow"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "remove_line_below"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "removeLineRight"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "remove_line_right"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "context": "matrix",
                    "layout": "horizontal",
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "alignLeft"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "align_left"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "context": "matrix",
                    "layout": "horizontal",
                    "rows": "3"
                },
                "childs": [{
                    "name": "button",
                    "attrs": {
                        "action": "equalRowHeight"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "equal_row_height"
                        }
                    }]
                }, {
                    "name": "button",
                    "attrs": {
                        "action": "equalColWidth"
                    },
                    "childs": [{
                        "name": "icon",
                        "attrs": {
                            "src": "equal_col_width"
                        }
                    }]
                }]
            }, {
                "name": "section",
                "attrs": {
                    "context": "matrix",
                    "rows": "3"
                }
            }]
        }]
    }, {
        "name": "images",
        "childs": [{
            "name": "image",
            "attrs": {
                "bounds": "0,0,40,40",
                "filePath": "icons/icons2.png",
                "src": "plus"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "44,0,84,40",
                "filePath": "icons/icons2.png",
                "src": "minus"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "88,0,128,40",
                "filePath": "icons/icons2.png",
                "src": "times"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "130,0,170,40",
                "filePath": "icons/icons2.png",
                "src": "div"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "173,0,213,40",
                "filePath": "icons/icons2.png",
                "src": "middot3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "216,0,256,40",
                "filePath": "icons/icons2.png",
                "src": "fraction"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "258,0,298,40",
                "filePath": "icons/icons2.png",
                "src": "square"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "300,0,340,40",
                "filePath": "icons/icons2.png",
                "src": "cube"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "344,0,384,40",
                "filePath": "icons/icons2.png",
                "src": "verticalBar"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "387,0,427,40",
                "filePath": "icons/icons2.png",
                "src": "numberPi"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "430,0,470,40",
                "filePath": "icons/icons2.png",
                "src": "smallcircle3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "474,0,514,40",
                "filePath": "icons/icons2.png",
                "src": "approx3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "517,0,557,40",
                "filePath": "icons/icons2.png",
                "src": "ne3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "560,0,600,40",
                "filePath": "icons/icons2.png",
                "src": "less3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "0,41,40,81",
                "filePath": "icons/icons2.png",
                "src": "leqslant3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "44,41,84,81",
                "filePath": "icons/icons2.png",
                "src": "geqslant3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "86,42,126,82",
                "filePath": "icons/icons2.png",
                "src": "plusminus"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "130,42,170,82",
                "filePath": "icons/icons2.png",
                "src": "squareRoot"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "173,42,213,82",
                "filePath": "icons/icons2.png",
                "src": "threeRoot"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "216,42,256,82",
                "filePath": "icons/icons2.png",
                "src": "superscript"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "258,42,298,82",
                "filePath": "icons/icons2.png",
                "src": "subscript"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "300,42,340,82",
                "filePath": "icons/icons2.png",
                "src": "because"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "344,42,384,82",
                "filePath": "icons/icons2.png",
                "src": "therefore"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "387,42,427,82",
                "filePath": "icons/icons2.png",
                "src": "ang3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "430,42,470,82",
                "filePath": "icons/icons2.png",
                "src": "parallel3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "474,42,514,82",
                "filePath": "icons/icons2.png",
                "src": "bottom3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "517,42,557,82",
                "filePath": "icons/icons2.png",
                "src": "tildeFullEqual3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "560,42,600,82",
                "filePath": "icons/icons2.png",
                "src": "greater3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "0,85,40,125",
                "filePath": "icons/icons2.png",
                "src": "sim3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "44,85,84,125",
                "filePath": "icons/icons2.png",
                "src": "bigtriangleup3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "86,85,126,125",
                "filePath": "icons/icons2.png",
                "src": "parallelogram"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "130,85,170,125",
                "filePath": "icons/icons2.png",
                "src": "odot"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "173,85,213,125",
                "filePath": "icons/icons2.png",
                "src": "lCurlyColumn"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "216,85,256,125",
                "filePath": "icons/icons2.png",
                "src": "CubicEquations"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "259,85,299,125",
                "filePath": "icons/icons2.png",
                "src": "hatAccent"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "300,85,340,125",
                "filePath": "icons/icons2.png",
                "src": "isin"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "344,85,384,125",
                "filePath": "icons/icons2.png",
                "src": "notin3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "387,85,427,125",
                "filePath": "icons/icons2.png",
                "src": "subsetEqual3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "430,85,470,125",
                "filePath": "icons/icons2.png",
                "src": "supersetEqual3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "474,85,514,125",
                "filePath": "icons/icons2.png",
                "src": "nlog"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "517,85,557,125",
                "filePath": "icons/icons2.png",
                "src": "infinity"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "560,85,600,125",
                "filePath": "icons/icons2.png",
                "src": "cup3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "0,128,40,168",
                "filePath": "icons/icons2.png",
                "src": "cap3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "44,128,84,168",
                "filePath": "icons/icons2.png",
                "src": "integralSubsuperscript"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "86,128,126,168",
                "filePath": "icons/icons2.png",
                "src": "vectorAccent"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "130,128,170,168",
                "filePath": "icons/icons2.png",
                "src": "sumUnderover"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "173,128,213,168",
                "filePath": "icons/icons2.png",
                "src": "varphi"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "216,128,256,168",
                "filePath": "icons/icons2.png",
                "src": "alpha"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "258,128,298,168",
                "filePath": "icons/icons2.png",
                "src": "beta"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "300,128,340,168",
                "filePath": "icons/icons2.png",
                "src": "gamma"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "344,128,384,168",
                "filePath": "icons/icons2.png",
                "src": "rho"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "387,128,427,168",
                "filePath": "icons/icons2.png",
                "src": "Omega"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "430,128,470,168",
                "filePath": "icons/icons2.png",
                "src": "theta"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "474,128,514,168",
                "filePath": "icons/icons2.png",
                "src": "exists3"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "517,128,557,168",
                "filePath": "icons/icons2.png",
                "src": "eta"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "560,128,600,168",
                "filePath": "icons/icons2.png",
                "src": "lambda"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "0,172,40,212",
                "filePath": "icons/icons2.png",
                "src": "omega"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "44,172,84,212",
                "filePath": "icons/icons2.png",
                "src": "mu"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "86,172,126,212",
                "filePath": "icons/icons2.png",
                "src": "psi"
            }
        }, {
            "name": "image",
            "attrs": {
                "bounds": "130,172,170,212",
                "filePath": "icons/icons2.png",
                "src": "ctdot"
            }
        }]
    }]
};
com.wiris.system.ResourceLoader.charactersDefinition = '<characters><char c="65535" t="b"/><char c="0" t="b"/><char c="32" t="b"/><char c="9115" t="b"/><char c="9116" t="b"/><char c="9117" t="b"/><char c="9118" t="b"/><char c="9119" t="b"/><char c="9120" t="b"/><char c="9121" t="b"/><char c="9122" t="b"/><char c="9123" t="b"/><char c="9124" t="b"/><char c="9125" t="b"/><char c="9126" t="b"/><char c="61442" t="b"/><char c="62466" t="b"/><char c="62467" t="b"/><char c="65535" t="s"/><char c="32" t="s"/><char c="9115" t="s"/><char c="9116" t="s"/><char c="9117" t="s"/><char c="9118" t="s"/><char c="9119" t="s"/><char c="9120" t="s"/><char c="9121" t="s"/><char c="9122" t="s"/><char c="9123" t="s"/><char c="9124" t="s"/><char c="9125" t="s"/><char c="9126" t="s"/><char c="9127" t="s"/><char c="9128" t="s"/><char c="9129" t="s"/><char c="9130" t="s"/><char c="9131" t="s"/><char c="9132" t="s"/><char c="9133" t="s"/><char c="9134" t="s"/><char c="9168" t="s"/><char c="61442" t="s"/><char c="62464" t="s"/><char c="62465" t="s"/><char c="62466" t="s"/><char c="62467" t="s"/><char c="65535" t="m"/><char c="0" t="m"/><char c="32" t="m"/><char c="39" t="m"/><char c="43" t="m"/><char c="45" t="m"/><char c="46" t="m"/><char c="47" t="m"/><char c="60" t="m"/><char c="61" t="m"/><char c="62" t="m"/><char c="160" t="m"/><char c="172" t="m"/><char c="176" t="m"/><char c="177" t="m"/><char c="183" t="m"/><char c="215" t="m"/><char c="247" t="m"/><char c="437" t="m"/><char c="729" t="m"/><char c="960" t="m"/><char c="4096" t="m"/><char c="8201" t="m"/><char c="8229" t="m"/><char c="8230" t="m"/><char c="8245" t="m"/><char c="8450" t="m"/><char c="8465" t="m"/><char c="8466" t="m"/><char c="8467" t="m"/><char c="8469" t="m"/><char c="8472" t="m"/><char c="8473" t="m"/><char c="8474" t="m"/><char c="8476" t="m"/><char c="8477" t="m"/><char c="8484" t="m"/><char c="8497" t="m"/><char c="8501" t="m"/><char c="8592" t="m"/><char c="8593" t="m"/><char c="8594" t="m"/><char c="8595" t="m"/><char c="8596" t="m"/><char c="8597" t="m"/><char c="8612" t="m"/><char c="8614" t="m"/><char c="8617" t="m"/><char c="8618" t="m"/><char c="8629" t="m"/><char c="8636" t="m"/><char c="8640" t="m"/><char c="8656" t="m"/><char c="8657" t="m"/><char c="8658" t="m"/><char c="8659" t="m"/><char c="8660" t="m"/><char c="8661" t="m"/><char c="8704" t="m"/><char c="8706" t="m"/><char c="8707" t="m"/><char c="8708" t="m"/><char c="8709" t="m"/><char c="8710" t="m"/><char c="8711" t="m"/><char c="8712" t="m"/><char c="8713" t="m"/><char c="8715" t="m"/><char c="8716" t="m"/><char c="8719" t="m"/><char c="8720" t="m"/><char c="8721" t="m"/><char c="8722" t="m"/><char c="8723" t="m"/><char c="8726" t="m"/><char c="8727" t="m"/><char c="8728" t="m"/><char c="8729" t="m"/><char c="8733" t="m"/><char c="8734" t="m"/><char c="8736" t="m"/><char c="8737" t="m"/><char c="8738" t="m"/><char c="8741" t="m"/><char c="8742" t="m"/><char c="8743" t="m"/><char c="8744" t="m"/><char c="8745" t="m"/><char c="8746" t="m"/><char c="8747" t="m"/><char c="8748" t="m"/><char c="8749" t="m"/><char c="8750" t="m"/><char c="8751" t="m"/><char c="8752" t="m"/><char c="8756" t="m"/><char c="8757" t="m"/><char c="8764" t="m"/><char c="8765" t="m"/><char c="8769" t="m"/><char c="8771" t="m"/><char c="8773" t="m"/><char c="8776" t="m"/><char c="8800" t="m"/><char c="8801" t="m"/><char c="8802" t="m"/><char c="8804" t="m"/><char c="8805" t="m"/><char c="8810" t="m"/><char c="8811" t="m"/><char c="8826" t="m"/><char c="8827" t="m"/><char c="8834" t="m"/><char c="8835" t="m"/><char c="8838" t="m"/><char c="8839" t="m"/><char c="8847" t="m"/><char c="8848" t="m"/><char c="8849" t="m"/><char c="8850" t="m"/><char c="8851" t="m"/><char c="8852" t="m"/><char c="8853" t="m"/><char c="8855" t="m"/><char c="8857" t="m"/><char c="8859" t="m"/><char c="8861" t="m"/><char c="8869" t="m"/><char c="8882" t="m"/><char c="8883" t="m"/><char c="8900" t="m"/><char c="8909" t="m"/><char c="8942" t="m"/><char c="8943" t="m"/><char c="8944" t="m"/><char c="8945" t="m"/><char c="9135" t="m"/><char c="9633" t="m"/><char c="9649" t="m"/><char c="9651" t="m"/><char c="9675" t="m"/><char c="10602" t="m"/><char c="10605" t="m"/><char c="10808" t="m"/><char c="10877" t="m"/><char c="10878" t="m"/><char c="10887" t="m"/><char c="10888" t="m"/><char c="12288" t="m"/><char c="12289" t="m"/><char c="57358" t="m"/><char c="61442" t="m"/><char c="65535" t="r"/><char c="32" t="r"/><char c="8706" t="r"/><char c="8707" t="r"/><char c="8708" t="r"/><char c="8721" t="r"/><char c="8726" t="r"/><char c="8733" t="r"/><char c="8736" t="r"/><char c="8737" t="r"/><char c="8738" t="r"/><char c="8742" t="r"/><char c="8747" t="r"/><char c="8748" t="r"/><char c="8749" t="r"/><char c="8750" t="r"/><char c="8751" t="r"/><char c="8752" t="r"/><char c="8769" t="r"/><char c="8773" t="r"/><char c="8776" t="r"/><char c="8800" t="r"/><char c="8802" t="r"/><char c="10887" t="r"/><char c="10888" t="r"/><char c="61442" t="r"/><char c="65535" t="h"/><char c="9135" t="h"/><char c="61442" t="h"/><char c="61443" t="h"/><char c="61952" t="h"/><char c="61953" t="h"/><char c="61954" t="h"/><char c="61955" t="h"/><char c="61956" t="h"/><char c="61957" t="h"/><char c="61958" t="h"/><char c="61959" t="h"/><char c="61960" t="h"/><char c="61961" t="h"/><char c="61962" t="h"/><char c="61963" t="h"/><char c="61964" t="h"/><char c="61965" t="h"/><char c="61966" t="h"/><char c="62208" t="h"/><char c="62209" t="h"/><char c="62210" t="h"/><char c="62211" t="h"/><char c="62212" t="h"/><char c="62213" t="h"/><char c="62214" t="h"/><char c="62215" t="h"/><char c="62216" t="h"/><char c="62217" t="h"/><char c="62218" t="h"/><char c="62219" t="h"/><char c="62220" t="h"/><char c="62221" t="h"/><char c="65535" t="a"/><char c="0" t="a"/><char c="32" t="a"/><char c="97" t="a"/><char c="102" t="a"/><char c="61442" t="a"/></characters>';
com.wiris.system.ResourceLoader.fontAdjust = '<fontAdjustment><font name="Arial"><property name="xHeight" value="0.48" selector="js@ios" /><glyph code="*" selector="js@windows@ie" margin="0,0.1,0,0" /><glyph char="f" selector="js" margin="0,0,0.125,0" /><glyph from="1536" to="1791" selector="js@*@firefox" margin="-0.05,0,0.15,0" /><glyph from="1536" to="1791" selector="js@windows@ie" margin="-0.05,0,0.15,0" /></font><font name="Times New Roman"><property name="xHeight" value="0.48" selector="js" /><property name="xHeight" value="0.55" selector="js@ios" /><property name="xHeight" value="0.43" selector="js@android" /><glyph code="*" selector="js@windows@ie" margin="0,0.1,0,0" /><glyph char="f" selector="js" margin="0,0,0.15,0" /><glyph from="1536" to="1791" selector="js@*@firefox" margin="-0.05,0,0.15,0" /><glyph from="1536" to="1791" selector="js@windows@ie" margin="-0.05,0,0.15,0" /></font><font name="Courier New"><glyph code="*" selector="js@windows@ie" margin="0,0.1,0,0" /><glyph from="1536" to="1791" selector="js@windows@ie" margin="-0.05,0,0.15,0" /></font><font name="Tahoma"><property name="xHeight" value="0.45" selector="js@ios" /><property name="italicExtraSpace" value="0.15" selector="js" /><property name="italicExtraSpace" value="0" selector="js@android" /><glyph char="f" selector="js" margin="0,0,0.125,0" /><glyph char="f" selector="js@ios" margin="0,0,-0.125,0" /></font><font name="Verdana"><property name="xHeight" value="0.45" selector="js@ios" /><glyph code="*" selector="js" margin="0,0.1,0,0" /><glyph code="*" selector="js@windows@ie9" margin="0,-0.1,0,0" /><glyph code="*" selector="js@windows@ie10" margin="0,-0.1,0,0" /><glyph code="*" selector="js@android" margin="0,-0.1,0,0" /><glyph code="*" selector="js@ios" margin="0,-0.1,0,0" /><glyph char="f" selector="js" margin="0,0,0.115,0" /><glyph from="1536" to="1791" selector="js@*@firefox" margin="-0.05,0,0.15,0" /><glyph from="1536" to="1791" selector="js@windows@ie" margin="-0.05,0,0.15,0" /></font></fontAdjustment>';
com.wiris.system.ResourceLoader.translations['zh'] = '<translation><t k="appendRow" v="在下方插入行"/><t k="Rows" v="行"/><t k="divergence" v="散度"/><t k="encloseRight" v="右包围"/><t k="bold" v="粗体"/><t k="atan" v="反正切"/><t k="prependColumn" v="在左侧插入列"/><t k="zTransform" v="Z transform"/><t k="squareTable" v="带方括号的 3 行 3 列矩阵"/><t k="underover" v="元素上下方"/><t k="integralSubsuperscriptD" v="带微分的定积分"/><t k="setColumnSpacing" v="Right column spacing"/><t k="cotangent" v="余切"/><t k="sinus" v="正弦"/><t k="encloseLeft" v="左包围"/><t k="log" v="Logarithm"/><t k="fracPartial" v="偏导数"/><t k="verticalBar" v="竖线"/><t k="arabicIndicNumbers" v="Arabic-Indic numerals"/><t k="contextual" v="Contextual tab"/><t k="parenthesis" v="括号"/><t k="Color" v="Color"/><t k="bracketsAndAccents" v="修饰符选项卡"/><t k="addLineBelow" v="Insert line below"/><t k="naturals" v="双线大写 N"/><t k="italic" v="斜体"/><t k="matrixSolidLine" v="Activate solid lines"/><t k="sumSubsuperscript" v="带下标和上标的求和符号"/><t k="table" v="3 行 3 列表格"/><t k="quizzes" v="Quizzes tab"/><t k="reals" v="双线大写 R"/><t k="integralSubscript" v="带下标的积分"/><t k="alignRowsBaseline" v="Align rows to baseline"/><t k="binomialCoefficient" v="Binomial coefficient"/><t k="forceLigature" v="Arabic ligature"/><t k="fraction" v="分数（Ctrl + /）"/><t k="differentialD" v="微分"/><t k="lCurlyColumn" v="带左花括号的 3 行列"/><t k="encloseCircle" v="圆圈包围"/><t k="addLineRight" v="Insert right line"/><t k="aposApos" v="双撇号"/><t k="&#10607;" v="左侧向下右侧向上的带倒勾双鱼叉符号"/><t k="&#10606;" v="左侧向上右侧向下的带倒钩双鱼叉符号"/><t k="&#10605;" v="Rightwards harpoon with barb down below long dash"/><t k="&#10602;" v="Leftwards harpoon with barb up above long dash"/><t k="prependRow" v="在上方插入行"/><t k="horizontalAndVerticalStrike" v="十字划线"/><t k="setRowSpacing" v="Below row spacing"/><t k="tilde" v="波浪号"/><t k="setFontFamily" v="字体系列"/><t k="laplacian" v="拉普拉斯算子"/><t k="complexes" v="双线大写 C"/><t k="curlyBracket" v="花括号"/><t k="integers" v="双线大写 Z"/><t k="alignLeft" v="Align left"/><t k="greek" v="希腊字母选项卡"/><t k="&#8245;" v="Reversed prime"/><t k="removeColumn" v="移除列"/><t k="naturalLog" v="Natural logarithm"/><t k="downDiagonalStrike" v="下斜划线"/><t k="leftArrowWithUnderAndOverScript" v="上下都有标签的左箭头"/><t k="&#8230;" v="水平省略号"/><t k="encloseRoundedBox" v="圆角边框包围"/><t k="backSpace" v="&#36864;&#26684;"/><t k="encloseBox" v="方框包围"/><t k="subscript" v="下标（Ctrl + Down）"/><t k="sumUnder" v="下方有标签的求和符号"/><t k="parenthesisColumn" v="带括号的 3 行列"/><t k="rightArrowWithOverScript" v="上方有标签的右箭头"/><t k="angleBrackets" v="尖括号"/><t k="subsuperscript" v="上标和下标"/><t k="rtl" v="Right to left edition"/><t k="&#8945;" v="下斜省略号"/><t k="&#8944;" v="上斜省略号"/><t k="&#8943;" v="中线省略号"/><t k="barAccent" v="横线着重符"/><t k="&#8942;" v="垂直省略号"/><t k="negateOperator" v="求反运算符"/><t k="encloseLongDivision" v="长除法"/><t k="encloseLongDivision2" v="带商长除法"/><t k="mtext" v="Normal text"/><t k="diaeresis" v="分音符"/><t k="downParenthesis" v="下括号"/><t k="&#9675;" v="圆"/><t k="limitUnder" v="下方有标签的极限"/><t k="&#8900;" v="Diamond"/><t k="bigSqCap" v="大求交运算符"/><t k="redo" v="重做"/><t k="curl" v="旋度"/><t k="leftArrowWithUnderScript" v="下方有标签的左箭头"/><t k="primes" v="Double-struck capital p"/><t k="rightArrowWithUnderScript" v="下方有标签的右箭头"/><t k="bigOpSubsuperscript" v="带下标和上标的大运算符"/><t k="&#9651;" v="三角形"/><t k="equalColWidth" v="Force equal column widths"/><t k="&#8883;" v="Contains as normal subgroup"/><t k="floor" v="向下取整"/><t k="&#8882;" v="Normal subgroup of"/><t k="&#9649;" v="平行四边形"/><t k="calculus" v="计算选项卡"/><t k="&#8869;" v="垂直"/><t k="&#9633;" v="方形"/><t k="bigCoProd" v="Coproduct"/><t k="&#8861;" v="Circled dash"/><t k="&#8859;" v="Circled asterisk"/><t k="&#8857;" v="Circled dot"/><t k="&#8855;" v="循环乘号"/><t k="exp" v="Exponential"/><t k="&#8853;" v="循环加号"/><t k="general" v="常规选项卡"/><t k="&#8852;" v="求并运算符"/><t k="&#8851;" v="求交运算符"/><t k="&#8850;" v="方形超级或等于"/><t k="symbols" v="符号选项卡"/><t k="alignRight" v="Align right"/><t k="&#8849;" v="方形子集或等于"/><t k="&#8848;" v="方形超集"/><t k="&#8847;" v="方形子集"/><t k="upCurlyBracket" v="上花括号"/><t k="&#8839;" v="超集或等于"/><t k="&#8838;" v="子集或等于"/><t k="&#8835;" v="超集"/><t k="&#8834;" v="子集"/><t k="&#8705;" v="补集"/><t k="&#8840;" v="不包含"/><t k="&#8841;" v="不包含（反）"/><t k="&#8836;" v="不包含[2]"/><t k="&#8837;" v="不包含[2]（反）"/><t k="&#8842;" v="真包含"/><t k="&#8843;" v="真包含（反）"/><t k="bevelledFraction" v="斜角分数"/><t k="bigCap" v="大交集"/><t k="&#8827;" v="Succeeds"/><t k="&#8826;" v="Precedes"/><t k="sumUnderover" v="上下都有标签的求和符号"/><t k="&#8811;" v="远大于"/><t k="&#8810;" v="远小于"/><t k="rightLeftArrowAccent" v="左右箭头着重符"/><t k="arctangent" v="反正切"/><t k="&#8805;" v="大于或等于"/><t k="&#8804;" v="小于或等于"/><t k="row" v="3 列行"/><t k="&#8802;" v="不全等于"/><t k="&#8801;" v="全等于"/><t k="&#8800;" v="不等于"/><t k="alignRowsCenter" v="Align rows to center"/><t k="parenthesisTable" v="带括号的 3 行 3 列矩阵"/><t k="alignRowsBottom" v="Align rows to bottom"/><t k="squareBracket" v="方括号"/><t k="encloseActuarial" v="右上包围"/><t k="&#8776;" v="几乎等于"/><t k="nlog" v="Logarithm to base n"/><t k="&#8773;" v="约等于"/><t k="&#8771;" v="渐近等于"/><t k="scriptsAndLayout" v="标签和布局选项卡"/><t k="upParenthesis" v="上括号"/><t k="&#8769;" v="非波浪号"/><t k="&#8764;" v="波浪号运算符"/><t k="verticalStrike" v="竖直划线"/><t k="over" v="元素上方"/><t k="integralSubscriptD" v="带下标和微分的积分"/><t k="rightArrowAccent" v="箭头着重符"/><t k="leftSuperscript" v="左上标"/><t k="&#8757;" v="因为"/><t k="&#8756;" v="所以"/><t k="&#8752;" v="体积积分"/><t k="bigSqCup" v="大求并运算符"/><t k="equalRowHeight" v="Force equal row heights"/><t k="&#8751;" v="面积积分"/><t k="smallFraction" v="小分数"/><t k="&#8750;" v="围道积分"/><t k="&#8749;" v="三重积分"/><t k="&#8748;" v="二重积分"/><t k="matrices" v="矩阵选项卡"/><t k="secant" v="正割"/><t k="&#8747;" v="积分"/><t k="&#8746;" v="并集"/><t k="digitSpace" v="数字空格"/><t k="&#8745;" v="交集"/><t k="column" v="3 行列"/><t k="&#8744;" v="逻辑或"/><t k="undo" v="撤销"/><t k="&#8743;" v="逻辑与"/><t k="&#8742;" v="不平行于"/><t k="&#8741;" v="平行于"/><t k="&#8738;" v="球面角"/><t k="round" v="Round"/><t k="&#8737;" v="实测角"/><t k="vectorAccent" v="矢量着重符"/><t k="rCurlyColumn" v="带右花括号的 3 行列"/><t k="&#8736;" v="&#35282;"/><t k="&#8734;" v="无穷大"/><t k="&#8733;" v="成比例"/><t k="&#8729;" v="Bullet"/><t k="leftArrowWithOverScript" v="上方有标签的左箭头"/><t k="&#8728;" v="环运算符"/><t k="&#8726;" v="集合减号"/><t k="&#8723;" v="正负号"/><t k="&#8716;" v="非子集"/><t k="cosecant" v="余割"/><t k="&#8715;" v="子集"/><t k="bigSum" v="Sum"/><t k="tangent" v="正切"/><t k="&#8713;" v="不属于"/><t k="&#8712;" v="属于"/><t k="&#8711;" v="倒三角算子"/><t k="matrixDashLine" v="Activate dash lines"/><t k="&#8710;" v="增量"/><t k="&#8709;" v="空集"/><t k="&#8708;" v="不存在"/><t k="&#8707;" v="存在"/><t k="&#8706;" v="偏微分"/><t k="upAndDownDiagonalStrike" v="交叉划线"/><t k="&#8704;" v="适合于全部"/><t k="alignRowsTop" v="Align rows to top"/><t k="horizontalStrike" v="水平划线"/><t k="cutDescription" v="Press Ctrl+X to cut the selection"/><t k="limitToInfinity" v="无穷大"/><t k="hatAccent" v="弧度"/><t k="&#8693;" v="左侧向下右侧向上的双箭头"/><t k="setColor" v="颜色"/><t k="&#247;" v="除号"/><t k="bigOpUnderover" v="上下都有标签的大运算符"/><t k="integralSubsuperscript" v="定积分"/><t k="easternArabicIndicNumbers" v="Eastern Arabic-Indic numerals"/><t k="bigCup" v="大并集"/><t k="copyDescription" v="Press Ctrl+C to copy the selection"/><t k="setFontSize" v="字体大小"/><t k="&#8661;" v="上下双箭头"/><t k="&#8660;" v="左右双箭头"/><t k="productUnderover" v="上下都有标签的求积符号"/><t k="&#8659;" v="向下双箭头"/><t k="equationAlign" v="Aligned equations"/><t k="&#8658;" v="向右双箭头"/><t k="&#8657;" v="向上双箭头"/><t k="&#8656;" v="向左双箭头"/><t k="arccosinus" v="反余弦"/><t k="&#215;" v="乘号"/><t k="&#982;" v="Pi"/><t k="&#8652;" v="上方向右下方向左的双鱼叉符号"/><t k="&#981;" v="Phi"/><t k="&#8651;" v="上方向左下方向右的双鱼叉符号"/><t k="appendColumn" v="在右侧插入列"/><t k="&#977;" v="Theta"/><t k="&#8646;" v="上方向左下方向右的双箭头"/><t k="nRoot" v="求根符号"/><t k="&#8645;" v="左侧向上右侧向下的双箭头"/><t k="&#8644;" v="上方向右下方向左的双箭头"/><t k="removeLineBelow" v="Remove line below"/><t k="&#8641;" v="倒钩朝下的向右鱼叉符号"/><t k="&#8640;" v="倒钩朝上的向右鱼叉符号"/><t k="&#969;" v="Omega（小写）"/><t k="&#968;" v="Psi（小写）"/><t k="arrows" v="箭头选项卡"/><t k="&#967;" v="Chi（小写）"/><t k="&#8637;" v="倒钩朝下的向左鱼叉符号"/><t k="&#966;" v="Phi（小写）"/><t k="&#8636;" v="倒钩朝上的向左鱼叉符号"/><t k="&#965;" v="Upsilon（小写）"/><t k="gradient" v="梯度"/><t k="&#964;" v="Tau（小写）"/><t k="&#963;" v="Sigma（小写）"/><t k="&#962;" v="Final Sigma（小写）"/><t k="&#961;" v="Rho（小写）"/><t k="&#960;" v="Pi（小写）"/><t k="encloseTop" v="上包围"/><t k="&#959;" v="Omicron（小写）"/><t k="&#8629;" v="Downwards arrow with corner leftwards"/><t k="&#958;" v="Xi（小写）"/><t k="acos" v="反余弦"/><t k="&#957;" v="Nu（小写）"/><t k="&#956;" v="Mu（小写）"/><t k="&#955;" v="Lambda（小写）"/><t k="&#954;" v="Kappa（小写）"/><t k="thinSpace" v="窄空格"/><t k="&#953;" v="Iota（小写）"/><t k="&#952;" v="Theta（小写）"/><t k="&#951;" v="Eta（小写）"/><t k="&#183;" v="中间点"/><t k="&#950;" v="Zeta（小写）"/><t k="&#949;" v="Epsilon（小写）"/><t k="&#948;" v="Delta（小写）"/><t k="&#8618;" v="带钩向右箭头"/><t k="&#947;" v="Gamma（小写）"/><t k="&#8617;" v="带钩向左箭头"/><t k="&#946;" v="Beta（小写）"/><t k="leftSubscript" v="左下标"/><t k="&#945;" v="Alpha（小写）"/><t k="&#177;" v="加减号"/><t k="&#8614;" v="条形向右箭头"/><t k="sumSubscript" v="带下标的求和符号"/><t k="&#176;" v="度符号"/><t k="superscript" v="上标（Ctrl + Up）"/><t k="&#8612;" v="条形向左箭头"/><t k="thinnerSpace" v="较窄的空格"/><t k="&#172;" v="“非”符号"/><t k="&#937;" v="Omega（大写）"/><t k="encloseBottom" v="下包围"/><t k="&#936;" v="Psi（大写）"/><t k="&#935;" v="Chi（大写）"/><t k="&#934;" v="Phi（大写）"/><t k="&#933;" v="Upsilon（大写）"/><t k="removeRow" v="移除行"/><t k="&#932;" v="Tau（大写）"/><t k="&#931;" v="Sigma（大写）"/><t k="&#8601;" v="西南箭头"/><t k="&#8600;" v="东南箭头"/><t k="&#929;" v="Rho（大写）"/><t k="&#8599;" v="东北箭头"/><t k="&#928;" v="Pi（大写）"/><t k="&#8598;" v="西北箭头"/><t k="&#927;" v="Omicron（大写）"/><t k="&#8597;" v="上下箭头"/><t k="&#926;" v="Xi（大写）"/><t k="&#8596;" v="左右箭头"/><t k="doubleVerticalBar" v="双竖线"/><t k="&#925;" v="Nu（大写）"/><t k="&#8595;" v="向下箭头"/><t k="&#924;" v="Mu（大写）"/><t k="→" v="向右箭头"/><t k="&#923;" v="Lambda（大写）"/><t k="&#8593;" v="向上箭头"/><t k="&#922;" v="Kappa（大写）"/><t k="&#8592;" v="向左箭头"/><t k="numberE" v="Number e"/><t k="numberPi" v="圆周率"/><t k="&#921;" v="Iota（大写）"/><t k="&#920;" v="Theta（大写）"/><t k="&#919;" v="Eta（大写）"/><t k="&#918;" v="Zeta（大写）"/><t k="&#917;" v="Epsilon（大写）"/><t k="&#10888;" v="大于且不等于（单线）"/><t k="smallBevelledFraction" v="斜角小分数"/><t k="&#916;" v="Delta（大写）"/><t k="&#10887;" v="小于且不等于（单线）"/><t k="pasteDescription" v="按 Ctrl+V 粘贴内容"/><t k="rationals" v="双线大写 Q"/><t k="&#915;" v="Gamma（大写）"/><t k="&#914;" v="Beta（大写）"/><t k="&#913;" v="Alpha（大写）"/><t k="Columns" v="&#21015;"/><t k="removeLineRight" v="Remove right line"/><t k="&#10878;" v="大于或等于（倾斜）"/><t k="&#10877;" v="小于或等于（倾斜）"/><t k="alignCenter" v="Align center"/><t k="downCurlyBracket" v="下花括号"/><t k="leftSubscriptAndSuperscript" v="左下标和上标"/><t k="cosinus" v="余弦"/><t k="dotAccent" v="点着重符"/><t k="bigOps" v="大运算符选项卡"/><t k="upDiagonalStrike" v="上斜划线"/><t k="\\" v="反斜杠"/><t k="squareRow" v="带方括号的 3 列行"/><t k="addFrame" v="Insert frame"/><t k="verticalLineTable" v="带竖线的 3 行 3 列矩阵"/><t k="under" v="元素下方"/><t k="fracDiff" v="导数"/><t k="squareRoot" v="平方根符号（Ctrl + S）"/><t k="bigProd" v="Product"/><t k="underScriptWithBrace" v="带括号的下标签"/><t k="rightArrowWithUnderAndOverScript" v="上下都有标签的右箭头"/><t k="&#10808;" v="Circled division"/><t k="imaginaryJ" v="Imaginary number j"/><t k="imaginaryI" v="Imaginary number i"/><t k="&#8501;" v="Alef"/><t k="productUnder" v="下方有标签的求积符号"/><t k="removeFrame" v="Remove frame"/><t k=">" v="大于号"/><t k="=" v="等号"/><t k="<" v="小于号"/><t k="&#8497;" v="Script capital f"/><t k="bigOpUnder" v="下方有标签的大运算符"/><t k="/" v="斜杠"/><t k="squareColumn" v="带方括号的 3 行列"/><t k="-" v="减号"/><t k="+" v="加号"/><t k="bigOpSubscript" v="带下标的大运算符"/><t k="parenthesisRow" v="带括号的 3 列行"/><t k="*" v="星号"/><t k="alignRowsAxis" v="Align rows to axis"/><t k="ell" v="Ell"/><t k="\'" v="撇号"/><t k="&#8476;" v="黑体大写 R"/><t k="manual" v="手册"/><t k="productSubsuperscript" v="带下标和上标的求积符号"/><t k="asin" v="反正弦"/><t k="&#8472;" v="Script capital p"/><t k="autoItalic" v="自动斜体"/><t k="&#8466;" v="Script capital l"/><t k="&#8465;" v="黑体大写 I"/><t k="productSubscript" v="带下标的求积符号"/><t k="piecewiseFunction" v="Piecewise function"/><t k="angleBracketsWithBar" v="Angle brackets with bar"/><t k="overScriptWithBrace" v="带括号的上标签"/><t k="arcsinus" v="反正弦"/><t k="ceiling" v="向上取整"/></translation>';
delete Array.prototype.__class__;

com.wiris.js.defaultBasePath = "/v1/formula/resources";
com.wiris.jsEditor = com.wiris.js;
