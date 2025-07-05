import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './db/connectDB.js';
dotenv.config({path: './env'});
connectDB();


const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('<h1>Welcome to ChaiCode Server</h1>');
});
const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT  }`);
  })
})
.catch((error) => {
  console.error('Database connection failed:', error);
  process.exit(1);
});
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});