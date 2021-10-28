import React, { useState } from "react";
import { MdAddCircleOutline, MdDateRange } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { BsPencil, BsTrash, BsCardHeading } from "react-icons/bs";
import AddEditAnnouncements from "./AddEditAnnouncements";

const announcements = [
  {
    title: "Hurricane Advisory",
    description:
      "All the residents are hereby informed to be careful due to the hurricane in Denton.",
    dateAndTime: "21-Oct-2021",
  },
  {
    title: "Strom Advisory",
    description: "Heavy strom in denton.",
    dateAndTime: "05-May-2021",
  },
];

const Announcement = ({ announcement }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-3 border bg-purple-200 rounded shadow-md">
      <div className="flex items-center gap-1">
        <BsCardHeading className="text-xl" />
        <p className="font-semibold text-2xl">{announcement.title}</p>
      </div>

      <div className="flex items-center gap-1">
        <BiBookContent className="text-xl" />
        <p className="text-base">{announcement.description}</p>
      </div>

      <div className="flex items-center gap-1">
        <MdDateRange className="text-xl" />
        <p className="text-sm">{announcement.dateAndTime}</p>
      </div>

      <div className="flex justify-end items-center gap-5">
        <BsPencil
          onClick={() => {
            setIsModalOpen(true);
          }}
          className=" text-blue-900 text-xl cursor-pointer"
        />
        <BsTrash className=" text-red-600 text-xl cursor-pointer" />
      </div>

      {isModalOpen ? (
        <AddEditAnnouncements
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          announcement={announcement}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default function Announcements({ label }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex p-8 flex-col gap-10 w-full">
      <div className="flex w-full items-center justify-between">
        <p className="text-2xl font-semibold">{label}</p>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="flex items-center gap-1 px-3 py-2 bg-purple-900 text-white text-base rounded"
        >
          <MdAddCircleOutline />
          <p>Add new announcement</p>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {announcements.map((announcement) => (
          <Announcement announcement={announcement} />
        ))}
      </div>

      {isModalOpen ? (
        <AddEditAnnouncements
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          announcement={null}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
