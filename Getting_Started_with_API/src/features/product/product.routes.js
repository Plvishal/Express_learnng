// Manage routes/paths to ProductController
// 1. Import Exxpress
import express from 'express';
import ProductController from './product.controller.js';
import { upload } from '../../middleware/fileUpload.middleware.js';
// 2. Initailize express router
const productRouter = express.Router();
// Create Instance for product controller
const productController = new ProductController();
// All the paths to controller methods
productRouter.post('/rate', productController.rateProduct);
productRouter.get('/filter', productController.filterProduct);
productRouter.get('/', productController.getAllProduct);
productRouter.post(
  '/',
  upload.single('imageUrl'),
  productController.addProduct
);
productRouter.get('/:id', productController.getOneProduct);

export default productRouter;
