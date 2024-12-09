import React, { useState } from 'react';
import { loginDonor } from './api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await loginDonor(email, password);

            if (response.data) {
                // Success: Store user login state and redirect to profile page
                console.log('Login successful:', response.data);
                localStorage.setItem('isAuthenticated', 'true'); // Set authenticated state
                localStorage.setItem('donorId', response.data.donorId); // Save donorId to localStorage
                navigate('/profile');
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
                    <label>Email:</label>
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
