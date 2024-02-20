import { useContext } from "react";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { PiOfficeChair } from "react-icons/pi";
import { MdOutlineDashboard, MdAddBusiness } from "react-icons/md";
import { LiaHandshakeSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { Dropdown, Space } from "antd";
import { AiOutlineDollar } from "react-icons/ai";
import { DownOutlined } from "@ant-design/icons";

const SidebarItems = () => {
  const { logOut, onClose } = useContext(AuthContext);
  const items = [
    {
      key: "Diversion Program",
      label: <NavLink to="/">Diversion Program</NavLink>,
    },
    {
      key: "Behavioral Health",
      label: "Behavioral Health",
      children: [
        {
          key: "Mental Health",
          label: <NavLink to="/">Mental Health</NavLink>,
        },
        {
          key: "Counseling",
          label: <NavLink to="/">Counseling</NavLink>,
        },
        {
          key: "Group Support",
          label: <NavLink to="/">Group Support</NavLink>,
        },
      ],
    },
    {
      key: "Supporttive Services",
      label: "Supporttive Services",
      children: [
        {
          key: "Food Programs",
          label: <NavLink to="/">Food Programs</NavLink>,
        },
        {
          key: "Financial Programs",
          label: <NavLink to="/">Financial Programs</NavLink>,
        },
        {
          key: "Job Readiness",
          label: <NavLink to="/">Job Readiness</NavLink>,
        },
        {
          key: "Outpatient Services",
          label: <NavLink to="/">Outpatient Services</NavLink>,
        },
      ],
    },
    {
      key: "Mental Health",
      label: <NavLink to="/">Mental Health</NavLink>,
    },
    {
      key: "Reentry",
      label: <NavLink to="/">Reentry</NavLink>,
    },
    {
      key: "Child, Youth & Family",
      label: <NavLink to="/">Child, Youth & Family</NavLink>,
    },
    {
      key: "Other",
      label: <NavLink to="/">Other </NavLink>,
    },
  ];
  return (
    <div className="flex flex-col text-base tracking-wider space-y-4">
      <Link onClick={onClose} to="/home" className="flex items-center gap-2">
        <IoHomeOutline className="text-xl text-primary" />
        <span>Home</span>
      </Link>
      <Link
        onClick={onClose}
        to="/profile/user"
        className="flex items-center gap-2"
      >
        <GoPerson className="text-xl text-primary" />
        <span>Profile</span>
      </Link>

      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <DownOutlined />
            Features
          </Space>
        </a>
      </Dropdown>

      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <DownOutlined />
            Services
          </Space>
        </a>
      </Dropdown>
      <Link onClick={onClose} to="/pricing" className="flex items-center gap-2">
        <AiOutlineDollar className="text-xl text-primary" />
        <span>Pricing</span>
      </Link>
      <Link
        onClick={onClose}
        to="/dashboard"
        className="flex items-center gap-2"
      >
        <MdOutlineDashboard className="text-xl text-primary" />
        <span>Dashboard</span>
      </Link>
      <Link
        onClick={onClose}
        to="/profile/eco-space/list"
        className="flex items-center gap-2"
      >
        <PiOfficeChair className="text-xl text-primary" />
        <span>My EcoSpaces</span>
      </Link>
      <Link
        onClick={onClose}
        to="/create-eco-space/banner"
        className="flex items-center gap-2"
      >
        <MdAddBusiness className="text-xl text-primary" />
        <span>Add new EcoSpace</span>
      </Link>
      <Link
        onClick={onClose}
        to="/make-appointment"
        className="flex items-center gap-2"
      >
        <LiaHandshakeSolid className="text-xl text-primary" />
        <span>Make an Appointment</span>
      </Link>
      <button
        className={`px-4 py-2 border uppercase  font-semibold rounded-md
          bg-error text-base-100
        }`}
        onClick={() => logOut().then(toast.success("Logged out"))}
      >
        Sign out
      </button>
    </div>
  );
};

export default SidebarItems;
