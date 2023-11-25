const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send('Welcome to inventory App');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});
