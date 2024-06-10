import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/Auth.jsx";
import { ProductProvider } from "./context/Product.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </AuthProvider>
);
