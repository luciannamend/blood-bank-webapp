import React, { useState, useEffect } from 'react';
import { getDonorHistory } from './api'; // Import API function
import './DonorHistory.css';


const DonorHistory = () => {
    const [donorStocks, setDonorStocks] = useState([]); // State to store stocks
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages
    const [isLoading, setIsLoading] = useState(true); // State for loading status

    // Get donorId from localStorage
    const donorId = localStorage.getItem('donorId');

    useEffect(() => {
        const fetchDonorStocks = async () => {
            try {
                if (donorId) {
                    const stocks = await getDonorHistory(donorId); // Fetch donor history
                    setDonorStocks(stocks);
                    console.log('RESULT FROM HISTORY: ' , stocks)
                } else {
                    setErrorMessage('Donor ID not found in local storage');
                }
            } catch (error) {
                setErrorMessage('Failed to fetch donor history');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDonorStocks();
    }, [donorId]);

    return (
        <div>
            <h2>Donor History</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            ) : donorStocks.length === 0 ? (
                <p>No blood stocks found for this donor.</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Stock ID</th>
                        <th>Quantity</th>
                        <th>Best Before</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {donorStocks.map((stock) => (
                        <tr key={stock.bloodStockId}>
                            <td>{stock.bloodStockId}</td>
                            <td>{stock.quantity} mL</td>
                            <td>{stock.bestBefore}</td>
                            <td>{stock.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DonorHistory;
