const http = require('http');
const sql = require('./db');

const PORT = 3000;

async function getAllUsers() {
  const rows = await sql`SELECT * FROM test ORDER BY id`;
  return rows;
}

const server = http.createServer(async (req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);

  if (req.url === '/users') {
    try {
      const users = await getAllUsers();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users, null, 2));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message }));
    }
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, felichito !!! \n');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`GET /users -> all registers from table test`);
});
