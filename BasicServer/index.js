const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const fs = require("fs");

// const rs = fs.createReadStream("index.html")
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  //   res.end(dataFromFile);
  fs.readFile("index.html", "utf-8", (err, dataFromFile) => {
    if (err) {
      console.log(err);
    } else {
      //   console.log(dataFromFile);
      res.end(dataFromFile);
    }
  });
});
// rs.pipe(res);
// })
//readStream.pipe(rs);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
