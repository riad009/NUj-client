import { Avatar, Input } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import logo from "../../../assets/logos/main-logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      {/* lefy */}
      <div>
        <div>
          {/* by law */}
          <img className="size-20" src={logo} alt="" />
          <p>
            Dui vivamus arcu felis bibendum. Sed cras ornare arcu dui vivamus.
            Eget lorem dolor sed viverra ipsum nunc aliquet nec ullamcorper.
          </p>
        </div>
        <div>
          {/* office address */}
          <h2 className="f-title">Office Address</h2>
          <p>12345c Federal Hill Drive, Virginia USA</p>
        </div>
      </div>
      {/* middle */}
      <div>
        <div>
          {/* news letter */}
          <h2 className="f-title">Subscribe To Our Newsletter</h2>
          <Input />
        </div>
        <div>
          <div>
            {/* contact us */}
            <h2 className="f-title">Contact Us</h2>
            <p>info@nuj.com</p>
            <p>+000 - 123 - 456789</p>
          </div>
          <div>
            {/* social icons */}
            <h2 className="f-title">Our Social Media</h2>
            <div>
              <Avatar size={40} icon={<PhoneOutlined />} />
              <Avatar size={40} icon={<PhoneOutlined />} />
              <Avatar size={40} icon={<PhoneOutlined />} />
              <Avatar size={40} icon={<PhoneOutlined />} />
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div>
        {/* expertise */}
        <h2 className="f-title">Expertise</h2>
      </div>
    </footer>
  );
};

export default Footer;
