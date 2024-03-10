import { useContext } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const EcoSpaceHome = () => {
  const { setEcoSpaceLeftBarOpen } = useContext(AuthContext);
  return (
    <>
      <div className=" flex flex-col gap-5 relative h-[100vh] max-h-[100vh]">
        <div className="">
          <div className="border-b-[.5px] border-b-gray-300 h-16 flex justify-between items-center px-5">
            <div className="flex items-center gap-2">
              <IoMenuOutline
                onClick={() =>
                  setEcoSpaceLeftBarOpen((prevState) => !prevState)
                }
                className="size-8 text-gray-500 cursor-pointer block md:hidden"
              />
            </div>
          </div>
          <div className="text-3xl flex items-center justify-center mt-20">
            <h1>Welcome to ecospace</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoSpaceHome;
