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
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import ChannelListCard from "./ChannelListCard";
import AddChannelModal from "./AddChannelModal";

const EcoSpaceSidebar = ({ ecoSpace }) => {
  const [open, setOpen] = useState(false);
  const [openChannel, setOpenChannel] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { user, userDB } = useContext(AuthContext);

  const { data: ecoSpacesList } = useQuery({
    queryKey: [user, user?.email, userDB, userDB?._id, "email"],
    queryFn: async () => {
      const res = await fetch(
        `${config.api_url}/eco-spaces/list/${userDB?._id}`
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const { data: channels, refetch } = useQuery({
    queryKey: ["channels", ecoSpace?._id],
    queryFn: async () => {
      const res = await fetch(`${config.api_url}/channel/${ecoSpace?._id}`);
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
      children: (
        <div className="space-y-3">
          {channels?.length
            ? channels.map((channel, i) => (
                <ChannelListCard {...channel} key={i} />
              ))
            : ""}
        </div>
      ),
    },
  ];

  const channelsItems = [
    {
      key: "1",
      label: (
        <div className="flex items-center text-white justify-between">
          <p className="font-semibold  tracking-wider">Channels</p>
          <FaPlusCircle
            className="h-4 w-4"
            onClick={() => setOpenChannel(true)}
          />
        </div>
      ),
      children: (
        <div className="space-y-3">
          {channels?.length
            ? channels.map((channel, i) => (
                <ChannelListCard {...channel} key={i} />
              ))
            : ""}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="col-span-1 border-r-[.5px] border-gray-600 min-h-screen w-full flex flex-col items-center justify-start py-5 gap-2">
        {ecoSpacesList?.length
          ? ecoSpacesList.map((ecoSpace, i) => (
              <Link
                key={i}
                className="bg-secondary size-10 rounded-md flex justify-center items-center"
                to={`/eco-space/${ecoSpace?._id}`}
              >
                {ecoSpace?.company
                  ?.split(" ")
                  .map((word) => word.charAt(0).toUpperCase())
                  .join("")
                  ?.slice(0, 2)}
              </Link>
            ))
          : ""}
      </div>
      <div className="col-span-4 h-[100vh] overflow-y-scroll overflow-x-clip">
        <div className="">
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
              expandIconPosition="end"
            />
          </div>
          {/* channels */}
          <div className="">
            <Collapse
              bordered={false}
              accordion
              className=""
              items={channelsItems}
              expandIconPosition="end"
              defaultActiveKey={["1"]}
            />
          </div>
          <div className="space-y-3 p-4">
            <h3 className="text-sm font-semibold">Cowroker</h3>
            <div className="flex flex-col gap-2 text-gray-300 text-sm">
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
      <AddChannelModal
        ecoSpace={ecoSpace}
        open={openChannel}
        setOpen={setOpenChannel}
        refetch={refetch}
      />
      <EcoSpaceProfileEditMpdal
        open={openEditModal}
        setOpen={setOpenEditModal}
        ecoSpace={ecoSpace}
      />
    </>
  );
};

export default EcoSpaceSidebar;
