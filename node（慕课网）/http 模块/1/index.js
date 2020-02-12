let http = require('http')
let fs = require('fs')
http.createServer((req, res) => {
  fs.readFile(`./${req.url}`, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 not found')
    } else {
      res.end(data)
    }
  })
}).listen(8088)