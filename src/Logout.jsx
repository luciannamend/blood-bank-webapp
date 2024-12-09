import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout= async (event) => {
        event.preventDefault();
        try {
            localStorage.clear(); // Clear all local storage (or just specific keys)
            navigate('/'); // Redirect to home page
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleLogout}>
                <div>
                    <h2> Sorry to see you go :(</h2>
                </div>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
};

export default Logout;
