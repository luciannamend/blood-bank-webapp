import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

// Donor login
export const loginDonor = (email, password) => {
    return axios.post(`${API_BASE_URL}/donors/login`, { email, password });
};

// Donor registration
export const registerDonor = (donorData) => {
    return axios.post(`${API_BASE_URL}/donors`, donorData);
};
