import { Button } from "antd";
import React from "react";
import { MdOutlineCloudDownload } from "react-icons/md";

const ConversationCard = ({ conversation }) => {
  const { email, image, time, date, text, video, voice, generalDocument } =
    conversation ?? {};
  return (
    <div className="flex gap-2 items-start">
      <img src={image} className="size-10 rounded-md" alt="" />
      <div>
        <div className="flex gap-4 items-center">
          <p className="font-bold">{email}</p>
          <p className="text-xs text-accent">{time}</p>
        </div>
        {text ? <p className="">{text}</p> : ""}
        {/* video adding */}
        {voice ? (
          <audio className="" controls>
            <source src={voice} type="audio/ogg" />
            <source src={voice} type="audio/mpeg" />
            Your browser does not support this audio.
          </audio>
        ) : (
          ""
        )}
        {generalDocument ? (
          <Button
            size="large"
            className="flex items-center"
            icon={<MdOutlineCloudDownload className="text-blue-500 size-6" />}
          >
            Download Document
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ConversationCard;
