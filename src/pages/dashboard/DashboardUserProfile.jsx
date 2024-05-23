import { Form, Input } from "antd";
import { useEffect, useState } from "react";

import DashboardUserProfileEcoSpaceListItem from "../../components/dashboard/DashboardUserProfileEcoSpaceListItem";
import DashboardUserProfileAppointmentListItem from "../../components/dashboard/DashboardUserProfileAppointmentListItem";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useLoaderData, useNavigate } from "react-router-dom";
import config from "../../config";
import LoadingScreen from "../../components/LoadingScreen";
import axios from "axios";
import { toast } from "sonner";

const DashboardUserProfile = () => {
  const userId = useLoaderData();
  const navigate = useNavigate();
  // setting the states
  const [user, setUser] = useState(null);
  const [ecoSpaces, setEcoSpaces] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);

  // user profile data
  useEffect(() => {
    fetch(`${config.api_url}/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
        setIsUserLoading(false);
      });
  }, [userId]);
  // getting ecpspces data
  useEffect(() => {
    fetch(`${config.api_url}/eco-spaces/list/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setEcoSpaces(data.data);
      });
  }, [userId]);
  // getting appointments data
  useEffect(() => {
    fetch(`${config.api_url}/appointments/user/appointment/list/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data.data);
      });
  }, [userId]);
  // preventing loading delation
  if (isUserLoading) {
    return <LoadingScreen />;
  }

  const doc = new jsPDF();
  const printPdf = () => {
    doc.text(`Profile Information - ${user?.name || "N/A"}`, 15, 10);

    autoTable(doc, {
      head: [["Name", "Email", "Phone", "Gender", "Birth", "Address"]],
      body: [
        [
          user?.name || "N/A",
          user?.email || "N/A",
          user?.phone || "N/A",
          user?.gender || "N/A",
          user?.dateOfBirth || "N/A",
          user?.address || "N/A",
        ],
      ],
    });

    let filteredAppointments = appointments?.length
      ? appointments.map(
          ({ ecoSpaceId, location, reason, status, date, _id }) => ({
            company: ecoSpaceId?.company || "N/A",
            location: location || "N/A",
            date: date || "N/A",
            reason: reason || "N/A",
            status: status || "N/A",
            _id: _id || "N/A",
          })
        )
      : [["N/A", "N/A", "N/A", "N/A", "N/A", "N/A"]];

    let filteredEcoSpaces = ecoSpaces?.length
      ? ecoSpaces.map(({ company, serviceId, project, _id }) => ({
          company: company || "N/A",
          service: serviceId?.title || "N/A",
          project: project || "N/A",
          _id: _id || "N/A",
        }))
      : [["N/A", "N/A", "N/A", "N/A"]];

    // Get the height of the first table
    const firstTableHeight = doc.previousAutoTable.finalY;
    const spaceBetweenTables = 10;

    doc.text(`Eco Spaces`, 15, firstTableHeight + spaceBetweenTables);
    autoTable(doc, {
      startY: firstTableHeight + spaceBetweenTables + 5,
      head: [["Company", "Service", "Project", "ID"]],
      body: filteredEcoSpaces.length
        ? filteredEcoSpaces.map((item) => Object.values(item))
        : [["N/A", "N/A", "N/A", "N/A"]],
    });

    // Get the height of the second table
    const secondTableHeight = doc.previousAutoTable.finalY;

    doc.text(`Appointments`, 15, secondTableHeight + spaceBetweenTables);
    autoTable(doc, {
      startY: secondTableHeight + spaceBetweenTables + 5,
      head: [["Company", "Location", "Date", "Reason", "Status", "ID"]],
      body: filteredAppointments.length
        ? filteredAppointments.map((item) => Object.values(item))
        : [["N/A", "N/A", "N/A", "N/A", "N/A", "N/A"]],
    });

    doc.save(`${user?.name || "profile"}.pdf`);
  };

  const handleMakeAdmin = async () => {
    try {
      const res = await axios.put(
        `${config.api_url}/users/update-user/${userId}`,
        { role: "admin" }
      );

      if (res?.status === 200) {
        toast.success("User made as admin!", {
          position: "top-center",
        });
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        error.response.data.message || `Something went wrong!`,
        {
          id: "login",
          duration: 2000,
          position: "top-center",
        }
      );
    }
  };

  return (
    <div className="h-auto space-y-5">
      <Form className="w-full">
        <div className="  space-y-5 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="rounded-xl shadow-lg p-5 md:p-10 flex flex-col gap-10 items-center justify-center bg-base-100">
              <div className="flex flex-col gap-5 items-center">
                <img
                  className="size-40 rounded-full "
                  src={user?.photo}
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-1 ">
                  <label>Name: </label>
                  <Form.Item
                    className="mb-1 "
                    name="name"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <Input
                      defaultValue={user?.name}
                      disabled
                      size="middle"
                      className="disabled:text-black"
                    />
                  </Form.Item>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col gap-1 w-full">
                    <label>Email: </label>
                    <Form.Item
                      className="mb-1"
                      name="email"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                    >
                      <Input
                        disabled
                        defaultValue={user?.email}
                        size="middle"
                        className="disabled:text-black"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label>Phone: </label>
                    <Form.Item
                      className="mb-1"
                      name="phone"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                    >
                      <Input
                        type="number"
                        disabled
                        defaultValue={user?.phone}
                        size="middle"
                        className="disabled:text-black"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col gap-1 w-full">
                    <label>Gender: </label>
                    <Form.Item
                      className="mb-1"
                      name="gender"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                    >
                      <Input
                        defaultValue={user?.gender}
                        disabled
                        size="middle"
                        className="disabled:text-black"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label>Date Of Birth: </label>
                    <Form.Item
                      className="mb-1 "
                      name="dateOfBirth"
                      rules={[
                        {
                          required: false,
                        },
                      ]}
                    >
                      <Input
                        defaultValue={user?.dateOfBirth}
                        disabled
                        size="middle"
                        className="disabled:text-black"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex flex-col gap-1 ">
                  <label>Address: </label>
                  <Form.Item
                    className="mb-1 "
                    name="address"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <Input
                      defaultValue={user?.address}
                      disabled
                      size="middle"
                      className="disabled:text-black"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-lg p-5 md:p-10 h-full bg-base-100">
              <h1 className="text-lg">EcoSpaces: </h1>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Company</th>
                      {/* <th>Service</th> */}
                      <th>Project</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ecoSpaces?.length
                      ? ecoSpaces.map((ecoSpace, i) => (
                          <DashboardUserProfileEcoSpaceListItem
                            key={i}
                            ecoSpace={ecoSpace}
                          />
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-lg p-5 md:p-10 w-full bg-base-100">
            <h1 className="text-lg">Appointments: </h1>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    {/* <th>Company/Org</th> */}
                    <th>Location</th>
                    <th>Date</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments?.length
                    ? appointments.map((appointment, i) => (
                        <DashboardUserProfileAppointmentListItem
                          key={i}
                          appointment={appointment}
                        />
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Form>
      <div className="text-center flex items-center gap-3 justify-center">
        <button onClick={handleMakeAdmin} className="p-btn">
          Make Admin
        </button>
        <button onClick={printPdf} className="p-btn">
          Download Information
        </button>
      </div>
    </div>
  );
};

export default DashboardUserProfile;
