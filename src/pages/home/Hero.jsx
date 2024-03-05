import { Link } from "react-router-dom";
import stone from "../../assets/home/stone.png";
import banner from "../../assets/home/banner.png";

const Hero = () => {
  return (
    <section className="bg-primary text-white h-auto md:h-screen flex justify-center items-center overflow-hidden">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-7 mt-20 gap-8">
        <div className="flex flex-col justify-center items-start gap-5 md:col-span-2">
          <div className="">
            <h1 className="text-5xl font-bold !title-font">VREMCAST</h1>
            <h1 className="text-5xl font-bold">A Concept for Change.</h1>
          </div>
          <p className="tracking-wider font-medium">
            With VREMCAST, your team is never more than a click away.
          </p>
          <div className="flex gap-2 w-full">
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
            <Link to="/create-eco-space/banner" className="hero-btn">
              Create Ecospace
            </Link>
            {/* <button className=" p-btn !text-primary !bg-white !px-2 w-full md:w-auto !text-sm md:!text-base ">
              Learn More
            </button> */}
          </div>
          <p className="text-sm">VREMCAST is free to try</p>
        </div>
        <img
          className="w-[100%] md:col-span-5 rounded-md"
          src={banner}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
