import { Link } from "react-router-dom";
import logo from "../../assets/logos/main-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ws from "../../assets/home/ws.jpg";
import LoginSVG from "../../assets/svg/LoginSVG";

const CreateEcoSpaceBanner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex bg-[#f4ede480] py-10">
      <div className="flex flex-col  md:px-10 items-center justify-center w-11/12 md:w-[70%] mx-auto gap-5">
        <div className="flex flex-col justify-center items-center space-y-2 mb-2">
          <img className="size-12" src={logo} alt="" />
          <div className="flex gap-1 text-xs bg-[#f4ede4] p-1 rounded-2xl">
            <p>Confirmed as</p>
            <span className="font-semibold">{user?.email}</span>
            <Link className="link" to="/login-options">
              Change
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="space-y-5 ">
            <h1 className="text-5xl font-semibold">Create a new EcoSpace</h1>
            <p className="">
              You are all set to start a new EcoSpace for your Organization, To
              create a new workspace, click the button below.
            </p>
            <div className="w-full">
              <Link
                to="/create-eco-space/s1"
                className="p-btn tracking-wider w-full"
              >
                Create EcoSpace
              </Link>
            </div>
            <p className="text-xs">
              By continuing, you’re agreeing to our Main Services Agreement,
              User Terms of Service, Privacy Policy and Cookie Policy.
            </p>
          </div>
          {/* <img src={ws} alt="" /> */}
          <LoginSVG />
        </div>
      </div>
    </div>
  );
};

export default CreateEcoSpaceBanner;
