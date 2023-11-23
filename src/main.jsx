import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MessiContextProvider } from "./MessiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MessiContextProvider>
      <App />
    </MessiContextProvider>
  </BrowserRouter>
);
