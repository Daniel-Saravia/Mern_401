// Import the mongoose library for working with MongoDB.
import mongoose from 'mongoose';

// Define a schema for the User model.
const UserSchema = new mongoose.Schema({
  // Define a field for the username, which is a string and is required.
  username: { type: String, required: true, unique: true },

  // Define a field for the password, which is a string and is required.
  password: { type: String, required: true }
});

// Export the User model, specifying its name as 'User' and using the defined schema.
export default mongoose.model('User', UserSchema);
