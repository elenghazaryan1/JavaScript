const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");

  let file = req.url === "/" ? "/index.html" : req.url;

  fs.readFile("." + file, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200);
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
