import EmailLoginForm from "../pages/login/EmailLoginForm";
import ReadyToRegister from "../pages/login/ReadyToRegister";
import OrganizationServices from "../pages/register/OrganizationServices";
import WelcomeOrganizationRegistration from "../pages/register/WelcomeOrganizationRegistration";

export const authRegisterRoutes = [
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
    path: "/register/organization/services",
    element: <OrganizationServices />,
  },
];
