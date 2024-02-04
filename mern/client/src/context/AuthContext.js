// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios'; 
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    // Example: Send username and password to the server and wait for a response
    // This part will depend on your backend API
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      if (response.data) {
        // Assuming response.data contains the user information
        setCurrentUser(response.data);
        return true; // Login successful
      }
    } catch (error) {
      console.error("Login failed:", error);
      return false; // Login failed
    }
  };

  const value = {
    currentUser,
    login
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};