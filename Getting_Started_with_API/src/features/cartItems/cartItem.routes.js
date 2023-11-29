// 1. Import Exxpress
import express from 'express';
import CartItemsController from './cartItem.controller.js';

// 2. Initailize express router
const cartRouter = express.Router();
const cartController = new CartItemsController();

cartRouter.post('/', cartController.add);
cartRouter.get('/', cartController.get);

export default cartRouter;
