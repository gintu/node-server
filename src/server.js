const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello from gintu");
    res.end();
  } else {
    // const readStream = fs.createReadStream("./man.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.write("404");
    // readStream.pipe(res);
    res.end();
  }
});

server.listen(3000);
