import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { routeObject } from "./route";
import "./firebase";
import "./css/style.scss";

const router = createBrowserRouter(routeObject);

const root = ReactDOM.createRoot(document.body as Element);
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  //  </React.StrictMode> 
);

reportWebVitals();
