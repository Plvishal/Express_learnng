const express = require('express');

// create server
const server = express();

// Handle default request
server.get('/', (req, res) => {
  res.send('Welcome to express server');
});

// listen on specified port
// Port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
