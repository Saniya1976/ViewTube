import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';


const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(morgan('dev'));
dotenv.config();

server.get('/',(req,res)=>{
    res.send('<h1>Welcome to ChaiCode Server</h1>')
})
server.get('/jokes',(req,res)=>{
     const jokes=[
        {id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!"},
        {id: 2, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"},
        {id: 3, joke: "What do you call fake spaghetti? An impasta!"}
    ];
    res.send(jokes);
})
const PORT = process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})