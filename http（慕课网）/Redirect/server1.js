const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
  console.log(req.url)
  if (req.url === '/') {
    res.writeHead(302, {
      'Location': '/new'
    })
    res.end('')  // 必须要，不然跳转不了
  }
  if (req.url === '/new') {
    const data = fs.readFileSync('test.html', 'utf8');
    res.end(data);
  }
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');