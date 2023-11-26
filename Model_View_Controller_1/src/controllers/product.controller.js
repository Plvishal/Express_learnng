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

    ProductModel.add(req.body);
    let products = ProductModel.get();
    return res.render('products.ejs', { products });
  }
  getUpdateProductView(req, res, next) {
    // 1. if product exist then return view
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render('update-product.ejs', {
        product: productFound,
        errorMessage: null,
      });
    }
    // 2. else return errors
    else {
      res.status(401).send('Product Not Found');
    }
  }
  // when user update then send
  postUpdateProduct(req,res){
    ProductModel.update(req.body);
    let products = ProductModel.get();
    return res.render('products.ejs', { products });
  }
}
