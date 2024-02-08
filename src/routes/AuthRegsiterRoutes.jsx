import GetStarted from "../pages/GetStarted";
import LoginOptions from "../pages/login/LoginOptions";
import EmailLoginForm from "../pages/login/EmailLoginForm";
import ReadyToRegister from "../pages/login/ReadyToRegister";
import RegisterAsParticiipant from "../pages/register/RegisterAsParticiipant";
import RegisterAsOrganization from "../pages/register/RegisterAsOrganization";
import OrganizationServices from "../pages/register/OrganizationServices";
import WelcomeOrganizationRegistration from "../pages/register/WelcomeOrganizationRegistration";

export const authRegisterRoutes = [
  {
    path: "/get-started",
    element: <GetStarted />,
  },
  {
    path: "/login-options",
    element: <LoginOptions />,
  },
  {
    path: "/login-with-email",
    element: <EmailLoginForm />,
  },
  {
    path: "/ready-to-register",
    element: <ReadyToRegister />,
  },
  {
    path: "/register/organization/welcome",
    element: <WelcomeOrganizationRegistration />,
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
    path: "/register/organization/services",
    element: <OrganizationServices />,
  },
];
