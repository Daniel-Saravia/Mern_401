// Importing express module for creating the server and handling routes
import express from "express";
// Importing cors module to enable Cross-Origin Resource Sharing
import cors from "cors";
// Importing environment variables setup from a custom module
import "./loadEnvironment.mjs";
// Importing routes for 'records' from a separate module
import records from "./routes/record.mjs";

// Setting the port number on which the server will listen
const PORT = 5050;
// Creating an instance of express to set up the server
const app = express();

// Applying CORS middleware to allow cross-origin requests
app.use(cors());
// Applying middleware to parse JSON bodies in requests
app.use(express.json());

// Setting up a route for '/record' that uses the imported 'records' router
app.use("/record", records);

// Starting the Express server on the specified PORT
app.listen(PORT, () => {
  // Logging to the console once the server is listening on the specified port
  console.log(`Server listening on port ${PORT}`);
});

