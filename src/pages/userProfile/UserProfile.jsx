import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex justify-center items-start">
      <h2 className="mt-40">Welcome, {user?.displayName}</h2>
    </div>
  );
};

export default UserProfile;
