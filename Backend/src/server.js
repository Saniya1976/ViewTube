import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));

server.get('/', (req, res) => {
  res.send('<h1>Welcome to ChaiCode Server</h1>');
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
