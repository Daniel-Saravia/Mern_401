import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import Login from "./components/Login"; // Import the Login component

const App = () => {
  return (
    <div>
      {/* Navbar component is rendered at the top of the application */}
      <Navbar />
      <div style={{ margin: 20 }}>
        {/* Routes component contains all Route components defining the app's routes */}
        <Routes>
          {/* Define the root route ("/") to render the RecordList component */}
          <Route exact path="/" element={<RecordList />} />
          {/* Define the "/edit/:id" route to render the Edit component
              The ":id" part is a URL parameter that will be passed to the Edit component */}
          <Route path="/edit/:id" element={<Edit />} />
          {/* Define the "/create" route to render the Create component */}
          <Route path="/create" element={<Create />} />
          {/* Define the "/login" route to render the Login component */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;