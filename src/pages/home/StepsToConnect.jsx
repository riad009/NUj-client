import { CalendarOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const StepsToConnect = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-10 py-10">
      <h3 className="text-xl">STEPS TO CONNECT WITH CONSULT</h3>
      <h2
        style={{ fontFamily: "Protest Revolution, sans-serif" }}
        className="text-2xl md:text-5xl tracking-wider text-center"
      >
        How Our Work Process Connects <br />
        with You
      </h2>
      {/* services cards  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="flex justify-between items-center bg-base-200 p-10 hover:bg-black transition-all duration-500 cursor-pointer hover:text-white ">
          <div className="w-[60%] space-y-5">
            <h2
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className="text-2xl tracking-wider"
            >
              1. Schedule a Time
            </h2>
            <p className="tracking-wide">
              We value your time and passion to connect NU-j
            </p>
          </div>
          <Avatar size={150} icon={<CalendarOutlined />} />
        </div>
        <div className="flex justify-between items-center bg-base-200 p-10 hover:bg-black transition-all duration-500  cursor-pointer hover:text-white ">
          <div className="w-[60%] space-y-5">
            <h2
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className="text-2xl tracking-wider"
            >
              1. Schedule a Time
            </h2>
            <p className="tracking-wide">
              We value your time and passion to connect NU-j
            </p>
          </div>
          <Avatar size={150} icon={<CalendarOutlined />} />
        </div>
        <div className="flex justify-between items-center bg-base-200 p-10 hover:bg-black transition-all duration-500  cursor-pointer hover:text-white ">
          <div className="w-[60%] space-y-5">
            <h2
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className="text-2xl tracking-wider"
            >
              1. Schedule a Time
            </h2>
            <p className="tracking-wide">
              We value your time and passion to connect NU-j
            </p>
          </div>
          <Avatar size={150} icon={<CalendarOutlined />} />
        </div>
        <div className="flex justify-between items-center bg-base-200 p-10 hover:bg-black transition-all duration-500  cursor-pointer hover:text-white ">
          <div className="w-[60%] space-y-5">
            <h2
              style={{ fontFamily: "Protest Revolution, sans-serif" }}
              className="text-2xl tracking-wider"
            >
              1. Schedule a Time
            </h2>
            <p className="tracking-wide">
              We value your time and passion to connect NU-j
            </p>
          </div>
          <Avatar size={150} icon={<CalendarOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default StepsToConnect;
