import CartItemModel from './cartItem.model.js';

export default class CartItemsController {
  add(req, res) {
    const { productId, quantity } = req.query;
    const userId = req.userId;
    CartItemModel.add(productId, userId, quantity);
    return res.status(201).send('Cart is Updated');
  }
  get(req, res) {
    const userId = req.userId;
    const items = CartItemModel.get(userId);
    return res.status(200).send(items);
  }
}
