import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB conectado: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error de conexión a MongoDB: ${error.message}`);
  }
};

export default connectDB;
