import { NavLink, Navigate, Outlet } from "react-router-dom";
import DashboardNavbar from "../../pages/shared/nav/DashboardNavbar";
import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;
import { IoHomeOutline } from "react-icons/io5";
import { CgPerformance } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { PiOfficeChair } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";

const items = [
  {
    key: "Statistics",
    label: <NavLink to="/dashboard/statistics">Statistics</NavLink>,
    icon: <CgPerformance />,
  },
  {
    key: "Users",
    label: <NavLink to="/dashboard/users">Users</NavLink>,
    icon: <FaUsers />,
  },
  {
    key: "EcoSpaces",
    label: <NavLink to="/dashboard/eco-spaces">EcoSpaces</NavLink>,
    icon: <PiOfficeChair />,
  },
  {
    key: "Appointment",
    label: <NavLink to="/dashboard/appointments">Appointments</NavLink>,
    icon: <FaHandshake />,
  },
  {
    key: "Back to Home",
    label: <NavLink to="/home">Back to Home</NavLink>,
    icon: <IoHomeOutline />,
  },
];

const DashboardLayout = () => {
  return (
    <Layout>
      <Sider
        className=""
        style={{ paddingTop: "80px", backgroundColor: "white" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="vertical" items={items} />
      </Sider>
      <Layout>
        <Header>
          <DashboardNavbar />
        </Header>
        <Content className="h-[90vh] overflow-y-scroll">
          <div className="p-5">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
