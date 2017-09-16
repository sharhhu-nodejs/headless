var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/proxy/*', proxy({
		pathRewrite: function (path, req) { return path.replace('/proxy', '/') },
		target: 'http://172.28.10.30', 
		toProxy: true
	})
);
app.listen(9000);
