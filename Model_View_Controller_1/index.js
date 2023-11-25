// const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';

const server = express();
// create an instance or PrductController
const productController = new ProductController();

server.get('/', productController.getProducts);
//

server.use(express.static('src/views'));

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});
