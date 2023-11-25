export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imgUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this._imgUrl = _imgUrl;
  }
  static get() {
    return products;
  }
}

var products = [
  new ProductModel(
    1,
    'Product 1',
    'Description for Product 1',
    19.5,
    'https://img.freepik.com/premium-photo/pig-that-is-sitting-table-generative-ai_791316-13727.jpg?size=626&ext=jpg&ga=GA1.1.2132137530.1699594076&semt=sph'
  ),
  new ProductModel(
    2,
    'Product 3',
    'Description for Product 2',
    20.5,
    'https://img.freepik.com/free-photo/focus-photography-gray-fox-snow_406225-75.jpg?size=626&ext=jpg&ga=GA1.1.2132137530.1699594076&semt=sph'
  ),
  new ProductModel(
    3,
    'Product 3',
    'Description for Product 3',
    49.5,
    'https://img.freepik.com/free-photo/full-shot-woman-sitting-outdoors-with-cute-dog_23-2148931200.jpg?size=626&ext=jpg&ga=GA1.1.2132137530.1699594076&semt=sph'
  ),
];
