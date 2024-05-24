import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { userDB, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (userDB?.role === "admin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
