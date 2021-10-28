import React, { useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import { MdAddCircleOutline, MdOutlineCategory } from "react-icons/md";
import AddEditPhotoCategory from "./AddEditPhotoCategory";
import ViewPhotosModal from "./ViewPhotosModal";

import { AiOutlineEye } from "react-icons/ai";

const photoCategories = [
  {
    categoryName: "Apartment",
  },
  {
    categoryName: "Community",
  },
  {
    categoryName: "Recreation",
  },
];

const Category = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isViewPhotoModalOpen, setIsViewPhotoModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-3 border bg-purple-200 rounded shadow-md">
      <div className="flex items-center gap-1">
        <MdOutlineCategory className="text-xl" />
        <p className="text-base">{category.categoryName}</p>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <AiOutlineEye
            onClick={() => {
              setIsViewPhotoModalOpen(true);
            }}
            className=" text-indigo-600 text-xl cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <BsPencil
            onClick={() => {
              setIsModalOpen(true);
            }}
            className=" text-blue-900 text-xl cursor-pointer"
          />
          <BsTrash className=" text-red-600 text-xl cursor-pointer" />
        </div>
      </div>

      {isViewPhotoModalOpen ? (
        <ViewPhotosModal
          isModalOpen={isViewPhotoModalOpen}
          setIsModalOpen={setIsViewPhotoModalOpen}
          category={category}
        />
      ) : (
        <></>
      )}

      {isModalOpen ? (
        <AddEditPhotoCategory
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          category={category}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default function Photos({ label }) {
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
          <p>Add new photo category</p>
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {photoCategories.map((category) => (
          <Category category={category} />
        ))}
      </div>

      {isModalOpen ? (
        <AddEditPhotoCategory
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          category={null}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
