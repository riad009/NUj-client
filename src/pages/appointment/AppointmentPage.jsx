import { IoLocationOutline } from "react-icons/io5";
import { CiTimer, CiCalendarDate } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { Image, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";
import { toast } from "sonner";
import AppointmentMapView from "./AppointmentMapView";

const AppointmentPage = () => {
  const appointmentId = useLoaderData();

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
    participantId,
    status,
    isApproved,
    date,
    time,
    location,

    reason,
    _id,
  } = appointment ?? {};

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
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

  const handleMarkComplete = (id) => {
    console.log(id);
    fetch(`${config.api_url}/appointments/mark-as-completed/${id}`)
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        refetch();
      });
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${
    import.meta.env.VITE_map_key
  }&center=${location?.lat},${location?.lng}&zoom=15`;

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
                <span>Company / Org Name</span>
                <FaArrowRight />
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => handleMarkComplete(_id)}
                  className="p-btn"
                >
                  Mark Complete
                </button>
                {/* <button className="p-btn !bg-error">
                  <AiOutlineDelete />
                </button> */}
              </div>
            </div>
            <div className="text-lg">
              <span>Participant - {participantId?.name}</span>
            </div>
            {/* <h2 className="text-lg">Participant - John Doe</h2> */}
            <h3>Reason - {reason}</h3>

            <div className="flex flex-col md:flex-row justify-between items-center my-4">
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
                {/* <iframe
                  src={mapUrl}
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}

                <AppointmentMapView lat={location?.lat} lng={location?.lng} />
              </div>
              {/* <div className="space-y-2">
                <h2 className="text-xl">Documents Uploaded: </h2>
              </div> */}
            </div>
            <div className="text-center">
              {isApproved ? (
                <>
                  <p>{status}</p>
                </>
              ) : (
                <>
                  <p>Pending</p>
                  <button onClick={() => showModal(_id)} className="p-btn ">
                    Approve
                  </button>
                </>
              )}
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
