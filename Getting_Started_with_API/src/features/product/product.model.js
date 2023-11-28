export default class ProductModel {
  constructor(id, name, desc, imageUrl, category, price, sizes) {
    (this.id = id),
      (this.name = name),
      (this.desc = desc),
      (this.price = price),
      (this.imageUrl = imageUrl),
      (this.category = category),
      (this.sizes = sizes);
  }
  static GetAll() {
    return products;
  }
}
var products = [
  new ProductModel(
    1,
    'Product 1',
    'Description for product 1',
    19.9,
    'https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'Category 1',
    ['M', 'XL', 'S']
  ),
];
