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

import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { toast } from "sonner";

const PersonalConversation = ({ email }) => {
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filePreviews, setFilePreviews] = useState([]);
  const { userDB, setEcoSpaceLeftBarOpen } = useContext(AuthContext);

  const { ecoSpaceId } = useParams();

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
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

    const previews = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({ type: file.type, src: reader.result });
        };
        reader.onerror = () => {
          reject(new Error("File reading error"));
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(previews).then((newPreviews) => {
      setFilePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    });
  };

  const { data, refetch } = useQuery({
    queryKey: ["personal_messages", email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${config.api_url}/message/email/${userDB?.email}?userEmail=${email}`
      );
      return data.data;
    },
  });

  console.log({ data });

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
        formData.append("userEmail", email);
        formData.append("userImage", userDB?.photo);
        formData.append("message", message);

        for (const file of selectedFiles) {
          formData.append("file", file);
        }

        await axios.post(`${config.api_url}/message/create`, formData);
        // const result = res.data.data;
        refetch();
        setSelectedFiles([]);
        setFilePreviews([]);
        setLoading(false);
        setMessage("");
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
        return toast.error(
          error.response.data.message || `Something went wrong!`,
          {
            id: "login",
            duration: 2000,
            position: "top-center",
          }
        );
      }
    }
  };

  return (
    <>
      <div className=" flex flex-col gap-5 relative h-[100vh] max-h-[100vh]">
        <div className="">
          <div className="border-b-[.5px]  border-b-gray-300 h-16 flex justify-between items-center px-5 ">
            <div className="flex items-center gap-2">
              <IoMenuOutline
                onClick={() =>
                  setEcoSpaceLeftBarOpen((prevState) => !prevState)
                }
                className="size-8  cursor-pointer block md:hidden"
              />
              <h2 className="font-semibold text-xl">#{email}</h2>
            </div>
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
            <div className="border-2 border-b-0 ">
              {filePreviews?.length > 0 && (
                <div className="flex items-center gap-3 p-4">
                  {filePreviews.map((file, index) => {
                    if (file.type.startsWith("image/")) {
                      return (
                        <div key={index}>
                          <img
                            src={file.src}
                            alt={`preview ${index}`}
                            style={{ width: "200px", borderRadius: "5px" }}
                            className="h-32 shadow object-cover"
                          />
                        </div>
                      );
                    } else if (file.type.startsWith("audio/")) {
                      return (
                        <div key={index}>
                          <audio
                            controls
                            src={file.src}
                            style={{ display: "block" }}
                            className="h-32 shadow object-cover"
                          />
                        </div>
                      );
                    } else if (file.type.startsWith("video/")) {
                      return (
                        <div key={index}>
                          <video
                            controls
                            src={file.src}
                            style={{ width: "200px", borderRadius: "5px" }}
                            className="h-32 shadow object-cover"
                          />
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              )}

              <div className="flex justify-between items-center py-3 px-4">
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
    </>
  );
};

export default PersonalConversation;
