const express = require('express');

// create server
const server = express();

// Handle default request
// Array of middleware
function firstMidlleware(req, res, next) {
  console.log('First middleware');
  next();
}
function secondMiddlware(req, res, next) {
  console.log('Second Middleware');
  next();
}
function globalLevel(req, res, next) {
  console.log('Global level middleware');
  next();
}
// This is a global level  middle ware
server.use(globalLevel);
// this is a root level middleware here root is :/send
server.get('/', [firstMidlleware, secondMiddlware], (req, res) => {
  res.send('hello');
});
// post request
server.post('/', (req, res) => {
  res.send('Post Request Mehtod is working');
});
// Put request
server.put('/', (req, res) => {
  res.send('Put Request Mehtod is working');
});
//   Delete request
server.delete('/', (req, res) => {
  res.send('Delete Request Mehtod is working');
});

// listen on specified port
// Port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
