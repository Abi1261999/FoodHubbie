import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter><AppProvider><AuthProvider><OrderProvider><App /></OrderProvider></AuthProvider></AppProvider></BrowserRouter>
  </React.StrictMode>
);
