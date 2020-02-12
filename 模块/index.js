/* console.log(process.env);
console.log(process.argv); */

/* let fs = require('fs');
fs.writeFile('a.text', 'test', (err, data) => {
  console.log(err)
}) */

let a = require('./模块/a.js/index.js');
a = new a('yjs');
a.show();