export default class UserController {
  //Step-1:  For the Registration
  getRegister(req, res) {
    res.render('register.ejs');
  }
  getLogin(req, res) {
    res.render('login.ejs');
  }
}
