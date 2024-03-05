import React from "react";
import ConversationCard from "./ConversationCard";

const EcoSpaceConversation = () => {
  const converstations = [
    {
      email: "sasas@ds.com",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww",
      text: "sdj sds dioshd isdis disdh ioshdios hdiosh idsiod sodh ",
      video: "",
      voice: "",
      generalDocument: "sdsds d",
      time: "12:32:03",
      date: "2024:03:05",
    },
    {
      email: "sasas@ds.com",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww",
      text: "sdj sds dioshd isdis disdh ioshdios hdiosh idsiod sodh ",
      video: "",
      voice: "dsds",
      generalDocument: "",
      time: "12:32:03",
      date: "2024:03:05",
    },
    {
      email: "sasas@ds.com",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww",
      text: "sdj sds dioshd isdis disdh ioshdios hdiosh idsiod sodh err er ere rrrrrrrrrrer ere re rer         e rer e",
      video: "",
      voice: "",
      generalDocument: "sdsds d",
      time: "12:32:03",
      date: "2024:03:05",
    },
  ];
  return (
    <div className="p-5 space-y-5">
      {converstations?.length
        ? converstations.map((conversation, i) => (
            <ConversationCard key={i} conversation={conversation} />
          ))
        : ""}
    </div>
  );
};

export default EcoSpaceConversation;
