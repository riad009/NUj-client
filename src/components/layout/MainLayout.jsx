import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/nav/Navbar";
import Footer from "../../pages/shared/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Drawer } from "antd";

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
        title="Basic Drawer"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default MainLayout;
