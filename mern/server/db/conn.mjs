// Import the MongoClient class from the 'mongodb' package
import { MongoClient } from "mongodb";

// Retrieve the MongoDB connection string from an environment variable or use an empty string as a fallback
const connectionString = process.env.ATLAS_URI || "";

// Create a new instance of the MongoClient using the connection string
const client = new MongoClient(connectionString);

// Declare a variable to store the MongoDB connection
let conn;

try {
  // Log a message indicating an attempt to connect to MongoDB Atlas
  console.log("Connecting to MongoDB Atlas...");

  // Attempt to establish a connection to the MongoDB Atlas cluster and assign it to 'conn'
  conn = await client.connect();
} catch(e) {
  // If an error occurs during connection, log the error message
  console.error(e);
}

// Select the 'sample_training' database for use in the application
let db = conn.db("sample_training");

// Export the 'db' object as the default export of this module
export default db;
