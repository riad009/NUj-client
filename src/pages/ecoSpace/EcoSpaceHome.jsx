import EcoSpaceConversation from "../../components/ecoSpace/EcoSpaceConversation";
import EcoSpaceSidebar from "../../components/ecoSpace/EcoSpaceSidebar";

const EcoSpaceHome = () => {
  return (
    <>
      <div className="mt-16 h-screen grid grid-cols-4">
        <div className="bg-[#ecdeec] h-full col-span-1">
          <EcoSpaceSidebar />
        </div>
        <div className="bg-base-100 h-full col-span-3 ">
          <EcoSpaceConversation />
        </div>
      </div>
    </>
  );
};

export default EcoSpaceHome;
