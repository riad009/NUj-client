import { useLoaderData } from "react-router-dom";
import EcoSpaceConversation from "../../components/ecoSpace/EcoSpaceConversation";
import EcoSpaceSidebar from "../../components/ecoSpace/EcoSpaceSidebar";

const EcoSpaceHome = () => {
  const data = useLoaderData();

  const ecoSpace = data.data;
  return (
    <>
      {/* <div className="mt-16 min-h-[80vh] h-auto">
        <div className="bg-[#ecdeec] h-full col-span-1">
          <EcoSpaceSidebar ecoSpace={ecoSpace} />
        </div>
        <div className="bg-base-100 h-full col-span-3 ">
        </div>
      </div> */}
      <EcoSpaceConversation ecoSpace={ecoSpace} />
    </>
  );
};

export default EcoSpaceHome;
