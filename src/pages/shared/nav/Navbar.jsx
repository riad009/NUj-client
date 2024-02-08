import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPerson, BsCart2 } from "react-icons/bs";
import {
  AiFillProfile,
  AiOutlineHeart,
  AiOutlineProfile,
} from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import logo from "../../../assets/logos/main-logo.png";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const NavLinks = (
    <>
      <li className="text-grey tracking-wider font-bold">
        <Link className="flex items-center text-2xl">
          <Avatar size={40} icon={<UserOutlined />} />
        </Link>
      </li>
      <li className="text-grey tracking-wider font-bold">
        <Link className="flex items-center text-2xl">
          {/* <BsPerson className="" /> */}
          <Avatar size={40} icon={<PhoneOutlined />} />
        </Link>
      </li>
      <li className="text-grey tracking-wider">
        {/* <Link to="/productspage">Find-products</Link> */}
        {/* <form
          onSubmit={(e) => e.preventDefault()}
          className="flex bg-base-200 py-1 px-2 w-full gap-2 rounded-3xl"
        >
          <input
            className=" outline-none bg-transparent rounded-full px-3 py-1 w-full"
            type="search"
            placeholder="Search for product"
          />
          <button className="hidden" type="submit">
            search
          </button>
        </form> */}
      </li>
    </>
  );

  return (
    <nav
      className={`transparent z-10 transition-all duration-500 w-full h-16 absolute top-0 left-0`}
    >
      <div className={`${navbar ? "bg-accent shadow" : ""}`}>
        <div className="justify-between w-11/12 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between md:block py-4">
              <ul className="flex justify-center items-center space-x-4 md:space-x-8 md:space-y-0 tracking-wider">
                <li>
                  <Link
                    className="text-primary text-xl md:text-2xl uppercase font-bold"
                    to="/"
                  >
                    {/* <h2 className="">pending</h2> */}
                    <img className="h-[50px]" src={logo} alt="" />
                  </Link>
                </li>
              </ul>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none swap swap-rotate"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
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
                      className="w-6 h-6 "
                      fill="none"
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
                className={`items-center justify-center space-y-4 md:flex md:space-x-4 md:space-y-0 tracking-wider text-sm`}
              >
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
