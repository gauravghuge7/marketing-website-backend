import express from 'express';
import userRouter from './Routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200 

}));


app.get('/', ( req, res ) => {
   
    res.send('Hello World!');
});


app.use('/user', userRouter);


app.get('/api/getkey', (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_KEY_ID });
});


// const otpMap = new Map();

// import { generateOtp } from './Helpers/generate.otp.js';

// // Route to generate OTP
// app.post('/generateOTP', (req, res) => {
//   const { phoneNumber } = req.body;
//   const otp = generateOtp();
//   otpMap.set(phoneNumber, otp); // Store OTP temporarily
//   // Send OTP via SMS or any other method
//   console.log('OTP generated:', otp);
//   res.json({ otp });
// });


// // Route to verify OTP
// app.post('/verifyOTP', (req, res) => {
//     const { phoneNumber, otp } = req.body;
//     const storedOTP = otpMap.get(phoneNumber);
//     if (!storedOTP) {
//       res.json({ status: 'failure', message: 'OTP not found' });
//       return;
//     }
//     // Check if the length of the entered OTP matches the stored OTP
//     if (otp.length !== storedOTP.length) {
//       res.json({ status: 'failure', message: 'Invalid OTP length' });
//       return;
//     }
//     // Compare each digit of the entered OTP with the stored OTP
//     for (let i = 0; i < otp.length; i++) {
//       if (otp[i] !== storedOTP[i]) {
//         res.json({ status: 'failure', message: 'Invalid OTP' });
//         return;
//       }
//     }
//     // If all digits match, OTP is verified successfully
//     res.json({ status: 'success' });
//   });
  







// this for other any request on server
app.get('*', (req, res) => {
    res.status(404).send('Web page Not found in this domain');
});


export default app;
