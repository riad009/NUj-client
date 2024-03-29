import { DatePicker, Form, Input, Select, Switch } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import { Option } from "antd/es/mentions";
import DashboardUserProfileEcoSpaceListItem from "../../components/dashboard/DashboardUserProfileEcoSpaceListItem";
import DashboardUserProfileAppointmentListItem from "../../components/dashboard/DashboardUserProfileAppointmentListItem";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useLoaderData } from "react-router-dom";
import config from "../../config";
import LoadingScreen from "../../components/LoadingScreen";

const DashboardUserProfile = () => {
  const userId = useLoaderData();
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
    doc.text(`Profile Information - ${user?.name}`, 15, 10);
    autoTable(doc, {
      head: [["Name", "Email", "Phone", "Gender", "Birth", "Address"]],
      body: [
        [
          user?.name,
          user?.email,
          user?.phone,
          user?.gender,
          user?.dateOfBirth,
          user?.address,
        ],
      ],
    });

    let filteredAppointments =
      appointments?.length &&
      appointments.map(
        ({ ecoSpaceId, location, reason, status, date, _id }) => ({
          company: ecoSpaceId?.company,
          location,
          date,
          reason,
          status,
          _id,
        })
      );

    let filteredEcoSpaces =
      ecoSpaces?.length &&
      ecoSpaces.map(({ company, serviceId, project, _id }) => ({
        company,
        service: serviceId?.title,
        project,
        _id,
      }));
    // Get the height of the first table
    const firstTableHeight = doc.previousAutoTable.finalY;

    doc.text(`Eco Spaces`, 15, firstTableHeight + 5);
    autoTable(doc, {
      head: [["Company", "Service", "Project", "ID"]],
      body: filteredEcoSpaces.map((item) => Object.values(item)),
    });
    // Get the height of the second table
    const secondTableHeight = doc.previousAutoTable.finalY;

    doc.text(`Appointments`, 15, secondTableHeight + 5);
    autoTable(doc, {
      head: [["Company", "Location", "Date", "Reason", "Status", "ID"]],
      body: filteredAppointments.map((item) => Object.values(item)),
    });

    doc.save(`${user?.name}.pdf`);
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
      <div className="text-center">
        <button onClick={printPdf} className="p-btn">
          Download Information
        </button>
      </div>
    </div>
  );
};

export default DashboardUserProfile;
