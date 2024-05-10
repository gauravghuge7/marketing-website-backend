import { Router } from "express";

const userRouter = Router();

// import methods from controllers

import { getUser, registerUser } from '../controllers/user.controller.js';
// import {getHistory} from '../controllers/admin.controller.js';
import isLoggedIn from "../middleware/auth.middleware.js";
import multer from "multer";
import { createPayment, paymentVerification } from "../controllers/payment.controller.js";
const upload = multer();




userRouter.route('/register').post(upload.none(), registerUser);

// userRouter.route('/dashboard').get(isLoggedIn, getUser);

// userRouter.route('/history').get(isLoggedIn, getHistory);

userRouter.route('/payment').post(createPayment);


userRouter.route('/paymentverification').post(paymentVerification);



















   
export default userRouter;