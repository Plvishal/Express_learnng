// const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';

const server = express();
// setup view engine
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));
// Setup for Express Ejs Layouts
server.use(expressEjsLayouts);
// create an instance or PrductController
const productController = new ProductController();

server.get('/', productController.getProducts);
//

server.use(express.static('src/views'));

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});
