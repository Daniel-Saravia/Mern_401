import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/Login";

// uses the AuthProvider from AuthContext.js to wrap the application, ensuring that authentication 
// state is accessible throughout the component tree. It also defines routes, including a private 
// route that redirects unauthenticated users to the login page.
//
// Custom PrivateRoute component to protect routes that require authentication
function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

// Main App component
const App = () => {
  return (
    // Wrap the entire application with AuthProvider to manage user authentication
    <AuthProvider>
      <div>
        {/* Display the Navbar component for navigation */}
        <Navbar />
        <div style={{ margin: 20 }}>
          {/* Define routing for different application screens */}
          <Routes>
            {/* Public route for the login page */}
            <Route path="/login" element={<Login />} />

            {/* Protected routes that can only be accessed by authenticated users */}
            <Route
              path="/"
              element={
                // Use PrivateRoute component to protect the RecordList route
                <PrivateRoute>
                  <RecordList />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                // Use PrivateRoute component to protect the Edit route
                <PrivateRoute>
                  <Edit />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
                // Use PrivateRoute component to protect the Create route
                <PrivateRoute>
                  <Create />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
