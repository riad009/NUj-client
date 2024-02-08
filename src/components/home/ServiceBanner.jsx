import { Link } from "react-router-dom";

const ServiceBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 py-10">
      <img
        src="https://bylaw.wpengine.com/wp-content/uploads/2023/08/tab-png-5.png"
        alt=""
        className="w-full md:w-[20%]"
      />
      <p
        // style={{ fontFamily: "Protest Revolution, sans-serif" }}
        className="text-2xl tracking-wider md:w-[60%]"
      >
        We Provide Criminal Law Services Like, Drafting And Filing Online
        SupremeCourt Matters For Bail, Appeal And More Services
      </p>

      <Link to="/get-started" className="p-btn">
        View Details
      </Link>
    </div>
  );
};

export default ServiceBanner;
