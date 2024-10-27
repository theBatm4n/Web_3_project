import React from 'react';

const TradeForm = () => {
    return (
        <div className="container" style={{ position: "relative", height: "100vh" }}>
            <div className="form-wrapper" style={{ position: "absolute", top: "20px", right: "20px" }}>
                <form className="form" style={{ backgroundColor: "#fff", padding: "16px", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", width: "300px" }}>
                    <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>Trade</h1>
                    <div>
                        <label>OrderType</label>
                        <select>
                            <option value="buy">Buy</option>
                            <option value="sell">Sell</option>
                        </select>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="text" placeholder="Amount" />
                    </div>
                    <button 
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                >Execute</button>
                </form>
            </div>
        </div>
    );
}

export default TradeForm;