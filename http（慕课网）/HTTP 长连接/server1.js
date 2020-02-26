const http = require('http');
const fs = require('fs');

// 注意调试的时候要清除浏览器缓存
http.createServer(function(req, res){
  if (req.url === '/') {
    const data = fs.readFileSync('test.html', 'utf8');
    res.writeHead(200, {
      'Content-type': 'text/html',
    })
    res.end(data);
  } else {
    const data = fs.readFileSync('index.png');
    res.writeHead(200, {
      'Content-type': 'image/png',
    })
    res.end(data);
  }
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');