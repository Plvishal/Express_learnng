// const express = require('express');
import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import { vailidateRequest } from './src/middleware/vailidation.middleware.js';

const server = express();
// parse form data
server.use(express.urlencoded({ extended: true }));
// setup view engine
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));
// Setup for Express Ejs Layouts
server.use(expressEjsLayouts);
// create an instance or PrductController
const productController = new ProductController();

server.get('/', productController.getProducts);
//
server.get('/new', productController.getAddForm);
server.post('/', vailidateRequest, productController.addNewProduct);

server.use(express.static('src/views'));

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port :${PORT}`);
});

// Second Phase of Model View Controller (MVC)Started  from here
