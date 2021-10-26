import React, { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import AddEditUnits from "./AddEditUnits";

const fakeUnits = [
  {
    UnitID: 13123,
    noOfBedRooms: 2,
    noOfBathRooms: 1,
    area: 345,
    rent: 876,
    imageLink: "",
  },
  {
    UnitID: 16183,
    noOfBedRooms: 3,
    noOfBathRooms: 2.5,
    area: 1012,
    rent: 1199,
    imageLink: "",
  },
  {
    UnitID: 15876,
    noOfBedRooms: 1,
    noOfBathRooms: 1,
    area: 220,
    rent: 600,
    imageLink: "",
  },
];

const Unit = ({ unit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-3 border bg-purple-200 rounded shadow-md flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-3">
        <div className="flex justify-between items-center gap-2">
          <p className="text-base font-semibold"># of BedRooms</p>
          <p className="font-semibold text-blue-600 text-2xl">
            {unit.noOfBedRooms}
          </p>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-base font-semibold"># of BathRooms</p>
          <p className="font-semibold text-blue-600 text-2xl">
            {unit.noOfBathRooms}
          </p>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-base font-semibold">Area</p>
          <p className="font-semibold text-blue-600 text-2xl">{unit.area}</p>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-base font-semibold">Rent</p>
          <p className="font-semibold text-blue-600 text-2xl">{unit.rent}</p>
        </div>

        {isModalOpen ? (
          <AddEditUnits
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            unit={unit}
          />
        ) : (
          <></>
        )}
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
    </div>
  );
};

export default function Units({ label }) {
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
          <p>Add new unit</p>
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {fakeUnits.map((unit) => (
          <Unit unit={unit} />
        ))}
      </div>

      {isModalOpen ? (
        <AddEditUnits
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          unit={null}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
