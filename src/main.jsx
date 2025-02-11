import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoute.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
