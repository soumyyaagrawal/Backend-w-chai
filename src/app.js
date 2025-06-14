import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();
import userroutes from './route/user.route.js';

app.use(express.json({limit: '16kb'})); 
app.use(urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser()); 
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));



app.use("/users", userroutes);
export default app;             