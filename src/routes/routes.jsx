import { createBrowserRouter } from "react-router-dom";
import { authRegisterRoutes } from "./AuthRegsiterRoutes";
import App from "../App";
import Home from "../pages/home/Home";
import GetStarted from "../pages/GetStarted";
import LoginOptions from "../pages/login/LoginOptions";
import RegisterAsParticiipant from "../pages/register/RegisterAsParticiipant";
import RegisterAsOrganization from "../pages/register/RegisterAsOrganization";

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
      {
        path: "/get-started",
        element: <GetStarted />,
      },
      {
        path: "/login-options",
        element: <LoginOptions />,
      },
      {
        path: "/register/participant",
        element: <RegisterAsParticiipant />,
      },
      {
        path: "/register/organization",
        element: <RegisterAsOrganization />,
      },
    ],
  },
]);
