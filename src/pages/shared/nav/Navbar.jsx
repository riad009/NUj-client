import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import logo from "../../../assets/logos/main-logo.png";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { showDrawer } = useContext(AuthContext);

  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  const NavLinks = (
    <>
      <li className="text-grey tracking-wider flex">
        <Link to="/profile/user" className="text-3xl">
          <BsPerson />
        </Link>
      </li>
      <li className="text-grey tracking-wider flex">
        <button
          className={`hidden md:block ps-4 py-2  uppercase font-semibold rounded-md ${
            isScroll ? " text-primary border-primary" : ""
          }`}
          onClick={showDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
            fill="text-white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </li>
    </>
  );

  return (
    <nav
      className={`${
        isScroll
          ? "bg-white shadow-md"
          : `${navbar ? "" : "bg-neutral text-white"}`
      }  z-10 transition-all duration-500 w-full fixed top-0 left-0 `}
    >
      <div className={`${navbar ? "bg-base-300 shadow" : ""} py-3 md:py-0`}>
        <div className="justify-between w-11/12 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <ul className="flex justify-center items-center space-x-4 md:space-x-8 md:space-y-0 tracking-wider">
                <li>
                  <Link
                    className=" text-xl font-bold flex items-center gap-1"
                    to="/"
                  >
                    <img className="h-[32px] md:my-4" src={logo} alt="" />
                    {/* <h2 className="">remcast</h2> */}
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-2">
                <Link to="/profile/user" className="text-3xl block md:hidden">
                  <BsPerson />
                </Link>
                <button
                  className={` text-sm md:hidden py-1  font-semibold rounded-md ${
                    isScroll ? "bg-base-100  text-primary border-primary" : ""
                  }`}
                  onClick={showDrawer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-8"
                    fill="text-white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-2 font-bold md:font-normal md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className={`items-center justify-center space-y-4 md:flex md:space-x-8 md:space-y-0 tracking-wider text-sm`}
              >
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
