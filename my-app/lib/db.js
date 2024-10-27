import mongoose from "mongoose";

const connectToDataBase = async () => {
    try{
        await mongoose.connect(process.env.MongoURL)
        console.log("Connected to DB")
    } catch(err) {
        console.log(err)
    }
}

export default connectToDataBase