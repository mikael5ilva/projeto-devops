const http = require('http');

const hostname = '0.0.0.0';
const port = 5001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Me ajuda pelo amor de Deus, professor! Torço pelo senhor na maratona de São silvestre!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
