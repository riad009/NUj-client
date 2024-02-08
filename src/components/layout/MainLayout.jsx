import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/nav/Navbar";
import Footer from "../../pages/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
