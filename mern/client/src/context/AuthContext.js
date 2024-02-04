// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Placeholder for login function
  const login = (username, password) => {
    // Implement login logic here
    // On successful login, set the currentUser
    setCurrentUser({ username });
  };

  const value = {
    currentUser,
    login
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
