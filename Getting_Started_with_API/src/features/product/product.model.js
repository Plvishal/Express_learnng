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
