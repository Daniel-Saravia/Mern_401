// Import necessary libraries and modules.
import express from 'express';
import cors from 'cors';

// Import custom modules and middleware.
import './loadEnvironment.mjs'; // Loading environment variables
import records from './routes/record.mjs'; // Importing routes for records
import authRoutes from './routes/auth.js'; // Importing routes for authentication

// Define the port on which the server will listen.
const PORT = 5050;

// Create an Express application instance.
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for your server.
app.use(cors());

// Parse JSON request bodies.
app.use(express.json());

// Use the routes defined in your application.
app.use('/record', records); // Use the records routes under '/record'
app.use('/api/auth', authRoutes); // Use the authentication routes under '/api/auth'

// Start the server and listen on the specified port.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
