import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokeStats } from "./assets/Components/PokeStats/PokeStats";
import { ErrorPage } from "./assets/Components/ErrorPage.jsx/ErrorPage";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/pokemons",
    element: <App />,
  },
  {
    path: "/",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pokemons/:id",
    element: <PokeStats />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
2;
