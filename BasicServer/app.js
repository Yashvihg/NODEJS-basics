const http = require('http');
//https://nodejs.org/en/about/
const hostname = '127.0.0.1';
const port = 3000;   // can be any number.
 
const server = http.createServer((req, res) => {    // request, response. can be any local variables.
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World'); // this is plain textual data. 
  res.setHeader('Content-Type', 'text/html'); //change plain to HTML
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// req - data from client to be read like url etc 
// res - data from server to be sent to client. 