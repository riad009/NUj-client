import { useContext } from "react";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { PiOfficeChair } from "react-icons/pi";
import { MdOutlineDashboard, MdAddBusiness } from "react-icons/md";
import { LiaHandshakeSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { RiQrScan2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const SidebarItems = () => {
  const { logOut, onClose, userDB } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log({ userDB });

  const handleLogout = () => {
    logOut();
    navigate("/login");
    toast.success("Logged out");
  };

  return (
    <div className="flex flex-col text-base tracking-wider space-y-2">
      <NavLink
        onClick={onClose}
        to="/home"
        // activeClassName="active-link"
        // className=""
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-gray-200" : ""
          }`
        }
      >
        <IoHomeOutline className="text-xl text-primary" />
        <span>Home</span>
      </NavLink>
      <NavLink
        onClick={onClose}
        to="/profile/user"
        // activeClassName="active-link"
        // className="flex items-center gap-2"
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-gray-200" : ""
          }`
        }
      >
        <GoPerson className="text-xl text-primary" />
        <span>Profile</span>
      </NavLink>
      <NavLink
        onClick={onClose}
        to="/toxic-detection/assessment"
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-gray-200" : ""
          }`
        }
      >
        <RiQrScan2Line className="text-xl text-primary" />
        <span>Text-Toxicity</span>
      </NavLink>

      {/* <Dropdown
        menu={{
          items,
        }}
        className="p-2"
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
        className="p-2"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <DownOutlined />
            Services
          </Space>
        </a>
      </Dropdown> */}
      <NavLink
        onClick={onClose}
        to="/pricing"
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-gray-200" : ""
          }`
        }
      >
        <AiOutlineDollar className="text-xl text-primary" />
        <span>Pricing</span>
      </NavLink>
      {userDB?.role === "superAdmin" && (
        <NavLink
          onClick={onClose}
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg p-2 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <MdOutlineDashboard className="text-xl text-primary" />
          <span>Dashboard</span>
        </NavLink>
      )}
      <NavLink
        onClick={onClose}
        to="/profile/eco-space/list"
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-gray-200" : ""
          }`
        }
      >
        <PiOfficeChair className="text-xl text-primary" />
        <span>My EcoSpaces</span>
      </NavLink>
      {(userDB?.role === "superAdmin" || userDB?.role === "admin") && (
        <NavLink
          onClick={onClose}
          to="/create-eco-space/banner"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-lg p-2 ${
              isActive ? "bg-gray-200" : ""
            }`
          }
        >
          <MdAddBusiness className="text-xl text-primary" />
          <span>Add new EcoSpace</span>
        </NavLink>
      )}
      <NavLink
        onClick={onClose}
        to="/eco-space-list"
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-gray-200" : ""
          }`
        }
      >
        <LiaHandshakeSolid className="text-xl text-primary" />
        <span>Make an Appointment</span>
      </NavLink>
      {/* <NavLink
        onClick={onClose}
        to="/upload-documents"
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-gray-200" : ""
          }`
        }
      >
        <RiFolderUploadLine className="text-xl text-primary" />
        <span>Upload Documents</span>
      </NavLink> */}
      <button
        className={`px-4 py-2 border uppercase  font-semibold rounded-md
          bg-error text-base-100
        }`}
        onClick={handleLogout}
      >
        Sign out
      </button>
    </div>
  );
};

export default SidebarItems;
