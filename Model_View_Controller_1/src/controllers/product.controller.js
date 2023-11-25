import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    res.render('products.ejs', { products });
    // console.log(products);
    // return res.sendFile(
    //   path.join(path.resolve(), 'src', 'views', 'products.html')
    // );
    // console.log(path.resolve());
  }
  // For new product added
  getAddForm(req, res) {
    return res.render('new-product.ejs', { errorMessage: null });
  }
  // for
  addNewProduct(req, res) {
    // access data from form
    // vailidate  name
    const { name, price, imgUrl } = req.body;
    let errors = [];
    if (!name || name.trim() == '') {
      errors.push('Name is required');
    }
    if (!price || parseFloat(price) < 1) {
      errors.push('Price must be a positive value');
    }
    try {
      const validUrl = new URL(imgUrl);
    } catch (err) {
      errors.push('URL is invailid');
    }
    if (errors.length > 0) {
      return res.render('new-product.ejs', { errorMessage: errors[0] });
    }
    ProductModel.add(req.body);
    let products = ProductModel.get();
    return res.render('products.ejs', { products });
  }
}
