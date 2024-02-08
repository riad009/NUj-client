import { Input } from "antd";
import logo from "../../assets/logos/main-logo.png";

const EmailLoginForm = () => {
  return (
    <div className="">
      <div className="w-10/12 mx-auto grid md:grid-cols-2 justify-center items-center  min-h-screen ">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <form>
          <Input />
        </form>
      </div>
    </div>
  );
};

export default EmailLoginForm;
