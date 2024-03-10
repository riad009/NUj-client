import { useLoaderData } from "react-router-dom";
import EcoSpaceConversation from "../../components/ecoSpace/EcoSpaceConversation";

const EcoSpaceHome = () => {
  const data = useLoaderData();

  const ecoSpace = data.data;
  return (
    <>
      <EcoSpaceConversation ecoSpace={ecoSpace} />
    </>
  );
};

export default EcoSpaceHome;
