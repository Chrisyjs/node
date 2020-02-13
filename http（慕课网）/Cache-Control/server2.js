const http = require('http');
http.createServer((req, res) => {
  console.log('request success')
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })
  res.end('success')
}).listen(8002)

console.log('Server running at http://127.0.0.1:8002/');