import { PiOfficeChairBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const DashboardStatisticsCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      <Link
        to="/dashboard/eco-spaces"
        className="p-5 shadow-sm bg-base-100 rounded-lg flex justify-start items-center gap-4 hover:shadow-lg  hover:!text-black"
      >
        <PiOfficeChairBold className="text-4xl text-primary " />
        <div className="space-y-1">
          <h2>EcoSpaces</h2>
          <p className="text-3xl font-semibold">10</p>
        </div>
      </Link>
      <Link
        to="/dashboard/users"
        className="p-5 shadow-sm bg-base-100 rounded-lg flex justify-start items-center gap-4 hover:shadow-lg hover:!text-black"
      >
        <FaUsers className="text-4xl text-primary " />
        <div className="space-y-1">
          <h2>Users</h2>
          <p className="text-3xl font-semibold">20</p>
        </div>
      </Link>
      <div className="p-5 shadow-sm bg-base-100 rounded-lg flex justify-start items-center gap-4 hover:shadow-lg">
        <BsBagCheck className="text-4xl text-primary " />
        <div className="space-y-1">
          <h2>Subscribed</h2>
          <p className="text-3xl font-semibold">08</p>
        </div>
      </div>
      <div className="p-5 shadow-sm bg-base-100 rounded-lg flex justify-start items-center gap-4 hover:shadow-lg">
        <AiOutlineDollar className="text-4xl text-primary " />
        <div className="space-y-1">
          <h2>Revenue</h2>
          <p className="text-3xl font-semibold">$200</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatisticsCard;
