import { useContext, useEffect } from "react";
import MainLayout from "./components/layout/MainLayout";
import { AuthContext } from "./contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { userDB } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userDB?.email) {
      navigate("/login");
    }
  }, [userDB, navigate]);

  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default App;
