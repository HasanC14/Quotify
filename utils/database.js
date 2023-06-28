// import mongoose from "mongoose";

// let isConnected = false
// export const connectToDB = async() =>{
//     mongoose.set('strictQuery', true)
//     if(isConnected){
//         console.log('MongoDB is Connected');
//         return
//     }
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName:'quotify',
//             useNewUrlParser:true,
//             useUnifiedTopology: true
//         })
//         isConnected = true
//         console.log('MongoDB is Connected');

//     } catch (error) {
//         console.log(error);
//     }
// }
import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Quotify",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}