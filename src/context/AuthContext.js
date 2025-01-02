import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load user data from local storage (if available)
  const loadUserData = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setUser(true); // Assuming token means user is authenticated
    }
  };

  // Sign Up function
  const signup = async (email, password, name) => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', {
        email,
        password,
        name,
      });
      const token = res.data.token;
      await AsyncStorage.setItem('token', token);
      setUser(true); // Set user as authenticated
    } catch (err) {
      console.error(err);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      const token = res.data.token;
      await AsyncStorage.setItem('token', token);
      setUser(true); // Set user as authenticated
    } catch (err) {
      console.error(err);
    }
  };

  // Logout function
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setUser(null); // Set user to null (logged out)
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout, loadUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
