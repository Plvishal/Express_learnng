export default class CartItemModel {
  constructor(productId, userId, quantity, id) {
    this.productId = productId;
    this.userId = userId;
    this.quantity = quantity;
    this.id = id;
  }

  static add(productId, userId, quantity) {
    const cartItem = new CartItemModel(productId, userId, quantity);
    cartItem.id = cartItems.length + 1;
    cartItems.push(cartItem);
    return cartItem;
  }
  static get(userId) {
    return cartItems.filter((u) => (u.userId = userId));
  }
}

var cartItems = [new CartItemModel(1, 2, 1, 1), new CartItemModel(1, 1, 2, 2)];
