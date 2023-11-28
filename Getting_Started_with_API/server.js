import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send('Welcome to E-Commerce');
});

server.listen(3000, () => {
  console.log('Server is running on the port:3000');
});
