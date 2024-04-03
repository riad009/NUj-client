import logo from "../assets/logos/main-logo.png";
import circles from "../assets/home/circles.png";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="">
      <div className="w-10/12 mx-auto grid md:grid-cols-2 justify-center items-center  min-h-screen my-5">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" />
          <h2 className="text-3xl text-center">
            NUj Ecosystem Creation for Provider & Participant
          </h2>
        </div>
        <div>
          <img src={circles} alt="" />
          <div className="text-center">
            <Link to="/login" className="p-btn">
              get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
