import React, { useState } from 'react';
import { loginDonor } from './api'; // Assuming you've set up an api.js file for API requests

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await loginDonor(email, password);

            if (response.data) {
                // Success: Redirect or store user info (e.g., in context or state)
                console.log('Login successful:', response.data);
            } else {
                setErrorMessage('Invalid email or password');
            }
        } catch (error) {
            setErrorMessage('An error occurred during login');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Donor Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Login;
