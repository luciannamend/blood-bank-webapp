import axios from 'axios';

const API_DONORS_URL = 'http://localhost:8080/api/donors'

// Donor login
export const loginDonor = (email, password) => {
    return axios.post(`${API_DONORS_URL}/login`, { email, password });
};

// Donor registration
export const registerDonor = (donorData) => {
    return axios.post(`${API_DONORS_URL}`, donorData);
};

// Get donor profile
export const getDonorById = async (donorId) => {
    try {
        const response = await axios.get(`${API_DONORS_URL}/${donorId}`);
        return response.data; // Return donor data
    } catch (error) {
        console.error('Error fetching donor profile:', error);
        throw error;
    }
};

// Update donor profile
export const updateDonorProfile = async (donorId, updatedData) => {

    try {
        const response = await axios.put(`${API_DONORS_URL}/${donorId}`, updatedData);
        return response.data; // Return updated donor data

    } catch (error) {
        console.error('Error updating donor profile:', error);
        throw error;
    }
};

// Get donor history
export const getDonorHistory = async (donorId) => {
    try {
        const response = await axios.get(`${API_DONORS_URL}/history/${donorId}`);
        return response.data; // Return data
    } catch (error) {
        console.error('Error fetching donor profile:', error);
        throw error;
    }
}