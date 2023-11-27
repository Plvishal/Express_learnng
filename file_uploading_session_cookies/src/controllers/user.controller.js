import UserModel from '../models/user.model.js';
import ProductModel from '../models/product.model.js';
export default class UserController {
  //Step-1:  For the Registration
  getRegister(req, res) {
    res.render('register.ejs');
  }
  getLogin(req, res) {
    res.render('login.ejs', { errorMessage: null });
  }
  //   Step-2: for login
  postRegister(req, res) {
    const { name, email, password } = req.body;
    UserModel.add(name, email, password);
    res.render('login.ejs', { errorMessage: null });
  }
  //   step-3: Post login user access checking
  postLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValidUser(email, password);
    if (!user) {
      return res.render('login.ejs', {
        errorMessage: 'Invailid credentials',
      });
    }
    // Set session
    req.session.userEmail = email;
    var products = ProductModel.getAll();
    res.render('index', { products, userEmail: req.session.userEmail });
  }
  logout(req, res) {
    // on logout ,destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/login');
      }
    });
  }
}
