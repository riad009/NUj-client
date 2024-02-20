import { IoLocationOutline } from "react-icons/io5";
import { CiTimer, CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { Image } from "antd";

const AppointmentPage = () => {
  return (
    <>
      <section className="bg-primary min-h-screen flex justify-center items-center overflow-hidden">
        <div className="w-11/12 mx-auto my-20 space-y-5">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Appointment
          </h1>
          <div className="flex flex-col p-5 md:p-10 gap-2 bg-base-100  rounded-lg">
            <div className="flex justify-between items-start md:items-center">
              <Link
                to="/profile/eco-space"
                className="text-xl md:text-2xl font-semibold flex items-center gap-1"
              >
                <span>Company / Org Name</span>
                <FaArrowRight />
              </Link>
              <div className="flex gap-2">
                <button className="p-btn ">
                  {/* <TiTickOutline /> */}
                  Finish
                </button>
                <button className="p-btn !bg-error">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <Link
              to="/dashboard/users/user"
              className="text-lg flex items-center gap-1"
            >
              <span>Participant - John Doe</span>
              <FaArrowRight />
            </Link>
            {/* <h2 className="text-lg">Participant - John Doe</h2> */}
            <h3>Reason - Requiring court verification</h3>

            <div className="flex flex-col md:flex-row justify-between items-center my-4">
              <div className="flex items-center justify-center gap-1">
                <CiTimer className="text-2xl" />
                <span>18:30:00</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <CiCalendarDate className="text-2xl" />
                <span>2024-02-13</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IoLocationOutline className="text-2xl" />
                <span>location, location, location</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-5">
              <div className="space-y-2">
                <h2 className="text-xl">Location Photo:</h2>
                {/* <img
                  src="https://miro.medium.com/v2/resize:fit:1400/0*6lX9i2AVnurxCQgx"
                  alt=""
                /> */}
                <Image
                  className="w-full"
                  src="https://miro.medium.com/v2/resize:fit:1400/0*6lX9i2AVnurxCQgx"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl">Documents Uploaded: </h2>
              </div>
            </div>
            <div className="text-center">
              <Link to="/dashboard/appointments" className="p-btn ">
                Approve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;