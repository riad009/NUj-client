import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosMore } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdFindInPage } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { Collapse } from "antd";
import CoworkerListCard from "./CoworkerListCard";

const EcoSpaceRightBar = ({ ecoSpace }) => {
  const aboutContent = (
    <div className="bg-base-200 p-2 rounded-md space-y-4 text-gray-500">
      <div>
        <h2 className="font-semibold">Topic</h2>
        <p className="text-sm">Track and Coordinate social media</p>
      </div>
      <div>
        <h2 className="font-semibold">Description</h2>
        <p className="text-sm">Home of the social media team</p>
      </div>
      <div>
        <p className="text-sm">Created on 18th October 2019</p>
      </div>
    </div>
  );
  const items = [
    {
      key: "1",
      label: "About",
      children: aboutContent,
    },
    {
      key: "2",
      label: "Members",
      children: (
        <div className="flex flex-col bg-base-200 p-2 rounded-md space-y-4 text-gray-500">
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
      ),
    },
    {
      key: "3",
      label: "Organizations",
      children: <p>Adding Soon</p>,
    },
    {
      key: "4",
      label: "Pinned Items",
      children: <p>Adding Soon</p>,
    },
    {
      key: "5",
      label: "Shortcuts",
      children: <p>Adding Soon</p>,
    },
    {
      key: "6",
      label: "Shred Files",
      children: <p>Adding Soon</p>,
    },
  ];
  return (
    <>
      <div className=" flex flex-col gap-5 relative h-[100vh] max-h-[100vh]">
        <div className="">
          <div className="border-b-[.5px] border-b-gray-300 h-16 flex justify-between items-center px-5">
            <div>
              <h2 className="font-semibold">Details</h2>
              <p className="text-sm text-gray-500">#Social Media</p>
            </div>
            <RxCross2 className="size-6 text-gray-500 cursor-pointer" />
          </div>
          <div className="border-b-[.5px] border-b-gray-300 flex justify-between items-center p-5 ">
            <div className="flex flex-col items-center justify-center">
              <IoPersonAddOutline className="size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]" />
              <span className="text-sm ">Add</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <MdFindInPage className="size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]" />
              <span className="text-sm ">Find</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <IoMdCall className="size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]" />
              <span className="text-sm ">Call</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <IoIosMore className="size-10 text-gray-500 cursor-pointer bg-gray-200 p-2 rounded-[50%]" />
              <span className="text-sm ">More</span>
            </div>
          </div>
          <div className="">
            <Collapse
              bordered={false}
              accordion
              className="!bg-base-100"
              items={items}
              expandIconPosition="end"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoSpaceRightBar;
