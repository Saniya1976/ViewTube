import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:8000',
  credentials: true,
}));

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended: true, limit:"16kb"}));
app.use(express.static('public'));
app.use(cookieParser());



export {app}