import EmailLoginForm from "../pages/login/EmailLoginForm";
import ReadyToRegister from "../pages/login/ReadyToRegister";

export const authRegisterRoutes = [
  {
    path: "/login-with-email",
    element: <EmailLoginForm />,
  },
  {
    path: "/ready-to-register",
    element: <ReadyToRegister />,
  },
];
