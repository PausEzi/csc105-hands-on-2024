import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import FavouritesPage from "./pages/FavouritesPage";
import FavouriteDetailPage from "./pages/FavouriteDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App.jsx is the root layout
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/fav", element: <FavouritesPage /> },
      { path: "/fav/:id", element: <FavouriteDetailPage /> },
      { path: "*", element: <NotFoundPage /> }, // Wildcard route for 404
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);