import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { AuthProvider } from "./ContextAPI/auth.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <App />
      <ToastContainer />
    </StrictMode>
  </AuthProvider>,
);
