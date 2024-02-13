import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login-options" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
