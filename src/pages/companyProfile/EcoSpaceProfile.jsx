import { Link, useLoaderData } from "react-router-dom";
import {
  MdOutlineCloudDownload,
  MdOutlineDriveFolderUpload,
  MdOutlineEmail,
} from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import EcoSpaceProfileEditMpdal from "./EcoSpaceProfileEditModal";
import { Button } from "antd";

const CompanyProfile = () => {
  const ecoSpaceData = useLoaderData();
  const { ecoSpace, documents } = ecoSpaceData.data;
  const {
    company,
    project,
    serviceId,
    serviceDescription,
    staffs,
    website,
    email,
    phone,
    address,
  } = ecoSpace;

  const { generalDocument, voice, video } = documents;
  const [open, setOpen] = useState(false);
  console.log({ ecoSpace });
  return (
    <>
      <section className="bg-primary min-h-screen flex justify-center items-center overflow-hidden">
        <div className="w-11/12 mx-auto my-20 space-y-5">
          <h1 className="text-2xl md:text-4xl font-semibold text-white">
            EcoSpace - BlockClub
          </h1>
          {/* bg-[#ecdeec] */}
          <div className="flex flex-col p-5 md:p-10 gap-2 bg-base-100  rounded-lg">
            <div className="flex justify-between items-start md:items-center">
              <h1 className="text-2xl md:text-4xl font-semibold">{company}</h1>
              <div className="flex gap-2">
                <button onClick={() => setOpen(true)} className="p-btn ">
                  <FaRegEdit />
                </button>
                <button className="p-btn !bg-error">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <h2 className="text-lg">Project - {project}</h2>
            <h3>Service - {serviceId?.title}</h3>
            <p className="text-sm">{serviceDescription}</p>
            <div>
              <h2>Staffs: </h2>
              <div>
                <p>
                  {staffs.length &&
                    staffs.map((staff, i) => <span key={i}>{staff}</span>)}
                </p>
              </div>
            </div>
            <h3>Website - {website}</h3>
            <div className="flex flex-col md:flex-row justify-between items-center my-4">
              <div className="flex items-center justify-center gap-1">
                <MdOutlineEmail className="text-2xl" />
                <span>{email}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <CiPhone className="text-2xl" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IoLocationOutline className="text-2xl" />
                <span>{address}</span>
              </div>
            </div>
            <h2 className="text-lg mt-4">Documents: </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 mb-6 items-center">
              <video className="w-full" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support this video.
              </video>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Voice: </h3>
                  <audio className="w-full md:w-8/12" controls>
                    <source src={voice} type="audio/ogg" />
                    <source src={voice} type="audio/mpeg" />
                    Your browser does not support this audio.
                  </audio>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">
                    Documents Uploaded to EcoSpace:
                  </h3>
                  {/* <button className="p-btn">Download Document</button> */}
                  <Button
                    size="large"
                    className="flex items-center"
                    icon={
                      <MdOutlineCloudDownload className="text-blue-500 size-6" />
                    }
                  >
                    Download Document
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/dashboard/appointments" className="p-btn ">
                Appointments
              </Link>
            </div>
          </div>
        </div>
      </section>
      <EcoSpaceProfileEditMpdal open={open} setOpen={setOpen} />
    </>
  );
};

export default CompanyProfile;
