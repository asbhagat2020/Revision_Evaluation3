import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Replace with your backend URL

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data.message;
            if (errorMessage === 'User already exists') {
                alert('User with this email already exists. Please try logging in.');
            } else {
                alert(`Registration failed: ${errorMessage}`);
            }
        } else {
            alert('An unexpected error occurred. Please try again.');
        }
        throw error;
    }
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};
