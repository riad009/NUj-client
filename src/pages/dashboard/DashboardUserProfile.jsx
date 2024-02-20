import { DatePicker, Form, Input, Select, Switch } from "antd";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import { Option } from "antd/es/mentions";
import DashboardUserProfileEcoSpaceListItem from "../../components/dashboard/DashboardUserProfileEcoSpaceListItem";
import DashboardUserProfileAppointmentListItem from "../../components/dashboard/DashboardUserProfileAppointmentListItem";

const DashboardUserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-auto space-y-5">
      <Form className="w-full">
        <div className="  space-y-5 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="rounded-xl shadow-lg p-5 md:p-10 flex flex-col gap-10 items-center justify-center bg-base-100">
              <div className="flex flex-col gap-5 items-center">
                <img
                  className="size-40 rounded-full "
                  src={user?.photoURL ? user?.photoURL : unknown}
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
                      disabled
                      // defaultValue={user?.displayName}
                      defaultValue="John Doe"
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
                        // defaultValue={user?.email}
                        defaultValue="example@gmail.com"
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
                        defaultValue="0123456789"
                        disabled
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
                        defaultValue="male"
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
                        defaultValue="2024-02-21"
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
                      disabled
                      defaultValue="address, address, address"
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
                      <th>Service</th>
                      <th>Project</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <DashboardUserProfileEcoSpaceListItem />
                    <DashboardUserProfileEcoSpaceListItem />
                    <DashboardUserProfileEcoSpaceListItem />
                    <DashboardUserProfileEcoSpaceListItem />
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
                    <th>Company/Org</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <DashboardUserProfileAppointmentListItem />
                  <DashboardUserProfileAppointmentListItem />
                  <DashboardUserProfileAppointmentListItem />
                  <DashboardUserProfileAppointmentListItem />
                  <DashboardUserProfileAppointmentListItem />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Form>
      <div className="text-center">
        <button className="p-btn">Download Information</button>
      </div>
    </div>
  );
};

export default DashboardUserProfile;
