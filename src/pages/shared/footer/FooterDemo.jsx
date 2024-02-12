import { Avatar, Divider } from "antd";
import {
  PhoneOutlined,
  SendOutlined,
  HomeOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-accent text-white w-full py-5">
      <div className="w-11/12 mx-auto">
        {/* top */}
        <div
          style={{ gridTemplateColumns: "3fr 5fr 2fr" }}
          className="flex flex-col md:grid gap-10 py-10 tracking-wider text-base-200"
        >
          {/* lefy */}
          <div className="space-y-12">
            <div>
              {/* by law */}
              {/* <img className="size-20" src={logo} alt="" /> */}
              <h2 className="f-title !text-4xl">NUj.</h2>
              <p>
                Dui vivamus arcu felis bibendum. Sed cras ornare arcu dui
                vivamus. Eget lorem dolor sed viverra ipsum nunc aliquet nec
                ullamcorper.
              </p>
            </div>
            <div>
              {/* office address */}
              <h2 className="f-title">Office Address</h2>
              <div className="flex gap-2 items-center">
                <HomeOutlined />
                <p>usa usa usa abcdefg USA</p>
              </div>
            </div>
          </div>
          {/* middle */}
          <div className="space-y-12">
            <div>
              {/* news letter */}
              <h2 className="f-title">Subscribe To Our Newsletter</h2>
              <form className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                  <input
                    type="text"
                    placeholder="your@gmail.com"
                    className="border-b border-b-base-200 bg-transparent focus:outline-none w-full"
                  />
                  <button type="submit">
                    <SendOutlined />
                  </button>
                </div>
                <span className="text-base-300 text-sm">
                  Enter your email address
                </span>
              </form>
            </div>
            <div className="flex justify-between items-center">
              <div>
                {/* contact us */}
                <h2 className="f-title">Contact Us</h2>
                <div className="flex items-center gap-2">
                  <MailOutlined />
                  <p>example@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneOutlined />
                  <p>123456789012</p>
                </div>
              </div>
              <div>
                {/* social icons */}
                <h2 className="f-title">Our Social Media</h2>
                <div className="flex gap-2">
                  <Avatar size={50} icon={<PhoneOutlined />} />
                  <Avatar size={50} icon={<PhoneOutlined />} />
                  <Avatar size={50} icon={<PhoneOutlined />} />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div>
            {/* expertise */}
            <h2 className="f-title">Expertise</h2>
            <ul className="ms-5">
              <li className="list-disc">Law Construction</li>
              <li className="list-disc">Law Construction</li>
              <li className="list-disc">Law Construction</li>
              <li className="list-disc">Law Construction</li>
              <li className="list-disc">Law Construction</li>
            </ul>
          </div>
        </div>
        <Divider className="bg-base-100" />
        {/* bottom */}
        <div className="text-center">
          Copyright nju.com, All Rights Reserved 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
