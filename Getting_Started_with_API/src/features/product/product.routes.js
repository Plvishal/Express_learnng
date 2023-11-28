// Manage routes/paths to ProductController
// 1. Import Exxpress
import express from 'express';
import ProductController from './product.controller.js';
// 2. Initailize express router
const productRouter = express.Router();
// Create Instance for product controller
const productController = new ProductController();
// All the paths to controller methods
productRouter.get('/', productController.getAllProduct);
productRouter.post('/', productController.addProduct);

export default productRouter;
