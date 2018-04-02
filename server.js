var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
  fs.createReadStream(__dirname + '/lesson_4.html').pipe(res);

}).listen(80);
