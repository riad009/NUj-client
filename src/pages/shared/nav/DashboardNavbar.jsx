import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logos/main-logo.png";
import unknown from "../../../assets/home/unknown.jpg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const DashboardNavbar = () => {
  const { user } = useContext(AuthContext);
  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  return (
    <nav
      className={`h-16 ${
        isScroll ? "bg-base-100 shadow-md" : "bg-base-100"
      } z-10 transition-all duration-500 w-full fixed top-0 left-0 `}
    >
      <div className="w-11/12 flex items-center mx-auto h-full">
        <div className="w-full flex items-center justify-between">
          <Link to="/home">
            <img className="size-8" src={logo} alt="" />
          </Link>
          <div
            className={`flex justify-center items-center gap-8 ${
              isScroll ? "text-white" : ""
            }`}
          >
            <Link to="/profile/user">
              <img
                className="size-8 rounded-full"
                src={user?.photoURL ? user?.photoURL : unknown}
                alt=""
              />
            </Link>
            {/* <button onClick={showDrawer}>Dashboard</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
