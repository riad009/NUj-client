import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import ConversationCard from "./ConversationCard";
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const EcoSpaceConversation = ({ ecoSpace }) => {
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const { ecoSpaceId } = useParams();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFiles((prevFiles) => [...prevFiles, file]);
  };

  const {
    isLoading,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["messages", ecoSpaceId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${config.api_url}/message/${ecoSpaceId}`
      );
      return data.data;
    },
  });

  const handleSend = async () => {
    if (message || selectedFiles?.length) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("email", "mohammadjahid0007@gmail.com");
        formData.append("ecoSpaceId", "65e6cf8cb81d8b76592dde53");
        formData.append("userImage", "https://i.ibb.co/LCR1TRF/dummy.jpg");
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
    <div className="p-5 flex flex-col gap-20">
      <div className="space-y-5">
        {data?.length
          ? data?.map((conversation, i) => (
              <ConversationCard key={i} conversation={conversation} />
            ))
          : ""}
      </div>

      <div className="">
        {/* <Editor /> */}
        <QuillEditor
          className="editor"
          theme="snow"
          value={message}
          onChange={(value) => setMessage(value)}
        />

        <div>
          <label htmlFor="">Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <label htmlFor="">Video</label>
          <input type="file" accept="video/*" onChange={handleFileChange} />
          <label htmlFor="">Audio</label>
          <input type="file" accept="audio/*" onChange={handleFileChange} />

          <button
            onClick={handleSend}
            className="bg-gray-400 text-white px-4 py-1 rounded-sm my-2"
            disabled={loading}
          >
            {loading ? "SENDING.." : "SEND"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcoSpaceConversation;
