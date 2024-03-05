import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import CoworkerListCard from "./CoworkerListCard";
import { IoMdAdd } from "react-icons/io";
import AddCoworkerModal from "./AddCoworkerModal";

const EcoSpaceSidebar = () => {
  const [open, setOpen] = useState(false);
  const coworkers = [
    {
      _id: "dssd",
      email: "sa@dfd.com",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww",
    },
    {
      _id: "dssd",
      email: "sa@dfd.com",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww",
    },
    {
      _id: "dssd",
      email: "sa@dfd.com",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww",
    },
    {
      _id: "dssd",
      email: "sa@dfd.com",
      image:
        "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BpZGVybWFufGVufDB8fDB8fHww",
    },
  ];
  return (
    <>
      <div className="ps-[15%] pe-[5%]">
        <Form
          className="my-4 "
          name="basic"
          initialValues={{ ecoSpace: "Smaple Company" }}
          autoComplete="off"
        >
          {/* name */}
          <div className="flex flex-col gap-1 mb-6">
            <Form.Item
              name="ecoSpace"
              className="mb-1 "
              rules={[
                {
                  required: true,
                  message: "Select an EcoSpace for filtering out",
                },
              ]}
            >
              <Select>
                <Option>Smaple Company</Option>
                <Option>Smaple Company</Option>
              </Select>
            </Form.Item>
          </div>
        </Form>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Cowroker</h3>
          <div className="flex flex-col gap-2">
            {coworkers?.length
              ? coworkers.map((coworker, i) => (
                  <CoworkerListCard key={i} coworker={coworker} />
                ))
              : ""}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex gap-1 items-center font-semibold"
          >
            <IoMdAdd />
            <p className="text-sm">Add Coworker</p>
          </button>
        </div>
      </div>
      <AddCoworkerModal open={open} setOpen={setOpen} />
    </>
  );
};

export default EcoSpaceSidebar;
