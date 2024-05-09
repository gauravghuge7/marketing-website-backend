import { Router } from "express";

const userRouter = Router();

// import methods from controllers

import { getUser, registerUser } from '../controllers/user.controller.js';
import isLoggedIn from "../middleware/auth.middleware.js";



userRouter.route('/register').post(registerUser);

userRouter.route('/dashboard').get(isLoggedIn, getUser);


   
export default userRouter;