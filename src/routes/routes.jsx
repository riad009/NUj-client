import { createBrowserRouter } from "react-router-dom";
import { authRegisterRoutes } from "./AuthRegsiterRoutes";
import App from "../App";
import Home from "../pages/home/Home";
import GetStarted from "../pages/GetStarted";
import LoginOptions from "../pages/login/LoginOptions";
import RegisterAsParticiipant from "../pages/register/RegisterAsParticiipant";
import RegisterAsOrganization from "../pages/register/RegisterAsOrganization";
import RegisterAsOrganizationPlans from "../pages/register/RegisterAsOrganizationPlans";
import PageNotFound from "../pages/error/PageNotFound";
import PrivateRoute from "./PrivateRoute";
import CreateEcoSpace from "../pages/createEcoSpace/CreateEcoSpace";

export const router = createBrowserRouter([
  ...authRegisterRoutes,
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <PageNotFound />,
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
        path: "/register/participant",
        element: <RegisterAsParticiipant />,
      },
      {
        path: "/register/organization",
        element: <RegisterAsOrganization />,
      },
      {
        path: "/register/organization/plans",
        element: <RegisterAsOrganizationPlans />,
      },
    ],
  },
  {
    path: "/login-options",
    element: <LoginOptions />,
  },
  {
    path: "/create-eco-space",
    element: (
      <PrivateRoute>
        <CreateEcoSpace />
      </PrivateRoute>
    ),
  },
]);
