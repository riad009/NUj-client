import { Link } from "react-router-dom";
import court from "../../assets/home/court.mp4";
import stone from "../../assets/home/stone.png";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Button } from "antd";

const Hero = () => {
  return (
    <section className="bg-primary text-white h-auto md:h-screen flex justify-center items-center overflow-hidden">
      <div className="w-11/12  mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 gap-5">
        <div className="flex flex-col justify-center items-start gap-5">
          <div>
            <h1 className="text-6xl font-bold">VREMCAST</h1>
            <h1 className="text-6xl font-bold text-secondary">
              A Concept for Change.
            </h1>
          </div>
          <p className="tracking-wide ">
            Nuj is virtual restorative justice mobile eco-space monitoring
            system offering cognitive monitoring & rehabilitative training
            solution offering a fresh approach to monitored movement.
          </p>
          <div className="flex gap-2 ">
            {/* <Button
              className="text-white"
              size="large"
              block
              icon={<FcGoogle />}
            >
              Continue with Google
            </Button>
            <Button
              className="text-white"
              disabled
              size="large"
              block
              icon={<BsApple />}
            >
              Continue with Apple
            </Button> */}
            <Link to="/create-eco-space/banner" className="p-btn">
              Create Ecospace
            </Link>
            <button className="p-btn !text-primary !bg-white ">
              Learn More
            </button>
          </div>
          <p className="text-sm">VREMCAST is free to try</p>
        </div>
        <img className="w-[85%]" src={stone} alt="" />
      </div>
    </section>
  );
};

export default Hero;
