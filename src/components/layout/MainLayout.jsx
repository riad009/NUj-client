import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/nav/Navbar";
import Footer from "../../pages/shared/footer/Footer";
import NavbarDemo from "../../pages/shared/nav/NavbarDemo";
import { Button, Drawer } from "antd";
import { useState } from "react";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Navbar />
      {/* <NavbarDemo /> */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
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
