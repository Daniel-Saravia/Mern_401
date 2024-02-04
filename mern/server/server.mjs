// server.mjs
import express from 'express';
import cors from 'cors';
import './loadEnvironment.mjs';
import records from './routes/record.mjs';
import authRoutes from './routes/auth.js'; // Importing the default export from auth.js

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Use the routes
app.use('/record', records);
app.use('/api/auth', authRoutes); // Using the imported authRoutes

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
