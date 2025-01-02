import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/users' });

// Add token to headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const registerUser = (formData) => API.post('/register', formData);
export const loginUser = (formData) => API.post('/login', formData);
export const updatePreferences = (preferences) => API.put('/preferences', preferences);
