// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useAuth } from '../context/AuthContext'; // Import useAuth to access the login function

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const { login } = useAuth(); // Destructure login function from useAuth

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      // Assuming the response includes user data on successful login
      if (res.data) {
        login(res.data); // Update the authentication context
        navigate('/'); // Redirect to the homepage or another protected route
      }
    } catch (error) {
      console.error(error);
      // Optionally handle login failure (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

