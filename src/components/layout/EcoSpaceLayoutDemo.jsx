import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import EcoSpaceSidebar from "../ecoSpace/EcoSpaceSidebar";

const EcoSpaceLayout = () => {
  const data = useLoaderData();

  const ecoSpace = data.data;
  return (
    <Layout>
      <Sider
        className="w-auto !min-w-[300px] !max-w-auto flex-none"
        style={{ backgroundColor: "#4a154b" }}
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
        {/* <Menu theme="light" mode="vertical" items={items} /> */}
        <EcoSpaceSidebar ecoSpace={ecoSpace} />
      </Sider>
      <Layout>
        <Content className="h-[100vh] overflow-y-scroll">
          <div className="p-5">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EcoSpaceLayout;
