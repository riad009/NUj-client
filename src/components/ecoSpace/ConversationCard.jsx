import moment from "moment";
import { FaFile } from "react-icons/fa";
import { saveAs } from "file-saver";

const ConversationCard = ({ conversation, chatRef }) => {
  const email = conversation?.email;
  const userImage = conversation?.userImage;
  const message = conversation?.message;
  const audio = conversation?.audio;
  const video = conversation?.video;
  const document = conversation?.document;
  const image = conversation?.image;
  const time = conversation?.createdAt;

  const handleDownload = () => {
    saveAs(document, "file");
  };

  return (
    <div className="flex gap-2 items-start" ref={chatRef}>
      <img src={userImage} className="size-8 rounded-md" alt="" />
      <div>
        <div className="flex flex-col md:flex-row md:gap-4 items-start md:items-center pb-2">
          <p className="font-bold">{email}</p>
          <p className="text-xs text-gray-400">
            {moment(time).format("MMM DD, YYYY hh:mm:ss A")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {message && (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: message }}
            ></div>
          )}
          {audio && (
            <audio className="" controls>
              <source src={audio} type="audio/ogg" />
              <source src={audio} type="audio/mpeg" />
              Your browser does not support this audio.
            </audio>
          )}

          {image && (
            <img
              src={image}
              alt="image"
              className="w-[150px] h-[150px] object-cover rounded-sm"
            />
          )}

          {video && (
            <video
              className="w-[150px] h-[150px] object-cover rounded-sm"
              controls
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {document && (
            <div
              className="w-[50px] p-2 rounded-sm flex justify-between shadow text-5xl cursor-pointer"
              onClick={handleDownload}
            >
              <FaFile className="text-gray-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
