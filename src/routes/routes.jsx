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
import CreateEcoSpaceS1 from "../pages/createEcoSpace/CreateEcoSpaceS1";
import CreateEcoSpaceS2 from "../pages/createEcoSpace/CreateEcoSpaceS2";
import CreateEcoSpaceLayout from "../components/layout/CreateEcoSpaceLayout";
import CreateEcoSpaceS3 from "../pages/createEcoSpace/CreateEcoSpaceS3";
import CreateEcoSpaceS4 from "../pages/createEcoSpace/CreateEcoSpaceS4";
import CreateEcoSpaceS5 from "../pages/createEcoSpace/CreateEcoSpaceS5";
import CreateEcoSpaceS6 from "../pages/createEcoSpace/CreateEcoSpaceS6";
import CreateEcoSpaceBanner from "../pages/createEcoSpace/CreateEcoSpaceBanner";
import CreateEcoSpacePlan from "../pages/createEcoSpace/CreateEcoSpacePlan";
import CreateEcoSpacePlanBanner from "../pages/createEcoSpace/CreateEcoSpacePlanBanner";
import CreateEcoSpaceNotificationConsent from "../pages/createEcoSpace/CreateEcoSpaceNotificationConsent";
import UserProfile from "../pages/userProfile/UserProfile";
import EcoSpaceList from "../pages/companyProfile/EcoSpaceList";
import EcoSpaceProfile from "../pages/companyProfile/EcoSpaceProfile";
import MakeAppointment from "../pages/appointment/MakeAppointment";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardUsers from "../pages/dashboard/DashboardUsers";

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
        path: "/home",
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
      {
        path: "/profile/user",
        element: <UserProfile />,
      },
      {
        path: "/profile/eco-space/list",
        element: <EcoSpaceList />,
      },
      {
        path: "/profile/eco-space",
        element: <EcoSpaceProfile />,
      },
      {
        path: "/make-appointment",
        element: <MakeAppointment />,
      },
    ],
  },
  {
    path: "/login-options",
    element: <LoginOptions />,
  },

  {
    path: "/create-eco-space/banner",
    element: (
      <PrivateRoute>
        <CreateEcoSpaceBanner />
      </PrivateRoute>
    ),
  },
  {
    path: "/create-eco-space",
    element: (
      <PrivateRoute>
        <CreateEcoSpaceLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/create-eco-space/s1",
        element: <CreateEcoSpaceS1 />,
      },
      {
        path: "/create-eco-space/s2",
        element: <CreateEcoSpaceS2 />,
      },
      {
        path: "/create-eco-space/s3",
        element: <CreateEcoSpaceS3 />,
      },
      {
        path: "/create-eco-space/s4",
        element: <CreateEcoSpaceS4 />,
      },
      {
        path: "/create-eco-space/s5",
        element: <CreateEcoSpaceS5 />,
      },
      {
        path: "/create-eco-space/s6",
        element: <CreateEcoSpaceS6 />,
      },
      {
        path: "/create-eco-space/plans/banner",
        element: <CreateEcoSpacePlanBanner />,
      },
      {
        path: "/create-eco-space/plans",
        element: <CreateEcoSpacePlan />,
      },
      {
        path: "/create-eco-space/notification/consent",
        element: <CreateEcoSpaceNotificationConsent />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/statistics",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/users",
        element: <DashboardUsers />,
      },
    ],
  },
]);
