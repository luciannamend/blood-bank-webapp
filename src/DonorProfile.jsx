import React, { useState, useEffect } from 'react';
import { getDonorById, updateDonorProfile } from './api'; // Import API functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate to redirect

const DonorProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the donor is logged in

    const navigate = useNavigate(); // For navigation to login page if necessary

    // Get donorId from localStorage
    const donorId = localStorage.getItem('donorId');

    useEffect(() => {
        // Check if donorId exists in localStorage to determine if logged in
        if (donorId) {
            setIsLoggedIn(true); // Mark as logged in
            // Fetch donor profile if logged in
            const fetchDonorProfile = async () => {
                try {
                    const donorData = await getDonorById(donorId); // Fetch donor profile
                    setFirstName(donorData.firstName);
                    setLastName(donorData.lastName);
                    setDateOfBirth(donorData.dateOfBirth);
                    setGender(donorData.gender);
                    setEmail(donorData.email);
                    setPhoneNumber(donorData.phoneNumber);
                    setBloodGroup(donorData.bloodGroup);
                    setCity(donorData.city);
                } catch (error) {
                    setErrorMessage('Failed to fetch donor profile');
                }
            };

            fetchDonorProfile();
        }
    }, [donorId]); // Re-run the effect when donorId changes

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedData = {
            donorId,
            firstName,
            lastName,
            dateOfBirth,
            gender,
            email,
            password,
            phoneNumber,
            bloodGroup,
            city,
        };

        console.log('TRYING TO UPDATE DONOR: ', donorId)

        try {
            const updatedDonor = await updateDonorProfile(donorId, updatedData); // Update profile
            setSuccessMessage('Profile updated successfully!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to update profile');
            setSuccessMessage('');
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page if not logged in
    };

    return (
        <div>
            <h2>Donor Profile</h2>

            {!isLoggedIn ? (
                <div>
                    <p>You need to log in to view and edit your profile.</p>
                    <button onClick={handleLoginRedirect}>Go to Login</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
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
                        />
                    </div>
                    <div>
                        <label>Date of Birth:</label>
                        <input
                            type="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input
                            type="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Blood Group:</label>
                        <input
                            type="text"
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>City:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Save Changes</button>

                    {/* Display success or error messages */}
                    {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                </form>
            )}
        </div>
    );
};

export default DonorProfile;
