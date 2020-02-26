const http = require('http');
const fs = require('fs');

// 注意调试的时候要清除浏览器缓存
http.createServer(function(req, res){
  /* res.writeHead(200, {
    'Content-type': 'text/html',
    'Set-cookie': ['id=123; max-age=2', 'abc=456; HttpOnly=true']
  }) */
  const host = req.headers.host;
  /* if (host === 'a.test.com') {
    res.writeHead(200, {
      'Content-type': 'text/html',
      'Set-cookie': ['id=123; max-age=2', 'abc=456; HttpOnly=true']
    })
  } */
  if (host === 'test.com') {
    res.writeHead(200, {
      'Content-type': 'text/html',
      'Set-cookie': ['id=123; max-age=2', 'abc=456; HttpOnly=true;domain=test.com']
    })
  }
  const data = fs.readFileSync('test.html', 'utf8');
  res.end(data);
}).listen(8001)

console.log('Server running at http://127.0.0.1:8001/');