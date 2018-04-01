var lesson_4 = require('./lesson_4');
var http = require('http');

http.createServer(function (req, res) {
  res.end(lesson_4);
}).listen(3000);
