import React, { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { BsPencil, BsTrash } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import AddEditDepartment from "./AddEditDepartment";

const fakeDepartments = [
  {
    departmentID: 15424,
    departmentName: "Electrical",
  },
  {
    departmentID: 75864,
    departmentName: "Plumbing",
  },
  {
    departmentID: 21457,
    departmentName: "Carpenter",
  },
  {
    departmentID: 56784,
    departmentName: "General",
  },
  {
    departmentID: 35144,
    departmentName: "Painter",
  },
];

const DepartmentCard = ({ department }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-3 border bg-purple-200 rounded shadow-md">
      <div className="flex items-center gap-1">
        <BiCategory className="text-xl" />
        <p className="text-base font-semibold">{department.departmentName}</p>
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
        <AddEditDepartment
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          department={department}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default function Department({ label }) {
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
          <p>Add new department</p>
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {fakeDepartments.map((department) => (
          <DepartmentCard department={department} />
        ))}
      </div>

      {isModalOpen ? (
        <AddEditDepartment
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          department={null}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
