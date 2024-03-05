import { Input, Form, DatePicker, TimePicker, Upload, Button } from "antd";

import { Link, useLoaderData } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { toast } from "sonner";
import config from "../../config";
import axios from "axios";

const MakeAppointment = () => {
  const ecoSpaceId = useLoaderData();
  const [loading, setloading] = useState(false);
  const [isAppointmentLoading, setIsAppointmentLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { userDB } = useContext(AuthContext);
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleMakeAppointment = (data) => {
    if (selectedImage) {
      setIsAppointmentLoading(true);
      const newAppointment = {
        ...data,
        date: data["date"].format("YYYY-MM-DD"),
        time: data["time"].format("HH:mm:ss"),
        participantId: userDB?._id,
        ecoSpaceId,
        locationImage: selectedImage,
      };

      toast.loading("Processing", { id: "appointment" });
      // !first upload the image on hosting and add it to newAppointment
      fetch(`${config.api_url}/appointments/create-appointment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newAppointment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsAppointmentLoading(false);
            return toast.success(data.message, { id: "appointment" });
          }
        })
        .catch((err) => {
          setIsAppointmentLoading(false);
          return toast.error(err.message || data.message, {
            id: "appointment",
          });
        });
    }
  };

  const handleImageChange = async (file) => {
    if (file) {
      setloading(true);
      const formdata = new FormData();
      formdata.append("image", file);

      const response = await axios.patch(
        `${config.api_url}/appointments/location-image`,
        formdata
      );

      setSelectedImage(response.data.data);

      setloading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-11/12 mx-auto space-y-5">
        <h4 className="text-xs text-gray-500">EcoSpace Appointment</h4>
        <h1 className="text-2xl md:text-4xl font-semibold">
          Appointment Scheduling
        </h1>
        <div>
          <Form
            className="space-y-5"
            name="basic"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            onFinish={handleMakeAppointment}
          >
            {/* name */}
            <div className="w-full">
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-1 w-full">
                  <label>Date: </label>
                  <Form.Item
                    className="mb-1 "
                    name="date"
                    rules={[
                      {
                        required: true,
                        message: "Select a date",
                      },
                    ]}
                  >
                    <DatePicker format="YYYY-MM-DD" className="w-full" />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Time: </label>
                  <Form.Item
                    className="mb-1"
                    name="time"
                    rules={[
                      {
                        required: true,
                        message: "Select a time",
                      },
                    ]}
                  >
                    <TimePicker className="w-full " />
                  </Form.Item>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-1 w-full">
                  <label>Location: </label>
                  <Form.Item
                    className="mb-1"
                    name="location"
                    rules={[
                      {
                        required: true,
                        message: "Provide an address",
                      },
                    ]}
                  >
                    <Input
                      // defaultValue={user?.email}
                      size="middle"
                      className=""
                      placeholder="Ex: 123, xyz"
                    />
                  </Form.Item>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label>Reason for Appointment: </label>
                  <Form.Item
                    className="mb-1"
                    name="reason"
                    rules={[
                      {
                        required: true,
                        message: "Provide a reason",
                      },
                    ]}
                  >
                    <Input
                      size="middle"
                      className=""
                      placeholder="Ex: Need mental Support"
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label>Picture of location: </label>
                <Form.Item
                  className="mb-1"
                  name="locationImage"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: "Upload a picture of the location",
                    },
                  ]}
                >
                  <Upload
                    name="logo"
                    listType="picture"
                    onChange={(e) => handleImageChange(e.file)}
                    beforeUpload={() => false}
                  >
                    <Button size="large" icon={<UploadOutlined />}>
                      Location
                    </Button>
                  </Upload>
                </Form.Item>
              </div>
            </div>

            <button
              disabled={isAppointmentLoading ? true : false}
              type="submit"
              className="p-btn "
            >
              {isAppointmentLoading ? "Processing..." : "Make Appointment"}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
