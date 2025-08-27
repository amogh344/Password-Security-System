import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL, // Your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define the registration API call
export const registerUser = (userData) => {
  return api.post('/auth/register', userData);
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

// Define the login API call
export const loginUser = (userData) => {
  return api.post('/auth/login', userData);
};



export const checkPasswordStrength = (password) => {
  return api.post('/password/strength', { password });
};

// We will add login and other functions here later
export default api;