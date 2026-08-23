const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(`Received request: ${req.method} ${req.url}`);
  res.end('Hello, World!\n');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

