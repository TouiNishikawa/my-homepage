var http = require('http');
var fs   = require('fs');
var path = require('path');
var mime = {
  ".html": "text/html",
  ".css":  "text/css",
  ".mp4": "video/mp4"
  // 読み取りたいMIMEタイプはここに追記
};

var http_server = new http.createServer(function(req, res) {

  if (req.url == '/') {
    filePath = '/index.html';
  } else {
    filePath = req.url;
  }
  var fullPath = __dirname + filePath;
  res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || "text/plain"});




  fs.readFile(fullPath, function(err, data) {
    if (err) {
      // エラー時の応答
    } else {
      res.end(data, 'UTF-8');
    }
  });

}).listen(process.env.PORT);
console.log('heroku');
/*
var http = require('http');
var fs   = require('fs');
var path = require('path');
var mime = {
  ".html": "text/html",
  ".css":  "text/css"
  // 読み取りたいMIMEタイプはここに追記
};

var http_server = new http.createServer(function(req, res) {

  if (req.url == '/') {
    filePath = '/index.html';
  } else {
    filePath = req.url;
  }
  var fullPath = __dirname + filePath;
  res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || "text/plain"});




  fs.readFile(fullPath, function(err, data) {
    if (err) {
      // エラー時の応答
    } else {
      res.end(data, 'UTF-8');
    }
  });

}).listen(80);
console.log('http://localhost:80/');

*/