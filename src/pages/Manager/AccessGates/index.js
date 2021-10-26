import React, { useState } from "react";
import { MdAddCircleOutline, MdOutlineLocationOn } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsPencil, BsTrash } from "react-icons/bs";
import AddEditAccessGate from "./AddEditAccessGate";

const fakeTestingGates = [
  {
    gateID: 13123,
    gateName: "South main",
    accessCode: 1243,
  },
  {
    gateID: 17856,
    gateName: "North back",
    accessCode: 8795,
  },
  {
    gateID: 16546,
    gateName: "East wing",
    accessCode: 5210,
  },
  {
    gateID: 25478,
    gateName: "West wing",
    accessCode: 6935,
  },
];

const Gate = ({ gate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-3 border bg-purple-200 rounded shadow-md">
      <div className="flex items-center gap-1">
        <MdOutlineLocationOn className="text-xl" />
        <p className="text-base">{gate.gateName}</p>
      </div>

      <div className="flex items-center gap-1">
        <RiLockPasswordLine className="text-xl" />
        <p className="font-semibold text-2xl">{gate.accessCode}</p>
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
        <AddEditAccessGate
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          gate={gate}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default function AccessGates({ label }) {
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
          <p>Add new gate</p>
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {fakeTestingGates.map((gate) => (
          <Gate gate={gate} />
        ))}
      </div>

      {isModalOpen ? (
        <AddEditAccessGate
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          gate={null}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
