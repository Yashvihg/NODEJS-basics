const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("Index.html", "utf-8", (err, dataFromFile) => {
      if (err) {
        res.statusCode = 500;
        res.end("Something went wrong !");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(dataFromFile);
      }
    });
  }
  //html is being read and comes across the script tag and we have to handle that request.
  else if (req.url == "/script.js") {
    fs.readFile("script.js", "utf-8", (err, dataFromFile) => {
      if (err) {
        res.statusCode = 500;
        res.end("Something went wrong !");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(dataFromFile);
      }
    });
  }
  else if(req.url === '/video.mp4') {
    const videoRS = fs.createReadStream('video.mp4')
    res.statusCode = 200;
    res.setHeader("Content-Type", "video/mp4")
    videoRS.pipe(res)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

