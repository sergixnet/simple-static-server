var http = require('http');
var st = require('node-static');
var opts = { cache : false };
var file = new st.Server('./', opts);
var port = process.env.PORT || 3000;

http.createServer(function(req,res){
	file.serve(req,res);
}).listen(port);

console.log('Server running on http://localhost:%s', port);