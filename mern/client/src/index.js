// Import the React library to use React components and features.
import React from "react";

// Import createRoot from react-dom/client for rendering the app.
import { createRoot } from "react-dom/client";

// Import BrowserRouter from react-router-dom for routing in the application.
import { BrowserRouter } from "react-router-dom";

// Import the App component from the current project directory.
import App from "./App";

// Get the DOM element with the ID 'root' where the React app will be mounted.
const container = document.getElementById("root");

// Create a root render node using createRoot, passing the container as an argument.
// If using TypeScript, ensure the container is not null by using 'container!' syntax.
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Render the React application inside the root node.
// React.StrictMode is used to enable additional checks and warnings in development mode.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
