import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { BsPencil, BsTrash } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
import AddEditParkingLots from "./AddEditParkingLot";

const fakeParkingLots = [
  {
    ParkingLotID: 13123,
    class: "Regular",
    parkingTagNumber: "1A",
    ResidentID: 231233,
  },
  {
    ParkingLotID: 14205,
    class: "VIP",
    parkingTagNumber: "5B",
    ResidentID: null,
  },
];

const ParkingLot = ({ parking }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`flex flex-col gap-3 p-3 border ${
        parking.ResidentID ? "bg-red-600 " : "bg-green-500  shadow-md"
      } rounded text-white`}
    >
      <div className="flex items-center gap-1">
        <BiCategory className="text-xl" />
        <p className="text-base font-medium">{parking.class}</p>
      </div>

      <div className="flex items-center gap-1">
        <FaTag className="text-xl" />
        <p className="font-semibold text-2xl">{parking.parkingTagNumber}</p>
      </div>

      <div className="flex justify-end items-center gap-5">
        <BsPencil
          onClick={() => {
            setIsModalOpen(true);
          }}
          className=" text-white text-xl cursor-pointer"
        />
        <BsTrash className=" text-white text-xl cursor-pointer" />
      </div>

      {isModalOpen ? (
        <AddEditParkingLots
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          parking={parking}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default function Parking({ label }) {
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
          <p>Add new parking lot</p>
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {fakeParkingLots.map((parking) => (
          <ParkingLot parking={parking} />
        ))}
      </div>

      {isModalOpen ? (
        <AddEditParkingLots
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          parking={null}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
