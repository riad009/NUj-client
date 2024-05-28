import { useLoaderData, useParams } from "react-router-dom";
import EcoSpaceConversation from "../../components/ecoSpace/EcoSpaceConversation";
import PersonalConversation from "../../components/ecoSpace/PersonalConversation";
import { isValidEmail } from "../../config";

const EcoSpaceConversations = () => {
  const data = useLoaderData();
  const { projectId } = useParams();

  const channelData = data.data;

  const isPersonalChat = isValidEmail(projectId);

  return (
    <>
      {isPersonalChat ? (
        <PersonalConversation email={projectId} />
      ) : (
        <EcoSpaceConversation channelData={channelData} />
      )}
    </>
  );
};

export default EcoSpaceConversations;
