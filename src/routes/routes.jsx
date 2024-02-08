import { createBrowserRouter } from "react-router-dom";
import { authRegisterRoutes } from "./AuthRegsiterRoutes";
import App from "../App";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  ...authRegisterRoutes,
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
