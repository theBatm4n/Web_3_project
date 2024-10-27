import exp from "constants";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type:String, required: true}
})

const User = mongoose.models.User || mongoose.model("User", useS)
export default User;