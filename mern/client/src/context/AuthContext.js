// Import necessary modules
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios'; 

// defines a React context for authentication, including a login function that performs the 
// actual login request using axios. It updates the context with the user's information 
// upon successful login.

// Create a new context for authentication
const AuthContext = createContext();

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}

// Authentication provider component
export const AuthProvider = ({ children }) => {
  // State to keep track of the current user
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle user login
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

  // Value object containing current user and login function to be provided to the context
  const value = {
    currentUser,
    login
  };

  // Provide the authentication context and its value to the child components
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
