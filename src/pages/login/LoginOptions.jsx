import logo from "../../assets/logos/main-logo.png";
import { Button } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const LoginOptions = () => {
  const { logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { user } = await logInWithGoogle();
    if (!user?.uid) {
      return toast.error(`Log in failed`, {
        id: "login",
        duration: 2000,
        position: "top-right",
      });
    }
    toast.success(`Logged in`, {
      id: "login",
      duration: 2000,
      position: "top-right",
    });
    navigate("/ready-to-register");
  };

  return (
    <div className="">
      <div className="w-10/12 mx-auto grid md:grid-cols-2 justify-center items-center  min-h-screen ">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleGoogleLogin}
            size="large"
            className=""
            block
            icon={<FcGoogle />}
          >
            Continue with Google
          </Button>
          <Button disabled size="large" className="" block icon={<BsApple />}>
            Continue with Apple
          </Button>
          <Link to="/login-with-email">
            <Button
              disabled
              size="large"
              className=""
              block
              icon={<TfiEmail />}
            >
              Continue with Email
            </Button>
          </Link>
        </div>
        <h3 className="text-center">or sign in with EcoSpace URL</h3>
      </div>
    </div>
  );
};

export default LoginOptions;
