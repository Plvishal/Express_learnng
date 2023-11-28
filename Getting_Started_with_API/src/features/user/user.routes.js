// Manage routes/paths to ProductController
// 1. Import Exxpress
import express from 'express';
import { UserController } from './user.controller.js';

// 2. Initailize express router
const usertRouter = express.Router();
const userController = new UserController();

// All the paths to controller methods
usertRouter.post('/signup', userController.signUp);
usertRouter.post('/signin', userController.signIn);

export default usertRouter;
