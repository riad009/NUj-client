import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/nav/Navbar";
import Footer from "../../pages/shared/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Drawer } from "antd";
import SidebarItems from "./SidebarItems";
import logo from "../../assets/logos/main-logo.png";

const MainLayout = () => {
  const { open, onClose } = useContext(AuthContext);

  return (
    <div>
      <Navbar />

      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />
      <Drawer
        title={<img src={logo} alt="" className="size-8" />}
        placement="left"
        closable={true}
        onClose={onClose}
        open={open}
      >
        <SidebarItems />
      </Drawer>
    </div>
  );
};

export default MainLayout;
