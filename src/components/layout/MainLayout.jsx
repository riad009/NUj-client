import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/nav/Navbar";
import Footer from "../../pages/shared/footer/Footer";
import NavbarDemo from "../../pages/shared/nav/NavbarDemo";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <NavbarDemo /> */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
