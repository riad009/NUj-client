import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const SuperAdminRoute = ({ children }) => {
  const { userDB, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (userDB?.role === "superAdmin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SuperAdminRoute;
