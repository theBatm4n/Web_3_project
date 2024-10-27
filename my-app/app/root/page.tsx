"use client"
import { ethers } from "ethers"
import homeLayout from "./layout";
import { useState } from "react";

declare global{
    interface Window{
        ethereum?: any
    }
}

export default function Home() {
    const [walletAddress, setWalletAddress] = useState('');
    const [ethBalance, setEthBalance] = useState('');
    
    const connectWallet = async () => {
        let signer = null

        let provider

        if(window.ethereum == null){
            console.log("No metamask wallet installed!")
        }

        provider = new ethers.BrowserProvider(window.ethereum)
        signer = await provider.getSigner()

        const address = signer.getAddress()
        setWalletAddress(await address)

        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.formatEther(balance);
        setEthBalance(formattedBalance);
    
    }


    return (
        <section className="home">

            <div className="home-content">
                <header className="'home-header">Home</header>
                <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                    onClick={connectWallet}>Connect
                    </button>
                        {walletAddress && <p>Connected Wallet Address: {walletAddress}</p>}
            </div>

            <h1>Assests</h1>
                {ethBalance && <p>{ethBalance}</p>}
        </section>
        
    )
}