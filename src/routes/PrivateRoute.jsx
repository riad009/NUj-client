import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login-options" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
