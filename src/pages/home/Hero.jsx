import { Link } from "react-router-dom";
import court from "../../assets/home/court.mp4";
import stone from "../../assets/home/stone.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <video
        className="min-w-[100vw] min-h-[100vh] object-cover"
        autoPlay
        type="video/mp4"
        muted
        loop
        src={court}
      ></video>

      <div className="home-hero absolute top-0 left-0 w-full h-full pt-16">
        <div
          className="md:grid w-11/12 mx-auto"
          style={{ gridTemplateColumns: "2fr 3fr" }}
        >
          <div className="flex flex-col justify-center gap-8">
            <h3 className="text-xl">INNOVATIVE IDEAS</h3>
            <h2
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className="text-5xl tracking-wider"
            >
              We Provide The Best Possible Legal Services Globally
            </h2>
            <p className="tracking-wide">
              Vitae auctor eu augue ut lectus arcu. Dictum fusce ut placerat
              orci nulla pellentesque dignissim enim. Enim nunc faucibus a
              pellentesque sit amet porttitor eget dolor.
            </p>
            <div>
              <Link to="/get-started" className="p-btn">
                Get Started
              </Link>
            </div>
          </div>
          <img className="w-full hidden md:block" src={stone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
