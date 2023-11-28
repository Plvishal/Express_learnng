import express, { Router } from 'express';
import bodyParser from 'body-parser';
import productRouter from './src/features/product/product.routes.js';
const server = express();
// use bodyParser
server.use(bodyParser.json())


// For all request related to product redirect to product routes.
// localhost:3000/api/products
server.use('/api/products', productRouter);

server.get('/', (req, res) => {
  res.send('Welcome to E-Commerce');
});

server.listen(3000, () => {
  console.log('Server is running on the port:3000');
});
