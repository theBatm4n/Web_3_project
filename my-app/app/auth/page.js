"use client";
import { useState } from "react";

export default function Registration() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {  // DEAL WITH REGISTERING INTO MONGODB
        e.preventDefault()
        const response = await axios.post('/api/register', {name, email, password})
        console.log(response)

    }

    return(
        <div className="flex justify-center items-center h-screen">
            <formx 
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2x1 font-bold mb-6">Register</h1>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                <label className="block text-gray-clearç700">Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                    <input 
                        type="password" 
                        placeholder="************"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                    Register
                </button>
            </formx>
        </div>
    )
}
