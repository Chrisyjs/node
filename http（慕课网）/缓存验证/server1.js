const http = require('http');
const fs = require('fs');

// 注意调试的时候要清除浏览器缓存
http.createServer(function(req, res){
  if(req.url === '/') {
    const data = fs.readFileSync('test.html', 'utf8');
    res.writeHead(200, {
      'Content-type': 'text/html',
    })
    res.end(data);
  }
  if (req.url === '/script.js') {
    const Etag = req.headers['if-none-match'];
    if (Etag === '777') {  // 服务端的 '777' 变了的话，就不用缓存了
      res.writeHead(304, {  // 304表示使用缓存
        'Content-type': 'text/javascript',
        'Cache-control': 'max-age=200000, no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      res.end('12321')
    } else {
      res.writeHead(200, {
        'Content-type': 'text/javascript',
        'Cache-control': 'max-age=200000, no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      res.end('console.log("script loaded")');
    }
    
  }
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');