import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import ConversationCard from "./ConversationCard";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import config from "../../config";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaImage } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const EcoSpaceConversation = ({ channelData }) => {
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userDB, setEcoSpaceRightBarOpen, setEcoSpaceLeftBarOpen } =
    useContext(AuthContext);

  console.log({ selectedFiles });

  const { channelId, ecoSpaceId } = useParams();

  const messageContainerRef = useRef(null);

  const scrollToBottom = () => {
    // Scroll to the bottom of the container
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollIntoView({
        block: "end",
        behavior: "auto",
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFiles((prevFiles) => [...prevFiles, file]);
  };

  const { data, refetch } = useQuery({
    queryKey: ["messages", channelId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${config.api_url}/message/${channelId}`
      );
      return data.data;
    },
  });

  useEffect(() => {
    // Scroll to the bottom when the component mounts
    scrollToBottom();
  }, []);

  useEffect(() => {
    // Scroll to the bottom whenever messages are updated
    scrollToBottom();
  }, [data]);

  const handleSend = async () => {
    if (message || selectedFiles?.length) {
      console.log(message, selectedFiles.length);
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("email", userDB?.email);
        formData.append("ecoSpaceId", ecoSpaceId);
        formData.append("channelId", channelId);
        formData.append("userImage", userDB?.photo);
        formData.append("message", message);

        for (const file of selectedFiles) {
          formData.append("file", file);
        }

        await axios.post(`${config.api_url}/message/create`, formData);
        // const result = res.data.data;
        refetch();
        setSelectedFiles([]);
        setLoading(false);
        setMessage("");
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className=" flex flex-col gap-5 relative h-[100vh] max-h-[100vh]">
      <div className="">
        <div className="border-b-[.5px] border-b-gray-300 h-16 flex justify-between items-center px-5">
          <div className="flex items-center gap-2">
            <IoMenuOutline
              onClick={() => setEcoSpaceLeftBarOpen((prevState) => !prevState)}
              className="size-8 text-gray-500 cursor-pointer block md:hidden"
            />
            <h2 className="font-semibold text-xl">
              #{channelData?.channelName}
            </h2>
            {/* <div className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <IoPerson />
                <span>20</span>
              </div>
              <div className="flex items-center gap-1">
                <GoPin />
                <span>1</span>
              </div>
              <div>
                <span>Track & Coordinate Social Media</span>
              </div>
            </div> */}
          </div>

          <IoMdInformationCircleOutline
            onClick={() => setEcoSpaceRightBarOpen((prevState) => !prevState)}
            className="size-6 text-gray-500 cursor-pointer"
          />
        </div>
        <div
          className="space-y-5 overflow-y-auto min-h-[65vh] max-h-[60vh] p-5"
          ref={messageContainerRef}
        >
          {data?.length ? (
            data?.map((conversation, i) => (
              <ConversationCard
                key={i}
                conversation={conversation}
                chatRef={i === data.length - 1 ? messageContainerRef : null}
              />
            ))
          ) : (
            <div className="text-xl flex items-center justify-center mt-20">
              No conversation to show
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-5 bg-white">
        <div className="">
          <div className="border-2 border-b-0 flex justify-between items-center py-3 px-4">
            <div className="flex items-center gap-5">
              <label htmlFor="image">
                <FaImage />
              </label>
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                id="image"
                className="hidden"
              />
              <label htmlFor="video">
                <FaVideo />
              </label>
              <input
                name="video"
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                id="video"
                className="hidden"
              />
              <label htmlFor="audio">
                <AiFillAudio />
              </label>
              <input
                name="audio"
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                id="audio"
                className="hidden"
              />
            </div>

            <button onClick={handleSend} className="" disabled={loading}>
              {loading ? (
                <span className="text-xs">Sending..</span>
              ) : (
                <IoMdSend />
              )}
            </button>
          </div>
          {/* <Editor /> */}
          <QuillEditor
            className="editor"
            theme="snow"
            value={message}
            onChange={(value) => setMessage(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EcoSpaceConversation;
