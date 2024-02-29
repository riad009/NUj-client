import { Link } from "react-router-dom";
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
  const [open, setOpen] = useState(false);
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
              <h1 className="text-2xl md:text-4xl font-semibold">
                Company / Org Name
              </h1>
              <div className="flex gap-2">
                <button onClick={() => setOpen(true)} className="p-btn ">
                  <FaRegEdit />
                </button>
                <button className="p-btn !bg-error">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
            <h2 className="text-lg">Project - Project Working On</h2>
            <h3>Service - Service Name</h3>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae nam exercitationem esse ipsam reprehenderit! Quam earum
              voluptatum minima, et soluta asperiores quibusdam accusantium
              fugiat ipsa molestias, omnis quas corporis odit sapiente tempore
              impedit vel id beatae quisquam culpa harum! Recusandae error
              cupiditate saepe dolore ratione accusantium sit earum, inventore
              laboriosam modi ipsam consectetur officia voluptatibus tenetur
              nemo est dignissimos iure deserunt amet facilis culpa facere,
              eligendi impedit qui! Magni, totam ipsa? Dolorum maiores laborum
              at, nesciunt rem nam sapiente ipsa doloribus commodi et id aliquam
              natus deleniti asperiores facere ea tempora nostrum impedit,
              beatae est? Culpa atque sed doloremque, illo possimus, aspernatur
              explicabo error mollitia asperiores nesciunt praesentium aut nemo
              dignissimos voluptas non? Corrupti molestias nostrum sint esse
              debitis maiores nobis sapiente amet ipsam unde! Quos, minima
              temporibus officia sunt magni impedit quo maxime ducimus
              doloremque aspernatur, expedita quod non dolore necessitatibus
              dolorem repudiandae cum, omnis nemo neque doloribus tempore itaque
              quasi assumenda nobis! Earum, eum dolorum sapiente, exercitationem
              veniam, esse explicabo rerum reprehenderit ipsum nemo ab possimus
              laudantium accusantium quam magnam consequatur? Animi ipsam dolor
              tempora libero adipisci quia.
            </p>
            <div>
              <h2>Staffs: </h2>
              <div>
                <p>example@gmail.com, example@gmail.com, example@gmail.com</p>
              </div>
            </div>
            <h3>Website - websiteURL</h3>
            <div className="flex flex-col md:flex-row justify-between items-center my-4">
              <div className="flex items-center justify-center gap-1">
                <MdOutlineEmail className="text-2xl" />
                <span>example@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <CiPhone className="text-2xl" />
                <span>0123456789</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IoLocationOutline className="text-2xl" />
                <span>Address, address, address</span>
              </div>
            </div>
            <h2 className="text-lg mt-4">Documents: </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 mb-6 items-center">
              <video className="w-full" controls>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support this video.
              </video>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold">Voice: </h3>
                  <audio className="w-full md:w-8/12" controls>
                    <source
                      src="https://www.w3schools.com/html/horse.ogg"
                      type="audio/ogg"
                    />
                    <source
                      src="https://www.w3schools.com/html/horse.ogg"
                      type="audio/mpeg"
                    />
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
