import { Button, Form, Upload } from "antd";
import { useState } from "react";

import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { RiRecordCircleLine } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";
import axios from "axios";
import { toast } from "sonner";

const UploadDocuments = () => {
  const [loading, setLoading] = useState(false);

  const [files, setFiles] = useState([]);

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
        `http://localhost:5000/api/v1/eco-space-documents/upload-files/65e17288cc12321ed34bc047?fieldName=${fileItem.type}`,
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
          {/* name */}
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
