const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
  if(req.url === '/') {
    const data = fs.readFileSync('test.html', 'utf8');
    res.writeHead(200, {
      'Content-type': 'text/html',
    })
    res.end(data);
  }
  if (req.url === '/script.js') {
    res.writeHead(200, {
      'Content-type': 'text/javascript',
      'Cache-control': 'max-age=200'
    })
    res.end('console.log("script loaded")');
  }
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');