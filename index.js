import mongoose from "mongoose";
import { DB_name } from './constent.js';


// Function to connect to the database and start the server
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    console.log(`\nMongoose is connected! DB HOST: ${connectionInstance.connection.host}`);
    
    // Start the server after a successful DB connection
   
  } catch (err) {
    console.error("MONGOOSE CONNECTION ERROR", err);
    process.exit(1);
  }
};

// Call the function to initiate DB connection and server
// connectDB();

export default connectDB;