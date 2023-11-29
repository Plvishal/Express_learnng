import UserModel from '../user/user.model.js';
export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }
  // add product post method
  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }
  static get(id) {
    const product = products.find((i) => i.id == id);
    return product;
  }

  static GetAll() {
    return products;
  }
  // for filter
  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });
    return result;
  }
  // Rate Product
  static rateProduct(userId, productId, rating) {
    // 1. Validate user and product
    const user = UserModel.getAll().find((u) => u.id == userId);
    if (!user) {
      return 'User not found';
    }
    // Validate Product
    const product = products.find((p) => p.id == productId);
    if (!product) {
      return 'Product not found';
    }
    // 2.check if there are any rating  and if not then add rating array
    if (!product.rating) {
      product.rating = [];
      product.rating.push({ userId: userId, rating: rating });
    } else {
      //  3.check if user rating is already available.
      const existingRatingIndex = product.rating.findIndex(
        (r) => r.userId == userId
      );

      if (existingRatingIndex >= 0) {
        product.rating[existingRatingIndex] = {
          userId: userId,
          rating: rating,
        };
      } else {
        //4. if no existing rating then add rating
        product.rating.push({
          userId: userId,
          rating: rating,
        })
      }
    }
  }
}
var products = [
  new ProductModel(
    1,
    'Product 1',
    'Description for product 1',
    1.9,
    'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'Category1',
    ['M', 'XL', 'S']
  ),
  new ProductModel(
    2,
    'Product 2',
    'Description for Product 3',
    19.99,
    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    'Category2',
    ['M', 'XL', 'S']
  ),
];
