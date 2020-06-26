const http = require("http");

let count = 0;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log("Request", ++count);
  res.end("Hello World");
});

server.listen("3000", () => {
  console.log("Server list on http://127.0.0.1:3000");
});
