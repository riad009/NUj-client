import { Collapse, Dropdown, Space } from "antd";
import { useContext, useState } from "react";
import CoworkerListCard from "./CoworkerListCard";
import { IoMdAdd } from "react-icons/io";
import AddCoworkerModal from "./AddCoworkerModal";
import { DownOutlined } from "@ant-design/icons";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";
import { Link } from "react-router-dom";
import EcoSpaceProfileEditMpdal from "../../pages/companyProfile/EcoSpaceProfileEditModal";
import { FaRegEdit } from "react-icons/fa";

const EcoSpaceSidebar = ({ ecoSpace }) => {
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { user, userDB } = useContext(AuthContext);

  const { data: ecoSpacesList, isLoading } = useQuery({
    queryKey: [user, user?.email, userDB, userDB?._id, "email"],
    queryFn: async () => {
      const res = await fetch(
        `${config.api_url}/eco-spaces/list/${userDB?._id}`
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const items = ecoSpacesList?.length
    ? ecoSpacesList.map((item, i) => ({
        key: i,
        label: (
          <Link to={`/profile/eco-space/${item?._id}`}>{item?.company}</Link>
        ),
      }))
    : "";

  const starredItems = [
    {
      key: "1",
      label: (
        <h2 className="font-semibold text-white tracking-wider">Starred</h2>
      ),
      children: <p>Adding Soon</p>,
    },
  ];

  const channelsItems = [
    {
      key: "1",
      label: (
        <h2 className="font-semibold text-white tracking-wider">Channels</h2>
      ),
      children: <p>Adding Soon</p>,
    },
  ];

  return (
    <>
      <div className="col-span-1 border-r-[.5px] border-gray-600">menu</div>
      <div className="col-span-4 ">
        <div className="col-span-5">
          <div className="p-4 h-16 flex items-center justify-between border-b-[.5px] border-gray-600">
            <Dropdown
              className=""
              menu={{
                items,
              }}
            >
              <Space className="text-lg font-semibold">
                {ecoSpace?.company}
                <DownOutlined />
              </Space>
            </Dropdown>
            <button onClick={() => setOpenEditModal(true)}>
              <FaRegEdit className="size-6" />
            </button>
          </div>
          {/* starred */}
          <div className="">
            <Collapse
              bordered={false}
              accordion
              className=""
              items={starredItems}
            />
          </div>
          {/* channels */}
          <div className="">
            <Collapse
              bordered={false}
              accordion
              className=""
              items={channelsItems}
            />
          </div>
          <div className="space-y-3 p-4">
            <h3 className="text-sm font-semibold">Cowroker</h3>
            <div className="flex flex-col gap-2">
              {ecoSpace?.staffs?.length
                ? ecoSpace?.staffs.map((coworker, i) => (
                    <CoworkerListCard key={i} coworker={coworker} />
                  ))
                : ""}
              <div className="flex gap-2 items-center">
                <img
                  className="size-6 rounded-lg"
                  src={ecoSpace?.owner?.photo}
                  alt=""
                />
                <p className="text-sm">{ecoSpace?.owner?.email}</p>
              </div>
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
      </div>
      <AddCoworkerModal ecoSpace={ecoSpace} open={open} setOpen={setOpen} />
      <EcoSpaceProfileEditMpdal
        open={openEditModal}
        setOpen={setOpenEditModal}
        ecoSpace={ecoSpace}
      />
    </>
  );
};

export default EcoSpaceSidebar;
