"use client"
import React, { useState } from 'react'
import { ethers } from "ethers"
import TradeForm from '@/components/TradeForm';
import erc20abi from "./ERC20abi.json";
// import { abi } from "/Users/vigneshkaleeswaran/trading_software/my-app/smart_contract/abi.js"; 
// remove contract address and abi from here after fixing the issue 

const contractAddress = '0xb82f974f7b52792eC83255a27FC89bA07E90bF5A';

export default function transfer() {

    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const mintTokens = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, erc20abi, signer);
        const mintTokens = async () => {
            try {
                await contract.transfer(recipient, amount);
                setSuccessMessage('successful!');
            } catch (error) {
                console.error('Error minting tokens:', error);
            }
        }

    }

  return (
        <div>
            <h1 className="text-2x1 font-bold mb-6">Transfer</h1>
                <input type="text" placeholder="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button 
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                onClick={mintTokens}>Execute</button>
                {successMessage && <p>{successMessage}</p>}

            <TradeForm />
        </div>
  )
}
