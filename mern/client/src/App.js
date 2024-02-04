import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/Login";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <div style={{ margin: 20 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <RecordList />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <PrivateRoute>
                  <Edit />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
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
