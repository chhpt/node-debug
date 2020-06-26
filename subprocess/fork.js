const { spawn } = require("child_process");

const sp = spawn("node", ["--inspect=9230", "./fork_server.js"]);

console.log("父进程 PID", sp.pid);

sp.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

sp.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});
