const http = require("http");

setInterval(() => {
  http.get("http://localhost:3000");
}, 3000);
