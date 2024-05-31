import { CiTimer, CiCalendarDate } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";

import { Button, Modal } from "antd";

import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";
import { toast } from "sonner";
import AppointmentMapView from "./AppointmentMapView";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AppointmentPage = () => {
  const appointmentId = useLoaderData();
  const { userDB } = useContext(AuthContext);

  const { data: appointment, refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `${config.api_url}/appointments/details/${appointmentId}`
      );
      const data = await res.json();
      return data.data;
    },
  });

  const {
    ecoSpaceId,
    userId,
    status,
    businessName,
    address,
    date,
    time,
    location,
    destinationInformation,
    appointmentLength,
    _id,
  } = appointment ?? {};

  console.log({ appointment });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = (id) => {
    fetch(`${config.api_url}/appointments/approve/${id}`)
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        refetch();
      });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleMarkComplete = async (id, type) => {
    try {
      const result = await axios.patch(
        `${config.api_url}/appointments/update-status/${id}?status=${type}`
      );

      if (result.status === 200) {
        if (type === "rejected") {
          await axios.post(`${config.api_url}/notification/send-mail`, {
            email: appointment?.userId?.email,
            name: appointment?.userId?.name,
            status: "rejected",
          });
        } else if (type === "approved") {
          await axios.post(`${config.api_url}/notification/send-mail`, {
            email: appointment?.userId?.email,
            name: appointment?.userId?.name,
            status: "approved",
          });
        }

        refetch();
        const text =
          type === "approved" || type === "in-progress"
            ? "Appointment approved!"
            : "Appointment rejected!";

        toast.success(text);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-primary min-h-screen flex justify-center items-center overflow-hidden">
        <div className="w-11/12 mx-auto my-20 space-y-5">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            Appointment
          </h1>
          <div className="flex flex-col p-5 md:p-10 gap-2 bg-base-100  rounded-lg">
            <div className="flex justify-between items-start md:items-center">
              <Link
                to={`/profile/eco-space/${ecoSpaceId?._id}`}
                className="text-xl md:text-2xl font-semibold flex items-center gap-1"
              >
                <span>Eco-space Name</span>:<span>{ecoSpaceId?.company}</span>
              </Link>
              <div className="flex gap-2">
                {status !== "approved" && (
                  <Button
                    disabled={status === "rejected"}
                    onClick={() => handleMarkComplete(_id, "rejected")}
                    type="primary"
                    danger
                  >
                    {status === "rejected" ? "Rejected" : "Reject"}
                  </Button>
                )}

                {status !== "rejected" && (
                  <>
                    {userDB?.role === "superAdmin" && status !== "approved" ? (
                      <Button
                        disabled={status === "in-progress"}
                        onClick={() => handleMarkComplete(_id, "in-progress")}
                        type="primary"
                        className="bg-blue-500"
                      >
                        {status === "in-progress" ? "In progress" : "Approve"}
                      </Button>
                    ) : (
                      <Button
                        disabled={status === "approved"}
                        onClick={() => handleMarkComplete(_id, "approved")}
                        type="primary"
                        className="bg-blue-500"
                      >
                        {status === "approved" ? "Approved" : "Approve"}
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="text-lg">
              <span>Participant - {userId?.name}</span>
              <h3>Business name - {businessName}</h3>
              <h3>Address - {address}</h3>
              <h3>Length of appointment - {appointmentLength}</h3>
              <h3>
                Contact information for destination - {destinationInformation}
              </h3>
              <h3>Status - {status}</h3>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center my-4">
              <div className="flex items-center justify-center gap-1">
                <CiTimer className="text-2xl" />
                <span>{time}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <CiCalendarDate className="text-2xl" />
                <span>{date}</span>
              </div>
            </div>
            <div className=" my-5">
              <div className="space-y-2">
                <h2 className="text-xl">Location:</h2>

                <AppointmentMapView lat={location?.lat} lng={location?.lng} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        title="Accept the appointment request?"
        okType="default"
        okText="Accept"
        cancelText="Decline"
        open={isModalOpen}
        onOk={() => handleOk(_id)}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default AppointmentPage;
