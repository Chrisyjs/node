const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

http.createServer(function(req, res){
  const data = fs.readFileSync('test.html');
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Encoding': 'gzip'
  })
  res.end(zlib.gzipSync(data)); // gzip 压缩
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');