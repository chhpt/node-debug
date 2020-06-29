"use strict";
exports.__esModule = true;
var http = require("http");
var reqCount = 1;
http
    .createServer(function (req, res) {
    var message = "Request Count: " + reqCount;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<html><head><meta http-equiv=\"refresh\" content=\"2\"></head><body>" + message + "</body></html>");
    console.log("handled request: " + reqCount++);
})
    .listen(3000);
console.log("server running on port 3000");
//# sourceMappingURL=index.js.map