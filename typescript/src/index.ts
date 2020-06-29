import * as http from "http";

let reqCount = 1;

http
  .createServer((req, res) => {
    const message = `Request Count: ${reqCount}`;

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`<html><body>${message}</body></html>`);

    console.log("handled request: " + reqCount++);
  })
  .listen(3000);

console.log("server running on port 3000");
