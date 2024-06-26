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
import DashboardEcospaces from "../pages/dashboard/DashboardEcospaces";
import DashboardAppointments from "../pages/dashboard/DashboardAppointments";
import DashboardUserProfile from "../pages/dashboard/DashboardUserProfile";
import AppointmentPage from "../pages/appointment/AppointmentPage";

import UploadDocuments from "../pages/uploadDocuments/UploadDocuments";
import config from "../config";
import PricingBanner from "../pages/pricing/PricingBanner";
import EcoSpaceHome from "../pages/ecoSpace/EcoSpaceHome";
import AcceptInvitation from "../components/ecoSpace/AcceptInvitation";
import EcoSpaceLayout from "../components/layout/EcoSpaceLayout";
import EcoSpaceConversations from "../pages/ecoSpace/EcoSpaceConversations";
import ToxicDetectionAssessment from "../pages/toxicDetection/ToxicDetectionAssessment";
import ToxicDetectionScoreResult from "../pages/toxicDetection/ToxicDetectionScoreResult";
import ToxicDetectionPlanScoreResult from "../pages/toxicDetection/ToxicDetectionPlanScoreResult";
import ToxicDetectionActionPlan from "../pages/toxicDetection/ToxicDetectionActionPlan";
import Signup from "../pages/login/Signup";
import SuperAdminRoute from "./SuperAdminRoute";

import BothAdminRoute from "./BothAdminRoute";
import AuthRoute from "./AuthRoute";
import RequestedAppointments from "../pages/appointment/RequestedAppointments";
import AppointmentRequests from "../pages/appointment/AppointmentRequests";
import AdminRoute from "./AdminRoute";
import Meeting from "../components/ecoSpace/Meeting";
import ForgotPassword from "../pages/login/ForgotPassword";
import ResetPassword from "../pages/login/ResetPassword";

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
        path: "/accept-invitation/:type/:id/:email",
        element: <AcceptInvitation />,
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
        path: "/profile/eco-space/:ecoSpaceId",
        loader: ({ params }) =>
          fetch(`${config.api_url}/eco-spaces/${params.ecoSpaceId}`),
        element: <EcoSpaceProfile />,
      },
      {
        path: "/appointments/:appointmentId",
        loader: ({ params }) => params.appointmentId,
        // loader: ({ params }) =>
        //   fetch(
        //     `${config.api_url}/appointments/details/${params.appointmentId}`
        //   ),
        element: <AppointmentPage />,
      },
      {
        path: "/requested-appointments/:ecoSpaceId",
        element: <RequestedAppointments />,
      },

      {
        path: "/appointment-requests/:ecoSpaceId",
        element: <AppointmentRequests />,
      },
      {
        path: "/meeting",
        element: <Meeting />,
      },
      {
        path: "/make-appointment/:ecoSpaceId",
        loader: ({ params }) => params.ecoSpaceId,
        element: <MakeAppointment />,
      },
      {
        path: "/assessment",
        element: <ToxicDetectionAssessment />,
      },
      {
        path: "/assessment/score-result",
        element: <ToxicDetectionScoreResult />,
      },
      {
        path: "/assessment/plan-result/:response1",
        loader: ({ params }) => params.response1,
        element: <ToxicDetectionPlanScoreResult />,
      },
      {
        path: "/assessment/action-plan",
        element: <ToxicDetectionActionPlan />,
      },
      {
        path: "/upload-documents",
        element: <UploadDocuments />,
      },
      {
        path: "/pricing",
        element: <PricingBanner />,
      },
    ],
  },
  {
    path: "/eco-space/:ecoSpaceId",
    loader: ({ params }) => params.ecoSpaceId,
    // fetch(`${config.api_url}/eco-spaces/${params.ecoSpaceId}`),
    element: <EcoSpaceLayout />,
    children: [
      {
        path: "/eco-space/:ecoSpaceId",
        loader: ({ params }) => params.ecoSpaceId,
        // fetch(`${config.api_url}/eco-spaces/${params.ecoSpaceId}`),
        element: <EcoSpaceHome />,
      },
      {
        path: "/eco-space/:ecoSpaceId/:projectId",
        loader: ({ params }) =>
          fetch(`${config.api_url}/project/single/${params.projectId}`),
        element: <EcoSpaceConversations />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthRoute>
        <LoginOptions />
      </AuthRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthRoute>
        <ForgotPassword />
      </AuthRoute>
    ),
  },
  {
    path: "/reset-password/:token",
    element: (
      <AuthRoute>
        <ResetPassword />
      </AuthRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthRoute>
        <Signup />
      </AuthRoute>
    ),
  },

  {
    path: "/create-eco-space/banner",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <CreateEcoSpaceBanner />
        </AdminRoute>
      </PrivateRoute>
    ),
  },
  {
    path: "/create-eco-space",
    element: (
      <PrivateRoute>
        <BothAdminRoute>
          <CreateEcoSpaceLayout />
        </BothAdminRoute>
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
        <SuperAdminRoute>
          <DashboardLayout />
        </SuperAdminRoute>
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
      {
        path: "/dashboard/eco-spaces",
        element: <DashboardEcospaces />,
      },
      {
        path: "/dashboard/appointments",
        element: <DashboardAppointments />,
      },
      {
        path: "/dashboard/appointments/:ecoSpaceId",
        loader: ({ params }) => params.ecoSpaceId,
        element: <DashboardAppointments />,
      },
      {
        path: "/dashboard/users/:userId",
        loader: ({ params }) => params.userId,
        element: <DashboardUserProfile />,
      },
    ],
  },
]);
