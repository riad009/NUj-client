import { Link, Outlet } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const CreateEcoSpaceLayout = () => {
  return (
    <div
      style={{ gridTemplateColumns: "1fr 4fr 15fr" }}
      className="bg-accent min-h-screen text-white grid"
    >
      <div className="py-10 md:py-20">
        <Link
          to="/"
          className="flex flex-col gap-2 justify-center items-center"
        >
          <HomeOutlined />
          <p className="text-xs text-gray-200">Home</p>
        </Link>
      </div>
      <div
        style={{ border: ".2px solid grey" }}
        className="bg-[#17191c] rounded-lg px-3 py-10 md:py-20 space-y-4"
      >
        <div>
          <h4 className=" text-sm md:text-base font-semibold">Company Title</h4>
        </div>
        <div>
          <h4 className="text-gray-200 text-xs space-y-3 ">Staffs:</h4>
          <div className="space-y-1 text-xs md:text-sm">
            <p>XYZ</p>
            <p>XYZ</p>
            <p>XYZ</p>
          </div>
        </div>
      </div>
      <div className="w-full py-10 px-4 md:p-16">
        <Outlet />
      </div>
    </div>
  );
};

export default CreateEcoSpaceLayout;
