import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
 
  res.end('<h2>Hello, Client!</h2>\n');
  console.log("server hit ");
});
server.listen(5555, () => {
  console.log("Server is running ....");
});