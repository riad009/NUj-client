import logo from "../../assets/logos/main-logo.png";
import { Link } from "react-router-dom";

const ReadyToRegister = () => {
  return (
    <div className="">
      <div className="w-10/12 mx-auto flex flex-col  just md:grid md:grid-cols-2 justify-center items-center  min-h-screen gap-5">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <h2 className="text-3xl text-center">Ready to Register?</h2>
        <div className="flex flex-col gap-2">
          <Link to="/register/organization/welcome" className="p-btn">
            Create Account
          </Link>
        </div>
        <h3 className="text-center text-xl">
          You are all set to start a new EcoSpace for your Organization
        </h3>
      </div>
    </div>
  );
};

export default ReadyToRegister;
