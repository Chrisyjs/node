const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
  if (req.url === '/script') {
    res.writeHead(200, {
      'Content-Type': 'application/javascript',
    })
    res.end('console.log("loaded script")')
  } 
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      // 'Content-Security-Policy': 'default-src \'self\' \'unsafe-inline\''
      'Content-Security-Policy': 'default-src \'self\'; report-uri /report'
    })
    const data = fs.readFileSync('test.html', 'utf8');
    res.end(data);
  }
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');