import ProductModel from './product.model.js';

export default class ProductController {
  getAllProduct(req, res) {
    const product = ProductModel.GetAll();
    res.status(200).send(product);
  }
  addProduct(req, res) {
    console.log(req.body);
    console.log('this is a post response');
    res.status(200).send('post request recieved');
  }
  rateProduct(req, res) {}
  getOneProduct(req, res) {}
}
