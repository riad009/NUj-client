import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPerson, BsCart2 } from "react-icons/bs";
import logo from "../../../assets/logos/main-logo.png";

import { BiSearchAlt2 } from "react-icons/bi";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { toast } from "sonner";

const NavbarDemo = () => {
  const [navbar, setNavbar] = useState(false);
  const { logOut } = useContext(AuthContext);

  const [isScroll, setIsScroll] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  const items = [
    {
      label: "Coming",
      key: "1",
    },
    {
      label: "Coming",
      key: "2",
    },
    {
      label: "Coming",
      key: "3",
    },
  ];
  const NavLinks = (
    <>
      <li className="text-grey tracking-wider">
        {/* <Link to="/productspage">Find-products</Link> */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex bg-base-200 py-1 px-2 w-full gap-2 rounded-3xl"
        >
          {
            <Link
              type="submit"
              to={`/productspage`}
              className="rounded-3xl flex justify-center items-center"
            >
              {/* <img src={searchBtn} alt="" /> */}
              <p className="text-2xl text-primary">
                <BiSearchAlt2 />
              </p>
            </Link>
          }
          <input
            className=" outline-none bg-transparent rounded-full px-3 py-1 w-28"
            type="search"
            placeholder="Search"
          />
          <button className="hidden" type="submit">
            search
          </button>
        </form>
      </li>
      <li className="text-grey tracking-wider flex">
        <Link
          className={`px-4 py-2 border uppercase font-semibold rounded-md ${
            isScroll ? "bg-base-100 text-primary border-primary" : ""
          }`}
          to="/"
        >
          Talk to Sales
        </Link>
      </li>
      {/* <li className="text-grey tracking-wider flex">
        <Link to="/">Create new workshop</Link>
      </li> */}
      <li className="text-grey tracking-wider flex">
        <button
          className={`px-4 py-2 border uppercase  font-semibold rounded-md ${
            isScroll ? "bg-primary text-base-100" : "bg-base-100 text-primary"
          }`}
          onClick={() => logOut().then(toast.success("Logged out"))}
        >
          Sign out
        </button>
      </li>
    </>
  );

  const leftItems = (
    <>
      <li className="cursor-pointer">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Features
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </li>
      <li className="cursor-pointer">
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Resources
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </li>
      <li className=" dropdown dropdown-hover py-6">
        <Link
          tabIndex={0}
          className="flex flex-col justify-center items-center gap-[1px]"
        >
          <p className=" ">Pricing</p>
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`${
        isScroll ? "bg-white " : `${navbar ? "" : "bg-transparent text-white"}`
      }  z-10 transition-all duration-500 w-full fixed top-0 left-0`}
    >
      <div className={`${navbar ? "bg-base-300 shadow" : ""} py-3 md:py-0`}>
        <div className="justify-between w-11/12 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block">
              <ul className="flex justify-center items-center space-x-4 md:space-x-8 md:space-y-0 tracking-wider">
                <li>
                  <Link
                    className=" text-xl md:text-2xl uppercase font-bold"
                    to="/"
                  >
                    {/* <h2 className="">pending</h2> */}
                    <img className="h-[32px]" src={logo} alt="" />
                  </Link>
                </li>

                <ul className="hidden md:flex justify-center items-center space-x-4 md:space-x-8 md:space-y-0 tracking-wider">
                  {leftItems}
                </ul>
              </ul>
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                  )}
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
                <ul className="flex md:hidden items-start justify-center space-y-4 md:space-x-8 md:space-y-0 tracking-wider text-sm flex-col">
                  {leftItems}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDemo;
