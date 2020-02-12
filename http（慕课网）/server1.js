const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const data = fs.readFileSync('./test.html', 'utf8');
  res.writeHead(200, {
    'Content-type': 'text/html'
  })
  res.end(data);
}).listen(8001)