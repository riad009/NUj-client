import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to="/login-options" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
