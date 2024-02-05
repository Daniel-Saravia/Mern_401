// Import necessary libraries and modules.
import React, { useState } from 'react';
import axios from 'axios'; // Make sure to have axios installed
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
//provides a form for users to enter their username and password. 
// On form submission, it sends these credentials to the server's login endpoint.
// Define the Login component.
function Login() {
  // Define state variables for username and password input fields.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Access the navigate function from react-router-dom to handle navigation.
  const navigate = useNavigate();

  // Access the login function from the AuthContext for handling authentication.
  const { login } = useAuth();

  // Define a function to handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Attempt to log in with the provided username and password.
    const loginSuccessful = await login(username, password);

    if (loginSuccessful) {
      // Redirect to the home page or dashboard upon successful login.
      navigate('/');
    } else {
      // Optionally handle login failure (e.g., display an error message).
    }
  };

  // Render a login form with input fields for username and password.
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

// Export the Login component for use in other parts of the application.
export default Login;
