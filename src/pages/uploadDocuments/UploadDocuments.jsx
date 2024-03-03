import { Button, Form, Select, Upload } from "antd";
import { useContext, useState } from "react";

import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { RiRecordCircleLine } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";
import axios from "axios";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import config from "../../config";
import { useQuery } from "@tanstack/react-query";
import { Option } from "antd/es/mentions";

const UploadDocuments = () => {
  const { user, userDB } = useContext(AuthContext);
  const [ecoSpaceId, setEcoSpaceId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const { data: ecoSpaces, isLoading: isEcoSpaceLoading } = useQuery({
    queryKey: [user, user?.email, userDB, userDB?._id, "email"],
    queryFn: async () => {
      const res = await fetch(
        `${config.api_url}/eco-spaces/list/${userDB?._id}`
      );
      const data = await res.json();
      return data.data;
    },
  });

  const handleFileChange = (file, fileType) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      const existingFileIndex = updatedFiles.findIndex(
        (f) => f.type === fileType
      );

      if (existingFileIndex !== -1) {
        updatedFiles[existingFileIndex] = file;
      } else {
        updatedFiles.push({ type: fileType, file: file });
      }

      return updatedFiles;
    });
  };

  const uploadFile = (fileItem) => {
    const formData = new FormData();

    console.log({ fileItem });

    formData.append(`file`, fileItem.file);

    return axios
      .patch(
        `${config.api_url}/eco-space-documents/upload-files/${ecoSpaceId}?fieldName=${fileItem.type}`,
        formData
      )
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error uploading file:", error);
        throw error;
      });
  };

  const handleSubmit = () => {
    if (files.length > 0) {
      setLoading(true);
      Promise.all(files.map(uploadFile))
        .then((responses) => {
          console.log("All files uploaded successfully:", responses);
          setFiles([]);
          setLoading(false);
          toast.success("File uploaded successfully");
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error uploading files:", error);
          toast.error("Failed to upload");
        });
    } else {
      toast.error("Please select new file!");
    }
  };

  return (
    <div className="w-full py-28">
      <div className="w-11/12 mx-auto space-y-5 md:pe-[400px]">
        <h4 className="text-xs text-gray-500">Documents</h4>
        <h1 className="text-2xl md:text-4xl font-semibold">
          Upload documents to EcoSpace
        </h1>
        <p className="text-sm"></p>
        <Form
          className=""
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <div className="flex flex-col gap-1 mb-6">
            <label>Select an EcoSpace: </label>
            <Form.Item
              name="ecoSpaceId"
              className="mb-1 w-full md:w-6/12"
              rules={[
                {
                  required: true,
                  message: "Select an EcoSpace",
                },
              ]}
            >
              <Select
                onSelect={(value, option) => setEcoSpaceId(value)}
                size="large"
                allowClear
              >
                {ecoSpaces?.length
                  ? ecoSpaces.map((ecoSpace, i) => (
                      <Option key={i} value={ecoSpace._id}>
                        {ecoSpace.company}
                      </Option>
                    ))
                  : ""}
              </Select>
            </Form.Item>
          </div>
          <div className="flex flex-col gap-1">
            <label>Document: </label>
            <Form.Item name="upload">
              <Upload
                type="file"
                name="logo"
                action="/upload.do"
                listType="picture"
                customRequest={({ file, onSuccess }) => {
                  handleFileChange(file, "generalDocument");
                  onSuccess();
                }}
              >
                <Button
                  size="large"
                  className="flex items-center"
                  icon={
                    <MdOutlineDriveFolderUpload className="text-blue-500 size-6" />
                  }
                >
                  Upload Documents to EcoSpace
                </Button>
              </Upload>
            </Form.Item>
          </div>
          <div className="flex flex-col gap-1">
            <label>Voice: </label>
            <Form.Item name="upload">
              <Upload
                type="file"
                accept="audio/*"
                name="logo"
                action="/upload.do"
                listType="picture"
                customRequest={({ file, onSuccess }) => {
                  handleFileChange(file, "voice");
                  onSuccess();
                }}
              >
                <Button
                  size="large"
                  className="flex items-center"
                  icon={<RiRecordCircleLine className="text-red-500 size-6" />}
                >
                  Record Voice
                </Button>
              </Upload>
            </Form.Item>
          </div>
          <div className="flex flex-col gap-1">
            <label>Video: </label>
            <Form.Item name="upload">
              <Upload
                type="file"
                accept="video/*"
                name="logo"
                action="/upload.do"
                listType="picture"
                customRequest={({ file, onSuccess }) => {
                  handleFileChange(file, "video");
                  onSuccess();
                }}
              >
                <Button
                  size="large"
                  className="flex items-center"
                  icon={<IoVideocam className=" size-6" />}
                >
                  Record Video
                </Button>
              </Upload>
            </Form.Item>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="p-btn "
            disabled={loading}
          >
            {loading ? "Uploading.." : "Upload"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default UploadDocuments;
