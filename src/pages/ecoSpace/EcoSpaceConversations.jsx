import { useLoaderData } from "react-router-dom";
import EcoSpaceConversation from "../../components/ecoSpace/EcoSpaceConversation";

const EcoSpaceConversations = () => {
  const data = useLoaderData();

  const channelData = data.data;
  return (
    <>
      <EcoSpaceConversation channelData={channelData} />
    </>
  );
};

export default EcoSpaceConversations;
