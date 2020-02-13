const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
  const data = fs.readFileSync('test.html', 'utf8');
  res.writeHead(200, {
    'Content-type': 'text/html',
  })
  res.end(data);
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');