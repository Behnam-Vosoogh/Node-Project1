const http = require("http");

function rqListener({ req, res }) {
  console.log(req.url, req.headers, req.method);
}

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log("------------");
  // console.log(req.method);
  // console.log("------------");
  // console.log(req.headers);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><titleEnter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();

  //   process.exit();
});

server.listen(3000);
