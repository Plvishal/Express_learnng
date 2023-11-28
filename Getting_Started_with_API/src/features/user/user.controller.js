import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';
export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const user = UserModel.SignUp(name, email, password, type);
    res.status(201).send(user);
  }
  signIn(req, res) {
    const result = UserModel.SignIn(req.body.email, req.body.password);
    if (!result) {
      return res.status(400).send('Incorrect Credentials');
    } else {
      // 1.create token
      const token = jwt.sign(
        { userId: result.id, email: result.email },
        'jqpB0H3gxJy20LmUX2AKD3YTPTj3hd9G',
        { expiresIn: '1h' }
      );
      // 2.Send token

      return res.status(200).send(token);
    }
  }
}
