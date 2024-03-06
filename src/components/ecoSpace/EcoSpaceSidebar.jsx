import { Dropdown, Space } from "antd";
import { useContext, useState } from "react";
import CoworkerListCard from "./CoworkerListCard";
import { IoMdAdd } from "react-icons/io";
import AddCoworkerModal from "./AddCoworkerModal";
import { DownOutlined } from "@ant-design/icons";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";
import { Link } from "react-router-dom";

const EcoSpaceSidebar = ({ ecoSpace }) => {
  const [open, setOpen] = useState(false);
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
  console.log(ecoSpace);
  return (
    <>
      <div className="ps-[15%] pe-[5%]">
        <div className="my-4">
          <Dropdown
            className=""
            menu={{
              items,
            }}
          >
            <Space className="text-lg font-semibold">
              {ecoSpace?.ecoSpace?.company}
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Cowroker</h3>
          <div className="flex flex-col gap-2">
            {ecoSpace?.ecoSpace?.staffs?.length
              ? ecoSpace?.ecoSpace?.staffs.map((coworker, i) => (
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
      <AddCoworkerModal ecoSpace={ecoSpace} open={open} setOpen={setOpen} />
    </>
  );
};

export default EcoSpaceSidebar;
