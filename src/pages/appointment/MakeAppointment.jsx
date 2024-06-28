import { Input, Form, DatePicker, TimePicker, Select } from "antd";

import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { toast } from "sonner";
import config from "../../config";

import LocationMap from "./LocationMap";
import SearchLocationInput from "./SearchLocationInput";
import moment from "moment/moment";
import { Option } from "antd/es/mentions";

const MakeAppointment = () => {
  const location = useLocation();
  const ecoSpaceId = useLoaderData();
  const navigate = useNavigate();
  const isCoWorker = location?.state.isCoWorker;
  const clients = location?.state.clients;
  console.log({ clients });
  const [isAppointmentLoading, setIsAppointmentLoading] = useState(false);
  const [placeName, setPlaceName] = useState("");
  const [address, setAddress] = useState("");

  console.log({ placeName });

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
    console.log(data.time.format("h:mm a"));

    if (selectedLocation) {
      setIsAppointmentLoading(true);
      const startTime = data?.appointmentLength[0];
      const endTime = data?.appointmentLength[1];
      const duration = moment.duration(endTime.diff(startTime));
      const hours = duration.asHours();

      const newAppointment = {
        ...data,
        date: data["date"].format("YYYY-MM-DD"),
        time: data["time"].format("h:mm a"),
        appointmentLength: `${hours?.toFixed(0)} Hours`,
        // userId: userDB?._id,
        requestedBy: userDB?._id,
        ecoSpaceId,
        location: selectedLocation,
        address,
      };

      if (!newAppointment?.userEmail) {
        newAppointment.userEmail = userDB?.email;
      }

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
            navigate(-1);
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
              <div className="flex items-center gap-5 mb-4">
                <div className="flex flex-col gap-1 w-full">
                  <label>Date for appointment: </label>
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
                  <label>Time for appointment: </label>
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
                    <TimePicker format="h:mm a" className="w-full " />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Name of business: </label>
                  <Form.Item
                    className="mb-1"
                    name="businessName"
                    rules={[
                      {
                        required: true,
                        message: "Provide name of business",
                      },
                    ]}
                  >
                    <Input size="middle" className="" />
                  </Form.Item>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-5">
                <div className="flex flex-col gap-1 w-full">
                  <label>Length of appointment: </label>
                  <Form.Item
                    className="mb-1"
                    name="appointmentLength"
                    rules={[
                      {
                        required: true,
                        message: "Select appointment time length",
                      },
                    ]}
                  >
                    <TimePicker.RangePicker
                      format="h:mm a"
                      className="w-full "
                    />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Destination Information: </label>
                  <Form.Item
                    className="mb-1"
                    name="destinationInformation"
                    rules={[
                      {
                        required: true,
                        message: "Provide Destination Information",
                      },
                    ]}
                  >
                    <Input size="middle" className="" />
                  </Form.Item>
                </div>

                {isCoWorker && (
                  <div className="flex flex-col gap-1 w-full">
                    <label>Select User: </label>
                    <Form.Item
                      className="mb-1"
                      name="userEmail"
                      rules={[
                        {
                          required: true,
                          message: "Provide Destination Information",
                        },
                      ]}
                    >
                      {/* <Input size="middle" className="" /> */}
                      <Select allowClear>
                        {clients?.length
                          ? clients.map((client, i) => (
                              <Option key={i} value={client}>
                                {client}
                              </Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                  </div>
                )}
              </div>

              <div className="">
                <SearchLocationInput
                  setSelectedLocation={setSelectedLocation}
                  placeName={placeName}
                  setPlaceName={setPlaceName}
                  setAddress={setAddress}
                />
              </div>

              <div>
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
