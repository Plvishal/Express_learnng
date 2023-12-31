import express, { Router } from 'express';
import bodyParser from 'body-parser';
import basicAuthorizer from './src/middleware/basicAuth.middleware.js';
import productRouter from './src/features/product/product.routes.js';
import usertRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middleware/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItem.routes.js';
const server = express();
// use bodyParser
server.use(bodyParser.json());

// For all request related to product redirect to product routes.
// localhost:3000/api/products
server.use('/api/products', jwtAuth, productRouter);
server.use('/api/cartItems', jwtAuth, cartRouter);
server.use('/api/users', usertRouter);

server.get('/', (req, res) => {
  res.send('Welcome to E-Commerce');
});

server.listen(3000, () => {
  console.log('Server is running on the port:3000');
});
