import React from "react";
import logo from "../../../assets/logos/faith-cloud-logo.png";
import { Link } from "react-router-dom";
import { FacebookFilled, DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Footer = () => {
  return (
    <footer className="divide-y bg-gray-100 text-gray-800">
      <div className="w-11/12  flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <img className="size-36" src={logo} alt="" />
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracki uppercase text-gray-900">Why NUj</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase text-gray-900">Product</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Coming
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-900">Pricing</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Public Coming
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-900">Pricing</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Company
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Coming
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto pt-6 space-y-8 text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:items-center">
          <ul className="flex justify-center items-center gap-6 text-black font-semibold text-sm w-full md:w-auto">
            <li>
              <Link>Status</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Terms</Link>
            </li>
            <li>
              <Link>Cookies Pref</Link>
            </li>
            <li>
              <Link>Status</Link>
            </li>
          </ul>
          <ul className="flex justify-center items-center gap-3 w-full md:w-auto">
            <Button type="default" shape="round" icon={<DownloadOutlined />}>
              Download App
            </Button>
            <li>
              <a href="#">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookFilled />
              </a>
            </li>
          </ul>
        </div>
        <p className="text-xs">©2024 Nuj, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
