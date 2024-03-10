import { Input, Form, DatePicker, TimePicker, Select } from "antd";

import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { toast } from "sonner";
import config from "../../config";

import LocationMap from "./LocationMap";
import SearchLocationInput from "./SearchLocationInput";
import { neighbourhoods } from "./Neighbourhoods";
import { Option } from "antd/es/mentions";

const MakeAppointment = () => {
  const ecoSpaceId = useLoaderData();

  const [isAppointmentLoading, setIsAppointmentLoading] = useState(false);
  const [placeName, setPlaceName] = useState("");

  const [selectedLocation, setSelectedLocation] = useState({
    lat: 44.5,
    lng: -89.5,
  });

  const [form] = Form.useForm();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            if (latitude && longitude) {
              setSelectedLocation({
                lat: latitude,
                lng: longitude,
              });
            } else {
              setSelectedLocation({
                lat: 44.5,
                lng: -89.5,
              });
            }
          },
          (error) => {
            console.error("Error getting geolocation:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser.");
      }
    };

    getLocation();
  }, []);

  const { userDB } = useContext(AuthContext);

  const handleMakeAppointment = (data) => {
    if (selectedLocation) {
      setIsAppointmentLoading(true);
      const newAppointment = {
        ...data,
        date: data["date"].format("YYYY-MM-DD"),
        time: data["time"].format("HH:mm:ss"),
        participantId: userDB?._id,
        ecoSpaceId,
        location: selectedLocation,
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

  useEffect(() => {
    form.setFieldsValue({
      location: placeName,
    });
  }, [placeName, form]);

  console.log({ selectedLocation });

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden mt-10 mb-6">
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
            form={form}
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
                  <label>Neighbourhood: </label>
                  <Form.Item
                    name="neighbourhood"
                    className="mb-1"
                    rules={[
                      {
                        required: true,
                        message: "Select a neighbourhood",
                      },
                    ]}
                  >
                    <Select allowClear>
                      {neighbourhoods?.length
                        ? neighbourhoods.map((item, i) => (
                            <Option key={i} value={item}>
                              {item}
                            </Option>
                          ))
                        : ""}
                    </Select>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1 w-full">
                  <label>Location: </label>
                  <SearchLocationInput
                    setSelectedLocation={setSelectedLocation}
                    placeName={placeName}
                    setPlaceName={setPlaceName}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {selectedLocation.lat && selectedLocation.lng && (
                  <LocationMap selectedLocation={selectedLocation} />
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                disabled={isAppointmentLoading}
                type="submit"
                className="p-btn "
              >
                {isAppointmentLoading ? "Processing..." : "Make Appointment"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
