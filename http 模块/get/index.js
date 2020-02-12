let http = require('http')
let url = require('url')
http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url, true)
  console.log(pathname, query)
}).listen(8088)