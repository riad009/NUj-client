import { Link } from "react-router-dom";
import banner from "../../assets/home/banner.png";

const Hero = () => {
  return (
    <section className="bg-primary text-white h-auto md:h-screen flex justify-center items-center overflow-hidden">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-7 mb-8 md:mb-0 mt-20 md:mt-8 gap-8">
        <div className="flex flex-col justify-center items-start gap-5 md:col-span-2">
          <div className="">
            <h1 className="text-5xl font-bold !title-font">NUj</h1>
            <h1 className="text-5xl font-bold">
              Wireframing Movement with Dignity.
            </h1>
          </div>
          <p className="tracking-wider font-medium">
            With VREMCAST, your team is never more than a click away.
          </p>
          <div className="flex gap-2 w-full">
            <Link to="/create-eco-space/banner" className="hero-btn">
              Create Ecospace
            </Link>
          </div>
          <p className="text-sm">VREMCAST is free to try</p>
        </div>
        <img
          className="w-[100%] md:col-span-5 rounded-md shadow-2xl border"
          src={banner}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
