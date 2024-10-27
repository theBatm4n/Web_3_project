import User from "../../../models/user";
import connectToDataBase from "../../../lib/db";
import bcrypt from "bcrypt"
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(request) {
    try{
        connectToDataBase();
        const {name, email, password} = await request.json()
        const userExistense = await User.find({email})
        if(userExistense) {
            return NextResponse.json({error: "user already exists"})
        }
        const hashpassword = bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashpassword
        })
        await newUser.save()

        return NextResponse.json({message: "User Registered", status: 201})
    } catch(err){
        return NextResponse.json({error: "Error in Server", status: 500})
    }
    
}