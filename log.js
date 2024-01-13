const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New Req recieved \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Welcome to Home Page");
        break;
      case "/contacts":
        res.end("You are on contact page");
        break;
      case "/about":
        res.end("You are on about");
        break;
      default:
        res.end("You are not on any page");
        break;
    }
  });
});

myserver.listen(8000, () => console.log("Server Check / Started"));
