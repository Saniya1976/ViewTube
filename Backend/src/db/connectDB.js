import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'; // Adjust the path as necessary

const connectDB=async()=>{
    try{
    const connect=await mongoose.connect(`process.env.${MONGO_URI}/${DB_NAME}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
    }catch(error){
        console.log(`Error: ${error}`);
        process.exit(1); // Exit the process with failure
    }
}
export default connectDB;
