import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDb Connected DB HOST:
        ${connectionInstance.connection.host}`)
    } catch(error){
        connsole.log(error);
        process.exit(1);
    }
}

export default connectDB;