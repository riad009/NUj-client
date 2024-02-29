import { Button, Form, Input, Upload } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { RiRecordCircleLine } from "react-icons/ri";
import { IoVideocam } from "react-icons/io5";

const UploadDocuments = () => {
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
            <Form.Item
              name="upload"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              <Upload
                type="file"
                name="logo"
                action="/upload.do"
                listType="picture"
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
            <Form.Item
              name="upload"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              <Upload
                type="file"
                accept="audio/*"
                name="logo"
                action="/upload.do"
                listType="picture"
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
            <Form.Item
              name="upload"
              valuePropName="fileList"
              // getValueFromEvent={normFile}
            >
              <Upload
                type="file"
                accept="video/*"
                name="logo"
                action="/upload.do"
                listType="picture"
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

          <Link to="/create-eco-space/s4" type="submit" className="p-btn ">
            Next
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default UploadDocuments;
