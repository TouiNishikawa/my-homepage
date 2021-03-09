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


/*
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  // 変更箇所はこちらです。お好きな文字列にしていただいても構いません。
  ctx.body = 'こんにちは、世界。'
})

app.listen(80)
*/
