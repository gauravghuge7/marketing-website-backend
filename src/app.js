import express from 'express';
import userRouter from './Routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('dist'));


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



// this for other any request on server
app.get('*', (req, res) => {
    res.status(404).send('Web page Not found');
});


export default app;
